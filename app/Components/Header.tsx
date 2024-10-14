"use client";

import React from "react";
import { Headerstyled } from "../Styles/Components/Header.styled";

const Header: React.FC = () => {
  return (
    <Headerstyled>
      <div className="header-content">
        <img
          src="/assets/Cartclo-logo.jpg"
          alt="Cartclo Logo"
          className="logo"
        />
        <p>Cartclo</p>
      </div>
    </Headerstyled>
  );
};

export default Header;
