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
                  <p>
                    Qarshi shahrida joylashgan Iqtisodiyot va pedagogika
                    universiteti «Ichki nazorat va monitoring» bo‘limi Kadrlar
                    tayyorlash milliy dasturida belgilangan vazifalarning
                    bajarilishi, o‘quv-ta`lim jarayonida me`yoriy hujjatlar va
                    uslubiy ko‘rsatmalarning ijro etilishini, shuningdek,
                    universitet bo‘yicha buyruqlar va qarorlarning o‘z vaqtida
                    bajarilishini nazorat qilish maqsadida tashkil etilgan.
                    «Ichki nazorat va monitoring» bo‘limi o‘z faoliyatini
                    O‘zbekiston Respublikasi Oliy va o‘rta maxsus ta`lim
                    vazirligi 2001 yil 29-avgust 207-sonli buyrug`i bilan
                    tasdiqlangan «Oliy ta`lim ichki inspeksiya va Kadrlar
                    tayyorlash Milliy dasturini ro‘yobga chiqarishning
                    monitoringi»ni amalga oshirish to‘g‘risidagi Nizom, O‘zMu
                    Ustavi va bo‘lim Nizomiga muvofiq amalga oshiradi. Bo‘lim
                    universitetda Kadrlar tayyorlash Milliy dasturini hayotga
                    tadbiq etish monitoringini amalga oshiradi, o‘quv,
                    o‘quv-uslubiy, ma`naviy, ma`rifiy va tarbiyaviy,
                    ilmiy-tadqiqot, ijro etish intizomi, kadrlar malakasini
                    oshirish va qayta tayyorlash, hay`at va ilmiy kengash
                    qarorlari, vazirlik, agentlik va universitet bo‘yicha
                    buyruqlarning hamda ta`lim sohasidagi me`yoriy hujjatlarning
                    bajarilishini nazorat qiladi. Ichki nazorat va monitoring
                    bo‘limi o‘z faoliyatida bevosita rektorga bo‘ysunadi.
                  </p>
                  <h5 className="text-black">Bo‘limining asosiy vazifalari:</h5>
                  <p>
                    •universitetda O‘zbekiston Respublikasining oliy ta`limga
                    oid qonunlari, vazirlikning Hay`at qarori, buyruqlari va
                    boshqa hujjatlarini, shuningdek universitet ichki buyruqlari
                    va qarorlarining bajarilish monitoringini olib borish <br />
                    •universitet professor-o‘qituvchilar va o‘quv-yordamchi
                    hodimlar tarkibi ichki inspeksiyasini tashkil qilish va
                    o‘tkazish <br />
                    •kadrlar tayyorlash sifati va ta`lim oluvchilarning yuksak
                    tayyorgarlik darajasiga nisbatan qo‘yiladigan zarur
                    talablarni belgilab beruvchi davlat ta`lim standartlariga va
                    boshqa me`yoriy hujjatlarga amal qilinish nazoratini va
                    monitoringini olib borish <br />
                    •universitetda ta`lim standartlarini joriy etish masalalari
                    bo‘yicha filiallar, fakultetlar, kafedralar va boshqa
                    tarkibiy bo‘linmalarga amaliy va uslubiy yordam ko‘rsatish{" "}
                    <br />
                    •universitetni boshqarish organlariga ta`lim jarayonini
                    isloh qilish va takomillashtirish bo‘yicha tahliliy
                    materiallar va takliflar tayyorlash? <br />
                    •universitet bo‘yicha buyruqlar ijrosi nazoratini olib
                    borish <br />
                    •universitet va uning filiallarida o‘quv jarayonini tahlil
                    qilish asosida aniqlangan kamchiliklarni bartaraf etish
                    bo‘yicha bo‘linmalarga amaliy va uslubiy yordam ko‘rsatish{" "}
                    <br />
                    •professor-o‘qituvchilar faoliyatini baholashning reyting
                    usullarining tadbiq etilishini amalga oshirishda ishtirok
                    etish. <br />
                    •kamchiliklar va muammolarni bartaraf va xal qilish bo‘yicha
                    aniq takliflarni universitet rahbariyatiga taqdim etish.{" "}
                    <br />
                    •universitet va unga tegishli ta`lim muassasalarida
                    (filiallar, litseylar va boshqalar) ta`lim standartlariga
                    hamda ta`limga oid me`yoriy hujjatlarga amal qilinishini
                    tekshirish <br />
                    •universitetda va unga tegishli ta`lim muassasalarida
                    bo‘ladigan barcha turdagi kengash ishlarida ishtirok etish{" "}
                    <br />
                    •o‘quv yurti faoliyati bo‘yicha filiallar, fakultetlar,
                    kafedralar va boshqa tarkibiy bo‘linmalardan o‘z hizmat
                    vazifalarini bajarish uchun kerakli hujjatlarni talab qilish
                    va masalaga oid mutaxassislarni jalb qilish <br />
                    •kurs loyixasi (ishlari)ni, bitiruv malakaviy ishlarni hamda
                    magistrlik dissertatsiyasini himoya qilish, davlat
                    atestatsiyalarining o‘tkazilishini hamda barcha turdagi
                    nazariy va amaliy mashg`ulotlarni ko‘rib chiqish <br />
                    •o‘z huquqi doirasidagi masalalarni joylarda o‘rganish uchun
                    belgilangan tartibda universitetning malakaviy
                    professor-o‘qituvchilari va xodimlarni jalb qilgan holda
                    guruhlar tuzish. <br />
                  </p>
                </>
              )}
              {lang == "ru" && (
                <>
                  <p>
                    Экономика и педагогика расположенная в Карши Отдел
                    «Внутреннего контроля и мониторинга» университета Кадры
                    задач, определенных в национальной программе обучения
                    внедрение, нормативных документов в учебный процесс и
                    выполнение методических указаний, а также своевременность
                    приказов и решений университета был создан для контроля за
                    его выполнением. "Напиток Отдел «контроля и мониторинга»
                    ведет свою деятельность в Узбекистане Министерство высшего и
                    среднего специального образования Республики, 2001 г.
                    «Высшее образование», утвержденное приказом № 207 от 29
                    августа. реализация Национальной программы внутреннего
                    контроля и подготовки кадров по осуществлению «мониторинга
                    выпуска продукции». Осуществляется в соответствии с Уставом,
                    Уставом ОЗМУ и Уставом кафедры. Кафедра реализует
                    Национальную программу подготовки кадров в университете.
                    осуществляет мониторинг реализации, обучение,
                    учебно-методические, духовные, учебно-просветительские,
                    научные исследования, производственная дисциплина, повышение
                    квалификации персонала и переподготовка подготовка, решения
                    коллегии и ученого совета, министерства, агентские и
                    университетские заказы и образование контролирует выполнение
                    нормативных документов в сфере. Департамент внутреннего
                    контроля и мониторинга является непосредственным в своей
                    деятельности. подчиняется ректору.
                  </p>
                  <h5 className="text-black">Основные задачи отдела:</h5>
                  <p>
                    • высшее образование Республики Узбекистан в университете
                    соответствующие законы, решения Коллегии Министерства,
                    приказы и другие документы, а также внутренние приказы
                    университета и контролировать выполнение решений <br />
                    • профессора университетов и ассистенты преподавателей
                    Организация внутренней проверки персонала и трансфер <br />
                    • высокое качество подготовки кадров и студентов необходимо
                    для уровня подготовки государственным образовательным
                    стандартам, определяющим требования и контроль соблюдения
                    других нормативных документов и мониторинг <br />• вопросы
                    внедрения образовательных стандартов в вузе филиалы,
                    факультеты, кафедры и т.д. оказание практической и
                    методической поддержки структурным подразделениям <br />
                    • образовательный процесс для органов управления
                    университета аналитический анализ реформ и улучшений
                    подготовка материалов и предложений? <br />
                    • контроль исполнения заказов по вузу идти <br />
                    • анализ образовательного процесса в университете и его
                    филиалах устранение недостатков, выявленных по итогам
                    выполнения оказание практической и методической поддержки
                    кафедрам
                    <br />
                    • рейтинг оценки деятельности профессора-преподавателя
                    участие во внедрении методов достигать <br />• по устранению
                    и решению недостатков и проблем представление конкретных
                    предложений руководству университета. <br />
                    • в университете и связанных с ним учебных заведениях
                    (филиалы, лицеи и т.п.) образовательным стандартам и
                    соблюдение образовательных правил проверьте <br />• в
                    университете и связанных с ним учебных заведениях
                    участвовать во всех видах работы совета <br />
                    • филиалы, факультеты о деятельности образовательного
                    учреждения, собственная служба отделов и других структурных
                    подразделений запросить необходимые документы для выполнения
                    своих обязанностей и привлечение профильных экспертов <br />
                    • курсовой проект (работа), дипломная квалификационная
                    работа и Защита магистерской диссертации, гос. аттестации и
                    все виды обзор теоретической и практической подготовки{" "}
                    <br />
                    • изучать вопросы в пределах своего права на месте
                    квалификация вуза в установленном порядке с участием
                    преподавателей и сотрудников формируя группы. <br />
                  </p>
                </>
              )}

              {lang == "en" && (
                <>
                  <p>
                    Economy and pedagogy located in Karshi "Internal control and
                    monitoring" department of the university Personnel of tasks
                    defined in the national training program implementation,
                    regulatory documents in the educational process and
                    execution of methodological instructions, as well as
                    timeliness of university orders and decisions was
                    established in order to control its implementation. "Drink
                    "control and monitoring" department conducts its activities
                    in Uzbekistan Ministry of Higher and Secondary Special
                    Education of the Republic 2001 "Higher education" approved
                    by order No. 207 of August 29 implementation of the National
                    Program of Internal Inspection and Personnel Training on the
                    implementation of "monitoring of output". It is carried out
                    in accordance with the Charter, the Charter of OZMU and the
                    Charter of the department. The department implements the
                    National Program of Personnel Training at the university
                    implements implementation monitoring, training, educational
                    and methodological, spiritual, educational and educational,
                    scientific research, performance discipline, personnel
                    qualification improvement and re preparation, decisions of
                    the board and scientific council, the ministry, agency and
                    university orders and education supervises the
                    implementation of regulatory documents in the field.
                    Internal control and monitoring department is direct in its
                    activity subordinate to the rector.
                  </p>
                  <h5 className="text-black">The main tasks of the department:</h5>
                  <p>
                    • higher education of the Republic of Uzbekistan at the
                    university related laws, the decision of the Board of the
                    Ministry, orders and other documents, as well as internal
                    orders of the university and monitor the implementation of
                    decisions <br />
                    • university professors and teaching assistants Organization
                    of the internal inspection of personnel and transfer <br />
                    • high quality of personnel training and students necessary
                    for the level of preparation to the state educational
                    standards that determine the requirements and control of
                    compliance with other regulatory documents and monitoring{" "}
                    <br />• issues of introducing educational standards at the
                    university branches, faculties, departments, etc providing
                    practical and methodological support to structural units{" "}
                    <br />
                    • educational process for university management bodies
                    analytical on reform and improvement preparation of
                    materials and proposals? <br />
                    • controlling the execution of orders for the university to
                    go <br />
                    • analysis of the educational process at the university and
                    its branches elimination of deficiencies identified on the
                    basis of doing providing practical and methodological
                    support to departments
                    <br />
                    • rating of professor-teacher activity evaluation
                    participation in the implementation of methods reach <br />•
                    on elimination and solution of shortcomings and problems
                    presenting specific proposals to the university management.{" "}
                    <br />
                    • in the university and related educational institutions
                    (branches, lyceums, etc.) to educational standards and
                    compliance with educational regulations check <br />• at the
                    university and related educational institutions participate
                    in all kinds of council work <br />
                    • branches, faculties on the activities of the educational
                    institution, own service from departments and other
                    structural divisions to request the necessary documents to
                    perform their duties and engaging subject matter experts{" "}
                    <br />
                    • course project (work), graduation qualification work and
                    Master's thesis defense, state attestations and all types
                    review of theoretical and practical training <br />
                    • to study issues within the scope of their right on the
                    spot qualification of the university in the prescribed
                    manner involving faculty and staff forming groups. <br />
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
