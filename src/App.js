import React, { Component } from "react";
import ReactSwipe from 'react-swipe';

import AppBar from "./AppBar";
import WeatherPane from "./WeatherPane";
import { DAYS, WEATHER_COND, TIPS } from "./constants";
import backgroundCloudy from "./images/background-cloudy.png";
import backgroundPartlyCloudy from "./images/background-partly-cloudy.png";
import backgroundSunny from "./images/background-sunny.png";

const backgroundByWeatherCondition = {
  [WEATHER_COND.CLOUDY]: backgroundCloudy,
  [WEATHER_COND.PARTLY_CLOUDY]: backgroundPartlyCloudy,
  [WEATHER_COND.SUNNY]: backgroundSunny
};

const store = {
  currentDay: DAYS.THU,

  data: [{
    dayOfWeek: DAYS.MON,
    temperature: 21,
    tip: TIPS.SUNSCREEN,
    uvStrength: 3,
    weatherCondition: WEATHER_COND.SUNNY
  }, {
    dayOfWeek: DAYS.TUE,
    temperature: 21,
    tip: TIPS.COVER_UP,
    uvStrength: 3,
    weatherCondition: WEATHER_COND.SUNNY
  }, {
    dayOfWeek: DAYS.WED,
    temperature: 20,
    tip: TIPS.VITAMIN_D,
    uvStrength: 2,
    weatherCondition: WEATHER_COND.CLOUDY
  }, {
    dayOfWeek: DAYS.THU,
    temperature: 19,
    tip: TIPS.VITAMIN_D,
    uvStrength: 2,
    weatherCondition: WEATHER_COND.PARTLY_CLOUDY
  }, {
    dayOfWeek: DAYS.FRI,
    temperature: 17,
    tip: TIPS.VITAMIN_D,
    uvStrength: 1,
    weatherCondition: WEATHER_COND.CLOUDY
  }, {
    dayOfWeek: DAYS.SAT,
    temperature: 28,
    tip: TIPS.WARNING,
    uvStrength: 4,
    weatherCondition: WEATHER_COND.SUNNY
  }, {
    dayOfWeek: DAYS.SUN,
    temperature: 32,
    tip: TIPS.WARNING,
    uvStrength: 4,
    weatherCondition: WEATHER_COND.SUNNY
  }]
};

class App extends Component {
  render() {
    const currentDayWeather = store.data.find(data => data.dayOfWeek === store.currentDay);
    return (
      <div style={{ textAlign: "center" }}>
        <div style={{
               position: "absolute" ,
               width: "100%",
               zIndex: 100
             }} >
          <AppBar />
        </div>

        <ReactSwipe swipeOptions={{
                      continuous: false,
                      disableScroll: true
                    }}>
          {
            store.data.map((data, idx) => {
              const i = 1;
              return (
              <div key={idx}
                     style={{
                       backgroundImage: `url(${backgroundByWeatherCondition[data.weatherCondition]})`,
                     }}>
                <WeatherPane key={idx} dayOfWeek={ data.dayOfWeek } conditions={ data } />
              </div>
            )}
              )
          }
        </ReactSwipe>

      </div>
    );
  }
}

export default App;
