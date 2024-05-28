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
                  maxWidth: "310px",
                  height: 300,
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
                  <h4>Audit xizmati vazifalari:</h4>
                  <p>
                    • Universitetning to‘lov-kontrakt va byudjetdan tashqari
                    mablag‘lari bo‘yicha shtatlar jadvallari, daromadlar va
                    xarajatlar smetalarini amaldagi me’yoriy xujjatlarga mos
                    ravishda tuzilishi, tasdiqlanishi va ularning ijrosini
                    nazorat qilish;
                    <br />• Universitetning to‘lov-kontrakt mablag‘larini
                    shakllantirilishi, talabalardan to‘lov-konrakt mablag‘larini
                    undirish hisobini yuritilishi, to‘lovlarni o‘z vaqtida
                    undirilishi, qarzdorliklar xisobining to‘g‘riligi bo‘yicha
                    o‘rganishlar o‘tkazish;
                    <br />• Universitetning xarajatlar samaradorligi va
                    natijadorligini baholash hamda ichki audit faoliyati
                    sohasidagi hujjatlar ijrosini ta’minlash;
                    <br />• Qonunchilik hujjatlariga rioya etilishini tahlil
                    qilish va baholash;
                    <br />• Ish xaqi va unga tenglashtirilgan to‘lovlarni
                    to‘g‘ri xisoblanishi va to‘lanishini monitoring qilib
                    borish, shuningdek, dars soatlarini bajarilishi, xodimlar
                    tomonidan ish xajmlarini bajarilishini o‘rganish;
                    <br />• Universitetning extiyoji uchun to‘lov-kontrakt va
                    byudjetdan tashqari mablag‘lari hisobidan asosiy vositalar,
                    tovar (ish, xizmat)larni xarid qilinishi monitoring qilish
                    va imzolangan shartnomalar bo‘yicha shartlarning
                    bajarilishini nazorat qilish;
                    <br />• Universitetning mavjud resurslaridan oqilona
                    foydalanish orqali xarajatlarning samaradorligi va
                    natijadorligini oshirish;
                    <br />• Universitetni tashkilotlar o‘rtasidagi debitor va
                    kreditor qarzlariga yo‘l qo‘ymaslik va ular ustidan nazorat
                    olib borish;
                    <br />• Hizmat faoliyati va amalga oshirilgan ishlar
                    bo‘yicha muntazam ravishda rahbarga o‘rnatilgan tartibda
                    ma’lumot va hisobot berib borish;
                    <br />• Ish beruvchining qonuniy buyruq va farmoyishlarini
                    bajarish;
                    <br />• Mehnatni muhofaza qilish, xavfsizlik texnikasi va
                    ishlab chiqarish sanitariyasi talablariga rioya qilish;
                    <br />• Lavozim (vazifa) yo‘riqnomasiga rioya qilish.
                  </p>
                </>
              )}

              {lang == "ru" && (
                <>
                  <h4>Обязанности аудиторской службы:</h4>
                  <p>
                    • Организация, утверждение и контроль исполнения
                    университетом штатных расписаний, доходов и расходов по
                    внебюджетным средствам в соответствии с действующими
                    нормативными документами, а также контроль за их
                    выполнением;
                    <br />• Оформление договоров о платном обучении, учет и
                    своевременное взимание оплаты согласно договорам, анализ
                    задолженностей и проверка корректности расчетов;
                    <br />• Оценка эффективности и результативности расходов
                    университета, обеспечение выполнения внутренней аудиторской
                    деятельности;
                    <br />• Анализ и оценка соблюдения законодательства;
                    <br />• Мониторинг и коррекция правильности расчета и уплаты
                    заработной платы, а также выполнение учебных часов и
                    исполнение работ сотрудниками;
                    <br />• Контроль за закупкой основных средств, товаров
                    (работ, услуг) за внебюджетные средства в целях
                    удовлетворения потребностей университета и контроля
                    выполнения условий подписанных договоров;
                    <br />• Повышение эффективности и результативности расходов
                    за счет рационального использования имеющихся ресурсов
                    университета;
                    <br />• Контроль за несовершением дебиторских и кредиторских
                    задолженностей между организациями;
                    <br />• Предоставление руководству регулярной информации и
                    отчетности о деятельности и выполненных работах;
                    <br />• Исполнение законных распоряжений и указаний
                    работодателя;
                    <br />• Соблюдение требований охраны труда, техники
                    безопасности и санитарии труда;
                    <br />• Проверка соответствия должностных инструкций.
                  </p>
                </>
              )}

              {lang == "en" && (
                <>
                  <h4>Audit Service Duties:</h4>
                  <p>
                    • Organization, approval, and monitoring of the university's
                    staffing schedules, revenues, and expenditures for
                    non-budgetary funds in accordance with applicable regulatory
                    documents, as well as monitoring their implementation;
                    <br />• Preparation of contracts for tuition fees,
                    accounting and timely collection of payments according to
                    contracts, analysis of arrears, and verification of the
                    correctness of calculations;
                    <br />• Assessment of the effectiveness and efficiency of
                    the university's expenditures, ensuring the implementation
                    of internal audit activities;
                    <br />• Analysis and assessment of compliance with
                    legislation;
                    <br />• Monitoring and correction of the correctness of
                    salary calculations and payments, as well as the completion
                    of teaching hours and performance of work by employees;
                    <br />• Control over the procurement of major assets, goods
                    (works, services) for non-budgetary funds to meet the needs
                    of the university and control the fulfillment of the terms
                    of signed contracts;
                    <br />• Increasing the efficiency and effectiveness of
                    expenditures through the rational use of available
                    university resources;
                    <br />• Control over the non-incurrence of debtor and
                    creditor debts between organizations;
                    <br />• Providing regular information and reporting to
                    management on activities and work performed;
                    <br />• Execution of lawful orders and directives of the
                    employer;
                    <br />• Compliance with labor protection, safety, and
                    occupational health requirements;
                    <br />• Compliance with job descriptions.
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
