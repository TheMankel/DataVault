import { Button, Typography } from '@mui/material';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import { useAppSelector } from 'Store/hooks';

interface ILanguageButtonProps {
  open: boolean;
}

const LanguageButton = ({ open }: ILanguageButtonProps) => {
  const selectedLanguage = useAppSelector((state) => state.language.code);

  return (
    <Button
      id='language-selector'
      variant='outlined'
      endIcon={open ? <ArrowDropUpIcon /> : <ArrowDropDownIcon />}
      sx={{ width: '80px', justifyContent: 'space-between' }}>
      <Typography
        id='selected-language'
        component='span'
        sx={{ width: '100%' }}>
        {selectedLanguage}
      </Typography>
    </Button>
  );
};

export default LanguageButton;
