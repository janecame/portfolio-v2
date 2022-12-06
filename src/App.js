import React from 'react';
import './assets/css/main.css';
import Navbar from './components/Navbar.js';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import { NavProvider } from "./utils/navigation";
import MainPage from './views/MainPage'; 


function App() {
  return (
      <BrowserRouter>
        <NavProvider>
          <Navbar />
            <Routes>
              <Route path='/' element={<MainPage />}/>
   
            </Routes>

        </NavProvider>
      </BrowserRouter>


  );
}

export default App;