"use client";

import React, { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { Herostyled } from "../Styles/Components/Hero.styled";
import { supabase } from "@/lib/supabase";
import isValidEmail from "@/lib/emailValidation";
import { RootState } from "@/store/store";
import { subscribe } from "@/store/subscriptionSlice";
import "react-toastify/dist/ReactToastify.css";

const Hero: React.FC = () => {
  const [showEmailInput, setShowEmailInput] = useState(false);
  const [email, setEmail] = useState("");
  const dispatch = useDispatch();
  const isSubscribed = useSelector(
    (state: RootState) => state.subscription.subscribed
  );
  const handleGetStartedClick = () => {
    setShowEmailInput(true);
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
        theme: "light"
      });
      return;
    }

    try {
      const { data, error } = await supabase
        .from("users")
        .insert([{ email: email }])
        .select();

      // setIsSubscribed(true);
      setEmail("");
      if (error) {
        console.error("Error saving email:", error);
        toast.error("An error occurred. Please try again.", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light"
        });
      } else {
        console.log("Email saved successfully:", data);

        dispatch(subscribe());

        toast.success("Thank you for subscribing!", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light"
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
        theme: "light"
      });
    }
  };

  return (
    <Herostyled>
      <ToastContainer />
      {isSubscribed ? (
        <div className="hero-content"></div>
      ) : showEmailInput ? (
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
      ) : (
        <div className="hero-content">
          <h1>Ccios</h1>
          <p>Master the art of artisan bread baking</p>
          <div className="submit-btn">
            <button className="submit" onClick={handleGetStartedClick}>
              Get Started
            </button>
          </div>
        </div>
      )}
    </Herostyled>
  );
};

export default Hero;
