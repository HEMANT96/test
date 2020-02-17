import React, {Component} from 'react';
import { Form,Col } from 'reactstrap';
import Button from '@material-ui/core/Button'; 
// eslint-disable-next-line
import { tsMethodSignature } from '@babel/types';
class Grade extends Component {

   state ={
      salaryStructure:[],
      product: {
         row_id:0,
         from_salary:0,
         to_salary:0,
         tax_in_percent:0,
         sur_plus_in_percent:"",
         start_year:"",
         end_year:"",
      }
   }
 
   componentDidMount() {
    this.getsalaryStructure();
  }

   getsalaryStructure = _ => {
   fetch('http://localhost:4004/salaryStructure')         
   .then(response => response.json())
   .then(response =>this.setState({salaryStructure:response.data}))
   .catch(err => console.error(err))
 }

    addProduct = _ => {
      const {product} = this.state;
      fetch(`http://localhost:4004/salaryStructure/add?row_id=${product.row_id}&from_salary=${product.from_salary}&to_salary=${product.to_salary}&tax_in_percent=${product.tax_in_percent}&sur_plus_in_percent=${product.sur_plus_in_percent}&start_year=${product.start_year}&end_year=${product.end_year}`)
      .then(response => response.json())
      .then(this.getsalaryStructure)
      .catch(err => console.error(err)) 
  }

    renderProduct = ({ row_id, from_salary, to_salary, tax_in_percent, sur_plus_in_percent, start_year, end_year }) => <div key={row_id }>{from_salary}</div>

    render()
    {
      const { salaryStructure, product } = this.state;
    return (
        <div className="container">
             {salaryStructure.map(this.renderProduct)}
        <h1 className="row justify-content-center" >Grade Details</h1> 
        <Form>

        
                
<div class="row">
       <div class="col">
       
      <input type="text"
          value={product.row_id}
          onChange={e => this.setState({product: {...product,row_id: e.target.value }})}
      class="form-control" placeholder="row_id" /> 
   </div>
<div class="col">

<input type="text" 
    value={product.from_salary}
    onChange={e => this.setState({product: {...product,from_salary: e.target.value }})}
class="form-control" placeholder="Basic Salary" />
</div>
   </div> <br/>

   <div class="row">
       <div class="col">
       
      <input type="text" 
          value={product.to_salary}
          onChange={e => this.setState({product: {...product,to_salary: e.target.value }})}
      class="form-control" placeholder="HRA" /> 
   </div>
<div class="col">

<input type="text" 
    value={product.tax_in_percent}
    onChange={e => this.setState({product: {...product,tax_in_percent: e.target.value }})}
class="form-control" placeholder="Medical Allowance" />
</div>
   </div> <br/>



   <div class="row">
       <div class="col">
       
      <input 
          value={product.sur_plus_in_percent}
          onChange={e => this.setState({product: {...product,sur_plus_in_percent: e.target.value }})}
      type="text" class="form-control" placeholder="sur_plus_in_percent" /> 
   </div>
<div class="col">

<input type="text" 
    value={product.start_year}
    onChange={e => this.setState({product: {...product,start_year: e.target.value }})}
class="form-control" placeholder="Provident Fund" />
</div>
   </div>  <br/>


   <div class="row">
       <div class="col">
       
      <input type="text" 
          value={product.end_year}
          onChange={e => this.setState({product: {...product,end_year: e.target.value }})}
      class="form-control" placeholder="Professional Tax" /> 
   </div>
<div class="col">

<input type="text" 
    value={product.login_id}
    onChange={e => this.setState({product: {...product,login_id: e.target.value }})}
class="form-control" placeholder="Current CTC" />
</div>
   </div>  <br/>

   <div>
   <Col md={{size:10 ,offset:5}}>   <Button 
    onClick = {this.addProduct} 
   variant="contained">
Submit
</Button>&nbsp; &nbsp;&nbsp;
<Button variant="contained" color="primary"  >
Clear
</Button></Col>
</div>

</Form>
        </div>
    );
  }

   
  }
  export default Grade;