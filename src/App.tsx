import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import DataPage from './pages/DataPage';

function App() {
  return (
    <Routes>
      <Route index element={<HomePage />} />
      <Route path='data' element={<DataPage />} />
      {/* <Route path="*" element={<NoMatch />} /> */}
    </Routes>
  );
}

export default App;
