"use client";

import React, { useState, useEffect } from "react";
import { toast, ToastContainer } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { Herostyled } from "../Styles/Components/Hero.styled";
import { supabase } from "@/lib/supabase";
import { isValidEmail } from "@/lib/emailValidation";
import { isValidNigerianPostalCode } from "@/lib/emailValidation";
import { RootState } from "@/store/store";
import { subscribe } from "@/store/subscriptionSlice";
import options from "@/lib/optionsData";
import "react-toastify/dist/ReactToastify.css";
import { APIKey, MapId } from "@/apis/MapApiKey";
import {
  APIProvider,
  Map,
  AdvancedMarker,
  Pin,
} from "@vis.gl/react-google-maps";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faApple,
  faGooglePlay,
  faFacebook,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import MarathonMap from "./MarathonMap";
import { HeroProps } from "@/lib/typeof";
import MarketMap from "./MarketMap";

const Hero: React.FC<HeroProps> = ({
  step,
  setStep,
  postalCode,
  setPostalCode,
  selectedOption,
  optionSelect,
  handleSelectChange,
  handleGroceriesPlantClick,
  handleMarathanMapClick,
  handlePostalCodeChange,
  handleCheckboxChange,
}) => {
  const [showEmailInput, setShowEmailInput] = useState(false);
  const [currentPosition, setCurrentPosition] = useState<{
    lat: number;
    lng: number;
  } | null>(null);
  const [open, setOpen] = useState(false);
  const [email, setEmail] = useState("");
  const dispatch = useDispatch();
  const isSubscribed = useSelector(
    (state: RootState) => state.subscription.subscribed
  );

  const stateEmail = useSelector(
    (state: RootState) => state.subscription.email
  );

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
        { enableHighAccuracy: true }
      );
    } else {
      console.error("Geolocation is not supported by this browser.");
    }
  }, []);

  const handleGetStartedClick = () => {
    setShowEmailInput(true);
    setStep(2);
  };

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const handleFormSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!isValidEmail(email)) {
      toast.error("Please enter a valid email address.", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      return;
    }

    try {
      const { data, error } = await supabase
        .from("users")
        .insert([{ email: email }])
        .select();

      dispatch(subscribe({ email }));
      setEmail("");
      if (error) {
        console.error("Error saving email:", error);
        setStep(2);
        toast.error("An error occurred. Please try again.", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      } else {
        console.log("Email saved successfully:", data);
        setStep(0);

        toast.success("Thank you for subscribing!", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      }
    } catch (error) {
      console.error("Error:", error);
      toast.error("An error occurred. Please try again.", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
  };

  const handleSecondFormSubmit = async (e: any) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const objData = Object.fromEntries(data.entries());

    let check = false;

    if (!isValidNigerianPostalCode(objData["postal-code"] as string)) {
      toast.error("Please enter a valid Nigerian zip-code");
      check = false;
    }

    if (!objData?.plants) {
      toast.error("Please let us know if you have plants");
    }
    if (objData["postal-code"] == "") {
      toast.error("Please enter your zip-code");
    }

    if (
      objData?.plants &&
      objData["postal-code"] != "" &&
      isValidNigerianPostalCode(objData["postal-code"] as string)
    ) {
      check = true;
    }

    if (check) {
      const dataToBeSent = {
        plants: objData?.plants == "Yes" ? true : false,
        local_garden_or_plants: objData["postal-code"],
        indoor_garden_or_conservatory: objData?.garden,
        email: stateEmail,
      };

      const { data, error } = await supabase
        .from("plants and gardens")
        .insert([dataToBeSent])
        .select();

      if (error) toast.error(`${error}`);

      if (data) toast.success("Groceries and plants data saved");
    }
  };

  return (
    <Herostyled>
      <ToastContainer />
      {(() => {
        switch (step) {
          case 0:
            return <></>;

          case 1:
            return (
              <>
                {isSubscribed || (
                  <div className="hero-content">
                    <h1>Cartclo</h1>
                    <p>connect with gym buddies worldwide</p>
                    <div className="submit-btn">
                      <button
                        className="submit"
                        onClick={handleGetStartedClick}
                      >
                        Get Started
                      </button>
                    </div>
                  </div>
                )}
              </>
            );

          case 2:
            return (
              <div className="hero-content">
                <h2 className="email-text">Enter your email address</h2>
                <form onSubmit={handleFormSubmit} className="form">
                  <input
                    type="email"
                    value={email}
                    onChange={handleEmailChange}
                    placeholder="Email address"
                    required
                    className="input-field"
                  />
                  <div className="submit-btn">
                    <button type="submit" className="submit">
                      Subscribe
                    </button>
                  </div>
                </form>
              </div>
            );

          case 3:
            return (
              isSubscribed && (
                <div className="hero-content">
                  <form onSubmit={handleSecondFormSubmit} className="form">
                    <fieldset name="plants">
                      <legend>Do you have plants?</legend>
                      <div className="checkboxes">
                        <label style={{ color: "white" }}>
                          <input
                            type="radio"
                            value="Yes"
                            name="plants"
                            checked={selectedOption === "Yes"}
                            onChange={handleCheckboxChange}
                          />
                          Yes
                        </label>
                      </div>
                      <div className="checkboxes">
                        <label style={{ color: "white" }}>
                          <input
                            type="radio"
                            value="No"
                            name="plants"
                            checked={selectedOption === "No"}
                            onChange={handleCheckboxChange}
                          />
                          No
                        </label>
                      </div>
                    </fieldset>
                    <label className="postal-code-input">
                      Local garden or plants nearby?
                    </label>
                    <input
                      type="text"
                      placeholder="Enter your postal code"
                      value={postalCode}
                      onChange={handlePostalCodeChange}
                      className="input-field"
                      name="postal-code"
                    />
                    <div className="select-option">
                      <label htmlFor="garden-select">
                        Indoor garden or conservatory?
                      </label>
                      <select
                        id="garden-select"
                        className="select-field"
                        value={optionSelect}
                        onChange={handleSelectChange}
                        name="garden"
                      >
                        {options.map((item, index) => (
                          <option value={item} key={index}>
                            {item}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div className="submit-btn">
                      <button type="submit" className="submit">
                        Submit
                      </button>
                    </div>
                  </form>
                </div>
              )
            );

          case 4:
            return (
              isSubscribed && (
                <div className="hero-content">
                  <h2>Find us on:</h2>
                  <div className="icon-box">
                    <div className="social-media">
                      <a
                        href="https://play.google.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="social-size"
                      >
                        <FontAwesomeIcon icon={faGooglePlay} size="2x" />
                        <span className="social-text">
                          {" "}
                          Get it on <span className="bold">Play Store</span>
                        </span>
                      </a>
                    </div>
                    <div className="social-media">
                      <a
                        href="https://www.apple.com/app-store/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="social-size"
                      >
                        <FontAwesomeIcon icon={faApple} size="2x" />
                        <span className="social-text">
                          {" "}
                          Get it on the <span className="bold">App Store</span>
                        </span>
                      </a>
                    </div>
                    <div className="social-media">
                      <a
                        href="https://www.facebook.com/cartclo?mibextid=9R9pXO"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="social-size"
                      >
                        <FontAwesomeIcon icon={faFacebook} size="2x" />
                        <span className="social-text">
                          {" "}
                          Follow us on <span className="bold">Facebook</span>
                        </span>
                      </a>
                    </div>
                    <div className="social-media">
                      <a
                        href="https://www.linkedin.com/company/cclo/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="social-size"
                      >
                        <FontAwesomeIcon icon={faLinkedin} size="2x" />
                        <span className="social-text">
                          {" "}
                          Follow us on <span className="bold">Linkedin</span>
                        </span>
                      </a>
                    </div>
                    <div className="social-media">
                      <a
                        href="https://instagram.com/cartclo_?igshid=OGQ5ZDc2ODk2ZA=="
                        target="_blank"
                        rel="noopener noreferrer"
                        className="social-size"
                      >
                        <FontAwesomeIcon icon={faInstagram} size="2x" />
                        <span className="social-text">
                          {" "}
                          Follow us on <span className="bold"> Instagram</span>
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
              )
            );

          case 5:
            return (
              isSubscribed && (
                // <APIProvider apiKey={APIKey}>
                //   <div
                //     className="hero-content"
                //     onClick={handleMarathanMapClick}
                //   >
                //     {currentPosition ? (
                //       <Map zoom={12} center={currentPosition} mapId={MapId}>
                //         <AdvancedMarker
                //           position={currentPosition}
                //           onClick={() => setOpen(true)}
                //         >
                //           <Pin
                //             background={"grey"}
                //             borderColor={"green"}
                //             glyphColor={"purple"}
                //           />
                //         </AdvancedMarker>
                //       </Map>
                //     ) : (
                //       <p>Loading map...</p>
                //     )}
                //   </div>
                // </APIProvider>
                <MarketMap />
                // <MarathonMap />
                // <GoogleMapComponent />
              )
            );

          default:
            return null;
        }
      })()}
    </Herostyled>
  );
};

export default Hero;
function setStep() {
  throw new Error("Function not implemented.");
}
