import { MouseEvent } from 'react';
import { Paper, List } from '@mui/material';
import LanguageMenuItem from '../LanguageMenuItem/LanguageMenuItem';

interface ILanguageMenuListProps<T> {
  open: boolean;
  languagesFlags: T[];
  handleSelectLanguage: (event: MouseEvent<HTMLUListElement>) => void;
}

const LanguageMenuList = <T extends { id: string }>({
  open,
  languagesFlags,
  handleSelectLanguage,
}: ILanguageMenuListProps<T>) => {
  if (!open) return null;

  return (
    <Paper
      elevation={3}
      sx={{
        position: 'absolute',
        top: '100%',
        width: '100%',
        zIndex: 1300,
      }}>
      <List id='language-list' onClick={handleSelectLanguage}>
        {languagesFlags.map((flag) => (
          <LanguageMenuItem key={flag.id} id={flag.id} />
        ))}
      </List>
    </Paper>
  );
};

export default LanguageMenuList;
