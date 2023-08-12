import { NavLink } from 'react-router-dom';
import { Box, Container, Typography, Button } from '@mui/material';
import { useAppSelector } from 'Store/hooks';

const NotFound = () => {
  const notFound = useAppSelector(
    (state) => state.language.errors.notFoundPage,
  );
  const home = useAppSelector((state) => state.language.urls.main);

  return (
    <Box
      sx={{
        py: {
          xs: 2,
          md: 4,
        },
      }}>
      <Container>
        <Box>
          <Typography
            variant='h1'
            component={'h1'}
            align={'center'}
            sx={{ fontWeight: 700 }}>
            404
          </Typography>
          <Typography
            variant='h6'
            component='p'
            color='text.secondary'
            align={'center'}
            maxWidth='430px'
            mx='auto'>
            {notFound.message}
          </Typography>
          <Box marginTop={4} display={'flex'} justifyContent={'center'}>
            <Button
              component={NavLink}
              variant='contained'
              size='large'
              to={'/'}>
              {home}
            </Button>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default NotFound;
