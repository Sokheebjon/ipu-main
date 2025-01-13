import React from "react";
import Header from "../../components/Header";
import FooterTwo from "../../components/Footer/FooterTwo";
import Breadcrumb from "../../components/Breadcrumb";
import ScrollToTop from "../../components/ScrollTop";
import FinalExamMain from "./FinalExamMain";

import Logo from "../../assets/images/logos/new-logo1.png";
import { useIntl } from "react-intl";

const FinalExamLive = () => {
  const intl = useIntl();

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
          <Breadcrumb pageTitle={intl.formatMessage({ id: "COMMON.FINAL_EXAM_LIVE" })} />

          <FinalExamMain />

          {/* scrolltop-start */}
          <ScrollToTop />
          {/* scrolltop-end */}
        </div>
      </div>

      <FooterTwo />
    </>
  );
};

export default FinalExamLive;
