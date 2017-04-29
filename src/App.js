import React, { Component } from "react";
import "./App.css";
import AppBar from "./AppBar";
import DayNav from "./DayNav";
import { DAYS, WEATHER_COND } from "./constants";

class App extends Component {
  render() {
    return (
      <div className="App">
        <AppBar />
        <DayNav weatherCondition={ WEATHER_COND.CLOUDY } dayOfWeek={ DAYS.THU }/>
      </div>
    );
  }
}

export default App;
