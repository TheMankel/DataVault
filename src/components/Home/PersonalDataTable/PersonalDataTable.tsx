import {
  Box,
  Table,
  TableContainer,
  TablePagination,
  useMediaQuery,
} from '@mui/material';
import EnhancedTableToolbar from 'Components/Utils/Table/EnhancedTableToolbar/EnhancedTableToolbar';
import EnhancedTableHead from 'Components/Utils/Table/EnhancedTableHead/EnhancedTableHead';
import EnhancedTableBody from 'Components/Utils/Table/EnhancedTableBody/EnhancedTableBody';
import usePersonalDataTable from './hooks/usePersonalDataTable';
import { VaultData } from 'Types/PersonalDataType';
import { useAppSelector } from 'Store/hooks';
import EnhancedFiltering from 'Components/Utils/Table/EnhancedFiltering/EnhancedFiltering';

// function createData(
//   id: string,
//   firstname: string,
//   surname: string,
//   date_of_birth: string,
//   about_you: string,
// ): VaultData {
//   return {
//     id,
//     firstname,
//     surname,
//     date_of_birth,
//     about_you,
//   };
// }

// const rows = [
//   createData(
//     '1',
//     'John',
//     'Doe',
//     new Date('1990-01-01').toISOString(),
//     'I am a software engineer.',
//   ),
//   createData(
//     '2',
//     'Alice',
//     'Smith',
//     new Date('1985-05-15').toISOString(),
//     'I love traveling.',
//   ),
//   createData(
//     '3',
//     'Bob',
//     'Johnson',
//     new Date('1998-11-30').toISOString(),
//     'I enjoy playing guitar.',
//   ),
//   createData(
//     '4',
//     'Emily',
//     'Williams',
//     new Date('1993-08-22').toISOString(),
//     'I am a bookworm.',
//   ),
//   createData(
//     '5',
//     'Michael',
//     'Brown',
//     new Date('1976-03-10').toISOString(),
//     'I am a chef.',
//   ),
//   createData(
//     '6',
//     'Sophia',
//     'Lee',
//     new Date('2000-06-25').toISOString(),
//     'I am a painter.',
//   ),
//   createData(
//     '7',
//     'William',
//     'Martin',
//     new Date('1982-09-17').toISOString(),
//     'I am a nature enthusiast.',
//   ),
//   createData(
//     '8',
//     'Olivia',
//     'Taylor',
//     new Date('1995-12-05').toISOString(),
//     'I love photography.',
//   ),
//   createData(
//     '9',
//     'James',
//     'Anderson',
//     new Date('1991-04-18').toISOString(),
//     'I am a fitness freak.',
//   ),
//   createData(
//     '10',
//     'Emma',
//     'Clark',
//     new Date('1988-07-12').toISOString(),
//     'I am a movie buff.',
//   ),
//   createData(
//     '11',
//     'Alexander',
//     'Rodriguez',
//     new Date('1997-02-08').toISOString(),
//     'I am a foodie.',
//   ),
//   createData(
//     '12',
//     'Ava',
//     'White',
//     new Date('1983-10-29').toISOString(),
//     'I enjoy gardening.',
//   ),
//   createData(
//     '13',
//     'Daniel',
//     'Lopez',
//     new Date('2002-12-14').toISOString(),
//     'I am a gamer.',
//   ),
// ];

interface HeadCell {
  disablePadding: boolean;
  id: keyof VaultData;
  label: string;
  numeric: boolean;
}

const PersonalDataTable = () => {
  const matches = useMediaQuery('(min-width:400px)');
  const tableHeads = useAppSelector(
    (state) => state.language.dataTable.tableHeads,
  );
  const dataTitle = useAppSelector(
    (state) => state.language.dataTable.data_title,
  );
  const rowsPerPageLabel = useAppSelector(
    (state) => state.language.dataTable.rows_per_page,
  );
  const {
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
  } = usePersonalDataTable();

  const headCells: readonly HeadCell[] = Object.keys(tableHeads).map((head) => {
    return {
      id: head as keyof VaultData,
      numeric: false,
      disablePadding: head === 'id' ? true : false,
      label: tableHeads[head as keyof VaultData],
    };
  });

  return (
    <Box
      sx={{
        width: '100%',
        border: '1px solid',
        borderColor: 'divider',
        borderRadius: 1,
      }}>
      <EnhancedTableToolbar
        label={dataTitle}
        numSelected={selected.length}
        filterValue={filterValue}
        handleDelete={handleDelete}
        handleEdit={handleEdit}
        handleOpenFilter={handleOpenFilter}
      />
      <TableContainer>
        <Table
          sx={{
            minWidth: 750,
            maxHeight: 1000,
            borderTop: '1px solid',
            borderColor: 'divider',
          }}
          aria-labelledby='VaultTable'>
          <EnhancedTableHead
            headCells={headCells}
            numSelected={selected.length}
            order={order}
            orderBy={orderBy}
            onSelectAllClick={handleSelectAllClick}
            onRequestSort={handleRequestSort}
            rowCount={visibleRows.length}
          />
          <EnhancedTableBody
            emptyRows={emptyRows}
            visibleRows={visibleRows}
            selected={selected}
            handleSelected={setSelected}
            anchorFilterEl={anchorFilterEl}
          />
        </Table>
      </TableContainer>
      <EnhancedFiltering
        open={openFilter}
        anchorEl={anchorFilterEl}
        onClose={handleCloseFilter}
        selectedFilterCol={selectedFilterCol}
        filterValue={filterValue}
        handleFilter={handleFilter}
        handleSelectFilterCol={handleSelectFilterCol}
      />
      <TablePagination
        rowsPerPageOptions={[5, 10, 25]}
        component='div'
        count={visibleRows.length}
        rowsPerPage={rowsPerPage}
        labelRowsPerPage={matches && rowsPerPageLabel}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Box>
  );
};

export default PersonalDataTable;
