import './App.css';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom'
import Nav from './components/Nav';
import Name from './components/Name';
import Logo from './pages/Logo';
import BoxLogo from './components/BoxLogo';
import Projects from './pages/Projects';
import Resume from './pages/Resume';
import Contact from './pages/Contact';
import About from './pages/About';
import ParallaxFX from './components/ParallaxFX';
import { Parallax } from 'react-scroll-parallax';
import Links from './pages/Links';
import HeadBar from './components/HeadBar';
import Footer from './components/Footer';
import Torn from './components/Torn';

function App() {
  // useEffect(()=>{
  //   playAudio()
  // }, [])

function playAudio() {
  let audio = new Audio(`${process.env.PUBLIC_URL}/audio/inhaler clip 1.mp3`);
  audio.volume = 0.2
  audio.play()
}

  return (
    <div className="App">
      <div className='masterContainer'>
        <HeadBar/>
        <BoxLogo/>
        <Links/>
        <Nav />
        <Name />
        <Routes>
          <Route path="/" element={<Logo />} />
          <Route path="/project" element={<Projects/>}/>
          <Route path="/resume" element={<Resume/>}/>
          <Route path="/links" element={<Links/>}/>
          <Route path="/contact" element={<Contact/>}/> 
          <Route path="/about" element={<About/>}/>
         </Routes>
      </div>
      <ParallaxFX/>
      <Footer/>
    </div>
  );
}

export default App;
