import React from "react";
import PropTypes from "prop-types";

const Tip = (props) => (
  <div style={{
         backgroundColor: "white",
         boxShadow: "1px 1px 2px 0px rgba(0,0,0,0.75)",
         color: "#666",
         display: "inline-block",
         padding: "1em",
         textAlign: "left",
         width: "19em"
       }} >
    <img src={ props.icon } alt=""
         style={{
           float: "left",
           paddingRight: "1em",
           width: "40px"
         }}/>
    <strong>{ props.title }</strong> { props.message }
  </div>
);
Tip.propTypes = {
  icon: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired
};

export default Tip