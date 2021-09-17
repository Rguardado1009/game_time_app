import "../Conference.css";
import React from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from "react-router-dom";

const mystyle = {
    color: "white",
    padding: "2px",
    marginLeft: '5rem',
    marginBottom: '3rem',
    width: '12rem',
    height: '50%',
    textAlign: 'center',
    display: 'flex',
    alignItems: 'stretch'
    }
const imgStyle = { 
    height: '170px',
    width: '200px',
    textAlign: 'center',
    display: 'flex',
    alignItems: 'baseline'
    }

   
export default function Eastern({team}) {
    
    return (
        <div>      
            <div className="teamsContainer">
            
            <Card style={mystyle}>
            <Card.Img style={imgStyle} variant="top" src="https://i.ibb.co/syhktZR/Knicks.png" />
            <Card.Title>{team.team_name}</Card.Title>
            <Link to={`/conference/eastern/${team.id}`}>
            <Button variant="primary">View More</Button>
            </Link>
            </Card>
             </div>
             </div>
    )
}




