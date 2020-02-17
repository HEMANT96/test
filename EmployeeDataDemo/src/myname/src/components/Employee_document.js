import React, {Component} from 'react';
import { Form } from 'reactstrap';
//import Button from '@material-ui/core/Button'; 
 class document extends Component {
   constructor(props){
      super(props);
      this.state = {Document:[]}
  }
  
   componentDidMount(){
      this.getDocument();
  }
  
   getDocument = _ => {
      fetch('http://localhost:4004/Document/23')
        .then(response => response.json())
        .then(response => this.setState({Document:response.data}))
        .catch(err => console.error(err))
    }
render(){
    return(
    <div className="container"> 
     <h1><b><u>EMPLOYEE_DOCUMENT</u></b></h1> 
   <dl>
       {this.state.Document.map(Document =>{
        return( <div key={Document.Employee_Id}>

        <div className="container1">
        <Form>
        <div class="row">
           <div class="col"><lable for="Employee_Id"><b>Employee_Id</b></lable></div>
             <div>
                </div>
                <div class="col">
              <input type="text" 
              class="form-control" placeholder="" value={Document.Employee_Id}/> 
           </div> 
           </div><br/>

         <div class="row">
           <div class="col">
              <lable for ="EmployeePAN"><b>Employee_PAN</b></lable>
             </div>
             <div class="col">
              <input type="text"
              class="form-control" placeholder="" value={Document.PAN_CARD}/> 
           </div>
           </div>
           <br/>
        <div class="row">   
        <div class="col"><lable for="AADHAR_card"><b>AADHAR_Card</b></lable></div>
        <div class="col">
      <input type="text" 
        class="form-control" placeholder="" value={Document.AADHAR_card}/>
        </div> </div> <br/>
        
           <div class="row">
           <div class="col"><lable for="Other"><b>Other</b></lable> </div>
             <div class="col">       
            <input type="text" class="form-control" placeholder="" value={Document.Other}/> 
           </div> 
           </div>
           <br/>
        <div class="row">   
        <div class="col"> <lable for =" Other1"><b>Other1</b></lable></div>     
        <div class="col">
        <input type="text" class="form-control" placeholder="" value={Document.Other1}/>
        </div>
        </div>
         <br/>        
          
          <div>
      </div>       
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
 export default document;

