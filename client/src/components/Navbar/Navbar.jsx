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
            <div>
              <p>{currentUser.username}</p>
            <button onClick={handleLogout}>Logout</button>
            </div>
        ) : (
            <div className="links">
              <Link to="/login">
                <a>Login</a>
              </Link>
              
              <Link to="/sign-up">
                <a>Sign Up</a>
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
