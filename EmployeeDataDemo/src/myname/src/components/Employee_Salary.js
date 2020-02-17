import React, {Component} from 'react';
import { Form } from 'reactstrap';
//import Button from '@material-ui/core/Button'; 
 class Grade extends Component {
   constructor(props){
      super(props);
      this.state = {Salary:[]}
  }

   componentDidMount(){
      this.getEmployees();
 }
  

   getEmployees = _ => {
      fetch('http://localhost:4003/Salary/23')
        .then(response => response.json())
        .then(response => this.setState({Salary:response.data}))
        .catch(err => console.error(err))
    }

render(){
    return(       
    <div className="container3">
        <dl>
         {this.state.Salary.map(Salary =>{
           return( <div key={Salary.Employee_Id}>
   <h1>Salary of {Salary.Employee_Name} </h1>
    <Form>
         <div class="row">
               <div class="col">
               
              <label for="Employee_Name"><b>Employee_Name</b></label>
           </div>
        <div class="col">        
        <input type="text" class="form-control" placeholder="" value={Salary.Employee_Name}/>
        </div>
           </div> <br/>
        
           <div class="row">
               <div class="col">              
              <lable for="Employee_Id"><b>Employee_Id</b></lable>
           </div>
        <div class="col">        
        <input type="text" 
        class="form-control" placeholder="from" value={Salary.Employee_Id}/>
        </div>
           </div> <br/>        
        
        
           <div class="row">
               <div class="col">
               
              <lable for="year"><b>year</b></lable> 
           </div>
        <div class="col">
        
        <input type="text" 
        class="form-control" placeholder="" value={Salary.Year}/>
        </div>
           </div>  <br/>
        
        
           <div class="row">
               <div class="col">
               
              <lable for ="Month"><b>Month</b></lable> 
           </div>
        <div class="col">
        
        <input type="text" 
        class="form-control" placeholder="" value={Salary.Month}/>
        </div>
           </div>
           <br/> 
           <div class="row">
               <div class="col">
               
              <label for="Actual_Days"><b>Actual_Days</b></label>
           </div>
        <div class="col">
        
        <input type="text" class="form-control" placeholder="" value={Salary.Actual_Days} />
        </div>
           </div> <br/>
        
           <div class="row">
               <div class="col">              
              <lable for="Work_Days"><b>Work_Days</b></lable>
           </div>
        <div class="col">        
        <input type="text" 
        class="form-control" placeholder="from" value={Salary.Work_Days}/>
        </div>
           </div> <br/>        
        
        
           <div class="row">
               <div class="col">
               
              <lable for="Monthly_CTC"><b>Monthly_CTC</b></lable> 
           </div>
        <div class="col">
        
        <input type="text" 
        class="form-control" placeholder="" value={Salary.Monthly_CTC} />
        </div>
           </div>  <br/>
        
        
           <div class="row">
               <div class="col">
               
              <lable for ="Basic"><b>Basic</b></lable> 
           </div>
        <div class="col">
        
        <input type="text" 
        class="form-control" placeholder="" value={Salary.Basic}/>
        </div>
           </div>  <br/>
           <div class="row">
               <div class="col">
               
              <label for="HRA"><b>HRA</b></label>
           </div>
        <div class="col">
        
        <input type="text" class="form-control" placeholder="" value={Salary.HRA}/>
        </div>
           </div> <br/>
        
           <div class="row">
               <div class="col">              
              <lable for="EPF_Employer"><b>EPF_Employer</b></lable>
           </div>
        <div class="col">        
        <input type="text" 
        class="form-control" placeholder="from" value={Salary.EPF_Employer} />
        </div>
           </div> <br/>        
        
        
           <div class="row">
               <div class="col">
               
              <lable for="Emp_Employee"><b>Emp_Employee</b></lable> 
           </div>
        <div class="col">
        
        <input type="text" 
        class="form-control" placeholder="" value={Salary.Emp_Employee}/>
        </div>
           </div>  <br/>
        
        
           <div class="row">
               <div class="col">
               
              <lable for ="ESI"><b>ESI</b></lable> 
           </div>
        <div class="col">
        
        <input type="text" 
        class="form-control" placeholder="" value={Salary.ESI}/>
        </div>
           </div>  <br/>
        <div class="row">
               <div class="col">
               
              <label for="Transport"><b>Transport</b></label>
           </div>
        <div class="col">
        
        <input type="text" class="form-control" placeholder="" value={Salary.Transport}/>
        </div>
           </div> <br/>
        
           <div class="row">
               <div class="col">              
              <lable for="FBP"><b>FBP</b></lable>
           </div>
        <div class="col">        
        <input type="text" 
        class="form-control" placeholder="from" value={Salary.FBP}/>
        </div>
           </div> <br/>        
        
        
           <div class="row">
               <div class="col">
               
              <lable for="Specail_Allowance"><b>Specail_Allowance</b></lable> 
           </div>
        <div class="col">
        
        <input type="text" 
        class="form-control" placeholder="" value={Salary.Specail_Allowance}/>
        </div>
           </div>  <br/>
        
        
           <div class="row">
               <div class="col">
               
              <lable for ="Performance_Bonus"><b>Performance_Bonus</b></lable> 
           </div>
        <div class="col">
        
        <input type="text" 
        class="form-control" placeholder="" value={Salary.Performance_Bonus}/>
        </div>
           </div>  <br/>
      
        <div class="row">
               <div class="col">
               
              <label for="Other_Bonus"><b>Other_Bonus</b></label>
           </div>
        <div class="col">
        
        <input type="text" class="form-control" placeholder="" value={Salary.Other_Bonus}/>
        </div>
           </div> <br/>
        
           <div class="row">
               <div class="col">              
              <lable for="Monthly_Salary"><b>Monthly_Salary</b></lable>
           </div>
        <div class="col">        
        <input type="text" 
        class="form-control" placeholder="from" value={Salary.Monthly_Salary}/>
        </div>
           </div> <br/>        
        
        
           <div class="row">
               <div class="col">
               
              <lable for="EPF_Employer_Deduction"><b>EPF_Employer_Deduction</b></lable> 
           </div>
        <div class="col">
        
        <input type="text" 
        class="form-control" placeholder="" value={Salary.EPF_Employer_Deduction}/>
        </div>
           </div>  <br/>
        
        
           <div class="row">
               <div class="col">
               
              <lable for ="EPF_Employee_Deduction"><b>EPF_Employee_Deduction</b></lable> 
           </div>
        <div class="col">
        
        <input type="text" 
        class="form-control" placeholder="" value={Salary.EPF_Employee_Deduction}/>
        </div>
           </div>  <br/>
        <div>
        <div class="row">
               <div class="col">
               
              <label for="ESI_Deduction"><b>ESI_Deduction</b></label>
           </div>
        <div class="col">
        
        <input type="text" class="form-control" placeholder="" value={Salary.ESI_Deduction}/>
        </div>
           </div> <br/>
        
           <div class="row">
               <div class="col">              
              <lable for="TDS"><b>TDS</b></lable>
           </div>
        <div class="col">        
        <input type="text" 
        class="form-control" placeholder="from" value={ Salary.TDS}/>
        </div>
           </div> <br/>        
        
        
           <div class="row">
               <div class="col">
               
              <lable for="Other_Deduction"><b>Other_Deduction</b></lable> 
           </div>
        <div class="col">
        
        <input type="text" 
        class="form-control" placeholder="" value={Salary.Other_Deduction}/>
        </div>
           </div>  <br/>
        
        
           <div class="row">
               <div class="col">
               
              <lable for ="Total_Deduction"><b>Total_Deduction</b></lable> 
           </div>
        <div class="col">
        
        <input type="text" 
        class="form-control" placeholder="" value={Salary.Total_Deduction}/>
        </div>
           </div>  <br/>
        
           <div class="row">
               <div class="col">
               
              <lable for ="NetPayable"><b>NetPayable</b></lable> 
           </div>
        <div class="col">
        
        <input type="text" 
        class="form-control" placeholder="" value={Salary.NetPayable}/>
        </div>
           </div>  <br/>
   
   </div>     
   
        </Form>
   
   </div>
    )
   })
   }
 </dl>
</div>
);
   }
 }
 export default Grade;