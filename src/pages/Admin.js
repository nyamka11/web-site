
import  React, { useState  } from 'react';
import { Link , Redirect} from 'react-router-dom'
import {  Navbar, Container, Nav, NavDropdown, CardGroup, Button, Card } from 'react-bootstrap';

const Admin = () => {
    const token = localStorage.getItem("token");
    let loggedIn = true;
    if(token == null)  {
        loggedIn = false;
    }

    const [isLogin, setIsLogin] = useState(loggedIn);

    if(!isLogin) return <Redirect to="/" />
    return (
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
                        <Link to="/logout"><Button variant="outline-success">Logout</Button></Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>

            <Card className="text-center">
                <Card.Header className="text-left">Featured</Card.Header>
                <Card.Body>

                </Card.Body>
                <Card.Footer>
                    <Button variant="secondary">Button1</Button>{' '}
                    <Button variant="secondary">Button2</Button>{' '}
                    <Button variant="secondary">Button3</Button>{' '}
                    <Button variant="secondary">Button4</Button>{' '}
                </Card.Footer>
            </Card>

            <footer className="footer">
                <div className="container">
                    <span className="text-muted">Copyright © FKC会社 Hamamatsu-Ori 2020</span>
                </div>
            </footer>
        </div>
    );
}

export default Admin;