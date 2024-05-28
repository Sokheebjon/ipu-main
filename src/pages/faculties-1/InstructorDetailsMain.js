import instructors from "../../data/Instructors.json";
import { useIntl } from "react-intl";
import { getProductName } from "../../helpers/general";

const InstructorDetailsMain = () => {
  const intl = useIntl();
  const instructor = instructors.find((b) => b.kafedra == "1");
  const lang = (
    JSON.parse(localStorage.getItem("i18nConfig")) || { selectedLang: "uz" }
  )?.selectedLang;

  let list = [
    {
      id: 1,
      title: "O‘qish va yozuv amaliyoti",
      description:
        "Fanni o'qitishdan maqsad talabalarning CEFR B2 daraja talabiga javob beruvchi IELTS talablari asosida tuzib chiqilgan matnlarini o'qib, tushunishlari va turli mavzularga oid matnlarni yoza olish mahoratiga ega bo'lishlari va egallangan o'qish va yozish ko'nikmalarini kasbiy va ilmiy faoliyatda erkin qullay olishlarini ta'minlashdir,",
    },
    {
      id: 2,
      title: "Nutq ko‘nikmalari integratsiyasi",
      description:
        "Fanni o'qitishdan maqsad - talabalarga tilning og'zaki va yozma shakllarini integrallashgan holda o'rganish, ulaming turli kontekstlardagi muloqot malakalarini rivojlantirish, xususan o'rganilayotgan chet til ko'nikmalari to'g'risidagi amaliy va nazariy bilimlarini takomilashtirish hamda egallangan bilim, ko'nikma, malakalarini kasbiy va ilmiy faoliyatda erkin qo'llay olish tanqidiy va ijodiy fikrlash, axborotni mustaqil izlash, tahlil qilish kompetensiyalari va malakalarining rivojlanishiga xizmat qilib, o'quvchilaring bilim darajasini baholashda xalqaro PIRLS va boshqa dasturtarda doimiy ishtirok etishlarini ta'minlashdir.",
    },
    {
      id: 3,
      title: "Nutq malakalari integratsiyasi",
      description:
        "Talabalarga tilning og'zaki va yozma shakllarini integrallashgan holda o'rgatish, ularning turli kontekstlardagi muloqot malakalarini rivojlantirish, xususan o'rganilayotgan chet til ko'nikmalari to'g'risidagi amaliy va nazariy bilimlarini takomillashtirish hamda egallangan bilim, ko'nikma, malakalarini kasbiy va ilmiy faoliyatda erkin qo'llay olish, tanqidiy va ijodiy fikrlash, axborotni mustaqil izlash, tahlil qilish kompetensiyalari va malakalarining rivojlanishiga xizmat qilib, o'quvchilaming bilim darajasini baholashda xalqaro PIRLS va boshqa dasturlarda doimiy ishtirok etishlarini ta'minlashdir.",
    },
    {
      id: 4,
      title: "Nazariy til aspektlari",
      description:
        "Mazkur sohada ta'lim oluvchilari bo'lajak kasbiy faoloyatlarida zarur bo'lgan nazariy bilimlar bilan qurollantirishdan iborat. Mazkur maqsadga erishish talabalarning chet til tovush sistemasi, leksikasi va til qurilishini mukammal o'rganishlarini talab etadi.",
    },
    {
      id: 5,
      title: "Ingliz tili o‘qitish qiyosiy metodikasi",
      description:
        "Fanni o'qitishdan maqsad - talabalarda til o'rganuvchilaming til bilish darajasini aniqlashda va baholashda munosib topshiriq tanlay olish hamda ulami CEFR (Common European Framework of Reference) mezonlariga mos ravishda baholay olish ko'nikmalarini shakllantirishga mo'ljallangan.",
    },
    {
      id: 6,
      title: "Chet tili o‘qitish metodikasi",
      description:
        "Fanni o'qitishdan maqsad - talabalarga umumiy o'rta ta'lim maktablari, akademik litsey va kollej o'quvchilariga chet tilini o'rgata olish malaka va ko'nikmalarini shakllantirish va rivojlantirishga metodik yordam ko'rsatish. Fan bo'yicha bilimlarni nazariy asoslarini, metodikaning asosiy tushunchalari, mazmuni, tamoyillarini o'rgatish hamda ularni amaliyotda tatbiq etish ko'nikmasini hosil qilishdan iborat.",
    },
    {
      id: 7,
      title: "Chet tili o‘qitish metodikasi",
      description:
        "Fanni o'qitishdan maqsad - talabalarga umumiy o'rta ta'lim maktablari, akademik litsey va kollej o'quvchilariga chet tilini o'rgata olish malaka va ko'nikmalarini shakllantirish va rivojlantirishga metodik yordam ko'rsatish. Fan bo'yicha bilimlarni nazariy asoslarini, metodikaning asosiy tushunchalari, mazmuni, tamoyillarini o'rgatish hamda ularni amaliyotda tatbiq etish ko'nikmasini hosil qilishdan iborat. O'quv fanining maqsadi - talabalarga stilistikaning tildagi o'mi va ahamiyati, lug'at tarkibining boyib borish qonuniyatlari to'g'risida, tildagi stilistik jihatdan asosiy tushunchalar haqida bilimlar bo'yicha ko'nikma va malaka shakllantirishdan iborat.",
    },
    {
      id: 8,
      title: "Ingliz tili o’qitishning integrallashgan kursi",
      description:
        "Fanning asosiy vazifasi — stilistik ma'nolarning turlari, ularning paradigmatik va sintagmatik jihatdan ifodalanishi, lug'at tarkibining tarixiy, hududiy, ijtimoiy differentsiatsiyasi, nemis tili stilistikasining fonetik, grammatik va leksik vositalar yordamida aks etishi, tilning leksik va stilistik qatlamlari, stilistik bo'yoqlar va janrlar haqidagi bilimlar majmuasini tahlil qilishga o'rgatishdir.",
    },
    {
      id: 9,
      title: "Xorijiy til",
      description:
        "Nofilologik yo’nalishlarda Xorijiy tilni o’rgatishdan asosiy maqsad – kelgusi mutaxassislarda kundalik hayotlari, ilmiy va kasbiy faoliyatlarida chet tilidan erkin foydalanuvchi mutaxassislarni tayyorlash. Shu bilan birga, ularda vatanparvarlik hissini rivojlantirish, mustaqil izlanish, bilim va ko’nikmalarini darsdan tashqari paytda ham, OTMni bitirganlaridan keyin ham rivojlantirish, hamda umumbashariy va sohaga oid mavzularda ilmiy maqolalar yoza olish, mantiqiy fikrlash qobiliyatlarini rivojlantirishdan iborat",
    },
    {
      id: 10,
      title: "Xorijiy tillarni intensiv o’qitish",
      description:
        "Talabalarning nutq (o’qish, yozish, tinglab tushunish, gapirish), til (leksik, grammatik), ijtimoiy-madaniy va pragmatik kompetensiyalarini rivojlantirish;",
      text: [
        "-ilmiy, kasbiy va maishiy faoliyatga bog’liq mavzular yuzasidan og’zaki va yozma bayon etish ko’nikma va malakalarini rivojlantirish;",
        " - umumbashariy va milliy qadriyatlar bilan tanishtirish, madaniyatlararo bag’rikenglik va millatlararo hamdo’stlik hislarini singdirish;",
        " - ilmiy va kasbiy faoliyatda qo’llaniladigan termin va atamalarni o’rgatish;",
        " -talabalarning ilmiy va sohaviy yo’nalishlaridan kelib chiqib, mustaqil ish topshiriqlarini to’g’ri va aniq ko’rsatmalar berish orqali tashkil etish.",
      ],
    },
  ];

  let listRU = [
    {
      id: 1,
      title: "Практика чтения и письма",
      description:
        "Цель преподавания дисциплины - обеспечить студентов навыками чтения и понимания текстов, составленных на основе требований IELTS, соответствующих уровню CEFR B2, а также способностью писать тексты на различные темы и свободно применять полученные навыки чтения и письма в профессиональной и научной деятельности.",
    },
    {
      id: 2,
      title: "Интеграция речевых навыков",
      description:
        "Цель преподавания дисциплины - изучение студентами устных и письменных форм языка в интегрированной форме, развитие навыков общения в различных контекстах, усовершенствование практических и теоретических знаний о изучаемых языковых навыках, а также свободное применение полученных знаний, навыков и умений в профессиональной и научной деятельности, развитие критического и творческого мышления, навыков самостоятельного поиска и анализа информации, участие в международных программах, таких как PIRLS, для оценки уровня знаний студентов.",
    },
    {
      id: 3,
      title: "Интеграция речевых умений",
      description:
        "Обучение студентов устным и письменным формам языка в интегрированной форме, развитие навыков общения в различных контекстах, усовершенствование практических и теоретических знаний о изучаемых языковых навыках, а также свободное применение полученных знаний, навыков и умений в профессиональной и научной деятельности, развитие критического и творческого мышления, навыков самостоятельного поиска и анализа информации, участие в международных программах, таких как PIRLS, для оценки уровня знаний студентов.",
    },
    {
      id: 4,
      title: "Теоретические аспекты языка",
      description:
        "Обучение студентов теоретическим знаниям, необходимым для их будущей профессиональной деятельности. Достижение этой цели требует глубокого изучения звуковой системы, лексики и структуры языка.",
    },
    {
      id: 5,
      title: "Сравнительная методика преподавания английского языка",
      description:
        "Цель преподавания дисциплины - формирование у студентов навыков выбора и оценки заданий для определения уровня владения языком обучающихся в соответствии с критериями CEFR (Общая европейская система оценки владения языком).",
    },
    {
      id: 6,
      title: "Методика преподавания иностранного языка",
      description:
        "Цель преподавания дисциплины - формирование и развитие навыков и умений преподавания иностранного языка в общеобразовательных школах, академических лицеях и колледжах. Обучение теоретическим основам предмета, основным понятиям методики, ее содержанию и принципам, а также формирование навыков их применения на практике.",
    },
    {
      id: 7,
      title: "Методика преподавания иностранного языка",
      description:
        "Цель преподавания дисциплины - формирование и развитие навыков и умений преподавания иностранного языка в общеобразовательных школах, академических лицеях и колледжах. Обучение теоретическим основам предмета, основным понятиям методики, ее содержанию и принципам, а также формирование навыков их применения на практике. Цель дисциплины - формирование у студентов навыков и умений по стилистике языка, расширению словарного запаса, пониманию основных стилистических понятий.",
    },
    {
      id: 8,
      title: "Интегрированный курс преподавания английского языка",
      description:
        "Основная задача дисциплины - изучение различных видов стилистических значений, их парадигматического и синтагматического выражения, исторической, территориальной и социальной дифференциации словарного состава, анализа стилистических слоев языка, стилистических оттенков и жанров.",
    },
    {
      id: 9,
      title: "Иностранный язык",
      description:
        "Основная цель преподавания иностранного языка для нефилологических направлений - подготовка специалистов, свободно использующих иностранный язык в повседневной жизни, научной и профессиональной деятельности, развитие у студентов патриотизма, навыков самостоятельного поиска и усовершенствования знаний и умений, написания научных статей по общим и специальным темам, развитие логического мышления.",
    },
    {
      id: 10,
      title: "Интенсивное обучение иностранным языкам",
      description:
        "Развитие у студентов речевых (чтение, письмо, аудирование, говорение), языковых (лексика, грамматика), социокультурных и прагматических компетенций; развитие навыков устного и письменного изложения по темам, связанным с научной, профессиональной и бытовой деятельностью; знакомство с общечеловеческими и национальными ценностями, формирование чувства межкультурной толерантности и межнациональной дружбы; обучение терминам и выражениям, используемым в научной и профессиональной деятельности; организация самостоятельной работы студентов на основе их научных и профессиональных интересов с точными и ясными инструкциями.",
    },
  ];

  let listEN = [
    {
      id: 1,
      title: "Reading and Writing Practice",
      description:
        "The goal of teaching this discipline is to equip students with the skills to read and understand texts compiled based on IELTS requirements, corresponding to CEFR B2 level, as well as the ability to write texts on various topics and freely apply the acquired reading and writing skills in professional and scientific activities.",
    },
    {
      id: 2,
      title: "Integration of Speech Skills",
      description:
        "The goal of teaching this discipline is to study the oral and written forms of the language in an integrated manner, develop communication skills in various contexts, improve practical and theoretical knowledge of the studied language skills, and freely apply the acquired knowledge, skills, and abilities in professional and scientific activities. It also aims to develop critical and creative thinking, skills of independent information search and analysis, and participation in international programs such as PIRLS for assessing students' knowledge levels.",
    },
    {
      id: 3,
      title: "Integration of Speech Abilities",
      description:
        "Teaching students oral and written forms of the language in an integrated manner, developing communication skills in various contexts, improving practical and theoretical knowledge of the studied language skills, and freely applying the acquired knowledge, skills, and abilities in professional and scientific activities. It also aims to develop critical and creative thinking, skills of independent information search and analysis, and participation in international programs such as PIRLS for assessing students' knowledge levels.",
    },
    {
      id: 4,
      title: "Theoretical Aspects of Language",
      description:
        "Teaching students the theoretical knowledge necessary for their future professional activities. Achieving this goal requires a thorough study of the sound system, vocabulary, and structure of the language.",
    },
    {
      id: 5,
      title: "Comparative Methodology of Teaching English",
      description:
        "The goal of teaching this discipline is to form students' skills in selecting and evaluating assignments to determine the language proficiency level of learners in accordance with CEFR (Common European Framework of Reference) criteria.",
    },
    {
      id: 6,
      title: "Methodology of Teaching a Foreign Language",
      description:
        "The goal of teaching this discipline is to form and develop the skills and abilities to teach a foreign language in general secondary schools, academic lyceums, and colleges. It includes teaching the theoretical foundations of the subject, the main concepts of methodology, its content and principles, and forming the skills to apply them in practice.",
    },
    {
      id: 7,
      title: "Methodology of Teaching a Foreign Language",
      description:
        "The goal of teaching this discipline is to form and develop the skills and abilities to teach a foreign language in general secondary schools, academic lyceums, and colleges. It includes teaching the theoretical foundations of the subject, the main concepts of methodology, its content and principles, and forming the skills to apply them in practice. The goal of the discipline is to form students' skills and abilities in language stylistics, expanding vocabulary, and understanding basic stylistic concepts.",
    },
    {
      id: 8,
      title: "Integrated Course of Teaching English",
      description:
        "The main task of the discipline is to study various types of stylistic meanings, their paradigmatic and syntagmatic expression, historical, territorial, and social differentiation of vocabulary, analysis of stylistic layers of the language, stylistic nuances, and genres.",
    },
    {
      id: 9,
      title: "Foreign Language",
      description:
        "The main goal of teaching a foreign language for non-philological directions is to prepare specialists who can freely use a foreign language in their daily lives, scientific, and professional activities, develop students' patriotism, skills of independent research, and improvement of knowledge and abilities. It also includes writing scientific articles on general and specialized topics and developing logical thinking.",
    },
    {
      id: 10,
      title: "Intensive Foreign Language Teaching",
      description:
        "Development of students' speech (reading, writing, listening, speaking), language (vocabulary, grammar), socio-cultural and pragmatic competencies; developing skills of oral and written presentation on topics related to scientific, professional, and everyday activities; familiarizing with universal and national values, forming a sense of intercultural tolerance and international friendship; teaching terms and expressions used in scientific and professional activities; organizing independent work of students based on their scientific and professional interests with clear and precise instructions.",
    },
  ];

  let list2 = [
    {
      id: 1,
      title: "Sherkulov Sardor Komilovich",
      status: "Dots. v.b. PhD",
      description:
        "Ingliz va o‘zbek nasrida milliy mentalitet, inson erki va ahloq konsepti",
    },
    {
      id: 2,
      title: "Begimkulova Shaxnoza Axmedovna",
      status: "Katta  o‘qituvchi",
      description:
        "Afg‘on-amerika adibalari ijodida miliy va umuminsoniy tamoyillar talqini",
    },
    {
      id: 3,
      title: "Sharipova Nilufar Xalil qizi",
      status: "Katta  o‘qituvchi",
      description:
        "Mehmondo’stlikni ifodalovchi paremiyalarning ingliz va o’zbek tilidagi pragmatik xususiyatlarini qiyosiy talqini",
    },
    {
      id: 4,
      title: "Ko‘charova Feruza Alisher qizi",
      status: "Stajyor o‘qituvchi",
      description: "Harbiy atamalar tarjimasining lingvomadaniy xususiyatlari",
    },
  ];

  let list2RU = [
    {
      id: 1,
      title: "Шеркулов Сардор Комилович",
      status: "Доцент, кандидат наук",
      description:
        "Национальный менталитет, свобода человека и концепция морали в английской и узбекской прозе",
    },
    {
      id: 2,
      title: "Бегимкулова Шахноза Ахмедовна",
      status: "Старший преподаватель",
      description:
        "Интерпретация национальных и универсальных принципов в творчестве афгано-американских писательниц",
    },
    {
      id: 3,
      title: "Шарипова Нилуфар Халиловна",
      status: "Старший преподаватель",
      description:
        "Сравнительная интерпретация прагматических особенностей пословиц, выражающих гостеприимство, в английском и узбекском языках",
    },
    {
      id: 4,
      title: "Кучарова Феруза Алишева",
      status: "Стажер-преподаватель",
      description: "Лингвокультурные особенности перевода военных терминов",
    },
  ];

  let list2EN = [
    {
      id: 1,
      title: "Sherkulov Sardor Komilovich",
      status: "Associate Professor, PhD",
      description:
        "National mentality, human freedom, and morality concepts in English and Uzbek prose",
    },
    {
      id: 2,
      title: "Begimkulova Shaxnoza Axmedovna",
      status: "Senior Lecturer",
      description:
        "Interpretation of national and universal principles in the works of Afghan-American women writers",
    },
    {
      id: 3,
      title: "Sharipova Nilufar Xalil qizi",
      status: "Senior Lecturer",
      description:
        "Comparative interpretation of the pragmatic features of proverbs expressing hospitality in English and Uzbek languages",
    },
    {
      id: 4,
      title: "Ko‘charova Feruza Alisher qizi",
      status: "Trainee Lecturer",
      description:
        "Linguocultural characteristics of the translation of military terms",
    },
  ];

  let list3 = [
    {
      id: 1,
      name: "Phd. Sardor Sherqulov",
      email: "sardor.sherkulov7@gmail.com",
    },
    {
      id: 2,
      name: "kat.o‘qit. Suyarova Mavjuda",
      email: "suyarovamavjuda@gmail.com",
    },
    {
      id: 3,
      name: "kat.o‘qit. Abdirahimova Mohigul",
      email: "abdirahimovamohigul@gmail.com",
    },
    {
      id: 4,
      name: "kat.o‘qit. Sharipova Nilufar",
      email: "sharipovanilufar@gmail.com",
    },
    {
      id: 5,
      name: "kat.o‘qit. Xomidov Bahodir",
      email: "xomidovbahodir@gmail.com",
    },
    {
      id: 6,
      name: "kat.o‘qit. Fayziyeva Komila",
      email: "fayziyevakomila@gmail.com",
    },
    {
      id: 7,
      name: "kat.o‘qit. Begimkulova Shaxnoza",
      email: "begimkulovash@gmail.com",
    },
    {
      id: 8,
      name: "assist.o‘qit. Sadinov Oybek",
      email: "o.sadinov@gmail.com",
    },
    {
      id: 9,
      name: "staj.o‘qit. Mamashoyev Umid",
      email: "mamashoyev_umid@gmail.com",
    },
    {
      id: 10,
      name: "staj.o‘qit. Usmonova Mohinbonu",
      email: "usmonovabonu98@gmail.com",
    },
    {
      id: 11,
      name: "staj.o‘qit. Hamzayeva Zebo",
      email: "zebohamzayeva@gmail.com",
    },
    {
      id: 12,
      name: "staj.o‘qit. Ko’charova Feruza",
      email: "kucharovaferuza@gmail.com",
    },
  ];

  let list3ru = [
    {
      id: 1,
      name: "Доктор философии Сардор Шеркулов",
      email: "sardor.sherkulov7@gmail.com",
    },
    {
      id: 2,
      name: "Кат. преп. Суярова Мавжуда",
      email: "suyarovamavjuda@gmail.com",
    },
    {
      id: 3,
      name: "Кат. преп. Абдирахимова Мохигул",
      email: "abdirahimovamohigul@gmail.com",
    },
    {
      id: 4,
      name: "Кат. преп. Шарипова Нилуфар",
      email: "sharipovanilufar@gmail.com",
    },
    {
      id: 5,
      name: "Кат. преп. Хомидов Баходир",
      email: "xomidovbahodir@gmail.com",
    },
    {
      id: 6,
      name: "Кат. преп. Файзиева Комила",
      email: "fayziyevakomila@gmail.com",
    },
    {
      id: 7,
      name: "Кат. преп. Бегимкулова Шахноза",
      email: "begimkulovash@gmail.com",
    },
    {
      id: 8,
      name: "Ассист. преп. Садинов Ойбек",
      email: "o.sadinov@gmail.com",
    },
    {
      id: 9,
      name: "Стаж. преп. Мамашоев Умид",
      email: "mamashoyev_umid@gmail.com",
    },
    {
      id: 10,
      name: "Стаж. преп. Усмонова Мохинбону",
      email: "usmonovabonu98@gmail.com",
    },
    {
      id: 11,
      name: "Стаж. преп. Хамзаева Зебо",
      email: "zebohamzayeva@gmail.com",
    },
    {
      id: 12,
      name: "Стаж. преп. Кучарова Феруза",
      email: "kucharovaferuza@gmail.com",
    },
  ];

  let list3en = [
    {
      id: 1,
      name: "PhD. Sardor Sherqulov",
      email: "sardor.sherkulov7@gmail.com",
    },
    {
      id: 2,
      name: "Assoc. Prof. Suyarova Mavjuda",
      email: "suyarovamavjuda@gmail.com",
    },
    {
      id: 3,
      name: "Assoc. Prof. Abdirahimova Mohigul",
      email: "abdirahimovamohigul@gmail.com",
    },
    {
      id: 4,
      name: "Assoc. Prof. Sharipova Nilufar",
      email: "sharipovanilufar@gmail.com",
    },
    {
      id: 5,
      name: "Assoc. Prof. Xomidov Bahodir",
      email: "xomidovbahodir@gmail.com",
    },
    {
      id: 6,
      name: "Assoc. Prof. Fayziyeva Komila",
      email: "fayziyevakomila@gmail.com",
    },
    {
      id: 7,
      name: "Assoc. Prof. Begimkulova Shaxnoza",
      email: "begimkulovash@gmail.com",
    },
    {
      id: 8,
      name: "Assist. Prof. Sadinov Oybek",
      email: "o.sadinov@gmail.com",
    },
    {
      id: 9,
      name: "Trainee Prof. Mamashoyev Umid",
      email: "mamashoyev_umid@gmail.com",
    },
    {
      id: 10,
      name: "Trainee Prof. Usmonova Mohinbonu",
      email: "usmonovabonu98@gmail.com",
    },
    {
      id: 11,
      name: "Trainee Prof. Hamzayeva Zebo",
      email: "zebohamzayeva@gmail.com",
    },
    {
      id: 12,
      name: "Trainee Prof. Ko’charova Feruza",
      email: "kucharovaferuza@gmail.com",
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
                  <h4>1. Kafedra tarixi va faoliyati</h4>
                  <p>
                    Kafedra 2022- yil "Umummetodologik fanlar" kafedrasi
                    tarkibida bòlgan. 2023- yil 1-martdan "Filologiya va
                    pedagogika fanlari" kafedrasi ajralib chiqqan. Filologiya va
                    pedagogika fanlari kafedrasida 4 ta yònalish xorijiy tillar
                    (ingliz tili), xorijiy tillar (rus tili), Boshlanģich ta'lim
                    va maktabgacha ta'lim yònalishlari faoliyat olib borgan.{" "}
                    <br /> <br />
                    2024- yil aprel oyida Universitet Kengashi qarori bilan 1-
                    apreldan 'Fakultetlararo xorijiy tillar' kafedrasi nomi
                    berilgan hamda uning tasarrufida xorijiy til, xorijiy til va
                    adabiyot (rus tili) va xorijiy til (NGI, I, ATT, ATTT)
                    yònalishlari òz faoliyatini olib bormoqda. <br /> <br />
                    2024- yil 1- apreldan boshlab Phd. S.K. Sherqulov
                    'Fakultetlararo xorijiy tillar' kafedrasi mudiri vazifasini
                    bajarib kelmoqda. Kafedra o‘qituvchilari pedagogik faoliyat
                    va ilmiy tadqiqot ishlari bilan mashg‘ul va ular orasida
                    ko‘plab fan nomzodi va doktorlik dissertatsiyalarini himoya
                    qilganlar bor.
                  </p>
                  <h4>2. Kafedraning o‘quv faoliyati</h4>
                  <p>
                    Hozirgi kunda Xorijiy tillar kafedrasida dots. v.b. Sardor
                    Sherqulov Komilovich, PhD Fayziyeva Komila, katta
                    o‘qituvchilar Suyarova Mavjuda, Abdurahimova Mohigul,
                    Sharipova Nilufar, Xomidov Bahodir, Begimkulova Shaxnoza,
                    o’qituvchilar Mamashoyev Umid, Sadinov Oybek, Usmonova
                    Mohinbonu, Ko’charova Feruza, Hamzayeva Zebo va boshqalar
                    faol mehnat qilmoqdalar. <br />
                    Kafedra professor-o‘qituvchilari tomonidan <br />
                    60111800- Xorijiy til va adabiyoti (rus tili va adabiyoti)
                    bakalavriat (kunduzgi) ta’limi yo‘nalishida quyidagi
                    fanlardan nazariy va amaliy mashg’ulotlar olib boriladi:{" "}
                    <br />• O‘qish va yozuv amaliyoti; <br />• Nutq ko‘nikmalari
                    integratsiyasi; <br />• Til aspektlarini o‘qitish amaliyoti;{" "}
                    <br />• Nutq malakalari integratsiyasi; <br />• Ingliz tili
                    o‘qitishning integrallashgan kursi; <br />• Ingliz tili
                    o‘qitish qiyosiy metodikasi; <br />• Xorijiy til; <br />•
                    Xorijiy tilni intensiv o’qitish ;
                  </p>
                  <h4>3. Kafedraning ilmiy faoliyati</h4>
                  <p>
                    Doktorlik dissertasiyalari himoyalari (PhD): S.Sherkulov
                    (2023), K.Fayziyeva (2024)
                  </p>
                  <h4>4. Kafedraning o‘quv-uslubiy faoliyati</h4>
                  <p>
                    Kafedra professor-o‘qituvchilari o‘quv faoliyatidani
                    tashqari, o‘quv-uslubiy ishlar bilan ham shug'ullanadilar.
                    Jumladan, darslik, o‘quv va uslubiy qo‘llanmalar yaratishda
                    samarali faoliyat olib borishmoqdalar.
                  </p>
                  <h4>
                    5. Fakultetlararo xorijiy tillar kafedrasida o‘qitiladigan
                    fanlar
                  </h4>
                  <table class="table table-hover">
                    <thead>
                      <tr>
                        <th scope="col">#</th>
                        <th scope="col">
                          Fan nomi <br /> Bakalavr
                        </th>
                        <th scope="col">Fan haqida qisqacha ma’lumot</th>
                      </tr>
                    </thead>
                    <tbody>
                      {list.map((l) => (
                        <tr key={l.id}>
                          <th scope="row">{l.id}</th>
                          <td>{l.title}</td>
                          <td>
                            {l.description} <br />
                            {l?.text?.map((t) => (
                              <div>
                                {t} <br />
                              </div>
                            ))}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                  <h4>6. Tadqiqotchilar va ilmiy ishlar haqida</h4>
                  <table class="table table-hover">
                    <thead>
                      <tr>
                        <th scope="col">#</th>
                        <th scope="col">
                          Tadqiqotchi professor-o‘qituvchining F.I.Sh.
                        </th>
                        <th scope="col">Ilmiy darajasi, unvoni</th>
                        <th scope="col">Dissertatsiya ishi mavzusi</th>
                      </tr>
                    </thead>
                    <tbody>
                      {list2.map((l) => (
                        <tr key={`people-${l.id}`}>
                          <th scope="row">{l.id}</th>
                          <td>{l.title}</td>
                          <td>{l.status}</td>
                          <td>{l.description}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                  <h4>7. Hamkorlik</h4>
                  <p>
                    Kafedra mamlakatimiz ilmiy va ta’lim tashkilotlari bilan
                    o‘quv-metodik, ilmiy va kadrlar mobilligi bo‘yicha
                    hamkorlikda faoliyat olib boorish rejalashtirilgan.
                  </p>
                  <h4>8. Kafedra tarkibi</h4>

                  <table class="table table-hover">
                    <thead>
                      <tr>
                        <th scope="col">#</th>
                        <th scope="col">Familiyasi, ismi, sharifi</th>
                        <th scope="col">Elektron pochta</th>
                      </tr>
                    </thead>
                    <tbody>
                      {list3.map((l) => (
                        <tr key={`person-${l.id}`}>
                          <th scope="row">{l.id}</th>
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
                  <h4>1. История и деятельность кафедры</h4>
                  <p>
                    Кафедра 2022 Кафедра «Общие методологические науки» включен
                    в состав. С 1 марта 2023 года «Филология и Отделился
                    факультет педагогических наук». Филология и 4 основных
                    иностранных языка на факультете педагогических наук
                    (английский), иностранные языки (русский), Начальное
                    образование и зоны дошкольного образования действовали
                    активно. <br /> <br />
                    В апреле 2024 года решением Совета университета 1 с апреля
                    название кафедры «Межфакультетские иностранные языки».
                    иностранный язык, иностранный язык и литература (русский
                    язык) и иностранный язык (НГИ, И, АТТ, АТТТ) Направления
                    осуществляют свою деятельность. <br /> <br />С 1 апреля 2024
                    г. к.ф.н. С.К. Шеркулов Заведующий кафедрой
                    «Межфакультетские иностранные языки» делает это.
                    Педагогическая деятельность преподавателей кафедры и
                    занимающихся научно-исследовательской работой и среди них
                    защита многих кандидатских и докторских диссертаций есть те,
                    кто это сделал.
                  </p>
                  <h4>2. Образовательная деятельность кафедры</h4>
                  <p>
                    В настоящее время доцент кафедры иностранных языков. и т. д.
                    Капитан Шеркулов Комилович, к.ф.н. Файзиева Комила, ст.
                    преподаватели Суярова Мавлюта, Абдурахимова Мохигул,
                    Шарипова Нилуфар, Хомидов Бахадир, Бегимкулова Шахноза,
                    преподаватели Мамашоев Умид, Садинов Ойбек, Усмонова
                    Мохинбану, Кочарова Феруза, Хамзаева Зебо и другие. активно
                    работают. <br />
                    Профессора и преподаватели кафедры <br />
                    60111800- Иностранный язык и литература (Русский язык и
                    литература) следующее в сфере бакалавриата (дневной формы
                    обучения) теоретические и практические занятия проводятся по
                    предметам: <br />• Практика чтения и письма; <br />•
                    Разговорные навыки интеграция; <br />• Практика преподавания
                    языковых аспектов; <br />• Интеграция речевых навыков;{" "}
                    <br />• Английский интегрированный курс обучения; <br />•
                    Английский сравнительная методика преподавания; <br />•
                    Иностранный язык; <br />• Интенсивное обучение иностранному
                    языку;
                  </p>
                  <h4>3. Научная деятельность кафедры</h4>
                  <p>
                    Защиты докторских диссертаций (PhD): Шеркулов С.А. (2023),
                    К. Файзиева (2024)
                  </p>
                  <h4>4. Учебно-методическая деятельность кафедры</h4>
                  <p>
                    Научная деятельность профессоров-преподавателей кафедры
                    кроме того, они занимаются также учебно-методической
                    работой. В частности, в создании учебников,
                    учебно-методических пособий. работают эффективно.
                  </p>
                  <h4>
                    5. Преподавал на межфакультетской кафедре иностранных
                    языков. науки
                  </h4>
                  <table class="table table-hover">
                    <thead>
                      <tr>
                        <th scope="col">#</th>
                        <th scope="col">
                          {" "}
                          Название темы <br /> Бакалавр
                        </th>
                        <th scope="col">Краткие сведения о науке</th>
                      </tr>
                    </thead>
                    <tbody>
                      {listRU.map((l) => (
                        <tr key={l.id}>
                          <th scope="row">{l.id}</th>
                          <td>{l.title}</td>
                          <td>
                            {l.description} <br />
                            {l?.text?.map((t) => (
                              <div>
                                {t} <br />
                              </div>
                            ))}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                  <h4>6. Об исследователях и научных работах</h4>
                  <table class="table table-hover">
                    <thead>
                      <tr>
                        <th scope="col">#</th>
                        <th scope="col">
                          Профессор-преподаватель-исследователь Р.И.О.
                        </th>
                        <th scope="col">Ученая степень, звание</th>
                        <th scope="col">Тема диссертации</th>
                      </tr>
                    </thead>
                    <tbody>
                      {list2RU.map((l) => (
                        <tr key={`people-${l.id}`}>
                          <th scope="row">{l.id}</th>
                          <td>{l.title}</td>
                          <td>{l.status}</td>
                          <td>{l.description}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                  <h4>7. Сотрудничество</h4>
                  <p>
                    Кафедра сотрудничает с научными и образовательными
                    организациями нашей страны. по учебно-методической, научной
                    и кадровой мобильности планируется осуществлять деятельность
                    в сотрудничестве.
                  </p>
                  <h4>8. Состав кафедры</h4>

                  <table class="table table-hover">
                    <thead>
                      <tr>
                        <th scope="col">#</th>
                        <th scope="col">Фамилия, имя, очество</th>
                        <th scope="col">Электронная почта</th>
                      </tr>
                    </thead>
                    <tbody>
                      {list3ru.map((l) => (
                        <tr key={`person-${l.id}`}>
                          <th scope="row">{l.id}</th>
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
                  <h4>1. History and Information Department</h4>
                  <p>
                    Department 2022 Department "Obshchie metodologicheskie
                    nauki" vklyuchen v composition. S 1 time in 2023 "Filologiya
                    i Otdelilsya Faculty of Pedagogical Sciences. Philology i 4
                    osnovnyx foreign language and faculty of pedagogic science
                    (English), foreign language (Russian), Nachalnoe obrazovanie
                    i zony doshkolnogo obrazovanie deystvovali active. <br />{" "}
                    <br />
                    On April 5, 2024, I decided to go to Soviet University on
                    April 1 the name of the department "Interfaculty foreign
                    languages". foreign language, foreign language and
                    literature (Russian language) and foreign language (NGI, I,
                    ATT, ATTT) Direction osushchestvlyayut svoyu deyatelnost.{" "}
                    <br /> <br />S 1 April 2024 g. Ph.D. S.K. Sherkulov Factory
                    "Inter-faculty foreign languages" works. Pedagogical
                    deyatelnost prepodavateley kafedry i zanamiyushchikhsya
                    nauchno-issledovatelskoy rabotoy i sredi nix zashchita many
                    candidates and doctoral dissertations, kto eto sdelal.
                  </p>
                  <h4>2. Educational activities of the department</h4>
                  <p>
                    Currently, Assoc. in the Department of Foreign Languages.
                    etc. Captain Sherkulov Komilovich, Ph.D. Fayziyeva Komila,
                    senior teachers Suyarova Mavluta, Abdurahimova Mohigul,
                    Sharipova Nilufar, Khomidov Bahadir, Begimkulova Shakhnoza,
                    teachers Mamashoyev Umid, Sadinov Oybek, Usmonova Mohinbanu,
                    Kocharova Feruza, Hamzayeva Zebo and others are actively
                    working. <br />
                    By professors and teachers of the department <br />
                    60111800- Foreign language and literature (Russian language
                    and literature) the following in the field of undergraduate
                    (full-time) education theoretical and practical classes are
                    conducted in subjects: <br />• Reading and writing practice;{" "}
                    <br />• Speaking skills integration; <br />• Practice of
                    teaching language aspects; <br />• Integration of speech
                    skills; <br />• English integrated training course; <br />•
                    English comparative teaching methodology; <br />• Foreign
                    language; <br />• Intensive foreign language training;
                  </p>
                  <h4>3. Scientific activity of the department</h4>
                  <p>
                    Doctoral theses defenses (PhD): S. Sherkulov (2023), K.
                    Fayziyeva (2024)
                  </p>
                  <h4>
                    4. Educational and methodological activity of the department
                  </h4>
                  <p>
                    Academic activities of professors-teachers of the department
                    besides, they are also engaged in educational and
                    methodological work. In particular, in the creation of
                    textbooks, educational and methodological manuals are
                    working effectively.
                  </p>
                  <h4>
                    5. Taught at the interfaculty department of foreign
                    languages sciences
                  </h4>
                  <table class="table table-hover">
                    <thead>
                      <tr>
                        <th scope="col">#</th>
                        <th scope="col">
                          Subject title <br /> Bachelor
                        </th>
                        <th scope="col">Brief information about science</th>
                      </tr>
                    </thead>
                    <tbody>
                      {listEN.map((l) => (
                        <tr key={l.id}>
                          <th scope="row">{l.id}</th>
                          <td>{l.title}</td>
                          <td>
                            {l.description} <br />
                            {l?.text?.map((t) => (
                              <div>
                                {t} <br />
                              </div>
                            ))}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                  <h4>6. About researchers and scientific works</h4>{" "}
                  <table class="table table-hover">
                    <thead>
                      <tr>
                        <th scope="col">#</th>
                        <th scope="col">F.I.Sh.</th>
                        <th scope="col">Scientific degree, title</th>
                        <th scope="col">Dissertation topic</th>
                      </tr>
                    </thead>
                    <tbody>
                      {list2EN.map((l) => (
                        <tr key={`people-${l.id}`}>
                          <th scope="row">{l.id}</th>
                          <td>{l.title}</td>
                          <td>{l.status}</td>
                          <td>{l.description}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                  <h4>7. Cooperation</h4>
                  <p>
                    The department cooperates with scientific and educational
                    organizations of our country on educational-methodical,
                    scientific and personnel mobility it is planned to carry out
                    activities in cooperation.
                  </p>
                  <h4>8. The composition of the department</h4>
                  <table class="table table-hover">
                    <thead>
                      <tr>
                        <th scope="col">#</th>
                        <th scope="col">Surname, first name, patronymic</th>
                        <th scope="col">Email</th>
                      </tr>
                    </thead>
                    <tbody>
                      {list3en.map((l) => (
                        <tr key={`person-${l.id}`}>
                          <th scope="row">{l.id}</th>
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
