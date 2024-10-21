import React, { useEffect, useState } from 'react';
import Header from '../../src/components/Header';
import Footer from '../../src/components/Footer';
import Hero from '../../src/sections/Gallery/Hero';
import Main from '../../src/sections/Gallery/Main';
import axios from 'axios';
import { useRouter } from 'next/router';



const GalleryPage: React.FC = () => {
  

  return (
    <div>
      <Header hasHero={true} />
      <Hero />
      <Main />


      <Footer />
    </div>
  );
};

export default GalleryPage;
