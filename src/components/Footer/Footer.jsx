import React from "react";
import { FooterGroup, FooterElement } from "../Shared/Footer";
import { AccentedIcon } from "../Shared/All";

const Footer = () => {
  return (
    <FooterGroup>
      <AccentedIcon
        href="mailto:Brian.Lynn.balynn077@gmail.com"
        brand="fas"
        logo="envelope"
        size="3"
      />
      <AccentedIcon
        href="https://github.com/Balynn077"
        brand="fab"
        logo="github"
        size="3"
      />
      
      <FooterElement extraClasses="accent">
        <a
          target="blank"
          href="https://codesandbox.io/u/Balynn077"
          className="accent no-underline"
        >
          CodeSandbox
        </a>
      </FooterElement>
    </FooterGroup>
  );
};

export default Footer;
