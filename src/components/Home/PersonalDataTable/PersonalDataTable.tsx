import { Box, Table, TableContainer, TablePagination } from '@mui/material';
import { useMediaQuery } from '@mui/material';
import EnhancedTableToolbar from 'Components/Utils/Table/EnhancedTableToolbar/EnhancedTableToolbar';
import EnhancedTableHead from 'Components/Utils/Table/EnhancedTableHead/EnhancedTableHead';
import EnhancedTableBody from 'Components/Utils/Table/EnhancedTableBody/EnhancedTableBody';
import usePersonalDataTable from './hooks/usePersonalDataTable';
import { VaultData } from 'Types/PersonalDataType';
import { useAppSelector } from 'Store/hooks';
import EnhancedFiltering from 'Components/Utils/Table/EnhancedFiltering/EnhancedFiltering';
import Modal from 'Components/Utils/Modal/Modal';
import PersonalDataForm from '../PersonalDataForm/PersonalDataForm';

interface IHeadCell {
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
    vaultData,
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
    isModalOpen,
    handleCloseEdit,
    handleSelectedEdit,
  } = usePersonalDataTable();

  const headCells: readonly IHeadCell[] = Object.keys(tableHeads).map(
    (head) => {
      return {
        id: head as keyof VaultData,
        numeric: false,
        disablePadding: head === 'id' ? true : false,
        label: tableHeads[head as keyof VaultData],
      };
    },
  );

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
      <TableContainer
        sx={{
          maxHeight: 323,
        }}>
        <Table
          aria-labelledby='VaultTable'
          sx={{
            minWidth: 750,
            borderTop: '1px solid',
            borderColor: 'divider',
          }}>
          <EnhancedTableHead
            headCells={headCells}
            numSelected={selected.length}
            order={order}
            orderBy={orderBy}
            onSelectAllClick={handleSelectAllClick}
            onRequestSort={handleRequestSort}
            rowCount={vaultData.length}
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
        count={vaultData.length}
        rowsPerPage={rowsPerPage}
        labelRowsPerPage={matches && rowsPerPageLabel}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
        sx={{
          borderTop: '1px solid',
          borderColor: 'divider',
        }}
      />
      <Modal
        title='Edit data'
        description='Update all of selected user data'
        isModalOpen={isModalOpen}
        closeModal={handleCloseEdit}>
        <Box p={3}>
          <PersonalDataForm
            edit={true}
            dataToEdit={handleSelectedEdit()}
            cancelEdit={handleCloseEdit}
          />
        </Box>
      </Modal>
    </Box>
  );
};

export default PersonalDataTable;
