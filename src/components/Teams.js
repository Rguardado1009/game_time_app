
import "../Teams.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import Table from 'react-bootstrap/Table';


function Teams({team}){

  return( 
   
  <div className="infoContainer">
   
    <h1> </h1>
    <Table striped bordered hover variant="dark">
  <thead>
  {/* {team.players.map((player) => (player.name))} */}
    <tr>
      <th>#</th>
      <th scope="col">player</th>
      <th scope="col">Number</th>
      <th scope="col">Position</th>
      <th scope="col">Games</th>
      <th scope="col">Points</th>
      <th scope="col">FG</th>
      <th scope="col">FG%</th>
      <th scope="col">3PT</th>
      <th scope="col">FT</th>
      <th scope="col">OR</th>
      <th scope="col">DR</th>
      <th scope="col">REB</th>
      <th scope="col">AST</th>
      <th scope="col">STL</th>
      <th scope="col">BLK</th>
      <th scope="col">TO</th>
      <th scope="col">PF</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td></td>
      <td>{}</td>
      <td>Otto</td>
      <td>@mdo</td>
    </tr>
  </tbody>
</Table>
{/*  
 teams.players

[ teams
    {
        "id": 1,
        "team_name": "Los Angeles Clippers",
        "city": "California",
        "league": "NBA",
        "standing": "21",
        "wins": 36,
        "losses": 3,
        "logo": null,
        "players": [
            {
                "id": 1,
                "name": "Giannis Antetokounmpo",
                "number": 92,
                "position": "Point Guard",
                "games": 57,
                "points": 18,
                "field_goals": 4.0,
                "fg_percentage": 13.55,
                "three_points": 63.45,
                "freethrows": 33.35,
                "offensive_rebounds": 95.98,
                "defensive_rebounds": 98.17,
                "rebounds": 90.74,
                "assist": 38.32,
                "blocks": 73.11,
                "steals": 19.72,
                "turnovers": 63.03,
                "fouls": 37.13,
                "team_id": 1
            },
            {
                "id": 1,
                "name": "Giannis Antetokounmpo",
                "number": 92,
                "position": "Point Guard",
                "games": 57,
                "points": 18,
                "field_goals": 4.0,
                "fg_percentage": 13.55,
                "three_points": 63.45,
                "freethrows": 33.35,
                "offensive_rebounds": 95.98,
                "defensive_rebounds": 98.17,
                "rebounds": 90.74,
                "assist": 38.32,
                "blocks": 73.11,
                "steals": 19.72,
                "turnovers": 63.03,
                "fouls": 37.13,
                "team_id": 1
            }, */}


    {/* <table className="infoTable"class="table table-striped table-dark">
  <thead>
    <tr>
      <th scope="col">player</th>
      <th scope="col">Number</th>
      <th scope="col">Position</th>
      <th scope="col">Games</th>
      <th scope="col">Points</th>
      <th scope="col">FG</th>
      <th scope="col">FG%</th>
      <th scope="col">3PT</th>
      <th scope="col">FT</th>
      <th scope="col">OR</th>
      <th scope="col">DR</th>
      <th scope="col">REB</th>
      <th scope="col">AST</th>
      <th scope="col">STL</th>
      <th scope="col">BLK</th>
      <th scope="col">TO</th>
      <th scope="col">PF</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">{player.name}</th>
      <td>{player.number}</td>
      <td>{player.position}</td>
      <td>{player.games}</td>
      <td>{player.points}</td>
      <td>{player.field_goals}</td>
      <td>{player.fg_percentage}</td>
      <td>{player.three_points}</td>
      <td>{player.freethrows}</td>
      <td>{player.offensive_rebounds}</td>
      <td>{player.defensive_rebounds}</td>
      <td>{player.rebounds}</td>
      <td>{player.assist}</td>
      <td>{player.blocks}</td>
      <td>{player.steals}</td>
      <td>{player.turnovers}</td>
      <td>{player.fouls}</td>
    </tr>
  </tbody>
</table> */}

  </div>


  )}

export default Teams
