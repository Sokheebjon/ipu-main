import { Tabs, TabPanel } from "react-tabs";
import { useIntl } from "react-intl";
import { getProductName } from "../../helpers/general";

const CourseDetailsMain = (props) => {
  const intl = useIntl();
  const lang = (
    JSON.parse(localStorage.getItem("i18nConfig")) || { selectedLang: "uz" }
  )?.selectedLang;

  const { items, descrption } = props;

  return (
    <div className="back__course__page_grid react-courses__single-page pb---16 pt---110">
      <div className="container pb---70">
        <div className="row">
          <div className="col-lg-8">
            <Tabs>
              <div className="course-single-tab">
                <div className="tab-content" id="back-tab-content">
                  <TabPanel>
                    <div className="tab-pane">
                      <h3>
                        {intl.formatMessage({
                          id: "COMMON.ABOUT_THIS_DIRECTION",
                        })}
                      </h3>
                      <p>
                        {descrption?.map((desc) => (
                          <>
                            {desc} <br /> <br />
                          </>
                        ))}
                      </p>
                    </div>
                  </TabPanel>
                </div>
              </div>
            </Tabs>
          </div>
          <div className="col-lg-4 md-mt-60">
            {items.map((item) => (
              <div className="react-sidebar react-back-course2 ml----30">
                <div className="widget get-back-course pb-5">
                  <ul className="price">
                    <li>{item.format}</li>
                  </ul>
                  <ul className="price__course">
                    <li>
                      <i className="icon_currency"></i>{" "}
                      {intl.formatMessage({
                        id: "COMMON.CONTRACT",
                      })}{" "}
                      <b>
                        {item.price}{" "}
                        {intl.formatMessage({
                          id: "COMMON.SOM",
                        })}
                      </b>
                    </li>
                    <li>
                      <i className="icon_clock_alt"></i>{" "}
                      {intl.formatMessage({
                        id: "COMMON.DURATION",
                      })}{" "}
                      <b>{getProductName(item, "duration", lang)}</b>
                    </li>

                    <li>
                      <i className="icon_map_alt"></i>{" "}
                      {intl.formatMessage({
                        id: "COMMON.LANGUAGE_OF_EDUCATION",
                      })}{" "}
                      <b>{getProductName(item, "language", lang)}</b>
                    </li>
                  </ul>
                </div>
              </div>
            ))}

            <div className="react-sidebar react-back-course2 ml----30">
              <a
                href="https://ipu.educon.uz/sign-in"
                className="start-btn btn btn-primary w-100 py-3"
              >
                {intl.formatMessage({
                  id: "COMMON.SUBMIT_AN_APPLICATION",
                })}
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseDetailsMain;
