import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

import "bootstrap/dist/css/bootstrap.min.css"
import { Button, Container, Row, Col, Table } from "react-bootstrap"

const IndexPage = () => (
  <Layout>
    <Container style={{height:'66vh'}}>
      <h1 className="h-100 w-100 d-flex justify-content-center align-items-center">
        Recursos Graficos Geotrans
      </h1>
    </Container>

    {/* <Container fluid >
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
  </Container> */}
  </Layout>
)

export default IndexPage
