import React,{Component} from 'react';
import { MenuItem } from '@material-ui/core';
import {Nav,NavItem,Navbar,NavDropdown} from 'react-bootstrap';

class Menu extends Component{
    render(){
        return(
            <Navbar inverse fixed>
                <Navbar.Header>
                    <Navbar.Brand>
                  <a href="#">HEllo</a>
                    </Navbar.Brand>
                    <Navbar.Toggle/>
                    </Navbar.Header>
                    <Navbar.Collapse>
                        <Nav>
                            <NavItem eventKey={1} href="#">Link</NavItem>
                            <NavItem eventKey={2} href="#">Link</NavItem>
                            <NavDropdown eventKey={3} title="DropDown" id="basic-nav-dropdwon">
                              <MenuItem eventKey={3,1} >Action</MenuItem>
                              <MenuItem eventKey={3,1} >Action</MenuItem>  
                              <MenuItem eventKey={3,1} >Action</MenuItem>  
                              <MenuItem eventKey={3,1} >Action</MenuItem>    
                              <MenuItem divider/>
                              <MenuItem eventKey={3,3}>Separated Link</MenuItem>
                              </NavDropdown>                         
                           </Nav>
                           <Nav pullRight>    
                            <NavItem eventKey={1} href="#">Link Right</NavItem>
                            <NavItem eventKey={2} href="#">Link Right</NavItem>
                            <NavItem eventKey={3} href="#">Link Right</NavItem>
                            <NavItem eventKey={4} href="#">Link</NavItem>
                            <NavItem eventKey={5} href="#">Link</NavItem>
                  </Nav>
               </Navbar.Collapse>
            </Navbar>
        );
    }
} 
export default Menu;