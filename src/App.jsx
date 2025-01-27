import './App.css'
import Home from './pages/home/Home'
import About from './pages/about/About'
import WhatWeDo from './pages/what/what-we-do'
import Media from './pages/media/Media'
import Contact from './pages/contact/Contact'
import Header from './components/header/Header'
import NotFound from './pages/not-found/NotFound'

import { Routes, Route } from 'react-router-dom'

function App() {

  return (
    <>
    <Header />
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/about' element={<About />}/>
        <Route path='/whatwedo' element={<WhatWeDo />}/>
        <Route path='/media' element={<Media />}/>
        <Route path='/contact' element={<Contact />}/>
        <Route path='*' element={<NotFound />}/>
      </Routes>
    </>
  )
}

export default App
