import instructors from "../../data/Instructors.json";
import { useIntl } from "react-intl";
import { getProductName } from "../../helpers/general";
import ImageS1 from "../../assets/images/faculties-5/s-1.png";
import ImageS2 from "../../assets/images/faculties-5/s-2.png";
import ImageS3 from "../../assets/images/faculties-5/s-3.png";
import ImageS4 from "../../assets/images/faculties-5/s-4.png";
import ImageS5 from "../../assets/images/faculties-5/s-5.png";
import ImageS6 from "../../assets/images/faculties-5/s-6.png";
import ImageS7 from "../../assets/images/faculties-5/s-7.png";
import ImageS8 from "../../assets/images/faculties-5/s-8.png";
import ImageS9 from "../../assets/images/faculties-5/s-9.png";
import ImageS10 from "../../assets/images/faculties-5/s-10.png";
import ImageS11 from "../../assets/images/faculties-5/s-11.png";
import ImageS12 from "../../assets/images/faculties-5/s-12.png";
import ImageS13 from "../../assets/images/faculties-5/s-13.png";
import ImageS14 from "../../assets/images/faculties-5/s-14.png";
import ImageS15 from "../../assets/images/faculties-5/s-15.png";
import ImageS16 from "../../assets/images/faculties-5/s-16.png";
import ImageS17 from "../../assets/images/faculties-5/s-17.png";
import ImageS18 from "../../assets/images/faculties-5/s-18.png";
import ImageS19 from "../../assets/images/faculties-5/s-19.png";
import ImageS20 from "../../assets/images/faculties-5/s-20.png";

const InstructorDetailsMain = () => {
  const intl = useIntl();
  const instructor = instructors.find((b) => b.kafedra == "5");
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
                  <h4>1. Kafedra tarixi va faoliyati</h4>
                  <p>
                    Kafedra 2023 yilda Iqtisodiyot va pedagogika universitetida
                    “Axborot texnologiyalari va raqamli iqtisodiyot” fakultetini
                    tashkil topishi munosabati bilan, shu fakultet qoshida
                    dotsent A.Yu. Dustov rahbarligida «Neft va gaz ishi» (NGI)
                    nomi bilan faoliyat boshlagan. <br />
                    Fakultet va shu jumladan, NGI kafedrasi, Respublikamiz neft
                    va gaz sanoatining turli sohalarida uchraydigan amaliy
                    masalalarini chuqur anglaydigan, nazariy jihatdan to’liq
                    tahlil qila oladigan hamda boshqaruv masalalari bo‘yicha
                    mustahkam bilimga ega bo‘lgan yuqori saviyali
                    mutaxassislarni tayyorlashni o‘z oldiga asosiy maqsad qilib
                    qo‘ygan. <br />
                    Kafedra hozirga qadar “Neft va gaz ishi” nomi bilan
                    yuritilmoqda.
                    <br />
                    2023 yildan ayni paytgacha dotsent A.Yu. Dustov rahbarlik
                    qilib kelmoqda. <br />
                    Qisqa davr ichida kafedrada yuqori unvonga ega mutaxassislar
                    tayyorlangan, xususan dotsentlar A.Yu. Dustov, R.M.
                    Yorqulovlar yеtishib chiqqan.
                    <br />
                    Hozirgi vaqtda kafedrada mavjud 60721800-Neft va gaz ishi
                    (tarmoqlar bo‘yicha) ta’lim yo‘nalishi bo‘yicha kunduzgi va
                    sirtqi ta’lim shaklida 1300 ga yaqin talabalar tahsil
                    olmoqda. Ularga malakali, ilmiy daraja va unvonga ega
                    bo‘lgan professor-o‘qituvchilar tegishli mutaxassislik
                    fanlaridan ta’lim berib kelmoqda. <br />
                    Kafedrada tahsil olayotgan iqtidorli talabalar
                    professor-o‘qituvchilarga ustoz-shogird tizimi bo‘yicha
                    biriktirilgan va bu bilan kafedra uchun salohiyatli
                    kadrlarni maqsadli tayyorlash ko‘zda tutilgan. Mazkur
                    iqtidorli talabalar o‘z ilmiy mavzulari yuzasidan ustozlari
                    bilan hamkorlikda ilmiy maqolalar va tezislar nashr
                    ettirgan, bundan tashqari xo‘jalik shartnomalarini
                    bajarishda va ishlab chiqarish korxonalari tomonidan taqdim
                    etilgan muammoli mavzularni yechishda faol ishtirok
                    etmoqdalar.
                  </p>
                  <h4>2. Kafedraning o’quv faoliyati</h4>
                  <p>
                    Hozirgi kunda Neft va gaz ishi kafedrasida t.f.d., prof.
                    O.N. Bozorov, t.f.d., prof. T.R. Yuldoshev, dots. A.Yu.
                    Dustov, t.f.f.d., dots. E.A. Raxmatov, f-m.f.f.d., dots.
                    R.M. Yorqulov, k.f.f.d. dots. S.B. Samatov, t.f.f.d., dots.
                    J.B. Maxmayorov, dots. A.R. Raximov, dots. O.O. Nazarov,
                    f-m.f.n., dots. A.X. Raximov, katta o‘qituvchilar J.J.
                    Raxmonov, S.S. Djabborov, R.Dj. SHoimov, S.Sh. Samatov, S.N.
                    Meyliyev, yosh professor-o‘qituvchilar H.Z. Jo‘rayeva, A.S.
                    Botirov, A.J. Jonuzoqov, A.Sh. Shukurov, A.M. Jo‘rayev, I.K.
                    Qilichov, G.O. Xamroqulova, kabinet mudiri H.A. Tog‘ayev va
                    boshqalar faol mehnat qilmoqdalar. <br />
                    Kafedra professor-o’qituvchilari tomonidan <br />
                    60721800-Neft va gaz ishi (tarmoqlar bo‘yicha) <br />
                    bakalavriat (kunduzgi, kechki va sirtqi) ta’limi
                    yo’nalishida quyidagi fanlardan nazariy va amaliy
                    mashg’ulotlar olib boriladi: <br />
                    • Geodeziya;
                    <br />
                    • Neft va gaz geologiyasi;
                    <br />
                    • Fizika;
                    <br />
                    • Umumiy va yer osti gidravlikasi;
                    <br />
                    • Metrologiya va standartlashtirish;
                    <br />
                    • Neft va gaz ishi asoslari;
                    <br />
                    • Neft va gaz konlari geologiyasi;
                    <br />
                    • Issiqlik texnikasi;
                    <br />
                    • Neft va gaz quduqlarini burg‘ilash;
                    <br />
                    • Neft va gaz qatlam fizikasi;
                    <br />
                    • Umumiy kimyoviy texnologiya;
                    <br />
                    • Neft va gaz kimyosi;
                    <br />
                    • Suyultirilgan yoqilg' olish texnologiyasi;
                    <br />
                    • Asosiy texnologik jarayon va qurilmalar;
                    <br />
                    <br />
                    • Neft va gazni chuqur qayta ishlash texnologiyasi.
                    <br />
                    <br />
                    • Tabiiy gaz tarkibidan suyultirilgan sintetik yoqilg`i
                    olish texnologiyasi
                    <br />
                    • Quduqlarda geofizik tadqiqotlar
                    <br />
                    <br />
                    • Neft va gaz konlari mashina va jihozlari
                    <br />
                    <br />
                    • Suyultirilgan sInttik yoqilg‘i olish texnologiyasi
                    <br />
                    • Neft va gazni qayta ishlash kimyoviy texnologiyasi
                    <br />
                    • Neft va gaz qazib olish texnika va texnologiyasi
                    <br />
                    • Neft va gaz mahsulotlarini zamonaviy tahlil qilish
                    usullari
                    <br />
                    • Sintez gaz olish texnologiiyasi
                    <br />
                    • Quduq mahsuldorligini boshqarish
                    <br />
                    • Neft va gazni dastlabki tayyorlash va qayta ishlash
                    texnologiyasi va jihozlari
                    <br />
                    Bulardan tashqari, 60721800-Neft va gaz ishi (tarmoqlar
                    bo‘yicha) bakalavriat ta’limi yo’nalishida malakaviy va
                    ishlab chiqarish amaliyotlari hamda bitiruv malakavish
                    ishlariga rahbarlik qiladi.
                  </p>
                  <h4>3. Kafedraning ilmiy faoliyati</h4>
                  <p>
                    Kafedrada faoliyat olib borayotgan professor-o‘qituvchilar
                    o‘z ilmiy mavzulari bo‘yicha tadqiqot ishlarini davom
                    ettirmoqda. Ilmiy izlanishlar natijalarini kafedra
                    seminarlarida e’lon qilib bormoqdalar, kafedradagi yosh
                    o‘qituvchilar ilmiy salohiyatli o‘qituvchilarga
                    biriktirilgan va olgan natijalari asosida Respublika va
                    xalqaro miqyosidagi ilmiy jurnallarga maqolalar chop
                    etmoqda. <br />
                    Doktorlik dissertasiyalari himoyalari: O.N. Bozorov. (1992
                    y.),
                    <br />
                    PhD dissertasiyalari himoyalari: T.R. Yuldoshev (1990), J.B.
                    Maxmayorov (2023), E.A. Raxmatov (2021), S.B. Samatov
                    (2023), R.M. Yorqulov (2022), A.X. Raximov (2000). <br />
                    Ilmiy unvon xodimlar: O.N. Bozorov-professor unvoni (2023),
                    E.A. Raxmatov-dotsent unvoni (2023), A.Yu. Dustov-dotsent
                    unvoni (2023), R.M. Yorqulov-dotsent unvoni (2024), A.X.
                    Raximov (2021). <br />
                    Kafedra a’zolari Respublika va xorijiy nufuzli ilmiy
                    jurnallarda ilmiy ishlarini chop etishadi, ilmiy
                    anjumanlarda qannashishadi. Oxirgi yillarda chop etilgan
                    ilmiy maqolalrdan namunalar: <br />
                    <br />• X.B. Raxmatov, O.X. Abdullayev, A.Yu. Dustov, D.X.
                    Raxmatov. Исследование кинетики реакции высокомолекулярных
                    углеводородов с синтез-газом. Kompozitsion materiallar.
                    №3/2023. 29-32.
                    <br />• Х.B. Raxmatov, O.X. Abdullayev, A.Yu. Dustov, D.X.
                    Raxmatov. Исследование влияния ратличных факторов на процесс
                    синтеза высокомолекулярных углеводородов из синтез-газа.
                    Kompozitsion materiallar. №3/2023. 22-25.
                    <br />• М. М. Муродов, О. Н. Бозоров, Ж. Ж. Рахманов, Б. Х.
                    Нормаҳматов, П. И. Кушназаров. Маҳаллий хом ашёлаpдан
                    буpғулаш қоpишмалаpи учун такомиллашган хусусиятлаpга эга
                    баpит маъданлаpи асосидаги оғиpлаштиpгичлаpни модификациялаш
                    технологиясини ишлаб чиқиш босқичлаpидаги оптимал
                    шаpоитлаpни аниқлаш. Economy and Innovation. Volume:36/2023.
                    491-497.
                    <br />• М. М. Муродов, О. Н. Бозоров, Ж. Ж. Рахманов, Б. Х.
                    Нормаҳматов, П. И. Кушназаров. Тўқимачиликнинг толали
                    чиқиндилари асосида алмашиниш даражаси паст саналган ярим
                    карбоксиметилцеллюлозанинг олиниш жараёни тадқиқоти ва
                    таҳлил натижалари. Economy and Innovation. Volume:36/2023.
                    485-495.
                    <br />• S.B. Samatov, O.E. Ziyadullayev, A.Ikramov.
                    Alkynylation of benzaldehyde and its r-substituted
                    derivatives based on lithium phenylacetylenide. Kimyo va
                    kimyo texnologiyasi. 4/2023. 48-55.
                    <br />• Sanat Samatov, Odiljon Ziyadullaev, Guzal
                    Kamariddinova. Aerobic oxidation of R-substituted
                    derivatives of acetylene alcohols without a catalyst.
                    Universum: химия и биология. 12(114)/2023.
                    <br />• Ёркулов Руслан Mахаммади угли. Composition and
                    structure of the interfacial boundary Si/Al(111) and
                    Si/Cu(111). Web of scientist: international scientific
                    research journal. 5/2. 1-6.
                    <br />• Б.Е. Умирзаков, Ф.Я. Худайкулов, Р.М. Ёркулов.
                    Закономерности формирования пленок WO3 при термическом
                    окислении W(111) и их электронная структура. фарғона
                    политехника институти и л м и й – т е х н и к а журнали.
                    18/2023. 316-320.
                    <br />• Bakhodir Abdullayev, Mohamed Rifky, Jasur
                    Makhmayorov, Ilkham Usmanov, Tianlong Deng, Murodjon
                    Samadiy. Adsorption Method and Adsorbents for the Recovery
                    of Lithium Compounds from Water Sources. International
                    Journal of Engineering Trends and Technology. 9/71.2023.
                    212-226.
                    <br />• Kasun Dissanayake, Mohamed Rifky, Mohamed Jesfar,
                    Jasur Makhmayorov, Shokir Rakhimkulov, Bakhodir Abdullayev
                    and Murodjon Samadiy. Development of Technology to
                    Incorporate Curry leaves (Murraya Koenjii) to Develop
                    Functional Chicken Sausage and Evaluation of Chemical
                    Properties. IOP Conf. Series: Earth and Environmental
                    Science. 1275.2023. 1-6.
                    <br />• Kasun Dissanayake1, Mohamed Rifky, Mohamed Jesfar,
                    Jasur Makhmayorov, Shokir Rakhimkulov, Bakhodir Abdullayev.
                    Technology Development to Measure Chemical and Oxidative
                    Stability of Edible Oils Using Fourier Transform-Infrared
                    Spectroscopy. IOP Conf. Series: Earth and Environmental
                    Science. 1275.2023.
                    <br />
                    Kafedra xodimlarining ilmiy natijalari quyidagi
                    monografiyalarda o‘z aksini topgan: <br />
                    1. S.B. Samatov. Ароматик алдегидлар асосида ацетилен
                    спиртлари олиниши, хоссалар ва қўлланилиши. Монография. –
                    Chirchiq-2023. «Zebo prints». <br />
                    2. A.Sh. Shukurov. Эффективные химические реагенты для
                    буровых растворов применяемых при бурении нефтегазовых
                    скважин. Монография. – Қарши-2023. «Intellekt». <br />
                  </p>
                  <h4>4. Kafedraning o‘quv-uslubiy faoliyati</h4>
                  <p>
                    Kafedra professor-o‘qituvchilari o‘quv faoliyatidani
                    tashqari, o‘quv-uslubiy ishlar bilan ham shug'ullanadilar.
                    Jumladan, darslik, o‘quv va uslubiy qo‘llanmalar yaratishda
                    samarali faoliyat olib borishmoqdalar. So‘ngi yillarda
                    kafedra professor-o‘qituvchilari tomonidan bir qator
                    darslik, o‘quv va uslubiy qo‘llanmalar tayyorlangan:
                  </p>
                  <div className="row">
                    <div className="col-6 col-md-3">
                      <img src={ImageS1} alt="image" />
                    </div>
                    <div className="col-6 col-md-3">
                      <img src={ImageS2} alt="image" />
                    </div>
                    <div className="col-6 col-md-3">
                      <img src={ImageS3} alt="image" />
                    </div>
                    <div className="col-6 col-md-3">
                      <img src={ImageS4} alt="image" />
                    </div>
                    <div className="col-6 col-md-3">
                      <img src={ImageS5} alt="image" />
                    </div>
                    <div className="col-6 col-md-3">
                      <img src={ImageS6} alt="image" />
                    </div>
                    <div className="col-6 col-md-3">
                      <img src={ImageS7} alt="image" />
                    </div>
                    <div className="col-6 col-md-3">
                      <img src={ImageS8} alt="image" />
                    </div>
                    <div className="col-6 col-md-3">
                      <img src={ImageS9} alt="image" />
                    </div>
                    <div className="col-6 col-md-3">
                      <img src={ImageS10} alt="image" />
                    </div>
                    <div className="col-6 col-md-3">
                      <img src={ImageS11} alt="image" />
                    </div>
                    <div className="col-6 col-md-3">
                      <img src={ImageS12} alt="image" />
                    </div>
                    <div className="col-6 col-md-3">
                      <img src={ImageS13} alt="image" />
                    </div>
                    <div className="col-6 col-md-3">
                      <img src={ImageS14} alt="image" />
                    </div>
                    <div className="col-6 col-md-3">
                      <img src={ImageS15} alt="image" />
                    </div>
                    <div className="col-6 col-md-3">
                      <img src={ImageS16} alt="image" />
                    </div>
                    <div className="col-6 col-md-3">
                      <img src={ImageS17} alt="image" />
                    </div>
                    <div className="col-6 col-md-3">
                      <img src={ImageS18} alt="image" />
                    </div>
                    <div className="col-6 col-md-3">
                      <img src={ImageS19} alt="image" />
                    </div>
                    <div className="col-6 col-md-3">
                      <img src={ImageS20} alt="image" />
                    </div>
                  </div>
                </div>
              )}
              {lang == "ru" && (
                <div>
                  <h4>1. История и деятельность кафедры</h4>
                  <p>
                    Кафедра в Экономико-педагогическом университете в 2023 году
                    Факультет «Информационные технологии и цифровая экономика» в
                    связи с его созданием на этом факультете доцент А.Ю.
                    «Нефтегазовый завод» (НГИ) под руководством Дустова начал
                    работать под названием <br />
                    Факультет и в том числе кафедра НГИ, нефть нашей республики
                    и практичен в различных областях газовой отрасли кто имеет
                    глубокое понимание вопросов, теоретически полный способен
                    анализировать и решать управленческие вопросы высокий
                    уровень с твердыми знаниями подготовка специалистов как
                    основная цель помещать <br />
                    До сих пор кафедра носит название «Нефтегазовые работы».
                    ведется.
                    <br />
                    С 2023 года по настоящее время доцент А.Ю. Дустов
                    руководство делается. <br />
                    За короткий срок на кафедре появились специалисты с высокими
                    званиями. подготовили, в частности, доценты А.Ю. Дустов,
                    Р.М. Луковицы созрели.
                    <br />
                    В настоящее время кафедра имеет 60721800-Нефтегазовые
                    работы. (по сетям) в сфере образования, очной и около 1300
                    студентов обучаются в форме заочного обучения принимает Они
                    имеют квалификацию, имеют ученые степени и звания.
                    профессора-преподаватели соответствующей специальности
                    преподавал предметы. <br />
                    Талантливые студенты, обучающиеся на кафедре
                    профессорам-преподавателям по системе наставник-студент
                    прикрепленный и, следовательно, потенциальный для отдела
                    обеспечивается целенаправленная подготовка персонала. Это
                    оно одаренные студенты являются наставниками по своим
                    учебным предметам Публикация научных статей и диссертаций
                    совместно с заключено, помимо хозяйственных контрактов
                    выполняются и предоставляются производственными
                    предприятиями активное участие в решении проблемных тем
                    делаем.
                  </p>
                  <h4>2. Kafedraning o’quv faoliyati</h4>
                  <p>
                    В настоящее время на кафедре нефти и газа к.т.н., проф. НА.
                    Бозоров, к.т.н., проф. Т.Р. Юлдошев, доц. А. Ю. Дустов,
                    к.т.н., доц. Э.А. Рахматов, к.т.н., доц. Р.М. Йоркулов,
                    к.ф.ф.д. доц. С.Б. Саматов, к.т.н., доц. Дж.Б. Махмаёров,
                    доц. А.Р. Рахимов, доц. О.О. Назаров, ф.м.ф.н., доц. А.Х.
                    Рахимов, старшие преподаватели Ж.Ж. Рахманов, С.С.
                    Джабборов, Р.Дз. Шоймов, С.Ш. Саматов, С.Н. Мейлиев, молодые
                    профессора Х.З. Джораева, А.С. Ботиров, А.Ж. Йонузоков, А.Ш.
                    Шукуров, А.М. Джораев, И.К. Киличев, Г.О. Хамрокулова,
                    руководитель аппарата Х.А. Тогаев и другие активно работают.{" "}
                    <br />
                    Профессора и преподаватели кафедры <br />
                    60721800-Нефтегазовые работы (по отраслям) <br />
                    высшее (дневное, вечернее и заочное) образование
                    теоретические и практические по следующим дисциплинам
                    тренинги проводятся: <br />
                    • Геодезия;
                    <br />
                    • Геология нефти и газа;
                    <br />
                    • Физика;
                    <br />
                    • Общая и подземная гидравлика;
                    <br />
                    • Метрология и стандартизация;
                    <br />
                    • Основы нефтегазовой работы;
                    <br />
                    • Геология месторождений нефти и газа;
                    <br />
                    • Тепловая техника;
                    <br />
                    • Бурение нефтяных и газовых скважин;
                    <br />
                    • Физика залежей нефти и газа;
                    <br />
                    • Общая химическая технология;
                    <br />
                    • Нефтегазохимия;
                    <br />
                    • Технология добычи сжиженного топлива;
                    <br />
                    • Основной технологический процесс и устройства;
                    <br />
                    <br />
                    • Технология глубокой переработки нефти и газа.
                    <br />
                    <br />
                    • Синтетическое топливо, разбавленное природным газом.
                    технология приобретения
                    <br />
                    • Геофизические исследования в скважинах
                    <br />
                    <br />
                    • Машины и оборудование для нефтяных и газовых месторождений
                    <br />
                    <br />
                    • Технология получения сжиженного синтетического топлива
                    <br />
                    • Химическая технология переработки нефти и газа
                    <br />
                    • Техника и технология добычи нефти и газа
                    <br />
                    • Современный анализ нефтегазовой продукции методы
                    <br />
                    • Технология добычи синтез-газа
                    <br />
                    • Управление производительностью скважин
                    <br />
                    • Предварительная подготовка и переработка нефти и газа
                    технологии и оборудование
                    <br />
                    Кроме того, 60721800-Нефтегазовые работы (сети о)
                    квалификация в области довузовского образования и
                    производственная практика и дипломная квалификация руководит
                    его работой.
                  </p>
                  <h4>3. Научная деятельность кафедры</h4>
                  <p>
                    Преподаватели, работающие на кафедре продолжать исследования
                    по своей научной тематике делает Отдел результатов научных
                    исследований заявляют на своих семинарах молодежь кафедры
                    преподаватели преподавателям с научным потенциалом
                    прикреплены и основаны на результатах, полученных
                    Республикой и публиковать статьи в международных научных
                    журналах делается. <br />
                    Защиты докторских диссертаций: О.Н. Базаров. (1992 й.),
                    <br />
                    Защита кандидатских диссертаций: Т.Р. Юлдошев (1990), Ж.Б.
                    Махмаёров (2023), Е.А. Рахматов (2021), С.Б. Саматов (2023),
                    Р.М. Йоркулов (2022), А.Х. Рахимов (2000). <br />
                    Научное звание сотрудников: О.Н. Звание Бозорова-профессора
                    (2023 г.), Э.А. Рахматова-доцент (2023 г.), А.Ю. Дустов –
                    доцент титул (2023), Р.М. Звание Йоркулова-доцента (2024
                    г.), А.Х. Рахимов (2021). <br />
                    Членами кафедры являются видные ученые республики и
                    зарубежья. они публикуют свои научные работы в журналах,
                    научных они истекают кровью на конгрессах. Опубликовано в
                    последние годы образцы научных статей: <br />
                    <br />• Х.Б. Рахматов, О.Х. Абдуллаев, А.Ю. Дустов, Д.Х.
                    Спасибо. Исследование кинетики реакций высокомолекулярных
                    реакций. Синтез-газ Углевородова. Композитные материалы.
                    №3/2023. 29-32.
                    <br />• Х.Б. Рахматов, О.Х. Абдуллаев, А.Ю. Дустов, Д.Х.
                    Спасибо. Исследование влияния различныx факторов на процесс
                    синтез высокомолекулярных углеродов из синтез-газа.
                    Композитные материалы. №3/2023. 22-25.
                    <br />• М. М. Мурадов, О. Н. Бозоров, Ж. Дж. Рахманов, Б.
                    ИКС. Нормахматов, П. Я. Кушназаров. Из местного сырья Имеет
                    улучшенную функцию нанесения покрытия распылением.
                    модификация умягчителя на основе бапитовой руды оптимальная
                    технология на стадии разработки для выявления шапоитлапа.
                    Экономика и инновации. Объем: 36/2023. 491-497.
                    <br />• М. М. Мурадов, О. Н. Бозоров, Ж. Дж. Рахманов, Б.
                    ИКС. Нормахматов, П. Я. Кушназаров. Текстильное волокно
                    Исходя из отходов, курс обмена считается низким исследование
                    процесса производства карбоксиметилцеллюлозы и результаты
                    анализа. Экономика и инновации. Объем: 36/2023. 485-495.
                    <br />• С.Б. Саматов, О.Е. Зиядуллаев, А. Икрамов.
                    Алкинилирование бензальдегида и его r-замещенного
                    производные на основе фенилацетиленида лития. Химия и
                    химическая технология. 4/2023. 48-55.
                    <br />• Санат Саматов, Одилжон Зиядуллаев, Гузал
                    Камариддинова. Аэробное окисление R-замещенных производные
                    ацетиленовых спиртов без катализатора. Универсум: химия и
                    биология. 12(114)/2023.
                    <br />• Йоруклов Руслан Махаммади угли. Состав и структура
                    межфазной границы Si/Al(111) и Si/Cu(111). Сеть науки:
                    международная наука исследовательский журнал. 5/2. 1-6.
                    <br />• Б.Е. Умирзаков, Ф.Я. Худайкулов, Р.М. Йорков.
                    Закономерности формирования пленки WO3 при термическом
                    воздействии. окисление W(111) i ix электронная структура.
                    Фергана научно-технический журнал Политехнического
                    института. 18/2023. 316-320.
                    <br />• Баходир Абдуллаев, Мохамед Рифки, Джасур Махмаёров,
                    Ильхам Усманов, Тяньлун Дэн, Муроджон Самадхи. Адсорбционный
                    метод и адсорбенты для восстановления. соединений лития из
                    водных источников. Международный Журнал инженерных тенденций
                    и технологий. 71.09.2023. 212-226.
                    <br />• Касун Диссанаяке, Мохамед Рифки, Мохамед Джесфар,
                    Джасур Махмаёров, Шакир Рахимкулов, Баходир Абдуллаев и
                    Муродджон Самади. Развитие технологий для Включите листья
                    карри (Murraya Koenjii) для развития. Функциональная куриная
                    колбаса и оценка химических веществ Характеристики.
                    Конференция ИОП. Серия: Земля и окружающая среда Наука.
                    1275.2023. 1-6.
                    <br />• Касун Диссанаяке1, Мохамед Рифки, Мохамед Джесфар,
                    Джасур Махмаёров, Шакир Рахимкулов, Баходир Абдуллаев.
                    Разработка технологий для измерения химических и
                    окислительных Стабильность пищевых масел с использованием
                    инфракрасного преобразования Фурье Спектроскопия.
                    Конференция ИОП. Серия: Земля и окружающая среда Наука.
                    1275.2023.
                    <br />
                    Научные результаты сотрудников кафедры следующие: отражено в
                    монографиях: <br />
                    1. С.Б. Саматов. Ацетилен на основе ароматических альдегидов
                    добыча, свойства и применение спиртов. Монография. –
                    Чирчик-2023. «Зебо-принц». <br />
                    2. А.Ш. Шукуров. Для эффективных химических реагентов
                    буровых растов применяемых при бурении нефтегазовых хорошо
                    Монография. - Против 2023 года. «Интеллект». <br />
                  </p>
                  <h4>4. Учебно-методическая деятельность кафедры</h4>
                  <p>
                    Научная деятельность профессоров-преподавателей кафедры
                    кроме того, они занимаются также учебно-методической
                    работой. В частности, в создании учебников,
                    учебно-методических пособий. работают эффективно. В
                    последние годы ряд профессоров и преподавателей кафедры
                    подготовлены учебники, учебно-методические пособия:
                  </p>
                  <div className="row">
                    <div className="col-6 col-md-3">
                      <img src={ImageS1} alt="image" />
                    </div>
                    <div className="col-6 col-md-3">
                      <img src={ImageS2} alt="image" />
                    </div>
                    <div className="col-6 col-md-3">
                      <img src={ImageS3} alt="image" />
                    </div>
                    <div className="col-6 col-md-3">
                      <img src={ImageS4} alt="image" />
                    </div>
                    <div className="col-6 col-md-3">
                      <img src={ImageS5} alt="image" />
                    </div>
                    <div className="col-6 col-md-3">
                      <img src={ImageS6} alt="image" />
                    </div>
                    <div className="col-6 col-md-3">
                      <img src={ImageS7} alt="image" />
                    </div>
                    <div className="col-6 col-md-3">
                      <img src={ImageS8} alt="image" />
                    </div>
                    <div className="col-6 col-md-3">
                      <img src={ImageS9} alt="image" />
                    </div>
                    <div className="col-6 col-md-3">
                      <img src={ImageS10} alt="image" />
                    </div>
                    <div className="col-6 col-md-3">
                      <img src={ImageS11} alt="image" />
                    </div>
                    <div className="col-6 col-md-3">
                      <img src={ImageS12} alt="image" />
                    </div>
                    <div className="col-6 col-md-3">
                      <img src={ImageS13} alt="image" />
                    </div>
                    <div className="col-6 col-md-3">
                      <img src={ImageS14} alt="image" />
                    </div>
                    <div className="col-6 col-md-3">
                      <img src={ImageS15} alt="image" />
                    </div>
                    <div className="col-6 col-md-3">
                      <img src={ImageS16} alt="image" />
                    </div>
                    <div className="col-6 col-md-3">
                      <img src={ImageS17} alt="image" />
                    </div>
                    <div className="col-6 col-md-3">
                      <img src={ImageS18} alt="image" />
                    </div>
                    <div className="col-6 col-md-3">
                      <img src={ImageS19} alt="image" />
                    </div>
                    <div className="col-6 col-md-3">
                      <img src={ImageS20} alt="image" />
                    </div>
                  </div>
                </div>
              )}

              {lang == "en" && (
                <div>
                  <h4>1. History and activities of the department</h4>
                  <p>
                    Department at the Economics and Pedagogical University in
                    2023 Faculty of Information Technologies and Digital Economy
                    in connection with its creation at this faculty, Associate
                    Professor A.Yu. "Oil and Gas Plant" (NGI), under the
                    leadership of Dustov, began work under the name <br />
                    Faculty, including the Department of Oil and Gas
                    Engineering, oil of our republic and practical in various
                    areas of the gas industry who have deep understanding of
                    issues, theoretically fully capable analyze and solve
                    management issues high level with solid knowledge training
                    specialists as the main goal is to place <br />
                    Until now, the department is called “Oil and Gas Works”. is
                    underway.
                    <br />
                    From 2023 to the present, Associate Professor A.Yu. Dustov
                    guidance is being made. <br />
                    In a short period of time, specialists with high ranks.
                    prepared, in particular, by associate professors A.Yu.
                    Dustov, R.M. The bulbs are ripe.
                    <br />
                    Currently the department has 60721800-Oil and Gas work. (via
                    networks) in the field of education, full-time and about
                    1300 students are trained in the form of correspondence
                    courses. They accept are qualified, have academic degrees
                    and titles. professors and teachers of the relevant
                    specialty taught subjects. <br />
                    Talented students studying at the department
                    professors-teachers on the mentor-student system attached
                    and therefore potential for department targeted training of
                    personnel is provided. This it gifted students are mentors
                    in their own ways academic subjects Publication of
                    scientific articles and dissertations together with
                    concluded, in addition to business contracts performed and
                    provided by production enterprises actively participate in
                    solving problematic issues we do.
                  </p>
                  <h4>2. Educational activities of the department</h4>{" "}
                  <p>
                    Currently, at the Department of Oil and Gas, Ph.D., prof. ON
                    THE. Bozorov, Ph.D., prof. T.R. Yuldoshev, associate
                    professor A. Yu. Dustov, Ph.D., Associate Professor E.A.
                    Rakhmatov, Ph.D., Assoc. R.M. Yorkulov, c.f.f.d. Assoc. S.B.
                    Samatov, Ph.D., Associate Professor. J.B. Makhmayorov,
                    Assoc. A.R. Rakhimov, associate professor O.O. Nazarov,
                    Ph.D., Associate Professor. OH. Rakhimov, senior teachers
                    Zh.Zh. Rakhmanov, S.S. Jabborov, R.Dz. Shoimov, S.Sh.
                    Samatov, S.N. Meiliev, young Professor H.Z. Joraeva, A.S.
                    Botirov, A.Zh. Yonuzokov, A.Sh. Shukurov, A.M. Joraev, I.K.
                    Kilichev, G.O. Khamrokulova, Chief of Staff H.A. Togaev and
                    others are actively working. <br />
                    Professors and teachers of the department <br />
                    60721800-Oil and gas work (by industry) <br />
                    higher (day, evening and correspondence) education
                    theoretical and practical in the following disciplines
                    trainings are conducted: <br />
                    • Geodesy;
                    <br />
                    • Geology of oil and gas;
                    <br />
                    • Physics;
                    <br />
                    • General and underground hydraulics;
                    <br />
                    • Metrology and standardization;
                    <br />
                    • Fundamentals of oil and gas work;
                    <br />
                    • Geology of oil and gas fields;
                    <br />
                    • Thermal technology;
                    <br />
                    • Drilling of oil and gas wells;
                    <br />
                    • Physics of oil and gas deposits;
                    <br />
                    • General chemical technology;
                    <br />
                    • Petroleum and gas chemistry;
                    <br />
                    • Liquefied fuel production technology;
                    <br />
                    • Main technological process and devices;
                    <br />
                    <br />
                    • Technology of deep processing of oil and gas.
                    <br />
                    <br />
                    • Synthetic fuel diluted with natural gas. acquisition
                    technology
                    <br />
                    • Geophysical surveys in wells
                    <br />
                    <br />
                    • Machinery and equipment for oil and gas fields
                    <br />
                    <br />
                    • Technology for producing liquefied synthetic fuel
                    <br />
                    • Chemical technology of oil and gas processing
                    <br />
                    • Equipment and technology of oil and gas production
                    <br />
                    • Modern analysis of oil and gas products methods
                    <br />
                    • Synthesis gas production technology
                    <br />
                    • Well productivity management
                    <br />
                    • Pre-treatment and processing of oil and gas technologies
                    and equipment
                    <br />
                    In addition, 60721800-Oil and gas works (networks about)
                    qualifications in the field of pre-university education and
                    industrial practice and diploma qualification is managed by
                    his work.
                  </p>
                  <h4>3. Scientific activities of the department</h4>
                  <p>
                    Teachers working at the department continue research on its
                    scientific topics is done by the Department of Scientific
                    Results research, the youth of the department declare at
                    their seminars teachers for teachers with scientific
                    potential attached and based on the results obtained
                    Republic and publish articles in international scientific
                    magazines is done. <br />
                    Defense of doctoral dissertations: O.N. Bazarov. (1992),
                    <br />
                    Defense of candidate dissertations: T.R. Yuldoshev (1990),
                    Zh.B. Makhmayorov (2023), E.A. Rakhmatov (2021), S.B.
                    Samatov (2023), R.M. Yorkulov (2022), A.Kh. Rakhimov (2000).{" "}
                    <br />
                    Scientific title of employees: O.N. Title of
                    Bozorov-professor (2023), E.A. Rakhmatova-Assistant
                    Professor (2023), A.Yu. Dustov – associate professor title
                    (2023), R.M. Title of Yorkulov Associate Professor (2024
                    g.), A.Kh. Rakhimov (2021). <br />
                    The members of the department are prominent scientists of
                    the republic and abroad. they publish their scientific works
                    in journals, scientific they bleed at congresses. Published
                    in recent years samples of scientific articles: <br />
                    <br />• H.B. Rakhmatov, O.Kh. Abdullaev, A.Yu. Dustov, D.Kh.
                    Thank you. Study of the kinetics of reactions of high
                    molecular weight reactions. Carbon synthesis gas. Composite
                    materials. No. 3/2023. 29-32.
                    <br />• H.B. Rakhmatov, O.Kh. Abdullaev, A.Yu. Dustov, D.Kh.
                    Thank you. Study of the influence of various factors on the
                    process synthesis of high molecular weight carbons from
                    synthesis gas. Composite materials. No. 3/2023. 22-25.
                    <br />• M. M. Muradov, O. N. Bozorov, Zh. J. Rakhmanov, B.
                    X. Normakhmatov, P. Ya. Kushnazarov. Made from local raw
                    materials Improved spray coating function. Optimal
                    modification of the softener based on bapit ore technology
                    is under development to detect chapoitlap. Economics and
                    innovation. Volume: 36/2023. 491-497.
                    <br />• M. M. Muradov, O. N. Bozorov, Zh. J. Rakhmanov, B.
                    X. Normakhmatov, P. Ya. Kushnazarov. Textile fiber Based on
                    waste, the exchange rate is considered low research
                    carboxymethylcellulose production process and results
                    analysis. Economics and innovation. Volume: 36/2023.
                    485-495.
                    <br />• S.B. Samatov, O.E. Ziyadullaev, A. Ikramov.
                    Alkynylation of benzaldehyde and its r-substituted
                    derivatives based on lithium phenylacetylenide. Chemistry
                    and chemical Technology. 4/2023. 48-55.
                    <br />• Sanat Samatov, Odiljon Ziyadullaev, Guzal
                    Kamariddinova. Aerobic oxidation of R-substituted
                    derivatives acetylene alcohols without catalyst. Universe:
                    chemistry and biology. 12(114)/2023.
                    <br />• Yoruklov Ruslan Mahammadi coals. Composition and
                    structure interface Si/Al(111) and Si/Cu(111). Science
                    Network: international science research journal. 5/2. 1-6.
                    <br />• B.E. Umirzakov, F.Ya. Khudaykulov, R.M. Yorks.
                    Regularities of WO3 film formation under thermal influence.
                    oxidation of W(111) i ix electronic structure. Fergana
                    scientific and technical journal of the Polytechnic
                    Institute. 18/2023. 316-320.
                    <br />• Bakhodir Abdullaev, Mohamed Rifki, Jasur
                    Makhmayorov, Ilham Usmanov, Tianlong Dan, Murodjon Samadhi.
                    Adsorption method and adsorbents for recovery. lithium
                    compounds from water sources. International Journal of
                    Engineering Trends and technology. 09/71/2023. 212-226.
                    <br />• Kasun Dissanayake, Mohamed Rifki, Mohamed Jesfar,
                    Jasur Makhmayorov, Shakir Rakhimkulov, Bakhodir Abdullaev
                    and Murodjon Samadi. Technology Development for Turn Leaves
                    curry (Murraya Koenjii) for development. Functional chicken
                    sausage and chemical assessment Characteristics. IEP
                    Conference. Series: Earth and Environment Science.
                    1275.2023. 1-6.
                    <br />• Kasun Dissanayake1, Mohamed Rifki, Mohamed Jesfar,
                    Jasur Makhmayorov, Shakir Rakhimkulov, Bakhodir Abdullaev.
                    Development of technologies for measuring chemical and
                    oxidative Stability of edible oils using Fourier transform
                    infrared spectroscopy. IEP Conference. Series: Earth and
                    Environment Science. 1275.2023.
                    <br />
                    The scientific results of the department staff are as
                    follows: reflected in monographs: <br />
                    1. S.B. Samatov. Acetylene based on aromatic aldehydes
                    extraction, properties and use of alcohols. Monograph. –
                    Chirchik-2023. "Zebo Prince" <br />
                    2. A.Sh. Shukurov. For effective chemical reagents drilling
                    fluids used in oil and gas drilling are well Monograph. -
                    Against 2023. "Intelligence". <br />
                  </p>
                  <h4>
                    4. Educational and methodological activities of the
                    department
                  </h4>
                  <p>
                    Scientific activities of professors and teachers of the
                    department in addition, they are also involved in
                    educational and methodological work. In particular, in the
                    creation of textbooks, teaching aids. work efficiently. IN
                    In recent years, a number of professors and teachers of the
                    department textbooks, teaching aids have been prepared:
                  </p>
                  <div className="row">
                    <div className="col-6 col-md-3">
                      <img src={ImageS1} alt="image" />
                    </div>
                    <div className="col-6 col-md-3">
                      <img src={ImageS2} alt="image" />
                    </div>
                    <div className="col-6 col-md-3">
                      <img src={ImageS3} alt="image" />
                    </div>
                    <div className="col-6 col-md-3">
                      <img src={ImageS4} alt="image" />
                    </div>
                    <div className="col-6 col-md-3">
                      <img src={ImageS5} alt="image" />
                    </div>
                    <div className="col-6 col-md-3">
                      <img src={ImageS6} alt="image" />
                    </div>
                    <div className="col-6 col-md-3">
                      <img src={ImageS7} alt="image" />
                    </div>
                    <div className="col-6 col-md-3">
                      <img src={ImageS8} alt="image" />
                    </div>
                    <div className="col-6 col-md-3">
                      <img src={ImageS9} alt="image" />
                    </div>
                    <div className="col-6 col-md-3">
                      <img src={ImageS10} alt="image" />
                    </div>
                    <div className="col-6 col-md-3">
                      <img src={ImageS11} alt="image" />
                    </div>
                    <div className="col-6 col-md-3">
                      <img src={ImageS12} alt="image" />
                    </div>
                    <div className="col-6 col-md-3">
                      <img src={ImageS13} alt="image" />
                    </div>
                    <div className="col-6 col-md-3">
                      <img src={ImageS14} alt="image" />
                    </div>
                    <div className="col-6 col-md-3">
                      <img src={ImageS15} alt="image" />
                    </div>
                    <div className="col-6 col-md-3">
                      <img src={ImageS16} alt="image" />
                    </div>
                    <div className="col-6 col-md-3">
                      <img src={ImageS17} alt="image" />
                    </div>
                    <div className="col-6 col-md-3">
                      <img src={ImageS18} alt="image" />
                    </div>
                    <div className="col-6 col-md-3">
                      <img src={ImageS19} alt="image" />
                    </div>
                    <div className="col-6 col-md-3">
                      <img src={ImageS20} alt="image" />
                    </div>
                  </div>
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
