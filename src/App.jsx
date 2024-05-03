import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import usePreventZoom from './components/usePreventZoom';
import WebDesign from './components/WebDesign';

const App = () => {
  usePreventZoom();

  return (
    <div className='bg-mobiletitle'>
      <div className='min-h-screen bg-hero bg-no-repeat bg-cover'>
        <Header />
        <Hero />
        <WebDesign />
      </div>     
    </div>
  )
}

export default App