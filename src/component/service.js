import React from 'react'
import Navbar from "./navbar"
import Hero from "./hero"
import Image from "../assets/night.jpg"
import Footer from "./footer"
import Trip from "./trip"
const service = () => {
  return (
    <div>
    <Navbar/>
    <Hero
      cName="hero_mid"
      heroImage={Image}
      title="Service"
     

btnClass="hide"
      
     />
     <Trip/>
     <Footer/>
    </div>
  )
}

export default service
