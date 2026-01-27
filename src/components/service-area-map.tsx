"use client";

import dynamic from "next/dynamic";

// Dynamically import the map to avoid SSR issues with Leaflet
const MapWithNoSSR = dynamic(() => import("./service-area-map-content"), {
  ssr: false,
  loading: () => (
    <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-charcoal-100 border border-charcoal-200">
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-center">
          <div className="w-8 h-8 border-2 border-gold-600 border-t-transparent rounded-full animate-spin mx-auto mb-2" />
          <span className="text-charcoal-400 text-sm">Loading map...</span>
        </div>
      </div>
    </div>
  ),
});

export function ServiceAreaMap() {
  return <MapWithNoSSR />;
}
