import React from "react";
import { Marker, Popup, useMap } from "react-leaflet";

function CustomMarker({ data }) {
  const map = useMap();

  const pos = data.isp
    ? { lat: data.location.lat, lng: data.location.lng }
    : { lat: 40.6501, lng: -73.94958 };

  map.flyTo({
    lat: data.location.lat,
    lng: data.location.lng,
  });

  return (
    <Marker position={pos}>
      <Popup>
        You are at {data.location.region},{data.location.country}
      </Popup>
    </Marker>
  );
}

export default CustomMarker;
