import React from "react";
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
import  Navbar  from '../components/common/Navbar.js';
import  Footer  from '../components/common/Footer.js';
import { Breadcrumb } from 'react-bootstrap';

const containerStyle = {
    position: 'relative',  
    width: '90%',
    height: '100%'
}

export class GoogleMap extends React.Component {
    onMarkerClick()  {
        alert("ok");
    }
    
    onInfoWindowClose()  {
        alert("leftwindow");
    }
    
    render() {
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
                    <Map
                        google={this.props.google} 
                        initialCenter={{
                            lat: 34.865152,
                            lng: 138.297344
                        }}
                        zoom={14} 
                    >
                        <Marker onClick={this.onMarkerClick} name={'Current location'} />
                        <InfoWindow onClose={this.onInfoWindowClose}></InfoWindow>
                    </Map>
                <Footer />
            </div>
        );
    }
}

export default GoogleApiWrapper({
    apiKey: ("");
})(GoogleMap)