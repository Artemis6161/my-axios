import { useState } from "react";
import "./navbar.css"
import {NavItems} from "./navItems"
import {
  
  Link,
 
} from "react-router-dom";

const Navbar = () => {

  const [click, setClick] = useState(false);
  const handleClick =() => setClick(!click);
  const closeMenu =()=> setClick(false);
  
  return (
    
      <nav className="navbarItems">
         
        <h1 className="navbar-logo">Trippy</h1>
        
        
      <div onClick={handleClick} className="menu-icons">
       
        {click ? <i className="fas fa-times" ></i>:
         <i className="fas fa-bars" ></i>}

      
        
        
        </div>
        
        
        <ul className={click ? 'nav-menu active' : 'nav-menu'} >
        {NavItems.map((item,index)=>{
    return(
     <li key={index} onClick={closeMenu} >
     <Link className={item.cname} to={item.url}>
   
<i className={item.icons}></i>   {item.title}
</Link>
      </li>
    );
    
    })}
    <Link  to={"/signup"}>
    <button>Sign Up</button>
    </Link>
        
        
        </ul> 
        {/* </div> */}
      </nav>

  )
}

export default Navbar
