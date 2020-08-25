
import  React, { useState  } from 'react';
import { Link , Redirect } from 'react-router-dom';
import { Button, Card, Breadcrumb } from 'react-bootstrap';
import  Navbar  from '../components/common/Navbar.js';
import  Footer  from '../components/common/Footer.js';
import  Alert  from '../components/common/Alert.js';

// import { Home } from './Home';
// import { About } from './About';
// import { Contact } from './Contact';
// import { NoMatch } from './NoMatch';



const Admin = () => {
    const token = localStorage.getItem("token");
    let loggedIn = true;
    if(token == null)  {
        loggedIn = false;
    }

    const [isLogin, setIsLogin] = useState(loggedIn);
    const [show, setShow] = useState(true);

    if(!isLogin) return <Redirect to="/" />
    return (
        <div>
           <Navbar />
            <div className="row pathRow" >
                <div className="col-12">
                    <Breadcrumb>
                        <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
                        <Breadcrumb.Item href="#">Library</Breadcrumb.Item>
                        <Breadcrumb.Item active>Data</Breadcrumb.Item>
                    </Breadcrumb>
                </div>
                <div className="col-md-8"></div>
                <div className="col-md-4">
                    <Alert
                        variant="success"
                        title = "Oh snap! You got an error!"
                        msg="Change this and that and try again." 
                    />
                </div>
            </div>

            {/* body */}
            <div  className="container">
                <div className="card-body text-center">
                    <div className="jumbotron" style={{  height:591 }}>
                        <h1>BODY</h1>
                    </div>
                </div>
            </div>

            <div className="card-footer text-center">
                    <button type="button" className="btn btn-secondary">Button</button>{" "}
                    <button type="button" className="btn btn-secondary">Button</button>{" "}
                    <button type="button" className="btn btn-secondary">Button</button>{" "}
                    <button type="button" className="btn btn-secondary">Button</button>{" "}
                </div>
            <Footer />
        </div>
    );
}

export default Admin;