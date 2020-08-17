import React, { useEffect, useState } from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

import { Button, Container, Row, Col, CardGroup } from "react-bootstrap"

import firebase from "../utiles/firebase"
import "firebase/storage"

// intentando usib rimagenes
// tutorial https://dev.to/itnext/how-to-do-image-upload-with-firebase-in-react-cpj
// https://stackoverflow.com/questions/56629481/how-to-put-a-file-in-state-variable-with-react-hooks/56629701#56629701

const Subirimagenes = () => {
  const [archivosFile, setArchivosFile] = useState({ usrImagenes: "" }) // archivos  a subir
  const [imageAsUrl, setImageAsUrl] = useState(allInputs) //nose
  const allInputs = { imgUrl: "" }

  const cargarImagenes = e => {
    const img = e.target.files[0]
     setArchivosFile({ usrImagenes: img })
  }

  const uptoFirebaseStorage = e => {
    e.preventDefault()
    if (archivosFile.usrImagenes === "") {
      console.error(`not an image, the image file is a ${typeof imageAsFile}`)
    } else {
      // subiend ya
      const fileqt = archivosFile.usrImagenes
      const storageRef = firebase.storage().ref(`/Geotransweb/${fileqt.name}`)
      const tarea = storageRef.put(fileqt);

      console.log('logrado');
      // subiendo ya
    }
  }

  return (
    <Layout>
      <Container fluid style={{ backgroundColor: "orange" }}>
        <Row>
          <Col>
            <form onSubmit={uptoFirebaseStorage}>
              <input type="file" onChange={cargarImagenes} />
              <button>upload to firebase</button>
            </form>
          </Col>
        </Row>

        <Row>
          <Col className="bg-warning">seleeciona imagenes de subida</Col>
        </Row>
      </Container>
    </Layout>
  )
}

export default Subirimagenes
