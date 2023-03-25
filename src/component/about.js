import React from 'react'
import Navbar from "./navbar"
import Hero from "./hero"
import Image from "../assets/night.jpg"
import Footer from "./footer"
import Aboutas from "./aboutAs"
function about() {
  return (
    <>
    <Navbar/>
     <Hero
      cName="hero_mid"
      heroImage={Image}
      title="About"
    btnClass="hide"
      
     />
     <Aboutas/>
     <Footer/>
    </>
  )
}

export default about
