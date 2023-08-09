import { useMemo, useState, useRef, MouseEvent, ChangeEvent } from 'react';
import { VaultData } from 'Types/PersonalDataType';
import getComparator from 'Helpers/compare';
import { useAppSelector, useAppDispatch } from 'Store/hooks';
import { removeVaultData } from 'Features/vaultData/vaultData';

const usePersonalDataTable = () => {
  const dispatch = useAppDispatch();
  const people = useAppSelector((state) => state.vault);
  const [order, setOrder] = useState<'asc' | 'desc'>('asc');
  const [orderBy, setOrderBy] = useState<string>('id');
  const [selected, setSelected] = useState<readonly string[]>([]);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const anchorFilterEl = useRef<HTMLTableSectionElement | null>(null);
  const [openFilter, setOpenFilter] = useState<boolean>(false);
  const [selectedFilterCol, setSelectedFilterCol] = useState<string>('id');
  const [filterValue, setFilterValue] = useState<string>('');
  const [vaultData, setVaultData] = useState<VaultData[]>(people);

  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - vaultData.length) : 0;

  const visibleRows = useMemo(
    () =>
      vaultData
        .slice()
        .sort(getComparator(order, orderBy))
        .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage),
    [order, orderBy, page, rowsPerPage, vaultData],
  );

  const handleRequestSort = (property: string) => {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
  };

  const handleSelectAllClick = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.checked) {
      const newSelected = vaultData.map((n) => n.id);
      setSelected(newSelected);
      return;
    }
    setSelected([]);
  };

  const handleChangePage = (
    e: MouseEvent<HTMLButtonElement> | null,
    newPage: number,
  ) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (e: ChangeEvent<HTMLInputElement>) => {
    setRowsPerPage(parseInt(e.target.value, 10));
    setPage(0);
  };

  const handleDelete = () => {
    console.log(selected);
    dispatch(removeVaultData(selected));
    setSelected([]);
  };

  const handleEdit = () => {
    console.log(selected);
  };

  const handleFilter = (e: ChangeEvent<HTMLInputElement>) => {
    setFilterValue(e.target.value);

    const filter = {
      id: selectedFilterCol as keyof VaultData,
      value: e.target.value,
    };
    console.log(filter);

    const filteredData = people.filter((data) =>
      data[filter.id].includes(filter.value),
    );

    setVaultData(filteredData);
  };

  const handleOpenFilter = () => {
    console.log('open');
    if (people.length) setOpenFilter(true);
  };

  const handleCloseFilter = (e: MouseEvent<HTMLElement>) => {
    console.log('close');
    setOpenFilter(false);
    if (e.currentTarget.tagName === 'BUTTON') {
      setVaultData(people);
      setFilterValue('');
      setSelectedFilterCol('id');
    }
  };

  const handleSelectFilterCol = (id: string) => {
    console.log(id);
    setSelectedFilterCol(id);
    setFilterValue('');
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
    openFilter,
    anchorFilterEl,
    handleOpenFilter,
    handleCloseFilter,
    selectedFilterCol,
    filterValue,
    handleFilter,
    handleSelectFilterCol,
    handleEdit,
  };
};

export default usePersonalDataTable;
