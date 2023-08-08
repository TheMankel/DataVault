import { useMemo, useState } from 'react';
import { VaultData } from 'Types/PersonalDataType';
import getComparator from 'Helpers/compare';
import { useAppDispatch } from 'Store/hooks';
import { removeVaultData } from 'Features/vaultData';

const usePersonalDataTable = (rows: VaultData[]) => {
  const dispatch = useAppDispatch();
  const [order, setOrder] = useState<'asc' | 'desc'>('asc');
  const [orderBy, setOrderBy] = useState<string>('id');
  const [selected, setSelected] = useState<readonly string[]>([]);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;

  const visibleRows = useMemo(
    () =>
      rows
        .slice()
        .sort(getComparator(order, orderBy))
        .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage),
    [order, orderBy, page, rowsPerPage, rows],
  );

  const handleRequestSort = (
    event: React.MouseEvent<unknown>,
    property: string,
  ) => {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
  };

  const handleSelectAllClick = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.checked) {
      const newSelected = rows.map((n) => n.id);
      setSelected(newSelected);
      return;
    }
    setSelected([]);
  };

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const handleDelete = () => {
    console.log(selected);
    dispatch(removeVaultData(selected));
    setSelected([]);
  };

  return {
    order,
    orderBy,
    selected,
    setSelected,
    page,
    rowsPerPage,
    emptyRows,
    visibleRows,
    handleRequestSort,
    handleSelectAllClick,
    handleChangePage,
    handleChangeRowsPerPage,
    handleDelete,
  };
};

export default usePersonalDataTable;
