import React from "react";
import PropTypes from "prop-types";
import { DAYS } from "./constants";
import DayBullet from "./DayBullet";

const daysOfTheWeek = [
  DAYS.MON,
  DAYS.TUE,
  DAYS.WED,
  DAYS.THU,
  DAYS.FRI,
  DAYS.SAT,
  DAYS.SUN
];

const daysSurrounding = (day) => {
  const dayIndex = daysOfTheWeek.indexOf(day); // TUE , index =

  const result = [];
  for (let i=0; i < 7 ; i++) {
    result.push(<DayBullet key={i} day={daysOfTheWeek[(dayIndex + i) % 7]} />)
  }

  return [].concat(result.slice(4), result.slice(1, 4));
};

const DayNav = (props) => (
  <div>
    { daysSurrounding(props.dayOfWeek)}
  </div>
);
DayNav.propTypes = {
  dayOfWeek: PropTypes.string
};

export default DayNav