"use client";

import { MapContainer, TileLayer, Marker, Popup, Circle } from "react-leaflet";
import { Icon } from "leaflet";
import "leaflet/dist/leaflet.css";

// Fix for default marker icons in react-leaflet
const defaultIcon = new Icon({
  iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
  iconRetinaUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
  shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
});

// Gold marker for headquarters
const goldIcon = new Icon({
  iconUrl: `data:image/svg+xml;base64,${btoa(`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 36" width="24" height="36">
      <path fill="#b8860b" d="M12 0C5.4 0 0 5.4 0 12c0 9 12 24 12 24s12-15 12-24c0-6.6-5.4-12-12-12z"/>
      <circle fill="white" cx="12" cy="12" r="6"/>
    </svg>
  `)}`,
  iconSize: [24, 36],
  iconAnchor: [12, 36],
  popupAnchor: [0, -36],
});

// Service area locations with coordinates
const serviceAreas = [
  { name: "Sacramento", lat: 38.5816, lng: -121.4944, isMain: true },
  { name: "Roseville", lat: 38.7521, lng: -121.2880 },
  { name: "Rocklin", lat: 38.7908, lng: -121.2358 },
  { name: "Folsom", lat: 38.6780, lng: -121.1761 },
  { name: "El Dorado Hills", lat: 38.6857, lng: -121.0830 },
  { name: "Rancho Cordova", lat: 38.5890, lng: -121.3027 },
  { name: "Citrus Heights", lat: 38.7071, lng: -121.2811 },
  { name: "Orangevale", lat: 38.6835, lng: -121.2261 },
  { name: "Fair Oaks", lat: 38.6446, lng: -121.2722 },
  { name: "Loomis", lat: 38.8221, lng: -121.1933 },
  { name: "Auburn", lat: 38.8966, lng: -121.0769 },
  { name: "Grass Valley", lat: 39.2191, lng: -121.0611 },
];

export default function ServiceAreaMapContent() {
  return (
    <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-lg border border-charcoal-200">
      <MapContainer
        center={[38.72, -121.25]}
        zoom={9}
        scrollWheelZoom={false}
        style={{ height: "100%", width: "100%" }}
        className="rounded-2xl z-0"
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {/* Service radius circle */}
        <Circle
          center={[38.5816, -121.4944]}
          radius={80000}
          pathOptions={{
            color: "#b8860b",
            fillColor: "#b8860b",
            fillOpacity: 0.08,
            weight: 2,
            dashArray: "5, 10",
          }}
        />
        {/* Location markers */}
        {serviceAreas.map((area) => (
          <Marker
            key={area.name}
            position={[area.lat, area.lng]}
            icon={area.isMain ? goldIcon : defaultIcon}
          >
            <Popup>
              <div className="text-center font-sans">
                <strong className={area.isMain ? "text-amber-700" : "text-gray-800"}>
                  {area.name}
                </strong>
                {area.isMain && (
                  <p className="text-xs text-gray-500 mt-1">Headquarters</p>
                )}
              </div>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
}
