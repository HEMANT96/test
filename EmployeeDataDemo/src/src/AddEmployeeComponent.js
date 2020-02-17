import React, {Component} from 'react';
import { Form ,Col } from 'reactstrap';
//import Button from '@material-ui/core/Button';
//import { makeStyles } from '@material-ui/core/styles';
 
  //eslint-disable-next-line
   
     /*  const useStyles = makeStyles(theme => ({
  button: {
    margin: theme.spacing(1),
  },
  input: {
    display: 'none',
  },
}));*/

class Addemployee extends Component {
    state={
       Employee:[],
        Adding:{
          row_id:0,
          emp_id:0,
          emp_name:'',
          emp_dob:'',
          emp_designation:'',
          emp_email:'',
          emp_ctc_current:0,
          emp_total_experience:0,
          emp_in_comp_experience:0,
          emp_joining_date:'',
          emp_relieving_date:'',
          emp_mobile:0,
          emp_residence_address:'',
          emp_permanent_address:'',
          emp_pan:'',
          emp_aadhar:0,
          emp_father_name:'',
          emp_mother_name:'',
          emp_siblings:0,
          emp_religion:'',
          emp_current_project:'',
          emp_account_bank:0,
          emp_account_pf:0,
    }
  }  

  // componentDidMount() {
    //  this.getEmployee();
    //}
        
    //getEmployee = _ => {
     // fetch('http://localhost:4001/Employee')         
      //.then(response => response.json())
       //.then(response => this.setState({ Employee:response.data }))
       //.catch(err => console.error(err))
    //}
    
    addAdding = _ => {
      const {Adding} = this.state;
      console.log(this.state);
      console.log(this.state.Adding.row_id)
      fetch(`http://localhost:4001/Employee/add?row_id=${Adding.row_id}&emp_id=${Adding.emp_id}&emp_name=${Adding.emp_name}&emp_dob=${Adding.emp_dob}&emp_designation=${Adding.emp_designation}&emp_email=${Adding.emp_email}&emp_ctc_current=${Adding.emp_ctc_current}&emp_total_experience=${Adding.emp_total_experience}&emp_in_comp_experience=${Adding.emp_in_comp_experience}&emp_joining_date=${Adding.emp_joining_date}&emp_relieving_date=${Adding.emp_relieving_date}&emp_mobile=${Adding.emp_mobile}&emp_residence_address=${Adding.emp_residence_address}&emp_permanent_address=${Adding.emp_permanent_address}&emp_pan=${Adding.emp_pan}&emp_aadhar=${Adding.emp_aadhar}&emp_father_name=${Adding.emp_father_name}&emp_mother_name=${Adding.emp_mother_name}&emp_siblings=${Adding.emp_siblings}&emp_religion=${Adding.emp_religion}&emp_current_project=${Adding.emp_current_project}&emp_account_bank=${Adding.emp_account_bank}&emp_account_pf=${Adding.emp_account_pf}`)
      .then(response => response.json())
      .then(this.getEmployee)
      .catch(err => console.error(err))
      console.log(this.state.Adding.row_id) 
    }

    renderAdding = ({row_id,emp_id,emp_name,emp_dob,emp_designation,emp_email,emp_ctc_current,emp_total_experience,emp_in_comp_experience,emp_joining_date,emp_relieving_date,emp_mobile,emp_residence_address,emp_pan,emp_aadhar,emp_father_name,emp_mother_name,emp_siblings,emp_religion,emp_current_project,emp_account_bank,emp_account_pf }) => <div key={row_id }>{emp_name}</div>


      render()
       {

     const { Employee, Adding } = this.state;
      return (
        <div className="container">
         <h1 className="row justify-content-center" >Employee Details</h1> 
         {Employee.map(this.renderAdding)}  

                   
                    </div>
      );
    }
    }
    
    export default Addemployee;