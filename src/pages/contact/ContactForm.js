import React from "react";

import emailjs from "emailjs-com";
import { useIntl } from "react-intl";

const ContactForm = (props) => {
  const intl = useIntl();

  function sendEmail(e) {
    e.preventDefault();

    emailjs.sendForm("", "", e.target, "").then(
      (result) => {
        console.log(result.text);
      },
      (error) => {
        console.log(error.text);
      }
    );

    e.target.reset();
  }

  return (
    <div className="react-blog-form">
      <h2 className="contact-title">
        {intl.formatMessage({ id: "COMMON.SEND_MESSAGE" })}
      </h2>
      <div id="blog-form" className="blog-form">
        <div id="form-messages"></div>
        <form id="contact-form" onSubmit={sendEmail}>
          <div className="row">
            <div className="col-lg-6">
              <div className="back-input">
                <input
                  id="name"
                  type="text"
                  name="user_name"
                  required
                  placeholder={intl.formatMessage({
                    id: "COMMON.NAME",
                  })}
                />
              </div>
            </div>

            {/* <div className="col-lg-6 pdl-5">
                            <div className="back-input">
                                <input id="email" type="email" name="user_email" required placeholder="Email" />                          
                            </div>
                        </div> */}
            {/*                         
                        <div className="col-lg-6">
                            <div className="back-input">
                                <input id="subject" type="text" name="user_subject" required placeholder="Subject" />                          
                            </div>
                        </div> */}

            <div className="col-lg-6 pdl-5">
              <div className="back-input">
                <input
                  id="phone"
                  type="text"
                  name="user_phone"
                  required
                  placeholder={intl.formatMessage({
                    id: "COMMON.TELEPHONE",
                  })}
                />
              </div>
            </div>

            <div className="col-lg-12">
              <div className="back-textarea">
                <textarea
                  id="message"
                  name="user_message"
                  required
                  placeholder={intl.formatMessage({
                    id: "COMMON.MESSAGE_TEXT",
                  })}
                ></textarea>
              </div>
            </div>

            <div className="col-lg-12">
              <button type="submit" className="back-btn">
                {intl.formatMessage({ id: "COMMON.SEND_MESSAGE" })}
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
                  className="feather feather-arrow-right"
                >
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
