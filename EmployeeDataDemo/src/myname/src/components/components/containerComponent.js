import React ,{Component} from "react";
import {Card} from 'reactstrap';
//import Image from "react-image";
class Container extends Component{ 
    constructor(props){
        super(props);
        this.state = {Employee:[] }
    }
componentDidMount(){
     this.getEmployees();
}
    
    getEmployees = _ => {
        fetch('http://localhost:4001/Employee/24')
          .then(response => response.json())
          .then(response => this.setState({Employee:response.data}))
          .catch(err => console.error(err))
      }
    render()
    {
      return (   
         <div >
              <dl>
         {this.state.Employee.map(Employee =>{
           return( <div key={Employee.Employee_Id}>
     <div className="container2">
         
         <div className="container2">
            
            <Card className="card">     
           <h1><u>EMPLOYEE PROFILE</u></h1>
              <div className="container">
             <p><b><input value="Employee_Name"/>::-::<input value={Employee.Employee_Name}/></b></p> 
              <p><b><input value="Employee_Id"/>:-:<input value={Employee.Employee_Id}/></b></p>
           <p><b><input value="Account_Name"/>:-:<input value={Employee.Account_Name}/></b></p>
           <p><b><input value="Account_No"/>:-:<input value={Employee.Account_No}/></b></p> 
           <p><b><input Employee_IFSC value="IFSC_Code"/>:-:<input value={Employee.IFSC_Code}/></b></p> 
           <p><b><input value="Employee_Bank"/>:-:<input value={Employee.Bank_Name}/></b></p>
              </div>
              </Card>          
        </div>
                    
             </div>
                </div>
             )
         })
         }
       </dl>
            <div >
              <div className="container1">
              <Card className="card1">     
              <h1><u></u>EMPLOYEE SALARY</h1>  
               <p></p> 
              </Card>                 
              </div> 
              <div className="container1">
              <Card className="card1">
              <h1>EMPLOYEE DOC</h1>  
               <p> </p> 
              </Card>               
              </div> 
              <div className="container1">
              <Card className="card1">
              <h1>EMPLOYEE TEAM</h1>  
               <p></p> 
              </Card>               
              </div>
              <div className="container1">
              <Card className="card1">
              <h1>EMPLOYEE LEAVES</h1>  
               <p></p> 
              </Card>               
              </div>
              <div className="container1">
              <Card className="card1">
              <h1>EMPLOYEE BANK</h1>  
               <p> </p> 
              </Card>               
              </div>
              <div className="container1">
              <Card className="card1">
               <h1>EMPLOYEE CONTACT</h1>  
               <p></p> 
              </Card>               
              </div>
          </div>
      </div>
           );
      }
  }
 
export default Container;