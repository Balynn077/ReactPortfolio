import React from "react";

export const FooterGroup = props => (
  <div className="w-100 vh-10 bg-black light-silver flex flex-row justify-around items-center">
    {props.children}
  </div>
);

export const FooterElement = props => (
  <div className={`grow ${props.extraClasses}`}>
    <h2>{props.children}</h2>
  </div>
);
