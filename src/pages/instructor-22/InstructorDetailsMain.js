import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import instructors from "../../data/Instructors.json";
import { useIntl } from "react-intl";
import { getProductName } from "../../helpers/general";

const InstructorDetailsMain = () => {
  const location = useLocation();
  const postURL = location.pathname.split("/");

  const instructor = instructors.find((b) => b.id === Number(postURL[2]));

  const intl = useIntl();
  const lang = (
    JSON.parse(localStorage.getItem("i18nConfig")) || { selectedLang: "uz" }
  )?.selectedLang;

  return (
    <>
      <div className="profile-top back__course__area pt---60 pb---30">
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
                  objectPosition: "100% 0"
                }}
              />
              <div className="follows">
                {intl.formatMessage({ id: "COMMON.RECEPTION_TIME" })} (
                {instructor.start_day}-{instructor.end_day})
              </div>
            </div>
            <div className="col-lg-9">
              <ul className="user-section">
                <li className="user">
                  <span className="name">
                    {intl.formatMessage({ id: "COMMON.NAME" })}:
                  </span>
                  <em>{getProductName(instructor, "name", lang)}</em>
                </li>
                <li>
                  {intl.formatMessage({ id: "COMMON.POSITION" })}:
                  <em>{getProductName(instructor, "designation", lang)}</em>
                </li>
                <li>
                  {intl.formatMessage({ id: "COMMON.TELEPHONE" })}:
                  <em>{instructor.phone}</em>
                </li>
                <li>
                  {intl.formatMessage({ id: "COMMON.EMAIL" })}:
                  <em>{instructor.email}</em>
                </li>
              </ul>

              {lang == "uz" && (
                <>
                  <h4>
                    Iqtidorli talabalarning ilmiy-tadqiqot faoliyatini tashkil
                    etish bo‘limi
                  </h4>
                  <p>
                    Bo‘lim universitetda tahsil olayotgan iqtidorli talaba va
                    magistrlarning ilmiy faoliyatini tashkil etish bilan
                    shug‘ullanadi.
                  </p>
                  <h4>Bo‘limning tarkibi: 1 nafar bo‘lim boshlig‘i </h4>
                  <h4>Bo‘limning funksional vazifalari: </h4>
                  <p>
                    - iqtidorli talabalarni izlash va aniqlashni tashkil etish;{" "}
                    <br />
                    - iqtidorli talabalarni intellektual salohiyatini aniqlab
                    borish; <br />- iqtidorli talabalarni qobiliyati va qanday
                    yo‘nalishga moyilligiga qarab maqsadli tayyorlashni tashkil
                    etish; <br />
                    - iqtidorli talabalar uchun O‘zbekiston tarixi, chet tili,
                    axborot texnologiyalari va internetdan foydalanish bo‘yicha
                    maxsus mashg‘ulotlarni tashkil etish; <br />
                    - iqtidorli talabalarni fundamental ilmiy tadqiqot
                    ishlariga, ilmiy to‘garaklarga va ijodiy jamoalariga jalb
                    qilish; <br />
                    - iqtidorli talabalarni ilmiy va amaliy anjumanlarga,
                    universitet, universitetlararo, Respublika va xalqaro
                    konferensiya, simpozium, olimpiada va tanlovlarda
                    qatnashishlarini tashkil etish; <br />- iqtidorli talabalar
                    orasidan O‘zbekiston Respublikasi Prezidentining Davlat
                    stipendiyasi va nomli Davlat stipendiyalariga, fan
                    olimpiadalariga nomzodlarni tayyorlash; <br />
                    - O‘zbekiston Respublikasi Prezidenti granti uchun
                    ajratilgan qabul kvotalarining ta’lim sohalari kesimidagi
                    taqsimoti bo‘yicha tanlovlarda nomzodlar ishtirokini tashkil
                    etish; <br />
                    - reytingi yuqori iqtidorli talabalar va ularning
                    rahbarlarini moddiy va ma’naviy qo‘llab-quvvatlash; <br />
                    - iqtidorli talabalarni ilm-fan namoyondalari, universitet
                    rahbarlari, tajribali professor-o‘qituvchilar bilan davra
                    suhbatlarini tashkil etish. <br />
                  </p>
                </>
              )}

              {lang == "ru" && (
                <>
                  <h4>
                    Организация научно-исследовательской деятельности
                    талантливых студентов отделение
                  </h4>
                  <p>
                    На кафедре талантливый студент учится в университете и путем
                    организации научной деятельности магистров занимается.
                  </p>
                  <h4>Состав отдела: 1 руководитель отдела</h4>
                  <h4>Функциональные задачи отдела: </h4>
                  <p>
                    - организация поиска и выявления талантливых студентов;
                    <br />
                    - выявление интеллектуального потенциала одаренных учащихся
                    идти <br />
                    - способности и направление талантливых учеников организация
                    целевого обучения в зависимости от склонностей; <br />
                    - история Узбекистана, иностранный язык для талантливых
                    студентов, по информационным технологиям и использованию
                    Интернета организация специальных тренингов; <br />
                    - талантливые студенты для фундаментальных научных
                    исследований, участие в научных кружках и творческих
                    коллективах; <br />
                    - талантливых студентов на научно-практические конференции,
                    университетские, межвузовские, национальные и международные
                    на конференциях, симпозиумах, олимпиадах и конкурсах
                    организация их участия; <br />- талантливые студенты
                    Состояние Президента Республики Узбекистан стипендии и
                    именные государственные стипендии, наука подготовка
                    кандидатов к олимпиадам; <br />
                    - Выделено на грант Президента Республики Узбекистан
                    Распределение квот приема по отраслям образования
                    организация участия кандидатов в конкурсах по; <br />
                    - талантливые студенты и их лидеры материальная и моральная
                    поддержка; <br />- талантливые студенты науки, вуза кружок с
                    лидерами, опытными профессорами и преподавателями
                    организация бесед. <br />
                  </p>
                </>
              )}

              {lang == "en" && (
                <>
                  <h4>
                    Organization of scientific-research activities of talented
                    students department
                  </h4>
                  <p>
                    The department is a talented student studying at the
                    university and by organizing the scientific activity of
                    masters is engaged in.
                  </p>
                  <h4>
                    The composition of the department: 1 head of the department{" "}
                  </h4>
                  <h4>Functional tasks of the department: </h4>
                  <p>
                    - organizing the search and identification of talented
                    students;
                    <br />
                    - identifying the intellectual potential of gifted students
                    to go <br />
                    - ability and direction of talented students organization of
                    targeted training depending on the inclination; <br />
                    - history of Uzbekistan, foreign language for talented
                    students, on information technology and Internet use
                    organization of special trainings; <br />
                    - talented students for fundamental scientific research,
                    involvement in scientific circles and creative teams; <br />
                    - talented students to scientific and practical conferences,
                    university, inter-university, national and international at
                    conferences, symposiums, Olympiads and competitions
                    organizing their participation; <br />- talented students
                    State of the President of the Republic of Uzbekistan
                    scholarship and named State scholarships, science
                    preparation of candidates for Olympiads; <br />
                    - Allocated for the grant of the President of the Republic
                    of Uzbekistan distribution of admission quotas by
                    educational sectors organizing the participation of
                    candidates in competitions on; <br />
                    - highly talented students and their leaders material and
                    moral support; <br />
                    - talented students of science, university circle with
                    leaders, experienced professors and teachers organizing
                    conversations. <br />
                  </p>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default InstructorDetailsMain;
