"use client";

import React, { useState, useEffect, useRef } from "react";
import Hero from "./Components/Hero";
import Feature from "./Components/Feature";
import { Homestyled } from "./Styles/Home.styled";
import { BiSolidShoppingBags } from "react-icons/bi";
import { BiMapAlt } from "react-icons/bi";
import { APIKey, MapId } from "@/apis/MapApiKey";
import {
  APIProvider,
  Map,
  AdvancedMarker,
  Pin,
} from "@vis.gl/react-google-maps";

const Home = () => {
  const [currentPosition, setCurrentPosition] = useState<{
    lat: number;
    lng: number;
  } | null>(null);
  const [open, setOpen] = useState(false);

  // Fetch the user's current location
  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          console.log(
            `Your exact location: Lat: ${latitude}, Lon: ${longitude}`
          );
          // Update the map with the exact location
          setCurrentPosition({ lat: latitude, lng: longitude });
        },
        (error) => {
          console.error("Error fetching location: ", error);
        },
        { enableHighAccuracy: true } // This enables high accuracy mode
      );
    } else {
      console.error("Geolocation is not supported by this browser.");
    }
  }, []);

  const handleMarathanMapClick = () => {
    console.log("Marathon Map clicked");
  };

  const handleGroceriesPlantClick = () => {
    console.log("Groceries and Plant clicked");
  };

  const handleSpaClick = () => {
    console.log("Spa clicked");
  };

  return (
    <Homestyled>
      <>
        <Hero />
        <div className="features">
          <Feature
            Icon={BiMapAlt}
            title="Marathons near me"
            description="Find marathons happening near you."
            onClick={handleMarathanMapClick}
          />
          <Feature
            Icon={BiSolidShoppingBags}
            title="Groceries & Plants "
            description="Find the nearest groceries and plants."
            onClick={handleGroceriesPlantClick}
          />
          <Feature
            Icon={BiSolidShoppingBags}
            title="Spooky Spa (Seasonal)"
            description="Find more partners."
            onClick={handleSpaClick}
          />
        </div>
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
      </>
    </Homestyled>
  );
};

export default Home;
