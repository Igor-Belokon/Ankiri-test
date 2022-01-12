import React from "react";

import "./carusel.css";

import Carusel from "./carusel";

class Main extends React.Component {
  render() {
    return (
      <div className="main-page">
        <h1>Main</h1>
        <div className="carusel-control">
          {" "}
          <Carusel></Carusel>
        </div>
        <div>
          <div>1</div>
          <div>2</div>
        </div>
        <div>
          <div>3</div>
          <div>4</div>
        </div>
      </div>
    );
  }
}
export default Main;
