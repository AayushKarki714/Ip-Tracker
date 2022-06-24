import React from "react";
import { Marker, Popup, useMap } from "react-leaflet";

function CustomMarker({ data }) {
  const map = useMap();

  const pos = { lat: data.location.lat, lng: data.location.lng };

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
