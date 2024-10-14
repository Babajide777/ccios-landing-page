"use client";

import React from "react";
import { Footerstyled } from "../Styles/Components/Footer.styled";

const Footer: React.FC = () => {
  return (
    <Footerstyled>
      <p>
        &copy; Copyright {new Date().getFullYear()}. All Rights Reserved.
        Cartclo
      </p>
    </Footerstyled>
  );
};

export default Footer;
