import React, { Component } from "react";
import ReactSwipe from 'react-swipe';

import "./App.css";
import AppBar from "./AppBar";
import WeatherPane from "./WeatherPane";
import { DAYS, WEATHER_COND } from "./constants";

const store = {
  currentDay: DAYS.THU,

  data: [{
    dayOfWeek: DAYS.MON,
    temperature: 21,
    uvIndex: 3,
    weatherCondition: WEATHER_COND.SUNNY
  }, {
    dayOfWeek: DAYS.TUE,
    temperature: 21,
    uvIndex: 3,
    weatherCondition: WEATHER_COND.SUNNY
  }, {
    dayOfWeek: DAYS.WED,
    temperature: 20,
    uvIndex: 3,
    weatherCondition: WEATHER_COND.CLOUDY
  }, {
    dayOfWeek: DAYS.THU,
    temperature: 19,
    uvIndex: 5,
    weatherCondition: WEATHER_COND.PARTLY_CLOUDY
  }, {
    dayOfWeek: DAYS.FRI,
    temperature: 17,
    uvIndex: 3,
    weatherCondition: WEATHER_COND.CLOUDY
  }, {
    dayOfWeek: DAYS.SAT,
    temperature: 28,
    uvIndex: 10,
    weatherCondition: WEATHER_COND.SUNNY
  }, {
    dayOfWeek: DAYS.SUN,
    temperature: 32,
    uvIndex: 7,
    weatherCondition: WEATHER_COND.SUNNY
  }]
};

class App extends Component {
  render() {
    return (
      <div className="App">
        <AppBar />

        <ReactSwipe>
          {
            store.data.map((data, idx) => (
              <div key={idx} >
                <WeatherPane key={idx} dayOfWeek={ data.dayOfWeek } conditions={ data } />
              </div>
            ))
          }
        </ReactSwipe>

      </div>
    );
  }
}

export default App;
