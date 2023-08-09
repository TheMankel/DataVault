import { ChangeEvent } from 'react';
import { TableHead, TableRow, TableCell, Checkbox } from '@mui/material';
import TableHeadCell from '../TableHeadCell/TableHeadCell';

interface HeadCell {
  disablePadding: boolean;
  id: string;
  label: string;
  numeric: boolean;
}

interface EnhancedTableProps {
  headCells: readonly HeadCell[];
  numSelected: number;
  onRequestSort: (property: string) => void;
  onSelectAllClick: (event: ChangeEvent<HTMLInputElement>) => void;
  order: 'asc' | 'desc';
  orderBy: string;
  rowCount: number;
}

const EnhancedTableHead = ({
  headCells,
  onSelectAllClick,
  order,
  orderBy,
  numSelected,
  rowCount,
  onRequestSort,
}: EnhancedTableProps) => {
  const createSortHandler = (property: string) => {
    onRequestSort(property);
  };

  return (
    <TableHead>
      <TableRow>
        <TableCell padding='checkbox'>
          <Checkbox
            color='primary'
            indeterminate={numSelected > 0 && numSelected < rowCount}
            checked={rowCount > 0 && numSelected === rowCount}
            onChange={onSelectAllClick}
            inputProps={{
              'aria-label': 'select all desserts',
            }}
          />
        </TableCell>
        {headCells.map((headCell) => (
          <TableHeadCell
            key={headCell.id}
            disablePadding={headCell.disablePadding}
            id={headCell.id}
            label={headCell.label}
            numeric={headCell.numeric}
            order={order}
            orderBy={orderBy}
            handleSort={() => createSortHandler(headCell.id)}
          />
        ))}
      </TableRow>
    </TableHead>
  );
};

export default EnhancedTableHead;
