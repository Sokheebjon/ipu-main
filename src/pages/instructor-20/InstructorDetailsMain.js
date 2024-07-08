import { useLocation } from "react-router-dom";
import instructors from "../../data/Instructors.json";
import { getProductName } from "../../helpers/general";
import { useIntl } from "react-intl";

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
                <>
                  <h4>O‘quv-uslubiy boshqarmaning asosiy faoliyati.</h4>
                  <p>
                    O‘quv-uslubiy boshqarma Oliy ta’lim muassasasining tarkibiy
                    bo‘limi hisoblanadi va oliygoh Nizomi asosida faoliyat
                    ko‘rsatadi. O‘quv-uslubiy boshqarma o‘z faoliyatida
                    universitet rektori buyruqlari va ko‘rsatmalariga
                    asoslanadi. <br />
                  </p>
                  <p>
                    O‘quv-uslubiy boshqarma quyidagi ishlarni amalga oshiradi:{" "}
                    <br />
                    • universitetning o‘quv ishlarini boshqaradi, O‘zbekiston
                    Respublikasi Oliy taʼlim, fan va innovatsiyalar vazirligi
                    o‘rnatgan tartibda o‘quv rejalari va dasturlariga muvofiq
                    ravishda o‘quv jarayonini tashkil qiladi; <br />• zamon
                    talablariga muvofiq holda o‘quv rejalari va dasturlarini
                    takomillashtirish bo‘yicha ish olib boradi; <br />
                    • fakultetlar o‘quv rejasida aks etgan ta’lim maqsadlarini
                    o‘rnatadi; <br />
                    • zamonaviy baholash usullari, jumladan reyting tizimiga
                    asoslangan yozma ish usuli, og‘zaki, testlar orqali
                    talabalarning bilim va malaka darajalarini amaldagi Nizom
                    talablari asosida baholanishini nazorat qiladi. Mazkur
                    nazorat natijalari asosida o‘quv tematik rejalarga
                    aniqliklar kiritadi, talabalar bilan individual ishlash
                    shakllarini aniqlaydi; <br />• uinversitet
                    professor-o‘qituvchilarining tarkibini va ularning o‘quv
                    rejalari va yuklamalarining bajarilishini nazorat qiladi;{" "}
                    <br />
                    • soatbay to‘lov asosidagi va o‘rindosh o‘qituvchilar o‘quv
                    yuklamalarini belgilaydi; <br />• professor-o‘qituvchilar
                    tarkibining zamonaviy va innovatsion tajribalarini o‘rganadi
                    va umumlashtiradi; <br />• fakultetlarda o‘quv jarayonining
                    tashkil qilinishini tekshirib boradi, nazorat natijalari
                    bo‘yicha aniqlangan kamchiliklarni bartaraf etish maqsadida
                    dekanlar e’tiboriga havola etadi; <br />• yangi o‘quv
                    rejalarining ishlab chiqilishini tashkil etadi; <br />
                    • o‘quv jarayoni jadvalini ishlab chiqadi va ishchi o‘quv
                    rejalarini ishlab chiqishni tashkil qiladi; <br />
                    • mashg‘ulotlar jadvalini tuzishni tashkil etadi va ularni
                    tuzish bo‘yicha metodik rahbarlik qiladi; <br />
                    • universitet o‘qituvchilarining o‘quv soatlarini tahlil
                    qiladi va o‘qituvchilarni fakultetlarga taqsimlash bo‘yicha
                    takliflar kiritadi; <br />• o‘quv auditoriyalar fondini
                    fakultetlar orasida taqsimlaydi; <br />
                    • o‘quv mashg‘ulotlari yuzasidan joriy dispetcherlik
                    nazoratini olib boradi; <br />
                    • kafedra filiallari tuzish ishida qatnashadi; <br />
                    • professor-o‘qituvchilar tarkibi haqidagi ma’lumotlar
                    bankini tashkil qiladi; <br />
                    • O‘zbekiston Respublikasi Oliy taʼlim, fan va
                    innovatsiyalar vazirligi tasdiqlagan qoida asosida
                    talabalarning pedagogik va ishlab chiqarish amaliyotini
                    umumiy tarzda boshqaradi va amaliyot rejalarining
                    bajarilishini nazorat qiladi; <br />• kafedralar ish
                    faoliyatini o‘rganadi va tajribalarini umumlashtiradi.
                    Kafedralar faoliyati maqsadga muvofiqligi va yangi
                    kafedralar ochish haqidagi takliflarni kiritadi. <br />
                  </p>
                </>
              )}

              {lang == "ru" && (
                <>
                  <h4>Основная деятельность учебно-методического отдела.</h4>
                  <p>
                    Учебно-методический отдел является составной частью высшего
                    учебного заведения. считается кафедрой и действует на
                    основании Устава университета шоу. Учебно-методический отдел
                    в своей деятельности к приказам и указаниям ректора
                    университета основан на <br />
                  </p>
                  <p>
                    Учебно-методический отдел осуществляет следующую
                    деятельность: <br />
                    • руководит воспитательной работой университета, Узбекистан
                    Министерство высшего образования, науки и инноваций
                    Республики Казахстан в соответствии с образовательными
                    планами и программами организует учебный процесс; <br />•
                    время учебные планы и программы в соответствии с
                    требованиями работает над улучшением; <br />
                    • образовательные цели, отраженные в учебных программах
                    факультетов устанавливает; <br />
                    • современные методы оценки, включая рейтинговую систему на
                    основе письменного метода работы, устно, посредством тестов
                    Действующее регулирование уровня знаний и квалификации
                    студентов контролирует оценку на основе требований. Это оно
                    к учебным тематическим планам по результатам контроля делает
                    разъяснения, индивидуальную работу со студентами определяет
                    формы; <br />• Университет состав
                    профессорско-преподавательского состава и их подготовка
                    контролирует выполнение планов и загрузок ;
                    <br />
                    • почасовая оплата и замещающее обучение учителей определяет
                    загрузки; <br />• профессора и преподаватели изучает
                    современный и инновационный опыт своих членов и подводит
                    итоги; <br />• учебного процесса на факультетах проверяет
                    организацию, контролирует результаты с целью устранения
                    выявленных недостатков доводит до сведения деканов; <br />•
                    новое исследование организует разработку планов; <br />
                    • разрабатывает график учебного процесса и рабочих
                    тренировок организует разработку планов; <br />
                    • организует подготовку графика обучения и их методично
                    руководит подготовкой; <br />
                    • анализ учебного времени преподавателей вузов и о
                    распределении преподавателей по факультетам вносит
                    предложения; <br />• учебный зрительный фонд распределяет по
                    факультетам; <br />• текущая диспетчеризация учебных занятий
                    контролирует; <br />
                    • участвует в создании филиалов кафедры; <br />• информация
                    о преподавательском составе основывает банк; <br />
                    • Высшее образование, наука и на основании правила,
                    утвержденного Министерством инноваций педагогическая и
                    производственная практика студентов обычно управляет и
                    практикует планы контролирует его реализацию; <br />• стулья
                    работают изучает их деятельность и обобщает свой опыт.
                    Деятельность кафедр целесообразна и нова вносит предложения
                    по открытию кафедр. <br />
                  </p>
                </>
              )}

              {lang == "en" && (
                <>
                  <h4>
                    The main activities of the educational and methodological
                    department.
                  </h4>
                  <p>
                    The educational and methodological department is a component
                    of the higher educational institution is considered a
                    department and operates based on the Statute of the
                    university shows. Educational-methodological department in
                    its activity to the orders and instructions of the rector of
                    the university is based on <br />
                  </p>
                  <p>
                    The educational and methodological department performs the
                    following activities: <br />
                    • manages the educational work of the university, Uzbekistan
                    Ministry of Higher Education, Science and Innovation of the
                    Republic of Kazakhstan in accordance with educational plans
                    and programs organizes the educational process; <br />•
                    tense educational plans and programs in accordance with the
                    requirements works on improvement; <br />
                    • educational goals reflected in the curriculum of the
                    faculties installs; <br />
                    • modern assessment methods, including the rating system
                    based on the written work method, orally, through tests
                    Current Regulation of students' knowledge and qualification
                    levels controls the evaluation based on the requirements.
                    This is it to educational thematic plans based on control
                    results makes clarifications, individual work with students
                    determines the forms; <br />• University composition of
                    professors and teachers and their training monitors the
                    implementation of plans and downloads; <br />
                    • Hourly paid and substitute teacher training defines
                    downloads; <br />• professors and teachers studies the
                    modern and innovative experiences of its members and
                    summarizes; <br />• of the educational process at the
                    faculties checks the organization, control results in order
                    to eliminate the identified deficiencies brings to the
                    attention of deans; <br />• new study organizes the
                    development of plans; <br />
                    • develops a schedule of the educational process and working
                    training organizes the development of plans; <br />
                    • organizes the preparation of the training schedule and
                    them methodically guides the preparation; <br />
                    • analysis of teaching hours of university teachers and on
                    the distribution of teachers to faculties makes suggestions;{" "}
                    <br />• educational auditorium fund distributes among
                    faculties; <br />
                    • current dispatching of training sessions supervises;{" "}
                    <br />
                    • participates in the creation of branches of the
                    department; <br />
                    • information about the teaching staff establishes a bank;{" "}
                    <br />
                    • Higher education, science and based on the rule approved
                    by the Ministry of Innovation pedagogical and production
                    practice of students generally manages and practice plans
                    supervises its implementation; <br />• chairs work studies
                    their activities and summarizes their experiences.
                    Departments activity is expedient and new introduces
                    proposals for opening departments. <br />
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
