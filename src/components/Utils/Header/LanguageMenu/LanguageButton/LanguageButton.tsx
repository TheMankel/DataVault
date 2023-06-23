import React from 'react';
import { Button, Typography } from '@mui/material';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';

interface LanguageButtonProps {
  isMenuOpen: boolean;
  selectedLanguage: string;
  onClick: () => void;
}

const LanguageButton: React.FC<LanguageButtonProps> = ({
  isMenuOpen,
  selectedLanguage,
  onClick,
}) => (
  <Button
    variant='outlined'
    endIcon={isMenuOpen ? <ArrowDropUpIcon /> : <ArrowDropDownIcon />}
    onClick={onClick}
    sx={{ width: '80px', justifyContent: 'space-between' }}>
    <Typography component='span' sx={{ width: '100%' }}>
      {selectedLanguage}
    </Typography>
  </Button>
);

export default LanguageButton;