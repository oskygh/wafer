import React from "react";
import bannerImage from "./images/bannerImage.png";

export default () => (
  <section className="row">
    <div className="col-3">
      <p>Pay over time for all you want from your favourite stores</p>
      <button className="btn btn-primary">Here's how it works</button>
    </div>
    <div className="col">
      <img src={bannerImage} alt="" />
    </div>
  </section>
);
