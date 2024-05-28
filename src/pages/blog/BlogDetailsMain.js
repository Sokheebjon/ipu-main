import React from "react";
import { Link } from "react-router-dom";
import posts from "../../data/Posts.json";

import userImg from "../../assets/images/course-single/user.jpg";
import userImg2 from "../../assets/images/course-single/user2.jpg";
import userImg3 from "../../assets/images/course-single/user3.jpg";
import { getProductName } from "../../helpers/general";
import { useIntl } from "react-intl";

const BlogMain = (props) => {
  const intl = useIntl();
  const { postTitle, postImg, lang } = props;

  return (
    <div className="back__course__page_grid react-courses__single-page pb---40 pt---110">
      <div className="container pb---70">
        <div className="row">
          <div className="col-lg-8">
            <div className="blog-single-inner">
              <div className="blog-content">
                {lang == "uz" && (
                  <div>
                    <p>
                      Universitet rektori O.N.Bozorov hamda xalqaro bo'lim
                      boshlig'i A.Shohjahon Varna Iqtisodiyot universitetida
                      “Erasmus+” dasturi doirasida ketma-ket to‘rtinchi marotaba
                      o‘tkazilayotgan “Mobiliyat tajribasini boyitish” xalqaro
                      haftaligida ishtirok etdi. <br /> <br />
                    </p>

                    <div className="blog-image">
                      <img
                        src={require(`../../assets/images/blog/${postImg}`)}
                        alt={postTitle}
                      />
                      <img
                        src={require(`../../assets/images/blog/1-3.jpg`)}
                        alt={postTitle}
                        className="my-2"
                      />

                      <img
                        src={require(`../../assets/images/blog/1-2.jpg`)}
                        alt={postTitle}
                        className="my-2"
                      />

                      <img
                        src={require(`../../assets/images/blog/1-1.jpg`)}
                        alt={postTitle}
                      />
                    </div>

                    <p>
                      Shu bilan birga Qarshi shahridagi Iqtisodiyot va
                      pedagogika universitetida shunday tadbirni tashkil etish
                      taklifini oldi. Taklifga shaxsan hamkor universitetimiz
                      rektori prof. Otabek Bozorov, UE – Varnadagi Xalqaro
                      xodimlar haftaligining tashkil etilishi va dasturidan
                      cheksiz taassurot qoldirdi. Deya xabar qoldirdi Varna
                      Iqtisodiyot universiteti matbuot xizmati.
                    </p>
                  </div>
                )}

                {lang == "ru" && (
                  <div>
                    <p>
                      Ректор университета О.Н. Бозоров и заведующий
                      международным отделом А. Шахджахан приняли участие в
                      международной неделе «Обогащение опыта мобильности»,
                      проводимой в четвертый раз подряд в рамках программы
                      «Эразмус+» в Варненском экономическом университете.
                      <br /> <br />
                    </p>

                    <div className="blog-image">
                      <img
                        src={require(`../../assets/images/blog/${postImg}`)}
                        alt={postTitle}
                      />
                      <img
                        src={require(`../../assets/images/blog/1-3.jpg`)}
                        alt={postTitle}
                        className="my-2"
                      />

                      <img
                        src={require(`../../assets/images/blog/1-2.jpg`)}
                        alt={postTitle}
                        className="my-2"
                      />

                      <img
                        src={require(`../../assets/images/blog/1-1.jpg`)}
                        alt={postTitle}
                      />
                    </div>

                    <p>
                      497 / 5 000 В то же время экономика в г. Карши и
                      организация такого мероприятия в Педагогическом
                      университете получил предложение. Наш университет-партнер
                      лично участвует в предложении ректор проф. Отабек Бозоров,
                      УП - Международный в Варне от организации и программы
                      недели персонала оставил бесконечное впечатление. Варна
                      оставила сообщение Пресс-служба Экономического
                      университета.
                    </p>
                  </div>
                )}

                {lang == "en" && (
                  <div>
                    <p>
                      Rector of the university O.N. Bozorov and head of the
                      international department A. Shahjakhan participated in the
                      international week "Enriching the mobility experience"
                      held for the fourth time in a row within the framework of
                      the "Erasmus+" program at Varna University of Economics.
                      <br /> <br />
                    </p>

                    <div className="blog-image">
                      <img
                        src={require(`../../assets/images/blog/${postImg}`)}
                        alt={postTitle}
                      />
                      <img
                        src={require(`../../assets/images/blog/1-3.jpg`)}
                        alt={postTitle}
                        className="my-2"
                      />

                      <img
                        src={require(`../../assets/images/blog/1-2.jpg`)}
                        alt={postTitle}
                        className="my-2"
                      />

                      <img
                        src={require(`../../assets/images/blog/1-1.jpg`)}
                        alt={postTitle}
                      />
                    </div>

                    <p>
                      At the same time, he received an offer to organize such an
                      event at the University of Economics and Pedagogy in
                      Karshi. The rector of our partner university, prof. Otabek
                      Bozorov was immensely impressed by the organization and
                      program of the International Staff Week in UE-Varna. The
                      press service of Varna University of Economics reported.
                    </p>
                  </div>
                )}

                <div className="single-nav">
                  <div className="back-prev">
                    {" "}
                    <Link to="/blog/3">
                      <i className="back-icon arrow_carrot-left"></i>{" "}
                      {intl.formatMessage({ id: "COMMON.PREV" })}{" "}
                      <em>{getProductName(posts[1], "title", lang)}</em>
                    </Link>{" "}
                  </div>
                  <div className="back-next">
                    <Link to="/blog/2">
                      {" "}
                      {intl.formatMessage({ id: "COMMON.NEXT" })}{" "}
                      <i className="back-icon arrow_carrot-right"></i>{" "}
                      <em>{getProductName(posts[2], "title", lang)}</em>
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

export default BlogMain;
