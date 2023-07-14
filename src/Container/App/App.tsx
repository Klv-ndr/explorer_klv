import React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Footer from 'Container/Footer/Footer';
import Header from 'Container/Header/Header';
import { StyledEngineProvider } from '@mui/material';
import '../../Styles/Styles.scss';
import { Route, Routes } from 'react-router-dom';
import Home from 'pages/Home/Home';
import AboutUs from 'pages/AboutUs/AboutUs';
import Gallery from 'pages/Gallery/Gallery';
import Stories from 'pages/Stories/Stories';
import ContactUs from 'pages/ContactUs/ContactUs';
import Camping from 'pages/Camping/Camping';
import Hiking from 'pages/Hiking/Hiking';
import Discover from 'pages/Discover/Discover';
import Research from 'pages/Research/Research';
import Explore from 'pages/Explore/Explore';

const App: React.FC = () => {
  return (
    <StyledEngineProvider injectFirst>
      <CssBaseline />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/AboutUs" element={<AboutUs />} />
        <Route path="/Gallery" element={<Gallery />} />
        <Route path="/Stories" element={<Stories />} />
        <Route path="/ContactUs" element={<ContactUs />} />
        <Route path="/Stories/Camping" element={<Camping />} />
        <Route path="/Stories/Hiking" element={<Hiking />} />
        <Route path="/Stories/Discover" element={<Discover />} />
        <Route path="/Stories/Research" element={<Research />} />
        <Route path="/Stories/Explore" element={<Explore />} />
      </Routes>
      <Footer />
    </StyledEngineProvider>
  );
};

export default App;
