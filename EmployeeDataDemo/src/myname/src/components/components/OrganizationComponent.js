import React from 'react';
import {Card, CardImg, CardImgOverlay, CardTitle, Breadcrumb, BreadcrumbItem} from 'reactstrap';
//import { Details } from '../Shared/Details';
import {Link} from 'react-router-dom';

 function RenderMenuItem({details, onClick}) {
    return(
      <Card>
        <Link to={`/menu/${details.id}`}>
        <CardImg width="100%" src={details.image} />
        <CardImgOverlay>
            <CardTitle>
              {details.name}
             </CardTitle>
           </CardImgOverlay>
           </Link>
       </Card>
  );
}
const Menu = (props) => {

  const menu = props.detail.map((details) => {
    return ( 
         <div key={details.id} className="col-12 col-md-5 ">
           <RenderMenuItem detail={details} onClick={props.onClick} />
         </div>
    );
  });
   return(
     <div className="container">
       <div className="row">
            <Breadcrumb>
                 <BreadcrumbItem>
                 <Link to='/home'>
                   Home
                 </Link>
                 </BreadcrumbItem>
                 <BreadcrumbItem active>
                 <Link to='/home'>
                   Menu
                 </Link>
                 </BreadcrumbItem>
            </Breadcrumb>
            <div className="col-12">
                <h3>Menu</h3>
                <hr />
              </div>
         </div>
         <div className="row">
             {menu}
         </div>
     </div>
   );
}
export default Menu;