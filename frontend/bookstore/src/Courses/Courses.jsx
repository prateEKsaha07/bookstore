import React from 'react'
import Navbar from '../components/Navbar'
import Course from '../components/Course'
import Footer from "../Footer"
import list from "../../public/List.json"

const Courses = () => {
  return (
    <>
    <div className="min-h-content">
    <Navbar/>
    </div>
    <Course /> 
    <Footer/>
    </>
  )
}

export default Courses