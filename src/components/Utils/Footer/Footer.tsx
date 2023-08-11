import { Paper } from '@mui/material';
import Copyright from './Copyright/Copyright';

const Footer = () => {
  const authors = [
    { name: 'Jakub Jankowski', url: 'https://github.com/TheMankel' },
  ];

  return (
    <Paper
      elevation={3}
      component='footer'
      sx={{
        py: 3,
        px: 2,
        mt: 'auto',
        borderRadius: 0,
      }}>
      <Copyright authors={authors} />
    </Paper>
  );
};

export default Footer;
