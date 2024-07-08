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
                  <h4>Asosiy vazifalari:</h4>
                  <p>
                    • Universitetda olib borilayotgan ilmiy-tadqiqot ishlarining
                    monitoringini olib borish; <br />• Fan doktori (DSc),
                    falsafa doktori (PhD) hamda ularning ilmiy yo‘nalishlari
                    to‘grisida ma’lumotlar bankini shakllantirish; <br />
                    • Scopus, Web of Science va boshqa xorijiy nashrlarga
                    maqolalar chop etish bo‘yicha ishlarni tashkil etish; <br />
                    • Oliy ta’lim, fan va innovatsiyalar vazirligi tomonidan
                    e’lon qilingan davlat grantlari, davlat ilmiy-texnik
                    dasturlari doirasidagi fundamental amaliy, innovatsion va
                    yosh olimlar) yo‘nalishlari tanlovlarga chet el grantlari
                    tanlovlarida universitet professor- o‘qituvchilarining
                    ishtirokini ta’minlash; <br />
                    • Universitetda xalqaro va Respublika miqyosida ilmiy-amaliy
                    anjumanlar, seminarlarni tashkillashtirish va
                    konferensiyalarni o‘tkazish; <br />
                    • Tayanch doktorant va mustaqil izlanuvchilar to‘g‘risida
                    yagona axborot bazasini shakllantirish, va monitoringini
                    olib borish, ularning dissertatsiya mavzularini universitet
                    kengashida tasdiqlash; <br />
                    • Universitetning ilmiy-tadqiqot ishlari bo‘yicha yillik
                    hisobotlarini o‘z vaqtida tayyorlash va Oliy ta’lim, fan va
                    innovatsiyalar vazirligiga taqdim etish; <br />
                    • O‘zbekiston Respublikasining ta’lim va sog‘liqni saqlashga
                    oid Qonunlari, Prezident Farmonlari, Farmoyishlari,
                    Qarorlari, Vazirlar Mahkamasining Qarorlari, Oliy ta’lim,
                    fan va innovatsiyalar vazirligining Hay’at Qarorlari,
                    buyruqlari, rektor buyruqlari ijrosini ta’minlash; <br />•
                    Nufuzli xorijiy oliy ta’lim muassalari bilan hamkorlik
                    aloqalarini o‘rnatish.
                  </p>
                </>
              )}

              {lang == "ru" && (
                <>
                  <h4>Основные задачи:</h4>
                  <p>
                    • Научно-исследовательские работы, проводимые в университете
                    мониторинг; <br />• Доктор наук (DSc), доктора философии
                    (PhD) и их научные направления формирование банка данных о;{" "}
                    <br />
                    • Scopus, Web of Science и другие зарубежные издания.
                    организация работы по публикации статей; <br />
                    • Министерством высшего образования, науки и инноваций.
                    объявлены государственные гранты, государственные
                    научно-технические фундаментальные практические,
                    инновационные и зарубежные гранты на конкурсы по
                    направлениям молодых ученых профессоров вузов на конкурсах
                    обеспечить участие; <br />
                    • Научно-практическая работа в университете международного и
                    республиканского масштаба. организация конференций,
                    семинаров и проведение конференций; <br />
                    • О базовых докторантах и ​​независимых исследователях
                    формирование и мониторинг единой информационной базы вести
                    свои диссертационные темы в университете одобрение в совете;{" "}
                    <br />
                    • Ежегодник университета по исследованиям и разработкам
                    своевременная подготовка отчетов и высшее образование, наука
                    и подача в Министерство инноваций; <br />
                    • Образование и здравоохранение Республики Узбекистан
                    Законы, Указы Президента, Указы, Постановления,
                    Постановления Кабинета Министров, Высшее образование,
                    Решения коллегии Министерства науки и инноваций, обеспечение
                    исполнения приказов, распоряжений ректора; <br />•
                    Сотрудничество с престижными зарубежными высшими учебными
                    заведениями установить связи.
                  </p>
                </>
              )}

              {lang == "en" && (
                <>
                  <h4>Main tasks:</h4>
                  <p>
                    • Scientific-research works conducted at the university
                    monitoring; <br />• Doctor of Science (DSc), doctor of
                    philosophy (PhD) and their scientific directions forming a
                    data bank about; <br />
                    • Scopus, Web of Science and other foreign publications
                    organizing work on publishing articles; <br />
                    • By the Ministry of Higher Education, Science and
                    Innovation announced state grants, state scientific and
                    technical fundamental practical, innovative and foreign
                    grants for competitions in the fields of young scientists of
                    university professors in competitions ensure participation;{" "}
                    <br />
                    • Scientific-practical at the university on an international
                    and republican scale organization of conferences, seminars
                    and conducting conferences; <br />
                    • About basic doctoral students and independent researchers
                    formation and monitoring of a single information base
                    conduct their dissertation topics at the university approval
                    in the board; <br />
                    • University's research and development annual timely
                    preparation of reports and higher education, science and
                    submission to the Ministry of Innovation; <br />
                    • Education and health care of the Republic of Uzbekistan
                    Laws, Presidential Decrees, Decrees, Decisions, Decisions of
                    the Cabinet of Ministers, Higher Education, Board Decisions
                    of the Ministry of Science and Innovation, ensuring the
                    execution of orders, rector's orders; <br />• Cooperation
                    with prestigious foreign higher education institutions
                    establish connections.
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
