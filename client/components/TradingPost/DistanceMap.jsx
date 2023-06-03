import React, { useEffect, useState } from 'react';
import axios from 'axios';
import mapboxgl from '!mapbox-gl'; // eslint-disable-line import/no-webpack-loader-syntax

mapboxgl.accessToken = '';

const DistanceMap = () => {
  const [travelTime, setTravelTime] = useState(null);

  // rendering the map to the page
  useEffect(() => {
    const map = new mapboxgl.Map({
      container: 'map-container',
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [-90.052139, 29.974180],
      zoom: 12
    });

    // having a marker for both the origin and the destination
    const originMarker = new mapboxgl.Marker().setLngLat([-90.051800, 29.974180]).addTo(map);
    const destinationMarker = new mapboxgl.Marker().setLngLat([-90.052139, 29.963261]).addTo(map);

    // creating the mapbox api request
    const directionsUrl = `https://api.mapbox.com/directions/v5/mapbox/driving/${-90.051800},${29.974180};${-90.052139},${29.963261}?access_token=${mapboxgl.accessToken}`;

    // sending the mapbox request and then calculating the driving time in minutes
    axios
      .get(directionsUrl)
      .then((res) => {
        const route = res.data.routes[0];
        const travelTime = route.duration / 60;
        setTravelTime(travelTime);
      })
      .catch(error => {
        console.error('Could not get the directions :(', error);
      });

    return () => {
      map.remove();
    };
  }, []);

  return (
    <div>
      <div id="map-container" style={{ height: '400px' }}></div>
      {travelTime && (
        <p>It takes {Math.round(travelTime)} minutes to drive there</p>
      )}
    </div>
  );
};

export default DistanceMap;
