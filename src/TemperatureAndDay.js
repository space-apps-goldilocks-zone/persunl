import React from "react";
import PropTypes from "prop-types";
import { DAYS } from "./constants";

const DAY_LABELS = {
  [DAYS.MON]: "Monday",
  [DAYS.TUE]: "Tuesday",
  [DAYS.WED]: "Wednesday",
  [DAYS.THU]: "Thursday",
  [DAYS.FRI]: "Friday",
  [DAYS.SAT]: "Saturday",
  [DAYS.SUN]: "Sunday"
};

const TemperatureAndDay = (props) => (
  <div>
    <div style={{ fontSize: "4em" }}>{ props.temperature } ℃</div>
    <div style={{ fontSize: "2em" }}>{ DAY_LABELS[props.dayOfWeek] }</div>
  </div>
);
TemperatureAndDay.propTypes = {
  dayOfWeek: PropTypes.string.isRequired,
  temperature: PropTypes.number.isRequired
};

export default TemperatureAndDay