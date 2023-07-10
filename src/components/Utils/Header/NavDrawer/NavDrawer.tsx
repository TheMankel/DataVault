import { Dispatch, SetStateAction } from 'react';
import { Drawer, Box, IconButton, Divider } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import Logo from '../Logo/Logo';
import Nav from '../Nav/Nav';

interface IDrawerMenuProps<T> {
  openDrawer: boolean;
  title: string;
  handleOpenDrawer: Dispatch<SetStateAction<boolean>>;
  pagesUrls: T[];
}

const DrawerMenu = <T extends { name: string; url: string }>({
  openDrawer,
  handleOpenDrawer,
  title,
  pagesUrls,
}: IDrawerMenuProps<T>) => {
  return (
    <Drawer
      anchor='left'
      open={openDrawer}
      onClose={() => handleOpenDrawer(false)}>
      <Box height={1} textAlign='left'>
        <Box
          padding={1}
          bgcolor='background.default'
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: 4,
          }}>
          <Logo title={title} sx={{ display: 'flex' }} />
          <IconButton
            color='inherit'
            aria-label='close drawer'
            onClick={() => handleOpenDrawer(false)}>
            <CloseIcon />
          </IconButton>
        </Box>
        <Divider />
        <Nav
          pagesUrls={pagesUrls}
          buttonType={true}
          closeDrawer={() => handleOpenDrawer(false)}
        />
      </Box>
    </Drawer>
  );
};

export default DrawerMenu;
