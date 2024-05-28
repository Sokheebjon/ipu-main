import { useLocation } from "react-router-dom";
import instructors from "../../data/Instructors.json";
import { useIntl } from "react-intl";
import { getProductName } from "../../helpers/general";

const InstructorDetailsMain = () => {
  const intl = useIntl();
  const location = useLocation();
  const postURL = location.pathname.split("/");
  const instructor = instructors.find((b) => b.id === Number(postURL[2]));
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
                <div>
                  <h4>Markaz haqida qisqacha ma`lumot </h4>
                  <p>
                    iqtisodiyot va pedagogika universiteti o`z faoliyatini 2022
                    yil 10 oktabrdan boshladi, universitet bilan bir vaqtda
                    kutubxona ham shakillanib bordi. <br />
                    <br />
                    2022-yilda kutubxona kitob fondi 80 nomdagi 689 nashr
                    birligini bilan faoliyat boshlagan bo`lsa, hozirgi kunga
                    kelib bu ko`rsatkich 1959 nomdagi 23413 nashr birligiga
                    yetdi. <br /> <br />
                    2006 yilda 20 iyundagi O`zbekiston Respublikasi
                    Prezidentining PP-381 “Respublika aholisini
                    axborot-kutubxona bilan ta`minlashni tashkil etish
                    to`g`risida”gi qaror qabul qilindi. Ushbu qarorga asosan
                    kutubxona sohasidagi ish faoliyati axborot
                    telekommunikatsiya texnologiyasini amalga oshirishga va
                    an`anaviy shakldan zamonaviy ish shakliga o`tishga
                    yo`naltirilgan. <br /> <br />
                    Universitet axborot-resurs markazi o‘z faoliyati davomida
                    O‘zbekiston Respublikasi qonun va qarorlariga, ayni: <br />{" "}
                    <br />
                    «Axborot-kutubxona faoliyati to‘g‘risida» O‘zbekiston
                    Respublikasining 2011 yil 13 apreldagi O‘RQ-280-son Qonuni;
                    <br /> <br />
                    «Mualliflik huquqi va turdosh huquqlar to‘g‘risida»
                    O‘zbekiston Respublikasining 2006 yil 20 iyuldagi
                    O‘RQ-42-son Qonuni; <br /> <br />
                    “Kitob mahsulotlarini nashr etish va tarqatish tizimini
                    rivojlantirish, kitob mutolaasi va kitobxonlik madaniyatini
                    oshirish hamda targ’ib qilish bo’yicha komplеks
                    chora-tadbirlar dasturi to’g’risida” O’zbеkiston
                    Rеspublikasi Prеzidеntining 2017-yil 13-sentyabrdagi
                    PQ-3271-son qarori. “O’zbеkiston Rеspublikasi aholisiga
                    axborot-kutubxona xizmati ko’rsatishni yanada
                    takomillashtirish to’g’risida” O’zbеkiston Rеspublikasi
                    Prеzidеntining 2019-yil 7-iyundagi PQ-4354-son qarori va
                    boshqa hujjatlarga amal qiladi.
                    <br /> <br />
                    Hozirgi vaqtda Axborot-resurs markazi elektron axborot
                    resurslari bo`limi 2 ta fakultet Axborot-resurs markazi
                    xizmat ko`rsatish bo`limlari, 80 o`rinli o`quv zallarini o`z
                    ichiga oladi. Axborot-resurs markazi universitet o`quv
                    jarayoni, hamda ilmiy tadqiqot ishlarida ishtirok etadi.
                    Universitet axborot-resurs markazining asosiy vazifasi
                    avvalo universitet professor-o`qituvchilarini va o`quv
                    jarayonini o`quv, ilmiy va badiiy, axborot kutubxona
                    resurslari bilan ta`minlashdir. Axborot-resurs markazi
                    universitetning hamma kategoriyasidagi kitobxonlar uchun
                    differentsial xizmat ko`rsatadi.
                    <br /> <br />
                    Bugungi kunda Axborot- resurs markazining kitobxonlar soni
                    –1850.
                    <br /> <br />
                    Yillik davomat soni - 30 ming dan ortiq.
                    <br /> <br />
                    Yil davomida berilgan adabiyotlar soni - 40 ming dan ortiq.
                    <br /> <br />
                    Har yili Axborot-resurs markazi fondiga o`n ming nashr
                    birligidan ortiq adabiyotlar olinadi, vaqtli nashrlar 29
                    nomni tashkil qiladi. 80-90 % foizini Axborot-resurs markazi
                    fondiga olingan yangi o`quv adabiyotlari va o`quv
                    qo`llanmalari tashkil qiladi. Axborot-resurs markazi
                    adabiyotlar xaridi qilish uchun o`rta hisobda 250 million
                    so`m, obuna uchun esa, 20 million so`mdan ortiq mablag`
                    sarflaydi.
                    <br /> <br />
                    Axborot-resurs markazida 23 mingdan ortiq nashr birligida -
                    o`zbek, rus va chet tillarda yozilgan adabiyotlar mavjuddir.
                    Axborot-resurs markazida universitet o`quv jarayoni va
                    talabalarni o`quv qo`llanmalari va o`quv adabiyotlari bilan
                    ta`minlash juda yahshi yo`lga qo`yilgan bo`lib, o`quv
                    adabiyotlari – 7 ming nashr birligini, ilmiy adabiyotlar
                    300, badiiy adabiyot fondi - 1640 dan ortiq nashr birligini
                    tashkil qiladi. Shuningdek, davriy nashrlar fondi jurnal va
                    gazetalardan iborat qiziqarli va boy.
                    <br /> <br />
                    Axborot-resurs markazining o`quv zallarida kitobxonlar uchun
                    o`quv, ilmiy va badiy adabiyotlarining elektron versiyalari
                    (20 ming tagacha ) yaratilgan, hamda Internet tarmog`i
                    orqali jahon axborot resurslari bazasi: Jstor, Ebsco,
                    Springer Nature, Proquest Dissertation and Theses Global
                    bilan tanishish imkoniyatlari mavjud.
                    <br /> <br />
                    Axborot-resurs markazi ishchi xodimlar soni 4 kishini
                    tashkil qiladi.
                  </p>
                </div>
              )}
              {lang == "ru" && (
                <div>
                  <h4>Краткая информация о Центре</h4>
                  <p>
                    Университет экономики и педагогики начал свою деятельность с
                    10 октября 2022 года, в то время как библиотека была создана
                    вместе с университетом. <br />
                    <br />
                    Если в 2022 году библиотечный фонд составлял 689
                    издательств, обслуживающих 80 подразделений, то на
                    сегодняшний день это число достигло 23 413 издательств,
                    обслуживающих 1959 подразделений. <br /> <br />
                    20 июня 2006 года было принято постановление Президента
                    Республики Узбекистана от 20 июля 2006 года № 42 «Об
                    организации обеспечения населения Республики информацией и
                    библиотечными услугами». Это постановление направлено на
                    расширение использования информационно-телекоммуникационных
                    технологий в библиотечной деятельности и переход от
                    традиционной формы к современной форме работы. <br /> <br />
                    Центр информационных ресурсов университета продолжает свою
                    деятельность в соответствии с законодательством и решениями
                    Республики Узбекистан, включая: <br /> <br />
                    «О деятельности библиотек» Закон Республики Узбекистан от 13
                    апреля 2011 года № 280; <br /> <br />
                    «Об авторском праве и смежных правах» Закон Республики
                    Узбекистан от 20 июля 2006 года № 42; <br /> <br />
                    «О развитии системы издания и распространения книжной
                    продукции, развитии читательской и книжной культуры, а также
                    о комплексных мерах по продвижению книг» Постановление
                    Президента Республики Узбекистан от 13 сентября 2017 года №
                    3271. Постановление Президента Республики Узбекистан от 7
                    июня 2019 года № 4354 о дальнейшем совершенствовании
                    предоставления информационно-библиотечных услуг населению
                    Республики Узбекистан и другие документы. <br /> <br />
                    На сегодняшний день Центр информационных ресурсов имеет два
                    отдела по обслуживанию информационных ресурсов и 80
                    аудиторий. Центр информационных ресурсов участвует в учебном
                    процессе университета и научно-исследовательской работе.
                    Основной задачей Центра информационных ресурсов является
                    обеспечение университетских преподавателей и студентов
                    учебными, научными и художественными ресурсами библиотеки.
                    Центр информационных ресурсов обеспечивает
                    дифференцированные услуги для всех категорий читателей
                    университета. <br /> <br />
                    На сегодняшний день количество читателей в Центре
                    информационных ресурсов составляет - 1850. <br /> <br />
                    Годовой оборот составляет более 30 тысяч. <br /> <br />
                    Количество предоставленных литератур в течение года - более
                    40 тысяч. <br /> <br />
                    Каждый год Центр информационных ресурсов получает более
                    десяти тысяч публикаций, из которых 29 называются своими
                    именами. 80-90% этих изданий представляют собой новые
                    учебники и учебные пособия. Для покупки литературы Центр
                    информационных ресурсов расходует примерно 250 миллионов
                    сумов, а на подписку - более 20 миллионов сумов. <br />{" "}
                    <br />
                    В Центре информационных ресурсов представлены литературные
                    издания на узбекском, русском и иностранных языках от более
                    чем 23 тысяч издательств. Центр информационных ресурсов
                    обеспечивает учебный процесс университета и студентов
                    учебными пособиями и учебной литературой очень эффективно.
                    Учебные пособия составляют более 7 тысяч издательств,
                    научная литература представлена более 300 издательств, а
                    литература искусства - более 1640 издательств. Кроме того,
                    фонд периодических изданий состоит из журналов и газет.
                    <br /> <br />
                    В аудиториях Центра информационных ресурсов созданы электрон
                    еще ChatGPT ные версии учебной, научной и художественной
                    литературы (более 20 тысяч), а также предоставляются
                    возможности ознакомления с мировыми информационными
                    ресурсами через Интернет, такими как Jstor, Ebsco, Springer
                    Nature, Proquest Dissertation and Theses Global. <br />{" "}
                    <br />В Центре информационных ресурсов работает 4
                    сотрудника.
                  </p>
                </div>
              )}
              {lang == "en" && (
                <div>
                  <h4>About the Center Briefly</h4>
                  <p>
                    The Economic and Pedagogical University began its activities
                    on October 10, 2022, and the library was formed
                    simultaneously with the university. <br /> <br />
                    While in 2022 the library started its activities with 689
                    publications under the fund number 80, currently this figure
                    has reached 23,413 publications under the fund number 1959.{" "}
                    <br /> <br />
                    On June 20, 2006, the President of the Republic of
                    Uzbekistan adopted the Resolution PP-381 "On the
                    establishment of interaction between the population and the
                    library". This resolution mainly directed the library's work
                    towards the implementation of information and communication
                    technologies and transitioning from traditional forms to
                    modern ones. <br /> <br />
                    During its activities, the University Information Resource
                    Center adheres to the laws and regulations of the Republic
                    of Uzbekistan, namely: <br /> <br />
                    "On Library Activities" of April 13, 2011, No. 280; <br />{" "}
                    <br />
                    "On Copyright and Related Rights" of July 20, 2006, No. 42;{" "}
                    <br /> <br />
                    "On the Development of the System for Publishing and
                    Distributing Books, Increasing the Reading Culture, and
                    Promotion" of September 13, 2017, Presidential Decree No.
                    3271. "On Further Improvement of Providing Information and
                    Library Services to the Population of the Republic of
                    Uzbekistan" of June 7, 2019, Presidential Decree No. 4354,
                    and other documents. <br /> <br />
                    Currently, the Electronic Information Resources Department
                    of the Information Resource Center includes 2 faculty
                    service departments, and it comprises 80-seat classrooms.
                    The Information Resource Center participates in the
                    educational process and scientific research of the
                    university. The main task of the Information Resource Center
                    is to provide university professors and students with
                    educational, scientific, and artistic resources from the
                    library. The Information Resource Center provides
                    differentiated services for all categories of university
                    readers. <br /> <br />
                    The current number of readers of the Information Resource
                    Center is 1850. <br /> <br />
                    The annual attendance is over 30,000. <br /> <br />
                    The number of literature issued annually is over 40,000.{" "}
                    <br /> <br />
                    Every year, more than ten thousand publications, including
                    timely publications, are added to the fund of the
                    Information Resource Center, forming 29 titles. 80-90% of
                    these are new educational publications and manuals. For the
                    purchase of literature, the Information Resource Center
                    annually spends about 250 million soums, and for
                    subscriptions, more than 20 million soums. <br /> <br />
                    The Information Resource Center has a collection of
                    literature written in Uzbek, Russian, and foreign languages,
                    totaling more than 23,000 publications. The Information
                    Resource Center provides excellent support for the
                    university's educational process and students with
                    educational materials and literature, forming a fund of
                    7,000 publications, 300 scientific publications, and a
                    literary fund of over 1,640 publications. In addition, the
                    archival fund consists of interesting and voluminous
                    publications from journals and newspapers. <br /> <br />
                    In the reading rooms of the Information Resource Center,
                    electronic versions of educational, scientific, and literary
                    works (up to 20 thousand copies) are available, as well as
                    opportunities to familiarize oneself with world information
                    resources such as Jstor, Ebsco, Springer Nature, Proquest
                    Dissertation and Theses Global through the Internet. <br />{" "}
                    <br />
                    The Information Resource Center employs 4 staff members.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default InstructorDetailsMain;
