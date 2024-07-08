import React from "react";
import { Link } from "react-router-dom";

import instructors from "../../data/Instructors.json";
import { useIntl } from "react-intl";
import { getProductName } from "../../helpers/general";

const InstructorMain = () => {
  const intl = useIntl();
  const lang = (
    JSON.parse(localStorage.getItem("i18nConfig")) || { selectedLang: "uz" }
  )?.selectedLang;

  return (
    <>
      <div className="instructors___page pt---60 pb-0">
        <div className="container">
          <div className="row justify-content-center">
            {instructors
              .filter((instructor) => instructor.kafedra == 12)
              .map((data, index) => {
                return (
                  <div className="col-lg-3">
                    <div className="instructor__content">
                      <div className="instructor__image">
                        <img
                          src={require(`../../assets/images/instructor/${data.image}`)}
                          alt={data.name}
                          style={{ height: 400, objectFit: "cover" }}
                        />
                        <div className="content__hover">
                          <p>{data.bio}</p>
                          <ul>
                            <li>
                              <a href="#">
                                <span
                                  aria-hidden="true"
                                  className="social_facebook"
                                ></span>
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <span
                                  aria-hidden="true"
                                  className="social_twitter"
                                ></span>
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <span
                                  aria-hidden="true"
                                  className="social_linkedin"
                                ></span>
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="bottom-content">
                        <h4>
                          <Link to={`/instructor/${data.id}`}>
                            {getProductName(data, "name", lang)}
                          </Link>
                        </h4>
                        <p> {getProductName(data, "designation", lang)}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
          </div>
        </div>
      </div>
    </>
  );
};

export default InstructorMain;
