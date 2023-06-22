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

  const handleSelectLanguage = (event: React.MouseEvent<HTMLDivElement>) => {
    const language = event.currentTarget.id;
    setSelectedLanguage(language);
    handleCloseMenu();
  };

  return (
    <Box
      onMouseEnter={handleOpenMenu}
      onMouseLeave={handleCloseMenu}
      position='relative'>
      <Button
        variant='outlined'
        endIcon={isMenuOpen ? <ArrowDropUpIcon /> : <ArrowDropDownIcon />}
        sx={{ width: '80px' }}>
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
              id='PL'
              onClick={handleSelectLanguage}
              sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <PL width={24} style={{ border: '1px solid black' }} />
            </ListItemButton>
            <ListItemButton
              id='GB'
              onClick={handleSelectLanguage}
              sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <GB width={24} style={{ border: '1px solid black' }} />
            </ListItemButton>
          </List>
        </Paper>
      )}
    </Box>
  );
};

export default LanguageMenu;
