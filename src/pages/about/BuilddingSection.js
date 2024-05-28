import React from "react";
import { Link } from "react-router-dom";

import image1 from "../../assets/images/buildings/1.jpg";
import image2 from "../../assets/images/buildings/2.jpg";
import image3 from "../../assets/images/buildings/3.jpg";
// import image4 from "../../assets/images/buildings/4.png";
import image5 from "../../assets/images/buildings/5.jpg";
import image6 from "../../assets/images/buildings/6.jpg";
import image7 from "../../assets/images/buildings/7.jpg";
import image8 from "../../assets/images/buildings/8.jpg";
import image9 from "../../assets/images/buildings/9.jpg";
import image10 from "../../assets/images/buildings/10.png";
import image11 from "../../assets/images/buildings/11.jpg";
import image12 from "../../assets/images/buildings/12.jpg";
import image13 from "../../assets/images/buildings/13.jpg";
import image14 from "../../assets/images/buildings/14.jpg";
import image15 from "../../assets/images/buildings/15.jpg";
import { useIntl } from "react-intl";

const BuilddingSection = () => {
  const intl = useIntl();
  return (
    <div className="about__area about__area_one p-relative pt---100 pb---120">
      <div className="container">
        <div className="col-md-12 text-center">
          <h2
            className="about__title wow animate__fadeInUp"
            data-wow-duration="0.3s"
          >
            {intl.formatMessage({ id: "COMMON.NEW_BUILDING" })}
          </h2>
        </div>

        <div className="about__grid">
          <div
            className="about__image wow animate__fadeInUp"
            data-wow-duration="0.3s"
          >
            <img src={image1} alt="About" />
          </div>
          <div
            className="about__image wow animate__fadeInUp"
            data-wow-duration="0.3s"
          >
            <img src={image2} alt="About" />
          </div>
          <div
            className="about__image wow animate__fadeInUp"
            data-wow-duration="0.3s"
          >
            <img src={image3} alt="About" />
          </div>
          <div
            className="about__image wow animate__fadeInUp"
            data-wow-duration="0.3s"
          >
            <img src={image5} alt="About" />
          </div>
          <div
            className="about__image wow animate__fadeInUp"
            data-wow-duration="0.3s"
          >
            <img src={image6} alt="About" />
          </div>
          <div
            className="about__image wow animate__fadeInUp"
            data-wow-duration="0.3s"
          >
            <img src={image7} alt="About" />
          </div>
          <div
            className="about__image wow animate__fadeInUp"
            data-wow-duration="0.3s"
          >
            <img src={image8} alt="About" />
          </div>
          <div
            className="about__image wow animate__fadeInUp"
            data-wow-duration="0.3s"
          >
            <img src={image9} alt="About" />
          </div>
          <div
            className="about__image wow animate__fadeInUp"
            data-wow-duration="0.3s"
          >
            <img src={image10} alt="About" />
          </div>
          <div
            className="about__image wow animate__fadeInUp"
            data-wow-duration="0.3s"
          >
            <img src={image11} alt="About" />
          </div>
          <div
            className="about__image wow animate__fadeInUp"
            data-wow-duration="0.3s"
          >
            <img src={image12} alt="About" />
          </div>
          <div
            className="about__image wow animate__fadeInUp"
            data-wow-duration="0.3s"
          >
            <img src={image14} alt="About" />
          </div>

          {/* <div className="col-lg-6">
            <div className="about__content">
              <h2
                className="about__title wow animate__fadeInUp"
                data-wow-duration="0.3s"
              >
                O'quv binosi
              </h2>
              <p
                className="about__paragraph wow animate__fadeInUp"
                data-wow-duration="0.5s"
              >
                Education is both the act of teaching knowledge to others and
                <br /> the act of receiving knowledge from someone else.
              </p>

              <p className="wow animate__fadeInUp" data-wow-duration="0.9s">
                Education also refers to the knowledge received through
                schooling instruction <br />
                and to the institution of teaching as a whole. The main purpose
                of education <br />
                is the integral development of a person.
              </p>
              <ul>
                <li>
                  <Link
                    to="/about"
                    className="more-about wow animate__fadeInUp"
                    data-wow-duration="1.2s"
                  >
                    {" "}
                    Read More{" "}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      className="feather feather-arrow-right"
                    >
                      <line x1="5" y1="12" x2="19" y2="12"></line>
                      <polyline points="12 5 19 12 12 19"></polyline>
                    </svg>
                  </Link>
                </li>
              </ul>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default BuilddingSection;
