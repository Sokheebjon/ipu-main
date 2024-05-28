import { useLocation } from "react-router-dom";
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
      <div className="profile-top back__course__area pt---120 pb---90">
        <div className="container">
          <div className="row">
            <div className="col-lg-3">
              <img
                src={require(`../../assets/images/instructor/${instructor.image}`)}
                alt={instructor.name}
                style={{
                  width: "100%",
                  objectFit: "cover",
                  maxWidth: "300px",
                  height: 320,
                  objectPosition: "100% 0",
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
                  <h4>Bo‘limning asosiy faoliyati</h4>
                  <p>
                    • Xorijiy mamlakatlar o‘quv yurtlari, ilm-fan markazlari,
                    xalqaro tashkilotlari bilan hamkorlik; <br />• Xalqaro
                    anjumanlar (uchrashuvlar, seminarlar, konferensiyalar,
                    simpoziumlar, yubiley sanalari) o‘tkazish; <br />• Xalqaro
                    ta’lim markazlarini ochish va faollashtirish; <br />
                    • Xalqaro dasturlarda ishtirok etish (loyihalar, grantlar,
                    stipendiyalar); <br /> • Iqtisodiyot va Pedagogika
                    Universiteti (IPU) vakillarini turli yo‘nalishlar bo‘yicha
                    xorijga malaka oshirish, umumiy ta’lim tizimi, ustuvor
                    yo‘nalishlar bo‘yicha zamonaviy ilm-fan yutuqlari bilan
                    tanishish maqsadida xizmat safarlariga yuborish.
                  </p>
                  <h4>1.Bo‘lim haqida:</h4>
                  <p>
                    • Xorijiy mamlakatlar o‘quv yurtlari, ilm-fan markazlari,
                    xalqaro tashkilotlari bilan hamkorlik; <br />• Xalqaro
                    anjumanlar (uchrashuvlar, seminarlar, konferensiyalar,
                    simpoziumlar, yubiley sanalari) o‘tkazish; <br />• Xalqaro
                    ta’lim markazlarini ochish va faollashtirish; <br />
                    • Xalqaro dasturlarda ishtirok etish (loyihalar, grantlar,
                    stipendiyalar); <br />• Iqtisodiyot va Pedagogika
                    Universiteti (IPU) vakillarini turli yo‘nalishlar bo‘yicha
                    xorijga malaka oshirish, umumiy ta’lim tizimi, ustuvor
                    yo‘nalishlar bo‘yicha zamonaviy ilm-fan yutuqlari bilan
                    tanishish maqsadida xizmat safarlariga yuborish.
                  </p>
                </>
              )}
              {lang == "ru" && (
                <>
                  <h4>Основные виды деятельности отдела</h4>
                  <p>
                    • Сотрудничество с зарубежными образовательными
                    учреждениями, научно-исследовательскими центрами,
                    международными организациями;
                    <br />• Организация международных мероприятий (встречи,
                    семинары, конференции, симпозиумы, юбилейные мероприятия);
                    <br />• Создание и развитие международных учебных центров;
                    <br />• Участие в международных программах (проекты, гранты,
                    стипендии);
                    <br />• Направление представителей Иктисодиёт ва Педагогика
                    Университети (ИПУ) для повышения квалификации в различных
                    областях, ознакомление с современными научными достижениями
                    в общей системе образования, приоритетными направлениями.
                  </p>
                  <h4>О отделе:</h4>
                  <p>
                    • Сотрудничество с зарубежными образовательными
                    учреждениями, научно-исследовательскими центрами,
                    международными организациями;
                    <br />• Организация международных мероприятий (встречи,
                    семинары, конференции, симпозиумы, юбилейные мероприятия);
                    <br />• Создание и развитие международных учебных центров;
                    <br />• Участие в международных программах (проекты, гранты,
                    стипендии);
                    <br />• Направление представителей Иктисодиёт ва Педагогика
                    Университети (ИПУ) для повышения квалификации в различных
                    областях, ознакомление с современными научными достижениями
                    в общей системе образования, приоритетными направлениями.
                  </p>
                </>
              )}
              {lang == "en" && (
                <>
                  <h4>Main Activities of the Department</h4>
                  <p>
                    • Collaboration with foreign educational institutions,
                    research centers, international organizations;
                    <br />• Organization of international events (meetings,
                    seminars, conferences, symposiums, anniversary
                    celebrations);
                    <br />• Establishment and development of international
                    training centers;
                    <br />• Participation in international programs (projects,
                    grants, scholarships);
                    <br />• Sending representatives of the Iqtisodiyot va
                    Pedagogika Universiteti (IPU) to foreign countries to
                    enhance expertise in various fields, familiarization with
                    modern scientific achievements in the general education
                    system, priority areas.
                  </p>
                  <h4>About the Department:</h4>
                  <p>
                    • Collaboration with foreign educational institutions,
                    research centers, international organizations;
                    <br />• Organization of international events (meetings,
                    seminars, conferences, symposiums, anniversary
                    celebrations);
                    <br />• Establishment and development of international
                    training centers;
                    <br />• Participation in international programs (projects,
                    grants, scholarships);
                    <br />• Sending representatives of the Iqtisodiyot va
                    Pedagogika Universiteti (IPU) to foreign countries to
                    enhance expertise in various fields, familiarization with
                    modern scientific achievements in the general education
                    system, priority areas.
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
