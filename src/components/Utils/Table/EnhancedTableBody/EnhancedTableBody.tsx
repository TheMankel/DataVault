import { TableBody, TableRow, TableCell, Checkbox, Box } from '@mui/material';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import { VaultData } from 'Types/PersonalDataType';
import stringFormat from 'Helpers/stringFormat';

interface EnhancedTableBodyProps {
  emptyRows: number;
  visibleRows: VaultData[];
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

  console.log(visibleRows);

  if (!visibleRows.length)
    return (
      <TableBody>
        <TableRow>
          <TableCell id='no-data' colSpan={6} align='center'>
            <Box
              display='flex'
              justifyContent='center'
              alignItems='center'
              gap={1}>
              <InfoOutlinedIcon />
              No records found
            </Box>
          </TableCell>
        </TableRow>
      </TableBody>
    );

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
            <TableCell
              component='th'
              id={labelId}
              scope='row'
              padding='checkbox'>
              <Checkbox
                color='primary'
                checked={isItemSelected}
                inputProps={{
                  'aria-labelledby': labelId,
                }}
              />
            </TableCell>
            <TableCell id='id' padding='none'>
              {stringFormat(row.id)}
            </TableCell>
            <TableCell id='firstname'>{row.firstname}</TableCell>
            <TableCell id='surname'>{row.surname}</TableCell>
            <TableCell id='date_of_birth'>
              {row.date_of_birth.substring(0, 10)}
            </TableCell>
            <TableCell id='about_you'>{stringFormat(row.about_you)}</TableCell>
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
