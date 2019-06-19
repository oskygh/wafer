import React from "react";
import bannerImage from "./images/bannerImage.png";

export default () => (
  <section className="row  justify-content-around align-items-center p-3">
    <div className="col-3">
      <h4>Pay over time for all you want from your favourite stores</h4>
      <button className="btn btn-primary">
          Here's how it works
          </button>
    </div>
    <div className="col-8">
      <img src={bannerImage} alt="" />
    </div>
  </section>
);
