import React, { useState } from 'react';

import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
import Form from 'react-bootstrap/Form'
import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button'

import NavBar from '../Navbar.js'

import upload from '../../images/upload.png'

const Upload = () => {
  const [file, setFile] = useState(null);

  const handleChange = (input) => (e) => {
    setFile({ file: e.target.files[0] });
  };

  const handleSubmit = (e) => {
    const form = e.currentTarget;
    if (form.checkValidity() === false) {
        e.preventDefault();
        e.stopPropagation();

    }
    else {
      this.setState({ validated: true })
      e.preventDefault();
      this.updateProfile();
      this.updatePreference();
      this.uploadFile();
    }
  };

  return (
    <div>
      <NavBar />
      <Form.Group action="/upload" method="POST" enctype="multipart/form-data">
        <Form.Row>
          <Col md={3} className="mx-auto">
            <Card className="image-upload">
              <Card.Img variant="top" className="image-setting d-block mx-auto" style={{ height: '100%' }} src={file === null ? upload : URL.createObjectURL(file)
              } rounded />
              <Form.File type="file" onChange={handleChange("file")} required />
            </Card>
            <Alert variant="danger" id="empty-file" className="filter-alert mt-3">
                Please select an image.
            </Alert>
          </Col>
        </Form.Row>
      </Form.Group>
      <center className="mb-4">
        <Button bsPrefix="setting-button-color" onClick={handleSubmit}>Submit</Button>
      </center>
    </div>
  );
}
  
export default Upload;
  