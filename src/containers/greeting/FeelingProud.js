import React from "react";
// import myImage from "../../assets/images/newmayimage3.png";
// import darkTest from "../../assets/images/olePenting4.png"
import circleMyimage from "../../assets/images/CircleIMyImage70.png"
import "./FeelingProud.css";

function FeelingProud(props) {
  // const theme = props.theme;
  return <img src={
    props.theme.name === 'light' ? circleMyimage :
    circleMyimage
  } alt="portfolio-profile" />;
}

export default FeelingProud;
