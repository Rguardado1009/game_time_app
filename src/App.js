import React from "react";
import { Switch, Route } from "react-router-dom";
import './App.css';
import Home from './Home';
import Leagues from './Leagues'
import Teams from "./Teams";
import Signup from './Signup';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Switch>
        <Route path="/leagues/teams">
        <Teams/>
        </Route>
        <Route path="/leagues">
        <Leagues/>
        </Route>
        <Route path="/signup">
        <Signup/>
        </Route>
        <Route exact path="/">
        <Home/>
        </Route>
        <Route path="*">
					<h1>404 not found</h1>
				</Route>
        </Switch>
      
    
      </header>
    </div>
  );
}

export default App;
