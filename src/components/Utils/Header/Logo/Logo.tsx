import { NavLink } from 'react-router-dom';
import { Typography, Link } from '@mui/material';

interface ILogoProps {
  title: string;
}

const Logo = ({ title }: ILogoProps) => {
  return (
    <Link
      component={NavLink}
      color='inherit'
      underline='none'
      to='/'
      alignItems='center'
      sx={{ display: { xs: 'none', md: 'flex' } }}>
      <img
        src='/vite.svg'
        alt='Logo'
        style={{
          height: '56px',
          padding: '8px',
          aspectRatio: 1,
        }}
      />
      <Typography
        component='span'
        variant='h5'
        color='inherit'
        align='left'
        sx={{
          flex: 1,
          '&:hover': {
            color: 'text.secondary',
          },
        }}>
        {title}
      </Typography>
    </Link>
  );
};

export default Logo;
