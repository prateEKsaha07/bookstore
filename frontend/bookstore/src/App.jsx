import React from 'react'
import Home from './Home/Home'
import { Routes , Route } from "react-router-dom"
import Courses from './Courses/Courses'
import Course from './components/Course'



const App = () => {
  return (
    <>
    
     {/* <Home />
     <Course /> */}

    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Course" element={<Courses />} />
    </Routes>

    </>
  )
}

export default App