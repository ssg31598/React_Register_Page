import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import { Route,BrowserRouter as Router, Switch } from 'react-router-dom';
import Register from './component/register';
import Home from './component/home';

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route path="/registration" component={Register} exact/>
          <Route path="/" component={Home} exact/>
        </Switch>
      </Router>
    </div>
  )
}

export default App;
