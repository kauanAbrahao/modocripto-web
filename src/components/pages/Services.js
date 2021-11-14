import React from 'react';
import '../../App.css';
import ServicesCardSection from '../ServicesCardSection';
import ServicesHeroSection from '../ServicesHeroSection';
import Footer from '../Footer';

export default function Services() {

  return (
    <>
      <ServicesHeroSection/>
      <ServicesCardSection/>
      <Footer></Footer>
    </>
  )
}
