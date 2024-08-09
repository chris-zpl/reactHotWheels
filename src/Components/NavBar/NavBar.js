import React from "react";
import { NavLink } from "react-router-dom";

import "./NavBar.css";

function NavBar(props) {
  return (
    <div className="d-flex justify-content-center">
      <nav role="navigation" aria-label="main navigation">
        <ul className="d-flex flex-row align-items-center">
          {props.topicos.map((content, index) => (
            <li key={index}>
              <NavLink to={content.links}>{content.titulo}</NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}

export default NavBar;
