import React from "react";
import {MDBCol, MDBContainer, MDBRow, MDBFooter} from "mdbreact";
import {FaFacebook, FaYoutube, FaTwitter, FaInstagram} from 'react-icons/fa';

const Footer = () => {
  return (
    <div className="footer">
    <MDBFooter color="blue" className="font-small pt-4 mt-4">
      <MDBContainer fluid className="text-center text-md-left">
        <MDBRow>
          <MDBCol md="4">
            <address>
            <h5 className="title"><b>Address</b></h5>
               <p>IT Steller Park Sector-62 D-block Noida,<br/>
               Utter Pradesh <br/> </p>
              </address>
          </MDBCol>
          <MDBCol md="4">
            
            <ul>
            <h5><b>About</b></h5>
              <li className="list-unstyled">
                <a href="#" className="a" style={{color:"black"}}>Home</a>
              </li>
              <li className="list-unstyled">
                <a href="#" className="a" style={{color:"black"}} >EmployeeProfile</a>
              </li>
              <li className="list-unstyled">
                <a href="#" className="a" style={{color:"black"}}>EmployeeData</a>
              </li>
              <li className="list-unstyled">
                <a href="#" className="a" style={{color:"black"}}>EmployeeSalary</a>
              </li>
            </ul>
          </MDBCol>
          <MDBCol md="4">
            
            <ul>
            <h5><b>Social Media</b></h5>
              <li className="list-unstyled">
                <a href="https://Facebook.com" className="a"><FaFacebook style={{color:"blue"}}/>Facebook </a>
              </li>
              <li className="list-unstyled">
                <a href="https://Youtube.com" className="a"><FaYoutube style={{color:"red"}}/>Youtube</a>
              </li>
              <li className="list-unstyled">
                <a href="https://Twitter.com" className="a"><FaTwitter/>Twitter </a>
              </li>
              <li className="list-unstyled">
                <a href="https://Instagram.com" className="a"><FaInstagram style={{color:"#3f729b"}}/>Instagram</a>
              </li>
            </ul>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
      <div className="footer-copyright text-center py-3">
        <MDBContainer fluid>
          &copy; {new Date().getFullYear()} Copyright: <a href="https://Eninov.com"> Eninov.com </a>
        </MDBContainer>
      </div>
    </MDBFooter>
  </div> 
  );
}
export default Footer;