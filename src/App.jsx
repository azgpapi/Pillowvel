import React from 'react'
import Navbar from './components/Navbar'
import Home from './components/Home'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Visit from './components/Visit'
import PhotoGallery from './components/PhotoGallery'


const App = () => {
  return (
    <main>
      <Router>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path='Visit' element={<Visit />} ></Route>
          <Route path='PhotoGallery' element={<PhotoGallery />} ></Route>
        </Routes>
      </Router>
    </main>
  )
}

export default App; 