import React, { Component } from "react";
import "./App.css";
import AppBar from "./AppBar";
import DayNav from "./DayNav";

class App extends Component {
  render() {
    return (
      <div className="App">
        <AppBar />
        <DayNav />
      </div>
    );
  }
}

export default App;
