import "./Login.css"

import { useState } from 'react'
import { Link } from "react-router-dom"

export default function Login(props) {
  const [formData, setFormData] = useState({
    username: '',
    password: ''
  })

  const { handleLogin } = props
  
  const handleChange = (e) => {
   
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }))
  }
  return (
    <div className="login">
      <form onSubmit={(e) => {
        e.preventDefault()
        handleLogin(formData)
      }}>
        <h3>Login</h3>
        <label>Username
          <input type='text' name='username' value={formData.username} onChange={handleChange}/>
        </label>
        <br />
        <label>Password
          <input type='password' name='password' value={formData.password} onChange={handleChange}/>
        </label>
        <br />
        <Link to="/sign-up">
        <button>Don't Have An Account?</button>
        </Link>
        <button>Submit</button>
      </form>
    </div>
  )
}
