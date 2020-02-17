import React, {Component} from "react";
import { Form } from 'reactstrap';
import Button from '@material-ui/core/Button'; 
class Empleave extends Component{
    render()
    {
       return(
    <div className="Empleave">
           <div className="container">
              <h1><b>APPLY-LEAVE </b></h1>
              <Form>
         <div class="row">
               <div class="col">
               
              <input type="text"
              class="form-control" placeholder=""/> 
           </div>
        <div class="col">
        
        <input type="text" 
        class="form-control" placeholder="" />
        </div>
           </div> <br/>
        
           <div class="row">
               <div class="col">
               
              <input type="text" 
              class="form-control" placeholder="" /> 
           </div>
        <div class="col">        
        <input type="text" 
        class="form-control" placeholder="from" />
        </div>
           </div> <br/>        
        
        
           <div class="row">
               <div class="col">
               
              <input 
              type="text" class="form-control" placeholder=""/> 
           </div>
        <div class="col">
        
        <input type="text" 
        class="form-control" placeholder="" />
        </div>
           </div>  <br/>
        
        
           <div class="row">
               <div class="col">
               
              <input type="text" 
              class="form-control" placeholder=""/> 
           </div>
        <div class="col">
        
        <input type="text" 
        class="form-control" placeholder=""/>
        </div>
           </div>  <br/>
        <div>
           <div className="container">   <Button variant="contained">
  Submit
  </Button>&nbsp; &nbsp;&nbsp; </div>
         </div>
           </Form>
           </div>
           <div className="container">
        <h1><b>DUE-LEAVE</b> </h1>
        <Form>
           <div class="row">
                 <div class="col">
                 
                <input type="text"
                class="form-control" placeholder=""/> 
             </div>
          <div class="col">
          
          <input type="text" 
          class="form-control" placeholder="" />
          </div>
             </div> <br/>
          
             <div class="row">
                 <div class="col">
                 
                <input type="text" 
                class="form-control" placeholder="" /> 
             </div>
          <div class="col">        
          <input type="text" 
          class="form-control" placeholder="from" />
          </div>
             </div> <br/>        
          
          
             <div class="row">
                 <div class="col">
                 
                <input 
                type="text" class="form-control" placeholder=""/> 
             </div>
          <div class="col">
          
          <input type="text" 
          class="form-control" placeholder="" />
          </div>
             </div>  <br/>
          
          
             <div class="row">
                 <div class="col">
                 
                <input type="text" 
                class="form-control" placeholder=""/> 
             </div>
          <div class="col">
          
          <input type="text" 
          class="form-control" placeholder=""/>
          </div>
             </div>
          </Form>
            </div>
</div>             
         ); 
    }
}
export default Empleave;