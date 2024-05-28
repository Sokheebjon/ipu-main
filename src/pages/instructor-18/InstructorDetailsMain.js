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
                <>
                  <h4 className="text-black">Bo‘limning asosiy faoliyati</h4>
                  <p>
                    Universitetda “Marketing xizmati bo‘limi” 2022-yilda tashkil
                    etilgan bo‘lib, ushbu bo‘lim orqali universitet hamda ishlab
                    chiqarish korxonalari o‘rtasida uzviy aloqalar yo‘lga
                    qo‘yilgan. Bo‘limning asosiy vazifalaridan biri talabalarni
                    qabul qilish ko‘rsatkichlarini aniqlash maqsadida ish
                    beruvchilar (korxona va tashkilotlar)ning barcha ta’lim
                    yo‘nalishlari yoki mutaxassisliklariga bo‘lgan talablari,
                    (buyurtmalari) inobatga olingan holda to‘lov shartnomalari
                    asosida “Buyurtmalar portfeli“ ni shakllantirish.
                    Universitet bitiruvchilarini ish o‘rinlariga joylashtirish
                    bo‘yicha komissiya tuzish, joylashtirish komissiyasi
                    tomonidan ish beruvchi muassasa, korxona va tashkilotlarning
                    kadrlarga bo‘lgan real talabiga muvofiq bitiruvchilarni
                    ishga joylashtirish rejasini (dastlabki aniqlangan) ishlab
                    chiqish va yakunlovchi joylashtirishni o‘tkazish, ularning
                    natijasi bo‘yicha bitiruvchilarni yakka joylashtirish
                    tizimini tuzish va umumiylashtirish. Bakalavriat
                    yo‘nalishlari va magistratura mutaxassisliklari bo‘yicha
                    talabalarning kasb mohirligini orttirish va bitiruvchilarni
                    ishga joylashtirishda universitetning tegishli bo‘limlari
                    (universitet kengashi, metodik kengashlar, ilmiy-metodik
                    bo‘limlar, fakultetlar, kafedralar, v.h.k.) bilan ishlash
                    ular tomonidan amalga oshirilgan ishlarning sifatini tahlil
                    qilish va baholashda qatnashish, marketing siyosatini amalga
                    oshirishda tegishli bo‘limlar xizmatini muvofiqlashtirish.
                    Korxona, tashkilot va muassasalar talaba va universitet
                    o‘rtasida to‘lov-kontrakt (uch tomonlama) hamda talaba va
                    universitet o‘rtasida to‘lov-kontrakt (ikki tomonlama)
                    asosida mutaxassis tayyorlash bo‘yicha shartnomalarni
                    rasmiylashtirish; To‘lov – shartnoma asosida o‘qiyotgan
                    talabalarga o‘qish bo‘yicha xarajatlarni o‘z vaqtida
                    to‘latish ishlarini olib borish (kafedra mudirlari va
                    dekanlar bilan birgalikda); To‘lov – shartnoma asosida
                    o‘qiyotgan talabalarning soni haqida ma’lumot tayyorlash
                    (reja asosida kadrlar bo‘limi bilan birgalikda); Amaliyot –
                    talabalarning malakaviy amaliyotini tashkillashtirish
                    (kafedralar bilan birgalikda)
                  </p>
                </>
              )}
              {lang == "ru" && (
                <>
                  <h4 className="text-black"> Основная деятельность отдела</h4>
                  <p>
                    В 2022 году в университете был создан «Отдел маркетинговой
                    службы», через которую были налажены органичные связи между
                    университетом и производственными предприятиями. Одной из
                    основных задач отдела является учет требований, (заказов)
                    работодателей (предприятий и организаций) по всем
                    направлениям образования или специальностям с целью
                    определения показателей приема студентов, на основании
                    договоров об оплате труда формировать «Портфель заказов».
                    Создание комиссии по трудоустройству выпускников вузов,
                    разработка комиссией по трудоустройству (предварительно
                    определяемой) плана трудоустройства выпускников в
                    соответствии с реальной потребностью в кадрах учреждений,
                    предприятий и организаций-работодателей и проведение
                    итогового трудоустройства, их результаты - создание и
                    обобщение системы индивидуального трудоустройства
                    выпускников. Работа с профильными подразделениями вуза
                    (совет университета, методические советы,
                    научно-методические отделы, факультеты, кафедры и др.) по
                    приобретению профессиональных навыков обучающихся по
                    направлениям бакалавриата и магистратуры и трудоустройству
                    выпускников участие в анализе качества и оценка, координация
                    службы соответствующих отделов в реализации маркетинговой
                    политики. Оформление договоров о подготовке специалистов на
                    платной основе (трехсторонняя) и между обучающимся и вузом
                    (двусторонняя); Оплата - своевременная оплата стоимости
                    обучения студентам, обучающимся на договорной основе
                    (совместно с заведующими кафедрами и деканами); Оплата -
                    подготовка информации о количестве обучающихся на основании
                    договора (совместно с отделом кадров по плану) Практика -
                    организация профессиональной практики студентов (совместно с
                    кафедрами)
                  </p>
                </>
              )}
              {lang == "en" && (
                <>
                  <h4 className="text-black">
                    The main activity of the department
                  </h4>
                  <p>
                    The "Marketing Service Department" was founded at the
                    university in 2022, and through this section, close
                    relations between the university and manufacturing
                    enterprises have been established. One of the main tasks of
                    the department is the requirements of employers (enterprises
                    and organizations) to all educational directions or
                    specialties in order to determine the reception indicators,
                    (orders) "Portfoline of Orders Forming ". Conducting
                    university graduates on the establishment, deposition of
                    graduates in accordance with the realization of graduates,
                    enterprises, enterprises and organizations, result, results
                    in their result Development and generalization of a system
                    of graduated placement of graduates. The work done by them
                    in working with the professor skills of students and
                    graduates in the field of undergraduate and master's
                    specialties (university council, and scientific and
                    methodical departments, faculty, departments, faculty,
                    departments, professors) Coordinating the services of the
                    relevant departments in the analysis and assessment of the
                    quality of quality, implementing marketing policy. Execution
                    of contracts on the enterprise, organizations and
                    institution, the student and the university on the basis of
                    payment and contracts and contracts (bilateral) among
                    students and the university; Payment - to carry out timely
                    payments of the costs of studying on a contract (joint with
                    the heads of the department and deans); Payment for
                    information about the number of students studying on a
                    contract (joint together with the staff department)
                    Organization of qualifying practical practices of
                    internships (joint with the departments)
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
