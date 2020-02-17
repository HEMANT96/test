import React,{Component} from 'react';
import { Form } from 'reactstrap';
import Button from '@material-ui/core/Button'; 
class EmpContact extends Component{
    render(){
        return(
            <div className="Container">

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
            </Form>
            <Button className="container"> CHANGE CONTACT</Button>           
            </div>
        );
    }
}
export default EmpContact;