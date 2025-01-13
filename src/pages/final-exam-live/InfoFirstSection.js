import React from "react";
import { Link } from "react-router-dom";

import IMAGE1 from "../../assets/images/about/image1.JPG";
import shapeImg from "../../assets/images/about/badge.png";
import { useIntl } from "react-intl";
import Iframe from "react-iframe";

const InfoFirstSection = () => {
  const intl = useIntl();
  return (
    <div className="about__area about__area_one p-relative pt---100 pb---60">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <p>IPU 1-101-xona</p>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/5sOar1cEttg?si=CgOH8PR4i0r5eBdz"
                    title="YouTube video player" frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
          </div>
          <div className="col-lg-6">
            <p>IPU 1-306-xona</p>

            <iframe width="560" height="315" src="https://www.youtube.com/embed/hvft2GdDpoQ?si=F63l0eJyRUFhQ3G0"
                    title="YouTube video player" frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>

          </div>
        </div>
      </div>
    </div>
  );
};

export default InfoFirstSection;
