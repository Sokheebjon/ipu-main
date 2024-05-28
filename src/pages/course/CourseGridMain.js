import SingleCourseThree from "../../components/Course/SingleCourseThree";
import courses from "../../data/Courses.json";
import { useIntl } from "react-intl";
import { getProductName } from "../../helpers/general";

const CourseGridMain = () => {
  const intl = useIntl();
  const lang = (
    JSON.parse(localStorage.getItem("i18nConfig")) || { selectedLang: "uz" }
  )?.selectedLang;

  return (
    <div className="react-course-filter back__course__page_grid pb---40 pt---110">
      <div className="container pb---70">
        <div className="row">
          {courses.map((data, index) => {
            return (
              <div key={index} className="col-lg-4">
                <SingleCourseThree
                  courseID={`departments/${data.id}`}
                  courseImg={`${data.image}`}
                  courseTitle={getProductName(data, "title", lang)}
                  courseDuration={getProductName(data, "formats", lang)}
                  courseLanguage={getProductName(data, "languages", lang)}
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default CourseGridMain;
