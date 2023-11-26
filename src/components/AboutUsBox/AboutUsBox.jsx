import React from "react";
import "./AboutUsBox.css";

function AboutUsBox(props) {
  return (
    <div className="col-md-6 col-lg-4">
      <div className="box-about-us">
        <div className="icon-box-about-us">{props.icon}</div>
        <div className="title-box-about-us">
          <h4>{props.title}</h4>
        </div>
        <div className="body-box-about-us">
          <p>{props.text1}</p>
          <p>{props.text2}</p>
          <p>{props.text3}</p>
          <p>{props.text4}</p>
        </div>
      </div>
    </div>
  );
}

export default AboutUsBox;
