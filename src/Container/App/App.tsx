import React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Footer from 'Container/Footer/Footer';
import Header from 'Container/Header/Header';
import Main from 'Container/Main/Main';

import { StyledEngineProvider } from '@mui/material';
import '../../Styles/Styles.scss';
import { Route, Routes } from 'react-router-dom';
import Home from 'pages/Home/Home';
import AboutUs from 'pages/AboutUs/AboutUs';
import Destinations from 'pages/Destinations/Destinations';
import Gallery from 'pages/Gallery/Gallery';
import Stories from 'pages/Stories/Stories';
import ContactUs from 'pages/ContactUs/ContactUs';

const App: React.FC = () => {
  return (
    <StyledEngineProvider injectFirst>
      <CssBaseline />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/AboutUs" element={<AboutUs />} />
        <Route path="/Destinations" element={<Destinations />} />
        <Route path="/Gallery" element={<Gallery />} />
        <Route path="/Stories" element={<Stories />} />
        <Route path="/ContactUs" element={<ContactUs />} />
      </Routes>
      {/* <Main /> */}
      <Footer />
    </StyledEngineProvider>
  );
};

export default App;
