import React, { Component } from 'react'
import {IconContext } from "react-icons";
import  Toolbar from './toolbar';
//Import { FaPeopleCarry } from 'react-icons/fa';
import SideDrawer from './SideDrawer';
import Backdrop from './Backdrop';
//import backdrop from './Backdrop';
class App extends Component {
    state = { 
      sideDrawerOpen:false
    };
    //this.drawerToggleClickHandler = this.drawerToggleClickHandler.bind(this);
    //this.backdropClickHandler = this.backdropClickHandler.bind(this);
  drawerToggleClickHandler = () => {
   this.setState((prevState) => {
     return {sideDrawerOpen:!prevState.sideDrawerOpen}
   });
  };
/*  drawerToggleClickHandler = () => {
    this.setState(prevState => {
      return { sideDrawerOpen: !prevState.sideDrawerOpen }
    })
  }
*/
  backdropClickHandler = () => {
    this.setState({ sideDrawerOpen:false});
  }

render(){  
    let sideDrawer;
    let backdrop;
    if (this.state.sideDrawerOpen) {
     sideDrawer=<SideDrawer/>
      backdrop = <Backdrop click={this.backdropClickHandler}/>
    }
      //sideDrawer = <SideDrawer /
    return (
    <div style={{ height: '100%' }}>
       {/*  */} 
       <Toolbar drawerClickHandler = {this.drawerToggleClickHandler} />
        {sideDrawer}
         {backdrop}        
     
        <main style={{marginTop:'64px'}}>
          <p></p>
        </main>
        <IconContext.Provider value={{ color: "blue", className: "global-class-name" }}>
  <div>
  </div>
</IconContext.Provider>
      </div>
    );
  }
}
export default App;