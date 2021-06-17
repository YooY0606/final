import React, { Component, Fragment } from "react";
import Header from "./components/Header";
import Home from "./components/Home";

class Final extends Component {
  render() {
    return (
      <Fragment>
        <Header />
        <img  alt=" " src='./assets/5.png' />
        <div align-items= "center">
          <Home />
        </div>
      </Fragment>
    );
  }
}

export default Final;