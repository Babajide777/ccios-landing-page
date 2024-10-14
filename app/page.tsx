"use client";

import React, { useState, useEffect } from "react";
import Hero from "./Components/Hero";
import Feature from "./Components/Feature";
import { toast, ToastContainer } from "react-toastify";
import { Homestyled } from "./Styles/Home.styled";
import { BiSolidShoppingBags } from "react-icons/bi";
import { BiMapAlt } from "react-icons/bi";
import { RootState } from "@/store/store";
import { supabase } from "@/lib/supabase";
import { useDispatch, useSelector } from "react-redux";
import { isValidNigerianPostalCode } from "@/lib/emailValidation";
import { subscribe } from "@/store/subscriptionSlice";

const Home = () => {
  const [step, setStep] = useState<number>(1);
  const [postalCode, setPostalCode] = useState<string>("");
  const [selectedOption, setSelectedOption] = useState<"Yes" | "No" | null>(
    null
  );
  const [optionSelect, setOptionSelect] = useState<string>("");
  const dispatch = useDispatch();
  const isSubscribed = useSelector(
    (state: RootState) => state.subscription.subscribed
  );
  const email = useSelector((state: RootState) => state.subscription.email);

  type CombinedEvent =
    | React.MouseEvent<HTMLButtonElement>
    | React.FormEvent<HTMLFormElement>;

  const handlePostalCodeChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setPostalCode(event.target.value);
  };

  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    const newSelection = value as "Yes" | "No";
    setSelectedOption(newSelection);
  };

  const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setOptionSelect(event.target.value);
  };

  const handleMarathanMapClick = (event: any) => {
    setStep(5);
  };

  const handleGroceriesPlantClick = (event: any) => {
    setStep(3);
  };

  const handleSpaClick = () => {
    setStep(4);
  };

  return (
    <Homestyled>
      <>
        <Hero
          handleGroceriesPlantClick={handleGroceriesPlantClick}
          handleMarathanMapClick={handleMarathanMapClick}
          step={step}
          setStep={setStep}
          postalCode={postalCode}
          setPostalCode={setPostalCode}
          selectedOption={selectedOption}
          handlePostalCodeChange={handlePostalCodeChange}
          handleCheckboxChange={handleCheckboxChange}
          optionSelect={optionSelect}
          handleSelectChange={handleSelectChange}
        />
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
      </>
    </Homestyled>
  );
};

export default Home;
