import React from "react";
import { Link } from "react-router-dom";

import breadcrumbsImg from "../../assets/images/breadcrumbs/1.jpg";
import { useIntl } from "react-intl";

const Breadcrumb = (props) => {
  const intl = useIntl();
  const { pageTitle } = props;

  return (
    <div className="react-breadcrumbs">
      <div className="breadcrumbs-wrap">
        <img
          className="desktop w-100"
          style={{ maxHeight: 500, objectFit: "cover" }}
          src={breadcrumbsImg}
          alt="Breadcrumbs"
        />
        <img className="mobile" src={breadcrumbsImg} alt="Breadcrumbs" />
        <div className="breadcrumbs-inner">
          <div className="container">
            <div className="breadcrumbs-text">
              <h1 className="breadcrumbs-title">
                {pageTitle ? pageTitle : "BreadCrumbs"}
              </h1>
              <div className="back-nav">
                <ul>
                  <li>
                    <Link to="/">
                      {intl.formatMessage({ id: "COMMON.HOME" })}
                    </Link>
                  </li>
                  <li>{pageTitle ? pageTitle : "BreadCrumbs"}</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Breadcrumb;
