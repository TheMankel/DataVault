import { Box, Table, TableContainer, TablePagination } from '@mui/material';
import EnhancedTableToolbar from 'Components/Utils/Table/EnhancedTableToolbar/EnhancedTableToolbar';
import EnhancedTableHead from 'Components/Utils/Table/EnhancedTableHead/EnhancedTableHead';
import EnhancedTableBody from 'Components/Utils/Table/EnhancedTableBody/EnhancedTableBody';
import usePersonalDataTable from './hooks/usePersonalDataTable';
import { VaultData } from 'Types/PersonalDataType';
import { useAppSelector } from 'Store/hooks';

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

const headCells: readonly HeadCell[] = [
  {
    id: 'id',
    numeric: false,
    disablePadding: true,
    label: 'ID',
  },
  {
    id: 'firstname',
    numeric: false,
    disablePadding: false,
    label: 'Firstname',
  },
  {
    id: 'surname',
    numeric: false,
    disablePadding: false,
    label: 'Surname',
  },
  {
    id: 'date_of_birth',
    numeric: false,
    disablePadding: false,
    label: 'Date of birth',
  },
  {
    id: 'about_you',
    numeric: false,
    disablePadding: false,
    label: 'About you',
  },
];

const PersonalDataTable = () => {
  const people = useAppSelector((state) => state.vault);
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
  } = usePersonalDataTable(people);

  return (
    <Box sx={{ width: '100%' }}>
      <EnhancedTableToolbar
        label='Vault Data'
        numSelected={selected.length}
        handleDelete={handleDelete}
      />
      <TableContainer>
        <Table
          sx={{ minWidth: 750, maxHeight: 1000 }}
          aria-labelledby='VaultTable'>
          <EnhancedTableHead
            headCells={headCells}
            numSelected={selected.length}
            order={order}
            orderBy={orderBy}
            onSelectAllClick={handleSelectAllClick}
            onRequestSort={handleRequestSort}
            rowCount={people.length}
          />
          <EnhancedTableBody
            emptyRows={emptyRows}
            visibleRows={visibleRows}
            selected={selected}
            handleSelected={setSelected}
          />
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[5, 10, 25]}
        component='div'
        count={people.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Box>
  );
};

export default PersonalDataTable;
