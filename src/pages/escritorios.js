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

    var XDctm = firebase
      .storage()
      .ref()
      .child("Geotransweb/")
      .listAll()
      .then(function (res) {
        res.items.forEach(function (imgpath) {
          // console.log(imgpath.toString())
          // imgpath.getDownloadURL.then
          imgpath.getDownloadURL().then(function (url) {
            // console.log(url)
            listadoImagenes.push(url)
          })
        })
      })
    // await rutaUbicacion
    // .child("Geotransweb")
    // .list()
    // .then(function (resoult) {
    //   resoult.items.forEach(function (imageref) {
    // if (imageref.name.match("wallpaper4k")) {
    //   setlistadoImagenes(...listadoImagenes, [
    //     listadoImagenes.push(imageref.name),
    //   ])
    // }
    // })
    // console.log(listadoImagenes)
    // }
    // )
  }

  useEffect(() => {
    Mostrarlos()

    console.log(listadoImagenes)
  }, [])

  var [listadoImagenes, setlistadoImagenes] = useState([])

  return (
    <Layout>
      <Container fluid style={{ backgroundColor: "orange" }}>
        <Row>
          <Col className="bg-warning">Imagenes para descarga</Col>
        </Row>

        <Row>
          <Col>

  {listadoImagenes.map(datos=>(<img src={datos}></img>))}
          
            <button onClick={() => console.log(listadoImagenes)}>
              console log
            </button>
            <button onClick={() => console.log(Object.keys(listadoImagenes))}>
              object key
            </button>
            <h5>sdas</h5>
            {/* {listadoImagenes.map(xd=>(
            <h5>{xd.name}</h5>
          ))} */}

            {/* {listadoImagenes.map(indice => (
              <h1>hola</h1>
            ))} */}
            {/* <GrupoDeTarjetasConLocationpath listadoImagenes={listadoImagenes} /> */}
          </Col>
        </Row>
      </Container>
    </Layout>
  )
}

export default Escritorios
