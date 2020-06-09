import React, { Component } from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import Timer from "./Timer";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="">
        <Timer start={Date.now()} />
      </div>
    );
  }
}

export default App;
