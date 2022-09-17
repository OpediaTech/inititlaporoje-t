import React from "react";

import dot from "../assets/Point.png";
import globe from "../assets/Icon-5.png";

// Rectangle 2.png
import img5 from "../assets/Group.png";

import teacher1 from "../assets/pc-1207886_1920 1.png";
import teacher2 from "../assets/pc-1207886_1920 5.png";

function Aim() {
  return (
    <div className="container_custome">
      <div className="text-center">
        <header>
          <div className="img">
            <img src={dot} alt="" />
          </div>
          <p>Our Teaching Process</p>
        </header>

        <section>
          <div className="row globe_main">
            <div className="col-md-12 globe">
              <h4>Our Aim is to Deliver The Best Method</h4>
            </div>
          </div>
        </section>

        <div className="row">
          <div className="col-md-3">
            <div className="single_item">
              <div className="img_col">
                <img src={img5} alt="" />
              </div>
              <h5>Identify</h5>
              <p className="single_pera">
                Our teachers will identify student needs including gaps in
                understanding, skills and thinking in their subject area
              </p>
            </div>
          </div>
          <div className="col-md-3">
            <div className="single_item">
              <div className="img_col">
                <img src={img5} alt="" />
              </div>
              <h5>Identify</h5>
              <p className="single_pera">
                Our teachers will identify student needs including gaps in
                understanding, skills and thinking in their subject area
              </p>
            </div>
          </div>
          <div className="col-md-3">
            <div className="single_item">
              <div className="img_col">
                <img src={img5} alt="" />
              </div>
              <h5>Identify</h5>
              <p className="single_pera">
                Our teachers will identify student needs including gaps in
                understanding, skills and thinking in their subject area
              </p>
            </div>
          </div>
          <div className="col-md-3">
            <div className="single_item">
              <div className="img_col">
                <img src={img5} alt="" />
              </div>
              <h5>Identify</h5>
              <p className="single_pera">
                Our teachers will identify student needs including gaps in
                understanding, skills and thinking in their subject area
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Aim;
