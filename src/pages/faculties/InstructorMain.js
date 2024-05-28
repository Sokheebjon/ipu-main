import React from "react";
import { useIntl } from "react-intl";
import { Link } from "react-router-dom";
import { getProductName } from "../../helpers/general";

const InstructorMain = () => {
  const intl = useIntl();
  const lang = (
    JSON.parse(localStorage.getItem("i18nConfig")) || { selectedLang: "uz" }
  )?.selectedLang;

  const data = [
    {
      url: "faculties/12",
      title_uz: "Axborot texnologiyalari va raqamli iqtisodiyot fakulteti",
      title_ru: "Факультет информационных технологий и цифровой экономики",
      title_en: "Faculty of Information Technologies and Digital Economy",
      list: [
        {
          id: "1",
          text_uz: "Fakultetlararo xorijiy tillar kafedrasi",
          text_ru: "Кафедра международных языков факультетов",
          text_en: "Department of International Languages of Faculties",
        },
        {
          id: "2",
          text_uz: "Iqtisodiyot kafedrasi",
          text_ru: "Кафедра экономики",
          text_en: "Department of Economics",
        },
        {
          id: "3",
          text_uz: "Jismoniy madaniyat va sport kafedrasi",
          text_ru: "Кафедра физической культуры и спорта",
          text_en: "Department of Physical Culture and Sports",
        },
        {
          id: "4",
          text_uz: "Kompyuter tizimlari kafedrasi",
          text_ru: "Кафедра компьютерных систем",
          text_en: "Department of Computer Systems",
        },
        {
          id: "5",
          text_uz: "Neft va gaz ishi kafedrasi",
          text_ru: "Кафедра нефти и газа",
          text_en: "Department of Oil and Gas",
        },
        {
          id: "6",
          text_uz: "Tarix va ijtimoiy fanlar kafedrasi",
          text_ru: "Кафедра истории и социальных наук",
          text_en: "Department of History and Social Sciences",
        },
        {
          id: "7",
          text_uz: "Umummetodologik fanlar kafedrasi",
          text_ru: "Кафедра общеметодологических наук",
          text_en: "Department of General Methodological Sciences",
        },
      ],
    },
    {
      url: "faculties/11",
      title_uz: "Xorijiy tillar va jismoniy madaniyat fakulteti",
      title_ru: "Факультет иностранных языков и физической культуры",
      title_en: "Faculty of Foreign Languages and Physical Culture",
      list: [
        {
          id: "8",
          text_uz: "O‘zbek tili va adabiyoti kafedrasi",
          text_ru: "Кафедра узбекского языка и литературы",
          text_en: "Department of Uzbek Language and Literature",
        },
        {
          id: "9",
          text_uz: "Pedagogika va o‘qitish metodikasi kafedrasi",
          text_ru: "Кафедра педагогики и методики обучения",
          text_en: "Department of Pedagogy and Teaching Methodology",
        },
        {
          id: "10",
          text_uz: "Xorijiy tillar kafedrasi",
          text_ru: "Кафедра иностранных языков",
          text_en: "Department of Foreign Languages",
        },
      ],
    },
  ];

  return (
    <>
      <div className="instructors___page">
        <div className="container">
          <h3
            className="text-center"
            style={{
              fontSize: "50px",
              margin: "0px",
              lineHeight: "45px",
              fontWeight: "700",
              margin: "50px 0",
            }}
          >
            {intl.formatMessage({ id: "COMMON.FACULTIES" })}
          </h3>
        </div>

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
                      <Link to={item.id}>
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
