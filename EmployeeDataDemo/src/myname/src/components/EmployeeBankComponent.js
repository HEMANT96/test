import React,{Component} from 'react';
import { Form } from 'reactstrap';
class EmpBank extends Component{
    constructor(props){
      super(props);
      this.state = {Bank:[] }
  }
componentDidMount(){
   this.getBank();
}
  
  getBank = _ => {
      fetch('http://localhost:4005/Bank/23')
        .then(response => response.json())
        .then(response => this.setState({Bank:response.data}))
        .catch(err => console.error(err))
    }
    render(){
        return(
         <dl>
    {this.state.Bank.map(Bank => {
     return(<div key={Bank.Employee_Id}>
     <div className="container3">
       <h1><u>{Bank.Employee_Name}'s Bank Details </u></h1>
      <Form>
           <div class="row">
               <div class="col">    
            <label for =" Employee_Id"><b>Employee_Id</b></label> 
           </div>
        <div class="col">        
        <input type="text" 
        class="form-control" placeholder="from" value={ Bank.Employee_Name}/>
        </div>
           </div> <br/>        
        
        
           <div class="row">
               <div class="col">
               
<label for="Bank_Name"><b>Bank_Name</b></label>
           </div>
        <div class="col">
        
        <input type="text" 
        class="form-control" placeholder="" value={Bank.Bank_Name}/>
        </div>
           </div>  <br/>
        
        
           <div class="row">
               <div class="col">
              <label for="IFSC"><b>IFSC</b></label>
           </div>
        <div class="col">
        
        <input type="text" 
        class="form-control" placeholder="" value={Bank.IFSC}/>
        </div>
           </div>  <br/>
           <div class="row">
               <div class="col">
              <label for="Account_No"><b>Account_No</b></label>
           </div>
        <div class="col">
        
        <input type="text" 
        class="form-control" placeholder="" value={Bank.Account_No}/>
        </div>
           </div>  <br/>
           <div class="row">
               <div class="col">
              <label for="PAN"><b>PAN</b></label>
           </div>
        <div class="col">
        
        <input type="text" 
        class="form-control" placeholder="" value={Bank.PAN}/>
        </div>
           </div>  <br/>
           <div class="row">
               <div class="col">
              <label for="Aadhar"><b>Aadhar</b></label>
           </div>
        <div class="col">
        
        <input type="text" 
        class="form-control" placeholder="" value={Bank.Aadhar}/>
        </div>
           </div>  <br/>
            </Form>
            </div>
      
            </div>
                 )
               })
               }
             </dl>
        );
    }
}
export default EmpBank;