
import  React, { useState  } from 'react';
import { Breadcrumb } from 'react-bootstrap';
import  Navbar  from '../components/common/Navbar.js';
import  Footer  from '../components/common/Footer.js';
import { BrowserRouter as Redirect } from 'react-router-dom';

const About = () => {
    return (
        <div>
           <Navbar />
            <div className="row pathRow" >
                <div className="col-12">
                    <Breadcrumb>
                        <Breadcrumb.Item href="/home">Home</Breadcrumb.Item>
                        <Breadcrumb.Item href="contact">Contact</Breadcrumb.Item>
                        <Breadcrumb.Item active>Data</Breadcrumb.Item>
                    </Breadcrumb>
                </div>
            </div>

            {/* body */}
            <div className="container">
                <div className="card-body text-center">
                    <div className="jumbotron" style={{  }}>
                        <h1>About</h1>
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

export default About;
