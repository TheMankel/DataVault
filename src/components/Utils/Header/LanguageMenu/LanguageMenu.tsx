import { useState } from 'react';
import { Box, Button, Paper, List, ListItemButton } from '@mui/material';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import { PL, GB } from 'country-flag-icons/react/3x2';

const LanguageMenu = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState<string>('PL'); // Add state for the selected language

  const handleOpenMenu = () => {
    setIsMenuOpen(true);
  };

  const handleCloseMenu = () => {
    setIsMenuOpen(false);
  };

  const handleSelectLanguage = (language: string) => {
    setSelectedLanguage(language); // Update the selected language state
    handleCloseMenu();
  };

  return (
    <Box
      onMouseEnter={handleOpenMenu}
      onMouseLeave={handleCloseMenu}
      position='relative'>
      <Button
        variant='outlined'
        endIcon={isMenuOpen ? <ArrowDropUpIcon /> : <ArrowDropDownIcon />}>
        {selectedLanguage}
      </Button>
      {isMenuOpen && (
        <Paper
          sx={{
            position: 'absolute',
            top: '100%',
            width: '100%',
            zIndex: 1300,
          }}>
          <List>
            <ListItemButton
              onClick={() => handleSelectLanguage('PL')}
              sx={{ display: 'flex', justifyContent: 'center' }}>
              <PL width={24} />
            </ListItemButton>
            <ListItemButton
              onClick={() => handleSelectLanguage('GB')}
              sx={{ display: 'flex', justifyContent: 'center' }}>
              <GB width={24} />
            </ListItemButton>
          </List>
        </Paper>
      )}
    </Box>
  );
};

export default LanguageMenu;
