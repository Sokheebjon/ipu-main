import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import CountUp from "react-countup";
import VisibilitySensor from "react-visibility-sensor";

import countIcon1 from "../../assets/images/profile/2.png";
import countIcon2 from "../../assets/images/profile/3.png";
import countIcon3 from "../../assets/images/profile/4.png";

import courses from "../../data/Courses.json";
import instructors from "../../data/Instructors.json";

const InstructorDetailsMain = () => {
  const location = useLocation();
  const postURL = location.pathname.split("/");

  const instructor = instructors.find((b) => b.id === Number(postURL[2]));

  const [state, setState] = useState(true);

  const counters = [
    {
      countNum: 28,
      countTitle: "Foreign followers",
      countSubtext: "k",
      countIcon: countIcon1,
    },
    {
      countNum: 10,
      countTitle: "Classes complete",
      countSubtext: "k",
      countIcon: countIcon2,
    },
    {
      countNum: 208,
      countTitle: "Students enrolled",
      countSubtext: "k",
      countIcon: countIcon3,
    },
  ];

  return (
    <>
      <div className="profile-top back__course__area pt---120 pb---90">
        <div className="container">
          <div className="row">
            <div className="col-lg-3">
              <img
                src={require(`../../assets/images/instructor/${instructor.image}`)}
                alt={instructor.name}
                style={{
                  width: "100%",
                  objectFit: "cover",
                  maxWidth: "360px",
                  height: 350,
                }}
              />
              <div className="follows d-flex flex-column">
                Qabul vaqti
                <span>
                  Dushanba - Payshanba ({instructor.start_day}-
                  {instructor.end_day})
                </span>
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
                  className="feather feather-plus"
                >
                  <line x1="12" y1="5" x2="12" y2="19"></line>
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                </svg> */}
              </div>
            </div>
            <div className="col-lg-9">
              <ul className="user-section">
                <li className="user">
                  <span className="name">Ism:</span>
                  <em>{instructor.name}</em>
                </li>
                <li>
                  Lavozim:<em>{instructor.designation}</em>{" "}
                </li>
                <li>
                  Telefon:<em>{instructor.phone}</em>{" "}
                </li>
                <li>
                  Email:<em>{instructor.email}</em>{" "}
                </li>
                {/* <li className="social">
                    Kuzatish:{" "}
                    <em>
                      <Link to="#">
                        <span
                          aria-hidden="true"
                          className="social_facebook"
                        ></span>
                      </Link>
                      <Link to="#">
                        <span
                          aria-hidden="true"
                          className="social_twitter"
                        ></span>
                      </Link>
                      <Link to="#">
                        <span
                          aria-hidden="true"
                          className="social_linkedin"
                        ></span>
                      </Link>
                    </em>
                  </li> */}
              </ul>
               
              <p>{instructor.bio}</p>
              <p>
                {/* Only a quid me old mucker squiffy tomfoolery grub cheers ruddy
                cor blimey guvnor in my flat, up the duff Eaton car boot up the
                kyver pardon you A bit of how's your father David skive off
                sloshed, don't get shirty with me chip shop vagabond crikey
                bugger Queen's English chap. Matie boy nancy boy bite your arm
                off up the kyver old no biggie fantastic boot, David have it
                show off show off pick your nose and blow off lost the plot
                porkies bits and bobs only a quid bugger all mate. */}
              </p>
              {/* {counters && (
                <div className="count__area2">
                  <ul className="row">
                    {counters.map((counter, num) => (
                      <li key={num} className="col-lg-4">
                        <div className="count__content">
                          <div className="icon">
                            <img src={counter.countIcon} alt="profile" />
                          </div>
                          <div className="text">
                            <CountUp
                              start={state ? 0 : counter.countNum}
                              end={counter.countNum}
                              duration={10}
                              onEnd={() => setState(false)}
                            />
                            {({ countUpRef, start }) => (
                              <VisibilitySensor onChange={start} delayedCall>
                                <span ref={countUpRef} />
                                <span className="count__content-title counter">
                                  {counter.countNum}
                                </span>
                              </VisibilitySensor>
                            )}

                            <em>{counter.countSubtext}</em>
                            <p>{counter.countTitle}</p>
                          </div>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              )} */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default InstructorDetailsMain;
