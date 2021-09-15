import React from 'react'
import '/Users/ronald/Development/project/game_time_app/game-time-app-frontend/src/Leagues.css';
import Mlb from '/Users/ronald/Development/project/game_time_app/game-time-app-frontend/src/Images/MLB.png'
import American from '/Users/ronald/Development/project/game_time_app/game-time-app-frontend/src/Images/1200px-American_League_logo.svg.png'
import National from '/Users/ronald/Development/project/game_time_app/game-time-app-frontend/src/Images/1200px-MLB_National_League_logo.svg.png'
export default function Leagues() {
    return (
    <>
    <h1 className="mlb-text" > 
    MLB LEAGUES 
    <img className="mlb-logo" src={Mlb} alt="MLB"/></h1>
    
         <div className="league-container">
                <img className="american-logo" src={American} alt="american" onClick />
                <img className="national-logo" src={National} alt="national" />
        </div>
    </>
    )
}
