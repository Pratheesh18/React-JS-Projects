import React , {useState} from 'react';
import {BrowserRouter as Router,Switch , Route , Link , Redirect} from 'react-router-dom';
import axios from 'axios';

const App = () => {

  const [token , setToken] = useState(null);
  const [protectedContent , setProtectedContent] = useState('');
  const [username , setUserName] = useState('');
  const [password , setPassword] = useState('');


  const handleSignIn = async () => {
    try{
      const response = await axios.post('http://localhost:4000/signin',{
        username,
        password,
      });
      setToken(response.data.token);
    }catch(error){
      console.log(error);
    }
  };


  const handleGetProtectedContent = async () => {
    try{
      const response = await axios.get('http://localhost:4000/protected',{
        headers : {
          Authorization : `Bearer ${token}`,
        },
      });
      setProtectedContent(response.data.message);
    }catch(error){
           console.log(error);
    }
  }

  return(
   <Router>
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">  Home </Link>
          </li>
          <li> 
             <Link to="/protected">  Protected </Link>
          </li>
        </ul>
      </nav>

      <Switch>
        <Route exact path="/">
          {token ? (
            <Redirect to="/protected" />
          ) : (
            <div>
              <label>
                Username : 
                <input type='text' value={username} onChange={(e) => setUserName(e.target.value)} />
              </label>
              <br />
              <label>
                Password : 
                <input type='password' value={password} onChange={(e) => setPassword(e.target.value)} />
              </label>
              <br />
              <button onClick={handleSignIn}>  Sign In </button>
            </div>
          )}
        </Route>
        <Route path ="/protected">
          {!token ? (
            <Redirect to="/" />
          ) : (
            <div>
              <button onClick={handleGetProtectedContent}>  Get Protected Content </button>
              <p>  {protectedContent} </p>
            </div>
          )}
        </Route>
      </Switch>
    </div>
   </Router>
  );
};


export default App;