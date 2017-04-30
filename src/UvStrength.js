import React from "react";
import PropTypes from "prop-types";

const uvStrengths = [
  "#fff200",
  "#f7941d",
  "#f26522",
  "#ed1c24"
];

const UvStrength = (props) => (
  <div style={{ fontSize: "3em" }}>
    <span style={{
            fontSize: "0.5em",
            verticalAlign: "middle"
          }}
    >UV Strength:</span>

    {
      Array.apply(null, Array(props.value)).map((_, i) =>
        <span style={{
                color: uvStrengths[props.value - 1],
                verticalAlign: "middle"
              }}
              key={i}
        >•</span>

      )
    }
  </div>
);
UvStrength.propTypes = {
  value: PropTypes.oneOf([1, 2, 3, 4])
};

export default UvStrength