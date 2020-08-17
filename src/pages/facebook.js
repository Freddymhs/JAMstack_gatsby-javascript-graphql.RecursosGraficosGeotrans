import React, { useEffect, useState } from "react"

import Layout from "../components/layout"

import { Container, Row, Col, CardGroup, Card } from "react-bootstrap"

//mis compoenntes

import firebase from "../utiles/firebase"
import "firebase/storage"

const Facebook = () => {
  const retrieveImages = () => {
    var Storage = firebase.storage()
    var RutaRef = Storage.ref()
    RutaRef.child("Geotransweb/")
      .listAll()
      .then(res => {
        res.items.forEach(imgpath => {
          imgpath.getDownloadURL().then(url => {
            if (url.includes("Geotransweb%2FFacebook%20Banner")) {
              setlistadoImagenesFbanner(oldArray => [...oldArray, url])
            }
            if (url.includes("Geotransweb%2FFacebook%20Profile")) {
              setlistadoImagenesFperfil(oldArray => [...oldArray, url])
            }
          })
        })
      })
  }

  const [listadoImagenesFbanner, setlistadoImagenesFbanner] = useState([])
  const [listadoImagenesFperfil, setlistadoImagenesFperfil] = useState([])

  useEffect(() => {
    retrieveImages()
    // console.log(listadoImagenes)
  }, [])

  return (
    <Layout>
      <Container fluid>
        <Row>
          <h5>Facebook Banner</h5>
        </Row>
        <Row>
          {listadoImagenesFbanner.map(datos => (
            <Card className="col-12 col-md-6">
              <Card.Img src={datos} />
            </Card>
          ))}
        </Row>
      </Container>
      <Container fluid>
        <Row>
          <h5>Facebook Perfil</h5>
        </Row>
        <Row>
          {listadoImagenesFperfil.map(datos => (
            <Card className="col-12 col-md-6">
              <Card.Img src={datos} />
            </Card>
          ))}
        </Row>
      </Container>
    </Layout>
  )
}

export default Facebook
