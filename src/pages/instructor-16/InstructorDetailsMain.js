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
                    1.Devonxona universitetning mustaqil ish yurituvchi tarkibiy
                    bo’limi xisoblanadi, universitet ustaviga asosan rektorga
                    bo’ysinadi. <br />
                    2.Devonxona O’zbekiston Respublikasi Qonunlari, O’zbekiston
                    Respublikasi Prezidentining Farmonlari, Qarorlari va
                    Farmoyishlari, O’zbekiston Respublikasi Vazirlar Maxkamasi
                    Qarorlari, Farmonlari, Qonunlari, Farmoyishlari, Buyruqlari,
                    Xay’at tomonidan qabul qilingan qarorlar, O’zbekiston
                    Respublikasi Vazirlar Maxkamasi huzuridagi Markaziy davlat
                    arxivi boshqarmasining va Toshkent shahar davlat Arxivi
                    qoidalari, universitetda amal qilinayotgan buyruq va
                    ko’rsatmalar, Respublikaning tegishli me’yoriy-uslubiy
                    hujjatlari asosida ish yuritadi.
                    <br />
                    3.Devonxona hujjat qabul qilish, tashqi va ichki
                    kirim-chiqim xatlari, yozishmalarni, universitet ichki
                    buyruqlarini qayd qilib ularni ma’sul xodimlarga topshiradi.
                    4. Devonxona va arxiv hujjatlarni saqlash va ularni tegishli
                    bo’lgan qonun-qoidalarga rioya qilib, ish olib boradi,
                    ya’ni: <br /> – Ish yuritishdagi hujjatlarni ro’yxatdan
                    o’tkazish; <br />
                    – Bajarilishini nazorat qilish; <br />
                    – Muddati tugagan hujjatlarni hisobdan chiqarish; <br />
                    5. Devonxona ish yuritishda hujjatlarni tasdiqlash uchun
                    universitet nomi ko’rsatilgan dumaloq muxr, jismoniy va
                    yuridik shaxslarning murojaatlarini ro’yxatga olish muxri va
                    to’rtburchak shtamp mavjud.
                    <br />
                    6. Devonxona mudiri, ish yurituvchi va arxiv bo’limi
                    xodimlari bilan birgalikda universitet nomenklaturasini
                    Toshkent shahar davlat Arxivi bilan kelishilgan holda
                    tuzadi, rektor bilan kelishilgan holda imzolaydi va ish
                    yuritish uchun bo’limlarga tadbiq etadi.
                    <br />
                  </p>
                  <h4>DEVONXONANING ASOSIY VAZIFALARI</h4>
                  <p>
                    1.Universitetda ish olib borishni tashkil etish, ish
                    yuritish intizomi talablariga rioya qilish va
                    takomillashtirish, hujjatlar bilan ishlash jarayonida
                    maxfiylikni ta’minlash.
                    <br />
                    2.Ish yuritishdagi muxr va shtapmlardan foydalanishni,
                    ularni xisobga olinishini va saqlanishini taminlash. <br />
                    3.Devonxona bo`limida mavjud universitet nomenklaturasi
                    asosida bo’limlarda hujjatlarning to’g’ri yuritilishi,
                    kirish-chiqish xatlarining qayd qilish kitoblarini
                    yuritilishini nazorat qilish.
                    <br />
                    4.Saqlash muddati tugagan hujjatlarni o’z vaqtida arxivga
                    topshirishni tashkil etish.
                    <br />
                    5.Universitet tarkibiy tuzilmasidagi bo’limlar va
                    yuritiladigan jurnallarni nazorat qilish, kirish, chiqish
                    hujjatlarini vaqtida va to’g’ri qayd etish.
                    <br />
                    6.Xatlar va hujjatlarni qabul qilish va vaqtida javob xatini
                    jo’natish. <br />
                    7.Dekanatlar va bo’limlarga tegishli hujjatlarni tarqatish.{" "}
                    <br />
                    8.Devonxona va arxiv ishchilarining malakasini oshirish
                    choralarini ko’rish. <br />
                    9.Devonxona mazkur Nizom hamda boshqa normativ-huquqiy
                    hujjatlar bilan o’z zimmasiga yuklatilgan barcha
                    vazifalarning bajarilishini ta’minlash uchun javobgardir.
                    <br />
                    10.Devonxona o’z dumaloq muxriga ega. Ushbu muxr devonxona
                    mudirasida saqlanadi <br />
                  </p>
                  <h4>Devonxona xodimlarining burchlari</h4>
                  <p>
                    Xizmat vazifalarini halol va vijdonan bajarish. Mexnat
                    intizomiga, universitet ichki tartib-qoidalariga rioya
                    qilish, hujjatlarni tashqariga rahbariyatning ruxsatisiz
                    chiqishiga yo’l quymaslik. Rahbariyat buyruq va
                    farmoishlarini o’z vaqtida va sifatli bajarish.
                    Universitetga taaluqli bo’lgan barcha hujjatlarning
                    butligini, saqlanishini, mexnat muxofazasini, teknika
                    xavfsizligi qoidalarini ta’minlash. Ishlab chiqarish
                    sanitariyasi talablariga (universitet mol-mulkini toza
                    asrab-avaylash) rioya qilish.
                  </p>
                  <h4>Devonxona mudiri lavozim vazifalari:</h4>
                  <p>
                    • Vazirlar Maxkamasining 1999-yil 12-fevraldagi 12-sonli
                    “Ijro intizomini mustaxkamlash to’g’risida”gi, 1999-yil
                    29-martdagi 140-sonli “O’zbekiston Respublikasining davlat
                    hokimiyati organlarida va boshqarmalarida ish yuritish
                    bo’yicha me’yoriy” hujjatlarni tasdiqlash va ijro nazoratini
                    tashkil qilish to’grisida”gi qarorlari, vazirlikning
                    2015-yil 18-fevraldagi 58-son “Vazirlik apparatida ish
                    yuritish va hujjatlar ijrosi nazoratini tashkil qilish
                    bo’yicha yo’riqnomani tasdiqlash to’g’risida”gi buyrug’iga
                    amal qilgan holda hujjatlarni ijro intizomi bo’yicha bu
                    boradagi ishlar sifatini nazoratini tashkil etish;
                    <br />• -O’zbekiston Respublikasi Oliy Majlisi, Prezident
                    Devoni, Vazirlar Mahkamasi va boshqa vazirlik, idora,
                    tashkilotlardan kelib tushgan hujjatlarni to’g’ri ro’yxatga
                    olish, o’z vaqtida qayd etilishi va ijrochilarga
                    topshirilishini tashkil etish; <br />
                    • -Universitetdan chiquvchi hujjatlarning to’g’ri
                    rasmiylashtirilishini ta’minlash; <br />
                    • -Kiruvchi hujjatlarni (JFC-JOB FLOW CONTROL)
                    avtomatlashtirilgan dastur orqali ijrochilarga zudlik bilan
                    yetkazish; <br />
                    • -Boshqaruv faoliyatini hujjatlashtirish, xatlarni
                    jo’natish va ichki hujjatlarni tuzish, rasmiylashtirish
                    ishlarini amalga oshiradi; <br />• -Hujjatlarni ijro
                    etilishi ustidan nazoratini tashkil etish; <br />
                    • -Rektor ko’rsatmasiga muvofiq hujjatlarni o’z vaqtida ijro
                    etish uchun mas’ullarga yetkazish; <br />• -Rektor
                    (prorektor) imzosi bilan yuboriladigan hujjatlar qayd
                    etilib, to’g’ri rasmiylashtirilganligini tekshirish; <br />
                    • -Universitet blanklarini hisobga olib borish; <br />
                    • -Ish yuritish va hujjatlar bilan ishlashda o’rnatilgan
                    tartiblarni takomillashtirish borasida bo’linmalar bilan
                    hamkorlikda ish olib borish va tegishli chora-tadbirlarni
                    ishlab chiqish; <br />
                    • -Devonxona va arxiv bo’limi xodimlari bilan birgalikda
                    universitet nomenklaturasini Toshkent shahar davlat Arxivi
                    bilan kelishilgan holda tuzish, rektor bilan kelishilgan
                    holda imzolash va ish yuritish uchun bo’limlarga tadbiq
                    etish; <br />• -Ish jarayonida o’z malaka va tajribasini
                    oshirib borish hamda ish faoliyatida yangi yo’nalishlarni
                    joriy etishni ta’minlash; <br />
                    • -Devonxona xizmatiga oid bajarilgan barcha ishlar
                    yuzasidan universitet rektoriga axborot berib turish; <br />
                    • -Devonxona bo’limiga jismoniy va yuridik shaxslar
                    tomonidan kelib tushgan yozma murojaatlarini ro’yxatga
                    olish, rahbariyatga zudlik bilan yetkazish va ularni
                    vazirlik rahbariyati tomonidan qabul qilinishi va tegishli
                    javoblar yo’llanishini qonunda ko’rsatilgan moddalar asosida
                    bajarish;
                    <br />
                    • -Bo’limga tegishli ishchilarining malakasini oshirish
                    choralarini ko’rish; <br />• -Ijro etilgan hujjatlarni
                    yig’ma-jildlarga tikib ko’yish; <br />
                    • -Hujjatlarni belgilangan muddatda idoraviy arxivga
                    topshirishga tayyorlaydi va topshirish; <br />
                  </p>
                </>
              )}

              {lang == "ru" && (
                <>
                  <p>
                    1. Кабинет является самостоятельной рабочей частью
                    университета. кафедра, согласно уставу университета, ректору
                    подчиняется. <br />
                    2. Законы Кабинета Министров Республики Узбекистан,
                    Узбекистан Указы, постановления Президента Республики и
                    Постановления Кабинета Министров Республики Узбекистан
                    Решения, указы, законы, указы, приказы, Решения, принятые
                    Комитетом, Узбекистан Центральное государство при Кабинете
                    Министров Республики архивного отдела и Государственного
                    архива города Ташкента правила, порядок, соблюдаемый в
                    университете и инструкции, соответствующие нормативные и
                    методические положения Республики работает на основании
                    документов.
                    <br />
                    3. В офис принимаются документы внешние и внутренние.
                    входящие и исходящие письма, корреспонденция,
                    внутриуниверситетские записывает его распоряжения и передает
                    их ответственному персоналу. 4. Хранение и архивирование
                    документов и их принадлежность ведет работу с соблюдением
                    действующего законодательства, т.е.: <br /> - Реестр
                    документов в бизнесе передача; <br />
                    - Контроль исполнения; <br />
                    - Аннулирование просроченных документов; <br />
                    5. Утвердить документы в офисе круглая печать с названием
                    вуза, физического и печать регистрации обращений юридических
                    лиц и Есть квадратный штамп.
                    <br />
                    6. Начальник канцелярии, администратора и архивного отдела.
                    номенклатура университета вместе с сотрудниками По
                    согласованию с Государственным архивом города Ташкента
                    составляет, подписывает договор с ректором и работает
                    относится к отделам управления.
                    <br />
                  </p>
                  <h4>ОСНОВНЫЕ ОБЯЗАННОСТИ ОФИСА</h4>

                  <p>
                    1. Организация работы в университете, работа соблюдение
                    требований поведения и улучшение, в процессе работы с
                    документами обеспечение конфиденциальности.
                    <br />
                    2. Использование печатей и штампов в предпринимательской
                    деятельности, обеспечение их регистрации и сохранения.{" "}
                    <br />
                    3. Номенклатура вузов доступна в Кабинете министров. на
                    основе правильного ведения документов в подразделениях,
                    журналы учета входящих и исходящих писем контроль
                    управления.
                    <br />
                    4. Архивируйте документы, срок действия которых истек в
                    установленные сроки. организация трансфера.
                    <br />
                    5. Подразделения в структурной структуре университета и
                    журналы контроля, ввода, вывода своевременное и правильное
                    оформление документов.
                    <br />
                    6. Прием писем и документов и своевременный ответ.
                    отправлять <br />
                    7. Распределение документов по деканатам и кафедрам. <br />
                    8. Повышение квалификации кабинетно-архивных работников.
                    принять меры. <br />
                    9. Настоящее Положение и другие нормативные акты Кабинета
                    министров. все обвиняемые с документами несет
                    ответственность за обеспечение выполнения поставленных
                    задач.
                    <br />
                    10. Шкаф имеет собственное круглое уплотнение. Эта печать -
                    ЗАГС хранится по адресу <br />
                  </p>
                  <h4>Обязанности сотрудников кабинета</h4>
                  <p>
                    Честно и добросовестно выполнять служебные обязанности.
                    Коктейль соблюдение дисциплины, внутренних распорядков
                    университета делать, документы выкладывать без разрешения
                    руководства не позволяйте ему выйти наружу. Порядок
                    управления и своевременное и качественное выполнение
                    заказов. Все документы, относящиеся к университету
                    целостность, сохранность, защита коктейля, техника
                    обеспечение правил техники безопасности. Производство
                    санитарные требования (чистота имущества университета
                    сохранить) наблюдать.
                  </p>
                  <h4>Обязанности офис-менеджера:</h4>
                  <p>
                    • № 12 Кабинета Министров от 12 февраля 1999 года. «Об
                    укреплении исполнительской дисциплины», 1999 г. № 140 от 29
                    марта «Государство Республики Узбекистан» работа в
                    государственных органах и ведомствах утверждение и контроль
                    исполнения нормативных документов решения Министерства об
                    организации № 58 от 18 февраля 2015 года «Трудоустройство в
                    аппарате Министерства организация управления и контроля
                    исполнения документов к приказу об утверждении инструкции по
                    Это согласно дисциплине оформления документов организация
                    контроля качества сопутствующих работ;
                    <br />• - Олий Мажлис Республики Узбекистан, Президент
                    Кабмин, Кабмин и другие министерства, ведомства, к
                    правильному перечню документов, полученных от организаций
                    быть полученным, зафиксированным в срок и исполнителям
                    организация доставки; <br />• - Документы из университета
                    верны обеспечить формализацию; <br />• -Входящие документы
                    (JFC-JOB FLOW CONTROL) сразу исполнителям через
                    автоматизированную программу доставлять; <br />
                    • - Документирование управленческой деятельности, письма
                    подготовка и оформление отправлений и внутренних документов
                    выполняет свою работу; <br />• - Оформление документов
                    организация контроля за его выполнением; <br />
                    • - Своевременное оформление документов в соответствии с
                    поручениями ректора. доставить ответственным лицам; <br />•
                    - Ректор Документы направляются за подписью проректора.
                    проверка того, что оно было заполнено и правильно оформлено;{" "}
                    <br />
                    • - Учет университетских форм; <br />
                    • -Работа налажено хранение и работа с документами с
                    отделами по совершенствованию процедур сотрудничество и
                    связанные с ним меры разработка; <br />
                    • -Совместно с сотрудниками кабинета и архивного отдела
                    Номенклатура вузов Ташкентский городской государственный
                    архив создать по согласованию, согласованному с ректором
                    заявление в подразделения на подписание и ведение дел
                    достигать; <br />• - Его квалификация и опыт работы в
                    процессе работы совершенствование и новые направления в
                    работе обеспечить реализацию; <br />• - Все выполненные
                    работы связанные с обслуживанием кабинета предоставление
                    информации ректору университета; <br />
                    • - Физические и юридические лица в Кабинет министров к
                    списку письменных обращений, поступивших получить,
                    немедленно передать руководству и им быть приняты
                    руководством министерства и соответствующими направление
                    ответов на основании статей, указанных в законе выполнять;
                    <br />• - Повышение квалификации сотрудников отдела принять
                    меры; <br />• - Исполненные документы пошив в коллекции;{" "}
                    <br />
                    • - Документы в ведомственный архив в установленный срок.
                    готовится к подаче и подаче; <br />
                  </p>
                </>
              )}

              {lang == "en" && (
                <>
                  <p>
                    1. The Cabinet is an independent working part of the
                    university department, according to the university charter,
                    to the rector obeys. <br />
                    2. Cabinet Laws of the Republic of Uzbekistan, Uzbekistan
                    Decrees, Decisions of the President of the Republic and
                    Orders of the Cabinet of Ministers of the Republic of
                    Uzbekistan Decisions, Decrees, Laws, Decrees, Orders,
                    Decisions made by the Committee, Uzbekistan The Central
                    State under the Cabinet of Ministers of the Republic of the
                    archive department and the State Archive of Tashkent city
                    rules, the order being followed in the university and
                    instructions, the relevant regulatory and methodological
                    regulations of the Republic works on the basis of documents.
                    <br />
                    3. The office receives documents, external and internal
                    incoming and outgoing letters, correspondence, university
                    internal records his orders and hands them over to the
                    responsible staff. 4. Storage and archive documents and
                    their belonging conducts work in compliance with existing
                    laws, i.e.: <br /> - Register of documents in business
                    transfer; <br />
                    - Monitoring of execution; <br />
                    - Cancellation of expired documents; <br />
                    5. To approve documents in the office round seal with the
                    name of the university, physical and seal of registration of
                    appeals of legal entities and There is a square stamp.
                    <br />
                    6. Head of the office, administrator and archive department
                    university nomenclature together with employees In agreement
                    with the State Archives of the city of Tashkent draws up,
                    signs in agreement with the rector and work applies to
                    departments for management.
                    <br />
                  </p>
                  <h4>MAIN DUTIES OF THE OFFICEROOM</h4>
                  <p>
                    1. Organization of work at the university, work compliance
                    with the requirements of conduct and improvement, in the
                    process of working with documents ensuring confidentiality.
                    <br />
                    2. The use of seals and stamps in business, ensuring that
                    they are recorded and maintained. <br />
                    3. University nomenclature available in the Cabinet Office
                    on the basis of correct management of documents in
                    departments, log books of incoming and outgoing letters
                    management control.
                    <br />
                    4. Archive documents that have expired in a timely manner
                    organizing the transfer.
                    <br />
                    5. Departments in the structural structure of the university
                    and control, input, output logs timely and correct
                    registration of documents.
                    <br />
                    6. Acceptance of letters and documents and timely reply
                    dispatch <br />
                    7. Distribution of documents related to deaneries and
                    departments. <br />
                    8. Improving the skills of cabinet and archive workers take
                    measures. <br />
                    9. This Regulation and other legal regulations of the
                    Cabinet all those charged with documents is responsible for
                    ensuring the fulfillment of tasks.
                    <br />
                    10. The cabinet has its own round seal. This seal is the
                    registry office stored in the address <br />
                  </p>
                  <h4>Duties of cabinet employees</h4>
                  <p>
                    To perform service duties honestly and conscientiously. A
                    cocktail compliance with discipline, internal procedures of
                    the university to do, documents out without the permission
                    of the management do not allow it to come out. Management
                    order and timely and quality execution of orders. All
                    documents related to the university integrity, preservation,
                    cocktail protection, technique ensuring safety regulations.
                    Production sanitary requirements (clean university property
                    preserve) observe.
                  </p>
                  <h4>Duties of the office manager:</h4>
                  <p>
                    • No. 12 of the Cabinet of Ministers of February 12, 1999
                    "On Strengthening Executive Discipline", 1999 No. 140 of
                    March 29 "State of the Republic of Uzbekistan work in
                    government bodies and departments approval and execution
                    control of regulatory" documents the decisions of the
                    Ministry on organization No. 58 of February 18, 2015
                    "Employment in the Ministry's Office organization of
                    management and document execution control to the order on
                    approving the instruction on This is according to the
                    discipline of document execution organization of quality
                    control of related works;
                    <br />• - Oliy Majlis of the Republic of Uzbekistan,
                    President Cabinet, Cabinet and other ministries, offices, to
                    the correct list of documents received from organizations to
                    be received, recorded on time and to the executors
                    organization of delivery; <br />
                    • - The documents from the university are correct ensure
                    formalization; <br />
                    • -Incoming documents (JFC-JOB FLOW CONTROL) immediately to
                    performers through an automated program deliver; <br />
                    • - Documenting management activities, letters preparation
                    and formalization of dispatch and internal documents
                    performs its work; <br />• - Execution of documents
                    organization of control over its implementation; <br />
                    • - Timely execution of documents in accordance with the
                    instructions of the rector deliver to those in charge;{" "}
                    <br />• - Rector Documents to be sent with the signature of
                    the vice-rector checking that it has been completed and
                    properly formalized; <br />
                    • - Accounting of university forms; <br />
                    • - Installed in work and working with documents with
                    departments on improving procedures cooperation and related
                    measures development; <br />
                    • -Together with the employees of the cabinet and archive
                    department University nomenclature Tashkent City State
                    Archive to create in agreement with, agreed with the rector
                    application to departments for signing and conducting
                    business reach; <br />• - His qualifications and experience
                    in the work process improvement and new directions in work
                    ensure implementation; <br />
                    • - All the work done related to the cabinet service
                    providing information to the rector of the university;{" "}
                    <br />
                    • - Individuals and legal entities to the Cabinet Office to
                    the list of written appeals received by receive, immediately
                    deliver to management and them be accepted by the leadership
                    of the ministry and relevant sending the answers based on
                    the articles specified in the law perform;
                    <br />
                    • - Improving the skills of employees of the department take
                    measures; <br />• - Executed documents sewing into
                    collections; <br />
                    • - Documents to the departmental archive within the
                    specified period prepares for submission and submission;{" "}
                    <br />
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
