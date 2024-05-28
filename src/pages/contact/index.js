import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Breadcrumb from "../../components/Breadcrumb";
import ContactMain from "./ContactMain";
import ScrollToTop from "../../components/ScrollTop";

// Image
import Logo from "../../assets/images/logos/new-logo1.png";
import { useIntl } from "react-intl";

const Contact = () => {
  const intl = useIntl();

  return (
    <>
      <Header
        parentMenu="contact"
        menuCategoryEnable="enable"
        headerNormalLogo={Logo}
        headerStickyLogo={Logo}
      />

      <div class="react-wrapper">
        <div class="react-wrapper-inner">
          <Breadcrumb
            pageTitle={intl.formatMessage({ id: "COMMON.CONTACT" })}
          />

          <ContactMain />

          {/* scrolltop-start */}
          <ScrollToTop />
          {/* scrolltop-end */}
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Contact;
