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
                <div>
                  <h4 className="text-black">
                    Reja – moliya bo‘limi quyidagi ishlarni amalga oshiradi:
                  </h4>
                  <p>
                    • O‘zbekiston Respublikasining ta’limga oid Qonunlari,
                    Prezident Farmonlari, Farmoyishlari, Qarorlari, Vazirlar
                    Mahkamasining Qarorlari, Oliy va o‘rta maxsus ta’lim
                    vazirligining Hay’at Qarorlari, buyruqlari hamda bo‘lim
                    faoliyatiga oid universitet buyruqlarining bajarilishini
                    ta’minlash va monitoringini olib borish;
                    <br /> • Universitetning joriy va istiqbol ish rejalarini
                    tuzish va ularning ijrosini ta’minlash;
                    <br />• Universitetning moliyaviy faoliyatini rejalashtirish
                    va tashkil etilishini amalga oshirish;
                    <br />• Universitetning barcha moliyaviy smetalarini
                    tayyorlanishini ta’minlash;
                    <br />• Universitet shtat jadvali tuzilishini ta’minlash;
                    <br />• Moliyaviy faoliyatning barcha turlari bo‘yicha
                    istiqbolli va yillik daromadlar va xarajatlar smetasini
                    tuzishda rahbarlik qilish, nazoratini olib borish hamda
                    ijrosini ta’minlash;
                    <br />• Universitet ish faoliyatini ta’minlash uchun
                    ajratiladigan mehnat va pul resurslaridan hamda
                    to‘lov-shartnoma asosida ta’lim olayotgan talabalar hisobiga
                    kelib tushgan pul mablag‘laridan to‘g‘ri foydalanishni
                    ta’minlash va nazorat qilish;
                    <br />• Universitet ishchi-hodimlarini moddiy
                    rag‘batlantirish to‘g‘risidagi xujjatlar
                    rasmiylashtirilishida qatnashish;
                    <br />• Xo‘jalik shartnomalari va maxsus mablag‘lar smetasi
                    ijrosini doimiy ravishda nazorat qilish va samaradorligini
                    oshirish;
                    <br />• Universitet xodimlariga belgilanayotgan lavozim
                    maoshlarining tasdiqlangan razryad va ta’rif
                    koeffitsinetlariga mosligini muntazam ravishda nazorat qilib
                    borish;
                    <br />• Smetada ko‘rsatilgan mablag‘lardan o‘z maqsadlari
                    yo‘lida to‘g‘ri foydalanishni, o‘rinsiz yoki ortiqcha
                    xarajatga yo‘l qo‘ymaslikni ta’minlash;
                  </p>
                  <p>
                    Xarajatlar va daromadlar smetasini tuzishda O’zbekiston
                    Respublikasi Oliy va o‘rta maxsus ta’lim vaziriligi va
                    Moliya vazirliklari tomonidan tasdiqlangan namunaviy shtat
                    jadvali{" "}
                  </p>
                </div>
              )}
              {lang == "ru" && (
                <div>
                  <h4>План - отдел финансов осуществляет следующие работы:</h4>
                  <p>
                    • Обеспечение выполнения и мониторинг выполнения
                    университетскими приказами в рамках деятельности отдела
                    законов Республики Узбекистан о высшем образовании, указов
                    Президента, Постановлений, решений Кабинета Министров,
                    решений Верховного и среднего специального министерства
                    образования, постановлений и распоряжений отдела финансов
                    университета;
                    <br /> • Разработка и обеспечение выполнения текущих и
                    перспективных планов действий университета и их реализация;
                    <br />• Организация и реализация финансовой деятельности
                    университета;
                    <br />• Обеспечение подготовки всех финансовых отчетов
                    университета;
                    <br />• Обеспечение составления штатного расписания
                    университета;
                    <br />• Руководство и контроль за составлением и выполнением
                    бюджетов по всем видам финансовой деятельности университета,
                    включая доходы и расходы за год;
                    <br />• Обеспечение эффективного и правильного использования
                    трудовых и денежных ресурсов, выделенных для обеспечения
                    деятельности университета, а также контроль за их
                    использованием и учетом в соответствии с договором об оплате
                    обучения студентов;
                    <br />• Участие в официальном утверждении документов о
                    финансовом стимулировании сотрудников университета;
                    <br />• Постоянный контроль за соответствием утвержденных
                    разрядов и коэффициентов должностных окладов сотрудникам
                    университета;
                    <br />• Обеспечение правильного использования выделенных
                    средств в соответствии с их целями и предотвращение
                    нецелевых или излишних расходов.
                  </p>
                  <p>
                    В составлении бюджета доходов и расходов утвержденного
                    Министерствами образования и финансов Республики Узбекистан
                    образца
                  </p>
                </div>
              )}
              {lang == "en" && (
                <>
                  <h4>
                    Plan - Finance Department carries out the following tasks:
                  </h4>
                  <p>
                    • Ensuring the implementation and monitoring of the
                    execution by the university of orders within the framework
                    of the Department's activity of the laws of the Republic of
                    Uzbekistan on higher education, decrees of the President,
                    Resolutions of the Cabinet of Ministers, decisions of the
                    Supreme and Specialized Ministry of Education, resolutions
                    and directives of the university's finance department;
                    <br /> • Development and ensuring the implementation of
                    current and prospective action plans of the university and
                    their realization;
                    <br />• Organization and implementation of the financial
                    activities of the university;
                    <br />• Ensuring the preparation of all financial statements
                    of the university;
                    <br />• Ensuring the compilation of the university's
                    staffing schedule;
                    <br />• Supervision and control over the preparation and
                    implementation of budgets for all types of financial
                    activities of the university, including annual revenues and
                    expenses;
                    <br />• Ensuring the efficient and proper use of labor and
                    financial resources allocated to support the university's
                    activities, as well as monitoring their use and accounting
                    in accordance with the student tuition fee contract;
                    <br />• Participation in the official approval of documents
                    on financial incentives for university staff;
                    <br />• Continuous monitoring of the correspondence of
                    approved ranks and coefficients of salary grades to
                    university staff;
                    <br />• Ensuring the proper use of allocated funds in
                    accordance with their purposes and preventing non-targeted
                    or excessive expenditures.
                  </p>
                  <p>
                    In compiling the budget of revenues and expenditures
                    approved by the Ministries of Education and Finance of the
                    Republic of Uzbekistan
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
