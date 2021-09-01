import React from 'react'

import {useState} from 'react'
import { Link } from "react-router-dom";
import './SignUp.scss'

export default function SignUp(props) {
  const [formData, setFormData] = useState({
    username: '',
    password: ''
  })

  const { handleSignUp } = props
  
  const handleChange = (e) => {
   
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }))
  }
  return (
    <div className="auth-form">
           
      <form className="form" onSubmit={(e) => {
        e.preventDefault()
        handleSignUp(formData)
      }}>
        
        <h1 className='form-title' >Sign Up</h1>
        <p className="form-description">Start creating unlimited events and todos</p>

        <div className="form-group">
          <input type='text' name='username' value={formData.username} onChange={handleChange}/>
          <label className="form-label">Username</label>
          </div>

          <div className="form-group">
            <input type='text' name='email' value={formData.email} onChange={handleChange}/>
            <label className="form-label">Email</label>
          </div>
        
         
          <div className="form-group">
          <input type='password' name='password' value={formData.password} onChange={handleChange}/>
          <label className="form-label">Password</label>
          </div>
       
        <button className="form-button">Create Account</button>
        
            <Link to="/login">
              <button className="already-button">Already a Member?</button>
            </Link>
      </form>
    </div>
  )
}
