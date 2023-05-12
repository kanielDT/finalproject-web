import { useState } from 'react';
import { BrowserRouter, Routes, Route, } from 'react-router-dom';
import MeetsPanel from './scenes/MeetsPanel';
import MeetsForm from './scenes/MeetsForm';
import Navbar from './scenes/NavBar';
import MeetsList from './scenes/MeetsList';
import Footer from './scenes/Footer'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  const [meets, setMeets] = useState()


  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<MeetsList meets={meets} setMeets={setMeets} />} />
          <Route path='/meets' element={<MeetsPanel meets={meets} setMeets={setMeets} />} />
          <Route path='/meets' element={<MeetsForm setMeets={setMeets} />} />
        </Routes>

      </BrowserRouter>
    </>
  );
}

export default App;
