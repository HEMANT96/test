import React, { Component } from "react";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

export  default class Login extends Component {
    
      state = {
          Login:[],
          product: {    
            login_id:"",
            password:""
      }
    }  

  //  componentDidMount() {
    //  this.getLogin();
   // }
     
   // getLogin = _ => {
    //  fetch('http://localhost:4002/Login')         
     // .then(response => response.json())
     // .then(response => this.setState({ Login: response.data }))
     // .catch(err => console.error(err))
   // }

    addProduct = _ => {
        const {product} = this.state;
        fetch(`http://localhost:4002/Login/add?login_id=${product.login_id}&password=${product.password}`)
        .then(response => response.json())
        .then(this.getLogin)
        .catch(err => console.error(err)) 
    }

    renderProduct = ({ login_id, password }) => <div key={login_id }>{password}</div>

      // validateForm() {
      //   return this.state.email.length > 0 && this.state.password.length > 0;
      // }

      render() {
        const { Login, product } = this.state;
        return (
          <div className="Login">
            {Login.map(this.renderProduct)}
            <Form >
              <Form.Group controlId="email" bssize="large">
                <h3>E_Mail</h3>
                <Form.Control
                  autoFocus
                  type="email"
                  //value={this.state.email}
                  //onChange={this.handleChange}
                  value={product.login_id}
                  onChange={e => this.setState({product: {...product,login_id: e.target.value }})}
                />
              </Form.Group>
              <Form.Group controlId="password" bssize="large">
              <h3>Password</h3>
                <Form.Control
                  //value={this.state.password}
                  //onChange={this.handleChange}
                  value={product.password}
                  onChange={e => this.setState({product: {...product,password: e.target.value }})}
                  type="password"
                />
              </Form.Group>
              <Button
                onClick = {this.addProduct}  variant="contained"
                block
                bssize="large"
            //swisabled={!this.validateForm()}
                type="submit"
              >
                Login
              </Button>
            </Form>
          </div>
        );
      }
    }