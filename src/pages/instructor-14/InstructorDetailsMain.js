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
                  objectPosition: "0% 100%",
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
                    Bo'lim haqida. Taʼlim sifatini nazorat qilish boʻlimi
                    Oʻzbekiston Respublikasi Vazirlar Mahkamasining 2017 yil 18
                    iyuldagi “Oʻzbekiston Respublikasi Vazirlar Mahkamasi
                    huzuridagi Taʼlim sifatini nazorat qilish davlat
                    inspeksiyasi faoliyatini tashkil etish toʻgʻrisida”gi
                    515-son qarorining 14-bandiga muvofiq tashkil etilgan
                    boʻlib, bevosita institut tarkibiga kiradi. <br />
                  </p>
                  <p>
                    Boʻlimning asosiy maqsadi. Taʼlim sifatini nazorat qilish
                    (TSNQ) boʻlimining asosiy maqsadi IPU talabalari
                    bilimlarining davlat taʼlim standartlariga muvofiqligini
                    oʻrganib borish, tahlil qilish, kadrlar tayyorlash sifati
                    monitoringini yuritish, IPUni ichki attestatsiyadan
                    oʻtkazishni tashkil etish va uning natijalari boʻyicha
                    taʼlim sifatiga salbiy taʼsir etuvchi omillarni aniqlash
                    hamda ularni bartaraf etish va oldini olish choralarini
                    koʻrishdan iborat. <br />
                  </p>
                  <h4>
                    TSNQ boʻlimining asosiy vazifalari quyidagilardan iborat:
                  </h4>
                  <p>
                    • taʼlim yoʻnalishlari va mutaxassisliklarning davlat taʼlim
                    standartlari (DTS), malaka talablari, oʻquv rejalari va fan
                    dasturlari, ishchi oʻquv rejalar va fanning ishchi
                    dasturlari bilan taʼminlanganligi hamda oʻzaro muvofiqligini
                    tahlil etish; <br />
                    • IPUda taʼlim jarayoni sifatini, uning oʻquv adabiyotlari
                    va oʻquv-uslubiy materiallar bilan taʼminlanganlik
                    darajasini oʻrganish; <br />
                    • talabalar bilimini baholash jarayonlari va natijalarining
                    xolisligi va shaffofligini oʻrganish; <br />• talabalar
                    bilimini tanlanma asosida aniqlash uchun qoʻshimcha ravishda
                    nazorat ishlarini oʻtkazish (mazkur nazorat natijasi
                    talabaning oʻzlashtirish koʻrsatkichida aks etmaydi),
                    natijalarni tahlil qilish, taʼlim sifatiga taʼsir koʻrsatgan
                    omillarni aniqlash jarayonlarini tashkillashtirish; <br />
                    • Har bir fan boʻyicha dars mashgʻulotlarini tahlil qilish
                    va IPU rektoriga maʼlumotlar berib borish; <br />
                    • talabalar davomati va professor-oʻqituvchilarning darsga
                    munosabatini monitoringini olib borish; <br />
                    • baholash natijalari boʻyicha tahliliy maʼlumotlar
                    tayyorlash va ularning natijalari yuzasidan IPU kengashida
                    hamda rektor yigʻilishida hisobotlar berib borish; <br />•
                    bitiruvchilarning bilim darajasini oʻrganish maqsadida
                    yakuniy davlat attestatsiyasi komissiyalari hujjatlari bilan
                    tanishish; <br />
                    • tashkiliy-huquqiy va metodik koʻrsatmalar asosida taʼlim
                    va kadrlar tayyorlash sifati monitoringini olib borish va
                    nazorat qilishni tashkil etish;
                    <br />
                    • IPUni ichki attestatsiyadan oʻtkazishni tashkil etish va
                    ichki attestatsiya natijalarini, taʼlim sifatiga taʼsir
                    etuvchi omillar toʻgʻrisidagi maʼlumotlarni IPU rektoriga
                    hamda Davlat inspeksiyasiga taqdim etish; <br />
                    • taʼlim sifatini belgilovchi koʻrsatkichlarning holatini
                    monitoring qilish, aniqlangan muammolar va kamchiliklar
                    yuzasidan IPU rektoriga takliflar berish; <br />
                    • taʼlim sifatini oshirish maqsadida
                    professor-oʻqituvchilarning malakasini oshirish jarayonida
                    zamonaviy usullar va uslublardan foydalanish samaradorligini
                    tahlil qilish; <br />
                    • IPUning tarkibiy tuzilmalarida (fakultet, kafedra, boʻlim,
                    markaz, akademik litsey) pedagog xodimlarning kasbiy
                    malakasi holatini, shuningdek oliy oʻquv yurtidan keyingi
                    taʼlim hamda malaka oshirish va qayta tayyorlash
                    yoʻnalishlaridagi sifat darajasini aniqlash maqsadida ichki
                    monitoringni oʻtkazish, tahliliy maʼlumotlarni tayyorlash,
                    aniqlanagan kamchilik va muammolarni bartaraf etish boʻyicha
                    IPU rahbariyatiga takliflar kiritish; <br />
                    • IPU professor-oʻqituvchilari tayanch maʼlumotlarining
                    tegishli dars beradigan fan(lar)iga mosligini tahlil qilish
                    yoki ularning qonun hujjatlarida belgilangan tartibda qayta
                    tayyorlashdan oʻtganligini yoki mos ixtisoslik boʻyicha
                    ilmiy unvon, darajaga ega ekanligini oʻrganish va
                    xulosalarni IPU rektoriga maʼlum qilish; <br />
                    • taʼlim jarayoni moddiy-texnik bazasi holatini tahlil
                    qilish, uni rivojlantirish va takomillashtirish boʻyicha
                    takliflar berish; <br />
                    • IPUda talabalar amaliyotining taʼlim yoʻnalishlari va
                    mutaxassisliklarni inobatga olgan holda tashkil etilganligi
                    va uning samarasini nazorat qilish; <br />• IPU reytingini
                    aniqlash, baholash, attestatsiya va taʼlim sifatini
                    oʻrganish bilan bogʻliq jarayonlarda ishtirok etish; <br />
                    • IPUdagi ijtimoiy muhit, kadrlar tayyorlash va taʼlim
                    sifatini oshirish maqsadida doimiy ravishda talaba, ota-ona,
                    professor-oʻqituvchi va kadrlar isteʼmolchilari oʻrtasida
                    ijtimoiy soʻrovlar oʻtkazish; <br />
                    • IPUdagi ijtimoiy muhit, kadrlar tayyorlash va taʼlim
                    sifatini oʻrganish maqsadida professor-oʻqituvchilar va
                    kadrlar isteʼmolchilari oʻrtasida oʻtkaziladigan ijtimoiy
                    soʻrovlar jarayonida ishtirok etish, natijalari yuzasidan
                    tavsiyalar ishlab chiqish; <br />• bitiruvchilarning
                    taʼlimni keyingi bosqichiga oʻqishga kirishi yoki ishga
                    joylashishlarini tahlil qilishda ishtirok etish; <br />
                    • respublika va xorijiy davlatlardagi taʼlim sifatini
                    nazorat qilishga oid yangiliklarni doimiy oʻrganib borish va
                    ularni taʼlim jarayoniga tatbiq etish yuzasidan tavsiyalar
                    ishlab chiqish; <br />
                    • IPU reytingini xalqaro darajaga koʻtarishga qaratilgan
                    chora-tadbirlarni oliy taʼlim muassasasi rahbariyati bilan
                    birgalikda ishlab chiqish va uning ijrosini taʼminlashda
                    faol ishtirok etish; <br />
                    • IPU tegishli tarkibiy tuzilmalari bilan hamkorlikda taʼlim
                    sifatini oshirishga qaratilgan hamda oʻquv seminarlari va
                    treninglarni oʻtkazish; <br />
                    • IPUda ichki jamoatchi ekspertlar bazasini shakllantirish
                    va ular bilan qoʻyilgan vazifalar doirasida seminar
                    mashgʻulotlarini muntazam ravishda oʻtkazib borish; <br />
                    • oʻquv jarayoni bilan ishlab chiqarish oʻrtasidagi
                    integratsion hamkorlik, innovatsion gʻoyalar, ishlanma va
                    texnologiyalarni kengaytirish yuzasidan takliflarni berib
                    borish; <br />
                    • IPU Kengashida, davra suhbatlari va anjumanlarda TSNQ
                    boʻlimi tomonidan taʼlim sifatini oshirishga oid amalga
                    oshirilgan oʻrganish va monitoring natijalari toʻgʻrisida
                    maʼlumotlar berib borish; <br />
                    • taʼlim sifati holatini oʻrganish natijalariga asoslanib
                    tegishli takliflarni IPUrahbariyatiga taqdim etish. <br />
                  </p>
                </>
              )}

              {lang == "ru" && (
                <>
                  <h4>Основная деятельность отдела</h4>
                  <p>
                    О кафедре. Отдел контроля качества образования 18 декабря
                    2017 года Кабинета Министров Республики Узбекистан Июль
                    «Кабинет Министров Республики Узбекистан Государственный
                    контроль качества образования по организации проверочной
                    деятельности Установлен в соответствии с пунктом 14
                    постановления №515. и является непосредственно частью
                    института. <br />
                  </p>
                  <p>
                    Основная цель кафедры. Контроль качества образования
                    Основная цель кафедры (TSNQ) – студенты ИПУ. соответствие
                    знаний государственным образовательным стандартам изучение,
                    анализ, качество подготовки кадров мониторинг, внутренняя
                    сертификация МПС об организации трансфера и его результатах
                    выявление факторов, негативно влияющих на качество
                    образования и меры их устранения и профилактики. состоит из
                    видения. <br />
                  </p>
                  <h4>Основными задачами отдела TSNQ являются:</h4>
                  <p>
                    • государственное образование по образовательным
                    направлениям и специальностям стандарты (DTS),
                    квалификационные требования, учебные программы и наука
                    программы, рабочие учебные планы и рабочая наука программы и
                    совместимость анализ; <br />
                    • Качество образовательного процесса в ИПУ, его учебная
                    литература. и предоставление учебно-методических материалов
                    уровень обучения; <br />
                    • процессы и результаты оценки знаний студентов изучать
                    беспристрастность и прозрачность; <br />• студенты помимо
                    определения своих знаний на выборочной основе проведение
                    контрольных работ (данный результат контроля не отражено в
                    индексе успеваемости учащихся), анализ результатов, влияющих
                    на качество образования организация процессов идентификации
                    факторов; <br />
                    • Анализ учебной деятельности по каждому предмету и
                    предоставление информации ректору МПС; <br />
                    • посещаемость студентов и преподавателей следить за
                    отношениями; <br />
                    • аналитические данные по результатам оценки в Совете МПС по
                    поводу подготовки и ее результатов и выступление с докладами
                    на ректорском совещании; <br />• с целью изучения уровня
                    знаний выпускников с документами итоговых государственных
                    аттестационных комиссий встречаться; <br />
                    • обучение на основе организационных, правовых и
                    методических указаний и контроль качества подготовки кадров
                    и организация контроля;
                    <br />
                    • Организация внутренней сертификации МПС и влияние на
                    результаты внутренней аттестации, качество образования
                    информация о факторах, способствующих ректору МПУ и подача в
                    Государственную инспекцию; <br />
                    • состояние показателей, определяющих качество образования
                    мониторинг, выявленные проблемы и недостатки внесение
                    предложений ректору ИПУ; <br />
                    • в целях улучшения качества образования в процессе
                    профессионального развития профессоров и преподавателей
                    эффективность использования современных методов и техник
                    анализ; <br />
                    • В структурных структурах МПУ (факультет, кафедра, кафедра,
                    центр, академический лицей) профессиональный
                    преподавательский состав квалификационный статус, а также
                    послесреднее образование образование, подготовка и
                    переподготовка внутренний с целью определения уровня
                    качества по направлениям проведение мониторинга, подготовка
                    аналитических данных, об устранении выявленных недостатков и
                    проблем Внесение предложений руководству МПС; <br />
                    • Основная информация профессоров и преподавателей ИПУ
                    анализ соответствия преподаваемому предмету(ам) или в
                    порядке, установленном их законодательством обучение или по
                    подходящей специальности узнать, что он имеет научное
                    звание, степень и информирование ректора МПС о выводах;
                    <br />
                    • анализ состояния материально-технической базы
                    образовательного процесса о его создании, развитии и
                    совершенствовании вносить предложения; <br />
                    • Образовательные направления студенческой практики в ИПУ и
                    что оно организовано с учетом специальностей и
                    контролировать ее эффективность; <br />• Рейтинг МПС
                    определение, оценка, сертификация и качество образования
                    участие в процессах обучения; <br />
                    • Социальная среда, обучение и образование в МПС В целях
                    повышения качества учащиеся, родители, между
                    профессором-преподавателем и кадрами-потребителями
                    проведение социальных опросов; <br />• Социальная среда,
                    обучение и образование в МПС качество
                  </p>
                </>
              )}

              {lang == "en" && (
                <>
                  <h4>Main activities of the department</h4>
                  <p>
                    About the department. Education quality control department
                    18 of 2017 of the Cabinet of Ministers of the Republic of
                    Uzbekistan July "Cabinet of Ministers of the Republic of
                    Uzbekistan State Quality Control of Education on
                    organization of inspection activities It was established in
                    accordance with Clause 14 of Resolution No. 515 and is
                    directly part of the institute. <br />
                  </p>
                  <p>
                    The main purpose of the department. Quality control of
                    education The main target of the (TSNQ) department is IPU
                    students compliance of knowledge with state educational
                    standards study, analysis, quality of personnel training
                    monitoring, internal certification of IPU on the
                    organization of the transfer and its results identifying
                    factors that negatively affect the quality of education and
                    their elimination and prevention measures consists of
                    seeing. <br />
                  </p>
                  <h4>The main tasks of the TSNQ department are as follows:</h4>
                  <p>
                    • state education of educational areas and specialties
                    standards (DTS), qualification requirements, curricula and
                    science programs, working curricula and working science
                    programs and compatibility analysis; <br />
                    • The quality of the educational process at IPU, its
                    educational literature and provision of teaching-methodical
                    materials study level; <br />
                    • processes and results of assessment of student knowledge
                    study impartiality and transparency; <br />• students in
                    addition to determining their knowledge on a selective basis
                    carrying out control work (this control result not reflected
                    in the student's mastery index), analysis of results,
                    influenced the quality of education organization of factor
                    identification processes; <br />
                    • Analysis of lesson activities in each subject and
                    providing information to the IPU rector; <br />
                    • attendance of students and professors monitor the
                    relationship; <br />
                    • analytical data on the results of the assessment in the
                    IPU Council regarding preparation and their results and
                    giving reports at the rector's meeting; <br />• in order to
                    study the level of knowledge of graduates with documents of
                    final state certification commissions dating; <br />
                    • education based on organizational, legal and methodical
                    instructions and monitoring the quality of personnel
                    training and organization of control;
                    <br />
                    • Organization of internal certification of IPU and impact
                    on the results of internal attestation, the quality of
                    education information about the contributing factors to the
                    IPU rector and submission to the State Inspection; <br />
                    • the status of indicators determining the quality of
                    education monitoring, identified problems and deficiencies
                    making proposals to the IPU rector; <br />
                    • in order to improve the quality of education in the
                    process of professional development of professors and
                    teachers effectiveness of using modern methods and
                    techniques analysis; <br />
                    • In the structural structures of IPU (faculty, department,
                    department, center, academic lyceum) professional teaching
                    staff qualification status, as well as post-secondary
                    education education and training and retraining internal in
                    order to determine the level of quality in the directions
                    conducting monitoring, preparing analytical data, on the
                    elimination of identified deficiencies and problems Making
                    suggestions to the IPU management; <br />• Basic information
                    of professors and teachers of IPU analysis of relevance to
                    the subject(s) taught or according to the procedure
                    established by their laws training or in a suitable
                    specialty to learn that he has a scientific title, degree
                    and informing the IPU rector of the conclusions; <br />
                    • analysis of the state of the material and technical base
                    of the educational process on making, developing and
                    improving it make suggestions; <br />
                    • Educational directions of student practice at IPU and that
                    it is organized taking into account specialties and control
                    its effectiveness; <br />• IPU rating determination,
                    assessment, certification and quality of education
                    participation in learning processes; <br />
                    • Social environment, training and education at IPU in order
                    to improve the quality, students, parents, between
                    professor-teacher and personnel consumers conducting social
                    surveys; <br />• Social environment, training and education
                    at IPU quality{" "}
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
