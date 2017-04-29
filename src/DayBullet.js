import React from "react";
import PropTypes from "prop-types";
import { DAYS } from "./constants";

const DAY_LABELS = {
  [DAYS.MON]: "M",
  [DAYS.TUE]: "T",
  [DAYS.WED]: "W",
  [DAYS.THU]: "T",
  [DAYS.FRI]: "F",
  [DAYS.SAT]: "S",
  [DAYS.SUN]: "S"
};

const DayBullet = (props) => (
  <div>
    <div>{ DAY_LABELS[props.day] }</div>
    <div>•</div>
  </div>
);
DayBullet.propTypes = {
  day: PropTypes.string
};

export default DayBullet