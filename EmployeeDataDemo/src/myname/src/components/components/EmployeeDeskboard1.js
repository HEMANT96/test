import {Link} from "react-router-dom";
//import Container from './containerComponent.js'
//import EmployeeSalary from "./Employee_Salary.js";
//import EmployeeDocument from "./Employee_document.js";
import React,{Component} from "react";
import Image from "react-image";
//import Footer from "./Footer.js";
import Sidebar from "react-sidebar";
import { Navbar, NavbarBrand} from 'reactstrap';
class App1 extends Component {
  constructor(props) {
    super(props)
    this.state = {
      sidebarOpen: true,
    };
    this.onSetSidebarOpen = this.onSetSidebarOpen.bind(this);
  } 

  onSetSidebarOpen(open) {
    this.setState({ sidebarOpen: open });
  } 
      
  render() {
    return (
      <div className="App1">      
      <Sidebar 
        open={this.state.sidebarOpen}
        onSetOpen={this.onSetSidebarOpen} 
               
      sidebar={
         <div className="container"><Image src="0.png"  alt="eninov"/>
        <div className="container">            
          <ul>
                          
              <li><Link to="/container"><b> Home </b></Link></li>
              <li><Link to="/employee"><b>Employee_Profile</b></Link></li>
              <li><Link to="/employeeSalary"><b>EmployeeSalray</b></Link></li>
              <li><Link to="/Employeeteam"><b>Employee_Team</b></Link></li>
              <li><Link to="/Empocument"><b>Employee_Documents</b></Link></li>
              <li><Link to="/Empleave"><b>Employee_Leave</b></Link></li>
              <li><Link to="/EmBank"><b>Employee_Bank</b></Link></li>
              <li><Link to="/Contact"><b>Employee_contact</b></Link></li>
              <li><Link to="/Organztion"><b>Organztion</b></Link></li>                                  
          </ul>                  
        </div>
      </div> 
  }/>
     <Navbar dark color="primary">
     <div className="container">
       <NavbarBrand href="./react">Employee Details<hr/></NavbarBrand>
       <button onClick={() => this.onSetSidebarOpen(true)}>
          <b>MENU</b>
        </button>
     </div>
  </Navbar> 
 </div> 
    );
  }
}
export default App1;