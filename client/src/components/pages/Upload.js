import React, { useState } from 'react';
import { useHistory } from "react-router-dom";

import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
import Form from 'react-bootstrap/Form'
// import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button'

import NavBar from '../Navbar.js'

import upload from '../../images/upload.png'
import * as API from '../../util/api.js'

const Upload = () => {
  const [file, setFile] = useState(null);
  const [item, setItem] = useState(null);


  const handleFile = (e) => {
    setFile(e.target.files[0]);
  };

  const handleText = (e) => {
    setItem(e.target.value);
  }

  const handleSubmit = (e) => {
    if (file === null & item === null) {
      e.preventDefault();
      e.stopPropagation();
    }
    else {
      e.preventDefault();

      if (file) {
        console.log("FILE Request")
      }
      else {
        console.log(item)
        API.resultText(item).then((result) => {
          console.log(result)
          if (result.status === 200) {
            if (result.data.success === true){
              alert(`${item} belongs in the ${result.data.data}. Find some using our locator!`)
            }
            else {
              alert(`Error with ${item} could not determine.`)
            }
  
          }
        }).catch((error) => {
          console.log(error)
        })
      }
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
              <Col md={3} className="mx-auto mt-5">
                <Form.Label>Enter the item you need help with:</Form.Label>
                <Form.Control as="textarea" rows={1} onChange={handleText} />
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
  