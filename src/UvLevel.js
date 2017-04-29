import React from "react";
import PropTypes from "prop-types";

const UvLevel = (props) => (
  <div style={{
         boxShadow: "1px 1px 5px 0px rgba(0,0,0,0.75)",
         display: "inline-block",
         height: "3.5em",
         width: "16em"
       }} >
    UV Index: { props.uvIndex }
  </div>
);
UvLevel.propTypes = {
  uvIndex: PropTypes.number.isRequired
};

export default UvLevel