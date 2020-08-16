import React from 'react';
import { CardGroup, Card } from "react-bootstrap";

import { Location } from '@reach/router' // ubicame

const TarjetasBT4 = () => {
    return ( 


 
  <Card className="col">
      <Location>
      {({ location }) => {
           console.log(location.pathname)
      }}
    </Location>
    <Card.Img 
    
    variant="top" src="https://www.adslzone.net/app/uploads/2019/04/borrar-fondo-imagen.jpg" />
    <Card.Body>
      <Card.Title className="text-center"> COMO ES LA IMAGEN </Card.Title>
      
    </Card.Body>
    <Card.Footer className="d-flex justify-content-around  py-3">
      <small className="text-muted">RESOLUCION</small>
      <button className="btn-primary rounded px-3">Descargar</button>
    </Card.Footer>
  </Card>
  
  
  
  
 
 

     );
}
 
export default TarjetasBT4;