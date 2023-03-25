import "./signup.css"
import Navbar from "./navbar"
function signup() {
  return (
    <div>
     <Navbar/>
       <div className="signup_container">
      <h1>Let's Sign Up!</h1>
      
      <form>
        <input type="text" placeholder="Name"/>
        <input type="email" placeholder="Email"/>
        <input type="password" placeholder="Password"/>
        
        <button>Sign Up</button>
   
   
      </form>
      </div>
    </div>
  )
}

export default signup
