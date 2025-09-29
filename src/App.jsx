import './App.css'

import { useEffect } from 'react'


import About from './Components/About'
import Brands from './Components/Brands';
import Cocktails from './Components/Cocktails';
import Food from './Components/Food';
import Contact from './Components/Contact';
import Main from './Components/Main';
import Hand from './Components/Hand';
import DevelopersInfo from './Components/DevelopersInfo';
import Gallery from './Components/Gallery';
import Shisha from './Components/Shisha';

function App() {

  useEffect(() => {

    AOS.init({
      duration: 1000,
      // once: true,
    });

  }, []);

  return (
    <>
      <Main />
      <About />
      <Brands />
      <Cocktails />
      <Food />
      <Shisha />
      <Gallery />
      <Contact />
      <Hand />
      <DevelopersInfo />

      <span className='tablet hidden text-white'>
        Hey! Our website isn’t available on tablets and laptops yet. Please use your phone for now — support for all devices is coming soon!"
      </span>
    </>
  )
}

export default App
