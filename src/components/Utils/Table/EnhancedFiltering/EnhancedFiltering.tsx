import { MouseEvent, ChangeEvent, MutableRefObject } from 'react';
import { Popover, Box, TextField, MenuItem, IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

interface IEnhancedFilteringProps {
  open: boolean;
  anchorEl: MutableRefObject<HTMLTableSectionElement | null>;
  onClose: (e: MouseEvent<HTMLElement>) => void;
  selectedFilterCol: string;
  filterValue: string;
  handleFilter: (e: ChangeEvent<HTMLInputElement>) => void;
  handleSelectFilterCol: (id: string) => void;
}

const columns = [
  {
    value: 'id',
    label: 'ID',
  },
  {
    value: 'firstname',
    label: 'Firstname',
  },
  {
    value: 'surname',
    label: 'Surname',
  },
  {
    value: 'date_of_birth',
    label: 'Date of birth',
  },
  {
    value: 'about_you',
    label: 'About you',
  },
];

const EnhancedFiltering = ({
  open,
  anchorEl,
  onClose,
  selectedFilterCol,
  filterValue,
  handleFilter,
  handleSelectFilterCol,
}: IEnhancedFilteringProps) => {
  return (
    <Popover
      id='filtering'
      open={open}
      anchorEl={anchorEl.current}
      onClose={onClose}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'left',
      }}
      transformOrigin={{
        vertical: 'top',
        horizontal: 'left',
      }}>
      <Box display='flex' p={1}>
        <Box
          display='inline-flex'
          flexDirection='column'
          position='relative'
          margin='0px 4px 1.6px 0px'
          flexGrow={0}
          justifyContent='flex-end'>
          <IconButton
            title='Close'
            onClick={onClose}
            size='small'
            aria-label='Close'>
            <CloseIcon fontSize='small' />
          </IconButton>
        </Box>
        <TextField
          id='standard-select-currency'
          select
          label='Columns'
          fullWidth
          // defaultValue={columns[0].value}
          value={selectedFilterCol}
          variant='standard'>
          {columns.map((option) => (
            <MenuItem
              key={option.value}
              onClick={() => handleSelectFilterCol(option.value)}
              value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
        <TextField
          id='standard-basic'
          label='Standard'
          variant='standard'
          placeholder='Filter value'
          fullWidth
          onChange={handleFilter}
          value={filterValue}
          InputLabelProps={{
            shrink: true,
          }}
        />
      </Box>
    </Popover>
  );
};

export default EnhancedFiltering;
