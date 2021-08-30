import React from 'react'
import {Link} from "react-router-dom"

export default function Layout(props) {
  const { currentUser, handleLogout } = props
  
  return (
    <div>
      <h1>Noted</h1>
      {
        currentUser ? (
            <div>
              <p>{currentUser.username}</p>
            <button onClick={handleLogout}>Logout</button>
            </div>
        ) : (
            <div>
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
    </div>
  )
}
