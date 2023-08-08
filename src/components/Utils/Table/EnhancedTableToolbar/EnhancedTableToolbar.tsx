import { Toolbar, Typography, Tooltip, IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import FilterListIcon from '@mui/icons-material/FilterList';
import { alpha } from '@mui/material/styles';
import { useAppSelector } from 'Store/hooks';

interface EnhancedTableToolbarProps {
  label: string;
  numSelected: number;
  handleDelete: () => void;
}
const EnhancedTableToolbar = ({
  label,
  numSelected,
  handleDelete,
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
        <Tooltip title={toolbarActions.delete}>
          <IconButton onClick={handleDelete}>
            <DeleteIcon />
          </IconButton>
        </Tooltip>
      ) : (
        <Tooltip title={toolbarActions.filter}>
          <IconButton>
            <FilterListIcon />
          </IconButton>
        </Tooltip>
      )}
    </Toolbar>
  );
};

export default EnhancedTableToolbar;
