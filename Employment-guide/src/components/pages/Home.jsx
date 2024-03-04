import React from 'react';
import '../../App.css';
import Cards from '../Cards';
import HeroSection from '../HeroSection';
import Footer from '../Footer';
import Carousels from '../Carousels';

function Home() {
  return (
    <>
      <HeroSection />
      <Cards />
      <Carousels />
      <Footer />
    </>
  );
}

export default Home;