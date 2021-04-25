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
        <Form.Group action="/Add" method="POST" enctype="multipart/form-data" className="mt-5 pt-5">
          <Form.Row>
            <Col md={3} className="mx-auto">
              <Form.Label>Select the type of bin:</Form.Label>
              <Form.Control as="select" onChange={handleChange("name")}> 
                <option>battery</option>
                <option>biological</option>
                <option>brown glass</option>
                <option>cardboard</option>
                <option>clothes</option>
                <option>green glass</option>
                <option>metal</option>
                <option>paper</option>
                <option>plastic</option>
                <option>shoes</option>
                <option>trash</option>
                <option>white glass</option>
              </Form.Control>
            </Col>
          </Form.Row>
        </Form.Group>

        <Form.Group action="/Add" method="POST" enctype="multipart/form-data">
          <Form.Row>
            <Col md={3} className="mx-auto">
              <Form.Label>Enter the longitude of the bin:</Form.Label>
              <Form.Control as="textarea" rows={1} onChange={handleChange("longitude")} />
            </Col>
          </Form.Row>
        </Form.Group>

        <Form.Group action="/Add" method="POST" enctype="multipart/form-data">
          <Form.Row>
            <Col md={3} className="mx-auto">
              <Form.Label>Enter the latitude of the bin:</Form.Label>
              <Form.Control as="textarea" rows={1} onChange={handleChange("latitude")} />
            </Col>
          </Form.Row>
        </Form.Group>

        <center className="mb-4">
          <Button bsPrefix="setting-button-color" variant="success" onClick={handleSubmit}>Submit</Button>
        </center>
      </Form>
    </div>
  );
}
  
export default AddLocation;
  