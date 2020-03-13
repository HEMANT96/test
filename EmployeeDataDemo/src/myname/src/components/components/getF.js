import React, {Component} from 'react';
import { Form ,Col,Row} from 'reactstrap';
//import {button} from '@material-ui/core/Button';
class getF extends Component{
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
 render(){   
    return(       
      <div className="insert">         
   <div className="container"> <h1>EMPLOYEE-PROFILE</h1></div>
    <hr/>
       <dl>
         {this.state.Employee.map(Employee =>{
           return( <div key={Employee.Employee_Id}>
     <div className="container">
         <Form>
                 <Row>
                         <Col>
   <input value ="Name_of_Employee_Id" class="form-control"/><input value={Employee.Employee_Id} class="form-control" /> 
                         </Col>
                 
                         <Col>
   <input value ="Name_of_Employee_Name" class="form-control"/><input value={Employee.Employee_Name} class="form-control"/>
                         </Col>
                   </Row><br/>
                   <div className="row">
                          <div className="col">    
   <input value="Name_of_Employee_AccountName" class="form-control"/><input value={Employee.Account_Name} class="form-control"/> 
                          </div>
                          <div className="col">    
   <input value="Name_of_Employee_Account_No" class="form-control"/><input value={Employee.Account_No} class="form-control"/> 
                          </div>
                   </div><br/>
   
                   <div className="row">                  
                         <div className="col">
   <input value="Name_of_Employee_IFSC_Code" class="form-control"/><input value={Employee.IFSC_Code} class="form-control"/> 
                         </div>
                         <div className="col">
   <input value="Name_of_Employee_Bank_Name" class="form-control"/><input value={Employee.Bank_Name} class="form-control"/>
                         </div>
                     </div> <br/>
                      </Form>           
             </div>
                </div>
             )
         })
         }
       </dl>
   </div>
      
       ); 
     }
   }
   export default getF;