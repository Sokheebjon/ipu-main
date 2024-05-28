import instructors from "../../data/Instructors.json";
import { useIntl } from "react-intl";
import { getProductName } from "../../helpers/general";
import Image1 from "../../assets/images/faculties-2/image-1.png";

const InstructorDetailsMain = () => {
  const intl = useIntl();
  const instructor = instructors.find((b) => b.kafedra == "4");
  const lang = (
    JSON.parse(localStorage.getItem("i18nConfig")) || { selectedLang: "uz" }
  )?.selectedLang;

  let usersUz = [
    {
      name: "Boymurodov Ismat Hasanovich",
      email: "ismatbojmurodov414@gmail.com",
    },
    {
      name: "Jo'rayev Abdunaim Xudoynazarovich",
      email: "Jurayev&@mail.ru",
    },
    {
      name: "Xusanov G'aybullo Usmonovich",
      email: "Gaybullaxusanov782@gmail.com",
    },
    {
      name: "To'xtayev Juma Jo'rayevich",
      email: "jumatoxtayev@gmail.com",
    },
    {
      name: "Amirqulov Otabek Ismoilovich",
      email: "otabekamirqulov@gmail.com",
    },
    {
      name: "Zikirov Ravshan Abdijabborovich",
      email: "Ravshanzikirov89@gmail",
    },
    {
      name: "Yo'ldosheva Madhiya Bekmurod qizi",
      email: "madhiyayoldosheva28@gmail",
    },
    {
      name: "Ziyodullayeva Madina Ziyodullayevna",
      email: "madiziyodullayeva33@gmail.com",
    },
    {
      name: "Dilmurodova E'zoza",
      email: "Dilmurodova.ezoza97@gmail.com",
    },
    {
      name: "Ro'ziqulov Bunyodbek Baxtiyor o'g'li",
      email: "Bunyod 2020@mail.com",
    },
    {
      name: "Eshpo'latov Faxriddin Raimovich",
      email: "eshpulatovfax2020@mail.com",
    },
  ];

  let usersRu = [
    {
      name: "Боймуродов Исмат Хасанович",
      email: "ismatbojmurodov414@gmail.com",
    },
    {
      name: "Жураев Абдунаим Худойназарович",
      email: "Jurayev&@mail.ru",
    },
    {
      name: "Хусанов Гайбулло Усмонович",
      email: "Gaybullaxusanov782@gmail.com",
    },
    {
      name: "Тухтаев Джума Жураевич",
      email: "jumatoxtayev@gmail.com",
    },
    {
      name: "Амиркулов Отбек Исмаилович",
      email: "otabekamirqulov@gmail.com",
    },
    {
      name: "Зикиров Равшан Абдижабборович",
      email: "Ravshanzikirov89@gmail",
    },
    {
      name: "Йулдошева Мадхия Бекмуродовна",
      email: "madhiyayoldosheva28@gmail",
    },
    {
      name: "Зиёдуллаева Мадина Зиёдуллаевна",
      email: "madiziyodullayeva33@gmail.com",
    },
    {
      name: "Дилмуродова Эзоза",
      email: "Dilmurodova.ezoza97@gmail.com",
    },
    {
      name: "Рузикулов Буньодбек Бахтиярович",
      email: "Bunyod 2020@mail.com",
    },
    {
      name: "Эшпулатов Фахриддин Раимович",
      email: "eshpulatovfax2020@mail.com",
    },
  ];

  let usersEn = [
    {
      name: "Boymurodov Ismat Hasanovich",
      email: "ismatbojmurodov414@gmail.com",
    },
    {
      name: "Jo'rayev Abdunaim Xudoynazarovich",
      email: "Jurayev&@mail.ru",
    },
    {
      name: "Xusanov G'aybullo Usmonovich",
      email: "Gaybullaxusanov782@gmail.com",
    },
    {
      name: "To'xtayev Juma Jo'rayevich",
      email: "jumatoxtayev@gmail.com",
    },
    {
      name: "Amirqulov Otabek Ismoilovich",
      email: "otabekamirqulov@gmail.com",
    },
    {
      name: "Zikirov Ravshan Abdijabborovich",
      email: "Ravshanzikirov89@gmail",
    },
    {
      name: "Yo'ldosheva Madhiya Bekmurod qizi",
      email: "madhiyayoldosheva28@gmail",
    },
    {
      name: "Ziyodullayeva Madina Ziyodullayevna",
      email: "madiziyodullayeva33@gmail.com",
    },
    {
      name: "Dilmurodova E'zoza",
      email: "Dilmurodova.ezoza97@gmail.com",
    },
    {
      name: "Ro'ziqulov Bunyodbek Baxtiyor o'g'li",
      email: "Bunyod 2020@mail.com",
    },
    {
      name: "Eshpo'latov Faxriddin Raimovich",
      email: "eshpulatovfax2020@mail.com",
    },
  ];

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
                  <h4>Kafedra tarixi va faoliyati</h4>
                  <p>
                    Kafedra 2023 yilda Iqtisodiyot va Pedagogika Universitetida
                    “Axborot texnologiyalari va raqamli iqtisodiyot” fakultetini
                    tashkil topishi munosabati bilan faoliyat boshlagan. <br />
                    Fakultet va shu jumladan, Kompyuter tizimlari kafedrasi,
                    Axborot texnologiyaya va tizizmlari, Kompyuter injiniring
                    yo‘nalishlarida yuqori saviyali mutaxassislarni tayyorlashni
                    o‘z oldiga asosiy maqsad qilib qo‘ygan.
                    <br />
                    Shu kungacha kafedra tomonidan ko‘plab kompyuter sohasi
                    bo‘yicha mutaxassislar tayyorlanmoqda. Ular davlat
                    tashkilotlarida, banklar va firmalarda IT mutaxassisi
                    sifatida samarali faoliyat olib borishlari mumkin. <br />
                  </p>
                  <h4>Kafedraning o’quv faoliyati</h4>
                  <p>
                    Hozirgi kunda Kompyuter tizimlari kafedrasida v.b. dotsent
                    H.S.Egamberdiyev, dotsent B.M.Suropov, katta o‘qituvchilar
                    F.K.Karayev, I.R.Radjabova, F.S.Bozarovlar, Assistent
                    o‘qituvchilar Sh.B.Xayriddinov, O‘.M.jurayev, B.I.Suvonov,
                    stajyor o’qituvchilar A.A.Sa’dullayev, J.T.Sunatov,
                    N.B.Xidirova, O.A.Asrorov, Sh.Y.Fayziyeva, Q.G.Madatov,
                    kabinet mudiri D.Sh.Isakova va boshqalar faol mehnat
                    qilmoqdalar. <br />
                    <br />
                    Kafedra professor-o‘qituvchilari tomonidan
                    <br />
                    60110600 – “Matematika va informatika”; <br />
                    60610500 – “Kompyuter injiniring (Kompyuter injiniring)”;{" "}
                    <br />
                    60610500 – “Kompyuter injiniring (Multimedia
                    texnologiyalari)”; <br />
                    60610500 – “Kompyuter injiniring (AT-Servis)”; <br />
                    5330300 – “Axborot xavfsizligi”; <br />
                    60610200 – “Axborot texnologiayalri va tizimlari (tarmoqlar
                    va sohalar bo’yicha)”; <br />
                    60610200 – “Axborot texnologiayalri va tizimlari
                    (moliya-bank tizimida)”; <br />
                    60610200 – “Axborot texnologiayalri va tizimlari (temir yo’l
                    tizimida)” <br />
                    bakalavriat (kunduzgi va sirtqi) ta’limi yo’nalishlarida
                    quyidagi fanlardan nazariy va amaliy mashg’ulotlar olib
                    boriladi: <br />
                    • Algoritmik tillar va dasturlash <br />
                    • Algoritmlash va dasturlash asoslari <br />
                    • Analog va raqamli sxemotexnika <br />• Axborot boshqarish
                    tizimlarini instrumental vositalari <br />• Axborot
                    texnologiyalarini kasbiy faoliyatda qo’llash <br />
                    • Axborotlarga ishlov berishning matematik asoslari va
                    algoritmlari <br />
                    • Boshlang’ich sinflarda axborot texnologiyalari <br />
                    • Boshqarish nazariyasi <br />
                    • Dasturiy ta’minotni ishlab chiqish texnologiyasi •
                    Dasturlash tillari va texnologiyalari <br />
                    • Iqtisodiyotda axborot kommunikatsion texnologiyalari va
                    tizimlari <br />
                    • Kompyuter tizimlari va tarmoqlari <br />
                    • Kompyuter tizimlari va telekommunikatsiyalari <br />
                    • Ma’lumotlar bazasini boshqarish va boshqarish
                    texnologiyalari <br />
                    • Mediasavodxonlik va axborot madaniyati <br />
                    • Muhandislik va kompyuter grafikasi <br />
                    • Raqamli va axborot texnologiyalari <br />
                    • Sanoat ishlab chiqarishning texnologiyalari <br />
                    • Ta’limda axborot texnologiyalari <br />
                    • Texnik tizimlarda axborot texnologiyalari <br />
                    • Tizimli dasturiy ta’minot <br />
                    • Web dasturlash asoslari <br />
                    • Ma’lumotlar tuzilmasi va algoritmlari <br />
                    • Axborot kommunikatsion texnologiyalari va tizimlari <br />
                    25 ta fan mavjud <br />
                  </p>
                </div>
              )}
              {lang == "ru" && (
                <div>
                  <h4>История и деятельность кафедры</h4>
                  <p>
                    Кафедра в Экономико-педагогическом университете в 2023 году
                    Факультет «Информационные технологии и цифровая экономика»
                    начал свою деятельность в связи с его учреждением. <br />
                    Факультет, в том числе кафедра компьютерных систем,
                    Информационные технологии и системы, Компьютерная инженерия
                    подготовить специалистов высокого уровня в областях поставил
                    перед собой главную цель.
                    <br />
                    На сегодняшний день на кафедре много информатики.
                    специалисты проходят обучение. Они - государство
                    ИТ-специалист в организациях, банках и фирмах может
                    действовать эффективно.
                    <br />
                  </p>
                  <h4>Образовательная деятельность кафедры</h4>
                  <p>
                    В настоящее время на кафедре компьютерных систем и др.
                    Доцент Х.С.Эгамбердиев, доцент Б.М.Суропов, старшие
                    преподаватели Ф.К. Караев, И.Р. Раджабова, Ф.С.
                    преподаватели Ш.Б. Хайриддинов, О'.М. Джураев, Б.И.
                    преподаватели-стажеры А.А.Садуллаев, Ж.Т.Сунатов,
                    Н.Б.Хидирова, О.А.Асроров, Ш.Ю.Файзиева, К.Г.Мадатов,
                    Активно работают Глава Кабинета министров Д.Ш. Исакова и
                    другие. делаем <br />
                    <br />
                    Профессора и преподаватели кафедры
                    <br />
                    60110600 – «Математика и информатика»; <br />
                    60610500 – «Вычислительная техника (Вычислительная
                    техника)»; <br />
                    60610500 – «Вычислительная техника (Мультимедиа)
                    технологии)"; <br />
                    60610500 – «Компьютерная инженерия (ИТ-Сервис)»; <br />
                    5330300 – «Информационная безопасность»; <br />
                    60610200 – «Информационные технологии и системы (сети) и по
                    отраслям)"; <br />
                    60610200 – «Информационные технологии и системы» (в
                    финансово-банковской системе)"; <br />
                    60610200 – «Информационные технологии и системы
                    (железнодорожный транспорт) в системе)" <br />
                    по направлениям бакалавриата (дневного и заочного)
                    образования прохождение теоретической и практической
                    подготовки по следующим предметам отправляется: <br />
                    • Алгоритмические языки и программирование <br />
                    • Основы алгоритмики и программирования <br />
                    • Аналоговая и цифровая схемотехника <br />• Управление
                    информацией системные инструментальные средства <br />•
                    Информация применение технологий в профессиональной
                    деятельности <br />• Математические основы обработки
                    информации и алгоритмы <br />
                    • Информационные технологии в начальных классах <br />
                    • Теория управления <br />
                    Технология разработки программного обеспечения Языки
                    программирования и технологии <br />
                    • Информационные и коммуникационные технологии в экономике и
                    системы <br />
                    • Компьютерные системы и сети <br />
                    • Компьютерные системы и телекоммуникации <br />• Управление
                    и администрирование базы данных технологии <br />
                    • Медиаграмотность и информационная культура <br />
                    • Инженерная и компьютерная графика <br />
                    • Цифровые и информационные технологии <br />
                    • Технологии промышленного производства <br />
                    • Информационные технологии в образовании <br />
                    • Информационные технологии в технических системах <br />
                    • Системное программное обеспечение <br />
                    • Основы веб-программирования <br />
                    • Структура данных и алгоритмы <br />
                    • Информационно-коммуникационные технологии и системы <br />
                    Всего 25 предметов <br />
                  </p>
                </div>
              )}

              {lang == "en" && (
                <div>
                  <h4>History and activity of the department</h4>
                  <p>
                    Department at the University of Economics and Pedagogy in
                    2023 "Information technologies and digital economy" faculty
                    started operating in connection with its establishment.{" "}
                    <br />
                    Faculty, including the Department of Computer Systems,
                    Information technology and systems, Computer engineering to
                    train high-level specialists in the fields has set himself
                    the main goal.
                    <br />
                    To date, the department has a lot of computer science
                    specialists are being trained. They are the state IT
                    specialist in organizations, banks and firms can operate
                    effectively. <br />
                  </p>
                  <h4>Educational activities of the department</h4>
                  <p>
                    Currently, at the Department of Computer Systems, etc.
                    associate professor H.S.Egamberdiyev, associate professor
                    B.M.Suropov, senior teachers F.K. Karayev, I.R. Radjabova,
                    F.S. Bozarovlar, Assistant teachers Sh.B. Khayriddinov,
                    O'.M. Jurayev, B.I. Suvonov, trainee teachers A.A.
                    Sadullayev, J.T.Sunatov, N.B.Khidirova, O.A.Asrorov,
                    Sh.Y.Faiziyeva, Q.G.Madatov, Head of Cabinet D.Sh. Isakova
                    and others actively work are doing <br />
                    <br />
                    By professors and teachers of the department
                    <br />
                    60110600 – "Mathematics and informatics"; <br />
                    60610500 – "Computer engineering (Computer engineering)";{" "}
                    <br />
                    60610500 – "Computer engineering (Multimedia technologies)";{" "}
                    <br />
                    60610500 – "Computer engineering (IT-Service)"; <br />
                    5330300 – "Information security"; <br />
                    60610200 - "Information technologies and systems (networks
                    and by sectors)"; <br />
                    60610200 - "Information technologies and systems (in the
                    financial-banking system)"; <br />
                    60610200 - "Information technologies and systems (railway in
                    the system)" <br />
                    in the fields of undergraduate (full-time and part-time)
                    education taking theoretical and practical training in the
                    following subjects goes to: <br />
                    • Algorithmic languages ​​and programming <br />
                    • Fundamentals of algorithmic and programming <br />
                    • Analog and digital circuit engineering <br />• Information
                    management systems instrumental tools <br />• Information
                    application of technologies in professional activity <br />
                    • Mathematical foundations of information processing and
                    algorithms <br />
                    • Information technologies in primary grades <br />
                    • Management theory <br />
                    Software development technology Programming languages ​​and
                    technologies <br />
                    • Information and communication technologies in the economy
                    and systems <br />
                    • Computer systems and networks <br />
                    • Computer systems and telecommunications <br />
                    • Database management and administration technologies <br />
                    • Media literacy and information culture <br />
                    • Engineering and computer graphics <br />
                    • Digital and information technologies <br />
                    • Technologies of industrial production <br />
                    • Information technologies in education <br />
                    • Information technologies in technical systems <br />
                    • System software <br />
                    • Fundamentals of web programming <br />
                    • Data structure and algorithms <br />
                    • Information communication technologies and systems <br />
                    There are 25 subjects <br />
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
