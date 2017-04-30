import React from "react";
import PropTypes from "prop-types";
import { DAYS } from "./constants";
import DayBullet from "./DayBullet";
import CurrentDayBullet from "./CurrentDayBullet"

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

  return {
    'prefix': result.slice(4),
    'suffix': result.slice(1, 4)
  };
};

const DayNav = (props) => {
  const suroundingDays = daysSurrounding(props.dayOfWeek);

  return (
    <div>
      { suroundingDays.prefix }
      <div style={{
             display: "inline-block",
             position: "relative",
             top: "13px"
           }}>
        <CurrentDayBullet weatherCondition={props.weatherCondition} />
      </div>
      { suroundingDays.suffix }
    </div>
  );
};

DayNav.propTypes = {
  dayOfWeek: PropTypes.number.isRequired
};

export default DayNav