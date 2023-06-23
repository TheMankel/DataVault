import React from 'react';
import { ListItemButton } from '@mui/material';
import Flags from 'country-flag-icons/react/3x2';

interface LanguageMenuItemProps {
  id: string;
  onClick: (event: React.MouseEvent<HTMLDivElement>) => void;
}

const LanguageMenuItem = ({ id, onClick }: LanguageMenuItemProps) => {
  const Flag = Flags[id.toUpperCase() as keyof typeof Flags];

  return (
    <ListItemButton
      id={id}
      onClick={onClick}
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
