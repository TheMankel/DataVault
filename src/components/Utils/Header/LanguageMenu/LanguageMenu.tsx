import { Box, Paper, List } from '@mui/material';
import LanguageButton from './LanguageButton/LanguageButton';
import LanguageMenuItem from './LanguageMenuItem/LanguageMenuItem';
import useLanguageMenu from './hooks/useLanguageMenu';

const languagesFlags = [{ id: 'PL' }, { id: 'GB' }];

const LanguageMenu = () => {
  const {
    isMenuOpen,
    selectedLanguage,
    handleOpenMenu,
    handleCloseMenu,
    handleSelectLanguage,
  } = useLanguageMenu();

  return (
    <Box flex={1} display='flex' justifyContent='flex-end'>
      <Box
        position='relative'
        onMouseEnter={handleOpenMenu}
        onMouseLeave={handleCloseMenu}>
        <LanguageButton
          isMenuOpen={isMenuOpen}
          selectedLanguage={selectedLanguage}
          onClick={handleOpenMenu}
        />
        {isMenuOpen && (
          <Paper
            sx={{
              position: 'absolute',
              top: '100%',
              width: '100%',
              zIndex: 1300,
            }}>
            <List>
              {languagesFlags.map((flag) => (
                <LanguageMenuItem
                  key={flag.id}
                  id={flag.id}
                  onClick={handleSelectLanguage}
                />
              ))}
            </List>
          </Paper>
        )}
      </Box>
    </Box>
  );
};

export default LanguageMenu;
