import "./Login.css"

import {useState} from 'react'

export default function SignUp(props) {
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
        <h3>Sign Up</h3>
        <label>Username
          <input type='text' name='username' value={formData.username} onChange={handleChange}/>
        </label>
        <br />
        <label>Password
          <input type='password' name='password' value={formData.password} onChange={handleChange}/>
        </label>
        <br />
        <button>Submit</button>
      </form>
    </div>
  )
}
