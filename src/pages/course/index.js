import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Breadcrumb from "../../components/Breadcrumb";
import CourseGridMain from "./CourseGridMain";
import ScrollToTop from "../../components/ScrollTop";

import Logo from "../../assets/images/logos/new-logo1.png";
import { useIntl } from "react-intl";

const Course = () => {
  const intl = useIntl();

  return (
    <body class="courses-grid-page">
      <Header
        parentMenu="course"
        menuCategoryEnable="enable"
        headerNormalLogo={Logo}
        headerStickyLogo={Logo}
      />

      <div class="react-wrapper">
        <div class="react-wrapper-inner">
          <Breadcrumb
            pageTitle={intl.formatMessage({ id: "COMMON.BACHELOR" })}
          />

          <CourseGridMain />

          {/* scrolltop-start */}
          <ScrollToTop />
          {/* scrolltop-end */}
        </div>
      </div>

      <Footer />
    </body>
  );
};

export default Course;
