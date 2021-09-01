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
                <p href="">Login</p>
              </Link>
              
              <Link to="/sign-up">
                <p className="signup">Sign Up</p>
              </Link>
            </div>
            
        )
      }
      
        {currentUser && (
          
            <div className="links">
              <Link to="/profile">
                 <p>My Profile</p>
              </Link>
            </div>
          
        )}
        </div>
        </div>
    
  )
}
