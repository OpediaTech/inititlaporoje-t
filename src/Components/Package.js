import React from "react";

import dot from "../assets/Point.png";

// Rectangle 2.png
import img5 from "../assets/aim.png";

function Package() {
  return (
    <div className="container_custome">
      <div className="text-center">
        <header>
          <div className="img">
            <img src={dot} alt="" />
          </div>
          <p>Our Packages</p>
        </header>

        <section>
          <div className="row globe_main">
            <div className="col-md-12 globe">
              <h4>Choose The Best Packages</h4>
            </div>
          </div>
        </section>

        <div className="row">
          <div className="col-md-4">
            <div className="single_item_aim">
              <div className="img_col">
                <img src={img5} alt="" />
              </div>
              <h5>Identify</h5>
            </div>
          </div>

          <div className="col-md-4">
            <div className="single_item_aim">
              <div className="img_col">
                <img src={img5} alt="" />
              </div>
              <h5>Identify</h5>
            </div>
          </div>

          <div className="col-md-4">
            <div className="single_item_aim">
              <div className="img_col">
                <img src={img5} alt="" />
              </div>
              <h5>Identify</h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Package;
