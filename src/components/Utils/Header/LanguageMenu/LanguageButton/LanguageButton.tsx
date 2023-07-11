import React from 'react';
import { Button, Typography } from '@mui/material';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import { useAppSelector } from '../../../../../store/hooks';

interface ILanguageButtonProps {
  open: boolean;
}

const LanguageButton = ({ open }: ILanguageButtonProps) => {
  const selectedLanguage = useAppSelector((state) => state.language.data.code);

  return (
    <Button
      variant='outlined'
      endIcon={open ? <ArrowDropUpIcon /> : <ArrowDropDownIcon />}
      sx={{ width: '80px', justifyContent: 'space-between' }}>
      <Typography component='span' sx={{ width: '100%' }}>
        {selectedLanguage}
      </Typography>
    </Button>
  );
};

export default LanguageButton;
