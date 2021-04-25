import React, { useState } from 'react';
import { useHistory } from "react-router-dom";

import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'

import NavBar from '../Navbar.js'
import * as API from '../../util/api.js'

const AddLocation = () => {
  const [name, setName] = useState(null);
  const [longitude, setLongitude] = useState(null);
  const [latitude, setLatitude] = useState(null);
  const history = useHistory();

  const handleChange = (input) => (e) => {
    if (input === "name") {
      setName(e.target.value)
    }
    else if (input === "longitude") {
      setLongitude(e.target.value)
    }
    else {
      setLatitude(e.target.value)
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(name, longitude, latitude)
    if (name === null | longitude === null | latitude === null) {
      alert("Fill out all fields!")
    }
    else {
      API.addLocation({
        name,
        longitude,
        latitude
      }).then((result) => {
        if (result.status === 200) {
          history.push("/Map");
          alert("Location was added")
        }
      })
    }
  }

  return (
    <div>
      <NavBar />
      <Form onSubmit={handleSubmit}>
        

        <Form.Group action="/Add" method="POST" enctype="multipart/form-data">
          <Form.Row>
            <Col md={3} className="mx-auto">
              <Form.Label>Example textarea</Form.Label>
              <Form.Control as="textarea" rows={3} onChange={handleChange("name")} />
            </Col>
          </Form.Row>
        </Form.Group>

        <Form.Group action="/Add" method="POST" enctype="multipart/form-data">
          <Form.Row>
            <Col md={3} className="mx-auto">
              <Form.Label>Example textarea</Form.Label>
              <Form.Control as="textarea" rows={3} onChange={handleChange("longitude")} />
            </Col>
          </Form.Row>
        </Form.Group>

        <Form.Group action="/Add" method="POST" enctype="multipart/form-data">
          <Form.Row>
            <Col md={3} className="mx-auto">
              <Form.Label>Example textarea</Form.Label>
              <Form.Control as="textarea" rows={3} onChange={handleChange("latitude")} />
            </Col>
          </Form.Row>
        </Form.Group>

        <center className="mb-4">
          <Button bsPrefix="setting-button-color" onClick={handleSubmit}>Submit</Button>
        </center>
      </Form>
    </div>
  );
}
  
export default AddLocation;
  