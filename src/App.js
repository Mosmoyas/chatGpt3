import React from 'react';
import './App.css'
import { Brand, CTA, Navbar } from './components/index';
import { Header, Footer, Blog, Features, Possibility, WhatMSY3 } from './containers/index'

const App = () => {
  return (
      <div className='App'>
        <div className='gradient__bg'>
          <Navbar />
          <Header />
        </div>
        <Brand />
        <WhatMSY3 />
        <Features />
        <Possibility />
        <CTA />
        <Blog />
        <Footer />
        </div>
  )
}

export default App