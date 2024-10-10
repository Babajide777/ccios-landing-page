"use client";

//jkj
// Feature.js
import React from "react";
import { Featurestyled } from "../Styles/Components/Feature.styled";

type FeatureProps = {
  Icon: React.ComponentType;
  title: string;
  description: string;
  iconColor?: string;
  onClick: () => void;
};

const Feature: React.FC<FeatureProps> = ({
  Icon,
  title,
  description,
  iconColor,
  onClick,
}) => {
  return (
    <Featurestyled onClick={onClick}>
      <div style={{ color: iconColor || "#bb9457", fontSize: "3rem" }}>
        <Icon />
      </div>{" "}
      <h2>{title}</h2>
      <p>{description}</p>
    </Featurestyled>
  );
};

export default Feature;
