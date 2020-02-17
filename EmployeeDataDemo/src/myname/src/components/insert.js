import React, {Component} from 'react';
import { Form } from 'reactstrap';
//import {Button }from '@material-ui/core/Button'; 
// eslint-disable-next-line
import { tsMethodSignature } from '@babel/types';
    class insert extends Component {
      state ={
         Employee:[],
          product: {
            Employee_Name:"",
            Employee_Id:0,
            Account_No:0,
            IFSC_Code:0,
            Account_Name:"",
            Bank_Name:"",
            }
          }
           componentDidMount() {
            this.getEmployee();
            }
         getEmployee = _ => {
         fetch('http://localhost:4001/add')         
        .then(response => response.json())
        .then(response =>this.setState({Employee:response.data}))
        .catch(err => console.error(err))
       }

         addProduct = _ => {
           const {product} = this.state;
           fetch(`http://localhost:4001/Employee/add?Employee_Name=${product.Employee_Name}&Employee_Id=${product.Employee_Id}&Account_No=${product.Account_No}&IFSC_Code=${product.IFSC_Code}&Account_Name=${product.Account_Name}&Bank_Name=${product.Bank_Name}`)
           .then(response => response.json())
           .then(this.getEmployee)
           .catch(err => console.error(err)) 
        }
      render()
    {
       const { product } = this.state;
          return (
                  <div className="container">
                         <h1 className="row justify-content-center" >Add Employee Details</h1> 
                                <Form>                    
                                    <div class="row">
                                            <div class="col">      
                                         <input type="text"
                                      value={product.Employee_Name}
                                  onChange={e => this.setState({product: {...product,Employee_Name: e.target.value }})}
                              class="form-control" placeholder="Employee_Name"/> 
                           </div>
                       <div class="col">
                     <input type="text" 
                  value={product.Employee_Id}
                onChange={e => this.setState({product: {...product,Employee_Id: e.target.value }})}
            class="form-control" placeholder="Employee_Id"/>
          </div>
      </div> 
    <br/>
   <div class="row">
       <div class="col">     
        <input type="text" 
           value={product.Account_No}
          onChange={e => this.setState({product: {...product,Account_No: e.target.value }})}
      class="form-control" placeholder="Account_No"/> 
   </div>
        <div class="col">
          <input type="text" 
              value={product.IFSC_Code}
                onChange={e => this.setState({product: {...product,IFSC_Code: e.target.value }})}
             class="form-control" placeholder="Medical Allowance" />
           </div>
        </div> 
      <br/>
   <div class="row">
       <div class="col">
                 <input 
              value={product.Account_Name}
          onChange={e => this.setState({product: {...product,Account_Name: e.target.value }})}
      type="text" class="form-control" placeholder="Account_Name" /> 
   </div>
<div class="col">
    <input type="text" 
          value={product.Bank_Name}
            onChange={e => this.setState({product: {...product,Bank_Name: e.target.value }})}
                 class="form-control" placeholder="Bank_Name"/>
                       </div>
                            </div>  
                                 <br/>
                <div>
              <button onClick ={this.addProduct}>Submit</button>         
                     {/*      
                     <Col md={{size:10 ,offset:5}}>
                     <Button 
                                       onClick = {this.addProduct} 
                                            variant="contained">
                                           Submit
                                     </Button>&nbsp; &nbsp;&nbsp;
                             <Button variant="contained" color="primary"  > 
                                Clear
                     </Button> /Col></Col>*/}
                 </div>
            </Form>
        </div>
      );
    }
  }
  export default insert;