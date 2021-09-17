import React, {useState, useEffect} from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./components/Home";
import Eastern from  "./components/Eastern";
import Western from "./components/Western"
import Conference from "./components/Conference";
import Teams from "./components/Teams";
import Signup from "./components/Signup";
import Footer from "./components/Footer";

function App() {
const [teams, setTeams] = useState([]);

useEffect(()=>{
  fetch("http://localhost:9292/team")
  .then((r) => r.json())
  .then((teams) => setTeams(teams));
}, [])

  return (
    <div className="App">
      <header className="App-header">    
        <Switch>
        <Route path="/conference/western/teams">
        {teams.map((team)=>(<Teams team={team}/>))} 
        </Route>
        <Route path="/conference/western">
        {teams.map((team)=> (<Western team={team}/>))}
        </Route>
        <Route path="/conference/eastern/:id">
        {teams.map((team)=>(<Teams team={team}/>))}
        </Route>
        <Route path="/conference/eastern">
        {teams.map((team)=> (<Eastern team={team}/>))}
        </Route>
        <Route path="/conference">
        <Conference/>
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
        <Footer/>
      </header>
    </div>
  );
}

export default App;
