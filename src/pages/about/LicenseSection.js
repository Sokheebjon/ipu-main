import React from "react";
import { Link } from "react-router-dom";

import image1 from "../../assets/images/license/image1.jpg";
import image2 from "../../assets/images/license/image2.jpg";
import image3 from "../../assets/images/license/image3.jpg";
import { useIntl } from "react-intl";

const LicenseSection = () => {
  const intl = useIntl();
  return (
    <div className="about__area about__area_one p-relative pt---100 pb---120">
      <div className="container">
        <div className="col-md-12 text-center">
          <h2
            className="about__title wow animate__fadeInUp"
            data-wow-duration="0.3s"
          >
            {intl.formatMessage({ id: "COMMON.LICENSE" })}
          </h2>
        </div>

        <div className="about__grid license__grid">
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
        </div>
      </div>
    </div>
  );
};

export default LicenseSection;
