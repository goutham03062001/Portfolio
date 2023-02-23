import React from 'react'
import Navbar from './components/Navbar';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home from './pages/Home';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import About from './pages/About';
const App = () => {
  return (
    <>
      <Router>
      <Navbar/>
        <Routes>
         <Route path = "/"  element = {<Home/>}/>
         <Route path = "/Projects" element = {<Projects/>}/>
         <Route path = "/Contact" element = {<Contact/>}/>
         <Route path = "/About" element = {<About/>}/>
        </Routes>
      </Router>
    </>
  )
}

export default App