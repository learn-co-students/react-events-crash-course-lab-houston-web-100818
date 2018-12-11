import React, { Component } from "react";
import {
  drawChromeBoiAtCoords,
  toggleCycling,
  resize
} from "./canvasHelpers.js";

export default class ChromeBoisDomain extends Component {
  handleMouseMove = event => {
    let x = event.clientX;
    let y = event.clientY;
    drawChromeBoiAtCoords(x, y);
  };

  toggle = () => {
    toggleCycling();
  };

  keyHandler = event => {
    if (event.key === "a") {
      resize("+");
    } else if (event.key === "s") {
      resize("-");
    }
  };

  render() {
    return (
      <canvas
        onKeyDown={this.keyHandler}
        onClick={this.toggle}
        onMouseMove={this.handleMouseMove}
        width="900"
        height="600"
        tabIndex="0"
      />
    );
  }
}
