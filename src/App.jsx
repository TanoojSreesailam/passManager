/* eslint-disable no-unused-vars */
import React from "react"
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Footer from "./components/Footer"


function App() {

  return (
    <div className="w-full h-screen bg-[#c3e4c3]">
      <Navbar/>
      <Hero/>
      <Footer/> 
    </div>
  )
}

export default App
