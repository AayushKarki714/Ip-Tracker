import React from "react";
import { MapContainer, TileLayer } from "react-leaflet";
import CustomMarker from "./CustomMarker";

function Map({ data }) {
  return (
    <MapContainer
      center={{ lat: data.location.lat, lng: data.location.lng }}
      zoom={13}
      scrollWheelZoom={false}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <CustomMarker data={data} />
    </MapContainer>
  );
}

export default Map;
