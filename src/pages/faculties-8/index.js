import React from "react";
import { Link, useLocation } from "react-router-dom";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Breadcrumb from "../../components/Breadcrumb";
import ScrollToTop from "../../components/ScrollTop";

import Logo from "../../assets/images/logos/new-logo1.png";
import instructors from "../../data/Instructors.json";
import { getProductName } from "../../helpers/general";
import InstructorDetailsMain from "./InstructorMain";

const Faculties8 = () => {
  const location = useLocation();
  const instructor = instructors.find((b) => b.kafedra == "8");
  const lang = (
    JSON.parse(localStorage.getItem("i18nConfig")) || { selectedLang: "uz" }
  )?.selectedLang;

  return (
    <body className="profile-page">
      <Header
        parentMenu="page"
        menuCategoryEnable="enable"
        headerNormalLogo={Logo}
        headerStickyLogo={Logo}
      />

      <div class="react-wrapper">
        <div class="react-wrapper-inner">
          <Breadcrumb pageTitle={getProductName(instructor, "name", lang)} />

          <InstructorDetailsMain />

          {/* scrolltop-start */}
          <ScrollToTop />
          {/* scrolltop-end */}
        </div>
      </div>

      <Footer />
    </body>
  );
};

export default Faculties8;
