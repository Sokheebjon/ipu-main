import instructors from "../../data/Instructors.json";
import { useIntl } from "react-intl";
import { getProductName } from "../../helpers/general";
import BooksImage from "../../assets/images/faculties-6/books.png";

const InstructorDetailsMain = () => {
  const intl = useIntl();
  const instructor = instructors.find((b) => b.kafedra == "7");
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
                  <h4>1. Kafedra tarixi va faoliyati</h4>
                  <p>
                    Kafedra 2023 yilda Iqtisodiyot va pedagogika universitetida
                    “Axborot texnologiyalari va raqamli iqtisodiyot” fakultetini
                    tashkil topishi munosabati bilan, shu fakultet qoshida
                    dotsent O.X.Abdullayev rahbarligida «Umummetodologik fanlar»
                    (UMF) nomi bilan faoliyatini boshlagan. <br />
                    UMF kafedrasi professor-o‘qituvchilari tomonidan
                    universitetimizda iqtisodiyot, neft va gaz, axborot
                    texnologiyalari, boshlang‘ich ta’lim va maktabgacha ta’lim
                    yo‘nalishda tahsil olayotgan talabalarga Oliy matematika,
                    amaliy matematika, matematika, matematika va uni o‘qitish
                    metodikasi, elementar matematik tasavvurlarni shakllantirish
                    metodikasi, kimyo va ekologiya fanlaridan dars berib
                    kelmoqda va kelgusida yetuk mutaxassis bo‘lishlarini hamda
                    Respublikamizning turli sohalarida mehnatkash, halol va
                    Vatanga sadoqat ruhida tarbiyalashni o‘z oldiga maqsad qilib
                    qo‘ygan. <br />
                    Qisqa davr ichida kafedra professor-o‘qituvchilari PhD
                    himoyasi va dotsent unvonlarini ham qo‘lga kiritishmoqda,
                    jumladan K.Bobomurodov, A.Xudoyqulov va M.Sh.Tuxliyevlar PhD
                    himoyasini, O.H.Abdullayev esa dotsentlik unvonini qo‘lga
                    kiritishdi.
                  </p>
                  <h4>2. Kafedraning o‘quv faoliyati</h4>
                  <p>
                    Hozirgi kunda “Umummetodologik fanlar” kafedrasida
                    dotsentlar: O.X.Abdullayev, Sh.A.Xaydarov, J.Oromov,
                    K.Bobomurodov, A.Sh.Xudoyqulov, O.A.Ikromov, J.B.Farmonov,
                    F.G‘.Mamatqulov, M.N.Bozorov, B.Shoimovlar; katta
                    o‘qituvchilar: D.U.Bozarov, A.Muqumov; assistentlar:
                    O.Mirzayev, B.Raxmonov, M.Sh.Tuxliyev, A.Jabborovlar
                    faoliyat olib borishmoqda. <br />
                    Kafedra professor-o‘qituvchilari tomonidan <br />
                    5130100 – “Amaliy matematika 1, 2”; <br />
                    5140300 – “Iqtisodchilar uchun matematika”; <br />
                    5330100 – “Matematika”; <br />
                    5330100 – “Oliy matematika”; <br />
                    5330200 – “Matematika va uni o‘qitish metodikasi”; <br />
                    5330300 – “Oliy matematika va maktabgacha tarbiyada
                    matematika fanini qo`llash”; <br />
                    60610100 – “Elementar matematik tasavvurlarni shakllantirush
                    metodikasi”; 60610200 – “Ekologik madaniyat va barqaror
                    taraqiyot asoslari”; <br />
                    60610300 – “Ekologiya” <br />
                    60610300 – “Kimyo” Qishloq xo`jalik mahsulotlarini saqlash
                    va qayta ishlash texnologiyasi <br />
                    60610300 – “Qishloq xo`jalik mahsulotlarini saqlash va qayta
                    ishlash texnologiyasi” <br />
                    fanlaridan bakalavriat (kunduzgi va sirtqi) ta’limi
                    yo‘nalishlari talabalari uchun nazariy va amaliy
                    mashg’ulotlar olib boriladi. <br />
                  </p>
                  <h4>3. Kafedraning ilmiy faoliyati</h4>
                  <p>
                    PhD dissertasiyalari himoyalari: K.Bobomurodov (2023 y.),
                    A.Sh.Xudoyqulov va M.Sh.Tuxliyev (2024 y.) <br />
                    Kafedra a’zolari tomonidan Scopus, Web of science,
                    Respublika va xorijiy jurnallarda chop etishgan ilmiy ishlar
                    ruyhati ilmiy anjumanlarda qannashishadi. Oxirgi yillarda
                    chop etilgan ilmiy maqolalardan namunalar:
                    <br />
                    <br />
                    Scopus ilmiy bazasida: <br />
                    1. Bahadirov, G., Aliboev, K., Xaydarov, S. Conference
                    Paper. Modeling the contact interaction of leather with
                    squeezing rollers. E3S Web of Conferences, 2023, 443, 04011{" "}
                    <br />
                    2. Bahadirov, G., Aliboev, K., Xaydarov, S. Conference
                    Paper. Modeling residual moisture content of leather. E3S
                    Web of Conferences, 2023, 443, 04010 Respublika va xorijiy
                    <br /> <br />
                    jurnallarda: <br />
                    1) Хайдаров Ш. А.,Туфлиев Э .O МАРКОВСКАЯ МОДЕЛЬ
                    РАБОТОСПО-СОБНОСТИ СЛОЖНЫХ СИСТЕМ EUrasian journal of
                    matematical theory and compyter sciences.20233333 nnovative
                    Academy Research Support Center <br />
                    2) Xaydarov Sh.A., Alikulov T.A., Egamov M.X. Ma’lumotlar
                    to’liq bo’lmaganda murakkab tizimlarni ish qobiliyatlilik
                    sathlarni optimallash usullari. INNOVASION TEXNOLOGIYALAR,
                    Vol 51, №3, 2023. C 102-106 <br />
                    3) Т.А.АЛИКУЛОВ,Ш.А.ХАЙДАРОВ, Eго знали даже набесахю Очерки
                    щжизни и научной деятельности академика Х.Рахматуллина.
                    Материалы «Международная научно-практического конференция
                    «Рахматулинская четиния» (26-27-мая 2023 года. Ташкент 2023,
                    С 236-241.
                    <br />
                    4) Ш.А.Хайдаров,Т.А.Аликулов,М.Х.Эгамов ОБ ОДНОЙ АЛГОРИТМИ
                    ОЦЕНКИ ПАРАМЕТРОВ РАБОТАСПОСОБНОСТИ СЛОЖНЫХ СИСТЕМ Материалы
                    «Актуальныу проблемы иннавационных технологий и высшего
                    образования в условиях глобализации. Термиз. 2023 г. С
                    422-427. <br />
                    5) Bozarov D. U. IKKI O ‘ZGARUVCHILI FUNKSIYANING
                    EKSTREMUMIDAN FOYDALANIB, TEKISLIKDAGI IKKITA FIGURA
                    ORASIDAGI MASOFANI TOPISH //Oriental renaissance:
                    Innovative, educational, natural and social sciences. –
                    2022. – Т. 2. – №. 11. – С. 292-301. <br />
                    6) Бозаров Д. У. Determinantlar mavzusini mustaqil oqishga
                    doir misollar //Журнал Физико-математические науки. – 2022.
                    – Т. 3. – №. 1. <br />
                    7) Bozarov D. CHIZIQLI VA KVADRATIK MODELLASHTIRISH
                    MAVZUSINI MUSTAQIL O ‘RGANISHGA DOIR MISOLLAR //Евразийский
                    журнал математической теории и компьютерных наук. – 2022. –
                    Т. 2. – №. 6. – С. 24-28. <br />
                    8) Allamova M., Bozarov D. TRIGONOMETRIK TENGSIZLIKLAR
                    YECHIMLARINING INNOVATSION QO ‘LLANILISHI //Евразийский
                    журнал математической теории и компьютерных наук. – 2023. –
                    Т. 3. – №. 1. – С. 75-78. <br />
                    9) Dilmurod B., Islom A. PARALLEL IKKITA TO‘G’RI CHIZIQ
                    ORASIDAGI MASOFA //Innovations in Technology and Science
                    Education. – 2023. – Т. 2. – №. 8. – С. 465-478. <br />
                    10) Uralovich B. D. CHIZIQLI ALGEBRAIK TENGLAMALAR
                    SISTEMALARIGA OID MASALALAR //Science and innovation. –
                    2022. – Т. 1. – №. A2. – С. 163-171. <br />
                    11) Bozarov D. U. Matritsalar mavzusini mustaqil o
                    ‘zlashtirishga doir misollar //Муғаллим ҳам узлуксиз
                    билимлендириў. – 2022. – Т. 7. – С. 6. <br />
                    12) Bozarov D. METHODS OF DEVELOPING ECONOMIC COMPETENCE ON
                    THE BASIS OF INTERDISCIPLINARY RELATIONSHIP //Modern Science
                    and Research. – 2023. – Т. 2. – №. 12. – С. 131-137. <br />
                    13) Bozarov D. BO‘LAJAK IQTISODCHI TALABALARNING IQTISODIY
                    KOMPETENSIYASINI RIVOJLANTIRISHNING MATEMATIK TAHLILI
                    //Академические исследования в современной науке. – 2023. –
                    Т. 2. – №. 27. – С. 84-90. <br />
                    14) Uralovich B. D. et al. ABOUT THE PROPERTIES OF NETWORKS
                    //Academia Science Repository. – 2023. – Т. 4. – №. 04. – С.
                    353-357. <br />
                    15) Dilmurod B. ORIENTIRLANMAGAN KO‘PXILLIKDA SILLIQ
                    AKSLANTIRISHLARNING GOMOTOP BO‘LISHI //UNIVERSAL JOURNAL OF
                    MATHEMATICAL THEORY AND COMPUTER SCIENCES. – 2023. – Т. 1. –
                    №. 1. – С. 13-18. <br />
                    16) Bozarov D. METHODS OF DEVELOPING ECONOMIC COMPETENCE ON
                    THE BASIS OF INTERDISCIPLINARY RELATIONSHIP //Modern Science
                    and Research. – 2023. – Т. 2. – №. 12. – С. 131-137. <br />
                    17) Shoimov B., Oromov J. “Singulyar koeffitsiyentga ega
                    bo‟lgan giperbolik tipdagi tenglama uchun Koshi masalasi”
                    BuxDU ilmiy axborotnomasi 2023-yil 2-son [66-70] <br />
                    18) Shoimov B., Oromov J. “Sonning butun va kasr qismi
                    tushunchasi va uning tadbiqlari” “Analizning zamonaviy
                    muammolari” respublika miqyosidagi ilmiy konferensiaya
                    “Qarshi” 2023 yil 2-3-iyun [363-366] <br />
                    19) Shoimov B., Oromov J. “Kuchli buzuluvchi giperbolik
                    tipdagi tenglama uchun chegaraviy masala” “Analizning
                    zamonaviy muammolari” respublika miqyosidagi ilmiy
                    konferensiaya “Qarshi” 2023 yil 2-3-iyun [183-186] <br />
                    20) Shoimov B., Bozorov M “Parabolik–giperbolik tipdagi
                    tenglamalar uchun xarakteristikadan siljigan chiziqlarni o`z
                    ichiga olgan quyi yarim sohada chegaraviy masala” “Golden
                    Brain” Scientific Journal. ISSN:2181-4120 2023/29 October
                    [4-13] https://doi.org/10.5281/zenodo.10041479 <br />
                    21) Shoimov B., Bozorov M “Banax fazosida oshkormas va
                    teskari funksiya” “Golden Brain” Scientific Journal.
                    ISSN:2181-4120 2023/29 October [14-24]
                    https://doi.org/10.5281/zenodo.10041498 <br />
                    22) Shoimov B., Bozorov M “Boundary value problem in lower
                    semifields deviating from characteristics for a
                    parabolic–hyperbolic equation”, Miasto Przyszłości, Kielce
                    2023 Impact Factor: 9.2. ISSN-L:2544-980X [331-338] <br />
                    23) Shoimov B.S, Raxmonov B.A, “Modulli tenglamalar va
                    tengsizliklar”, Journal of new century innovations,
                    Volume–49_Issue-2_March_2024 [180-186] <br />
                    24) Muqumov A. H. IKKINCHI TARTIBLI DIFFERENSIAL TENGLAMA
                    UCHUN QO‘YILGAN CHEGARAVIY MASALANING KORREKT YECHILISHI
                    //World scientific research journal. – 2023. – Т. 22. – №.
                    2. – С. 77-80. <br />
                    25) Muqumov A. H. IKKINCHI TARTIBLI TENGLAMALAR UCHUN
                    CHEGARAVIY MASALANING UMUMLASHGAN VA KUCHSIZ YECHIMLARI
                    //International journal of scientific researchers (IJSR)
                    INDEXING. – 2023. – Т. 3. – №. 2. <br />
                    26) Muqumov A. H. BIR О ‘ZGARUVCHILI FUNKSIYANING FURE
                    ALMASHTIRISHI VA XOSSALARI //Educational Research in
                    Universal Sciences. – 2024. – Т. 3. – №. 4 SPECIAL. – С.
                    545-548. . <br />
                    27) Мукумов A. Х. О КОРРЕКТНОЙ РАЗРЕШИМОСТИ КРАЕВЫХ ЗАДАЧ
                    ДЛЯ УРАВНЕНИЯ ВТОРОГО ПОРЯДКА //Ta'limning zamonaviy
                    transformatsiyasi. – 2024. – Т. 4. – №. 2. – С. 243-246.{" "}
                    <br />
                  </p>
                </div>
              )}
              {lang == "ru" && (
                <div>
                  <h4>1. История и деятельность кафедры</h4>{" "}
                  <p>
                    Кафедра в Экономико-педагогическом университете в 2023 году
                    Факультет «Информационные технологии и цифровая экономика» в
                    связи с его созданием на этом факультете «Общеметодические
                    науки» под руководством доцента О.Х.Абдуллаева (UMF) начал
                    свою деятельность. <br />
                    профессорами и преподавателями кафедры УМФ экономика, нефть
                    и газ, информация в нашем университете технологии, начальное
                    образование и дошкольное образование студентам, обучающимся
                    по направлению «Высшая математика», прикладная математика,
                    математика, математика и ее преподавание методология,
                    формирование элементарных математических представлений
                    методика преподавания химии и экологии и что в будущем они
                    станут зрелыми специалистами Трудолюбивые, честные и в
                    разных сферах нашей республики. Стремление воспитывать в
                    духе верности Родине помещать <br />В короткий срок
                    профессорам-преподавателям кафедры присвоены степени доктора
                    философии. также получают звания защитителей и доцентов, в
                    том числе К.Бобомуродов, А.Худайкулов и М.Ш.Тухлиев к.м.н. и
                    О.Х.Абдуллаеву присвоено звание доцента. вошел.
                  </p>
                  <h4>2. Образовательная деятельность кафедры</h4>{" "}
                  <p>
                    В настоящее время на кафедре «Общеметодические науки».
                    доценты: Абдуллаев О.Х., Хайдаров Ш.А., Оромов Дж.Г.
                    Бобомуродов К., Худойкулов А.Ш., Икромов О.А., Фармонов Ж.Б.
                    Ф. Г. Маматкулов, М. Н. Бозоров, Б. Шоймовлар; большой
                    преподаватели: Д. У. Бозаров, А. Мукумов; помощники:
                    О.Мирзаев, Б.Рахмонов, М.Ш.Тухлиев, А.Джаббаровлар
                    действуют. <br />
                    Профессора и преподаватели кафедры <br />
                    5130100 – «Прикладная математика 1, 2»; <br />
                    5140300 – «Математика для экономистов»; <br />
                    5330100 – «Математика»; <br />
                    5330100 – «Высшая математика»; <br />
                    5330200 – «Математика и методика ее преподавания»; <br />
                    5330300 – «По высшей математике и дошкольному образованию».
                    применение математики»; <br />
                    60610100 – «Формирование элементарных математических
                    представлений». методология»; 60610200 – «Экологическая
                    культура и устойчивое развитие». основы развития»; <br />
                    60610300 – «Экология» <br />
                    60610300 - «Кимё» Хранение сельскохозяйственной продукции и
                    технология обработки <br />
                    60610300 – «Хранение и переработка сельскохозяйственной
                    продукции». технология эксплуатации» <br />
                    высшее (дневное и заочное) образование теоретический и
                    практический для студентов проводятся тренинги. <br />
                  </p>
                  <h4>3. Научная деятельность кафедры</h4>{" "}
                  <p>
                    Защита кандидатских диссертаций: Бобомуродов К.В. (2023 г.),
                    А.Ш. Худойкулов и М.Ш. Тухлиев (2024 г.) <br />
                    Скопус, Сеть науки, Научные работы, опубликованные в
                    республиканских и зарубежных журналах. список которых
                    кровоточит на научных конференциях. В последние годы Примеры
                    опубликованных научных статей:
                    <br />
                    <br />
                    В научной базе данных Scopus: <br />
                    1. Бахадиров Г., Алибоев К., Хайдаров С. Конференция.
                    Бумага. Моделирование контактного взаимодействия кожи с
                    прижимные ролики. Сеть конференций E3S, 2023, 443, 04011{" "}
                    <br />
                    2. Бахадиров Г., Алибоев К., Хайдаров С. Конференция.
                    Бумага. Моделирование остаточной влажности кожи. Е3С Web of
                    Conferences, 2023, 443, 04010 Республика и зарубежье
                    <br /> <br />
                    в журналах: <br />
                    1) Хайдаров Ш. А., Туфлиев Е.О. МАРКОВСКАЯ МОДЕЛЬ
                    РАБОТОСПО-СОБСТВЕННОСТИ СЛОЙНИКС СИСТЕМ Евразийский журнал
                    математическая теория и информатика 20233333 инновационные.
                    Центр поддержки научных исследований Академии <br />
                    2) Хайдаров Ш.А., Аликулов Т.А., Егамов М.Х. Данные
                    способность работать со сложными системами, если они неполны
                    методы оптимизации уровней. ИННОВАЦИОННЫЕ ТЕХНОЛОГИИ, Том
                    51, №3, 2023. С 102-106 <br />
                    3) Т.А. АЛИКУЛОВ, Ш.А. Хайдаров, Его знали даже набесахью
                    Очерки. щизни и научной деятельности академика Х.
                    Рахматуллина. Материалы «Международная научно-практическая
                    конференция». «Рахматулинская Четиния» (26-27 мая 2023г.
                    Ташкент 2023г., С 236-241.
                    <br />
                    4) Ш.А. Хайдаров, Т.А. Аликулов, М.Х. Егамов О.Б. ОДНОЙ
                    АЛГОРИТМ. ОЦЕНКИ ПАРАМЕТРОВ РАБОТЫ СЛОЙНОЙ СИСТЕМЫ Материалы
                    «Актуальные проблемы инноваций и технологий Образование в
                    условиях глобализации. Мы потеем. 2023 г. С 422-427. <br />
                    5) Бозаров Д. Ю. ФУНКЦИИ ДВУХ ПЕРЕМЕННЫХ. ДВЕ ФИГУРЫ В
                    САМОЛЕТЕ, ИСПОЛЬЗУЮЩИЕ ЭКСТРИМ НАЙТИ ДИСТАНЦИЮ МЕЖДУ
                    //Восточный Ренессанс: Инновационные, образовательные,
                    естественные и социальные науки. – 2022. - Т. 2. – нет. 11.
                    – С. 292-301. <br />
                    6) Бозаров Д. У. Самостоятельно изучить тему определителей.
                    примеры //Журнал Физико-математические науки. - 2022. - Т.
                    3. – нет. 1. <br />
                    7) Бозаров Д. ЛИНЕЙНОЕ И КВАДРАТИЧНОЕ МОДЕЛИРОВАНИЕ ПРИМЕРЫ
                    САМОСТОЯТЕЛЬНОГО ИЗУЧЕНИЯ ПРЕДМЕТА // Евразийский Журнал
                    математической теории и информатики. – 2022. – Т. 2. – нет.
                    6. - С. 24-28. <br />
                    8) Алламова М., Бозаров Д. ТРИГОНОМЕТРИЧЕСКИЕ НЕРАВЕНСТВА
                    ИННОВАЦИОННОЕ ПРИМЕНЕНИЕ РЕШЕНИЙ // Евразийский Журнал
                    математической теории и информатики. – 2023. – Т. 3. – нет.
                    1. – С. 75-78. <br />
                    9) Дилмурод Б., Ислам А. ДВЕ ПАРАЛЛЕЛЬНЫЕ ПРЯМЫЕ ЛИНИИ
                    ДИСТАНЦИЯ МЕЖДУ // Инновации в технологиях и науке
                    Образование. - 2023. - Т. 2. – нет. 8. - С. 465-478. <br />
                    10) Уралович Б. Д. ЛИНЕЙНЫЕ АЛГЕБРАИЧЕСКИЕ УРАВНЕНИЯ ВОПРОСЫ
                    СИСТЕМНЫХ //Наука и инновации. – 2022. - Т. 1. – нет. А2. -
                    С. 163-171. <br />
                    11) Бозаров Д.Ю. Примеры освоения //Преподаватель также
                    непрерывен образование'. - 2022. - Т. 7. - С. 6. <br />
                    12) Бозаров Д. МЕТОДЫ РАЗВИТИЯ ЭКОНОМИЧЕСКОЙ КОМПЕТЕНТНОСТИ
                    ОСНОВЫ МЕЖДИСЦИПЛИНАРНЫХ СВЯЗЕЙ //Современная наука и
                    исследования. - 2023. - Т. 2. – нет. 12. - С. 131-137.{" "}
                    <br />
                    13) Бозаров Д. ЭКОНОМИКА БУДУЩИХ СТУДЕНТОВ-ЭКОНОМИКОВ
                    МАТЕМАТИЧЕСКИЙ АНАЛИЗ РАЗВИТИЯ КОМПЕТЕНЦИЙ //Академические
                    исследования в современной науке. – 2023. – Т. 2. – нет. 27.
                    - С. 84-90. <br />
                    14) Уралович Б.Д. и др. О СВОЙСТВАХ СЕТЕЙ //Репозиторий
                    академических наук. - 2023. - Т. 4. – нет. 04. – С. 353-357.{" "}
                    <br />
                    15) Дилмурод Б. Гладкая в неориентированных кратных.
                    ГОМОТОПНОЕ РАЗБИВАНИЕ ОБМЕНА // УНИВЕРСАЛЬНЫЙ ЖУРНАЛ
                    МАТЕМАТИЧЕСКАЯ ТЕОРИЯ И ИНФОРМАТИКА. - 2023. - Т. 1. – Нет.
                    1. – С. 13-18. <br />
                    16) Бозаров Д. МЕТОДЫ РАЗВИТИЯ ЭКОНОМИЧЕСКОЙ КОМПЕТЕНТНОСТИ
                    ОСНОВЫ МЕЖДИСЦИПЛИНАРНЫХ СВЯЗЕЙ //Современная наука и
                    исследования. - 2023. - Т. 2. – нет. 12. - С. 131-137.{" "}
                    <br />
                    17) Шоймов Б., Оромов Ж. «Имеет сингулярный коэффициент
                    задача Коши для уравнения гиперболического типа Научный
                    вестник БуксДУ №2, 2023 г. [66-70] <br />
                    18) Шоймов Б., Оромов Ж. «Целая и дробная часть числа
                    концепция и ее приложения» «Современный анализ проблемы» на
                    республиканскую научную конференцию «Против» 2-3 июня 2023
                    г. [363-366] <br />
                    19) Шоймов Б., Оромов Ю. «Сильно вырожденные гиперболические
                    Краевая задача для уравнения типа «Анализ современные
                    проблемы» республиканский научный конференция «Против» 2-3
                    июня 2023 г. [183-186] <br />
                    20) Шоймов Б., Бозоров М. «Параболо-гиперболического типа».
                    изменить линии, сдвинутые от характеристики для уравнений
                    Краевая задача в нижней половине поля, содержащая "Золотой
                    Мозг» Научный журнал. ISSN:2181-4120, 29 октября 2023 г.
                    [4-13] https://doi.org/10.5281/zenodo.10041479 <br />
                    21) Шоймов Б., Бозоров М. «Нечеткое в банаховом пространстве
                    и обратная функция» Научный журнал Golden Brain.
                    ISSN:2181-4120 29 октября 2023 г. [14-24]
                    https://doi.org/10.5281/zenodo.10041498 <br />
                    22) Шоймов Б., Бозоров М. «Краевая задача в нижних полуполя,
                    отклоняющиеся от характеристик для параболо-гиперболическое
                    уравнение», Място Пшишлощи, Кельце 2023 Импакт-фактор: 9,2.
                    ISSN-L:2544-980X [331-338] <br />
                    23) Шоймов Б.С., Рахмонов Б.А., «Модульные уравнения и
                    неравенства», Журнал инноваций нового века,
                    Том–49_Выпуск-2_Март_2024 г. [180-186] <br />
                    24) Мукумов А.Х. ДИФФЕРЕНЦИАЛЬНОЕ УРАВНЕНИЕ ВТОРОГО ПОРЯДКА
                    ПРАВИЛЬНОЕ РЕШЕНИЕ ГРАНИЧНОЙ ЗАДАЧИ ДЛЯ // Мировой
                    научно-исследовательский журнал. - 2023. - Т. 22. – нет. 2.
                    - С. 77-80. <br />
                    25) Мукумов А.Х. ДЛЯ УРАВНЕНИЙ ВТОРОГО ПОРЯДКА ОБОБЩЕННЫЕ И
                    СЛАБЫЕ РЕШЕНИЯ ГРАНИЧНОЙ ЗАДАЧИ ОГРАНИЧЕНИЯ //Международный
                    журнал научных исследований (IJSR) ИНДЕКСАЦИЯ. - 2023. - Т.
                    3. – нет. 2. <br />
                    26) Мукумов А. Х. ЧЕТЫРЕ ОДНОЙ ПЕРЕМЕННОЙ ФУНКЦИИ ОБМЕН И
                    СВОЙСТВА // Образовательные исследования в Универсальные
                    науки. - 2024. - Т. 3. – нет. 4 СПЕЦ. - С. 545-548. . <br />
                    27) Мукумов А.Х. О ПРАВИЛЬНОЙ РАЗРЕШИМОСТИ КРАЕВЫХ ЗАДАЧ ДЛЯ
                    УРАВНЕНИЯ ВТОРОГО ПОРЯДКА //Современное образование
                    трансформация. - 2024. - Т. 4. – нет. 2. - С. 243-246.{" "}
                    <br />
                  </p>
                </div>
              )}

              {lang == "en" && (
                <div>
                  <h4>1. History and activities of the department</h4>{" "}
                  <p>
                    Department at the Economics and Pedagogical University in
                    2023 Faculty of Information Technologies and Digital Economy
                    in connection with its creation at this faculty “General
                    Methodological Science" under the leadership of Associate
                    Professor O.Kh. Abdullayev (UMF) began your activities.{" "}
                    <br />
                    professors and teachers of the Department of MMF Economics,
                    Oil and gas, information at our university of technology,
                    initial education and preschool education for students
                    studying in the direction of "Higher Mathematics", Applied
                    Mathematics, mathematics, mathematics and its teaching
                    methodology, formation of elementary mathematical concepts
                    methods of teaching chemistry and ecology and what they will
                    do in the future will become mature specialists,
                    hardworking, honest and different spheres of our republic.
                    The desire to educate in the spirit of loyalty to the
                    Motherland to place <br />
                    In a short time professors and teachers of the department
                    were awarded doctorate degrees philosophy. also receive the
                    title of defenders and associate professors, in including K.
                    Bobomurodov, A. Khudaykulov and M.Sh. Tukhliev Ph.D. And
                    O.Kh. Abdullaev was awarded the title of associate
                    professor. has entered.
                  </p>
                  <h4>2. Educational activities of the department</h4>{" "}
                  <p>
                    Currently at the Department of General Methodological
                    Sciences. associate professors: Abdullaev O.Kh., Khaidarov
                    Sh.A., Oromov J.G. Bobomurodov K., Khudoykulov A.Sh.,
                    Ikromov O.A., Farmonov Zh.B. F. G. Mamatkulov, M. N.
                    Bozorov, B. Shoimovlar; big teachers: D. U. Bozarov, A.
                    Mukumov; assistants: O. Mirzaev, B. Rakhmonov, M. Sh.
                    Tukhliev, A. Jabbarovlar act. <br />
                    Professors and teachers of the department <br />
                    5130100 – “Applied mathematics 1, 2”; <br />
                    5140300 – “Mathematics for economists”; <br />
                    5330100 – “Mathematics”; <br />
                    5330100 – “Higher mathematics”; <br />
                    5330200 – “Mathematics and methods of teaching it”; <br />
                    5330300 – “On higher mathematics and preschool education.”
                    application of mathematics"; <br />
                    60610100 – “Formation of elementary mathematical
                    representations." methodology"; 60610200 – “Ecological
                    culture and sustainable development.” fundamentals of
                    development"; <br />
                    60610300 – “Ecology” <br />
                    60610300 - “Kimyo” Storage of agricultural products and
                    processing technology <br />
                    60610300 – “Storage and processing of agricultural
                    products". operating technology" <br />
                    higher (full-time and part-time) education theoretical and
                    Practical trainings are conducted for students. <br />
                  </p>
                  <h4>3. Scientific activities of the department</h4>{" "}
                  <p>
                    Defense of candidate dissertations: Bobomurodov K.V. (2023),
                    A.Sh. Khudoykulov and M.Sh. Tukhliev (2024) <br />
                    Scopus, Science Network, Scientific papers published in
                    republican and foreign magazines. list of which bleeds at
                    scientific conferences. In recent years Examples published
                    scientific articles:
                    <br />
                    <br />
                    In the scientific database Scopus: <br />
                    1. Bakhadirov G., Aliboev K., Khaidarov S. Conference.
                    Paper. Modeling the contact interaction of skin with pinch
                    rollers. E3S Conference Network 2023, 443, 04011 <br />
                    2. Bakhadirov G., Aliboev K., Khaidarov S. Conference.
                    Paper. Simulation of residual skin moisture. E3C Web of
                    Conferences, 2023, 443, 04010 Republic and abroad
                    <br /> <br />
                    in magazines: <br />
                    1) Khaidarov Sh. A., Tufliev E.O. MARKOV MODEL OPERATIONAL
                    PROPERTY OF SLOYNIX SYSTEMS Eurasian Journal mathematical
                    theory and computer science 20233333 innovative. Academy
                    Scientific Research Support Center <br />
                    2) Khaidarov Sh.A., Alikulov T.A., Egamov M.Kh. Data ability
                    to work with complex systems if they are incomplete Level
                    optimization methods. INNOVATION TECHNOLOGIES, Volume 51,
                    No. 3, 2023. P 102-106 <br />
                    3) T.A. ALIKULOV, Sh.A. Khaidarov, He was known even in
                    heaven Essays. life and scientific activity of Academician
                    Kh. Rakhmatullina. Materials “International Scientific and
                    Practical conference". “Rakhmatulinskaya Chetinia” (May
                    26-27, 2023 Tashkent 2023, pp. 236-241.
                    <br />
                    4) Sh.A. Khaidarov, T.A. Alikulov, M.Kh. Egamov O.B. ONE
                    ALGORITHM. ESTIMATIONS OF OPERATING PARAMETERS OF A LAYER
                    SYSTEM Materials “Current problems of innovation and
                    technology Education in conditions of globalization. We're
                    sweating. 2023 pp. 422-427. <br />
                    5) Bozarov D. Yu. FUNCTIONS OF TWO VARIABLES. TWO FIGURES B
                    PLANES USING EXTREME FIND THE DISTANCE BETWEEN //Eastern
                    Renaissance: Innovative, educational, natural and social
                    sciences. – 2022. - T. 2. – no. eleven. – pp. 292-301.{" "}
                    <br />
                    6) Bozarov D.U. Independently study the topic of
                    determinants. examples // Journal of Physics and
                    Mathematics. - 2022. - T. 3. – no. 1. <br />
                    7) Bozarov D. LINEAR AND QUADRATIC MODELING EXAMPLES
                    INDEPENDENT STUDY OF A SUBJECT // Eurasian Journal
                    mathematical theory and computer science. – 2022. – T. 2. –
                    no. 6. - pp. 24-28. <br />
                    8) Allamova M., Bozarov D. TRIGONOMETRIC INEQUALITIES
                    INNOVATIVE APPLICATION OF SOLUTIONS // Eurasian Journal
                    mathematical theory and computer science. – 2023. – T. 3. –
                    no. 1. – pp. 75-78. <br />
                    9) Dilmurod B., Islam A. TWO PARALLEL STRAIGHT LINES
                    DISTANCE BETWEEN // Innovations in technology and science
                    Education. - 2023. - T. 2. - no. 8. - pp. 465-478. <br />
                    10) Uralovich B. D. LINEAR ALGEBRAIC EQUATIONS QUESTIONS
                    SYSTEM //Science and Innovation. – 2022. - T. 1. – no. A2. -
                    pp. 163-171. <br />
                    11) Bozarov D.Yu. Examples of mastering //Teacher also
                    continuous education'. - 2022. - T. 7. - P. 6. <br />
                    12) Bozarov D. METHODS OF DEVELOPING ECONOMIC COMPETENCE
                    FUNDAMENTALS OF INTERDISCIPLINARY RELATIONS //Modern science
                    and research. - 2023. - T. 2. - no. 12. - pp. 131-137.{" "}
                    <br />
                    13) Bozarov D. ECONOMICS OF FUTURE ECONOMICS STUDENTS
                    MATHEMATICAL ANALYSIS OF COMPETENCY DEVELOPMENT //Academic
                    research in modern science. – 2023. – T. 2. – no. 27. - P.
                    84-90. <br />
                    14) Uralovich B.D. etc. ABOUT THE PROPERTIES OF NETWORKS
                    //Repository academic sciences. - 2023. - T. 4. - no. 04. –
                    pp. 353-357. <br />
                    15) Dilmurod B. Smooth in unoriented multiples. HOMOTOPIC
                    PARTITIONING OF EXCHANGE // UNIVERSAL JOURNAL MATHEMATICAL
                    THEORY AND INFORMATION SCIENCE. - 2023. - T. 1. – No. 1. –
                    pp. 13-18. <br />
                    16) Bozarov D. METHODS OF DEVELOPING ECONOMIC COMPETENCE
                    FUNDAMENTALS OF INTERDISCIPLINARY RELATIONS //Modern science
                    and research. - 2023. - T. 2. - no. 12. - pp. 131-137.{" "}
                    <br />
                    17) Shoimov B., Oromov Zh. “Has a singular coefficient
                    Cauchy problem for an equation of hyperbolic type Scientific
                    Bulletin of BooksDU No. 2, 2023 [66-70] <br />
                    18) Shoimov B., Oromov Zh. “Integer and fractional part of a
                    number concept and its applications" "Modern analysis of the
                    problem" on Republican scientific conference “Against” June
                    2-3, 2023 [363-366] <br />
                    19) Shoimov B., Oromov Y. “Strongly degenerate hyperbolic
                    Boundary value problem for an equation of the type “Analysis
                    of modern problems" Republican scientific conference
                    "Against" 2-3 June 2023 [183-186] <br />
                    20) Shoimov B., Bozorov M. “Parabolic-hyperbolic type.”
                    change the lines shifted from the characteristic for the
                    equations Boundary value problem in the lower half of the
                    field containing "Golden Brain" Scientific journal.
                    ISSN:2181-4120, October 29, 2023 [4-13]
                    https://doi.org/10.5281/zenodo.10041479 <br />
                    21) Shoimov B., Bozorov M. “Fuzzy in Banach space and
                    inverse function” Scientific journal Golden Brain.
                    ISSN:2181-4120 October 29, 2023 [14-24]
                    https://doi.org/10.5281/zenodo.10041498 <br />
                    22) Shoimov B., Bozorov M. “Boundary value problem in lower
                    semifields, deviating from the characteristics for
                    parabolic-hyperbolic equation", Miasto Przyszloszczy, Kielce
                    2023 Impact factor: 9.2. ISSN-L:2544-980X [331-338] <br />
                    23) Shoimov B.S., Rakhmonov B.A., “Modular equations and
                    Inequalities", Journal of New Century Innovation,
                    Volume–49_Issue-2_March_2024 [180-186] <br />
                    24) Mukumov A.Kh. SECOND ORDER DIFFERENTIAL EQUATION CORRECT
                    SOLUTION OF THE BOUNDARY PROBLEM FOR // World scientific
                    research journal. - 2023. - T. 22. – no. 2. - P. 77-80.{" "}
                    <br />
                    25) Mukumov A.Kh. FOR SECOND ORDER EQUATIONS GENERALIZED AND
                    WEAK SOLUTIONS TO THE BOUNDARY PROBLEM CONSTRAINTS
                    //International Journal of Scientific Research (IJSR)
                    INDEXING. - 2023. - T. 3. – no. 2. <br />
                    26) Mukumov A. Kh. FOUR ONE VARIABLE FUNCTION EXCHANGE AND
                    PROPERTIES // Educational Research in Universal Sciences. -
                    2024. - T. 3. - no. 4 SPECIAL - pp. 545-548. . <br />
                    27) Mukumov A.Kh. ON THE CORRECT SOLVABILITY OF BOUNDARY
                    BOUNDARY PROBLEMS FOR SECOND ORDER EQUATIONS //Modern
                    education transformation. - 2024. - T. 4. - no. 2. - pp.
                    243-246. <br />
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
