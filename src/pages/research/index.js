import React from "react";
import Header from "../../components/Header";
import FooterTwo from "../../components/Footer/FooterTwo";
import Breadcrumb from "../../components/Breadcrumb";
import InstructorMain from "./InstructorMain";
import ScrollToTop from "../../components/ScrollTop";

import Logo from "../../assets/images/logos/new-logo1.png";

const ResearchMain = () => {
  return (
    <>
      <Header
        parentMenu="page"
        menuCategoryEnable="enable"
        headerNormalLogo={Logo}
        headerStickyLogo={Logo}
      />

      <div class="react-wrapper">
        <div class="react-wrapper-inner">
          {/* <Breadcrumb
                        pageTitle="Tuzilma"
                    /> */}

          <InstructorMain />

          {/* scrolltop-start */}
          <ScrollToTop />
          {/* scrolltop-end */}
        </div>
      </div>

      <FooterTwo />
    </>
  );
};

export default ResearchMain;
