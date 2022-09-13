import React from "react";

import dot from "../assets/Point.png";
import globe from "../assets/Icon-5.png";

// Rectangle 2.png
import img1 from "../assets/Rectangle 2.png";
import img2 from "../assets/Rectangle 3.png";
import img3 from "../assets/Rectangle 4.png";
import img4 from "../assets/Rectangle 5.png";
import img5 from "../assets/Rectangle 6.png";

import teacher1 from "../assets/pc-1207886_1920 1.png";
import teacher2 from "../assets/pc-1207886_1920 5.png";

function Focus() {
  return (
    <div className="container_custome">
      <div className="text-center">
        <header>
          <div className="img">
            <img src={dot} alt="" />
          </div>
          <p>Our focus</p>
        </header>

        <section>
          <div className="row globe_main">
            <div className="col-md-10 globe">
              <h4>We provide teaching and thinking services</h4>
            </div>
            <div className="col-md-2">
              <div className="img ">
                <img className="img-fluid globe_main_img" src={globe} alt="" />
              </div>
            </div>
          </div>
        </section>

        <div className="pera">
          <p>
            Our curriculam focuses on problem solving and engineering approaches
            to Mathematics and Science. The goal of these new curricula is not
            to memorize– but to learn, understand, and apply the concepts.
            Students will receive focussed online instruction, to promote
            understanding and higher order thinking skills.
          </p>
        </div>

        <div className="img_section">
          <div className="img_col">
            <img src={img1} alt="" />
          </div>
          <div className="img_col">
            <img src={img2} alt="" />
          </div>
          <div className="img_col">
            <img src={img3} alt="" />
          </div>
          <div className="img_col">
            <img src={img4} alt="" />
          </div>
          <div className="img_col">
            <img src={img5} alt="" />
          </div>
        </div>
      </div>

      <div className="d-none row justify-content-evenly">
        <div className="col-md-6 col-lg-3 col-xl-2">
          <div className="img_col">
            <img src={img5} alt="" />
          </div>
        </div>
        <div className="col-md-6 col-lg-3 col-xl-2">
          <div className="img_col">
            <img src={img5} alt="" />
          </div>
        </div>
        <div className="col-md-6 col-lg-3 col-xl-2">
          <div className="img_col">
            <img src={img5} alt="" />
          </div>
        </div>
        <div className="col-md-6 col-lg-3 col-xl-2">
          <div className="img_col">
            <img src={img5} alt="" />
          </div>
        </div>
        <div className="col-md-6 col-lg-3 col-xl-2">
          <div className="img_col">
            <img src={img5} alt="" />
          </div>
        </div>
      </div>

      {/* Teachers are different */}
      <div className="row teacher_different">
        <div className="col-md-5">
          <div className="img_col">
            <img className="img-fluid" src={teacher1} alt="" />
          </div>
          <div className="img_col img_col1">
            <img src={teacher2} alt="" />
          </div>
        </div>
        <div className="col-md-7">
          <header className="d-flex">
            <div className="img">
              <img src={dot} alt="" />
            </div>
            <p style={{ marginLeft: "14px" }}>We are here to prevent that</p>
          </header>
          <span className="painfull">
            Painfree STEM Teachers
            <br /> are
            <span className="gradient_Text">DIFFERENT</span>
          </span>
          <div className="pera">
            <p>
              Our teachers have decades of experience; they have taught the most
              advanced courses at the secondary level, including AP and IB.
            </p>
          </div>
          <div className="pera">
            <p>
              Our curriculam focuses on problem solving and engineering
              approaches to Mathematics and Science. The goal of these new
              curricula is not to memorize– but to learn, understand, and apply
              the concepts. Students will receive focussed online instruction,
              to promote understanding and higher order thinking skills.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Focus;
