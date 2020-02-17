import React from 'react'
//import "./toolbar.css"
import DrawerToggleButton from './DrawerToggleButton';

const toolbar = props => (
  <header className="toolbar">
    <nav className="toolbar__navigation">
   {/*<div className="toolbar__toggle-button">
            <DrawerToggleButton click={props.drawerClickHandler} />
        </div>  */}
    <div className="toolbar__toggle-button"> 
        <DrawerToggleButton click={props.drawerClickHandler} />
    </div>
        <div className="toolbar__logo"><a href="/"><h4>Employee_Detail</h4></a></div>
      <div className="spacer"/>
            <div className="toolbar_navigation-items">
      </div>
    </nav>
  </header>
)
export default toolbar;