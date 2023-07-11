import React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Footer from 'Container/Footer/Footer';
import Header from 'Container/Header/Header';
import Main from 'Container/Main/Main';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from 'pages/Home/Home';
import AboutUs from 'pages/AboutUs/AboutUs';

const App: React.FC = () => {
  return (
    <>
      <CssBaseline />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
      </Routes>
      <Main />
      <Footer />
    </>
  );
};

export default App;
