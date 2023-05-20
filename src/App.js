import { useState } from 'react';
import { BrowserRouter, Routes, Route, } from 'react-router-dom';
import MeetsForm from './scenes/MeetsForm';
import MeetsList from './scenes/MeetsList';
import Footer from './scenes/Footer'
import NavBar from './scenes/NavBar';
import "./styles/App.css"

import 'bootstrap/dist/css/bootstrap.min.css';


function App() {

  const [meets, setMeets] = useState()


  return (
    <>
      <div>
        <BrowserRouter>
          {/* <NavBar /> */}
          <Routes>
            <Route path='/' element={<MeetsList meets={meets} setMeets={setMeets} />} />
            <Route path='/meets' element={<MeetsForm setMeets={setMeets} />} />
          </Routes>
          {/* <Footer /> */}
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
