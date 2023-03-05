import './App.css';
import { Box } from '@mui/material';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import ExerciseDetails from './pages/ExerciseDetails';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';

function App() {

  return (
    <Box>
      <Navbar />
      <Routes>
        <Route path='' element={<HomePage />} />
        <Route path='/exercise/:id' element={<ExerciseDetails />} />
      </Routes>
      <Footer />      
    </Box>
  );
}

export default App;
