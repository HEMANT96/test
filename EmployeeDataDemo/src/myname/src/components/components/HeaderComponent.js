import React, { Component } from "react";
//import {FaHome} from 'react-icons/fa';
import {
  Navbar,
  NavbarBrand,
  Nav,
  NavItem,
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  Form,
  FormGroup,
  Input,
  Label
} from "reactstrap";
import { Link} from "react-router-dom";

class Header extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isNavOpen: false,
      isModalOpen: false
    };
    this.toggleNav = this.toggleNav.bind(this);
    this.toggleModal = this.toggleModal.bind(this);
    this.handleLogin = this.handleLogin.bind(this);
  }

  toggleNav() {
    this.setState({
      isNavOpen: !this.state.isNavOpen
    });
  }

  toggleModal() {
    this.setState({
      isModalOpen: !this.state.isModalOpen
    });
  }

  handleLogin(event) {
    this.toggleModal();
    alert(
      "Username: " +
        this.username.value +
        " Password: " +
        this.password.value +
        " Remember: " +
        this.remember.checked
    );
    event.preventDefault();
  }

  render() {
    return (
      <div>
        <Navbar dark expand="md">
          <div className="container">
            <NavbarBrand className="mr-auto" href="/">
        </NavbarBrand>
            
    
        
            <nav className="navbar">
  <div className="container-fluid">
    <div class="nav navbar-nav-left">
      
      <Link to="/employeeSalary" className="btn"style={{color:"white",textDecoration:"none" ,Display:"block"}}><b> EmployeeSalray</b></Link>
      <Link to="/Employeeteam" className="btn" style={{color:"white",textDecoration:"none" ,Display:"block"}} ><b>EmployeeTeam</b></Link>
      <Link to="/Empocument"  className="btn"style={{color:"white",textDecoration:"none", Display:"block"}}><b>EmployeeDocument</b></Link>
      <Link to="/Empleave" className="btn" style={{color:"white",textDecoration:"none",display:"block"}}><b>EmployeeLeave</b></Link>
      <Link to="/EmBank" className="btn" style={{color:"white",textDecoration:"none",display:"block"}}><b> EmployeeBank</b></Link>
      <Link to="/Contact" className="btn" style={{color:"white",textDecoration:"none",display:"block"}}><b> Employeecontact</b></Link>
      <Link to="/Organztion"className="btn"style={{color:"white",textDecoration:"none",display:"block"}}> <b>Organztion</b></Link>
    </div>
    
  </div>
</nav>
              <Nav className="ml-auto" navbar>
                <NavItem>
                  <Button outline onClick={this.toggleModal}>
                    <span className="fa fa-sign-in fa-lg" /> Login
                  </Button>
                </NavItem>
              </Nav>
        
          </div>
        </Navbar>
        
        <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
          <ModalHeader toggle={this.toggleModal}>Login</ModalHeader>
          <ModalBody>
            <Form onSubmit={this.handleLogin}>
              <FormGroup>
                <Label htmlFor="username">Username</Label>
                <Input
                  type="text"
                  id="username"
                  name="username"
                  innerRef={input => (this.username = input)}
                />
              </FormGroup>
              <FormGroup>
                <Label htmlFor="password">Password</Label>
                <Input
                  type="password"
                  id="password"
                  name="password"
                  innerRef={input => (this.password = input)}
                />
              </FormGroup>
              <FormGroup check>
                <Label check>
                  <Input
                    type="checkbox"
                    name="remember"
                    innerRef={input => (this.remember = input)}
                  />
                  Remember me
                </Label>
              </FormGroup>
              <Button type="submit" value="submit" color="primary">
                Login
              </Button>
            </Form>
          </ModalBody>
        </Modal>
      </div>
    );
  }
}
export default Header;
