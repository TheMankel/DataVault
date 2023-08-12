import { Routes, Route } from 'react-router-dom';
import HomePage from 'Pages/HomePage';
import DataPage from 'Pages/DataPage';
import NotFoundPage from 'Pages/NotFoundPage';
import AppLayout from 'Layouts/AppLayout';
import { ThemeProvider } from '@mui/material';
import theme from 'Theme/theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Routes>
        <Route path='/' element={<AppLayout />}>
          <Route index element={<HomePage />} />
          <Route path='data' element={<DataPage />} />
          <Route path='/*' element={<NotFoundPage />} />
        </Route>
      </Routes>
    </ThemeProvider>
  );
}

export default App;
