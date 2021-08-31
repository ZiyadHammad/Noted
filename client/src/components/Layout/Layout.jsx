import React from 'react'
import { Link } from "react-router-dom"
import Footer from '../Footer/Footer'

export default function Layout(props) {
  const { currentUser, handleLogout } = props
  
  return (
    <div className="wrapper">
      <h1>Noted</h1>
      {
        currentUser ? (
            <div className="navbar">
              <p>{currentUser.username}</p>
            <button onClick={handleLogout}>Logout</button>
            </div>
        ) : (
            <div className="navbar">
              <Link to="/login">
                <a>Login</a>
              </Link>
              
              <Link to="/sign-up">
                <a>Sign Up</a>
              </Link>
            </div>
            
        )
      }
      <hr />
      {currentUser && (
        
          <Link to="/profile">
            <a>My Profile</a>
          </Link>
          
      )}
      {props.children}
      <div className="footer">
        <Footer />
      </div>
    </div>
  )
}
