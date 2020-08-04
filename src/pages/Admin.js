
import  React, { useState  } from 'react';
import { Link , Redirect} from 'react-router-dom'
import {  Navbar, Container, Nav, NavDropdown, Jumbotron, Button } from 'react-bootstrap';

const Admin = () => {
    const token = localStorage.getItem("token");
    let loggedIn = true;
    if(token == null)  {
        loggedIn = false;
    }

    const [isLogin, setIsLogin] = useState(loggedIn);

    if(!isLogin)  {
        return <Redirect to="/" />
    }
    else return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Navbar.Brand href="#home">Hamamatsu ORI-Project</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto">
                    <Nav.Link href="#features">Features</Nav.Link>
                    <Nav.Link href="#pricing">Pricing</Nav.Link>
                    <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                        <NavDropdown.Item href="#action/3.1">
                        Action
                        </NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">
                        Another action
                        </NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3">
                        Something
                        </NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#action/3.4">
                        Separated link
                        </NavDropdown.Item>
                    </NavDropdown>
                    </Nav>
                    <Nav>
                        <Nav.Link href="/logout">Login</Nav.Link>
                        {/* <Link to="/logout">Logout</Link> */}
                    </Nav>
                </Navbar.Collapse>
            </Navbar>

            <Jumbotron>
                <h1>Hello hamamatsu ORI project!</h1>
                <p>
                    This is a simple hero unit, a simple jumbotron-style component for calling
                    extra attention to featured content or information.
                </p>
                <p>
                    <Button variant="primary">Learn more</Button>
                </p>
            </Jumbotron>
        </div>
    );
}

export default Admin;