import React, { useEffect } from "react";
import  NavbarComponent  from '../components/common/Navbar.js';
import  Footer  from '../components/common/Footer.js';
import leaflet from 'leaflet';
import { MapContainer, TileLayer, Marker, Popup, Circle, CircleMarker, Polygon, ImageOverlay } from 'react-leaflet';
import pointer from '../assets/pointer.svg';
import bluePointer from '../assets/bluePointer.svg';
import parkData from "../data/skateboard-parks.json";
import Chart from "chart.js";


// import Insert from '../common/Fiware/Insert';
// import Delete from '../common/Fiware/Delete';
// import Select from '../common/Fiware/Select';
// import Update from '../common/Fiware/Update';
// import Search from "../common/Fiware/Search";

// import selectAll from "../common/Fiware/SelectAll.js";

// selectAll();



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

    useEffect(() => {
        new Chart(document.getElementById("myChart"), {
            type: "bar",
            data: {
                labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
                datasets: [
                    {
                        label: "# of Votes",
                        data: [12, 19, 3, 5, 2, 3],
                        backgroundColor: [
                            "Red",
                            "Blue",
                            "Yellow",
                            "Green",
                            "Purple",
                            "Orange"
                        ],
                        borderColor: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
                        borderWidth: 1
                    }
                ]
            }
        });

        new Chart(document.getElementById("myChart1"), {
            type: "pie",
            data: {
                labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
                datasets: [
                {
                    label: "# of Votes",
                    data: [12, 19, 3, 5, 2, 3],
                    backgroundColor: [
                        "Red",
                        "Blue",
                        "Yellow",
                        "Green",
                        "Purple",
                        "Orange"
                    ],
                    borderColor: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
                    borderWidth: 1
                }
                ]
            }
        });
    });

    return (
        <div>
            <NavbarComponent />
            <div className="row mt-5">
                <div className="col-8">
                    <MapContainer className="map border" center={[34.707469, 137.726222]} zoom={15}>
                        <TileLayer
                            attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        />

                        {/* <GeoSearchControlElement 
                            provider={prov} 
                            showMarker= {true} 
                            showPopup={false} 
                            popupFormat={({ query, result }) => result.label} 
                            maxMarkers={3}  
                            retainZoomLevel= {false}  
                            animateZoom= {true} 
                            autoClose= {false}  
                            searchLabel={'Enter address, please'} 
                            keepResult= {true} 
                        /> */}

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
                                        console.log(park.properties);
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
                </div>
                <div className="col-4">
                    <div className="row m-3">
                        <div className="col-6"><canvas id="myChart" width="400" height="400" /></div>
                        <div className="col-6"><canvas id="myChart1" width="400" height="400" /></div>
                    </div>
                    
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default Home;