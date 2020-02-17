import React, { Component } from 'react';
import {BrowserRouter} from 'react-router-dom';
import  Main from './components/MainComponent';
//import Tool from './components/tool';
import './App.css';
class App extends Component {
render(){
return (
    <div className="App">    
    {/*<Container/> */}
    {/*
    <Employeedocument/> 
    
    <Header/>    
       <Navbar dark color="primary">
     <div className="container">
       <NavbarBrand href="/">Employee Details<hr/></NavbarBrand>
     </div>
        </Navbar>   
         */}   
        
         <BrowserRouter>         
    
             <Main/>                 
        </BrowserRouter>      
    
    </div>              
  );
 }
}
export default App;

