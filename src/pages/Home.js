import  React, { useState  } from 'react';
import { Breadcrumb } from 'react-bootstrap';
import  NavbarComponent  from '../components/common/Navbar.js';
import  Footer  from '../components/common/Footer.js';
import { BrowserRouter as Redirect } from 'react-router-dom';

const Home = () => {
    return (
        <div>
           <NavbarComponent />
           <link rel="stylesheet" href="https://unpkg.com/leaflet@1.7.1/dist/leaflet.css"
            integrity="sha512-xodZBNTC5n17Xt2atTPuE1HxjVMSvLVW9ocqUKLsCC5CXdbqCmblAshOMAS6/keqq/sMZMZ19scR4PsZChSR7A=="
            crossorigin=""/>
            <script src="https://unpkg.com/leaflet@1.7.1/dist/leaflet.js"
            integrity="sha512-XQoYMqMTK8LvdxXYG3nZ448hOEQiglfqkJs1NOQV44cWnUrBc8PkAOcXy20w0vlaXaVUearIOBhiXZ5V3ynxwA=="
            crossorigin=""></script>
            {/* body */}
            <div className="container pt-5">
                asdf
            </div>
            <Footer />
        </div>
    );
}

export default Home;