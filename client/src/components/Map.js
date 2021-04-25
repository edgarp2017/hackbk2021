import React, { useState, useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'

// API Call for locations go here
import * as API from '../util/api.js'

const Map = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    // Update the document title using the browser API
    API.getLocations().then((result) => {
      if (result.status === 200) {
        setData(result.data.data)
      }
    }).catch((error) => {
      console.log(error)
    })
  }, []);

  return (
    <MapContainer center={[40.7555, -73.9739]} zoom={13} scrollWheelZoom={false}>
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      {
        data === null ? <div /> :
        data.map(location => (
          <Marker position={[location.longitude, location.latitude]} key={location.id}>
            <Popup>
              <h2>
                {`${location.name}`}
              </h2>
            </Popup>
          </Marker>
        ))
      }      
    </MapContainer>
  );
}

export default Map;
