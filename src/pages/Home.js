import  React, { useState  } from 'react';
import  NavbarComponent  from '../components/common/Navbar.js';
import  Footer  from '../components/common/Footer.js';
import leaflet from 'leaflet';
import { MapContainer, TileLayer, Marker, Popup, Polyline, Circle, CircleMarker, Polygon, ImageOverlay } from 'react-leaflet';
import pointer from '../assets/pointer.svg';
import bluePointer from '../assets/bluePointer.svg';
import * as parkData from "../data/skateboard-parks.json";


const Home = () => {
    const icon = leaflet.icon({
        iconUrl: bluePointer,
        iconSize: [50, 50]
    });

    const center = [51.505, -0.09]
    const multiPolygon = [
      [
        [34.686581, 137.740814],
        [34.685664, 137.736256],
        [34.679523, 137.740808],
        [34.680088, 137.749654],
        [34.690039, 137.747250]
      ]
    ]

    return (
        <div>
            <NavbarComponent />
            <MapContainer className="map mt-5 pt-5" center={[34.707469, 137.726222]} zoom={15}>
                <TileLayer
                    attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                {parkData.features.map(park => (

                    <Marker
                        key={park.properties.PARK_ID}
                        position={[
                            park.geometry.coordinates[1],
                            park.geometry.coordinates[0]
                        ]}
                        icon={icon}
                        eventHandlers={{
                            click: () => {
                              console.log('marker clicked')
                            },
                        }}
                    >
                        <Popup>
                        <div>
                            <h4>{park.properties.NAME}</h4>
                            <p>{park.properties.NAME_FR}</p>
                            <p>{park.properties.ADDRESS}</p>
                            <p>{park.properties.ADDRESS_FR}</p>
                            <p>{park.properties.DESCRIPTIO}</p>
                        </div>
                        </Popup>
                    </Marker>
                ))}

                <Polygon pathOptions={{color: "purple"}} positions={multiPolygon} >
                    <Popup>
                        <div>
                            <h1>危ない場所</h1>
                            <p>asdfasdf</p>
                        
                        </div>
                        </Popup>
                </Polygon>

                <Circle pathOptions={{color:"green"}}  center={[34.690604, 137.702846]} radius={800} >
                    <Popup>
                        <div>
                            <h1>安全場所</h1>
                            <p>asdfasdf</p>
                        
                        </div>
                    </Popup>
                </Circle>
                    
            </MapContainer>
            <div>
                asdf
            </div>
            <Footer />
        </div>
    );
}

export default Home;