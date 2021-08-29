import './App.css';
import { useState } from 'react';

import Layout from './Layout/Layout';
import LandingPage from './screens/LandingPage/LandingPage';
import SignUp from './screens/SignUp/SignUp'
import { Switch, Route, useHistory } from 'react-router-dom'
import Login from './screens/Login/Login';
import { loginUser, registerUser } from './services/auth';


function App() {
  const [currentUser, setCurrentUser] = useState(null)
  // const history = useHistory()

  const handleLogin = async (loginData) => {
    const userData = await loginUser(loginData)
    setCurrentUser(userData)
    // history.push("/")
  }

  const handleSignUp = async (registerData) => {
    const userData = await registerUser(registerData)
    setCurrentUser(userData)
    // history.push("/")
  }

  return (
    <div className="App">
      <Layout />
      <Switch>
        <Route exact path="/">
          <LandingPage />
        </Route>
        <Route path='/login'>
          <Login handleLogin={handleLogin} />
        </Route>
        <Route path='/sign-up'>
          <SignUp handleSignUp={handleSignUp} />
        </Route>
      </Switch>

    </div>
  );
}

export default App;
