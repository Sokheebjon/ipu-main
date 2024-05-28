import React from "react";

import SectionTitle from "../../components/SectionTitle";
import SinglePost from "../../components/Blog/SinglePost";

import posts from "../../data/Posts.json";
import { useIntl } from "react-intl";
import { getProductName } from "../../helpers/general";

const Blog = () => {
  const intl = useIntl();

  const lang = (
    JSON.parse(localStorage.getItem("i18nConfig")) || { selectedLang: "uz" }
  )?.selectedLang;

  return (
    <>
      <div className="react-blog__area blog__area pt---120 pb---120 graybg-home">
        <div className="container blog__width">
          <SectionTitle
            Title={intl.formatMessage({ id: "COMMON.NEWS_AND_BLOGS" })}
          />
          <div className="row">
            {posts
              .map((data, index) => {
                return (
                  <div
                    key={index}
                    className="col-xxl-3 col-xl-3 col-lg-3 col-md-6 col-sm-12 col-12 wow animate__fadeInUp"
                    data-wow-duration="0.3s"
                  >
                    {
                      <SinglePost
                        blogID={data.id}
                        blogImage={`${data.image}`}
                        blogTitle={getProductName(data, "title", lang)}
                        blogAuthor={data.author}
                        blogPublishedDate={data.publishedDate}
                      />
                    }
                  </div>
                );
              })
              .slice(0, 4)}
          </div>
        </div>
      </div>
    </>
  );
};

export default Blog;
