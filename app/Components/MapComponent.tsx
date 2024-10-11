"use client";

import React, { useState } from "react";
import { APIKey, MapId } from "@/apis/MapApiKey";
import {
  APIProvider,
  Map,
  AdvancedMarker,
  Pin
} from "@vis.gl/react-google-maps";

type MapComponentProps = {
  currentPosition: { lat: number; lng: number } | null;
};

const MapComponent: React.FC<MapComponentProps> = ({ currentPosition }) => {
  const [open, setOpen] = useState(false);

  return (
    <APIProvider apiKey={APIKey}>
      <div style={{ height: "100vh" }}>
        {currentPosition ? (
          <Map zoom={12} center={currentPosition} mapId={MapId}>
            <AdvancedMarker
              position={currentPosition}
              onClick={() => setOpen(true)}
            >
              <Pin
                background={"grey"}
                borderColor={"green"}
                glyphColor={"purple"}
              />
            </AdvancedMarker>
          </Map>
        ) : (
          <p>Loading map...</p>
        )}
      </div>
    </APIProvider>
  );
};

export default MapComponent;
