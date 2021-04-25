import Col from 'react-bootstrap/Col'
import Image from 'react-bootstrap/Image'
import Button from 'react-bootstrap/Button'
import { useHistory } from "react-router-dom";

import NavBar from '../Navbar.js';

import Earth from '../../images/Earth.svg'
import Logo from '../../images/logo.png'

const Landing = () => {
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    history.push("/Map");
  }

  return (
    <div>
      <NavBar />
      <div>
        <Col md={6} className="mx-auto pl-5">
          <Image src={Logo} height={700}/>
          <center className="">
            <Button bsPrefix="setting-button-color" onClick={handleSubmit}>Locations</Button>
          </center>
        </Col>
      </div>
    </div>
    );
  }
  
  export default Landing;
  