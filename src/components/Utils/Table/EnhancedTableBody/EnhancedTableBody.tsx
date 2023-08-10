import { Dispatch, SetStateAction, MutableRefObject } from 'react';
import { TableBody, TableRow, TableCell, Box } from '@mui/material';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import EnhancedTableRow from '../EnhancedTableRow/EnhancedTableRow';
import { useAppSelector } from 'Store/hooks';

interface IEnhancedTableBodyProps<T> {
  emptyRows: number;
  visibleRows: T[];
  selected: readonly string[];
  handleSelected: Dispatch<SetStateAction<readonly string[]>>;
  anchorFilterEl: MutableRefObject<HTMLTableSectionElement | null>;
}

const EnhancedTableBody = <T extends { id: string }>({
  emptyRows,
  visibleRows,
  selected,
  handleSelected,
  anchorFilterEl,
}: IEnhancedTableBodyProps<T>) => {
  const message = useAppSelector((state) => state.language.dataTable.message);

  const isSelected = (name: string) => selected.indexOf(name) !== -1;

  const handleClick = (name: string) => {
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

  if (!visibleRows.length)
    return (
      <TableBody ref={anchorFilterEl}>
        <TableRow>
          <TableCell id='no-data' colSpan={6} align='center'>
            <Box
              display='flex'
              justifyContent='center'
              alignItems='center'
              gap={1}>
              <InfoOutlinedIcon fontSize='small' />
              {message}
            </Box>
          </TableCell>
        </TableRow>
      </TableBody>
    );

  return (
    <>
      <TableBody ref={anchorFilterEl}>
        {visibleRows.map((row, index) => {
          const isItemSelected = isSelected(row.id);
          const labelId = `checkbox-${index}`;

          return (
            <EnhancedTableRow
              key={row.id}
              row={row}
              isSelected={isItemSelected}
              labelId={labelId}
              handleClick={() => handleClick(row.id)}
            />
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
    </>
  );
};

export default EnhancedTableBody;
