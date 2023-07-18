import './App.css';
import {Route, Routes} from 'react-router-dom'
import {Box} from '@mui/material'

import Navbar from './components/Navrbar'
import Footer from './components/Footer'
import ExerciseDetail from './pages/ExerciseDetail';
import Home from './pages/Home';


function App() {
  return (
    <Box width = "400px" sx={{width: {xl: '1488px'}}} m='auto'>
      <Navbar/>
      <Routes>
        <Route path = "/" element={<Home/>} />
        <Route path="/exercise/:id" element={<ExerciseDetail/>}/>
      </Routes>
      <Footer/>
    </Box>
  );
}

export default App;
