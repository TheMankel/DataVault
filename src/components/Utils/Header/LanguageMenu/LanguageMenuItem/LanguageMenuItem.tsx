import { ListItemButton } from '@mui/material';
import Flags from 'country-flag-icons/react/3x2';

interface ILanguageMenuItemProps {
  id: string;
}

const LanguageMenuItem = ({ id }: ILanguageMenuItemProps) => {
  const Flag = Flags[id.toUpperCase() as keyof typeof Flags];

  return (
    <ListItemButton
      id={id}
      component='li'
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Flag title={id} width={24} style={{ border: '1px solid black' }} />
    </ListItemButton>
  );
};

export default LanguageMenuItem;
