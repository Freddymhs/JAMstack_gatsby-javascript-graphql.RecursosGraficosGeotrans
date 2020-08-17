import React, { useEffect, useState } from "react"

import Layout from "../components/layout"

import { Container, Row, Col, CardGroup, Card } from "react-bootstrap"

//mis compoenntes

import firebase from "../utiles/firebase"
import "firebase/storage"

const Escritorio4k = () => {
  const retrieveImages = () => {
    var Storage = firebase.storage()
    var RutaRef = Storage.ref()
    RutaRef.child("Geotransweb/")
      .listAll()
      .then(res => {
        res.items.forEach(imgpath => {
          imgpath.getDownloadURL().then(url => {
            if (url.includes("4k")) {
              setlistadoImagenes(oldArray => [...oldArray, url])
            }
          })
        })
      })
  }

  const [listadoImagenes, setlistadoImagenes] = useState([])

  useEffect(() => {
    retrieveImages()
  }, [])

  return (
    <Layout>
      <Container fluid>
        <Row>
          <h5>wallpaper escritorio</h5>
        </Row>
        <Row>
          {listadoImagenes.map(datos => (
            <Card className="col-12 col-md-6">
              <Card.Img src={datos} />
            </Card>
          ))}
        </Row>
      </Container>
    </Layout>
  )
}

export default Escritorio4k
