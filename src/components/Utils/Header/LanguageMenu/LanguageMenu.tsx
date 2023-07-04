import { Box } from '@mui/material';
import LanguageButton from './LanguageButton/LanguageButton';
import useLanguageMenu from './hooks/useLanguageMenu';
import LanguageMenuList from './LanguageMenuList/LanguageMenuList';

const languagesFlags = [{ id: 'PL' }, { id: 'GB' }];

const LanguageMenu = () => {
  const { isMenuOpen, handleOpenMenu, handleCloseMenu, handleSelectLanguage } =
    useLanguageMenu();

  return (
    <Box flex={1} display='flex' justifyContent='flex-end'>
      <Box
        position='relative'
        onMouseEnter={handleOpenMenu}
        onMouseLeave={handleCloseMenu}>
        <LanguageButton open={isMenuOpen} />
        <LanguageMenuList
          open={isMenuOpen}
          languagesFlags={languagesFlags}
          handleSelectLanguage={handleSelectLanguage}
        />
      </Box>
    </Box>
  );
};

export default LanguageMenu;
