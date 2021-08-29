import React from 'react'

export default function Navbar() {
  return (
    <div>
       <Link to="/sign-up">
        <a>Sign Up</a>
      </Link>
      <Link to="/sign-in">
        <a>Sign In</a>
      </Link>
    </div>
  )
}
