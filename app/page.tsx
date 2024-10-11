"use client";

import React, { useState, useEffect } from "react";
import Hero from "./Components/Hero";
import Feature from "./Components/Feature";
import { Homestyled } from "./Styles/Home.styled";
import { BiSolidShoppingBags } from "react-icons/bi";
import { BiMapAlt } from "react-icons/bi";
import MapComponent from "./Components/MapComponent";

const Home = () => {
  const [currentPosition, setCurrentPosition] = useState<{
    lat: number;
    lng: number;
  } | null>(null);

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
        { enableHighAccuracy: true } // Enables high accuracy mode
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
            title="Groceries & Plants"
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

        {/* Pass currentPosition to MapComponent */}
        <MapComponent currentPosition={currentPosition} />
      </>
    </Homestyled>
  );
};

export default Home;
