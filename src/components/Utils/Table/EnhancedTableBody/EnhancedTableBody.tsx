import { TableBody, TableRow, TableCell, Checkbox } from '@mui/material';
import { PersonalDataType } from 'Types/PersonalDataType';
import dateFormat from 'Helpers/dateFormat';
import stringFormat from 'Helpers/stringFormat';

// interface Data {
//   calories: number;
//   carbs: number;
//   fat: number;
//   name: string;
//   protein: number;
// }

interface EnhancedTableBodyProps {
  emptyRows: number;
  visibleRows: PersonalDataType[];
  selected: readonly string[];
  handleSelected: React.Dispatch<React.SetStateAction<readonly string[]>>;
}

const EnhancedTableBody = ({
  emptyRows,
  visibleRows,
  selected,
  handleSelected,
}: EnhancedTableBodyProps) => {
  const isSelected = (name: string) => selected.indexOf(name) !== -1;

  const handleClick = (event: React.MouseEvent<unknown>, name: string) => {
    const selectedIndex = selected.indexOf(name);
    let newSelected: readonly string[] = [];

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, name);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1),
      );
    }

    handleSelected(newSelected);
  };

  return (
    <TableBody>
      {visibleRows.map((row, index) => {
        const isItemSelected = isSelected(row.id);
        const labelId = `enhanced-table-checkbox-${index}`;

        return (
          <TableRow
            hover
            onClick={(event) => handleClick(event, row.id)}
            role='checkbox'
            aria-checked={isItemSelected}
            tabIndex={-1}
            key={row.id}
            selected={isItemSelected}
            sx={{ cursor: 'pointer' }}>
            <TableCell padding='checkbox'>
              <Checkbox
                color='primary'
                checked={isItemSelected}
                inputProps={{
                  'aria-labelledby': labelId,
                }}
              />
            </TableCell>
            <TableCell component='th' id={labelId} scope='row' padding='none'>
              {row.id}
            </TableCell>
            <TableCell>{row.firstname}</TableCell>
            <TableCell>{row.surname}</TableCell>
            <TableCell>{dateFormat(row.date_of_birth)}</TableCell>
            <TableCell>{stringFormat(row.about_you)}</TableCell>
          </TableRow>
        );
      })}
      {emptyRows > 0 && (
        <TableRow
          style={{
            height: 53 * emptyRows,
          }}>
          <TableCell colSpan={6} />
        </TableRow>
      )}
    </TableBody>
  );
};

export default EnhancedTableBody;
