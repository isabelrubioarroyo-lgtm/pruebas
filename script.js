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

const sections = document.querySelectorAll("section");

window.addEventListener("scroll", () => {
  sections.forEach(section => {
    const rect = section.getBoundingClientRect();
    if (rect.top < window.innerHeight / 2 && rect.bottom > 0) {
      const step = section.dataset.step;
      map.flyTo(chapters[step]);
    }
  });
});
