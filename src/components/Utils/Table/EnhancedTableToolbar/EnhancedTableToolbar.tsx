import { Toolbar, Typography, Tooltip, IconButton, Badge } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import FilterListIcon from '@mui/icons-material/FilterList';
import { alpha } from '@mui/material/styles';
import { useAppSelector } from 'Store/hooks';

interface EnhancedTableToolbarProps {
  label: string;
  numSelected: number;
  filterValue: string;
  handleDelete: () => void;
  handleEdit: () => void;
  handleOpenFilter: () => void;
}
const EnhancedTableToolbar = ({
  label,
  numSelected,
  filterValue,
  handleDelete,
  handleEdit,
  handleOpenFilter,
}: EnhancedTableToolbarProps) => {
  const toolbarActions = useAppSelector(
    (state) => state.language.dataTable.toolbar,
  );

  return (
    <Toolbar
      sx={{
        pl: { sm: 2 },
        pr: { xs: 1, sm: 1 },
        ...(numSelected > 0 && {
          bgcolor: (theme) =>
            alpha(
              theme.palette.primary.main,
              theme.palette.action.activatedOpacity,
            ),
        }),
      }}>
      {numSelected > 0 ? (
        <Typography
          sx={{ flex: '1 1 100%' }}
          color='inherit'
          variant='subtitle1'
          component='div'>
          {numSelected} selected
        </Typography>
      ) : (
        <Typography
          sx={{ flex: '1 1 100%' }}
          variant='h6'
          id='tableTitle'
          component='div'>
          {label}
        </Typography>
      )}
      {numSelected > 0 ? (
        <>
          <Tooltip title='Edit'>
            <IconButton disabled={numSelected > 1} onClick={handleEdit}>
              <EditIcon />
            </IconButton>
          </Tooltip>
          <Tooltip title={toolbarActions.delete}>
            <IconButton onClick={handleDelete}>
              <DeleteIcon />
            </IconButton>
          </Tooltip>
        </>
      ) : (
        <Tooltip title={toolbarActions.filter}>
          <IconButton onClick={handleOpenFilter} aria-label={''}>
            <Badge badgeContent={1} color='primary' invisible={!filterValue}>
              <FilterListIcon />
            </Badge>
          </IconButton>
        </Tooltip>
      )}
    </Toolbar>
  );
};

export default EnhancedTableToolbar;
