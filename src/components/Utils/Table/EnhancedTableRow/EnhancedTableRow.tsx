import { TableRow, TableCell, Checkbox } from '@mui/material';
import stringFormat from 'Helpers/stringFormat';

interface IEnhancedTableRowProps {
  row: Record<string, string>;
  isSelected: boolean;
  labelId: string;
  handleClick: (name: string) => void;
}

const EnhancedTableRow = ({
  row,
  isSelected,
  labelId,
  handleClick,
}: IEnhancedTableRowProps) => {
  return (
    <TableRow
      hover
      onClick={() => handleClick(row.id)}
      role='checkbox'
      aria-checked={isSelected}
      tabIndex={-1}
      selected={isSelected}
      sx={{ cursor: 'pointer' }}>
      <TableCell component='th' id={labelId} scope='row' padding='checkbox'>
        <Checkbox
          color='primary'
          checked={isSelected}
          inputProps={{
            'aria-labelledby': labelId,
          }}
        />
      </TableCell>
      {Object.keys(row).map((cell) => (
        <TableCell
          key={cell}
          padding={cell === 'id' ? 'none' : 'normal'}
          id={cell}>
          {stringFormat(row[cell])}
        </TableCell>
      ))}
    </TableRow>
  );
};

export default EnhancedTableRow;
