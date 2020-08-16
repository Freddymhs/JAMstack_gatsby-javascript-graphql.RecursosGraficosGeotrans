import React, { useEffect, useState } from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

import GrupoDeTarjetasConLocationpath from "../miscomponentes/GrupoDeTarjetasConLocationpath"
import { Button, Container, Row, Col, CardGroup } from "react-bootstrap"

//mis compoenntes
import TarjetasBT4 from "../miscomponentes/TarjetasBT4"
import firebase from "../utiles/firebase"
import "firebase/storage"

const Escritorios = () => {

  const Mostrarlos = async () => {
    var storage = firebase.storage()
    var rutaUbicacion = storage.ref()
    // const laurl = storage().ref('Geotransweb/wallpaper4k -1.png').getDownloadURL()
    // .then((res) => console.log(res)); }
  
    await rutaUbicacion
      .child("Geotransweb")
      .listAll()
      .then(function (resoult) {
        resoult.items.forEach(function (imageref) {

         
          if (imageref.name.match("wallpaper4k")) {
            console.log(imageref)
            console.log(imageref.fullPath)
            setlistadoImagenes(...listadoImagenes, [
              listadoImagenes.push([imageref.name]),
            ])
           
          }
        })
      }
      )
  }

  useEffect(() => {
    Mostrarlos()
  }, [])

  const [listadoImagenes, setlistadoImagenes] = useState([])
  return (
    <Layout>
      <Container fluid style={{ backgroundColor: "orange" }}>
        <Row>
          <Col className="bg-warning">Imagenes para descarga</Col>
        </Row>

        <Row>
          <Col>
            {/* //se le manda un consjunto de fotos predeterminadas */}
            <GrupoDeTarjetasConLocationpath listadoImagenes={listadoImagenes} />
          </Col>
        </Row>
      </Container>
    </Layout>
  )
}

export default Escritorios
