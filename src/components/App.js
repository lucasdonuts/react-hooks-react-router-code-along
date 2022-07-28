import React from 'react';
import { Switch, Route } from 'react-router-dom';
import NavBar from './NavBar';
import About from './About';
import Login from './Login';
import Home from './Home';

const App = () => {
  return (
    <div>
      <NavBar />
      <Switch>
        <Route exact path="/about">
          <About />
        </Route>
        <Route exact path="/login">
          <Login />
        </Route>
        <Route exact path="/">
          <Home />
        </Route>
      </Switch>
    </div>
  );
}

export default App;