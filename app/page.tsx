"use client";

import React, { useState, useEffect, useRef } from "react";
import Hero from "./Components/Hero";
import Feature from "./Components/Feature";
import { Homestyled } from "./Styles/Home.styled";
import { BiSolidShoppingBags, BiMapAlt } from "react-icons/bi";
import { APIKey } from "@/apis/MapApiKey";
// import {
//   useGetNearestMarathonsQuery,
//   useGetNearestGroceriesQuery,
//   useGetNearestSpookySpasQuery
// } from "@/apis/Features/movies/mapApiSlice";

const Home = () => {
  const mapRef = useRef<HTMLDivElement | null>(null);
  const [activeType, setActiveType] = useState<
    "marathon" | "groceryPlant" | "spa"
  >("marathon");
  const [currentCoords, setCurrentCoords] = useState<{
    lat: number;
    lon: number;
  } | null>(null);

  // Function to get user's current location
  const getCurrentLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        position => {
          setCurrentCoords({
            lat: position.coords.latitude,
            lon: position.coords.longitude
          });
        },
        error => {
          console.error("Error fetching location: ", error);
        }
      );
    } else {
      console.error("Geolocation is not supported by this browser.");
    }
  };

  // Fetch data based on activeType and current coordinates
  const fetchLocations = () => {
    if (!currentCoords) return { data: [] };

    // switch (activeType) {
    //   case "marathon":
    //     return useGetNearestMarathonsQuery(currentCoords);
    //   case "groceryPlant":
    //     return useGetNearestGroceriesQuery(currentCoords);
    //   case "spa":
    //     return useGetNearestSpookySpasQuery(currentCoords);
    //   default:
    //     return { data: [] };
    // }
  };

  // const { data: locations } = fetchLocations();

  useEffect(() => {
    getCurrentLocation();
  }, []);

  // useEffect(() => {
  //   if (mapRef.current && currentCoords) {
  //     const platform = new window.H.service.Platform({ apikey: APIKey });
  //     const defaultLayers = platform.createDefaultLayers();
  //     const map = new window.H.Map(
  //       mapRef.current,
  //       defaultLayers.vector.normal.map,
  //       {
  //         zoom: 12,
  //         center: { lat: currentCoords.lat, lng: currentCoords.lon }
  //       }
  //     );

  //     const ui = window.H.ui.UI.createDefault(map, defaultLayers);
  //     const mapEvents = new window.H.mapevents.MapEvents(map);
  //     const behavior = new window.H.mapevents.Behavior(mapEvents);

  //     // Clear existing markers
  //     map.removeObjects(map.getObjects());

  // Add markers for the fetched locations
  //     locations?.forEach((location: any) => {
  //       const { position, title } = location;
  //       const marker = new window.H.map.Marker({
  //         lat: position[0],
  //         lng: position[1]
  //       });
  //       marker.setData(title);
  //       map.addObject(marker);
  //     });

  //     // Clean up map on unmount
  //     return () => {
  //       map.dispose();
  //     };
  //   }
  // }, [locations, currentCoords]);

  // Handlers for different clicks
  const handleMarathonMapClick = () => {
    setActiveType("marathon");
  };

  const handleGroceriesPlantClick = () => {
    setActiveType("groceryPlant");
  };

  const handleSpaClick = () => {
    setActiveType("spa");
  };

  return (
    <Homestyled>
      <>
        <Hero />
        <div className="features">
          <Feature
            Icon={BiMapAlt}
            title="Marathons near me"
            description="Find marathons close to you."
            onClick={handleMarathonMapClick}
          />
          <Feature
            Icon={BiSolidShoppingBags}
            title="Groceries & Plants "
            description="Explore grocery stores and plant nurseries near you."
            onClick={handleGroceriesPlantClick}
          />
          <Feature
            Icon={BiSolidShoppingBags}
            title="Spooky Spa (Seasonal)"
            description="Discover spooky spas around you."
            onClick={handleSpaClick}
          />
        </div>
        <div ref={mapRef} style={{ width: "100%", height: "400px" }} />
      </>
    </Homestyled>
  );
};

export default Home;
