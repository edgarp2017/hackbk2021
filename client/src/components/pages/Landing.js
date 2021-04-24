import Col from 'react-bootstrap/Col'
import Image from 'react-bootstrap/Image'

import NavBar from '../Navbar.js';

import Earth from '../../images/Earth.gif'

const Landing = () => {
    return (
      <div>
        <NavBar />
        <h1 className="mt-5 text-center pr-5 mr-5">Welcome to AppName</h1>
        <div>
          <Col md={6} className="mx-auto pl-5">
            <Image src={Earth} height={700}/>
          </Col>
        </div>
      </div>
    );
  }
  
  export default Landing;
  