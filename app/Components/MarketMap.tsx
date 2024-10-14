import { useEffect, useState } from "react";
import { APIKey, MapId } from "@/apis/MapApiKey";
import {
  APIProvider,
  Map,
  AdvancedMarker,
  Pin,
} from "@vis.gl/react-google-maps";

interface Position {
  lat: number;
  lng: number;
}

interface Market {
  geometry: {
    location: Position;
  };
}

const MarketMap = () => {
  const [currentPosition, setCurrentPosition] = useState<Position | null>(null);
  const [nearbyMarkets, setNearbyMarkets] = useState<Market[]>([]);

  // Placeholder function for handling map click
  const handleMarathanMapClick = () => {
    console.log("Map clicked!");
  };

  // Get user's current location
  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        const { latitude, longitude } = position.coords;
        setCurrentPosition({ lat: latitude, lng: longitude });

        // Fetch nearby markets using Google Places API
        fetchNearbyMarkets(latitude, longitude);
      });
    }
  }, []);

  // Function to fetch nearby markets
  const fetchNearbyMarkets = (lat: number, lng: number) => {
    if (window.google?.maps?.places) {
      const service = new google.maps.places.PlacesService(
        document.createElement("div")
      );
      const request: google.maps.places.PlaceSearchRequest = {
        location: new google.maps.LatLng(lat, lng),
        radius: 5000, // 5 km radius
        type: "market", // Single string, not array
      };

      service.nearbySearch(request, (results: any, status: any) => {
        if (status === google.maps.places.PlacesServiceStatus.OK) {
          setNearbyMarkets(results);
        }
      });
    } else {
      console.error("Google Places API not loaded.");
    }
  };

  return (
    <APIProvider
      apiKey={APIKey}
      //   options={{
      //     libraries: ["places"], // Load the Places library
      //   }}
      libraries={["places"]}
    >
      <div className="hero-content" onClick={handleMarathanMapClick}>
        {currentPosition ? (
          <Map zoom={12} center={currentPosition} mapId={MapId}>
            {/* Marker for user's current position */}
            <AdvancedMarker position={currentPosition}>
              <Pin
                background={"grey"}
                borderColor={"green"}
                glyphColor={"purple"}
              />
            </AdvancedMarker>

            {/* Markers for nearby markets */}
            {nearbyMarkets.map((market, index) => (
              <AdvancedMarker key={index} position={market.geometry.location}>
                <Pin
                  background={"blue"}
                  borderColor={"yellow"}
                  glyphColor={"white"}
                />
              </AdvancedMarker>
            ))}
          </Map>
        ) : (
          <p>Loading map...</p>
        )}
      </div>
    </APIProvider>
  );
};

export default MarketMap;
