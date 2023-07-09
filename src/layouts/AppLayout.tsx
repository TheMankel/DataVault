import { Outlet } from 'react-router-dom';
import { Box, CssBaseline, Container } from '@mui/material';
import Footer from '../components/Utils/Footer/Footer';
import Header from '../components/Utils/Header/Header';

const AppLayout = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
      }}>
      <Header />
      <CssBaseline />
      <Container component='main' maxWidth='sm' sx={{ mt: 4 }}>
        <Outlet />
      </Container>
      <Footer />
    </Box>
  );
};

export default AppLayout;
