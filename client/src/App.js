import './App.css';
import { useState } from 'react';

import Layout from './Layout/Layout';
import { Switch, Route } from 'react-router-dom'
import Login from './screens/Login/Login';
import { loginUser } from './services/auth';


function App() {
  const [currentUser, setCurrentUser] = useState(null)

  const handleLogin = async (loginData) => {
    const userData = await loginUser(loginData)
    setCurrentUser(userData)
  }
  return (
    <div className="App">
      <Layout />
      <Switch>
        <Route path='/login'>
          <Login handleLogin={handleLogin} />
        </Route>
        <Route path='/sign-up'>
          {/* <SignUp /> */}
        </Route>
      </Switch>

    </div>
  );
}

export default App;
