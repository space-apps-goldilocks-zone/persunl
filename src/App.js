import React, { Component } from "react";
import "./App.css";
import AppBar from "./AppBar";
import DayNav from "./DayNav";
import TemperatureAndDay from "./TemperatureAndDay";
import UvLevel from "./UvLevel";
import { DAYS, WEATHER_COND } from "./constants";

const store = {
  today: DAYS.SAT,
  [DAYS.MON]: {
    temperature: 21,
    uvIndex: 3,
    weatherCondition: WEATHER_COND.SUNNY
  },
  [DAYS.TUE]: {
    temperature: 21,
    uvIndex: 3,
    weatherCondition: WEATHER_COND.SUNNY
  },
  [DAYS.WED]: {
    temperature: 20,
    uvIndex: 3,
    weatherCondition: WEATHER_COND.CLOUDY
  },
  [DAYS.THU]: {
    temperature: 19,
    uvIndex: 5,
    weatherCondition: WEATHER_COND.PARTLY_CLOUDY
  },
  [DAYS.FRI]: {
    temperature: 17,
    uvIndex: 3,
    weatherCondition: WEATHER_COND.CLOUDY
  },
  [DAYS.SAT]: {
    temperature: 28,
    uvIndex: 10,
    weatherCondition: WEATHER_COND.SUNNY
  },
  [DAYS.SUN]: {
    temperature: 32,
    uvIndex: 7,
    weatherCondition: WEATHER_COND.SUNNY
  }
};

class App extends Component {
  render() {
    return (
      <div className="App">
        <AppBar />
        <DayNav weatherCondition={ WEATHER_COND.SUNNY } dayOfWeek={ DAYS.SAT }/>
        <TemperatureAndDay dayOfWeek={ store.today } temperature={ store[store.today].temperature } />
        <UvLevel uvIndex={ store[store.today].uvIndex } />
      </div>
    );
  }
}

export default App;
