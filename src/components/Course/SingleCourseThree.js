import React from "react";
import { Link } from "react-router-dom";

import courseImg1 from "../../assets/images/course/1.png";
import coursetypeIcon from "../../assets/images/course/beg.png";

const SingleCourseThree = (props) => {
  const {
    itemClass,
    courseID,
    courseImg,
    courseTitle,
    courseDuration,
    courseLanguage,
  } = props;
  return (
    <div class={itemClass ? itemClass : "single-studies grid-item"}>
      <div class="inner-course">
        <div class="case-img">
          <img
            style={{
              height: 280,
              width: "100%",
              objectFit: "cover",
              objectPosition: "80% 100%",
              borderTopLeftRadius: "10px",
              borderTopRightRadius: "10px",
            }}
            src={
              courseImg
                ? require(`../../assets/images/course/${courseImg}`)
                : require(`../../assets/images/course/${courseImg1}`)
            }
            alt={courseTitle}
          />
        </div>
        <div class="case-content">
          <h4 class="case-title">
            {" "}
            <Link to={`/${courseID}`}>
              {courseTitle
                ? courseTitle
                : "The Most Complete Design Thinking Course On The Market."}
            </Link>
          </h4>
          <ul class="meta-course">
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
                class="feather feather-book"
              >
                <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path>
                <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path>
              </svg>{" "}
              {courseLanguage}{" "}
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
                class="feather feather-clock"
              >
                <circle cx="12" cy="12" r="10"></circle>
                <polyline points="12 6 12 12 16 14"></polyline>
              </svg>{" "}
              {courseDuration}
            </li>
            {/* <li><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-user"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg> {courseAuthor}</li> */}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SingleCourseThree;
