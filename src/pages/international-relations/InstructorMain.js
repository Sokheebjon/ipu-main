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
      title_uz: "XALQARO ALOQALAR",
      title_ru: "МЕЖДУНАРОДНЫЕ СВЯЗИ",
      title_en: "INTERNATIONAL RELATIONS",
      list: [
        {
          id: 13,
          url: "/instructor/13",
          text_uz: "Xalqaro hamkorlik bo'limi",
          text_ru: "Отдел международного сотрудничества",
          text_en: "International Cooperation Department",
        },
        {
          id: "#",
          url: "#",
          text_uz: "Xalqaro hamkor tashkilotlar",
          text_ru: "Международные партнерские организации",
          text_en: "International Partner Organizations",
        },
        {
          id: "#",
          url: "#",
          text_uz: "Xalqaro bo'lim yangiliklari",
          text_ru: "Новости международного отдела",
          text_en: "International Department Updates",
        },
        {
          id: "#",
          url: "#",
          text_uz: "Xorijlik professorlar fikri",
          text_ru: "Мнение иностранных профессоров",
          text_en: "Opinions of Foreign Professors",
        },
        {
          id: "#",
          url: "#",
          text_uz: "Erasmus+ Grantlar",
          text_ru: "Гранты Erasmus+",
          text_en: "Erasmus+ Grants",
        },
      ],
    },
  ];

  return (
    <>
      <div className="instructors___page">
        <div>
          <div
            className="row py-5"
            style={{
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
                      <Link to={item.url}>
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
