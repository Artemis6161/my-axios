import React from 'react'

import Home from "./component/home"
import About from "./component/about"
import Service from "./component/service"
import Contact from "./component/contact"
import Signup from "./component/signup"
import "../src/App.css"
import {
  createBrowserRouter,
 
  RouterProvider,
 
} from "react-router-dom";


const App = () => {
  return (
    <div className='app'>
     
     
      <RouterProvider basename="/my-axios" router={router} />
    </div>
  )
}
const router = createBrowserRouter([
  {
     path: "/my-axios",
    element:  
   <Home/>
  
   
  },
  {
    path: "/about",
    element:  
   <About/>
   
  },
  {
    path: "/service",
    element:  
   <Service/>
   
  },
  {
    path: "/contact",
    element:  
   <Contact/>
   
  },
  {
    path: "/signup",
    element:  
   <Signup/>
   
  },
]);
export default App


























