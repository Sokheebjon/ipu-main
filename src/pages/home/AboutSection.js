import { Link } from "react-router-dom";

// Image
import aboutImg from "../../assets/images/about/ab.png";
import aboutBadge from "../../assets/images/about/badge1.png";
import { useIntl } from "react-intl";
import IMAGE3 from "../../assets/images/about/image1.JPG";

const About = () => {
  const intl = useIntl();

  return (
    <div className="about__area about__area_one p-relative pt---10 pb---120">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="about__image h-100">
              <img
                className="d-none d-lg-block"
                src={IMAGE3}
                alt="About"
                style={{ objectFit: "cover" }}
              />
              {/* <img
                className="react__shape__ab"
                src={aboutBadge}
                alt="Shape Image"
              /> */}
            </div>
          </div>
          <div className="col-lg-6">
            <div className="about__content">
              <h2
                className="about__title wow animate__fadeInUp"
                data-wow-duration="0.3s"
              >
                {intl.formatMessage({
                  id: "COMMON.HOME_ABOUT_1",
                })}
                <br />
                <em>
                  {intl.formatMessage({
                    id: "COMMON.HOME_ABOUT_2",
                  })}
                </em>
              </h2>
              <p
                className="about__paragraph wow animate__fadeInUp mt-5"
                data-wow-duration="0.5s"
              >
                {intl.formatMessage({
                  id: "COMMON.HOME_ABOUT_TEXT_1",
                })}{" "}
                <br />{" "}
                {intl.formatMessage({
                  id: "COMMON.HOME_ABOUT_TEXT_2",
                })}{" "}
                <br />{" "}
                {intl.formatMessage({
                  id: "COMMON.HOME_ABOUT_TEXT_3",
                })}
              </p>
              {/* <p
                className="about__paragraph2 wow animate__fadeInUp"
                data-wow-duration="0.7s"
              >
                {" "}
                Have questions? <Link to="#"> Get Free Guide </Link>
              </p> */}
              {/* <p className="wow animate__fadeInUp" data-wow-duration="0.6s">
                Education also refers to the knowledge received through
                schooling instruction <br />
                and to the institution of teaching as a whole. The main purpose
                of education <br />
                is the integral development of a person.
              </p> */}
              <ul className="wow animate__fadeInUp" data-wow-duration="0.9s">
                <li>
                  <Link to="/about" className="more-about">
                    {intl.formatMessage({
                      id: "COMMON.GET_INFORMATION",
                    })}
                    {/* <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      className="feather feather-arrow-right"
                    >
                      <line x1="5" y1="12" x2="19" y2="12"></line>
                      <polyline points="12 5 19 12 12 19"></polyline>
                    </svg> */}
                  </Link>
                </li>
                <li className="last-li">
                  <em>
                    {intl.formatMessage({
                      id: "COMMON.GET_HELP",
                    })}
                  </em>
                  <a href="mailto:ipu@ipu-edu.uz">ipu@ipu-edu.uz</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
