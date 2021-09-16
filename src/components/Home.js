import React from 'react'
import { Link } from "react-router-dom";

export default function Home() {
    return (
        <div className="main-container">
            <h1 className= "App-title"> Welcome to Game Time! </h1>
            <Link to="/leagues">
            <button className = "homeBtn"> View Leagues</button>
            </Link>
            
        </div>
    )
}
