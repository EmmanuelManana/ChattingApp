import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import './App.css';
//components
import Chat from './components/Chat'
import Login from './components/Login'

function App() {
  return (
    //BEM
    <div className="app">
      <Router>
        <Route path="/" exact component={Login}/>
        <Route path="/chatroom" component={Chat}/>
      </Router>
    </div>
  );
}

export default App;
