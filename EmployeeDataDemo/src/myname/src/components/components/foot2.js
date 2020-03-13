import React from 'react';

function Footer(props){
  return(
    <div classname="footer">
      <div className="container">
         <div className = "row justify-content-center">
            <div className="col-4 offset-1 col-sm-2"> 
            <h5>Links</h5>
            <ul className="list-unstyled">
              <li><a href="#">Home</a></li>
              <li><a href="#">About</a></li>
              <li><a href="#">Menu</a></li>
              <li><a href="#">Contactus</a></li>
            </ul>
      </div>
      <div className="col-7 col-sm-5">
        <h5>Our Address </h5> 
        <address>
          Sector 62 D-block Noida  
        <i className="fa fa-phone fa-lg"></i>
        <i className="fa fa-fax fa-lg"></i>
        <i className="fa fa-envelope fa-lg"></i>
      </address>
        
        </div>
<div className= " col-12 col-sm-4 align-self-center">
  <div className="text-center">
    <a className="btn btn-social-icon btn-google" href=" "></a> 
    <a className="btn btn-social-icon btn-facebook" href=""></a>
    <a className="btn btn-social-icon btn-linkedin" href=""></a>
    <a className="btn btn-social-icon btn-twitter" href=""></a>
    <a className="btn"></a>       
</div>

    </div>
</div>
  )
}
export default Footer;