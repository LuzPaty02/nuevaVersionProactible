import React, { useEffect, useRef } from 'react';

export default function Maps() {
  const mapRef = useRef(null);
  const MAPS_API_KEY = import.meta.env.VITE_MAPS_API_KEY || "";

  useEffect(() => {
    const initMap = () => {
      if (mapRef.current && window.google) {
        // Initialize the map
        const map = new google.maps.Map(mapRef.current, {
          center: { lat: 20.7295168, lng: -103.3697941 }, // Coordinates for address
          zoom: 15, // Adjusted zoom level for a closer view
        });

        // Add a marker to the map
        const marker = new google.maps.Marker({
          position: { lat: 20.7295168, lng: -103.3697941 }, //  center
          map: map,
          title: "Proactible Laboratorio de Prótesis de Pierna y Órtesis", // Tooltip text when hovering over the marker
        });

        // Create an InfoWindow for custom tooltip
        const infoWindow = new google.maps.InfoWindow({
          content: "<div style='font-size: 14px; font-family: Arial;'>Proactible Laboratorio de Prótesis de Pierna y Órtesis</div>"
        });

        // Add event listeners for hover effect
        marker.addListener("mouseover", () => {
          infoWindow.open(map, marker);
        });

        marker.addListener("mouseout", () => {
          infoWindow.close();
        });
      }
    };

    const loadGoogleMapsScript = () => {
      const existingScript = document.getElementById('googleMapsScript');
      if (!existingScript) {
        const script = document.createElement('script');
        script.id = 'googleMapsScript';
        script.src = `https://maps.googleapis.com/maps/api/js?key=${MAPS_API_KEY}`;
        script.async = true;
        script.defer = true;

        script.onload = () => {
          initMap();
        };

        document.head.appendChild(script);
      } else {
        initMap();
      }
    };

    loadGoogleMapsScript();

    return () => {
      if (window.initMap) {
        delete window.initMap;
      }
    };
  }, [MAPS_API_KEY]);

  return (
    <div className="w-full h-96">
      <div ref={mapRef} className="w-full h-full rounded-lg" />
    </div>
  );
}
