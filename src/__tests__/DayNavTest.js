import React from "react";
import { shallow } from "enzyme";
import DayNav from "../DayNav";
import DayBullet from "../DayBullet";
import CurrentDayBullet from "../CurrentDayBullet";
import { DAYS, WEATHER_COND } from "../constants"

describe("DayNav:", () => {
  it("render", () => {
    const component = shallow(<DayNav dayOfWeek={ DAYS.TUE } weatherCondition={ WEATHER_COND.SUNNY } />);

    expect(component).toContainReact(
      <div>
        <DayBullet day={ DAYS.SAT }/>
        <DayBullet day={ DAYS.SUN }/>
        <DayBullet day={ DAYS.MON }/>
        <CurrentDayBullet weatherCondition={ WEATHER_COND.SUNNY }/>
        <DayBullet day={ DAYS.WED }/>
        <DayBullet day={ DAYS.THU }/>
        <DayBullet day={ DAYS.FRI }/>
      </div>
    );
  });
});
