import instructors from "../../data/Instructors.json";
import { useIntl } from "react-intl";
import { getProductName } from "../../helpers/general";
import BooksImage from "../../assets/images/faculties-6/books.png";

const InstructorDetailsMain = () => {
  const intl = useIntl();
  const instructor = instructors.find((b) => b.kafedra == "6");
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
                <div>
                  <h4>Kafedra tarixi va faoliyati</h4>
                  <p>
                    Kafedra 2023-yilda Iqtisodiyot va pedagogika universitetida
                    “Axborot texnologiyalari va raqamli iqtisodiyot” fakultetini
                    tashkil topishi munosabati bilan, shu fakultet qoshida
                    prof.v.b. S.B.Murtazova rahbarligida «Tarix va ijtimoiy
                    fanlar» nomi bilan faoliyat boshlagan va hozirgacha o‘zi
                    rahbarlik qilib kelmoqda. <br />
                    Fakultet va shu jumladan, “Tarix va ijtimoiy fanlar”
                    kafedrasi, ijtimoiy-gumanitar fanlar sohasida zamonaviy
                    fikrlaydigan yetuk mutaxassislarni tayyorlashni o‘z oldiga
                    asosiy maqsad qilib qo‘ygan. <br />
                    Kafedrada yuqori ilmiy daraja va unvonga ega mutaxassislar,
                    xususan fan doktori Ch.Temirova, fan nomzodlari va PhD
                    R.Asadova, B.Mamatqulov, N.Sharopova, A.Nasimov,
                    D.Raxmatova, B.Boqiyevlar samarali faoliyat yuritib
                    kelishmoqda.
                    <br />
                  </p>
                  <h4>Kafedraning o‘quv faoliyati</h4>
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
                    Hozirgi kunda “Tarix va ijtimoiy fanlar” fan doktori
                    Ch.Temirova, fan nomzodlari va PhD R.Asadova, B.Mamatqulov,
                    N.Sharopova, A.Nasimov, D.Raxmatova, B.Boqiyev,
                    o‘qituvchilar Sh.Jumayeva, U.Ergashev, A.Qurbonov,
                    M.Qurbonova, Sh.Elboyeva, D.Axmedova, B.Jalilov,
                    O‘.To‘rayev, S.Abduraimova, J.Tog‘aymurodov, N.Ashurov,
                    I.Jomurodova doktorantlar A.Axmadov, X.Tursunov, kabinet
                    mudiri M.Toshpo‘latova va boshqalar faol mehnat qilmoqdalar.{" "}
                    <br />
                    Kafedra professor-o’qituvchilari tomonidan <br />
                    60111100 – “Tarix”;
                    <br />
                    60110200 – “Maktabgacha ta’lim”;
                    <br />
                    60110500 – “Boshlang‘ich ta’lim”;
                    <br />
                    60111800 – “Xorijiy til va adabiyoti”;
                    <br />
                    60112200 – “Jismoniy madaniyat”;
                    <br />
                    60310100 – “Iqtisodiyot”;
                    <br />
                    60610200 – “Axborot tizimlari va texnologiyalari”;
                    <br />
                    60721800 – “Neft va gaz ishi”
                    <br />
                    bakalavriat (kunduzgi, kechki va sirtqi) ta’limi
                    yo’nalishlarida quyidagi fanlardan nazariy va amaliy
                    mashg’ulotlar olib boriladi:
                    <br />
                    • O‘zbekiston tarixi; <br />
                    • Jahon tarixi; <br />
                    • Arxeologiya; <br />
                    • Yordamchi tarix fanlari; <br />
                    • Muzeyshunoslik; <br />
                    • Tarix o‘qitish metodikasi; <br />
                    • O‘rta Osiyo xonliklari tarixiy geografiyasi; <br />
                    • O‘zbekiston toponimikasi; <br />
                    • Sharq allomalari ilmiy merosi; <br />
                    • Falsafa; <br />
                    • Dinshunoslik; <br />
                    • O‘zbekistonning eng yangi tarixi; <br />
                    Bulardan tashqari, 60111100 – “Tarix”, 60110500 –
                    “Boshlang‘ich ta’lim” bakalavriat ta’limi yo’nalishlarida
                    malakaviy, pedagogik va ishlab chiqarish amaliyotlari hamda
                    bitiruv malakavish ishlariga rahbarlik qiladi. <br />
                    Magistratura ta’limi bo’yicha kafedra
                    professor-o’qituvchilari <br />
                    70220301 – “Tarix (yo’nalishlar va faoliyat turi bo’yicha)”;{" "}
                    <br />
                    • Ilmiy tadqiqot metodologiyasi; <br />
                    • Qadimgi Sharq tarixi manbalari va tarixshunosligi; <br />
                    • O‘zbekistonda yer-suv munosabatlari; <br />
                    • Tarixiy rekonstruksiya masalalari; <br />
                    • Paleoekologiya va sivilizatsiya dinamikasi; <br />•
                    O‘zbekistonda moliya siyosati va pul islohotlari tarixi;{" "}
                    <br />
                    • XX asrda Yevroosiyoda siyosiy jarayonlar <br />
                    fanlaridan mashg’ulotlar olib boradilar. <br />
                  </p>
                  <h4>Kafedraning ilmiy faoliyati</h4>
                  <p>
                    Doktorlik dissertasiyalari himoyalari: Kafedra dotsentlari
                    S.B.Murtazova, B.Sh.Mamatqulovlar 2025-yilda doktorlik
                    dissertatsiyasini himoya qilishadi. <br />
                    PhD dissertasiyalari himoyalari: Kafedra o‘qituvchilari
                    U.Ergashev, S.Murodova, doktorant A.Axmadovlar 2024-yilda,
                    Sh.Elboyeva, X.Tursunov, J.Tog‘aymurodovlar 2025-yilda PhD
                    dissertatsiyalari himoyasiga chiqishadi. <br />
                    Kafedra a’zolari Respublika va xorijiy nufuzli ilmiy
                    jurnallarda ilmiy ishlarini chop etishadi, ilmiy
                    anjumanlarda qannashishadi. Oxirgi yillarda chop etilgan
                    ilmiy maqolalardan namunalar:
                    <br />
                    <br /> • S.Murtazova. From the history of music culture of
                    Amir Timur and the Temurian period. International
                    multidisciplinary journal for research development.SJIF
                    2023: 6.563.
                    <br /> • S.Murtazova. O’zbek san’atining qatag‘on qilingan
                    namoyandalari va ularning ayanchli taqdiri haqida.
                    Sohibqiron yulduzi.2023, №4
                    <br /> • S.Murtazova. Vatan himoyasi-eng oliy sharaf. Wrodly
                    knowledge. International journal of scientific researchers.
                    Impact factor-7,293. 2024
                    <br /> • Xayitkulov B.X. Complete Solution of a Class of
                    Differential Pursuit Games with Integral Constraint and
                    Impulse Control// Russian Mathematics. Rossiya. 2022. 22-29.
                    https://link.springer.com/article/10.3103/S1066369X22030069
                    <br /> • R.Asadova. O‘ZBYeK- HIND MADANIY ALOQALARI.
                    International Journal of Formal Education. Volume: 02 Issue:
                    11| November – 2023 ISSN: 2720-6874
                    http://journals.academiczone.net/index.php/ijfe
                    <br /> • R.Asadova. Sotrudnichestvo mejdu stranami v godы
                    nezavisimosti. Xorazm Ma’mun akademiyasi axborotnomasi:
                    ilmiy jurnal.-№11/3 (108), Xorazm Ma’mun akademiyasi, 2023
                    y. – 251 b. – Bosma nashrning elektron varianti -
                    http://mamun.uz/uz/page/56 o B.Mamatqulov. O‘zbekistonda
                    1925-1954 –yillarda sanoat sohasida amalga oshirilgan
                    tadbirlar va ularning natijalari // Xorazm Ma’mun
                    akademiyasi axborotnomasi. ‒ Xiva, 2023. ‒ №12/5. – B. 61 –
                    65. http://mamun.uz/uz/page/56
                    <br /> • B.Mamatqulov. O‘zbekiston gaz-oltingugurt
                    sanoatining yuzaga kelishi va uning rivojlanish tarixi
                    (Qashqadaryo viloyati misolida) // Ijtimoiy-gumanitar
                    fanlarning dolzarb muammolari. - №12/1(3)-2023. ISSN:
                    2181-1342 (Online) https://scienceproblems.uz
                    <br /> • Sharopova Nigora Akbarovna. Effects of Activities
                    and Reforms in the Field of General Education //
                    International Journal of Development and Public Policy |
                    e-ISSN: 2792-3991 | www.openaccessjournals.eu | Volume: 3
                    Issue: 9. impak faktor-10,5-2023.
                    https://openaccessjournals.eu/index.php/ijdpp/article/view/2272
                    <br /> • M.Qurbonova. Internatsional journal of recently
                    scientific researchers theory. Languase is the basic of the
                    culture of every nation. Vol.1.No.9(2023) ISSN: 2992-8885
                    10.12.23. http://uzresearchers.com.
                    <br /> • M.Qurbonova. International Journal of Formal
                    Education. Languase is our wealth. Volume: 02 Issue: 11|
                    November–2023 ISSN: 2720-6874
                    http://journals.academiczone.net/index.php/ijfe
                    <br /> • Sh.Jumayeva. Social and spiritual environment and
                    its influence on upbringing and education. International
                    Journal of Formal Education . Volume: 02 Issue: 11| November
                    – 2023. ISSN:27206874.
                    http://journals.academiczone.net/index.php/ijfe/article/view/1517/1311
                    <br /> • Sh.Jumayeva. the use of pedagogical methods in the
                    educational process. development of pedagogical creativity
                    in modern education.2023..Vol. 1. Issue 3.Conference of
                    Finlandy
                    <br /> • Murodova Sadoqat. Mustaqillik yillarda o'zbek
                    folklor an’analarini rivojlanishi tarixidan
                    https://www.periodica.org/index.php/journal/article/view/244
                    <br /> • Sh.Elboyeva. Increasing the role of friendly
                    societies and strengthening their participation in the life
                    of the population best journal of innovation in science,
                    research and development Volume:2 Issue:4|2023
                    www.bjisrd.com features 236-239.
                    <br /> • Sh.Elboyeva. International bulletin of applied
                    science and technology echnology UIF = 8.2 | SJIF = 5.955
                    ISSN: 2750-3402 ibastdevelopment of social activity of women
                    in the higher education system Senior lecturer of the
                    Department of history and Social Sciences University of
                    Economics and pedagogy non-governmental educational
                    institutionttps://doi.org/10.5281/zenodo.8426626.
                    <br /> • A.Qurbonov. Central asian journal of social
                    sciences and history Development of the Craft Industry in
                    the City of Karshi at the beginning of the 19th-20th
                    Centuries Vol.4 N. 12 (2023): CAJSSH
                    <br /> • D.Axmedova. Spiritual image of young people with a
                    modern worldview. In Volume 3, Issue 11 of “Oriental
                    Renaissance: Innovative, educational, natural and social
                    sciences” scientific journal on November, 2023304-309st.
                    <br /> • J.Tog‘aymurodov. Rajabi dynasty-in the viewpoint of
                    a new era In Volume 11 Issue 12, December 2023 Galaxy
                    international interdisciplinary research journal GIIRJ) ISSN
                    (E):2347-6915
                    <br /> • N.Ashurov. Eurasian journal of social
                    sciences,philosophy and culture Innovative Academy
                    ResearchSupport Center Received: 06th December 2023
                    Accepted: 15th Online: 16th
                    <br /> • I.Jomurodov. New Modern Western Philosophy (In the
                    Example of K. Popper). Pedagogical Cluster- Journal of
                    Pedagogical Developments PCJPD: Volume 2 Issue 4, April
                    2024, online: ISSN 2956-896X.
                    https://webofjournals.com/index.php/4/article/view/1195/1162
                  </p>

                  <h4>
                    Kafedra xodimlarining ilmiy natijalari quyidagi
                    monografiyalarda o‘z aksinini topgan:
                  </h4>
                  <p>
                    1. S.Murtazova, N.Akbarova. Farg’ona viloyati musiqa
                    maktablari faoliyati tarixi (1991-2020 qq.)
                    “Ilm-fan-ma’naviyat” 2024 <br />
                    2. R.Asadova. O‘zbekiston - Hindiston o‘rtasidagi o‘zaro
                    iqtisodiy va madaniy sohalardagi hamkorlik, R.B.Asadova,
                    Monografiya. - Qarshi: «Intellekt» nashriyoti, 2023. –149 b.
                    <br />
                    3. B.Mamatqulov. O‘zbekistonda sanoatlashtirish siyosatining
                    amalga oshirilishi va uning oqibatlari (1925-1941-yy.);
                    Monografiya. T.: “Lesson Press” MCHJ nashriyoti. - 2023.
                    -134 b.
                    <br />
                  </p>
                  <h4>Kafedraning o‘quv-uslubiy faoliyati:</h4>
                  <p>
                    Kafedra professor-o‘qituvchilari o‘quv faoliyatidani
                    tashqari, o‘quv-uslubiy ishlar bilan ham shug'ullanadilar.
                    Jumladan, darslik, o‘quv va uslubiy qo‘llanmalar yaratishda
                    samarali faoliyat olib borishmoqdalar. <br />
                    So‘nggi 10 yillarda kafedra professor-o‘qituvchilari
                    tomonidan bir qator darslik, o‘quv va uslubiy qo‘llanmalar
                    tayyorlangan: <br />
                    1. S.Murtazova, G.Mo‘minova. Noveyshaya istoriya
                    Uzbekistana. Intellekt, 2023 <br />
                    2. S.Murtazova. O‘zbekiston musiqa madaniyatining
                    mustaqillik davri tarixi. Qarshi, 2023 <br />
                    3. S.Murtazova. Istoriya muzikalnoy kulturi Uzbekistana v
                    period nezavisimosti. Qarshi, 2023 <br />
                  </p>
                  <div className="row">
                    <div className="col-12">
                      <img className="w-100" src={BooksImage} alt="image" />
                    </div>
                  </div>
                </div>
              )}
              {lang == "ru" && (
                <div>
                  <h4>Кафедра тарикси ва фаолияти</h4>{" "}
                  <p>
                    Кафедра 2023-й год Иктисодийот ва педагогического
                    университета Факультет «Аксборот технологии ва ракамли
                    иктисодийот» ташкил топиши муносабати билан, шу факультет
                    кошида проф.в.б. С.Б.Муртазова рахбарлигида «Тарикс ва
                    ийтимойй фанлар» номи билан фаолият бошлаган ва хозиргача
                    о’зи рахбарлик килиб кельмокда. <br />
                    Факультет ва шу джумладан, «Тарикс ва иджтимой фанлар»
                    кафедраси, иджтимой-гуманитар фанлар сохасида замонави
                    фикрлайдиган йетук мутаксассиларни тайёрлашни оз олдига
                    асосий максад килиб койган. <br />
                    Кафедрада юкори илмий дараджа ва unvonga ega mutaxassislar,
                    хусусан фан доктора Ч.Темирова, фан номзодлари ва к.ф.н.
                    Р.Асадова, Б.Маматкулов, Н.Шаропова, А.Насимов, Д.Рахматова,
                    Б.Бокыевлар самарали фаолият юритиб келишмокда.
                    <br />
                  </p>
                  <h4>Кафедранинг о’кув фаолияти</h4>
                  <p>
                    Хозирги кунда Нефть ва газ иши кафедрасида т.ф.д., проф. НА.
                    Бозоров, т.ф.д., проф. Т.Р. Юлдошев, точки. А.Ю. Дустов,
                    т.ф.ф.д., точки. Э.А. Рахматов, ф-м.ф.ф.д., точки. Р.М.
                    Ёркулов, к.ф.ф.д. точки. С.Б. Саматов, т.ф.ф.д., точки. Ж.
                    Б. Максмаёров, точки. А.Р. Ракимов, точки. О.О. Назаров,
                    ф-м.ф.н., точки. А.Х. Ракимов, катта о’китувчилар Дж.Дж.
                    Рахмонов, С.С. Джабборов, Р.Дж. Шоймов, С.Ш. Саматов, С.Н.
                    Мейлиев, йош профессор-о’китувчилар Х.З. Джорайева, А.С.
                    Ботиров, А.Ж. Джонузоков, А.Ш. Шукуров, А.М. Джорайев, И.К.
                    Киличев, Г.О. Хамрокулова, кабинет мудири Х.А. Тогаев ва
                    бошкалар фаол мехнат килмокдалар. <br />
                    Кафедра профессор-о’китувчилари томонидан <br />
                    60721800-Нефт ва газиши (тармоклар бо’йича) <br />
                    бакалавриат (кундузги, кечки ва сиртки) талими йо’налишида
                    куидаги фанлардан назарий ва амалий машгулотлар олиб
                    борилади: <br />
                    • Геодезия;
                    <br />
                    • Нефть ва газ геологияси;
                    <br />
                    • Физика;
                    <br />
                    • Умумий ва ер ости гидравликаси;
                    <br />
                    • Метрология ва стандартлатириш;
                    <br />
                    • Нефть ва газ иши асослари;
                    <br />
                    • Нефть ва газ конлари геологияси;
                    <br />
                    • «Иссилик текникаси»;
                    <br />
                    • Нефть ва газ кудукларини бургилаш;
                    <br />
                    • Нефть ва газ катлам физикаси;
                    <br />
                    • Умумий Кимёвый Технология;
                    <br />
                    • Нефть ва газ кимёси;
                    <br />
                    • Суйултирилган йокилг' олиш технологииси;
                    <br />
                    • Асосий технология джарайон ва курилмалар;
                    <br />
                    <br />
                    • Нефть ва газни чукур гайта ишлаш технологии.
                    <br />
                    <br />
                    • Табиий газ таркибидан суюлтирилган синтетик йокилги
                    ольские технологии
                    <br />
                    • Кудукларда геофизик тадкикотлар
                    <br />
                    <br />
                    • Нефть ва газ конлари машина ва жихозлари
                    <br />
                    <br />
                    • Суйултирилган синттик йокилги олиш технологии
                    <br />
                    • Нефть ва газни кайта ишлаш кимёвий технологииси
                    <br />
                    • Нефть ва газ qazib olish техника ва технологии
                    <br />
                    • Нефть ва газ махсулотларини замонавий тахлил килиш
                    усуллари
                    <br />
                    • Синтез газ олиш технологиииясы
                    <br />
                    • Кудук махсулдорлигини бошкариш
                    <br />
                    • Нефть ва газни дастлабки тайёрлаш ва гайта ишаш технологии
                    и технологии
                    <br />
                    Булардан ташкари, 60721800-Нефть ва газ иши (тармоклар
                    бо’йича) бакалавриат та’лими йо’налишида малакави ва ишлаб
                    чикариш амалийотлари хамда битирув малакавиш ишларига
                    рахбарлик килади.
                  </p>
                  <h4>3. Кафедранинг илмий фаолияти</h4>
                  <p>
                    Хозирги кунда «Тарикс ва иджтимой фанлар» фан доктора
                    Ч.Темирова, фан номзодлари ва PhD Р.Асадова, Б.Маматкулов,
                    Н.Шаропова, А.Насимов, Д.Рахматова, Б.Бокыев, о’китувчилар
                    Ш.Джумаева, У.Эргашев, А.Курбонов, М.Курбонова, Ш.Элбоева,
                    Д.Ахмедова, Б.Джалилов, О’.То’раев, С.Абдураимова,
                    Ж.Тогаймуродов, Н.Ашуров, Докторант И.Джомуродова А.Ахмедов,
                    Х.Турсунов, кабинет мудири М.Тошполатова ва бошкалар фаол
                    мехнат килмокдалар. <br />
                    Кафедра профессор-о’китувчилари томонидан <br />
                    60111100 – «Тарикс»;
                    <br />
                    60110200 – «Мактабгача талим»;
                    <br />
                    60110500 – «Бошлангич таълим»;
                    <br />
                    60111800 – «Хориджий тил ва адабийоти»;
                    <br />
                    60112200 – «Жисмоний маданият»;
                    <br />
                    60310100 – «Иктисодийот»;
                    <br />
                    60610200 – «Аксборот тизимлари ва технологииялари»;
                    <br />
                    60721800 – «Нефть ва газ иши»
                    <br />
                    бакалавриат (кундузги, кечки ва сиртки) талими
                    йо’налишларида куйидаги фанлардан назарий ва амалий
                    машгулотлар олиб борилади:
                    <br />
                    • Узбекистон тарикси; <br />
                    • Джахон Тарикси; <br />
                    • Археология; <br />
                    • Ёрдамчи тарикс фанлари; <br />
                    • Музейшунослик; <br />
                    • Тарикс о'китиш методикаси; <br />
                    • O’rta Osiyo xonliklari tarixiy geografiyasi; <br />
                    • Узбекистон топонимикаси; <br />
                    • Шарк алломалари илмий мероси; <br />
                    • Фалсафа; <br />
                    • Диншунослик; <br />
                    • Узбекистоннинг эн янги тарикси; <br />
                    Булардан ташкари, 60111100 – «Тарикс», 60110500 – «Бошлангич
                    талим» бакалавриат талими йоналишларида Малакави, педагог ва
                    ишлаб чикариш амалиётлари хамда битирув малакавиш ишларига
                    рахбарлик килади. <br />
                    Магистратура талими бойича кафедра профессор-о’китувчилари{" "}
                    <br />
                    70220301 – «Тарикс (йоналишлар ва фаолият тури бо’йича)»;{" "}
                    <br />
                    • Ильмий тадкикот методологияси; <br />
                    • Кадимги Шарк тариси манбалари ва тарикшунослиги; <br />
                    • «Узбекистонда ер-сув муносабатлари»; <br />
                    • Тариксий реконструкция масалалари; <br />
                    • Палеоэкология и цивилизация динамики; <br />• Узбекистонда
                    молия сийосати ва пул ислохотлари тарикси; <br />
                    • XX асрда Евроосийода сийосий джарайонлар <br />
                    фанларидан машгулотлар олиб борадилар. <br />
                  </p>
                  <h4>Кафедранинг илмий фаолияти</h4>
                  <p>
                    Докторские диссертации химоялари: Кафедра доцентлари
                    С.Б.Муртазова, Б.Ш.Маматгуловлар 2025-йлда докторлик
                    диссертациясини химоя килишади. <br />
                    Кандидатская диссертация химоялари: Kafedra o'qituvchilari
                    У.Эргашев, С.Муродова, докторант А.Ахмедовлар 2024-йлда,
                    Ш.Элбоева, Х.Турсунов, Ж.Тогаймуродовлар 2025-йлд к.ф.н.
                    диссертация химоасига чикишади. <br />
                    Кафедра а’золари Республики ва хориджий нуфузли илмий
                    журналларда илмий ишларини чоп этишади, илмий Анджуманларда
                    Каннашишади. Оксирги йилларда нарезать этилган Ильмий
                    Маколалардан Намуналар:
                    <br />
                    <br /> • С.Муртазова. Из истории музыкальной культуры Амир
                    Тимур и Темурийский период. Международный междисциплинарный
                    журнал по развитию исследований.SJIF 2023: 6,563.
                    <br /> • С.Муртазова. Узбек санъатинин катагъон килинган
                    намояндалари ва уларнинг аянчли такдири хакида. Сохибкирон
                    юлдузи.2023, №4
                    <br /> • С.Муртазова. Ватан химикоаси-анг олий шараф. Вродли
                    знание. Международный журнал научных исследований.
                    Импакт-фактор – 7293. 2024 год
                    <br /> • Хаиткулов Б.Х. Полное решение класса
                    Дифференциальные игры преследования с интегральными
                    ограничениями и Импульсное управление//Российская
                    математика. Россия. 2022. 22-29.
                    https://link.springer.com/article/10.3103/S1066369X22030069
                    <br /> • Р.Асадова. УЗБЕК- ХИНД МАДАНИ АЛОКАЛАРИ.
                    Международный журнал формального образования. Том: 02
                    Выпуск: 11| Ноябрь – 2023 г. ISSN: 2720-6874.
                    http://journals.academiczone.net/index.php/ijfe
                    <br /> • Р.Асадова. Сотрудничество между странами в годы
                    независимость. Хорезм Маъмун академияси ахборотномаси: илмий
                    журнал.-№11/3 (108), Хорезм Маъмун академиясы, 2023 г. й. –
                    251 б. – Босма нашнинг электронных вариантов –
                    http://mamun.uz/uz/page/56 o Б.Маматкулов. Узбекистонда
                    1925-1954 – Йилларда Саноат Сохасида Амальга Оширилган
                    тадбирлар ва уларнинг натиджалари // Хоразм Ма’мун
                    академияси аксборотномаси. ‒ Хива, 2023. ‒ №12/5. – Б. 61 –
                    65. http://mamun.uz/uz/page/56.
                    <br /> • Б.Маматкулов. Узбекистон газ-олтингугурт
                    саноатининг юзага келиши ва унинг ривойланиш тарикси
                    (Кашкадарьинская область мысолида) // Ижтимоий-гуманитаритар
                    фанларинг долзарб муаммолари. - №12/1(3)-2023. ISSN:
                    2181-1342 (Онлайн) https://scienceproblems.uz
                    <br /> • Шаропова Нигора Акбаровна. Эффекты деятельности и
                    реформы в сфере общего образования // Международный журнал
                    развития и государственной политики | электронный ISSN:
                    2792-3991 | www.openaccessjournals.eu | Объем: 3 Выпуск: 9.
                    Ипак Фактор-10,5-2023.
                    https://openaccessjournals.eu/index.php/ijdpp/article/view/2272
                    <br /> • М.Курбонова. Международный журнал за последнее
                    время теория научных исследователей. Язык является основой
                    культура каждого народа. Том 1.№9(2023) ISSN: 2992-8885
                    10.12.23. http://uzresearchers.com.
                    <br /> • М.Курбонова. Международный журнал формального
                    Образование. Язык – наше богатство. Том: 02 Выпуск: 11|
                    Ноябрь – 2023 г. ISSN: 2720-6874.
                    http://journals.academiczone.net/index.php/ijfe
                    <br /> • Ш.Джумаева. Социальная и духовная среда и ее
                    влияние на воспитание и образование. Международный Журнал
                    формального образования. Том: 02 Выпуск: 11| ноябрь – 2023.
                    ISSN: 27206874.
                    http://journals.academiczone.net/index.php/ijfe/article/view/1517/1311
                    <br /> • Ш.Джумаева. использование педагогических методов в
                    учебный процесс. развитие педагогического творчества в
                    современном образовании.2023..Т. 1. Выпуск 3. Конференция
                    Финляндия
                    <br /> • Муродова Садокат. Мустакиллик Йилларда Узбек
                    фольклор ан’аналарини ривойланиши тариксидан https://www.
                    periodica.org/index.php/journal/article/view/244
                    <br /> • Ш.Елбоева. Повышение роли дружественных общества и
                    усиление их участия в жизни населения лучший журнал
                    инноваций в науке, исследования и разработки Том:2
                    Выпуск:4|2023 На сайте www.bjisrd.com представлены номера
                    236–239.
                    <br /> • Ш.Елбоева. Международный бюллетень прикладных наука
                    и техника технологии UIF = 8,2 | SJIF = 5,955 ISSN:
                    2750-3402 ибастРазвитие социальной активности женщин в
                    системе высшего образования Старший преподаватель Кафедра
                    истории и социальных наук Университета Экономика и
                    педагогика негосударственная образовательная учреждение
                    https://doi.org/10.5281/zenoдо.8426626.
                    <br /> • А.Курбонов. Среднеазиатский журнал социальных науки
                    и истории Развитие ремесленной промышленности в Город Карши
                    в начале 19-20 вв. Столетия Том 4 № 12 (2023): CAJSSH
                    <br /> • Д.Ахмедова. Духовный образ молодых людей с
                    современное мировоззрение. В томе 3, выпуске 11 журнала
                    «Восточное Ренессанс: инновационный, образовательный,
                    природный и социальный. наук» научного журнала ноябрь 2023
                    г. 304-309ст.
                    <br /> • Ж.Тогъаймуродов. Династия Раджаби – с точки зрения
                    новая эра В томе 11, выпуске 12, декабрь 2023 г., Галактика
                    международный междисциплинарный исследовательский журнал
                    GIIRJ) ISSN (Е): 2347-6915
                    <br /> • Н.Ашуров. Евразийский журнал соц. Инновационная
                    академия наук,философии и культуры Центр поддержки
                    исследований Получен: 6 декабря 2023 г. Принято: 15 числа
                    Онлайн: 16 числа
                    <br /> • И.Джомуродов. Новая современная западная философия
                    (в Пример К. Поппера). Педагогический кластер-Журнал
                    Педагогические разработки PCJPD: Том 2, выпуск 4, апрель
                    2024 г., онлайн: ISSN 2956-896X.
                    https://webofjournals.com/index.php/4/article/view/1195/1162
                  </p>
                  <h4>
                    Кафедра ходимларининг илмий натижалари куидаги Монография о
                    Аксинини Топган:
                  </h4>
                  <p>
                    1. С.Муртазова, Н.Акбарова. Музыка Ферганской области
                    мактаблари фаолиати тарикси (1991-2020 гг.)
                    «Илм-фан-ма’навият» 2024 г. <br />
                    2. Р.Асадова. Узбекистон - Хиндистон ортасидаги озаро
                    иктисодий ва мадании сохалардаги хамкорлик, Р.Б.Асадова,
                    Монография. - Карши: «Интеллект» нашириёти, 2023. –149 б.
                    <br />
                    3. Б.Маматкулов. Узбекистонда саноатлаштириш сийосатининг
                    амальга оширилиши ва унинг окибатлари (1925-1941-гг.);
                    Монография. Т.: «Урок прессы» МЧЖ нашириёти. - 2023. -134 б.
                    <br />
                  </p>
                  <h4>Учебно-методическая деятельность кафедры:</h4>
                  <p>
                    Научная деятельность профессоров-преподавателей кафедры
                    кроме того, они занимаются также учебно-методической
                    работой. В частности, в создании учебников,
                    учебно-методических пособий. работают эффективно. <br />
                    Профессора и преподаватели кафедры за последние 10 лет рядом
                    учебников, учебно-методических пособий подготовил: <br />
                    1. Муртазова С., Моминова Г. Новая история Узбекистан.
                    Интеллект, 2023 <br />
                    2. С. Муртазова. Музыкальная культура Узбекистана история
                    периода независимости. Против, 2023 год <br />
                    3. С. Муртазова. История музыкальной культуры Узбекистана v
                    период независимости. Против, 2023 год <br />
                  </p>
                  <div className="row">
                    <div className="col-12">
                      <img className="w-100" src={BooksImage} alt="image" />
                    </div>
                  </div>
                </div>
              )}

              {lang == "en" && (
                <div>
                  <h4>History and activities of the department</h4>{" "}
                  <p>
                    The department is at the University of Economics and
                    Pedagogy in 2023 "Information technologies and digital
                    economy" faculty in connection with its establishment, under
                    this faculty prof.v.b. Under the leadership of S.B.
                    Murtazova "History and Social began to operate under the
                    name "fanlar" and is still the same has been leading. <br />
                    Faculty and including "History and Social Sciences"
                    department, modern in the field of social and humanitarian
                    sciences undertakes the training of mature specialists who
                    think as the main goal. <br />
                    Specialists with high academic degrees and titles in the
                    department, in particular, Dr. Ch. Temirova, candidates of
                    science and Ph.D R. Asadova, B. Mamatkulov, N. Sharopova, A.
                    Nasimov, D. Rakhmatova, B. Boqiyev are working effectively
                    are coming
                    <br />
                  </p>
                  <h4>Educational activities of the department</h4>
                  <p>
                    Currently, at the Department of Oil and Gas, Ph.D., prof.
                    O.N. Bozorov, Ph.D., Prof. T.R. Yuldoshev, Assoc. A. Yu.
                    Dustov, Ph.D., Assoc. E.A. Rakhmatov, Ph.D., Assoc. R.M.
                    Yorkulov, k.f.f.d. Assoc. S.B. Samatov, Ph.D., Assoc. J.B.
                    Makhmayorov, Assoc. A.R. Rakhimov, Assoc. O.O. Nazarov,
                    f.m.f.n., Assoc. A.H. Rakhimov, senior teachers J.J.
                    Rakhmanov, S.S. Djabborov, R.Dz. Shoimov, S.Sh. Samatov,
                    S.N. Meiliyev, young professors H.Z. Jorayeva, A.S. Botirov,
                    A.J. Jonuzokov, A.Sh. Shukurov, A.M. Jorayev, I.K. Kilichev,
                    G.O. Khamrokulova, head of the cabinet H.A. Togayev and
                    others are actively working. <br />
                    By professors and teachers of the department <br />
                    60721800-Oil and gas work (by branches) <br />
                    undergraduate (day, evening and part-time) education
                    theoretical and practical in the following disciplines
                    trainings are conducted: <br />
                    • Geodesy;
                    <br />
                    • Oil and gas geology;
                    <br />
                    • Physics;
                    <br />
                    • General and underground hydraulics;
                    <br />
                    • Metrology and standardization;
                    <br />
                    • Fundamentals of oil and gas work;
                    <br />
                    • Geology of oil and gas deposits;
                    <br />
                    • Heat technique;
                    <br />
                    • Drilling oil and gas wells;
                    <br />
                    • Physics of oil and gas reservoirs;
                    <br />
                    • General chemical technology;
                    <br />
                    • Oil and gas chemistry;
                    <br />
                    • Liquefied fuel extraction technology;
                    <br />
                    • Main technological process and devices;
                    <br />
                    <br />
                    • Deep oil and gas processing technology.
                    <br />
                    <br />
                    • Synthetic fuel diluted from natural gas acquisition
                    technology
                    <br />
                    • Geophysical studies in wells
                    <br />
                    <br />
                    • Oil and gas field machines and equipment
                    <br />
                    <br />
                    • Technology of obtaining liquefied synthetic fuel
                    <br />
                    • Chemical technology of oil and gas processing
                    <br />
                    • Oil and gas extraction techniques and technology
                    <br />
                    • Modern analysis of oil and gas products methods
                    <br />
                    • Synthesis gas extraction technology
                    <br />
                    • Well productivity management
                    <br />
                    • Preliminary preparation and processing of oil and gas
                    technology and equipment
                    <br />
                    In addition, 60721800-Oil and gas work (networks on)
                    qualification in the field of undergraduate education and
                    production practices and graduation qualification directs
                    his work.
                  </p>
                  <h4>3. Scientific activity of the department</h4>
                  <p>
                    Currently, he is a Doctor of History and Social Sciences Ch.
                    Temirova, candidates of science and PhD R. Asadova, B.
                    Mamatkulov, N. Sharopova, A. Nasimov, D. Rakhmatova, B.
                    Boqiyev, teachers Sh. Jumayeva, U. Ergashev, A. Gurbanov, M.
                    Qurbonova, Sh. Elboyeva, D. Akhmedova, B. Jalilov, O.
                    Torayev, S. Abduraimova, J. Togaymurodov, N. Ashurov, I.
                    Jomurodova, doctoral students A. Akhmadov, H. Tursunov,
                    office manager M. Toshpolatova and others are actively
                    working. <br />
                    By professors and teachers of the department <br />
                    60111100 – "History";
                    <br />
                    60110200 - "Preschool education";
                    <br />
                    60110500 - "Primary education";
                    <br />
                    60111800 - "Foreign language and literature";
                    <br />
                    60112200 – "Physical culture";
                    <br />
                    60310100 – "Economy";
                    <br />
                    60610200 - "Information systems and technologies";
                    <br />
                    60721800 - "Oil and gas work"
                    <br />
                    undergraduate (day, evening and part-time) education
                    theoretical and practical in the following disciplines
                    trainings are conducted:
                    <br />
                    • History of Uzbekistan; <br />
                    • World history; <br />
                    • Archaeology; <br />
                    • Auxiliary history sciences; <br />
                    • Museology; <br />
                    • History teaching methodology; <br />
                    • Historical geography of Central Asian khanates; <br />
                    • Toponymy of Uzbekistan; <br />
                    • Scientific heritage of Eastern scientists; <br />
                    • Philosophy; <br />
                    • Religious Studies; <br />
                    • The newest history of Uzbekistan; <br />
                    In addition, 60111100 - "History", 60110500 - "Elementary
                    education" in the fields of undergraduate education
                    professional, pedagogical and production practices and
                    supervises graduation qualification work. <br />
                    Department of Master's Education professors and teachers{" "}
                    <br />
                    70220301 – "History (by direction and type of activity)";{" "}
                    <br />
                    • Scientific research methodology; <br />• Sources of
                    ancient Eastern history and historiography; <br />
                    • Land-water relations in Uzbekistan; <br />
                    • Issues of historical reconstruction; <br />
                    • Paleoecology and civilization dynamics; <br />• History of
                    financial policy and monetary reforms in Uzbekistan; <br />
                    • Political processes in Eurasia in the 20th century <br />
                    they conduct classes in subjects. <br />
                  </p>
                  <h4>Scientific activities of the department</h4>
                  <p>
                    Defenses of doctoral theses: associate professors of the
                    department S.B. Murtazova, B.Sh. Mamatkulovov doctorate in
                    2025 they defend their dissertation. <br />
                    Defenses of PhD dissertations: teachers of the department U.
                    Ergashev, S. Murodova, doctoral student A. Akhmadovlar in
                    2024, Sh. Elboyeva, Kh. Tursunov, J. Togaimurodov in 2025
                    PhD defend their dissertations. <br />
                    The members of the department are eminent scientists of the
                    Republic and abroad they publish their scientific works in
                    magazines, scientific they bleed at conventions. Published
                    in recent years examples of scientific articles:
                    <br />
                    <br /> • S. Murtazova. From the history of music culture
                    Amir Timur and the Temurian period. International
                    multidisciplinary journal for research development. SJIF
                    2023: 6,563.
                    <br /> • S. Murtazova. Uzbek art was suppressed about their
                    characters and their sad fate. The star of the host. 2023,
                    No. 4
                    <br /> • S. Murtazova. Defense of the homeland is the
                    highest honor. Wrodly knowledge. International journal of
                    scientific researchers. Impact factor-7,293. 2024
                    <br /> • Khaitkulov B.Kh. Complete Solution of a Class of
                    Differential Pursuit Games with Integral Constraints and
                    Impulse Control // Russian Mathematics. Russia. 2022. 22-29.
                    https://link.springer.com/article/10.3103/S1066369X22030069
                    <br /> • R. Asadova. UZBEIK-INDIAN CULTURAL RELATIONS.
                    International Journal of Formal Education. Volume: 02 Issue:
                    11| November – 2023 ISSN: 2720-6874
                    http://journals.academiczone.net/index.php/ijfe
                    <br /> • R. Asadova. Sotrudnichestvo mejdu stranami v gody
                    nezavisimosti. Khorezm Mamun Academy newsletter: scientific
                    journal.-№11/3 (108), Khorezm Ma'mun Academy, 2023 y. - 251
                    p. - The electronic version of the printed publication -
                    http://mamun.uz/uz/page/56 o B. Mamatkulov. in Uzbekistan It
                    was implemented in the industrial sector in 1925-1954
                    activities and their results // Khorezm Ma'mun academy
                    newsletter. ‒ Khiva, 2023. ‒ #12/5. – P. 61 – 65.
                    http://mamun.uz/uz/page/56
                    <br /> • B. Mamatkulov. Uzbekistan gas-sulphur the emergence
                    of the industry and the history of its development (In the
                    case of Kashkadarya region) // Social and humanitarian
                    current problems of sciences. - No. 12/1(3)-2023. ISSN:
                    2181-1342 (Online) https://scienceproblems.uz
                    <br /> • Sharopova Nigora Akbarovna. Effects of Activities
                    and Reforms in the Field of General Education //
                    International Journal of Development and Public Policy
                    e-ISSN: 2792-3991 | www.openaccessjournals.eu | Volume: 3
                    Issue: 9. impact factor-10.5-2023.
                    https://openaccessjournals.eu/index.php/ijdpp/article/view/2272
                    <br /> • M. Qurbanova. International journal of recently
                    scientific researchers theory. Language is the basis of the
                    culture of every nation. Vol.1.No.9(2023) ISSN: 2992-8885
                    10.12.23. http://uzresearchers.com.
                    <br /> • M. Qurbanova. International Journal of Formal
                    Education. Language is our wealth. Volume: 02 Issue: 11|
                    November–2023 ISSN: 2720-6874
                    http://journals.academiczone.net/index.php/ijfe
                    <br /> • Sh. Jumayeva. Social and spiritual environment and
                    its influence on upbringing and education. International
                    Journal of Formal Education. Volume: 02 Issue: 11| November
                    - 2023. ISSN: 27206874.
                    http://journals.academiczone.net/index.php/ijfe/article/view/1517/1311
                    <br /> • Sh. Jumayeva. the use of pedagogical methods in the
                    educational process. development of pedagogical creativity
                    in modern education.2023..Vol. 1. Issue 3. Conference of
                    Finnish
                    <br /> • Murodova Sadokat. Uzbek in the years of
                    independence from the history of the development of folklore
                    traditions
                    https://www.periodica.org/index.php/journal/article/view/244
                    <br /> • Sh. Elboyeva. Increasing the role of friendship
                    societies and strengthening their participation in life of
                    the population best journal of innovation in science,
                    research and development Volume:2 Issue:4|2023
                    www.bjisrd.com features 236-239.
                    <br /> • Sh. Elboyeva. International bulletin of applied
                    science and technology technology UIF = 8.2 | SJIF = 5.955
                    ISSN: 2750-3402 ibastdevelopment of social activity of women
                    Senior lecturer of the higher education system Department of
                    history and social sciences University of Economics and
                    pedagogy non-governmental educational
                    institutionttps://doi.org/10.5281/zenodo.8426626.
                    <br /> • A. Kurbanov. Central asian journal of social
                    sciences and history Development of the Craft Industry in
                    the City of Karshi at the beginning of the 19th-20th
                    Centuries Vol.4 N. 12 (2023): CAJSSH
                    <br /> • D. Akhmedova. Spiritual image of young people with
                    a modern worldview. In Volume 3, Issue 11 of "Oriental
                    Renaissance: Innovative, educational, natural and social
                    sciences" scientific journal on November, 2023304-309st.
                    <br /> • J. Togaimurodov. Rajabi dynasty-in the viewpoint of
                    a new era In Volume 11 Issue 12, December 2023 Galaxy
                    international interdisciplinary research journal GIIRJ) ISSN
                    (E):2347-6915
                    <br /> • N. Ashurov. Eurasian journal of social Innovative
                    Academy of sciences, philosophy and culture Research Support
                    Center Received: 06th December 2023 Accepted: 15th Online:
                    16th
                    <br /> • I. Jomurodov. New Modern Western Philosophy (In the
                    Example of K. Popper). Pedagogical Cluster- Journal of
                    Pedagogical Developments PCJPD: Volume 2 Issue 4, April
                    2024, online: ISSN 2956-896X.
                    https://webofjournals.com/index.php/4/article/view/1195/1162
                  </p>
                  <h4>
                    The scientific results of the department staff are as
                    follows reflected in monographs:
                  </h4>
                  <p>
                    1. S. Murtazova, N. Akbarova. Fergana region music history
                    of schools (1991-2020) "Science-science-spirituality" 2024{" "}
                    <br />
                    2. R. Asadova. Match between Uzbekistan and India
                    cooperation in the economic and cultural spheres, R.B.
                    Asadova, Monograph. - Against: "Intellect" publishing house,
                    2023. -149 p.
                    <br />
                    3. B. Mamatkulov. Industrialization policy in Uzbekistan
                    implementation and its consequences (1925-1941); Monograph.
                    T.: "Lesson Press" LLC publishing house. - 2023. -134 p.
                    <br />
                  </p>
                  <h4>
                    Educational and methodological activities of the department:
                  </h4>
                  <p>
                    Academic activities of professors-teachers of the department
                    besides, they are also engaged in educational and
                    methodological work. In particular, in the creation of
                    textbooks, educational and methodological manuals are
                    working effectively. <br />
                    Professors and teachers of the department in the last 10
                    years by a number of textbooks, educational and
                    methodological manuals prepared by: <br />
                    1. S. Murtazova, G. Mominova. New history Uzbekistan.
                    Intellect, 2023 <br />
                    2. S. Murtazova. Music culture of Uzbekistan the history of
                    the period of independence. Against, 2023 <br />
                    3. S. Murtazova. History of musical culture of Uzbekistan v
                    period nezavisimosti. Against, 2023 <br />
                  </p>
                  <div className="row">
                    <div className="col-12">
                      <img className="w-100" src={BooksImage} alt="image" />
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
