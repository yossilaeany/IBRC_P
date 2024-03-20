import React, { useContext } from 'react'
import { Marker, Popup, useMap,Tooltip } from 'react-leaflet'
import { Icon } from 'leaflet';
import {Choice} from "../components/FormSelect"

const MyMarker = () => {
    const choice = useContext(Choice)
    const obj ={iconUrl:"images/iconMarker.png" ,
iconSize:[36,40]}

const MyIcon = new Icon(obj);

    const map = useMap();
    map.flyTo(choice.position);

    return (
        <Marker position={choice.position} icon={MyIcon}>
            <Tooltip>
                תחנת טיבוע
            </Tooltip>
        </Marker>
    )
}

export default MyMarker