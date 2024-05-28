import { useIntl } from "react-intl";
import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useLang } from "../../i18n/LayoutI18n";

const MenuItems = (props) => {
  const intl = useIntl();
  const locale = useLang();

  const { parentMenu } = props;

  const location = useLocation();
  const postURL = location.pathname.split("/");
  const pathLength = Number(postURL.length);

  const [home, setHome] = useState(false);
  const [page, setPage] = useState(false);
  const [event, setEvent] = useState(false);
  const [course, setCourse] = useState(false);
  const [blog, setBlog] = useState(false);

  const openMobileMenu = (menu) => {
    if (menu === "home") {
      setHome(!home);
      setPage(false);
      setEvent(false);
      setCourse(false);
      setBlog(false);
    } else if (menu === "page") {
      setHome(false);
      setPage(!page);
      setEvent(false);
      setCourse(false);
      setBlog(false);
    } else if (menu === "event") {
      setHome(false);
      setPage(false);
      setEvent(!event);
      setCourse(false);
      setBlog(false);
    } else if (menu === "course") {
      setHome(false);
      setPage(false);
      setEvent(false);
      setCourse(!course);
      setBlog(false);
    } else if (menu === "blog") {
      setHome(false);
      setPage(false);
      setEvent(false);
      setCourse(false);
      setBlog(!blog);
    }
  };

  return (
    <>
      <li className={parentMenu === "home" ? "hash menu-active" : ""}>
        <Link to="/">{intl.formatMessage({ id: "COMMON.HOME" })}</Link>
      </li>
      <li
        className={
          parentMenu === "departments" || parentMenu === "departments-magister"
            ? "has-sub menu-active"
            : "has-sub"
        }
      >
        <Link
          to="#"
          className={event ? "hash menu-active" : "hash"}
          onClick={() => {
            openMobileMenu("event");
          }}
        >
          {intl.formatMessage({ id: "COMMON.INSTITUTE" })}
          <span className="arrow "></span>
        </Link>
        <ul className={event ? "sub-menu sub-menu-open" : "sub-menu"}>
          <li className={location.pathname === "/about" ? "menu-active" : ""}>
            <Link to="/about">
              {intl.formatMessage({ id: "COMMON.ABOUT" })}
            </Link>
          </li>
          <li className={location.pathname === "/tuzilma" ? "menu-active" : ""}>
            <Link to="/tuzilma">
              {intl.formatMessage({ id: "COMMON.STRUCTURE" })}
            </Link>
          </li>
          <li
            className={location.pathname === "/research" ? "menu-active" : ""}
          >
            <Link to="/research">
              {intl.formatMessage({ id: "COMMON.SCIENTIFIC_ACTIVITY" })}
            </Link>
          </li>
          <li
            className={
              location.pathname === "/international-relations"
                ? "menu-active"
                : ""
            }
          >
            <Link to="/international-relations">
              {intl.formatMessage({ id: "COMMON.INTERNATIONAL_RELATIONS" })}
            </Link>
          </li>
          <li
            className={
              location.pathname === "/culture-education" ? "menu-active" : ""
            }
          >
            <Link to="/culture-education">
              {intl.formatMessage({ id: "COMMON.CULTURAL_AND_EDUCATIONAL" })}
            </Link>
          </li>
          <li
            className={location.pathname === "/faculties" ? "menu-active" : ""}
          >
            <Link to="/faculties">
              {intl.formatMessage({ id: "COMMON.FACULTIES" })}
            </Link>
          </li>
        </ul>
      </li>

      <li
        className={
          parentMenu === "departments" || parentMenu === "departments-magister"
            ? "has-sub menu-active"
            : "has-sub"
        }
      >
        <Link
          to="#"
          className={course ? "hash menu-active" : "hash"}
          onClick={() => {
            openMobileMenu("course");
          }}
        >
          {intl.formatMessage({ id: "COMMON.DIRECTIONS" })}{" "}
          <span className="arrow "></span>
        </Link>
        <ul className={course ? "sub-menu sub-menu-open" : "sub-menu"}>
          <li
            className={
              location.pathname === "/departments" ? "menu-active" : ""
            }
          >
            <Link to="/departments">
              {intl.formatMessage({ id: "COMMON.BACHELOR" })}
            </Link>
          </li>
          <li
            className={
              location.pathname === "/departments-magister" ? "menu-active" : ""
            }
          >
            <Link to="/departments-magister">
              {intl.formatMessage({ id: "COMMON.MASTER'S" })}
            </Link>
          </li>
        </ul>
      </li>

      <li
        className={
          parentMenu === "departments" || parentMenu === "departments-magister"
            ? "has-sub menu-active"
            : "has-sub"
        }
      >
        <Link
          to="#"
          className={page ? "hash menu-active" : "hash"}
          onClick={() => {
            openMobileMenu("page");
          }}
        >
          {intl.formatMessage({ id: "COMMON.NEWS_AND_MEDIA" })}
          <span className="arrow "></span>
        </Link>
        <ul className={page ? "sub-menu sub-menu-open" : "sub-menu"}>
          <li className={location.pathname === "/blog" ? "menu-active" : ""}>
            <Link to="/blog">{intl.formatMessage({ id: "COMMON.NEWS" })}</Link>
          </li>
          <li className={location.pathname === "/event" ? "menu-active" : ""}>
            <Link to="/event">
              {intl.formatMessage({ id: "COMMON.EVENTS" })}
            </Link>
          </li>
        </ul>
      </li>

      <li
        className={
          location.pathname === "students-komissiya" ? "menu-active" : ""
        }
      >
        <Link to="#">{intl.formatMessage({ id: "COMMON.STUDENTS" })}</Link>
      </li>

      <li
        className={
          location.pathname === "students-komissiya" ? "menu-active" : ""
        }
      >
        <Link to="#">{intl.formatMessage({ id: "COMMON.COMMISSION" })}</Link>
      </li>

      <li className={location.pathname === "/contact" ? "menu-active" : ""}>
        <Link to="/contact">
          {intl.formatMessage({ id: "COMMON.CONTACT" })}
        </Link>
      </li>
    </>
  );
};

export default MenuItems;
