import { Box, TableCell, TableSortLabel } from '@mui/material';
import { visuallyHidden } from '@mui/utils';

interface IHeadCellProps {
  disablePadding: boolean;
  id: string;
  label: string;
  numeric: boolean;
  order?: 'asc' | 'desc';
  orderBy: string;
  handleSort: (e: React.MouseEvent<HTMLSpanElement>) => void;
}

const TableHeadCell = ({
  disablePadding,
  id,
  label,
  numeric,
  order = 'asc',
  orderBy,
  handleSort,
}: IHeadCellProps) => {
  return (
    <TableCell
      key={id}
      align={numeric ? 'right' : 'left'}
      padding={disablePadding ? 'none' : 'normal'}
      sortDirection={orderBy === id ? order : false}>
      <TableSortLabel
        id={id}
        active={orderBy === id}
        direction={orderBy === id ? order : 'asc'}
        onClick={handleSort}>
        {label}
        {orderBy === id && (
          <Box component='span' sx={visuallyHidden}>
            {order === 'desc' ? 'sorted descending' : 'sorted ascending'}
          </Box>
        )}
      </TableSortLabel>
    </TableCell>
  );
};

export default TableHeadCell;
