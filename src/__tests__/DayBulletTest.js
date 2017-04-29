import React from "react";
import { shallow } from "enzyme";
import DayBullet from "../DayBullet";
import { DAYS } from "../constants";

describe("DayBullet:", () => {
  it("render", () => {
    const component = shallow(<DayBullet day={ DAYS.TUE }/>);

    expect(component).toContainReact(
      <div>
        <div>T</div>
        <div>•</div>
      </div>
    );
  });
});