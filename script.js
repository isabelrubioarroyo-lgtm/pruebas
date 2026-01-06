mapboxgl.accessToken = 'pk.eyJ1IjoiaXNhYmVscnViaW9hIiwiYSI6ImNtanNzZ2h2OTJmMWszZHNkYWN6dzczMmUifQ.b5XfE8S-qEIoFG6FNPifvQ';

const map = new mapboxgl.Map({
  container: 'map',
  style: 'mapbox://styles/mapbox/light-v11',
  center: [-98, 39],
  zoom: 3
});

const chapters = {
  overview: {
    center: [-98, 39],
    zoom: 3
  },
  california: {
    center: [-119.5, 36.7],
    zoom: 5
  },
  east: {
    center: [-74, 40.7],
    zoom: 6
  }
};

map.on('load', () => {

  // ---------- DATOS ----------
  const data = {
    type: "FeatureCollection",
    features: [
      { type: "Feature", properties: { state: "CA", deaths: 9168 }, geometry: { type: "Point", coordinates: [-119.4179, 36.7783] } },
      { type: "Feature", properties: { state: "TX", deaths: 4609 }, geometry: { type: "Point", coordinates: [-99.9018, 31.9686] } },
      { type: "Feature", properties: { state: "FL", deaths: 4430 }, geometry: { type: "Point", coordinates: [-81.5158, 27.6648] } },
      { type: "Feature", properties: { state: "WA", deaths: 3227 }, geometry: { type: "Point", coordinates: [-120.7401, 47.7511] } },
      { type: "Feature", properties: { state: "PA", deaths: 3132 }, geometry: { type: "Point", coordinates: [-77.1945, 41.2033] } },
      { type: "Feature", properties: { state: "OH", deaths: 2830 }, geometry: { type: "Point", coordinates: [-82.9071, 40.4173] } },
      { type: "Feature", properties: { state: "AZ", deaths: 2790 }, geometry: { type: "Point", coordinates: [-111.0937, 34.0489] } },
      { type: "Feature", properties: { state: "TN", deaths: 2361 }, geometry: { type: "Point", coordinates: [-86.5804, 35.5175] } },
      { type: "Feature", properties: { state: "IL", deaths: 2288 }, geometry: { type: "Point", coordinates: [-89.3985, 40.6331] } },
      { type: "Feature", properties: { state: "NC", deaths: 2163 }, geometry: { type: "Point", coordinates: [-79.0193, 35.7596] } }
    ]
  };

  // ---------- SOURCE ----------
  map.addSource("overdose", {
    type: "geojson",
    data: data
  });

  // ---------- LAYER
