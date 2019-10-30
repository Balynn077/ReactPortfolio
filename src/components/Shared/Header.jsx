import React from "react";
import { NavLink } from "react-router-dom";

export const StyledNav = props => (
  <NavLink
    exact={props.exact}
    to={props.to}
    className={`grow no-underline light-silver ${props.extraClasses}`}
    activeStyle={{ textDecoration: "underline" }}
  >
    {props.children}
  </NavLink>
);
