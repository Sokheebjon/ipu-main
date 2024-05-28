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
      url: "rahbariyat",
      title_uz: "Rahbariyat",
      title_ru: "Руководство",
      title_en: "Leadership",
      list: [],
    },
    {
      url: "instructor/6",
      title_uz: "Universitet kengashi",
      title_ru: "Университетский совет",
      title_en: "University Council",
      list: [],
    },
    {
      url: "tuzilma",
      title_uz: "Rektorat",
      title_ru: "Ректорат",
      title_en: "Rectorate",
      list: [
        {
          id: 38,
          text_uz: "Devonxona va arxiv",
          text_ru: "Отдел канцелярии и архива",
          text_en: "Office of Chancellery and Archives",
        },
        {
          id: 0,
          text_uz: "Matbuot xizmati",
          text_ru: "Пресс-служба",
          text_en: "Press Service",
        },
        {
          id: 17,
          text_uz:
            "Korrupsiyaga qarshi kurashish “komplaens-nazorat” tizimini boshqarish bo‘limi",
          text_ru:
            "Отдел управления системой контроля за борьбой с коррупцией и соблюдением стандартов",
          text_en:
            "Department for Managing the Compliance and Anti-corruption Oversight System",
        },
        {
          id: 15,
          text_uz:
            "Jismoniy va yuridik shaxslarning murojaatlari bilan ishlash, nazorat va monitoring bo‘limi",
          text_ru:
            "Отдел по работе с обращениями физических и юридических лиц, контролю и мониторингу",
          text_en:
            "Department for Dealing with Appeals from Individuals and Legal Entities, Control and Monitoring",
        },
        {
          id: 19,
          text_uz: "Xodimlar bo‘limi",
          text_ru: "Отдел кадров",
          text_en: "Human Resources Department",
        },
        {
          id: 12,
          text_uz: "Audit xizmati",
          text_ru: "Аудиторский отдел",
          text_en: "Audit Department",
        },
        {
          id: 0,
          text_uz: "Raqamli va axborot texnologiyalari markazi",
          text_ru: "Центр цифровых и информационных технологий",
          text_en: "Center for Digital and Information Technologies",
        },
      ],
    },
    {
      url: "tuzilma",
      title_uz: "Yoshlar masalalari va ma’naviy-ma’rifiy ishlar bo‘yicha",
      title_ru: "Отдел по вопросам молодежи и духовно-просветительской работы",
      title_en: "Department for Youth Affairs and Spiritual-Enlightenment Work",
      list: [
        {
          id: 0,
          text_uz: "Yoshlar bilan ishlash, ma’naviyat va ma’rifat bo‘limi",
          text_ru:
            "Отдел по работе с молодежью, духовно-нравственными и просветительскими вопросами",
          text_en:
            "Department for Working with Youth, Spiritual and Enlightenment Affairs",
        },
      ],
    },
    {
      url: "tuzilma",
      title_uz: "O‘quv ishlari bo‘yicha",
      title_ru: "Отдел по учебной работе",
      title_en: "Department of Educational Affairs",
      list: [
        {
          id: 20,
          text_uz: "O'quv uslubiy boshqarma boshlig'i",
          text_ru: "Отдел методического управления",
          text_en: "Methodological Department Head",
        },
        {
          id: 8,
          text_uz: "Sirtqi bo'lim boshlig'i",
          text_ru: "Заместитель заведующего отделением",
          text_en: "Deputy Head of Department",
        },
        {
          id: 0,
          text_uz: "Magistratura bo‘limi",
          text_ru: "Отдел магистратуры",
          text_en: "Master's Department",
        },
        {
          id: 18,
          text_uz: "Marketing va talabalar amaliyoti bo'limi",
          text_ru: "Отдел маркетинга и практики студентов",
          text_en: "Marketing and Student Practice Department",
        },
      ],
    },
    {
      url: "tuzilma",
      title_uz: "Ilmiy ishlar va innovatsiyalar bo‘yicha",
      title_ru: "Отдел по научным и инновационным делам",
      title_en: "Department of Scientific Affairs and Innovations",
      list: [
        {
          id: 23,
          text_uz:
            "Ilmiy tadqiqotlar, innovatsiyalar va ilmiy pedagogik kadrlar tayyorlash bo‘limi",
          text_ru:
            "Отдел научных исследований, инноваций и подготовки научно-педагогических кадров",
          text_en:
            "Department of Scientific Research, Innovations, and Preparation of Scientific and Pedagogical Personnel",
        },
        {
          id: 22,
          text_uz:
            "Iqtidorli talabalarning ilmiy-tadqiqot faoliyatini tashkil etish bo'limi",
          text_ru:
            "Отдел организации научно-исследовательской деятельности талантливых студентов",
          text_en:
            "Department for Organizing Scientific Research Activities of Talented Students",
        },
      ],
    },

    {
      url: "tuzilma",
      title_uz: "Uslubiy ta’minlash va ta’lim sifatini nazorat qilish bo‘yicha",
      title_ru:
        "Отдел по обеспечению методического обеспечения и контролю качества образования",
      title_en:
        "Department for Methodological Support and Quality Control of Education",
      list: [
        {
          id: 14,
          text_uz: "Ta’lim sifatini nazorat qilish bo‘limi",
          text_ru: "Отдел контроля качества образования",
          text_en: "Department for Quality Control of Education",
        },
        {
          id: 5,
          text_uz: "Axborot-resurs markazi",
          text_ru: "Информационно-ресурсный центр",
          text_en: "Information Resource Center",
        },
      ],
    },
    {
      url: "tuzilma",
      title_uz: "Moliya va iqtisod ishlari bo‘yicha",
      title_ru: "Отдел по финансовым и экономическим вопросам",
      title_en: "Department of Financial and Economic Affairs",
      list: [
        {
          id: 0,
          text_uz: "Texnik foydalanish va xo'jalik bo'limi",
          text_ru: "Отдел технического обеспечения и промышленности",
          text_en: "Department of Technical Support and Industry",
        },
        {
          id: 7,
          text_uz: "Reja-moliya bo'limi",
          text_ru: "Отдел по планированию и финансам",
          text_en: "Planning and Finance Department",
        },
        {
          id: 0,
          text_uz: "Buxgalteriya",
          text_ru: "Бухгалтерия",
          text_en: "Accounting Department",
        },
        {
          id: 0,
          text_uz: "Tibbiy bo'lim",
          text_ru: "Медицинский отдел",
          text_en: "Medical Department",
        },
        {
          id: 0,
          text_uz: "Fuqaro va mehnat muhofazasi bo‘limi",
          text_ru: "Отдел по защите прав потребителей и труда",
          text_en: "Consumer Rights and Labor Protection Department",
        },
      ],
    },
    {
      url: "tuzilma",
      title_uz: "Jamoat tashkilotlari",
      title_ru: "Общественные организации",
      title_en: "Community Organizations",
      list: [
        {
          id: 21,
          text_uz: "Xotin qizlar uyushmasi",
          text_ru: "Общество женщин-хозяек",
          text_en: "Housewives' Association",
        },
        {
          id: 77,
          text_uz: "Kasaba uyushmasi",
          text_ru: "Городское общество",
          text_en: "Town Association",
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
            {intl.formatMessage({ id: "COMMON.STRUCTURE" })}
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
                      {item.id == "0" ? (
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
                      ) : (
                        <Link to={`/instructor/${item.id}`}>
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
                      )}
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
