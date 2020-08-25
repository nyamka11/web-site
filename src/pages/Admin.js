
import  React, { useState  } from 'react';
import { Link , Redirect } from 'react-router-dom';
import { Jumbotron, Button, Card } from 'react-bootstrap';
import  Navbar  from '../components/common/Navbar.js';
import  Footer  from '../components/common/Footer.js';
import  Alert  from '../components/common/Alert.js';

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
                <div className="col-md">
                    <div className="card-body">
                        <span>Path : {window.location.pathname}</span></div>
                    </div>
                <div className="col-md"></div>
                <div className="col-md">
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
                    <h5 className="card-title">Special title treatment</h5>
                    <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                    <br/><br/>

                    <div className="jumbotron" style={{  height:465 }}>
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