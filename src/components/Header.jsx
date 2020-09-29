import React from "react";
import styled from "styled-components";

function Header() {
  return (
    <nav
      style={{ backgroundColor: "white" }}
      className="navbar navbar-expand-lg navbar-light"
    >
      <a href="#" className="navbar-brand">
        Where in the World?
      </a>
      <ul className="navbar-nav ml-auto">
        <li className="nav-item pt-1">
          <svg
            width="1em"
            height="1em"
            viewBox="0 0 16 16"
            class="bi bi-moon"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M14.53 10.53a7 7 0 0 1-9.058-9.058A7.003 7.003 0 0 0 8 15a7.002 7.002 0 0 0 6.53-4.47z"
            />
          </svg>
        </li>
        <li className="nav-item">
          <a href="#" className="nav-link">
            Dark Mode
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Header;
