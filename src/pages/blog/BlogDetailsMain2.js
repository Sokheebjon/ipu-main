import React from "react";
import { Link } from "react-router-dom";
import posts from "../../data/Posts.json";

import userImg from "../../assets/images/course-single/user.jpg";
import userImg2 from "../../assets/images/course-single/user2.jpg";
import userImg3 from "../../assets/images/course-single/user3.jpg";
import { getProductName } from "../../helpers/general";
import { useIntl } from "react-intl";

const BlogDetailsMain2 = (props) => {
  const intl = useIntl();
  const { postTitle, postImg, lang } = props;

  return (
    <div className="back__course__page_grid react-courses__single-page pb---40 pt---110">
      <div className="container pb---70">
        <div className="row">
          <div className="col-lg-8">
            <div className="blog-single-inner">
              <div className="blog-content">
                <p>
                  #Xalqaro_hamkorlikI IQTISODIYOT VA PEDAGOGIKA UNIVERSITETI
                  ✨✨ Xabaringiz bor, universitetimiz vakillari joriy yilning
                  1-10-fevral kunlari Turkiya hamda Ozarbayjon universitetlariga
                  Xalqaro va ilmiy hamkorlik uchun xizmat safarida bo'lib
                  qaytishgan edi.✅ Shu yilning 3-7-aprel kunlari Yevropa
                  ittifoqining "Erasmus+" loyihasi doirasida universitetimizga
                  Bolgariyaning Varna Iqtisodiyot universiteti vakili Evgeni
                  Raychev tashrifi kutilmoqda.
                </p>

                <div className="single-nav">
                  <div className="back-prev">
                    {" "}
                    <Link to="/blog/2">
                      <i className="back-icon arrow_carrot-left"></i>{" "}
                      {intl.formatMessage({ id: "COMMON.PREV" })}{" "}
                      <em>{getProductName(posts[2], "title", lang)}</em>
                    </Link>{" "}
                  </div>
                  <div className="back-next">
                    <Link to="/blog/1">
                      {" "}
                      {intl.formatMessage({ id: "COMMON.NEXT" })}{" "}
                      <i className="back-icon arrow_carrot-right"></i>{" "}
                      <em>{getProductName(posts[0], "title", lang)}</em>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 md-mt-60">
            <div className="react-sidebar ml----30">
              <div className="widget back-post">
                <h3 className="widget-title">
                  {intl.formatMessage({ id: "COMMON.NEWS" })}
                </h3>
                <ul className="related-courses">
                  {posts
                    .map((data, index) => {
                      return (
                        <li key={index}>
                          <Link to={`/blog/${data.id}`}>
                            <span class="post-images">
                              <img
                                src={require(`../../assets/images/blog/${data.image}`)}
                                alt="post"
                              />
                            </span>
                          </Link>
                          <div class="titles">
                            <h4>
                              <Link to={`/blog/${data.id}`}>
                                {getProductName(data, "title", lang)}
                              </Link>
                            </h4>
                            <span>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                stroke-width="2"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                class="feather feather-clock"
                              >
                                <circle cx="12" cy="12" r="10"></circle>
                                <polyline points="12 6 12 12 16 14"></polyline>
                              </svg>{" "}
                              {data.publishedDate}
                            </span>
                          </div>
                        </li>
                      );
                    })
                    .slice(0, 2)}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogDetailsMain2;
