import instructors from "../../data/Instructors.json";
import { useIntl } from "react-intl";
import { getProductName } from "../../helpers/general";
import Image1 from "../../assets/images/faculties-2/image-1.png";

const InstructorDetailsMain = () => {
  const intl = useIntl();
  const instructor = instructors.find((b) => b.kafedra == "3");
  const lang = (
    JSON.parse(localStorage.getItem("i18nConfig")) || { selectedLang: "uz" }
  )?.selectedLang;

  let listUz = [
    {
      id: 1,
      title: "Jismoniy madaniyat nazariyasi va metodikasi",
      text: "Respublikamizdagi umumiy o‘rta ta’lim tizimida, akademik litseylar va professional ta’lim tizimida faoliyat ko‘rsatuvchi bo‘lajak jsmoniy tarbiya va sport darajasidagi chuqur bilimlarni berishga qaratilgan.",
    },
    {
      id: 2,
      title: "Sport va harakatli o‘yinlarni o‘qitish metodikasi",
      text: "Sport va harakatli o‘yinlarni o‘qitish metodikasi;fanining asosiy maqsad va vazifasi bo‘lajak jismoniy tarbiya va sport fani o‘qituvchilariga ijtimoiy va iqtisodiy sohadagi asosiy xususiyatlar, madaniy sohaning taraqqiyoti va uning o‘ziga xos xususiyatlari haqida atroflicha va chuqur bilim berishdan hamda sport mashg‘ulotlariag keng jalb qilishdan borat.",
    },
    {
      id: 3,
      title: "Milliy va harakatli o‘yinlarni o‘qitish metodikasi",
      text: "Milliy va harakatli o‘yinlarni o‘qitish metodikasi fanini o‘qitishdan maqsad milliy va harakatli o‘yinlarni o‘qitish metodikas fanining predmeti, tadqiqot uslublari, ibtidoiy, qadimgi, o‘rta asrlar davriga oid jismoniy mashg‘ulotlar, milliy va harakatli o‘yinlarni tashkil qilish masalalarini o‘rganish va amaliyotda qo‘llay olish ko‘nikmalarini hosil qilish.",
    },
    {
      id: 4,
      title: "Sport o‘yinlari va uni o‘qitish metodikasi",
      text: "“Sport o‘yinlari va uni o‘qitish metodikasi” xususan basketbol voleybol futbol gandbol sir-sinoatlari texnika va taktika qoidalari , to‘p bilan ishlashni rivojlantirishga mos bilim, ko‘nikma va malakalarni shakllantirishni nazarda tutadi.",
    },
    {
      id: 5,
      title: "Yengil atletika  va uni o‘qitish metodikasi",
      text: "         “Yengil atletika  va uni o‘qitish metodikasi” fanining maqsadi- talaabalarni yugurish qonun- qoidalari va texnika taktika usullaridan samarali  foydalanish uchun krerakli bilimlarni berib borishdir. Yengil atletika va uni o‘qitish metodikasi sohalari bo‘yicha faoliyatlari davomida ahamiyat kasb etuvchi ko‘nikma va malakalarini hosil qilishdan iborat",
    },
    {
      id: 6,
      title: "Gimnastika va uni o‘qitish metodikasi;",
      text: "Talabalarni umumiy o‘rta ta’lim tizimida o‘qitiladigan Gimnastika va uni o‘qitish metodikasi fanlarining maqsadini, ta’lim-tarbiya vazifalari, mazmuni, metod va usullarini o‘quvchilarga tarixdan puxta bilim berish, ularni milliy g‘oya ruhida tarbiyalash va kamol toptirishda hamda Gimnastika va uni o‘qitish metodikasi  o‘qitishning  eng  muhim  vositalarini  belgilashga  mos ko‘nikma  va malakalarini hosil qilishdan iborat.",
    },
    {
      id: 7,
      title: "Sport inshootlari va uni o‘qitish metodikasi",
      text: "Sport inshootlari va uni o‘qitish metodikasi fanining asosiy maqsadi va vazifasi jahon va mamlakat miqiyosida qurilayotgan sport inshootlarining talabga javob berishlari haqida talabalarga har tomonlama bilimlar berish",
    },
    {
      id: 8,
      title: "Bolalar jismoniy tarbiyasi",
      text: "Talabalarni umumiy o‘rta ta’lim tizimida o‘qitiladigan Bolalar jismoniy tarbiyasi maqsadini, ta’lim-tarbiya vazifalari, mazmuni, metod va usullarini o‘quvchilarga tarixdan puxta bilim berish, ularni maktabgacha yoshidagi bolajonlar bilan ishlari haqida bilim berishdan iborat",
    },
    {
      id: 9,
      title: "Jismoniy tarbiya va sport",
      text: "Fanni o'qitishdan maqsad talabalarda jismoniy tarbiya va sport sohasida olib borilayotgan keng ko‘lamli ishlasr hamda talabalarni bo‘sh vaqtini mazmunli o‘tkazish uchun kerakli bilimlarni atroflicha o‘rgatishdan iborat.",
    },
    {
      id: 10,
      title:
        "Jismoniy tarbiya gigiyenasi va sportning tibbiy fiziologik asoslari",
      text: "Jismoniy tarbiya gigiyenasi va sportning tibbiy fiziologik asoslari talaba-yoshlar tafakkurida jismoniy tarbiya gigiyenasi va sportning tibbiy fiziologik asoslari haqida kerakli bilim va tushunchalarni berib o‘tish hamda nazariy bilimlar va amaliy ko‘nikmalarni shakllantirishdan iborat.",
    },
    {
      id: 11,
      title: "Badminton.",
      text: "Badminton fani talabalar dunyoqarashining umumlashgan tizimini yaratish va unda sport o‘yin o‘rnini ko‘rsatish, insonning dunyoga bo‘lgan bilish, ijtimoiy-siyosiy, ahloqiy, estetik va boshqa munosabatlarini shakllantirish hamda to‘g‘ri fikrlash mahoratini o‘rgatishdan iborat",
    },
    {
      id: 12,
      title: "Kurash",
      text: "talabalarga O‘zbekistonning mustaqillik yillaridagi tarixiy voqelarlarni, siyosiy, ijtimoiy-iqtisodiy, madaniy va xalqaro aloqalariga doir tarixiy jarayonlarni, tub islohotlarning mazmun-mohiyatini anglatish, rivojlanishning Xarakatlar strategiyasi, Taraqqiyot Strategiyasi, Yangi O‘zbekiston, Uchinchi Renessans, ta’lim sohasidagi islohotlar, kadrlar ayniqsa, pedagogik kadrlar tayyorlash bo‘yicha amalga oshirilayotgan ishlar, yutuqlar, kamchiliklar, muammolar hamda istiqbolli rejalar bo‘yicha ma’lumotlar berish. Shuningdek, O‘zbekistonning eng yangi tarixi fanini o‘qitish yoshlar, xususan, talabalar siyosiy ongi va tafakkurini mustahkamlash, ularning fuqarolik jamiyatni shakllantirish jarayonlariga dahldorligini anglatish va bugungi kunda yuz berayotgan muhim o‘zgarishlardan xabardor qilish imkoniyatini beradi",
    },
    {
      id: 13,
      title: "Sport to‘garaklarini tashkil qilish.",
      text: "Sport to‘garaklari va uni o‘qitish metodikasi fanining asosiy maqsadi va vazifasi jahon va mamlakat miqiyosida o‘tkazilayotgan sport to‘garaklarining talabga javob berishlari haqida talabalarga har tomonlama bilimlar berish",
    },
  ];

  let listRu = [
    {
      id: 1,
      title: "Теория и методика физической культуры",
      text: "Нацелен на предоставление глубоких знаний в области физического воспитания и спорта для будущих специалистов, работающих в системе общего среднего образования, академических лицеях и системе профессионального образования в нашей стране.",
    },
    {
      id: 2,
      title: "Методика преподавания спорта и подвижных игр",
      text: "Основная цель и задача дисциплины - предоставить будущим учителям физического воспитания и спорта всесторонние и глубокие знания о основных характеристиках в социально-экономической сфере, развитии культурной сферы и её отличительных особенностях, а также широко вовлечь студентов в спортивные занятия.",
    },
    {
      id: 3,
      title: "Методика преподавания национальных и подвижных игр",
      text: "Цель преподавания этой дисциплины - изучение предмета методики преподавания национальных и подвижных игр, исследовательских методов, физических упражнений с первобытных, древних и средневековых времен, и организации национальных и подвижных игр, а также развитие практических навыков применения этих знаний.",
    },
    {
      id: 4,
      title: "Методика преподавания спортивных игр",
      text: "Дисциплина 'Методика преподавания спортивных игр' включает в себя принципы и технику баскетбола, волейбола, футбола и гандбола, направленную на развитие навыков и знаний, связанных с техническими и тактическими правилами этих видов спорта, а также техникой владения мячом.",
    },
    {
      id: 5,
      title: "Методика преподавания лёгкой атлетики",
      text: "Цель дисциплины 'Методика преподавания лёгкой атлетики' - предоставить студентам необходимые знания для эффективного использования правил и техники бега, а также развить соответствующие навыки и способности в области лёгкой атлетики во время их профессиональной деятельности.",
    },
    {
      id: 6,
      title: "Методика преподавания гимнастики",
      text: "Цель - предоставить студентам глубокие знания по истории, образовательным задачам, содержанию, методам и техникам преподавания гимнастики в системе общего среднего образования, а также развить навыки и умения, связанные с преподаванием гимнастики в соответствии с национальными идеалами.",
    },
    {
      id: 7,
      title: "Методика преподавания спортивных сооружений",
      text: "Основная цель и задача дисциплины - предоставить студентам всесторонние знания о требованиях к спортивным сооружениям, строящимся по всему миру и в нашей стране.",
    },
    {
      id: 8,
      title: "Физическое воспитание детей",
      text: "Цель - предоставить студентам глубокие знания о целях, образовательных задачах, содержании, методах и техниках физического воспитания детей в системе общего среднего образования, а также информировать их о работе с дошкольниками.",
    },
    {
      id: 9,
      title: "Физическое воспитание и спорт",
      text: "Цель преподавания этой дисциплины - предоставить студентам всесторонние знания о широкомасштабной деятельности в области физического воспитания и спорта, а также научить их продуктивно проводить своё свободное время.",
    },
    {
      id: 10,
      title:
        "Гигиена физического воспитания и медицинско-физиологические основы спорта",
      text: "Цель - предоставить необходимые знания и понимание о гигиене физического воспитания и медицинско-физиологических основах спорта студентам, а также развить теоретические знания и практические навыки.",
    },
    {
      id: 11,
      title: "Бадминтон",
      text: "Цель дисциплины - создать у студентов комплексное мировоззрение, показывающее роль спортивных игр, формировать различные социальные, политические, моральные и эстетические отношения, а также обучать умению правильно мыслить.",
    },
    {
      id: 12,
      title: "Кураш",
      text: "Цель - обучить студентов историческим событиям, политическим, социально-экономическим, культурным и международным отношениям в период независимости Узбекистана, а также предоставить информацию о стратегических планах, образовательных реформах, достижениях, недостатках, проблемах и будущих планах, тем самым усиливая их политическое сознание и вовлечённость в формирование гражданского общества.",
    },
    {
      id: 13,
      title: "Организация спортивных кружков",
      text: "Основная цель и задача дисциплины - предоставить студентам всесторонние знания о требованиях к спортивным кружкам, проводимым по всему миру и в нашей стране.",
    },
  ];

  let listEn = [
    {
      id: 1,
      title: "Theory and Methodology of Physical Culture",
      text: "Aimed at providing in-depth knowledge in the field of physical education and sports for future specialists working in the general secondary education system, academic lyceums, and the professional education system in our country.",
    },
    {
      id: 2,
      title: "Methodology of Teaching Sports and Active Games",
      text: "The main goal and objective of the subject is to provide future physical education and sports teachers with comprehensive and in-depth knowledge about the main characteristics in the socio-economic sphere, the development of the cultural sphere and its distinctive features, and to broadly engage students in sports activities.",
    },
    {
      id: 3,
      title: "Methodology of Teaching National and Active Games",
      text: "The purpose of teaching this subject is to study the subject of the methodology of teaching national and active games, research methods, physical exercises from primitive, ancient, and medieval times, and the organization of national and active games, as well as to develop practical skills in applying this knowledge.",
    },
    {
      id: 4,
      title: "Methodology of Teaching Sports Games",
      text: "The subject 'Methodology of Teaching Sports Games' includes principles and techniques of basketball, volleyball, football, and handball, aimed at developing skills and knowledge related to the technical and tactical rules of these sports, as well as ball handling techniques.",
    },
    {
      id: 5,
      title: "Methodology of Teaching Athletics",
      text: "The purpose of the subject 'Methodology of Teaching Athletics' is to provide students with the necessary knowledge for effective use of running rules and techniques, as well as to develop relevant skills and abilities in the field of athletics during their professional activities.",
    },
    {
      id: 6,
      title: "Methodology of Teaching Gymnastics",
      text: "The goal is to provide students with in-depth knowledge of the history, educational tasks, content, methods, and techniques of teaching gymnastics in the general secondary education system, as well as to develop skills and abilities related to teaching gymnastics in accordance with national ideals.",
    },
    {
      id: 7,
      title: "Methodology of Teaching Sports Facilities",
      text: "The main goal and objective of the subject is to provide students with comprehensive knowledge about the requirements for sports facilities being built worldwide and in our country.",
    },
    {
      id: 8,
      title: "Physical Education of Children",
      text: "The goal is to provide students with in-depth knowledge about the goals, educational tasks, content, methods, and techniques of physical education for children in the general secondary education system, as well as inform them about working with preschoolers.",
    },
    {
      id: 9,
      title: "Physical Education and Sports",
      text: "The purpose of teaching this subject is to provide students with comprehensive knowledge about large-scale activities in the field of physical education and sports, as well as teach them how to spend their free time productively.",
    },
    {
      id: 10,
      title:
        "Hygiene of Physical Education and Medical Physiological Foundations of Sports",
      text: "The goal is to provide students with the necessary knowledge and understanding of the hygiene of physical education and the medical and physiological foundations of sports, as well as to develop theoretical knowledge and practical skills.",
    },
    {
      id: 11,
      title: "Badminton",
      text: "The goal of the subject is to create a comprehensive worldview in students, showing the role of sports games, forming various social, political, moral, and aesthetic relationships, as well as teaching the ability to think correctly.",
    },
    {
      id: 12,
      title: "Kurash",
      text: "The goal is to teach students about the historical events, political, socio-economic, cultural, and international relations of Uzbekistan during the years of independence, and to provide information about strategic plans, educational reforms, achievements, shortcomings, problems, and future plans, thereby enhancing their political consciousness and involvement in the formation of civil society.",
    },
    {
      id: 13,
      title: "Organization of Sports Clubs",
      text: "The main goal and objective of the subject is to provide students with comprehensive knowledge about the requirements for sports clubs being conducted worldwide and in our country.",
    },
  ];

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
                    tashkil topishi munosabati bilan, shu fakultet qoshida dots.
                    I.X.Boymuradov rahbarligida «Jismoniy madaniyat va sport»
                    nomi bilan faoliyat boshlagan va hozirgacha o‘zi rahbarlik
                    qilib kelmoqda. <br /> <br />
                    Fakultet va shu jumladan, “ Jismoniy madaniyat va sport ”
                    kafedrasi, ijtimoiy-gumanitar fanlar sohasida zamonaviy
                    fikrlaydigan yetuk mutaxassislarni tayyorlashni o‘z oldiga
                    asosiy maqsad qilib qo‘ygan. <br /> <br />
                    Kafedrada yuqori ilmiy daraja va unvonga ega mutaxassislar,
                    xususan dots,B.B.Ro‘ziqulov, dots.F.Eshpo‘latov, dots
                    J.J.To‘xtayev va PhD M.B.Yo‘ldosheva, R.A.Zikirov,
                    M.Z.Ziyadullayevalar samarali faoliyat yuritib kelishmoqda.{" "}
                    <br />
                  </p>
                  <h4>Kafedraning o‘quv faoliyati</h4>
                  <p>
                    Hozirgi kunda “Jismoniy madaniyat va sport ”
                    dots,B.B.Ro‘ziqulov, dots.F.Eshpo‘latov, dots J.J.To‘xtayev
                    va PhD M.B.Yo‘ldosheva, R.A.Zikirov, M.Z.Ziyadullayeva,
                    katta o‘qituvchilar G‘.U.Husanov,O.I.Amirqulov,
                    A.X.Jo‘rayev, o‘qituvchilar T.Suyunov, E.Dilmurodova va
                    boshqalar faol mehnat qilmoqdalar. <br />
                    Kafedra professor-o’qituvchilari tomonidan <br />
                    60112200 – “Jismoniy madaniyat”; <br />
                    60110200 – “Maktabgacha ta’lim”; <br />
                    60310100 – “Iqtisodiyot”; <br />
                    60610200 – “Axborot tizimlari va texnologiyalari”; <br />
                    60721800 – “Neft va gaz ishi” <br />
                    bakalavriat (kunduzgi, kechki va sirtqi) ta’limi
                    yo’nalishlarida quyidagi fanlardan nazariy va amaliy
                    mashg’ulotlar olib boriladi:
                    <br />
                    • Jismoniy madaniyat nazariyasi va metodikasi; <br />
                    • Sport va harakatli o‘yinlarni o‘qitish metodikasi; <br />
                    • Milliy va harakatli o‘yinlarni o‘qitish metodikasi; <br />
                    • Sport o‘yinlari va uni o‘qitish metodikasi; <br />
                    • Yengil atletika va uni o‘qitish metodikasi; <br />
                    • Gimnastika va uni o‘qitish metodikasi; <br />
                    • Sport inshootlari va uni o‘qitish metodikasi; <br />
                    • Bolalar jismoniy tarbiyasi; <br />
                    • Jismoniy tarbiya va sport; <br />
                    • Jismoniy tarbiya gigiyenasi va sportning tibbiy fiziologik
                    asoslari; <br />
                    • Badminton; <br />
                    • Kurash; <br />
                    • Sport to‘garaklarini tashkil qilish. <br /> <br />
                    Bulardan tashqari, 60112200 – “Jismoniy madaniyat”, 60110500
                    – “Boshlang‘ich ta’lim” bakalavriat ta’limi yo’nalishlarida
                    malakaviy, pedagogik va ishlab chiqarish amaliyotlari hamda
                    bitiruv malakavish ishlariga rahbarlik qiladi.
                  </p>
                  <h4>Kafedraning ilmiy faoliyati</h4>
                  <p>
                    Doktorlik dissertasiyalari himoyalari: Kafedra dotsentlari
                    J.J.To‘xtayev, B.B.Ro‘ziqulov 2025-yilda doktorlik
                    dissertatsiyasini himoya qilishadi. <br />
                    PhD dissertasiyalari himoyalari: Kafedra
                    o‘qituvchilari.B.Yo‘ldosheva, R.A.Zikirov,
                    M.Z.Ziyadullayevalar 2025-yilda PhD dissertatsiyalari
                    himoyasiga chiqishadi. <br />
                    Kafedra a’zolari Respublika va xorijiy nufuzli ilmiy
                    jurnallarda ilmiy ishlarini chop etishadi, ilmiy
                    anjumanlarda qatnashishadi. Oxirgi yillarda chop etilgan
                    ilmiy maqolalardan namunalar:
                    <br />
                    1.I.X.Boymuradov. Шуғулланувчиларнинг спортдаги фаолиятида
                    тезкор-куч тайёргарлигининг аҳамияти. Хоразм Маъмун
                    академияси ахборотномаси: илмий журнал.-№4/3 (100), Хоразм
                    Маъмун академияси, 2023 й. – 226 б ISSN 2091-573 X <br />
                    2.I.X.Boymuradov The Importance of Speed-Strength
                    Preparation in the Activity of Sports Participants. World of
                    Science: Journal on Modern Research Methodologies. Volume 2
                    Issue 4, Year 2023 ISSN: 2835-3072
                    <br />
                    3. M.B.Yo‘ldosheva. Mашғулотлар жараёнида курашчининг техник
                    ҳаракатларини тартибга солиш ва кураш усулларидан моҳирона
                    фойдаланиш. Iqro. volume 7, issue 1, december , 2023 <br />
                    4.M.B.Yo‘ldosheva. Cистема физического воспитания в семье и
                    ее роль в развитии молодежи.Международный научный журнал
                    «ВЕСТНИК НАУКИ» № 1 (70) Том 1. ЯНВАРЬ 2024 г <br />
                    5.M.Z.Ziyadullayeva. method of developing professional
                    skills in students through gymnastics | Mental Enlightenment
                    Scientific-Methodological Journal ISSN: 2181-1547 (E) /
                    2181-6131 (P) <br />
                    6. J.J.To‘xtayev.Sport mashg‘ulotlari jarayonida jismoniy
                    mashqlar va ularning bolalar fiziologik xususiyatlariga
                    munosibligi. Iqro 2023 N.060680 <br />
                    6.M.Z.Ziyadullayeva. Maktab o‘quvchilarini gimnastika
                    vositalari orqali jismoniy tayyorgarligini
                    rivojlantirish.NAMANGAN DAVLAT UNIVERSITETIILMIY
                    AXBOROTNOMASI, [2024-4] ISSN:2181-1458ISSN:2181-0427
                  </p>
                  <h4>
                    Kafedra xodimlarining ilmiy natijalari quyidagi
                    monografiyalarda o‘z aksinini topgan:
                  </h4>
                  <p>
                    1. M.B.Yo‘ldosheva. Sport tashkilotlari faoliyatini
                    ilmiy-innovatsion boshqarish mexanizmini shakllantirish”
                    2024 <br />
                    2. R.A.Zikirov – Boshlang‘ich sinflarda jismoniy tarbiya
                    tadbirlarinio‘ich sinflarda jismoniy tarbiya
                    tadbirlarinio‘tkazishning pedagogik xususiyatlari,
                    Monografiya. - Qarshi <br />
                    3. O.I.Amirqulov va M.Z.Ziyadullayeva. Yosh bolalar
                    qad-qomat buzilishlari va ularni oldini olishga
                    yo‘naltirilgan mashg‘ulot usullari; Monografiya.
                  </p>
                  <h4>Kafedraning o‘quv-uslubiy faoliyati:</h4>
                  <p>
                    Kafedra professor-o‘qituvchilari o‘quv faoliyatidan
                    tashqari, o‘quv-uslubiy ishlar bilan ham shug'ullanadilar.
                    Jumladan, darslik, o‘quv va uslubiy qo‘llanmalar yaratishda
                    samarali faoliyat olib borishmoqdalar. <br />
                    So‘nggi 10 yillarda kafedra professor-o‘qituvchilari
                    tomonidan bir qator darslik, o‘quv va uslubiy qo‘llanmalar
                    tayyorlangan:
                  </p>
                  <h4>
                    Jismoniy madaniyat va sport kafedrasida o‘qitiladigan fanlar
                  </h4>
                  <table class="table table-hover">
                    <thead>
                      <tr>
                        <th scope="col">#</th>
                        <th scope="col">Fan nomi</th>
                        <th scope="col">Fan haqida qisqacha ma’lumot</th>
                      </tr>
                    </thead>
                    <tbody>
                      {listUz.map((l) => (
                        <tr key={`people-${l.id}`}>
                          <th scope="row">{l.id}</th>
                          <td>{l.title}</td>
                          <td>{l.description}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                  <h4>Mamlakatimizdagi tashkilotlar:</h4>
                  <p>
                    1. O‘zbekiston milliy universiteti <br />
                    2. Farg‘ona davlat universiteti <br />
                    3. Buxoro davlat universiteti <br />
                    4. Qarshi davlat universiteti <br />
                    5. “O‘zbekiston tarixi” davlat muzeyi <br />
                    6. “O‘zbekiston tarixi” davlat muzeyi Qashqadaryo viloyati
                    filiali <br />
                    7. QarDU tuzilmasidagi Qatag‘on qurbonlari xotirasi” muzeyi;{" "}
                    <br />
                    8. Abu Muin an-Nasafiy majmuasi. <br />
                  </p>

                  <table class="table table-hover">
                    <thead>
                      <tr>
                        <th scope="col">#</th>
                        <th scope="col">Familiyasi, ismi, sharifi</th>
                        <th scope="col">Elektron pochta</th>
                      </tr>
                    </thead>
                    <tbody>
                      {usersUz.map((l, index) => (
                        <tr key={`user-${index}`}>
                          <th scope="row">{index + 1}</th>
                          <td>{l.name}</td>
                          <td>{l.email}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}

              {lang == "ru" && (
                <div>
                  <h4>История и деятельность кафедры</h4>
                  <p>
                    Кафедра находится в Экономико-педагогическом университете в
                    2023 году. Факультет «Информационные технологии и цифровая
                    экономика» в связи с его учреждением доцент этого
                    факультета. «Физкультура и спорт» под руководством И.К.
                    Боймурадова. начал работать под этим именем и до сих пор
                    является лидером делается. <br /> <br />
                    Факультет в том числе «Физическая культура и спорт» кафедра,
                    современная в области социальных и гуманитарных наук берет
                    на себя подготовку зрелых специалистов, думающих как главная
                    цель. <br /> <br />
                    Специалисты кафедры, имеющие высокие ученые степени и
                    звания, в частности, доц.Б.Б.Розикулов, доц.Ф.Эшполатов,
                    доц. Тохтаев Ж.Ж. и к.м.н. Юлдошева М.Б., Зикиров Р.А.,
                    М.З.Зиядуллаева работают эффективно. <br />
                  </p>
                  <h4>Образовательная деятельность кафедры</h4>
                  <p>
                    В настоящее время «Физическая культура и спорт» доц. Б.Б.
                    Розикулов, доц. Ф. Эшполатов, доц. и к.м.н. М.Б.Ёлдошева,
                    Р.А.Зикиров, М.З.Зиядуллаева, Старшие преподаватели Хусанов
                    Г.У., Амиркулов О.И., А.Х. Джораев, преподаватели Т. Суюнов,
                    Э. Дильмуродова и. другие активно работают. <br />
                    Профессора и преподаватели кафедры <br />
                    60112200 – «Физическая культура»; <br />
                    60110200 – «Дошкольное образование»; <br />
                    60310100 – «Экономика»; <br />
                    60610200 – «Информационные системы и технологии»; <br />
                    60721800 – «Нефтегазовое дело». высшее (дневное, вечернее и
                    заочное) образование теоретические и практические по
                    следующим дисциплинам тренинги проводятся:
                    <br />
                    • Теория и методика физической культуры; <br />
                    • Методика преподавания спортивных и подвижных игр; <br />
                    • Методика обучения народным и подвижным играм; <br />
                    • Спортивные игры и методы обучения; <br />
                    • Легкая атлетика и методика ее преподавания; <br />
                    • Гимнастика и методика ее преподавания; <br />
                    • Спортивные сооружения и методы обучения; <br />
                    • Детское физическое воспитание; <br />
                    • Физическое воспитание и спорт; <br />
                    • Гигиена физического воспитания и медицинская физиология
                    спорта. основы; <br />
                    • Бадминтон; <br />
                    • Борьба; <br />
                    • Организация спортивных клубов. <br /> <br />
                    Кроме того, 60112200 – «Физическая культура», 60110500. -
                    «Начальное образование» по направлениям довузовского
                    образования. профессиональной, педагогической и
                    производственной практики и руководит выпускной
                    квалификационной работой.
                  </p>
                  <h4>Научная деятельность кафедры</h4>
                  <p>
                    Защиты докторских диссертаций: доценты кафедры Тохтаев Ж.Ж.,
                    Розикулов Б.Б. Докторантура в 2025 году. они защищают
                    диссертацию. <br />
                    Защита кандидатских диссертаций: Кафедра преподаватели
                    Б.Юлдошева, Р.А.Зикиров, Кандидатская диссертация М.З.
                    Зиядуллаевой в 2025 году. встать на его защиту. <br />
                    Членами кафедры являются видные ученые республики и
                    зарубежья. они публикуют свои научные работы в журналах,
                    научных участвовать в конференциях. Опубликовано в последние
                    годы примеры научных статей:
                    <br />
                    1. И.Х. Боймурадов. В спортивной деятельности участников
                    важность тренировки быстрой силы. Хорезм Мамун
                    Информационный бюллетень академии: научный
                    журнал.-№4/3(100), Хорезм Академия Мамуна, 2023 год. – 226 б
                    ISSN 2091-573 X <br />
                    2. Боймурадов И.Х. Важность скоростно-силовой подготовки.
                    Подготовка в деятельности участников спорта. Мир Наука:
                    журнал современных методологий исследований. Том 2 Выпуск 4,
                    2023 г. ISSN: 2835-3072
                    <br />
                    3. Ёлдошева М.Б. Техника борца во время тренировки умелый в
                    регулировании движений и методов боя использовать Признание.
                    том 7, выпуск 1, декабрь 2023 г. <br />
                    4. Ёлдошева М.Б. Система физического воспитания в семье и ее
                    роль в развитии молодежи. «ВЕСТНИК НАУКИ» № 1 (70) Том 1.
                    ЯНВАРЬ 2024 <br />
                    5. Зиядуллаева М.З. метод развития профессиональных навыки
                    учащихся посредством гимнастики Ментальное Просветление
                    Научно-методический журнал ISSN: 2181-1547 (E) / 2181-6131
                    (П) <br />
                    6. Тохтаев Ж.Ж. Физическая подготовка во время спортивной
                    тренировки. упражнения и их физиологические особенности у
                    детей достоинство. Iqro 2023 N.060680 <br />
                    6. Зиядуллаева М.З. Гимнастика для школьников. физическая
                    подготовка посредством средств НАМАНГАНСКИЙ ГОСУДАРСТВЕННЫЙ
                    НАУЧНЫЙ УНИВЕРСИТЕТ. БЮЛЛЕТЕНЬ, [2024-4]
                    ISSN:2181-1458ISSN:2181-0427
                  </p>
                  <h4>
                    Научные результаты сотрудников кафедры следующие: отражено в
                    монографиях:
                  </h4>
                  <p>
                    1. Ёлдошева М.Б. Деятельность спортивных организаций
                    формирование научно-инновационного механизма управления»
                    2024 <br />
                    2. Зикиров Р.А. - Физическое воспитание в начальных классах.
                    физическое воспитание на занятиях педагогические особенности
                    проведения мероприятий, Монография. - Против <br />
                    3. О.И.Амиркулов и М.З.Зиядуллаева. Маленькие дети нарушения
                    роста и их профилактика направленные методы обучения;
                    Монография.
                  </p>
                  <h4>Учебно-методическая деятельность кафедры:</h4>
                  <p>
                    Из образовательной деятельности профессоров-преподавателей
                    кафедры кроме того, они занимаются также учебно-методической
                    работой. В частности, в создании учебников,
                    учебно-методических пособий. работают эффективно. <br />
                    Профессора и преподаватели кафедры за последние 10 лет рядом
                    учебников, учебно-методических пособий подготовлен:
                  </p>
                  <h4>
                    Предметы, преподаваемые на кафедре физической культуры и
                    спорта
                  </h4>
                  <table class="table table-hover">
                    <thead>
                      <tr>
                        <th scope="col">#</th>
                        <th scope="col">Имя субъекта</th>
                        <th scope="col">Краткие сведения о науке</th>
                      </tr>
                    </thead>
                    <tbody>
                      {listRu.map((l) => (
                        <tr key={`people-${l.id}`}>
                          <th scope="row">{l.id}</th>
                          <td>{l.title}</td>
                          <td>{l.description}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                  <h4>Организации в нашей стране:</h4>
                  <p>
                    1. Национальный университет Узбекистана <br />
                    2. Ферганский государственный университет <br />
                    3. Бухарский государственный университет <br />
                    4. Каршинский государственный университет <br />
                    5. Государственный музей «История Узбекистана». 6.
                    Государственный музей «История Узбекистана», Кашкадарьинская
                    область. филиал <br />
                    7. Музей «Мемориал жертв репрессий» в структуре КарДУ ;
                    <br />
                    8. Комплекс Абу Муин ан-Насафи. <br />
                  </p>

                  <table class="table table-hover">
                    <thead>
                      <tr>
                        <th scope="col">#</th>
                        <th scope="col">Фамилия, имя, фамилия</th>
                        <th scope="col">Электронная почта</th>
                      </tr>
                    </thead>
                    <tbody>
                      {usersRu.map((l, index) => (
                        <tr key={`user-${index}`}>
                          <th scope="row">{index + 1}</th>
                          <td>{l.name}</td>
                          <td>{l.email}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}

              {lang == "en" && (
                <div>
                  <h4>History and activities of the department</h4>
                  <p>
                    The department is located at the Economics and Pedagogical
                    University in 2023. Faculty of Information Technology and
                    Digital Economics" in connection with its establishment,
                    associate professor of this faculty. “Physical Education and
                    Sports” under the leadership of I.K. Boymuradova. started
                    working under this name and still is the leader is done.{" "}
                    <br /> <br />
                    Faculty including “Physical Culture and Sports” department,
                    modern in the field of social and human sciences takes take
                    upon themselves the training of mature specialists who think
                    like the main target. <br /> <br />
                    Department specialists with high academic degrees and
                    titles, in particular, Associate Professor B.B.Rozikulov,
                    Associate Professor F.Eshpolatov, Assoc. Tokhtaev Zh.Zh. and
                    Ph.D. Yuldosheva M.B., Zikirov R.A., M.Z. Ziyadullaeva work
                    effectively. <br />
                  </p>
                  <h4>Educational activities of the department</h4>
                  <p>
                    Currently, “Physical Culture and Sports” Assoc. B.B.
                    Rozikulov, associate professor F. Eshpolatov, associate
                    professor and Ph.D. M.B.Yoldosheva, R.A.Zikirov,
                    M.Z.Ziyadullaeva, Senior teachers Khusanov G.U., Amirkulov
                    O.I., A.Kh. Joraev, teachers T. Suyunov, E. Dilmurodova and.
                    others are actively working. <br />
                    Professors and teachers of the department <br />
                    60112200 – “Physical education”; <br />
                    60110200 – “Preschool education”; <br />
                    60310100 – “Economy”; <br />
                    60610200 – “Information systems and technologies”; <br />
                    60721800 – “Oil and gas business.” higher education
                    (daytime, evening and correspondence) education theoretical
                    and practical in Trainings are conducted in the following
                    disciplines:
                    <br />
                    • Theory and methodology of physical culture; <br />
                    • Methods of teaching sports and outdoor games; <br />
                    • Methods of teaching folk and outdoor games; <br />
                    • Sports games and teaching methods; <br />
                    • Athletics and its teaching methods; <br />
                    • Gymnastics and methods of teaching it; <br />
                    • Sports facilities and teaching methods; <br />
                    • Children's physical education; <br />
                    • Physical education and sports; <br />
                    • Hygiene in physical education and medical physiology
                    sports. basics; <br />
                    • Badminton; <br />
                    • Struggle; <br />
                    • Organization of sports clubs. <br /> <br />
                    In addition, 60112200 – “Physical education”, 60110500. -
                    “Primary education” in areas of pre-university education.
                    professional, pedagogical and industrial practice and
                    supervises graduation qualifying work.
                  </p>
                  <h4>Scientific activities of the department</h4>
                  <p>
                    Defense of doctoral dissertations: associate professors of
                    the department Tokhtaev Zh.Zh., Rozikulov B.B. Doctoral
                    studies in 2025. they protect dissertation. <br />
                    Defense of candidate dissertations: Department of teachers
                    B.Yuldosheva, R.A.Zikirov, PhD thesis M.Z. Ziyadullayeva in
                    2025. stand up for him. <br />
                    The members of the department are prominent scientists of
                    the republic and abroad. they publish their scientific works
                    in journals, scientific to participate in conferences.
                    Published in latest years examples of scientific articles:
                    <br />
                    1. I.Kh. Boymuradov. In the sports activities of
                    participants the importance of fast strength training.
                    Khorezm Mamun Academy Newsletter: Scientific journal.-No.
                    4/3(100), Khorezm Mamun Academy, 2023. – 226 b ISSN 2091-573
                    X <br />
                    2. Boymuradov I.Kh. The importance of speed and strength
                    training. Training in the activities of sports participants.
                    World Science: Journal of Contemporary Research
                    Methodologies. Volume 2 Issue 4, 2023 ISSN: 2835-3072
                    <br />
                    3. Yoldosheva M.B. A wrestler's technique during training is
                    skillful in regulating movements and fighting methods to use
                    Recognition. Volume 7, Issue 1, December 2023 <br />
                    4. Yoldosheva M.B. The system of physical education in the
                    family and its role in youth development. "BULLETIN OF
                    SCIENCE" No. 1 (70) Volume 1. JANUARY 2024 <br />
                    5. Ziyadullaeva M.Z. method of developing professional
                    skills students through gymnastics Mental Enlightenment
                    Scientific and methodological journal ISSN: 2181-1547 (E) /
                    2181-6131 (P) <br />
                    6. Tokhtaev Zh.Zh. Physical training during sports workout.
                    exercises and their physiological characteristics in
                    children's dignity. Iqro 2023 N.060680 <br />
                    6. Ziyadullaeva M.Z. Gymnastics for schoolchildren. physical
                    preparation through NAMANGAN STATE funds SCIENTIFIC
                    UNIVERSITY. BULLETIN, [2024-4] ISSN:2181-1458ISSN:2181-0427
                  </p>
                  <h4>
                    The scientific results of the department staff are as
                    follows: reflected in monographs:
                  </h4>
                  <p>
                    1. Yoldosheva M.B. Activities of sports organizations
                    formation of a scientific and innovative management
                    mechanism" 2024 <br />
                    2. Zikirov R.A. - Physical education in primary school.
                    physical education in the classroom pedagogical features
                    holding events, Monograph. - Against <br />
                    3. O.I.Amirkulov and M.Z.Ziyadullaeva. Young children
                    violations growth and their prevention, targeted teaching
                    methods; Monograph.
                  </p>
                  <h4>
                    Educational and methodological activities of the department:
                  </h4>
                  <p>
                    From the educational activities of professors and teachers
                    departments, in addition, they are also engaged in
                    educational and methodological work. In particular, in the
                    creation of textbooks, teaching aids. work efficiently.{" "}
                    <br />
                    Professors and teachers of the department for the last 10
                    years nearby textbooks, teaching aids prepared by:
                  </p>
                  <h4>
                    Subjects taught at the Department of Physical Education and
                    sports
                  </h4>
                  <table class="table table-hover">
                    <thead>
                      <tr>
                        <th scope="col">#</th>
                        <th scope="col">Subject name</th>
                        <th scope="col">Brief facts about science</th>
                      </tr>
                    </thead>
                    <tbody>
                      {listRu.map((l) => (
                        <tr key={`people-${l.id}`}>
                          <th scope="row">{l.id}</th>
                          <td>{l.title}</td>
                          <td>{l.description}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                  <h4>Organizations in our country:</h4>
                  <p>
                    1. National University of Uzbekistan <br />
                    2. Fergana State University <br />
                    3. Bukhara State University <br />
                    4. Karshi State University <br />
                    5. State Museum “History of Uzbekistan”. 6. State Museum
                    “History of Uzbekistan”, Kashkadarya region. branch <br />
                    7. Museum “Memorial of Victims of Repression” in the
                    structure of KarDU;
                    <br />
                    8. Abu Muin an-Nasafi complex. <br />
                  </p>

                  <table class="table table-hover">
                    <thead>
                      <tr>
                        <th scope="col">#</th>
                        <th scope="col">Last name, first name, last name</th>
                        <th scope="col">Email</th>
                      </tr>
                    </thead>
                    <tbody>
                      {usersEn.map((l, index) => (
                        <tr key={`user-${index}`}>
                          <th scope="row">{index + 1}</th>
                          <td>{l.name}</td>
                          <td>{l.email}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
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
