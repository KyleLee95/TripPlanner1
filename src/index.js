console.log('Hello from JavaScript');

const mapboxgl = require('mapbox-gl');
const buildMarker = require('./marker');

const marker = new buildMarker('hotel', [-87.6354, 41.8885]);

mapboxgl.accessToken =
  'pk.eyJ1Ijoia3lsZWNybGVlOTUiLCJhIjoiY2pyOW9kbjg3MGQ0cDQzcWtoYXVtYnRlZCJ9.-X3wa67Br8At-XQ7hyMHhw';

const map = new mapboxgl.Map({
  container: 'map',
  center: marker.coords, // FullStack NY coordinates; alternatively, use [-87.6354, 41.8885] for Chicago
  zoom: 12, // starting zoom
  style: 'mapbox://styles/mapbox/streets-v10', // mapbox has lots of different map styles available.
});

const markerDomEl = document.createElement('div');
markerDomEl.style.width = '32px';
markerDomEl.style.height = '39px';
markerDomEl.style.backgroundImage = `url(${marker.iconURL})`;
new mapboxgl.Marker(markerDomEl).setLngLat(marker.coords).addTo(map);

// const marker = buildMarker("activity", [-74.009151, 40.705086]); // or [-87.6354, 41.8885]
// marker.addTo(map);
