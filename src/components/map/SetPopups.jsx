import {Marker, Popup} from 'react-leaflet';
import {GetData} from "../../db/DataParser";
import parsePosition from '../../utils/positionParser';
import PopupContentSeen from './PopupContentSeen';
import PopupContentFound from './PopupContentFound';
import PopupContentLost from './PopupContentLost';
import { check } from '../../utils/filters';
import { getMarkerIcon } from '../../data/iconMarkers';
import { useEffect } from 'react';

function PopupComponent(data, filter, dbName) {
    let popupContent;
    if (dbName == "pets_seen") { popupContent = PopupContentSeen; }
    if (dbName == "pets_found") { popupContent = PopupContentFound; }
    if (dbName == "pets_lost") { popupContent = PopupContentLost; }
    let markerIcon = getMarkerIcon(dbName);
    
    if (filter.types != "all" && filter.types != dbName) { 
        return (<></>); 
    }
 
    return (
        <>
            {data.map((el, i) => {
                if(check(filter.filters, el)) { 
                return (
                    <div key={i}>
                        <Marker 
                            position={parsePosition(el.position)}
                            icon={markerIcon}>
                            <Popup minWidth="300" minHeighr="150">
                                {popupContent(el)}
                            </Popup>
                        </Marker>
                    </div>
                );
                } else {
                    return (<div key={i}></div>);
                }
            })}
        </>
    );
}

function SetPopup({currentFilter}) {
    let baseSelection = 
    '*, pet_type(value), pet_breed(value), color(value)'
    let petsSeen = GetData(
        "pets_seen", 
        PopupComponent, 
        baseSelection, 
        currentFilter);
    let petsFound = GetData(
        "pets_found", 
        PopupComponent, 
        baseSelection, 
        currentFilter);
    let petsLost = GetData(
        "pets_lost", 
        PopupComponent, 
        baseSelection, 
        currentFilter);
    
    return (
        <>
            {petsSeen}
            {petsFound}
            {petsLost}
        </>
    );
}

export default SetPopup;
