
import React from 'react';
import './assets/css/main.css';
import Navbar from './components/Navbar.js';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import { NavProvider } from "./utils/navigation";
import MainPage from './views/MainPage'; 
import ProjectPage from './views/ProjectPage';
import GalleryPage from './views/GalleryPage';





function App() {
  return (
      <BrowserRouter>
        <NavProvider>
          <Navbar />
            <Routes>
              <Route path='/' element={<MainPage />}/>
              <Route path='/projects' element={<ProjectPage />}/>
              <Route path='/gallery' element={<GalleryPage />}/>
   
            </Routes>

        </NavProvider>
      </BrowserRouter>


  );
}

export default App;