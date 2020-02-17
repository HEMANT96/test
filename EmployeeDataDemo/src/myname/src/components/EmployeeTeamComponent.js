import React, {Component} from 'react';
import {Card} from 'reactstrap';
//import Image from "react-image";
class Empteam extends Component {
  constructor(props){
    super(props);
    this.state = {Team:[]}
}

 componentDidMount(){
    this.getEmployees();
}

 getEmployees = _ => {
    fetch('http://localhost:4002/Team/01')
      .then(response => response.json())
      .then(response => this.setState({Team:response.data}))
      .catch(err => console.error(err))
  }

render(){
    return(
      <dl>
      {this.state.Team.map(Team =>{
        return( <div key={Team.Employee_Id}>
            <div className="Empteam"> 
             <div className="container3">
              <Card className="card1">     
              <h1><u>Team Lead</u></h1>  
              <h1><u>{Team.Team_Lead}</u></h1>
              </Card>                 
              </div> 
              <div className="container1">
              <Card className="card1">
              <h1><u>TEAMMATE</u></h1>  
              <h1>{Team.TeamMate1}</h1>
              </Card>               
              </div> 
              <div className="container1">
              <Card className="card1">
              <h1><u>TEAMMATE</u></h1>  
              <h1>{Team.TeamMate2}</h1>
               <p> </p> 

              </Card>               
              </div> 
              <div className="container1">
              <Card className="card1">
              <h1><u>TEAMMATE</u></h1>
              <h1>{Team.TeamMate3}</h1>  
               <p> </p> 
              </Card>               
              </div> 
              <div className="container1">
              <Card className="card1">
              <h1><u>TEAMMATE</u></h1>  
              <h1>{Team.TeamMate4}</h1>
               <p></p> 
              </Card>               
              </div>
              <div className="container1">
              <Card className="card1">
              <h1><u>TEAMMATE</u></h1>
              <h1>{Team.TeamMate5}</h1>  
               <p></p> 
              </Card>               
              </div>
              <div className="container1">
              <Card className="card1">
              <h1><u>TEAMMATE</u></h1>
              <h1>{Team.TeamMate6}</h1>  
               <p> </p> 
              </Card>               
              </div>
              <div className="container1">
              <Card className="card1">
              <h1><u>TEAMMATE</u></h1>
              <h1>{Team.TeamMate7}</h1>  
               <p> </p> 
              </Card>               
              </div> 
              <div className="container1">
              <Card className="card1">
              <h1><u>TEAMMATE</u></h1>  
              <h1>{Team.TeamMate8}</h1>
               <p> </p> 
              </Card>               
              </div> 
              <div className="container1">
              <Card className="card1">
              <h1><u>TEAMMATE</u></h1>  
              <h1>{Team.TeamMate9}</h1>
               <p></p> 
              </Card>               
              </div>  
       </div>
        </div> )
         })
         }
       </dl>
    );
  }
}
export default Empteam;