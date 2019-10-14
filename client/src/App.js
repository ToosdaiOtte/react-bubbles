import React, { useState } from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

import Login from "./components/Login";
import BubblePage from './components/BubblePage';
import PrivateRoute from './components/PrivateRoute';
import ColorForm from './components/ColorForm';

import "./styles.scss";



function App() {
  const [colorList, setColorList] = useState([]);
  return (
    <Router>
      <div className="App">
        <nav>
          <Link to="/login">Login</Link>
          <Link to="/protected">Bubbles Page</Link>
          <Link to='/color-form'>Add Color</Link>             
        </nav>
        <Switch>
          <PrivateRoute exact path="/protected" 
            component={BubblePage}
          />
          <PrivateRoute exact path='/color-form'
            component={ColorForm}
          />          
          <Route exact path="/login" component={Login} />
          {/* 
            Build a PrivateRoute component that will 
            display BubblePage when you're authenticated 
          */}          
          </Switch>
      </div>
    </Router>
  );
}

export default App;
