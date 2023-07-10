import { Dispatch, SetStateAction } from 'react';
import { Box, IconButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

interface INavMenuProps {
  handleOpenDrawer: Dispatch<SetStateAction<boolean>>;
}

const NavMenu = ({ handleOpenDrawer }: INavMenuProps) => {
  return (
    <Box sx={{ display: { xs: 'flex', md: 'none' }, alignItems: 'center' }}>
      <IconButton
        color='inherit'
        aria-label='open drawer'
        onClick={() => handleOpenDrawer(true)}>
        <MenuIcon />
      </IconButton>
    </Box>
  );
};

export default NavMenu;
