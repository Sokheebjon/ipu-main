import React from "react";
import { Link } from "react-router-dom";
import posts from "../../data/Posts.json";

import userImg from "../../assets/images/course-single/user.jpg";
import userImg2 from "../../assets/images/course-single/user2.jpg";
import userImg3 from "../../assets/images/course-single/user3.jpg";
import { getProductName } from "../../helpers/general";
import { useIntl } from "react-intl";

const BlogDetailsMain1 = (props) => {
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
                      Yevropa ittifoqining "Erasmus+" loyihasi doirasida
                      universitetimizga Bolgariyaning Varna Iqtisodiyot
                      universiteti vakili Evgeni Raychev tashrif buyurdi.
                    </p>

                    <div className="blog-image">
                      <img
                        className="mt-2"
                        src={require(`../../assets/images/blog/${postImg}`)}
                        alt={postTitle}
                      />
                      <img
                        className="mt-2"
                        src={require(`../../assets/images/blog/2-1.jpg`)}
                        alt={postTitle}
                      />
                    </div>

                    <p>
                      Uchrashuvda universitetimiz rektori O.N.Bozorov, prorektor
                      J.Farmonov, va professor o‘qituvchilar, xalqaro hamkorlik
                      bo‘lim boshlig'i Sh.Abdurahimov, iqtidorli talabalarning
                      ilmiy-tadqiqot faoliyatini tashkil etish bo‘lim boshlig'i
                      O.Xomidjonov, hamda talabalar ishtirok etishdi.
                    </p>

                    <div className="blog-image">
                      <img
                        className="mt-2"
                        src={require(`../../assets/images/blog/2-2.jpg`)}
                        alt={postTitle}
                      />
                      <img
                        className="mt-2"
                        src={require(`../../assets/images/blog/2-3.jpg`)}
                        alt={postTitle}
                      />
                    </div>

                    <p>
                      Suxbat davomida Bolgariya tarixi va qadimiy yodgorliklari,
                      Varna iqtisodiyot universitetida ta'lim olish
                      afzalliklari, hamda dars jarayonlarini maqbul olib borish
                      usullari haqida gaplashildi.
                    </p>
                  </div>
                )}

                {lang == "ru" && (
                  <div>
                    <p>
                      В рамках проекта «Эразмус+» Европейского Союза Варненский
                      экономический университет в Болгарии Приехал представитель
                      университета Евгений Райчев.
                    </p>

                    <div className="blog-image">
                      <img
                        className="mt-2"
                        src={require(`../../assets/images/blog/${postImg}`)}
                        alt={postTitle}
                      />
                      <img
                        className="mt-2"
                        src={require(`../../assets/images/blog/2-1.jpg`)}
                        alt={postTitle}
                      />
                    </div>

                    <p>
                      На встрече присутствовали ректор нашего университета
                      Бозоров О.Н., проректор. Ж.Фармонов и профессора,
                      международное сотрудничество заведующий кафедрой Ш.
                      Абдурахимов, талантливые студенты начальник отдела
                      организации научно-исследовательской деятельности
                      Участвовали О.Хомиджонов и студенты.
                    </p>

                    <div className="blog-image">
                      <img
                        className="mt-2"
                        src={require(`../../assets/images/blog/2-2.jpg`)}
                        alt={postTitle}
                      />
                      <img
                        className="mt-2"
                        src={require(`../../assets/images/blog/2-3.jpg`)}
                        alt={postTitle}
                      />
                    </div>

                    <p>
                      В ходе беседы история и древние памятники Болгарии,
                      Обучение в Варненском экономическом университете
                      преимущества и оптимальное проведение учебных процессов
                      обсуждались методы.
                    </p>
                  </div>
                )}

                {lang == "en" && (
                  <div>
                    <p>
                      Within the framework of the "Erasmus+" project of the
                      European Union Varna University of Economics in Bulgaria
                      Evgeny Raychev, representative of the university, visited.
                    </p>

                    <div className="blog-image">
                      <img
                        className="mt-2"
                        src={require(`../../assets/images/blog/${postImg}`)}
                        alt={postTitle}
                      />
                      <img
                        className="mt-2"
                        src={require(`../../assets/images/blog/2-1.jpg`)}
                        alt={postTitle}
                      />
                    </div>

                    <p>
                      Rector of our university O.N. Bozorov, vice-rector
                      attended the meeting J.Farmonov, and professors,
                      international cooperation head of the department Sh.
                      Abdurahimov, talented students head of the department for
                      organization of scientific and research activities O.
                      Khomidjonov and students participated.
                    </p>

                    <div className="blog-image">
                      <img
                        className="mt-2"
                        src={require(`../../assets/images/blog/2-2.jpg`)}
                        alt={postTitle}
                      />
                      <img
                        className="mt-2"
                        src={require(`../../assets/images/blog/2-3.jpg`)}
                        alt={postTitle}
                      />
                    </div>

                    <p>
                      During the conversation, the history and ancient monuments
                      of Bulgaria, Education at Varna University of Economics
                      advantages, and optimal conduct of lesson processes
                      methods were discussed.
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

export default BlogDetailsMain1;
