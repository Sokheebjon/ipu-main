import React from "react";
import { Link } from "react-router-dom";

import IMAGE3 from "../../assets/images/about/image3.JPG";
import shapeImg from "../../assets/images/about/badge.png";
import { useIntl } from "react-intl";

const InfoThirdSection = () => {
  const intl = useIntl();
  return (
    <div className="about__area about__area_one p-relative pt---50 pb---60">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="about__content pt-2 d-flex align-items-center h-100">
              <p
                className="about__paragraph wow animate__fadeInUp"
                data-wow-duration="0.5s"
              >
                {intl.formatMessage({ id: "COMMON.ABOUT_DESCR_3" })}
              </p>
              {/* <p
                className="about__paragraph2 wow animate__fadeInUp"
                data-wow-duration="0.7s"
              >
                {" "}
                Have questions? <Link to="#"> Get Free Guide </Link>
              </p> */}
              {/* <p className="wow animate__fadeInUp" data-wow-duration="0.9s"></p> */}
            </div>
          </div>
          <div className="col-lg-6">
            <div
              className="about__image wow animate__fadeInUp"
              data-wow-duration="0.3s"
            >
              <img src={IMAGE3} alt="About" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfoThirdSection;
