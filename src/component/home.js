import React from 'react'
import Navbar from "./navbar"
import Hero from "./hero"
import Destination from "./destination"
import Trip from './trip'
import Footer from "./footer"
import Image from "../assets/12.jpg"
function home() {
  return (
    <>
     <Navbar/>
     <Hero
      cName="hero"
      heroImage={Image}
      title="Your Jurney Your Story"
      text="Choose Youe Favourite Destination."
url="/"
btnClass="show"
      buttonText="Travel Plan"
     />
     <Destination/>
     <Trip/>
     <Footer/>
    </>
  )
}

export default home
