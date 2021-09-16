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
export default function Eastern({teams}) {
    
    return (
        <div>
            console.log(teams)      
            <div className="teamsContainer">
            <div className="atlantic">
            <Card style={mystyle}>
            <Card.Img style={imgStyle} variant="top" src={teams.logo} />
            <Card.Title>{teams[0].players}</Card.Title>
            <Link to="/conference/eastern/teams">
            <Button variant="primary">View More</Button>
            </Link>
            </Card>
            {/* <Card style={mystyle}>
            <Card.Img style={imgStyle} variant="top" src="https://i.ibb.co/n8S3RkL/Nets.png" />
            <Card.Title>{team.team_name}</Card.Title>
            <Button variant="primary">View More</Button>
            </Card>
            <Card style={mystyle}>
            <Card.Img style={imgStyle} variant="top" src="https://i.ibb.co/syhktZR/Knicks.png" />
            <Card.Title>TEAM</Card.Title>
            <Button variant="primary">View More</Button>
            </Card>
            <Card style={mystyle}>
            <Card.Img style={imgStyle} variant="top" src="https://i.ibb.co/s2nD7x3/Celtics.png" />
            <Card.Title>TEAM</Card.Title>
            <Button variant="primary">View More</Button>
            </Card>
            <Card style={mystyle}>
            <Card.Img style={imgStyle} variant="top" src="https://i.ibb.co/wJ5xC9M/Raptors.png" />
            <Card.Title>TEAM</Card.Title>
            <Button variant="primary">View More</Button>
            </Card> */}
                 {/* <img src="https://i.ibb.co/j37bMR1/76ers.png" alt="76ers" className="ers"/>
                 <img src="https://i.ibb.co/n8S3RkL/Nets.png" alt="Nets" className="Nets"/> 
                 <img src="https://i.ibb.co/syhktZR/Knicks.png" alt="Knicks" className="Knicks"/>
                 <img src="https://i.ibb.co/s2nD7x3/Celtics.png" alt="Celtics" className="Celtics"/>
                 <img src="https://i.ibb.co/wJ5xC9M/Raptors.png" alt="Raptors" className="Raptors"/> */}
             </div>
             {/* <div className="central">
             <Card style={mystyle}>
            <Card.Img style={imgStyle} variant="top" src="https://i.ibb.co/T0PM2Gj/Bucks.png" />
            <Card.Title>TEAM</Card.Title>
            <Button variant="primary">View More</Button>
            </Card>
            <Card style={mystyle}>
            <Card.Img style={imgStyle} variant="top" src="https://i.ibb.co/M9d2TPB/Pacers.png" />
            <Card.Title>TEAM</Card.Title>
            <Button variant="primary">View More</Button>
            </Card>
            <Card style={mystyle}>
            <Card.Img style={imgStyle} variant="top" src="https://i.ibb.co/DpVVmmN/Bulls.png" />
            <Card.Title>TEAM</Card.Title>
            <Button variant="primary">View More</Button>
            </Card>
            <Card style={mystyle}>
            <Card.Img style={imgStyle} variant="top" src="https://i.ibb.co/z5t63g3/Cavaliers.png" />
            <Card.Title>TEAM</Card.Title>
            <Button variant="primary">View More</Button>
            </Card>
            <Card style={mystyle}>
            <Card.Img style={imgStyle} variant="top" src="https://i.ibb.co/VCjxm9j/Pistons.png" />
            <Card.Title>TEAM</Card.Title>
            <Button variant="primary">View More</Button>
            </Card> */}
                 {/* <img src="https://i.ibb.co/T0PM2Gj/Bucks.png" alt="Bucks" className="Bucks"/>
                 <img src="https://i.ibb.co/M9d2TPB/Pacers.png" alt="Pacers" className="Pacers"/>
                 <img src="https://i.ibb.co/DpVVmmN/Bulls.png" alt="Bulls" className="Bulls"/>
                 <img src="https://i.ibb.co/z5t63g3/Cavaliers.png" alt="Cavaliers" className="Cavaliers"/>
                 <img src="https://i.ibb.co/VCjxm9j/Pistons.png" alt="Pistons" className="Pistons"/> */}
             {/* </div>
             <div className="southeast">
             <Card style={mystyle}>
            <Card.Img style={imgStyle} variant="top" src="https://i.ibb.co/njwpMyC/Hawks.png" />
            <Card.Title>TEAM</Card.Title>
            <Button variant="primary">View More</Button>
            </Card>
            <Card style={mystyle}>
            <Card.Img style={imgStyle} variant="top" src="https://i.ibb.co/ZmFYkGM/Wizards.png" />
            <Card.Title>TEAM</Card.Title>
            <Button variant="primary">View More</Button>
            </Card>
            <Card style={mystyle}>
            <Card.Img style={imgStyle} variant="top" src="https://i.ibb.co/pyZx7rw/Hornets.png" />
            <Card.Title>TEAM</Card.Title>
            <Button variant="primary">View More</Button>
            </Card>
            <Card style={mystyle}>
            <Card.Img style={imgStyle} variant="top" src="https://i.ibb.co/XtfNdcp/Magic.png" />
            <Card.Title>TEAM</Card.Title>
            <Button variant="primary">View More</Button>
            </Card>
            <Card style={mystyle}>
            <Card.Img style={imgStyle} variant="top" src="https://i.ibb.co/C7rrqTS/Heat.png" />
            <Card.Title>TEAM</Card.Title>
            <Button variant="primary">View More</Button>
            </Card> */}
                 {/* <img src="https://i.ibb.co/njwpMyC/Hawks.png" alt="Hawks" className="Hawks"/>
                 <img src="https://i.ibb.co/ZmFYkGM/Wizards.png" alt="Wizards" className="Wizards"/>
                 <img src="https://i.ibb.co/pyZx7rw/Hornets.png" alt="Hornets" className="Hornets"/>
                 <img src="https://i.ibb.co/XtfNdcp/Magic.png" alt="Magic" className="Magic"/>
                 <img src="https://i.ibb.co/C7rrqTS/Heat.png" alt="Heat" className="Heat"/> */}
             {/* </div> */}
        </div>
        </div>
    )
}




