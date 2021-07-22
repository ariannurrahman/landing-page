import { useEffect, useRef } from "react";
import mapboxgl from "mapbox-gl";

mapboxgl.accessToken = "pk.eyJ1IjoiYXJpYW5kcm9pZCIsImEiOiJja2FiM2VhbTEwdXBoMnJqcDRndW94YmwxIn0.lOrYJvwhR54494WrMWNWUA";

const MapComponent = () => {
  const mapContainer = useRef(null);
  const map = useRef(null);

  const lng = 101.69013700473967;
  const lat = 3.088130826779079;
  const zoom = 12;

  //   3.088130826779079, 101.69013700473967

  useEffect(() => {
    if (map.current) return; // initialize map only once
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: "mapbox://styles/mapbox/streets-v11",
      center: [lng, lat],
      zoom: zoom,
    });
  });

  return (
    <div style={{ width: "100%", height: "50vh" }} className="pt-3">
      <div ref={mapContainer} className="map-container w-100 h-100 rounded"></div>
    </div>
  );
};

export default MapComponent;
