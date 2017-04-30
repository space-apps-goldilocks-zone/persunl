import React from "react";
import PropTypes from "prop-types";
import DayNav from "./DayNav";
import TemperatureAndDay from "./TemperatureAndDay";
import UvStrength from "./UvStrength";
import Tip from "./Tip";
import SunWheel from "./SunWheel";
import { DAYS, WEATHER_COND } from "./constants";

const WeatherPane = (props) =>  (
  <div className={ props.className }>
    <section style={{ margin: "1em 0" }}>
      <DayNav weatherCondition={ WEATHER_COND.SUNNY } dayOfWeek={ DAYS.SAT }/>
    </section>

    <section style={{ marginx: "1em 0" }}>
      <TemperatureAndDay dayOfWeek={ props.dayOfWeek } temperature={ props.conditions.temperature } />
    </section>

    <section style={{ marginx: "1em 0" }}>
      <UvStrength value={ props.conditions.uvStrength } />
    </section>

    <section>
      <Tip icon={ props.conditions.tip.icon }
           message={ props.conditions.tip.message }
           title={ props.conditions.tip.title } />
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
