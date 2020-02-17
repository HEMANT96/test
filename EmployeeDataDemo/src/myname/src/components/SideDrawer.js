import React, { Component } from 'react'
import {Link} from 'react-router-dom';
import {FaUser, FaHome,FaMoneyBill,FaIndustry,FaUsers,FaMobile,FaBriefcase, FaMoneyBillWave, FaHospital} from 'react-icons/fa';
//import './SideDrawer.css'
 
class App extends Component{   
    render(){
      let drawerClasses = 'side-drawer';
      if(this.props.show){
        drawerClasses = 'side-drawer open';
      }
       return (
           <nav className={drawerClasses}>
                     <div className="container"> 
                     <ul>
                          <li><Link to="/container"><b> <FaHome/> Home </b></Link></li>
                          <li><Link to="/employee"><b> <FaUser/> EmployeeProfile</b></Link></li>
                          <li><Link to="/employeeSalary"><FaMoneyBill/><b> EmployeeSalray</b></Link></li>
                          <li><Link to="/Employeeteam"><b><FaUsers/> EmployeeTeam</b></Link></li>
                          <li><Link to="/Empocument"><b><FaBriefcase/> EmployeeDocument</b></Link></li>
                          <li><Link to="/Empleave"><b><FaHospital/> EmployeeLeave</b></Link></li>
                          <li><Link to="/EmBank"><b><FaMoneyBillWave/> EmployeeBank</b></Link></li>
                          <li><Link to="/Contact"><b><FaMobile/> Employeecontact</b></Link></li>
                          <li><Link to="/Organztion"><FaIndustry/> <b>Organztion</b></Link></li>                                  
                      </ul>                 
    </div>
    </nav>
  );
}
}
export default App;