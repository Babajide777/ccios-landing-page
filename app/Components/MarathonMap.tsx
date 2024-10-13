// import { APIKey, MapId } from "@/apis/MapApiKey";
// import {
//   APIProvider,
//   Map,
//   AdvancedMarker,
//   Pin
// } from "@vis.gl/react-google-maps";
// import { useEffect, useState } from "react";

// const MarathonMap = () => {
//   const [currentPosition, setCurrentPosition] = useState(null);
//   const [marathons, setMarathons] = useState([]);

//   // Fetch user's current location
//   useEffect(() => {
//     navigator.geolocation.getCurrentPosition(
//       (position) => {
//         setCurrentPosition({
//           lat: position.coords.latitude,
//           lng: position.coords.longitude
//         });

//         // Fetch marathons nearby once we have the current position
//         fetchMarathonsNearby(position.coords.latitude, position.coords.longitude);
//       },
//       (error) => console.log(error),
//       { enableHighAccuracy: true }
//     );
//   }, []);

//   // Function to fetch nearest marathons
//   const fetchMarathonsNearby = async (lat, lng) => {
//     // Replace with actual API to fetch marathons
//     const response = await fetch(`/api/marathons?lat=${lat}&lng=${lng}`);
//     const data = await response.json();
//     setMarathons(data);
//   };

//   const handleMarathonMapClick = (event) => {
//     // Handle map click if needed
//   };

//   return (
//     <APIProvider apiKey={APIKey}>
//       <div className="hero-content" onClick={handleMarathonMapClick}>
//         {currentPosition ? (
//           <Map zoom={12} center={currentPosition} mapId={MapId}>
//             {/* Marker for user's current location */}
//             <AdvancedMarker position={currentPosition}>
//               <Pin background={"grey"} borderColor={"green"} glyphColor={"purple"} />
//             </AdvancedMarker>

//             {/* Markers for marathons */}
//             {marathons.map((marathon, index) => (
//               <AdvancedMarker key={index} position={marathon.location}>
//                 <Pin background={"blue"} borderColor={"red"} glyphColor={"white"} />
//               </AdvancedMarker>
//             ))}
//           </Map>
//         ) : (
//           <p>Loading map...</p>
//         )}
//       </div>
//     </APIProvider>
//   );
// };

// export default MarathonMap;

import { APIKey, MapId } from "@/apis/MapApiKey";
import {
  APIProvider,
  Map,
  AdvancedMarker,
  Pin
} from "@vis.gl/react-google-maps";
import { useEffect, useState } from "react";

// Define the structure for marathon data
interface Marathon {
  id: string; // Assuming each marathon has a unique ID
  name: string; // Marathon name
  location: {
    lat: number;
    lng: number;
  };
}

const MarathonMap: React.FC = () => {
  const [currentPosition, setCurrentPosition] =
    useState<google.maps.LatLngLiteral | null>(null);
  const [marathons, setMarathons] = useState<Marathon[]>([]);

  // Fetch user's current location
  useEffect(() => {
    const getCurrentPosition = () => {
      navigator.geolocation.getCurrentPosition(
        position => {
          const { latitude, longitude } = position.coords;
          setCurrentPosition({ lat: latitude, lng: longitude });

          // Fetch marathons nearby once we have the current position
          fetchMarathonsNearby(latitude, longitude);
        },
        error => console.log(error),
        { enableHighAccuracy: true }
      );
    };

    getCurrentPosition();
  }, []);

  // Function to fetch nearest marathons
  const fetchMarathonsNearby = async (lat: number, lng: number) => {
    // Replace with actual API to fetch marathons
    const response = await fetch(`/api/marathons?lat=${lat}&lng=${lng}`);
    const data: Marathon[] = await response.json();
    setMarathons(data);
  };

  const handleMarathonMapClick = (event: React.MouseEvent<HTMLDivElement>) => {
    // Handle map click if needed
  };

  return (
    <APIProvider apiKey={APIKey}>
      <div className="hero-content" onClick={handleMarathonMapClick}>
        {currentPosition ? (
          <Map zoom={12} center={currentPosition} mapId={MapId}>
            {/* Marker for user's current location */}
            <AdvancedMarker position={currentPosition}>
              <Pin
                background={"grey"}
                borderColor={"green"}
                glyphColor={"purple"}
              />
            </AdvancedMarker>

            {/* Markers for marathons */}
            {marathons.map(marathon => (
              <AdvancedMarker key={marathon.id} position={marathon.location}>
                <Pin
                  background={"blue"}
                  borderColor={"red"}
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

export default MarathonMap;
