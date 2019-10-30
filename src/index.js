import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Brand from "./components/Brand/Brand";
import Experience from "./components/Experience/Experience";
import Projects from "./components/Projects/Projects";

import "./styles.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

const App = props => {
  return (
    <Router>
      <div className="App">
        <Header />
        <Route path="/" exact component={() => <Brand />} />
        <Route path="/projects/" component={() => <Projects />} />
        <Route path="/Experience/" component={() => <Experience />} />
        <Footer />
      </div>
    </Router>
  );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);

// fix my projects
// get a list of all of my potential projects I want on my portfolio
// pick the best three
// get those as complex as possible
// apply for 5 positions tonight
// see if there are any additions I want to make to my resume
//
