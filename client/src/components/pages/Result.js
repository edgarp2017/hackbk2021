import React, { useState, useEffect } from 'react';
import { useHistory } from "react-router-dom";
import Button from 'react-bootstrap/Button'

import NavBar from '../Navbar.js';

const Result = () => {
  const [placement, setPlacement] = useState(null);
  const data = localStorage.getItem('hackbk-result');
  const history = useHistory();
  if (!data) {
    history.push("/Map");
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.removeItem('hackbk-result');
    history.push("/Map");
  }

  return (
    <div>
      <NavBar />
      <div className="results">
        From the image or text you input the correct place for it would be 
        {placement}
        <center className="mb-4">
          <Button bsPrefix="setting-button-color" onClick={handleSubmit}>Done</Button>
        </center>
      </div>
    </div>
  );
  }
  
  export default Result;
  