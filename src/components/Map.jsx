import  React,{ useState,useContext } from 'react'
import 'leaflet/dist/leaflet.css';
import { MapContainer, TileLayer, Marker, Popup, Tooltip } from 'react-leaflet';
import {Choice} from './FormSelect'
import MyMarker from './MyMarker';

const Map = () => {
    const choice = useContext(Choice);
      return (
        <div className='d-flex justify-content-center mapsize' >
            <MapContainer center={choice.position} zoom={13} style={{
                    height: '100%', width:
                        '100%'
                }}>
                    <TileLayer
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        attribution='&copy; <a
    href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>
    contributors'
                    />
                    <MyMarker>
                    </MyMarker>
                </MapContainer>
        </div>
      )
}

export default Map