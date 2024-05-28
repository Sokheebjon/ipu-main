import React, { useState } from "react";

import CountUp from "react-countup";
import { useIntl } from "react-intl";
import VisibilitySensor from "react-visibility-sensor";

const Counter = () => {
  const intl = useIntl();
  const [state, setState] = useState(true);

  const counters = [
    {
      countNum: 10000,
      plus: "+",
      countTitle: intl.formatMessage({
        id: "COMMON.STUDENTS",
      }),
      counterSubtext: "ENROLLED LEARNERS",
    },
    {
      countNum: 100,
      plus: "+",
      countTitle: intl.formatMessage({
        id: "COMMON.PROFESSOR_TEACHERS",
      }),
      counterSubtext: "COUNTRYWIDE AWARDS",
    },
    {
      countNum: 50,
      plus: "+",
      countTitle: intl.formatMessage({
        id: "COMMON.PHD_PROFESSORS",
      }),
      counterSubtext: "SUCCESS EVENTS",
    },
  ];

  return (
    <div className="count__area pb---110">
      <div className="container count__width">
        <div className="row">
          <div className="col-xxl-11 col-xl-11 col-lg-11 offset-lg-1">
            {counters && (
              <div className="row">
                {counters.map((counter, num) => (
                  <div
                    key={num}
                    className="col-xxl-4 col-xl-4 col-lg-4 col-md-4 col-sm-12 wow animate__fadeInUp"
                    data-wow-duration="0.3s"
                  >
                    <div className="count__content">
                      <p className="count__content--paragraph">
                        {counter.countTitle}
                      </p>
                      <h3 className="count__content--title-1 counter">
                        <CountUp
                          start={state ? 0 : counter.countNum}
                          end={counter.countNum}
                          duration={10}
                          onEnd={() => setState(false)}
                        />
                        {({ countUpRef, start }) => (
                          <VisibilitySensor onChange={start} delayedCall>
                            <span ref={countUpRef} />
                          </VisibilitySensor>
                        )}
                        {counter.plus}
                      </h3>
                      {/* <p className="count__content--paragraph2">
                        Enrolled Learners
                      </p> */}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
export default Counter;
