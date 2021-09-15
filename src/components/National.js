import '../App.css'
import React from "react";


function nationalLeague(){

return(
    <div className="teamsContainer">
        <h1 className="teamsTitle">Choose a team</h1>
        <div clasName = "buttonContainer1">
        <button className="teamButton" id="phillies"></button>
        <button className="teamButton" id="braves"></button>
        <button className="teamButton" id="mets"></button>
        <button className="teamButton" id="dodgers"></button>
        <button className="teamButton" id="washington"></button>
        </div>
        <div clasName = "buttonContainer2">
        <button className="teamButton" id="marlins"></button>
        <button className="teamButton" id="cincinati"></button>
        <button className="teamButton" id="arizona"></button>
        <button className="teamButton" id="giants"></button>
        <button className="teamButton" id="pirates"></button>
        </div>
        <div clasName = "buttonContainer3">
        <button className="teamButton" id="cubs"></button>
        <button className="teamButton" id="milwaukee"></button>
        <button className="teamButton" id="padres"></button>
        <button className="teamButton" id="colorado"></button>
        <button className="teamButton" id="cardinals"></button>
        </div>
    </div>
)}

export default nationalLeague