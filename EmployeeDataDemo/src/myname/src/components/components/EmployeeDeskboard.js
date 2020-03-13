import React , {Component} from 'react';
import Image from "react-image";
import {Navbar, NavbarBrand} from 'reactstrap';
//import Side from './SideDrawer.js';
import Header from './HeaderComponent';
class Main extends Component {
    constructor(props){
      super(props);
      this.state={
      }
    }
   render(){
 return(
<div>
 <Navbar dark color="primary">
   <NavbarBrand  className="col-12 md 5" style={{textAlign:"left",fontSize:"50px"}}> <Image src="0.png" /> <b>Eninov Systems</b></NavbarBrand>
  </Navbar>
  <Header/>
  
  
  </div>
   );
   }
  }
export default Main;