import React from "react";
import { shallow } from "enzyme";
import DayNav from "../DayNav";
import DayBullet from "../DayBullet";
import { DAYS } from "../constants"

describe("DayNav:", () => {
  it("render", () => {
    const component = shallow(<DayNav dayOfWeek={ DAYS.TUE } />);

    expect(component).toContainReact(
      <div>
        <DayBullet day={ DAYS.SAT }/>
        <DayBullet day={ DAYS.SUN }/>
        <DayBullet day={ DAYS.MON }/>
        <DayBullet day={ DAYS.WED }/>
        <DayBullet day={ DAYS.THU }/>
        <DayBullet day={ DAYS.FRI }/>
      </div>
    );
  });
});
