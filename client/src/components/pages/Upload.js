import React, { useState } from 'react';
import { useHistory } from "react-router-dom";

import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
import Form from 'react-bootstrap/Form'
// import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button'

import NavBar from '../Navbar.js'

import upload from '../../images/upload.png'

const Upload = () => {
  const [file, setFile] = useState(null);
  const [search, setSearch] = useState(null);
  const history = useHistory();


  const handleFile = (e) => {
    setFile(e.target.files[0]);
  };

  const handleText = (e) => {
    setSearch(e.target.value);
  }

  const handleSubmit = (e) => {
    if (file === null & search === null) {
      e.preventDefault();
      e.stopPropagation();
    }
    else {
      e.preventDefault();

      if (file) {
        console.log("FILE Request")
      }
      else {
        console.log("TEXT Request")
        console.log(search)
      }
      // localStorage.setItem('hackbk-result', result)
      console.log(localStorage)
      history.push("/Result");
    }
  };

  return (
    <div>
      <NavBar />
      <div className="upload">
        <Form onSubmit={handleSubmit}>
          <Form.Group action="/upload" method="POST" enctype="multipart/form-data">
            <Form.Row>
              <Col md={3} className="mx-auto">
                <Card className="image-upload">
                  <Card.Img variant="top" className="image-setting d-block mx-auto" style={{ height: '100%' }} src={file === null ? upload : URL.createObjectURL(file)
                  } />
                  <Form.File type="file" onChange={handleFile} />
                </Card>
              </Col>
            </Form.Row>
          </Form.Group>

          <Form.Group action="/upload" method="POST" enctype="multipart/form-data">
            <Form.Row>
              <Col md={3} className="mx-auto">
                <Form.Label>Example textarea</Form.Label>
                <Form.Control as="textarea" rows={3} onChange={handleText} />
              </Col>
            </Form.Row>
          </Form.Group>

          <center className="mb-4">
            <Button bsPrefix="setting-button-color" onClick={handleSubmit}>Submit</Button>
          </center>
        </Form>
      </div>
    </div>
  );
}
  
export default Upload;
  