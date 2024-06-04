import React, { useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMap  } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import SetPopup from './SetPopups';

const defaultPos = [52.2, 21.13];
const defaultZoom = 12;

function Map({currentFilter}) {

    return (
        <MapContainer 
            center={defaultPos} 
            zoom={defaultZoom} 
            scrollWheelZoom={true}
            style={{ height: "100%", width: "100%", position:"fixed" }}
        >
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <SetPopup currentFilter={currentFilter} />
        </MapContainer>
    )
}

export default Map;
