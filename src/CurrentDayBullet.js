import React from "react";
import PropTypes from "prop-types";
import { WEATHER_COND } from "./constants";

const WeatherCondition = {
  [WEATHER_COND.CLOUDY]: "cloudy day",
  [WEATHER_COND.PARTLY_CLOUDY]: "partially sunny",
  [WEATHER_COND.SUNNY]: "sunny"
};

const CurrentDayBullet = (props) => (
  <div>
    {
      WeatherCondition[props.weatherCondition]
    }
  </div>
);
CurrentDayBullet.propTypes = {
  weatherCondition: PropTypes.string
};

export default CurrentDayBullet