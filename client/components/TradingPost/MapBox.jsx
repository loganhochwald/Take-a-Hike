import React, { useRef, useEffect, useState } from 'react';

import mapboxgl from '!mapbox-gl'; // eslint-disable-line import/no-webpack-loader-syntax
import { AddressAutofill } from '@mapbox/search-js-react';


mapboxgl.accessToken = 'pk.eyJ1IjoibG9nYW5ob2Nod2FsZCIsImEiOiJjbGk5amVxNjkxMm1pM2VxaGdvMGJqbWdsIn0.NAR7i7vhdEgGB7FCiWOzIw';

const MapBox = ({ lng, lat}) => {

  const mapContainer = useRef(null);
  const map = useRef(null);
  // const [lng, setLng] = useState(-70.9);
  // const [lat, setLat] = useState(42.35);
  const [zoom, setZoom] = useState(9);

  const [value, setValue] = React.useState('');

  useEffect(() => {
    if (map.current) return; // initialize map only once
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/outdoors-v12',
      center: [lng, lat],
      zoom: zoom
    });
  });

  return (
    <div>
      <div ref={mapContainer} className="map-container" />
      <form>
            <AddressAutofill accessToken={ mapboxgl.accessToken }>
                <input
                    name="address" placeholder="Address" type="text"
                    autoComplete="address-line1"
                />
            </AddressAutofill>
            <input
                name="apartment" placeholder="Apartment number" type="text"
                autoComplete="address-line2"
            />
            <input
                name="city" placeholder="City" type="text"
                autoComplete="address-level2"
            />
            <input
                name="state" placeholder="State" type="text"
                autoComplete="address-level1"
            />
            <input
                name="postcode" placeholder="Postcode" type="text"
                autoComplete="postal-code"
            />
            <input
                name="country" placeholder="Country" type="text"
                autoComplete="country"
            />

        </form>
</div>
  );

}

export default MapBox;