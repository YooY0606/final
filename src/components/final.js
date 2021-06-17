import React, { Component, Fragment } from "react";
import Header from "./Header";
import Home from "./Home";

class Final extends Component {
  render() {
    return (
      <Fragment>
        <Header />
        <div align-items= "center">
          <Home />
        </div>
      </Fragment>
    );
  }
}

export default Final;