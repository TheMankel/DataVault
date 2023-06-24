import React from 'react';
import { Paper, List } from '@mui/material';
import LanguageMenuItem from '../LanguageMenuItem/LanguageMenuItem';

interface ILanguageMenuList<T> {
  open: boolean;
  languagesFlags: T[];
  handleSelectLanguage: (event: React.MouseEvent<HTMLDivElement>) => void;
}

const LanguageMenuList = <T extends { id: string }>({
  open,
  languagesFlags,
  handleSelectLanguage,
}: ILanguageMenuList<T>) => {
  if (!open) return null;

  return (
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
  );
};

export default LanguageMenuList;
