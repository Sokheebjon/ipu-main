import React from "react";
import BlogMain from "./BlogMain";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Breadcrumb from "../../components/Breadcrumb";
import ScrollToTop from "../../components/ScrollTop";

import Logo from "../../assets/images/logos/new-logo1.png";
import { useIntl } from "react-intl";

const Blog = () => {
  const intl = useIntl();

  return (
    <body className="blog-post-page">
      <Header
        parentMenu="blog"
        menuCategoryEnable="enable"
        headerNormalLogo={Logo}
        headerStickyLogo={Logo}
      />

      <div class="react-wrapper">
        <div class="react-wrapper-inner">
          <Breadcrumb pageTitle={intl.formatMessage({ id: "COMMON.NEWS" })} />

          <BlogMain />

          {/* scrolltop-start */}
          <ScrollToTop />
          {/* scrolltop-end */}
        </div>
      </div>

      <Footer />
    </body>
  );
};

export default Blog;
