import React from 'react'
import Navbar from "./navbar"
import Hero from "./hero"
import Image from "../assets/2.jpg"
import Footer from "./footer"
import Contactform from './contactForm'
const contact = () => {
  return (
    <>
    <Navbar/>
     <Hero
      cName="hero_mid"
      heroImage={Image}
      title="Contact"
    btnClass="hide"
      
     />
     <Contactform/>
     <Footer />
    </>
  )
}

export default contact
