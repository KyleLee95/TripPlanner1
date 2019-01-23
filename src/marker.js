const mapboxgl = require('mapbox-gl');

const iconURLs = {
  hotels: 'http://i.imgur.com/D9574Cu.png',
  restaurants: 'http://i.imgur.com/cqR6pUI.png',
  activities: 'http://i.imgur.com/WbMOfMl.png',
};

const buildMarker = (type, coords) => {
  let iconURL = '';
  if (type === 'hotel') {
    iconURL = iconURLs.hotels;
  }

  if (type === 'restaurant') {
    iconURL = iconURLs.restaurants;
  }

  if (type === 'activity') {
    iconURL = iconURLs.activities;
  }

  const markerDomEl = document.createElement('div');
  markerDomEl.style.width = '32px';
  markerDomEl.style.height = '39px';
  markerDomEl.style.backgroundImage = `url(${iconURL})`;
  new mapboxgl.Marker(markerDomEl).setLngLat(coords).addTo(map);
};

console.log(buildMarker('hotel', [-74.009, 40.705]));

module.exports = buildMarker;
