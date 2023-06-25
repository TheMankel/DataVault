import { useState } from 'react';
import { Container, AppBar, Toolbar } from '@mui/material';
import NavMenu from './NavMenu/NavMenu';
import DrawerMenu from './NavDrawer/NavDrawer';
import Logo from './Logo/Logo';
import Nav from './Nav/Nav';
import LanguageMenu from './LanguageMenu/LanguageMenu';
import useMediaQuery from '@mui/material/useMediaQuery';

const title = 'DataVault';
const pagesUrls = [
  { name: 'Home', url: '/' },
  { name: 'Data', url: '/data' },
];

const Header = () => {
  const [openDrawer, setOpenDrawer] = useState(false);
  const showComponents = useMediaQuery('(min-width:900px)');

  return (
    <AppBar
      component='header'
      position='sticky'
      sx={{ backgroundColor: 'background.default' }}>
      <Container maxWidth='lg'>
        <Toolbar
          sx={{
            minHeight: 64,
            color: 'text.primary',
            justifyContent: 'space-between',
          }}>
          <DrawerMenu
            title={title}
            openDrawer={openDrawer}
            handleOpenDrawer={setOpenDrawer}
            pagesUrls={pagesUrls}
          />
          {showComponents ? (
            <>
              <Logo
                title={title}
                sx={{ display: { xs: 'none', md: 'flex' } }}
              />
              <Nav pagesUrls={pagesUrls} sx={{ display: 'flex' }} />
            </>
          ) : (
            <NavMenu handleOpenDrawer={setOpenDrawer} />
          )}
          <LanguageMenu />
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;
