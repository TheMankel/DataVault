import React from 'react';
import {
  TableHead,
  TableRow,
  TableCell,
  Checkbox,
  Box,
  TableSortLabel,
} from '@mui/material';
import { visuallyHidden } from '@mui/utils';
import { PersonalDataType } from 'Types/PersonalDataType';

// interface Data {
//   calories: number;
//   carbs: number;
//   fat: number;
//   name: string;
//   protein: number;
// }

interface HeadCell {
  disablePadding: boolean;
  id: keyof PersonalDataType;
  label: string;
  numeric: boolean;
}

interface EnhancedTableProps {
  headCells: readonly HeadCell[];
  numSelected: number;
  onRequestSort: (
    event: React.MouseEvent<unknown>,
    property: keyof PersonalDataType,
  ) => void;
  onSelectAllClick: (event: React.ChangeEvent<HTMLInputElement>) => void;
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
  const createSortHandler =
    (property: keyof PersonalDataType) =>
    (event: React.MouseEvent<unknown>) => {
      onRequestSort(event, property);
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
          <TableCell
            key={headCell.id}
            align={headCell.numeric ? 'right' : 'left'}
            padding={headCell.disablePadding ? 'none' : 'normal'}
            sortDirection={orderBy === headCell.id ? order : false}>
            <TableSortLabel
              active={orderBy === headCell.id}
              direction={orderBy === headCell.id ? order : 'asc'}
              onClick={createSortHandler(headCell.id)}>
              {headCell.label}
              {orderBy === headCell.id ? (
                <Box component='span' sx={visuallyHidden}>
                  {order === 'desc' ? 'sorted descending' : 'sorted ascending'}
                </Box>
              ) : null}
            </TableSortLabel>
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
};

export default EnhancedTableHead;
