import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./components/Home";
import National from  "./components/National";
import American from "./components/American"
import Leagues from "./components/Leagues";
import Teams from "./components/Teams";
import Signup from "./components/Signup";

function App() {
  return (
    <div className="App">
      <header className="App-header">    
        <Switch>
        <Route path="/leagues/american">
        <American/>
        </Route>
        <Route path="/leagues/national">
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
