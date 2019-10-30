import React from "react";

export const AccentedIcon = props => (
  <a target="blank" href={props.href}>
    <i
      className={`${props.brand} fa-${props.logo} fa-${
        props.size
      }x mv4 grow accent ${props.extraClasses}`}
    />
  </a>
);

export const IconBox = props => (
  <div
    className={`flex flex-row w-100 h-100 flex-column-ns items-center justify-${
      props.justify
    } ${props.extraClasses}`}
  >
    {props.children}
  </div>
);
