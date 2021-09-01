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
        <div className="formcontainer">
          <hr/>
          <div className="container">
            
            <label><strong>Username</strong></label>
             <input type='text' name='username' value={formData.username} onChange={handleChange}/>
       
             <label><strong>Password</strong></label>
            <input type='password' name='password' value={formData.password} onChange={handleChange} />
          
          </div>
          <button>Login</button>

          <div className="container">
          
        <input type="checkbox"  checked="checked" name="remember"/>
        
        <span class="psw"></span>
              <Link to="/sign-up">
                <button>Forgot Password?</button>
               </Link>
          </div>
          
        </div>
      </form>
    </div>
  )
}
