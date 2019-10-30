import React from "react";

export const CardContainer = props => (
  <div className="flex flex-column justify-between items-center min-vh-100">
    {props.children}
  </div>
);

export const Card = props => (
  <div
    className={`flex flex-column items-center w-90 w-two-thirds-l bg-black light-silver mv4 br3 shadow-3`}
  >
    {props.children}
  </div>
);

export const CardHeader = props => <h1 className="">{props.children}</h1>;

export const CardBody = props => (
  <div className="flex flex-column flex-row-ns items-center h-100 justify-around w-80 mb2">
    {props.children}
  </div>
);

export const CardBodyExplaination = props => (
  <div className={`ma3 ${props.extraClasses}`}>{props.children}</div>
);
