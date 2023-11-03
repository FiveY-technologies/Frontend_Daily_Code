import React, { useEffect, useState } from 'react';
import { GoogleMap, LoadScript, Marker, InfoWindow } from '@react-google-maps/api';
import axios from 'axios';

const MapComponent = () => {
  const [directionData, setDirectionData] = useState([]);
  const [map, setMap] = useState(null);
  const [selectedMarker, setSelectedMarker] = useState(null);

  const fetchDirectionData = async () => {
    try {
      const response = await axios.get("http://107.23.187.126:3000/");
      setDirectionData(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    fetchDirectionData();
  }, []);

  const mapStyles = {
    height: '1000px',
    width: '100%',
  };

  const defaultCenter = {
    lat: 11.00555,
    lng: 78.96612,
  };

  const apiKey = 'AIzaSyDciM17HrWOucxREypzzWE7KJ_wMqTVoZ0';

  return (
    <LoadScript googleMapsApiKey={apiKey} onLoad={() => fetchDirectionData()}>
      <GoogleMap
        mapContainerStyle={mapStyles}
        zoom={6}
        center={defaultCenter}
        onLoad={(map) => setMap(map)}
      >
        {map &&
          directionData.map((direction, index) => (
            <Marker
              key={index}
              position={{
                lat: direction.dir_latitude,
                lng: direction.dir_longitude,
              }}
              onClick={() => {
                setSelectedMarker(direction);
              }}
            />
          ))}

        {selectedMarker && (
          <InfoWindow
            position={{
              lat: selectedMarker.dir_latitude,
              lng: selectedMarker.dir_longitude,
            }}
            onCloseClick={() => {
              setSelectedMarker(null);
            }}
          >
            <div>
              <h2>Marker Info</h2>
              <p>Latitude: {selectedMarker.dir_latitude}</p>
              <p>Longitude: {selectedMarker.dir_longitude}</p>
            </div>
          </InfoWindow>
        )}
      </GoogleMap>
    </LoadScript>
  );
};

export default MapComponent;
