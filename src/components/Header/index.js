import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { setLanguage, useLang } from "../../i18n/LayoutI18n";
import MenuItems from "./MenuItems";

import normalLogo from "../../assets/images/logos/new-logo1.png";
import stickyLogo from "../../assets/images/logos/new-logo1.png";

import UZBFlag from "../../assets/images/flags/uzb.png";
import RUSFlag from "../../assets/images/flags/rus.png";
import USAFlag from "../../assets/images/flags/usa.png";

import { useIntl } from "react-intl";

const Header = (props) => {
  const {
    topbarEnable,
    headerClass,
    parentMenu,
    headerNormalLogo,
    headerStickyLogo,
  } = props;

  const intl = useIntl();
  const [menuOpen, setMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [languageStatus, setLanguageStatus] = useState(false);
  const [title, setTitle] = useState("");
  const lang = (
    JSON.parse(localStorage.getItem("i18nConfig")) || { selectedLang: "uz" }
  )?.selectedLang;

  useEffect(() => {
    if (lang == "uz")
      return setTitle(intl.formatMessage({ id: "COMMON.UZBEK" }));

    if (lang == "ru")
      return setTitle(intl.formatMessage({ id: "COMMON.RUSSIA" }));

    if (lang == "en")
      return setTitle(intl.formatMessage({ id: "COMMON.ENGLISH" }));
  }, []);

  useEffect(() => {
    // Sticky is displayed after scrolling for 100 pixels
    const toggleVisibility = () => {
      if (window.pageYOffset > 100) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const setLang = (lang) => {
    setLanguage(lang);
  };

  return (
    <>
      <header
        id="react-header"
        className={
          headerClass ? headerClass : "react-header react-header-three"
        }
      >
        <div className={isVisible ? "header-area react-sticky" : "header-area"}>
          {topbarEnable ? (
            <div className="topbar-area style1">
              <div className="container">
                <div className="row">
                  <div className="col-lg-7">
                    <div className="topbar-contact">
                      <ul>
                        <li>
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
                            className="feather feather-phone"
                          >
                            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                          </svg>
                          <a href="tel:998752236060"> +(998) 75-223-60-60</a>
                        </li>
                        <li>
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
                            className="feather feather-mail"
                          >
                            <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                            <polyline points="22,6 12,13 2,6"></polyline>
                          </svg>
                          <a href="mailto:ipu@ipu-edu.uz">ipu@ipu-edu.uz</a>
                        </li>
                        <li className="d-flex position-relative">
                          <div
                            onClick={() => setLanguageStatus(!languageStatus)}
                            className="d-flex flex-row align-items-center"
                          >
                            <a href="#">
                              {lang == "uz" && (
                                <img
                                  style={{ height: 30 }}
                                  src={UZBFlag}
                                  alt="uzb flag"
                                />
                              )}
                              {lang == "ru" && (
                                <img
                                  style={{ height: 30 }}
                                  src={RUSFlag}
                                  alt="uzb flag"
                                />
                              )}

                              {lang == "en" && (
                                <img
                                  style={{ height: 30 }}
                                  src={USAFlag}
                                  alt="uzb flag"
                                />
                              )}
                            </a>
                          </div>
                          {languageStatus && (
                            <div
                              className="position-absolute"
                              style={{
                                width: "60px",
                                bottom: "-130px",
                                zIndex: 30,
                                background: "#ffffff",
                                left: "-15px",
                                border: "2px solid rgba(0, 48, 110, 0.1)",
                                padding: "5px 10px",
                                borderRadius: "10px",
                              }}
                            >
                              <div
                                onClick={() => {
                                  setLang("uz");

                                  setLanguageStatus(!languageStatus);
                                  setTitle(
                                    intl.formatMessage({
                                      id: "COMMON.UZBEK",
                                    })
                                  );
                                }}
                              >
                                <a
                                  className="text-black"
                                  href="#"
                                  onClick={() => {}}
                                >
                                  <img src={UZBFlag} alt="uzb flag" />
                                </a>
                              </div>
                              <div
                                onClick={() => {
                                  setLang("ru");
                                  setTitle(
                                    intl.formatMessage({
                                      id: "COMMON.RUSSIA",
                                    })
                                  );
                                  setLanguageStatus(!languageStatus);
                                }}
                              >
                                <a className="text-black" href="#">
                                  <img src={RUSFlag} alt="uzb flag" />{" "}
                                </a>
                              </div>

                              <div
                                onClick={() => {
                                  setLang("en");
                                  setLanguageStatus(!languageStatus);
                                  setTitle(
                                    intl.formatMessage({
                                      id: "COMMON.ENGLISH",
                                    })
                                  );
                                }}
                              >
                                <a className="text-black" href="#">
                                  <img src={USAFlag} alt="uzb flag" />
                                </a>
                              </div>
                            </div>
                          )}
                        </li>
                        <li className="d-flex"></li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-lg-5 text-right">
                    <div className="toolbar-sl-share">
                      <ul className="social-links">
                        <li>
                          <a href="https://t.me/ipuedu_uz">
                            <span aria-hidden="true">
                              <i class="fa fa-telegram"></i>
                            </span>
                          </a>
                        </li>
                        <li>
                          <a href="https://www.instagram.com/ipuedu_uz/">
                            <span
                              aria-hidden="true"
                              className="social_instagram"
                            ></span>
                          </a>
                        </li>
                        <li>
                          <a href="https://www.facebook.com/profile.php?id=61555610075346">
                            <span
                              aria-hidden="true"
                              className="social_facebook"
                            ></span>
                          </a>
                        </li>
                        <li>
                          <a href="https://youtube.com/@IPUEDU_UZ">
                            <span
                              aria-hidden="true"
                              className="social_youtube"
                            ></span>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            ""
          )}
          <div className="menu-part">
            <div className="container">
              <div className="react-main-menu">
                <nav>
                  <div className="menu-toggle">
                    <div className="logo">
                      {isVisible ? (
                        <Link to="/" className="logo-text">
                          <img
                            src={
                              headerStickyLogo ? headerStickyLogo : stickyLogo
                            }
                            alt=""
                            style={{ width: 170 }}
                          />
                        </Link>
                      ) : (
                        <Link to="/" className="logo-text">
                          <img
                            src={
                              headerNormalLogo ? headerNormalLogo : normalLogo
                            }
                            alt=""
                            style={{ width: 170 }}
                          />
                        </Link>
                      )}
                    </div>

                    <div className="d-flex d-lg-none flex-row align-items-center">
                      <li className="d-flex position-relative me-3">
                        <div
                          onClick={() => setLanguageStatus(!languageStatus)}
                          className="d-flex flex-row align-items-center"
                        >
                          <a href="#">
                            {lang == "ru" && (
                              <img
                                style={{ height: 50 }}
                                src={RUSFlag}
                                alt="uzb flag"
                              />
                            )}
                            {lang == "uz" && (
                              <img
                                style={{ height: 50 }}
                                src={UZBFlag}
                                alt="uzb flag"
                              />
                            )}
                            {lang == "en" && (
                              <img
                                style={{ height: 50 }}
                                src={USAFlag}
                                alt="uzb flag"
                              />
                            )}
                          </a>
                        </div>
                        {languageStatus && (
                          <div
                            className="position-absolute"
                            style={{
                              width: "60px",
                              bottom: "-130px",
                              zIndex: 30,
                              background: "#ffffff",
                              left: "-15px",
                              border: "2px solid rgba(0, 48, 110, 0.1)",
                              padding: "5px 10px",
                              borderRadius: "10px",
                            }}
                          >
                            <div
                              onClick={() => {
                                setLang("uz");

                                setLanguageStatus(!languageStatus);
                                setTitle(
                                  intl.formatMessage({
                                    id: "COMMON.UZBEK",
                                  })
                                );
                              }}
                            >
                              <a
                                className="text-black"
                                href="#"
                                onClick={() => {}}
                              >
                                <img src={UZBFlag} alt="uzb flag" />
                              </a>
                            </div>
                            <div
                              onClick={() => {
                                setLang("ru");
                                setTitle(
                                  intl.formatMessage({
                                    id: "COMMON.RUSSIA",
                                  })
                                );
                                setLanguageStatus(!languageStatus);
                              }}
                            >
                              <a className="text-black" href="#">
                                <img src={RUSFlag} alt="uzb flag" />{" "}
                              </a>
                            </div>

                            <div
                              onClick={() => {
                                setLang("en");
                                setLanguageStatus(!languageStatus);
                                setTitle(
                                  intl.formatMessage({
                                    id: "COMMON.ENGLISH",
                                  })
                                );
                              }}
                            >
                              <a className="text-black" href="#">
                                <img src={USAFlag} alt="uzb flag" />
                              </a>
                            </div>
                          </div>
                        )}
                      </li>
                      <button
                        type="button"
                        id="menu-btn"
                        className={
                          menuOpen ? "mobile-menu-btn open" : "mobile-menu-btn"
                        }
                        onClick={() => {
                          setMenuOpen(!menuOpen);
                        }}
                      >
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                      </button>
                    </div>
                  </div>
                  <div
                    className={
                      menuOpen
                        ? "react-inner-menus menu-open"
                        : "react-inner-menus"
                    }
                  >
                    {/* {menuCategoryEnable ? (
                      <div className="cate-part">
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
                          className="feather feather-more-vertical"
                        >
                          <circle cx="12" cy="12" r="1"></circle>
                          <circle cx="12" cy="5" r="1"></circle>
                          <circle cx="12" cy="19" r="1"></circle>
                        </svg>
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
                          className="feather feather-more-vertical"
                        >
                          <circle cx="12" cy="12" r="1"></circle>
                          <circle cx="12" cy="5" r="1"></circle>
                          <circle cx="12" cy="19" r="1"></circle>
                        </svg>
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
                          className="feather feather-more-vertical"
                        >
                          <circle cx="12" cy="12" r="1"></circle>
                          <circle cx="12" cy="5" r="1"></circle>
                          <circle cx="12" cy="19" r="1"></circle>
                        </svg>
                        <ul className="react-category-menu">
                          <li>
                            <Link to="#">
                              Categories <i className="arrow_carrot-down"></i>
                            </Link>
                            <ul>
                              <li>
                                <Link to="/course">English Book</Link>
                              </li>
                              <li>
                                <Link to="/course">Math Book</Link>
                              </li>
                              <li>
                                <Link to="/course">Story Book</Link>
                              </li>
                            </ul>
                          </li>
                        </ul>
                      </div>
                    ) : (
                      ""
                    )} */}
                    <ul id="backmenu" className="react-menus react-sub-shadow">
                      <MenuItems parentMenu={parentMenu} />
                    </ul>
                    {/* <div className="searchbar-part">
                      <form className="search-form">
                        <input
                          type="text"
                          className="form-input"
                          placeholder="Search Course"
                        />
                        <Link to="/course" className="form-button">
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
                            className="feather feather-search"
                          >
                            <circle cx="11" cy="11" r="8"></circle>
                            <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                          </svg>
                        </Link>
                      </form>
                    </div> */}
                  </div>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
