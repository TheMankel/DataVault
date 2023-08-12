import { NavLink } from 'react-router-dom';
import { Box, Typography, Link } from '@mui/material';
import { SxProps } from '@mui/material/styles';

interface ILogoProps {
  title: string;
  sx?: SxProps;
}

const Logo = ({ title, ...rest }: ILogoProps) => {
  return (
    <Box flex={1} display='flex' justifyContent='flex-start'>
      <Link
        component={NavLink}
        color='inherit'
        underline='none'
        to='/'
        alignItems='center'
        {...rest}>
        <img
          src='/Logo.svg'
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
              color: 'primary.main',
            },
          }}>
          {title}
        </Typography>
      </Link>
    </Box>
  );
};

export default Logo;
