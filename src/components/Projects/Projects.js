import React from "react";
import ReactDOM from "react-dom";
import { AccentedIcon, IconBox } from "../Shared/All";

const Projects = () => {
  return (
    <div className="flex flex-column justify-between items-center min-vh-100">
      <div className="flex flex-column items-center w-90 w-two-thirds-l bg-black light-silver mv4 br3 shadow-3`">
        <h2>jamFinder</h2>
        <div>
          <div>
          Search engine for local shows and associated music videos. Integrated the embedded YouTube video player/API. Technologies used: HTML5, CSS3, Javascript, JQuery, Bootstrap, Node Js, MySQ
          </div>
          <div>
          <AccentedIcon
        href="https://balynn077.github.io/jamFinder"
        brand="fab"
        logo="github"
        size="3"
      />
          </div>
         
        </div>
      </div>
      <div className="flex flex-column items-center w-90 w-two-thirds-l bg-black light-silver mv4 br3 shadow-3`">
        <h2>Enscribe</h2>
        <div>
          <div>
          Teaching app which organizes students and lesson notes. Front end and middleware/Javascript/Node Js, and debugging backend. Technologies used: HTML5, CSS3, Javascript, JQuery, Bootstrap, Node Js, MySQL
          </div>
          <div>
          <AccentedIcon
        href="http://escribe-app.herokuapp.com/whodis"
        brand="fab"
        logo="github"
        size="3"
      />
          </div>
          <div justify="center">
            <div brand="fab" logo="elementor" size="10" />
          </div>
        </div>
      </div>
      <div className="flex flex-column items-center w-90 w-two-thirds-l bg-black light-silver mv4 br3 shadow-3`">
        <h2>AnimalTracks</h2>
        <div>
          <div>
          Search engine and database for animal sightings. Integrated the embedded React Google Maps API. Technologies used: HTML5, CSS3, Javascript, ReactJS, JQuery, Bootstrap, Node Js, MongoDB
          </div>
          <div>
          <AccentedIcon
        href="https://project3animaltracks.herokuapp.com"
        brand="fab"
        logo="github"
        size="3"
      />
          </div>
          <div justify="center">
            <div brand="fab" logo="blogger-b" size="10" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
