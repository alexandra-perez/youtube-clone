import { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import Home from './components/Home/Home'
import VideoList from './components/VideoList/VideoList'
import About from './components/About/About'
import './App.css'

function App() {

  return (
    <>
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/videos/:keyword" element={<VideoList />} />
          <Route path="/videos/:id" element={<ShowVideo />} />
          <Route path="/about" element={<About />} /> 
        </Routes>
      </Router>
    </>
  )
}

export default App
