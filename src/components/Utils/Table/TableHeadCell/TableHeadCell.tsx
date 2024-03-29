import { Box, TableCell, TableSortLabel } from '@mui/material';
import { visuallyHidden } from '@mui/utils';

interface IHeadCellProps {
  disablePadding: boolean;
  id: string;
  label: string;
  numeric: boolean;
  order?: 'asc' | 'desc';
  orderBy: string;
  handleSort: (property: string) => void;
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
      id={id}
      align={numeric ? 'right' : 'left'}
      padding={disablePadding ? 'none' : 'normal'}
      sortDirection={orderBy === id ? order : false}
      sx={{
        borderBottom: '1px solid',
        borderColor: 'divider',
      }}>
      <TableSortLabel
        active={orderBy === id}
        direction={orderBy === id ? order : 'asc'}
        onClick={() => handleSort(id)}>
        {label}
        {orderBy === id ? (
          <Box component='span' sx={visuallyHidden}>
            {order === 'desc' ? 'sorted descending' : 'sorted ascending'}
          </Box>
        ) : null}
      </TableSortLabel>
    </TableCell>
  );
};

export default TableHeadCell;
