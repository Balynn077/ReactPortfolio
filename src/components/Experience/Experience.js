import React from "react";
import ReactDOM from "react-dom";
import {
  CardHeader,
  CardBody,
  CardBodyExplaination,
  Card,
  CardContainer
} from "../Shared/Card";

import { AccentedIcon, IconBox } from "../Shared/All";

const AboutCardContainer = props => (
  <Card extraClasses="items-center justify-around">{props.children}</Card>
);

const About = () => (
  <CardContainer>
     <AboutCardContainer>
      <CardHeader>Education: University of Minnesota, College of Continuing & Professional Studies Twin Cities, MN

</CardHeader>
      <CardBody>
        <CardBodyExplaination>
          <h2>Full Stack Flex Certificate Program</h2>
          <div>
            <p>A 24-week intensive program focused on gaining technical programming skills in HTML5, CSS3, Javascript, JQuery, Bootstrap, Firebase, Node Js, MySQL, MongoDB, Express, Handelbars.js & ReactJS. </p>
            
          </div>
        </CardBodyExplaination>
      </CardBody>
    </AboutCardContainer>
    <AboutCardContainer>
      
      <CardBody>
        <CardBodyExplaination>
          <h1>University of Minnesota, Twin Cities</h1>
          <p>BS. Sociology Crime, Law and Deviance</p>
        </CardBodyExplaination>
        <AccentedIcon brand="fas" logo="university" size="7" />
      </CardBody>
    </AboutCardContainer>
   
    <AboutCardContainer>
      <CardHeader>Experience: Living Well Disability Services</CardHeader>
      <CardBody>
        <CardBodyExplaination>
          <div>
            <h2>Senior Advocate</h2>
            <p>	<li>Assisted individuals with developmental disabilities through teaching independent living/social skills, health/wellness, and better enjoyment of their everyday lives. </li>
	<li>Ordered, administered, recorded and kept inventory of medications.</li>
<li>Routinely inspected and maintained company owned vehicles.</li>
<li>Scheduled, attended, and documented medical appointments/changes in medication.</li>
<li>Assisted individuals with personalized plans to improve their independent living skills.</li> <li>Documented their goals, progress, and organized their meetings with staff/nurse/job coach/family/guardian.</li><li> Monitored spending of individuals for fraud and exploitation.</li> <li>Delegated responsibilities to daytime staff members, planned recreational activities and vacations.</li>
</p>
           
          </div>
        </CardBodyExplaination>
        
      </CardBody>
    </AboutCardContainer>
  </CardContainer>
);

export default About;
