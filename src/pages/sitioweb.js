import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

import { Button, Container, Row, Col, CardGroup } from 'react-bootstrap';


//mis compoenntes
import TarjetasBT4 from '../miscomponentes/TarjetasBT4';

const sitioweb = () => (
  <Layout>

<Container fluid style={{backgroundColor:'orange'}}>
    <Row>
     <Col className="bg-warning">Imagenes para descarga</Col>
    </Row>

    <Row>
    <Col>
      <TarjetasBT4/>   
    </Col>

    </Row>
  </Container>
  
  
  </Layout>



)

export default sitioweb
