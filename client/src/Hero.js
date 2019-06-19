import React from "react";
import partner1 from "./images/partner1.png"
import partner2 from "./images/partner2.png"
import partner3 from "./images/partner3.png"
import partner4 from "./images/partner4.png"
import partner5 from "./images/partner5.png"
import partner6 from "./images/partner6.png"

export default () => (
  <React.Fragment>
    <p>Trusted Partners &amp; Inverstors</p>
    <div className="row">
        <img src={partner1} alt=""/>
        <img src={partner2} alt=""/>
        <img src={partner3} alt=""/>
        <img src={partner4} alt=""/>
        <img src={partner5} alt=""/>
        <img src={partner6} alt=""/>
    </div>
  </React.Fragment>
);
