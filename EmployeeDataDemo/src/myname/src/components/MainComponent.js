import React, {Component} from 'react';
import EmployeeDeskboard from './EmployeeDeskboard';
import Footer from './Footer.js';
import Container from './containerComponent'; 
import EmpSalary from './Employee_Salary';
import Empteam from './EmployeeTeamComponent'
import Emleave from'./EmployeeleaveComponent';
import EmpDocument from './Employee_document';
import Embank from './EmployeeBankComponent';
import EmpContact from './EmployeeContactComponent';
import OrangZ from './OrganizationComponent';
import EmployeeD from './getF';
import {Route,Switch,Redirect} from 'react-router-dom';
class Main extends Component {   
  render(){
  return (
    <div className="Main"> {/*   
      <Route path="/empDocument" Component = {EmpDocument}/>
      <Route path="/empSalray" Component = {EmpSalary}/>
   </Router>  */}         
     <EmployeeDeskboard/> 
     <Switch>
     <Route path="/EmBank"><Embank/></Route> 
     <Route path="/Contact"><EmpContact/></Route> 
     <Route path="/Organztion"><OrangZ/></Route> 
     <Route path="/employee"><EmployeeD/></Route> 
     <Route path="/Empleave"><Emleave/></Route> 
     <Route path="/Employeeteam"><Empteam/></Route>       
     <Route path="/employeeSalary"> <EmpSalary/> </Route> 
     <Route path="/container"> <Container/> </Route> 
      <Route path="/Empocument" ><EmpDocument/> </Route> 
      <Redirect path="/container"> <Container/> </Redirect>   
          </Switch>
<Footer/>         
    </div>
  );
}
}
export default Main;
