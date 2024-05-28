import React from "react";
import Header from "../../components/Header";
import FooterTwo from "../../components/Footer/FooterTwo";
import Breadcrumb from "../../components/Breadcrumb";
import InstructorMain from "./InstructorMain";
import ScrollToTop from "../../components/ScrollTop";

import Logo from "../../assets/images/logos/new-logo1.png";
import { useIntl } from "react-intl";

const Faculties12 = () => {
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
          <Breadcrumb
            pageTitle={intl.formatMessage({
              id: "COMMON.FAKULTET_TEXT",
            })}
          />

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

export default Faculties12;
