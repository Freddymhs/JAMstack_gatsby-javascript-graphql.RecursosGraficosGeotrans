import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Container, Row, Col, Table } from 'react-bootstrap';

const IndexPage = () => (
  <Layout>
    {/* <SEO title="Home" />
    <Button variant="primary">Primary</Button>{' '}
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <Link to="/page-2/">Go to page 2</Link> <br />
    <Link to="/using-typescript/">Go to "Using TypeScript"</Link> */}
  

  <Container fluid >
    <Row>
        <Col>
           <h5>Contenido grafico usado en la creacion de Geotrans website </h5>
           <Table striped bordered hover>
  <thead>
    <tr>
      <th>atributo</th>
      <th>usado</th>
      <th>usado</th>
      <th>usado</th>
      <th>usado</th>
      <th>usado</th>
      <th>usado</th>
      <th>usado</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>fuentes</td>
      <td>Montserrat</td>
      <td>Lato</td>
      <td></td>
    </tr>
    <tr>
      <td>colores</td>
      <td style={{backgroundColor:'#FF6E40' , color:'#fafafa'}}>#FF6E40</td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td>imagenes</td>
      <td colSpan="2">Larry the Bird</td>
      <td>@twitter</td>
    </tr>
  </tbody>
</Table>

        </Col>
    </Row>
  </Container>
  
  
  </Layout>



)

export default IndexPage
