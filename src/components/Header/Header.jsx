import React from "react";
import ReactDOM from "react-dom";
import { StyledNav } from "../Shared/Header";

export default props => (
  <header className="header bg-black light-grey mt0">
    <div className="flex flex-row mh2 items-center justify-between">
      <div className="flex flex-row flex-grow mh2 items-center justify-between">
        <StyledNav exact to="/" extraClasses="accent">
          <h1 className="mh2">Brian Lynn</h1>
        </StyledNav>
        <StyledNav to="/projects/">
          <h1 className="mh2">Projects</h1>
        </StyledNav>
        <StyledNav to="/Experience/">
          <h1 className="mh2">Experience</h1>
        </StyledNav>
      </div>
    </div>
  </header>
);
