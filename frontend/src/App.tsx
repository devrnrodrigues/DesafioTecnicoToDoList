import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ToastContainer, Bounce } from 'react-toastify'; 
import 'react-toastify/dist/ReactToastify.css'; 
import LandingPage from './pages/LandingPage'; 
import Register from './pages/Register'; 
import Login from './pages/Login';      
import Home from './pages/Home';
import './index.css';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />   
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/home" element={<Home />} />
      </Routes>

      <ToastContainer
        position="top-right"
        autoClose={1500}
        hideProgressBar={true}
        newestOnTop={false}
        closeOnClick={true}
        rtl={false}
        pauseOnFocusLoss={false}
        draggable={false}
        pauseOnHover={false}
        toastClassName="custom-toast"
        transition={Bounce}
      />
    </BrowserRouter>
  );
};

export default App;