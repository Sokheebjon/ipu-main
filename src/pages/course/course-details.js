import React from "react";
import { useParams } from "react-router-dom";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Breadcrumb from "../../components/Breadcrumb/CourseBreadcrumbs";
import CourseDetailsMain from "./CourseDetailsMain";
import ScrollToTop from "../../components/ScrollTop";
import courses from "../../data/Courses.json";

import Logo from "../../assets/images/logos/new-logo1.png";
import { getProductName } from "../../helpers/general";
import { useIntl } from "react-intl";

const CourseDetails = () => {
  let { id } = useParams();
  const course = courses.find((b) => b.id === Number(id));

  const intl = useIntl();
  const lang = (
    JSON.parse(localStorage.getItem("i18nConfig")) || { selectedLang: "uz" }
  )?.selectedLang;

  return (
    <body className="course-single">
      <Header
        parentMenu="course"
        menuCategoryEnable="enable"
        headerNormalLogo={Logo}
        headerStickyLogo={Logo}
      />

      <div class="react-wrapper">
        <div class="react-wrapper-inner">
          <Breadcrumb
            courseBannerImg={`${course.bannerImg}`}
            courseTitle={getProductName(course, "title", lang)}
            courseName={getProductName(course, "name", lang)}
          />

          <CourseDetailsMain
            items={course.items}
            descrption={getProductName(course, "descrption", lang)}
          />

          {/* scrolltop-start */}
          <ScrollToTop />
          {/* scrolltop-end */}
        </div>
      </div>

      <Footer />
    </body>
  );
};

export default CourseDetails;
