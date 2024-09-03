import React from "react";

import infoImg1 from "../../assets/images/contact/2.png";
import infoImg2 from "../../assets/images/contact/3.png";
import infoImg3 from "../../assets/images/contact/4.png";
import { useIntl } from "react-intl";

const ContactInfo = (props) => {
  const { contactBoxClass } = props;
  const intl = useIntl();

  return (
    <ul className="address-sec">
      <li>
        <em className="icon">
          <img src={infoImg1} alt="image" style={{ maxWidth: "130px" }} />
        </em>
        <span className="text">
          <em> {intl.formatMessage({ id: "COMMON.ADDRESS" })}</em>
          {intl.formatMessage({ id: "COMMON.ADDRESS_U" })}
        </span>
      </li>
      <li>
        <em className="icon">
          <img src={infoImg2} alt="image" style={{ maxWidth: "130px" }} />
        </em>
        <span className="text">
          <em> {intl.formatMessage({ id: "COMMON.CONTACT" })}</em>
          <a href="tel:998752236060">
            {intl.formatMessage({ id: "COMMON.TELEPHONE" })}: +(998) 75-223-60-60
          </a>
          <a href="#">
            {intl.formatMessage({ id: "COMMON.MAIL" })}: ipu@ipu-edu.uz
          </a>
        </span>
      </li>
      <li>
        <em className="icon">
          <img src={infoImg3} alt="image" style={{ maxWidth: "130px" }} />
        </em>
        <span className="text">
          <em> {intl.formatMessage({ id: "COMMON.WORKING_TIME" })}</em>
          {intl.formatMessage({ id: "COMMON.MONDAY" })}-
          {intl.formatMessage({ id: "COMMON.SATURDAY" })}
          : 09:00 - 18:00 <br />
        </span>
      </li>
    </ul>
  );
};

export default ContactInfo;
