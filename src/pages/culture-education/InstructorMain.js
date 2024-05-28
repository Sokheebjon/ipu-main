import React from "react";
import { Link } from "react-router-dom";
import { getProductName } from "../../helpers/general";

const InstructorMain = () => {
  const lang = (
    JSON.parse(localStorage.getItem("i18nConfig")) || { selectedLang: "uz" }
  )?.selectedLang;

  const data = [
    {
      url: "research",
      title_uz: "MADANIY-MA’RIFIY FAOLIYAT",
      title_ru: "КУЛЬТУРНО-ПРОСВЕТИТЕЛЬНАЯ ДЕЯТЕЛЬНОСТЬ",
      title_en: "CULTURAL AND EDUCATIONAL ACTIVITIES",
      list: [
        {
          id: "#",
          text_uz: "Ma’naviyat rukni",
          text_ru: "Духовный уголок",
          text_en: "Spiritual Corner",
        },
        {
          id: "#",
          text_uz: "Sport klub hayoti",
          text_ru: "Жизнь спортивного клуба",
          text_en: "Life of the Sports Club",
        },
        {
          id: "#",
          text_uz: "Madaniy ma'rifiy tadbirlar",
          text_ru: "Культурно-просветительские мероприятия",
          text_en: "Cultural and Educational Events",
        },
        {
          id: "#",
          text_uz: "Talabalar hayoti",
          text_ru: "Студенческая жизнь",
          text_en: "Student Life",
        },
        {
          id: "#",
          text_uz: "Talabalar turar joylari",
          text_ru: "Места проживания студентов",
          text_en: "Student Accommodations",
        },
      ],
    },
  ];

  return (
    <>
      <div className="instructors___page">
        <div>
          <div
            className="row"
            style={{
              padding: "40px 0",
              background: "#00306e",
            }}
          >
            {data.map((d, index) => {
              return (
                <div className="es-list">
                  {getProductName(d, "title", lang) && (
                    <div className="w-100 mb-4">
                      <Link to={`/${d.url}`}>
                        <div className="container">
                          <p
                            style={{
                              fontSize: "45px",
                              color: "#fff",
                              margin: 0,
                              lineHeight: "45px",
                              fontWeight: 700,
                            }}
                          >
                            {getProductName(d, "title", lang)}
                          </p>
                        </div>
                      </Link>
                    </div>
                  )}

                  {d.list.map((item) => (
                    <div className="w-100 es-list-item py-2">
                      <Link to={`#`}>
                        <div className="container" style={{ height: "100%" }}>
                          <p
                            style={{
                              display: "flex",
                              alignItems: "center",
                              fontSize: "30px",
                              color: "#fff",
                              margin: 0,
                              lineHeight: "40px",
                              fontWeight: 700,
                              height: "100%",
                            }}
                          >
                            - {getProductName(item, "text", lang)}
                          </p>
                        </div>
                      </Link>
                    </div>
                  ))}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default InstructorMain;
