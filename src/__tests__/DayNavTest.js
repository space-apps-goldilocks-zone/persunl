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
        <div style={{
               display: "inline-block",
               position: "relative",
               top: "13px"
             }}>
          <CurrentDayBullet weatherCondition={ WEATHER_COND.SUNNY }/>
        </div>
        <DayBullet day={ DAYS.WED }/>
        <DayBullet day={ DAYS.THU }/>
        <DayBullet day={ DAYS.FRI }/>
      </div>
    );
  });
});
