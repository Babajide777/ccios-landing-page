"use client";

import React from "react";
import { Headerstyled } from "../Styles/Components/Header.styled";

const Header: React.FC = () => {
  return (
    <Headerstyled>
      <div className="header-content">
        <img
          src="/a/daefda9d-1920-487b-9997-68eef86b8c6a"
          alt="Crust & Crumb Logo"
          className="logo"
        />
        {/* <nav>
          <ul>
            <li>
              <a href="#" id="home-link">
                Home
              </a>
            </li>
            <li>
              <a href="#" id="calculator-link">
                Calculator
              </a>
            </li>
            <li>
              <a href="#" id="recipes-link">
                Recipes
              </a>
            </li>
          </ul>
        </nav> */}
      </div>
    </Headerstyled>
  );
};

export default Header;
