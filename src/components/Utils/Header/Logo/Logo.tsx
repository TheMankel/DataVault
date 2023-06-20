import { NavLink } from 'react-router-dom';
import { Typography, Link } from '@mui/material';
import { SxProps } from '@mui/material/styles';

interface ILogoProps {
  title: string;
  sx?: SxProps;
}

const Logo = ({ title, ...rest }: ILogoProps) => {
  return (
    <Link
      component={NavLink}
      color='inherit'
      underline='none'
      to='/'
      alignItems='center'
      {...rest}>
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
