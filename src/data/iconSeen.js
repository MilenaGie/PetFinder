import L from 'leaflet';
import markerSeen from '../assets/icon-seen.svg';
import markerFound from '../assets/icon-found.svg';
import markerLost from '../assets/icon-lost.svg';

function getMarkerIcon(iconType) {
    let marker;
    if (iconType == "pets_seen") { marker = markerSeen; }
    if (iconType == "pets_found") { marker = markerFound; }
    if (iconType == "pets_lost") { marker = markerLost; }
    let icon = new L.Icon({
        iconUrl: marker,
        iconRetinaUrl: marker,
        iconAnchor: null,
        popupAnchor: null,
        shadowUrl: null,
        shadowSize: null,
        shadowAnchor: null,
        popupAnchor:  [-0, -0],
        iconSize: new L.Point(50, 50),
        className: 'icon-seen'
    });
    return icon;
}

export { getMarkerIcon };