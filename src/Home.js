import React from 'react'
import './App.css';
import homeLogo from "/Users/ronald/Development/project/game_time_app/game-time-app-frontend/src/Images/1x/Artboard 57.png" 

export default function Home() {
    return (
        <div className="main-container">
            <h1 className= "App-title"> Welcome to Game Time! </h1>
            <br/>
            <button className = "homeBtn"> Create My Team</button>
        </div>
    )
}
