import './App.css';
import React,{useState,createContext} from 'react';
import {BrowserRouter,Route,Switch} from 'react-router-dom';
import Form from './components/Form';
import Nav from './components/Nav';
import LoginForm from './components/Login';
import Myprofile from './components/Myprofile';
import Home from './components/Home';
export const store = createContext();

function App() {
  const [token,setToken] = useState(null);
  return (
    <div className="App">
      <store.Provider value={[token,setToken]}>
      <BrowserRouter>
        <div>
          <Nav />
          <Switch>
            <Route exact path="/register" component={Form} />
            <Route exact path="/login" component={LoginForm} />
            <Route exact path="/myprofile" component={Myprofile} />
            <Route exact path="/" component={Home} />
          </Switch>
        </div>
      </BrowserRouter>
      </store.Provider>
    </div>
  );
}

export default App;
