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
      title_uz: "ILMIY FAOLIYAT",
      title_ru: "НАУЧНАЯ ДЕЯТЕЛЬНОСТЬ",
      title_en: "SCIENTIFIC ACTIVITY",
      list: [
        {
          id: "#",
          text_uz: "Ilmiy kengash",
          text_ru: "Научный совет",
          text_en: "Scientific Council",
        },
        {
          id: "#",
          text_uz: "Yosh olimlar",
          text_ru: "Молодые ученые",
          text_en: "Young Scholars",
        },
        {
          id: "#",
          text_uz: "Ilmiy loyihalar",
          text_ru: "Научные проекты",
          text_en: "Research Projects",
        },
        {
          id: "#",
          text_uz: "Ilmiy maktablar",
          text_ru: "Научные школы",
          text_en: "Research Schools",
        },
        {
          id: "#",
          text_uz: "Doktorantura",
          text_ru: "Докторантура",
          text_en: "PhD Programs",
        },
        {
          id: "#",
          text_uz: "Avtoreferat",
          text_ru: "Автореферат",
          text_en: "Abstract",
        },
        {
          id: "#",
          text_uz: "Ilmiy konferensiyalar",
          text_ru: "Научные конференции",
          text_en: "Scientific Conferences",
        },
        {
          id: "#",
          text_uz: "Konferensiya to'plamlari",
          text_ru: "Сборники конференций",
          text_en: "Conference Proceedings",
        },
        {
          id: "#",
          url: "https://kmisj.uz/index.php/kmisj/index",
          text_uz: "IPU ilmiy jurnallari",
          text_ru: "Научные журналы ВУЗов",
          text_en: "University Scientific Journals",
        },
        {
          id: "#",
          url: "http://www.ietisociety.org/ius.html",
          text_uz: "Ilmiy Tadqiqot Institutlari",
          text_ru: "Научные исследовательские институты",
          text_en: "Research Institutes",
        },
        {
          id: "#",
          text_uz: "Iqtidorli talabalar",
          text_ru: "Талантливые студенты",
          text_en: "Talented Students",
        },
        {
          id: "#",
          text_uz: "Xorijiy ilmiy-tadqiqot jamoasi",
          text_ru: "Отдел международных научных исследовательских сообществ",
          text_en:
            "Department of International Scientific Research Communities",
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
                      <a href={item.url ? `${item.url}` : "/"} target="_blank">
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
                      </a>
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
