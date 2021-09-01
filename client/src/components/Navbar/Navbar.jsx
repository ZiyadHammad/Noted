import React from 'react'
import { Link } from "react-router-dom"
import './Navbar.scss'


export default function Navbar(props) {
  const { currentUser, handleLogout } = props
  
  return (
    <div className="navbar ">
        <Link to="/">
          <h1 id="logo">Noted</h1>
        </Link>
      <div className="links">
      {
        currentUser ? (
            <div className="log">
              <p>{currentUser.username}</p>
              <button className="logout" onClick={handleLogout}>Logout</button>
            </div>
        ) : (
            <div className="links">
              <Link to="/login">
                <a>Login</a>
              </Link>
              
              <Link to="/sign-up">
                <a className="signup">Sign Up</a>
              </Link>
            </div>
            
        )
      }
      
        {currentUser && (
          
            <div className="links">
              <Link to="/profile">
                 <a>My Profile</a>
              </Link>
            </div>
          
        )}
        </div>
        </div>
    
  )
}
