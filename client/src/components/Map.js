import React, { useState, useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'

// API Call for locations go here

const Map = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    // Update the document title using the browser API
    const result = [{
      id: 1,
      name: "Test",
      lati: 40.7555,
      longi: -73.9739
    }]
    setData(result)
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
          <Marker position={[location.lati, location.longi]} key={location.id}>
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
