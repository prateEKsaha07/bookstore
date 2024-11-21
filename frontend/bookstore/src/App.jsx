import React from 'react'
import Home from './Home/Home'
import { Routes , Route } from "react-router-dom"
import Courses from './Courses/Courses'
import Course from './components/Course'
import Signup from './components/Signup'



const App = () => {
  return (
    <>
    
     {/* <Home />
     <Course /> */}
    <div className="dark:bg-slate-900 dark:text-white">
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Course" element={<Courses />} />
      <Route path="/Signup" element={<Signup />} />

    </Routes>
    </div>
    

    </>
  )
}

export default App