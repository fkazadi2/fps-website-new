'use client';

import React, { useRef, useEffect, useState } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';

// Points d'intervention simulés pour les principales villes de RDC
const interventionPoints = [
  { id: 1, name: 'Kinshasa', coords: [15.2, -4.4], type: 'ambulances', count: 16 },
  { id: 2, name: 'Lubumbashi', coords: [27.5, -11.7], type: 'medicaments', count: 45 },
  { id: 3, name: 'Mbuji-Mayi', coords: [23.6, -6.1], type: 'equipements', count: 23 },
  { id: 4, name: 'Kisangani', coords: [25.2, 0.5], type: 'medicaments', count: 31 },
  { id: 5, name: 'Bukavu', coords: [28.9, -2.5], type: 'sang', count: 12 },
  { id: 6, name: 'Goma', coords: [29.2, -1.7], type: 'equipements', count: 18 },
  { id: 7, name: 'Tshikapa', coords: [20.8, -6.4], type: 'medicaments', count: 27 },
  { id: 8, name: 'Kolwezi', coords: [25.5, -10.7], type: 'ambulances', count: 8 },
  { id: 9, name: 'Likasi', coords: [26.7, -10.9], type: 'equipements', count: 15 },
  { id: 10, name: 'Matadi', coords: [13.5, -5.8], type: 'medicaments', count: 19 }
];

const pointColors = {
  medicaments: '#00b7ff',
  equipements: '#e5004c', 
  ambulances: '#f9b233',
  sang: '#00a19a'
};

interface MapDRCProps {
  className?: string;
}

export default function MapDRC({ className = '' }: MapDRCProps) {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<mapboxgl.Map | null>(null);
  const [lng] = useState(23.6);
  const [lat] = useState(-3.0);
  const [zoom] = useState(5.5);

  useEffect(() => {
    if (map.current) return; // Initialize map only once
    
    // Set your Mapbox access token here
    mapboxgl.accessToken = process.env.NEXT_PUBLIC_MAPBOX_TOKEN || 'pk.eyJ1IjoiZmthemFkaTIiLCJhIjoiY205b3psMDVwMTVvYTJscHVrbjQ0c216eSJ9.-TPIL3FfPjJNrclk1-88Zg';
    
    if (!mapContainer.current) return;

    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/light-v11',
      center: [lng, lat],
      zoom: zoom,
      attributionControl: false
    });

    map.current.on('load', () => {
      if (!map.current) return;

      // Add intervention points
      interventionPoints.forEach((point) => {
        const popup = new mapboxgl.Popup({ offset: 25 }).setHTML(
          `<div class="text-center p-2">
            <h3 class="font-bold text-[#035fa9]">${point.name}</h3>
            <p class="text-sm text-gray-600">${point.count} interventions</p>
            <p class="text-xs text-gray-500 capitalize">${point.type}</p>
          </div>`
        );

        const marker = new mapboxgl.Marker({
          color: pointColors[point.type as keyof typeof pointColors],
          scale: 0.8
        })
          .setLngLat(point.coords as [number, number])
          .setPopup(popup)
          .addTo(map.current!);
      });
    });

    return () => {
      if (map.current) {
        map.current.remove();
      }
    };
  }, [lng, lat, zoom]);

  return (
    <div className={`relative ${className}`}>
      <div ref={mapContainer} className="w-full h-full" />
      
      {/* Attribution personnalisée */}
      <div className="absolute bottom-2 right-2 bg-white bg-opacity-80 text-xs px-2 py-1 rounded">
        © Mapbox © OpenStreetMap
      </div>
    </div>
  );
} 