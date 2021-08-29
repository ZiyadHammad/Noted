import React from 'react'

import {useState} from 'react'

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
    <div className="sign-up">
      <form onSubmit={(e) => {
        e.preventDefault()
        handleSignUp(formData)
      }}>
        <h3>Sign Up</h3>
        <label>Username
          <input type='text' name='username' value={formData.username} onChange={handleChange}/>
        </label>
        <br />
        <label>Email
          <input type='text' name='email' value={formData.email} onChange={handleChange}/>
        </label>
        <br />
        <label>Password
          <input type='password' name='password' value={formData.password} onChange={handleChange}/>
        </label>
        <br />
        <button>Create Account</button>
      </form>
    </div>
  )
}
