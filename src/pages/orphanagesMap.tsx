import React from 'react'
import { Link } from 'react-router-dom'
import { FiPlus } from 'react-icons/fi'
import { Map, TileLayer } from 'react-leaflet'

import mapMarker from '../assets/images/local-marker.svg'

import 'leaflet/dist/leaflet.css'
import '../styles/pages/orphanagesMap.css'

function OrphanagesMap() {
    return (
        <div id="page-map">
            <aside>
                <header>
                    <img src={mapMarker} alt='Marker' />

                    <h2>Escolha um orfanato no mapa</h2>
                    <p>Muitas crianças estão esperando sua visita :)</p>
                </header>

                <footer>
                    <strong>Recife</strong>
                    <span>Pernambuco</span>
                </footer>
            </aside>

            <Map 
                center={[-8.0565199,-34.9011975]}
                zoom={14}
                style={{ width: "100%", height: "100%" }}
            >
               {/* <TileLayer url='https://a.tile.openstreetmap.org/{z}/{x}/{y}.png' />  */}
               <TileLayer url={`https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`} />
            
            </Map>  


            <div className="create-orphanage">

                <Link to=''>
                    <FiPlus size={32} color="#fff" />
                </Link>
            </div>
        </div>
    );
}

export default OrphanagesMap;