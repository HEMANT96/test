import React from 'react';
import {Card,CardImg,CardBody,CardTitle,CardSubtitle} from 'reactstrap';

function RenderCard({item}){
   return(
      <Card>
         <CardImg/>
         <CardBody>
   <CardTitle>{item.name}</CardTitle>
   {item.designation ? <CardSubtitle>{item.designation}</CardSubtitle>:null}
            </CardBody>
         </Card>
   );
}

function Contact(props){
   return(
      <div className="container1"> 
          <div className="col-12 col-md m-1">
             <RenderCard item={props.details}/>
         </div>
         <div className="col-12 col-md m-1">
            <RenderCard item={props.comments}/>
         </div>
         <div className="col-12 col-md m-1">
                <RenderCard item={props.details}/> 
            </div>
      </div>
   )
}
export default Contact;