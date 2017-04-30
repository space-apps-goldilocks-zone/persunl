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
  <div style={{
         display: "inline-block ",
         margin: "0px 10px"
       }}>
    <div>{ DAY_LABELS[props.day] }</div>
    <div style={{
      fontSize: "2.5em",
      position: "relative",
      top: "-15px"
    }}>•</div>
  </div>
);
DayBullet.propTypes = {
  day: PropTypes.number.isRequired
};

export default DayBullet