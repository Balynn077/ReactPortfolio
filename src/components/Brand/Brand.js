import React from "react";
import ReactDOM from "react-dom";
import {
  Card,
  CardContainer,
  CardHeader,
  CardBody,
  CardBodyExplaination
} from "../Shared/Card";

import { IconBox, AccentedIcon } from "../Shared/All";

const Brand = () => {
  return (
    <CardContainer>
      <Card>
        <CardHeader>Summary</CardHeader>
        <CardBody>
          <CardBodyExplaination>
            
            <p>
            Full Stack Web Developer with experience as a personal care assistant. Effective at combining creativity and problem solving to develop user-friendly applications. Team leader with integrity, determination and attention to detail in order to achieve goals. Motivated to learn, grow and develop new skills with the ability to work alongside others as well as independently.
            </p>
            
          </CardBodyExplaination>
         
        </CardBody>
      </Card>
      <Card>
        <CardHeader>Technical Skills</CardHeader>
        <CardBodyExplaination>
          
          <p>
          Javascript | Node.js | React.js | JQuery | Handlebars.js | Bootstrap | Firebase | MySQL, MongoDB | Express | HTML5 | CSS3.
          </p>
       
        </CardBodyExplaination>
      </Card>
      
    </CardContainer>
  );
};

export default Brand;
