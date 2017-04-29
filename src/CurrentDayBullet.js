import React from "react";
import PropTypes from "prop-types";
import cloudyIcon from "./images/cloudy.svg";
import partlyCloudyIcon from "./images/partly-cloudy.svg";
import sunnyIcon from "./images/sunny.svg";
import { WEATHER_COND } from "./constants";

const WeatherCondition = {
  [WEATHER_COND.CLOUDY]: cloudyIcon,
  [WEATHER_COND.PARTLY_CLOUDY]: partlyCloudyIcon,
  [WEATHER_COND.SUNNY]: sunnyIcon
};

const CurrentDayBullet = (props) => (
  <div style={{ display: "inline-block" }}>
    <img src={ WeatherCondition[props.weatherCondition] } width="100" height="100" alt=""/>
  </div>
);
CurrentDayBullet.propTypes = {
  weatherCondition: PropTypes.string
};

export default CurrentDayBullet