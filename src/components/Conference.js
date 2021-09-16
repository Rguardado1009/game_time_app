import React from 'react'
import '../Leagues.css';
import { Link } from "react-router-dom";
export default function Conference() {
    return (
    <>
    <h1 className="nba-text" > 
    NBA CONFERENCES 
    <img className="nba-logo" src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSn5FYTbxH-epenIy1f9VCNpe3qPplYQQE17wisKy8-nTU-lBp2fbzT4DNEH41hamhkUl4&usqp=CAU"} alt="NBA"/></h1>
    
         <div className="conference-container">
         <Link to="/conference/eastern">
         <img className="eastern-logo" src={"https://upload.wikimedia.org/wikipedia/commons/9/96/Eastern_Conference_%28NBA%29_logo_2018.png"} alt="eastern"/>
         </Link>
         <Link to="/conference/western">
         <img className="western-logo" src={"https://upload.wikimedia.org/wikipedia/commons/thumb/4/45/Western_Conference_%28NBA%29_logo_2018.png/800px-Western_Conference_%28NBA%29_logo_2018.png"} alt="western" />
         </Link>
                
                
        </div>
    </>
    )
}
