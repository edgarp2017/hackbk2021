import { Link } from 'react-router-dom';

import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Form from 'react-bootstrap/Form'

const NavBar = () => {
  return (
    <Navbar collapseOnSelect expand="lg" bg="light" className="justify-content-between">
        <Navbar.Brand>
            <Link to="/"> 
                App Name
            </Link> 

        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse >
            <Nav className="mr-auto" />
            <Nav>
                <Form inline className="NavBar-b-color">
                    <Link to="/Map">
                        <div className="NavBar-l-color p-2">
                            Map
                        </div>
                    </Link>
                    <div className="NavBar-l-color">|</div>
                    <Link to="/Add">
                        <div className="NavBar-l-color p-2">
                            Add Location
                        </div>
                    </Link>
                    <div className="NavBar-l-color">|</div>
                    <Link to="/Upload">
                        <div className="NavBar-l-color p-2">
                            Upload
                        </div>
                    </Link>
                    <div className="NavBar-l-color">|</div>
                    <Link to="/About">
                        <div className="NavBar-l-color p-2">
                            About
                        </div>
                    </Link>
                </Form>
            </Nav>
        </Navbar.Collapse>
    </Navbar>
  );
}

export default NavBar;
