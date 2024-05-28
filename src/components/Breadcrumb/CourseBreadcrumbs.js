import React from "react";

const Breadcrumb = (props) => {
  const { courseTitle } = props;

  return (
    <div className="react-breadcrumbs single-page-breadcrumbs">
      <div className="breadcrumbs-wrap">
        <img
          className="desktop w-100"
          style={{ maxHeight: 500, objectFit: "cover" }}
          src={require(`../../assets/images/course/7.jpg`)}
          alt={courseTitle}
        />
        <img
          className="mobile"
          src={require(`../../assets/images/course/7.jpg`)}
          alt={courseTitle}
        />
        <div className="breadcrumbs-inner">
          <div className="container">
            <div className="breadcrumbs-text">
              <h1 className="breadcrumbs-title mb-0">{courseTitle}</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Breadcrumb;
