import React from "react";
import PropTypes from "prop-types";
import DayNav from "./DayNav";
import TemperatureAndDay from "./TemperatureAndDay";
import UvLevel from "./UvLevel";
import SunWheel from "./SunWheel";
import { DAYS, WEATHER_COND } from "./constants";

const WeatherPane = (props) =>  (
  <div className={ props.className }>
    <section style={{ margin: "2em 0" }}>
      <DayNav weatherCondition={ WEATHER_COND.SUNNY } dayOfWeek={ DAYS.SAT }/>
    </section>

    <section style={{ margin: "2em 0" }}>
      <TemperatureAndDay dayOfWeek={ props.dayOfWeek } temperature={ props.conditions.temperature } />
    </section>

    <section style={{ margin: "2em 0" }}>
      <UvLevel uvIndex={ props.conditions.uvIndex } />
    </section>

    <section style={{ marginTop: "1em" }}>
      <SunWheel/>
    </section>
  </div>
);
WeatherPane.propTypes = {
  className: PropTypes.string,
  dayOfWeek: PropTypes.string.isRequired,
  conditions: PropTypes.object.isRequired
};

export default WeatherPane;
