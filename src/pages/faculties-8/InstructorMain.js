import instructors from "../../data/Instructors.json";
import { useIntl } from "react-intl";
import { getProductName } from "../../helpers/general";
import ImageF from "../../assets/images/faculties-8/image.png";
import BookImage1 from "../../assets/images/faculties-8/book-1.png";
import BookImage2 from "../../assets/images/faculties-8/book-2.png";

const InstructorDetailsMain = () => {
  const intl = useIntl();
  const instructor = instructors.find((b) => b.kafedra == "8");
  const lang = (
    JSON.parse(localStorage.getItem("i18nConfig")) || { selectedLang: "uz" }
  )?.selectedLang;

  let listSubjects = [
    {
      title: "Ona tili-o‘qish savodxonligi va uni o‘qitish metodikasi",
      description:
        "Fanni o‘qitishdan maqsad – talabalarni boshlang‘ich sinflarda ona tili va o‘qish savodxonligi fanining mazmuni va vazifalari, o‘qitish usullari, ta’limiy vositalar bilan tanishtirish va ularni ta’lim jarayoniga tatbiq etish bo‘yicha bilim, ko‘nikma, malaka va kompetensiyalarni shakllantirish hamda amaliyotga tatbiq etish ko‘nikmasini hosil qilishdan iborat. Fan doirasida o‘rganiladigan asosiy masalalarning mazmun-mundarijasini belgilash, ona tili didaktikasi va  metodikasi haqida ma’lumot berish hamda ona tilini o‘quv predmeti sifatida qanday o‘qitish kerakligiga oid kasbiy kompetentlikni shakllantirishdan iborat. Talabalarni shu sohada mantiqiy fikrlashga, ilmiy xulosa chiqarishga o‘rgatish, ularda ona tili va o‘qish savodxonligini o‘qitish metodikasining nazariy va amaliy muammolarini  hal etish ko‘nikmalarini shakllantirish. ",
    },
    {
      title: "Badiiy o‘qish asoslari",
      description:
        "Fanning asosiy maqsadi – mazkur fan dasturi badiiy adabiyot haqida ma’lumot berish orqali bo’lajak boshlang’ich sinf o’qituvchilariga O’qish kitobida uchraydigan adabiy janrlarni bilish va farqlay olishlarini maqsadini ko’zlaydi. Shunga ko’ra fan dasturida badiiy o’qish asoslariga oid eng muhim bo’limlari, qoidalar, tasnif va tushunchalar qamrab olingan. Badiiy adabiyot tilni yangiliklar bilan boyitish uchun juda katta ahamiyatga egadir. Zotan bu fanni o’qitishda ona tili fanlari bilan ham chambarchas bog’liq, ayni paytda talabalarni til muammolarni hal qilishda badiiy adabiyotga tayanishga o’rgatish lozim.",
    },
    {
      title: "Husnixat o‘qitish texnologiyasi",
      description:
        "Fanni o‘qitishdan maqsad-talabalarga husnixat metodikasidan nazariy ma’lumot berib, husnixat talablari asosida yozishga o‘rgatish. Husnixatga o‘rgatishning metod va usullari bilan, ta’limiy vositalar bilan tanishtirish ;va ularni ta’lim jarayoniga tadbiq etish bo‘yicha bilim, ko‘nikma va malakalarni shakllantirishdir.",
    },
    {
      title: "Ona tili praktikumi",
      description:
        "Fanning asosiy maqsadi – talabalarga oliy o‘quv bo‘limiga til bo‘yicha olgan bilimlarni xotiraga tiklash  va ona tili fanining barcha satxlari bo‘yicha ma’lumotlarni eslab qolish, til haqidagi bilim va tushunchalar bilan boyitish, ona tili praktikumining nazariy va amaliy ko‘nikmalari hosil qilishdan iborat. Shu bilan bir qatorda ona tilining  barcha sohalari bo‘yicha umumiy fundamental bilimlarni shakkllantirish, uni amaliyotga tadbiq qilish ko‘nikmalarini rivojlantirish, mustaqil o‘qish faoliyatini shakllantiri, matnlarni tahlil qilish usullarini qo‘llash va bilimlarga tayangan holda ta’lim berish tushuntiriladi.",
    },
    {
      title: "Ona tili o‘qitish metodikasi",
      description:
        "Fanning o‘qitishdan  maqsad - talabalarni  boshlang‘ich  sinflarda ona tili  fanining  mazmuni  va vazifalari,  oq‘itish usullari,  ta’limiy vositalar  bilan  tanishtirish  va  ularni  ta’lim  jarayoniga  tatbiq  etish bo‘yicha bilim, ko‘nikma, malaka va kompetensiyalarni shakllantirish hamda amaliyotga tatbiq etish ko‘nikmasini hosil qilishdan iborat.",
    },
    {
      title: "Ifodali o‘qish",
      description:
        "“Ifodali o‘qish” fanini o‘qitilishidan maqsad - mazkur fan dasturi badiiy o‘qish asoslari haqida qisqacha ma’lumot berish orqali bo‘lajak boshlang‘ich sinf o‘qituvchilarining “O‘qish kitobi”da uchraydigan adabiy janrlarga xos matnlarni tahlil qila olish va badiiy o‘qish malakasini shakllantirishdir. Shunga ko‘ra fan dasturida badiiy o‘qish asoslariga oid eng muhim bo‘limlari, qoidalar, tasnif va tushunchalar qamrab olingan. Badiiy adabiyot adabiy tilni yangiliklar bilan boyitish uchun juda katta ahamiyatga egadir, zotan fanni o‘qishda ona tili fanlari bilan ham chambarchas bog‘liq, ayni paytda talabalarni til muammolarini hal qilishda badiiy adabiyotga tayanishga o‘rgatish lozim.",
    },
    {
      title: "Bolalar adabiyoti",
      description:
        "Fanni o‘qitishdan maqsad - bo‘lajak o‘qituvchilariga bolalar adabiyotining shakllanishi, umumbadiiy adabiyotdan farqi, mushtarakligi, o‘ziga xos xususiyatlari, bolalar adabiyoti ijodkorlari asarlarining yosh kitobxon o‘quvchi tarbiyasiga ta’siri, o‘zbek va jahon adabiyotidagi ijodiy ta’sir masalalari, jahon bolalar adabiyoti namoyondalari asarlarining ta’limiy-tarbiyaviy ahamiyati   haqida nazariy bilim berish hamda  bolalar folklori, o‘zbek va jahon (rus) bolalar adabiyoti haqida umumiy ma’lumot berish, talabalarning og‘zaki va yozma nutqini o‘stirish va kitobxonlikka undash, savodxonligini oshirish, takomillashtirish yuzasidan amaliy malaka hosil qilishdir.",
    },
    {
      title: "Lisoniy tahlil",
      description:
        "Fanni o‘qitishdan maqsad – bo‘lajak boshlang‘ich sinf o‘qituvchilarini ona tili matnining lingvistik tahlili bilan batafsil tanishtirish. Talabalar olgan bilimlarni mashqlar badiiy adabiyotimizning barcha turlari bo‘yicha mavjud turli matnlardan olingan Grammatik kartochkalar, mashqlar, asar tahlil qoliplari, test savollari yordamida mustahkamlab borish.",
    },
    {
      title: "Husnixat yozish texnologiyasi",
      description:
        "       Fanni o‘qitishdan maqsad-talabalarga husnixat metodikasidan nazariy ma’lumot berib, husnixat talablari asosida yozishga o‘rgatish. Husnixatga o‘rgatishning metod va usullari bilan, ta’limiy vositalar bilan tanishtirish ;va ularni ta’lim jarayoniga tadbiq etish bo‘yicha bilim, ko‘nikma va malakalarni shakllantirishdir.",
    },
    {
      title: "Boshlang‘ich ta’limda bolalar adabiyoti",
      description:
        "Fanni o‘qitishdan maqsad - bo‘lajak o‘qituvchilariga bolalar adabiyotining shakllanishi, umumbadiiy adabiyotdan farqi, mushtarakligi, o‘ziga xos xususiyatlari, bolalar adabiyoti ijodkorlari asarlarining yosh kitobxon o‘quvchi tarbiyasiga ta’siri, o‘zbek va jahon adabiyotidagi ijodiy ta’sir masalalari, jahon bolalar adabiyoti namoyondalari asarlarining ta’limiy-tarbiyaviy ahamiyati   haqida nazariy bilim berish hamda  bolalar folklori, o‘zbek va jahon (rus) bolalar adabiyoti haqida umumiy ma’lumot berish, talabalarning og‘zaki va yozma nutqini o‘stirish va kitobxonlikka undash, savodxonligini oshirish, takomillashtirish yuzasidan amaliy malaka hosil qilishdir.",
    },
    {
      title: "O‘zbek tili",
      description:
        "Fanning asosiy maqsadi talabalarning kundalik, ilmiy va kasbiy sohalardafaoliyat olib borishi uchun o‘qitishning kommunikativ-nutqiy tamoyili asosida ularda fanbo‘yicha egallangan bilim, ko‘nikmalarni muloqot va ish faoliyati jarayonida qo‘llash malakasini shakllantirishga qaratiladi. ",
    },
  ];

  let listSubjectsRu = [
    {
      title: "Методика преподавания родного языка и его методика обучения",
      description:
        "Целью преподавания является знакомство студентов начальных классов с содержанием и задачами предмета изучения родного языка и грамотности, методами обучения, учебными средствами, формированием знаний, умений, навыков и компетенций в применении методики обучения. Задачей является определение содержания и объема основных вопросов, обсуждение дидактики и методики родного языка и формирование профессиональной компетенции в преподавании родного языка в качестве учебного предмета. Студентов учат логическому мышлению в этой области, научной аргументации, решению теоретических и практических проблем методики преподавания языка и грамотности.",
    },
    {
      title: "Основы художественного чтения",
      description:
        "Основная цель - дать будущим учителям начальных классов представление о художественной литературе через изучение и различение литературных жанров, встречающихся в учебниках. Поэтому в учебном плане представлены основные части, правила, классификация и понятия основ художественного чтения. Для обогащения языка художественной литературой требуется знание новшеств. Важно учитывать, что этот предмет связан не только с языковыми предметами, но и с литературным чтением в решении языковых проблем студентов.",
    },
    {
      title: "Методика обучения красивому письму",
      description:
        "Цель обучения - предоставить студентам теоретические сведения о методике красивого письма и обучить их письму на основе требований красивого письма. Обучение методике письма включает в себя знакомство с методами и способами обучения, учебными средствами, а также формирование знаний, навыков и компетенций в применении методики обучения.",
    },
    {
      title: "Практикум по родному языку",
      description:
        "Основная цель - закрепить у студентов знания, полученные в высших учебных заведениях по языку, сохранить их в памяти и сформировать знания о всех разделах предмета, связанных с родным языком, укрепить знания о языке и соответствующие представления, сформировать теоретические и практические навыки практикума по родному языку. Вместе с тем, они также обсуждают различные аспекты языка, развивают навыки самостоятельного обучения, анализа текстов и методов обучения научно-практическом уровне.",
    },
    {
      title: "Методика преподавания родного языка",
      description:
        "Цель преподавания - формирование у студентов начальных классов представления о содержании и задачах предмета изучения родного языка, методах обучения, учебных средствах и их применении в учебном процессе, формирование знаний, умений, навыков и компетенций в применении методики обучения на практике.",
    },
    {
      title: "Эффективное чтение",
      description:
        'Цель обучения "Эффективному чтению" - кратко ознакомить будущих учителей начальных классов с основами художественного чтения, анализировать тексты, относящиеся к литературным жанрам, представленным в "Учебнике чтения", и формировать навыки художественного чтения. Поэтому в учебном плане представлены основные части, правила, классификация и понятия основ художественного чтения. Для обогащения языка художественной литературой требуется знание новшеств. Важно учитывать, что этот предмет связан не только с языковыми предметами, но и с литературным чтением в решении языковых проблем студентов.',
    },
    {
      title: "Литература для детей",
      description:
        "Цель преподавания - формирование представления у будущих учителей о развитии литературы для детей, ее отличиях от общей литературы, общих и специфических особенностях, влияниним творческих личностей литературы для детей на воспитание чувства эстетики, этики, эстетики и нравственности детей, развитие умений и навыков чтения, а также формирование представлений о культуре и искусстве. Они также изучают фольклор для детей, узбекскую и мировую (русскую) литературу для детей, общие сведения о детской литературе и ее писателях, влияние произведений детской литературы на образовательное воспитание читателя, развитие устной и письменной речи, развитие навыков чтения и привычки к чтению, улучшение, развитие и совершенствование навыков и компетенций в учебной деятельности.",
    },
    {
      title: "Лингвистический анализ текста",
      description:
        "Цель обучения - подробно знакомить будущих учителей начальных классов с лингвистическим анализом текста на родном языке. Студенты закрепляют свои знания с помощью упражнений по всем разделам художественной литературы на основе различных текстов, таких как грамматические карточки, упражнения, анализ произведений, тестовые вопросы.",
    },
    {
      title: "Технология письма красивым почерком",
      description:
        "Цель обучения - предоставить студентам теоретические сведения о методике красивого почерка и обучить их письму на основе требований красивого почерка. Обучение методике письма включает в себя знакомство с методами и способами обучения, учебными средствами, а также формирование знаний, умений и компетенций в применении методики обучения.",
    },
    {
      title: "Введение в литературу для детей в начальном обучении",
      description:
        "Цель обучения - формирование представления у будущих учителей о развитии литературы для детей, ее отличиях от общей литературы, общих и специфических особенностях, влиянии творческих личностей литературы для детей на воспитание чувства эстетики, этики, эстетики и нравственности детей, развитие умений и навыков чтения, а также формирование представлений о культуре и искусстве. Они также изучают фольклор для детей, узбекскую и мировую (русскую) литературу для детей, общие сведения о детской литературе и ее писателях, влияние произведений детской литературы на образовательное воспитание читателя, развитие устной и письменной речи, развитие навыков чтения и привычки к чтению, улучшение, развитие и совершенствование навыков и компетенций в учебной деятельности.",
    },
    {
      title: "Лингвистический анализ текста",
      description:
        "Цель обучения - подробно знакомить будущих учителей начальных классов с лингвистическим анализом текста на родном языке. Студенты закрепляют свои знания с помощью упражнений по всем разделам художественной литературы на основе различных текстов, таких как грамматические карточки, упражнения, анализ произведений, тестовые вопросы.",
    },
  ];

  let listSubjectsEn = [
    {
      title: "Teaching Methodology of Native Language and its Teaching Methods",
      description:
        "The aim of teaching is to introduce students in primary classes to the content and objectives of the subject of studying the native language and literacy, teaching methods, educational tools, and to shape knowledge, skills, and competencies in applying teaching methodology. The task is to define the content and scope of the main issues, discuss the didactics and methodology of the native language, and develop professional competence in teaching the native language as a subject. Students are taught logical thinking in this area, scientific argumentation, and solving theoretical and practical problems of language and literacy teaching methodology.",
    },
    {
      title: "Fundamentals of Fiction Reading",
      description:
        "The main goal is to provide future elementary school teachers with an understanding of fiction literature by studying and distinguishing literary genres encountered in textbooks. Therefore, the curriculum presents the main parts, rules, classification, and concepts of the fundamentals of fiction reading. Knowledge of innovations is necessary to enrich the language with fiction literature. It is important to note that this subject is related not only to language subjects but also to literary reading in solving students' language problems.",
    },
    {
      title: "Teaching Beautiful Handwriting Technology",
      description:
        "The aim of teaching is to provide students with theoretical knowledge of beautiful handwriting methodology and teach them handwriting based on the requirements of beautiful handwriting. Teaching handwriting methodology includes familiarizing with teaching methods and approaches, educational tools, and shaping knowledge, skills, and competencies in applying teaching methodology.",
    },
    {
      title: "Native Language Practicum",
      description:
        "The main goal is to consolidate students' knowledge acquired in higher education institutions on language, keep it in memory, and form knowledge of all sections of the subject related to the native language, strengthen language knowledge and corresponding ideas, shape theoretical and practical skills of native language practicum. At the same time, they also discuss various aspects of the language, develop self-study skills, analyze texts and teaching methods on a scientific-practical level.",
    },
    {
      title: "Teaching Methodology of Native Language",
      description:
        "The aim of teaching is to shape students in the early grades to the content and objectives of the subject of studying the native language, teaching methods, educational tools, and their application in the educational process, shaping knowledge, skills, and competencies in applying teaching methodology in practice.",
    },
    {
      title: "Effective Reading",
      description:
        "The aim of teaching 'Effective Reading' is to briefly introduce future elementary school teachers to the basics of fiction reading, analyze texts related to literary genres presented in the 'Reading Textbook,' and develop skills in literary reading. Therefore, the curriculum presents the main parts, rules, classification, and concepts of the fundamentals of fiction reading. Knowledge of innovations is necessary to enrich the language with fiction literature. It is important to note that this subject is related not only to language subjects but also to literary reading in solving students' language problems.",
    },
    {
      title: "Children's Literature",
      description:
        "The aim of teaching is to shape future teachers' understanding of the development of children's literature, its differences from general literature, common and specific features, the influence of creative personalities of children's literature on the upbringing of children's sense of aesthetics, ethics, aesthetics, and morality, developing reading skills, and shaping ideas about culture and art. They also study folklore for children, Uzbek and world (Russian) children's literature, general information about children's literature and its writers, the influence of children's literary works on the educational upbringing of the reader, the development of oral and written speech, the development of reading skills and reading habits, improvement, development, and perfection of skills and competencies in educational activities.",
    },
    {
      title: "Linguistic Text Analysis",
      description:
        "The aim of teaching is to thoroughly acquaint future elementary school teachers with linguistic text analysis in the native language. Students consolidate their knowledge through exercises on all sections of fiction literature based on various texts, such as grammar cards, exercises, analysis of works, test questions.",
    },
    {
      title: "Beautiful Handwriting Technology",
      description:
        "The aim of teaching is to provide students with theoretical knowledge of beautiful handwriting methodology and teach them handwriting based on the requirements of beautiful handwriting. Teaching handwriting methodology includes familiarizing with teaching methods and approaches, educational tools, and shaping knowledge, skills, and competencies in applying teaching methodology.",
    },
    {
      title: "Introduction to Children's Literature in Primary Education",
      description:
        "The aim of teaching is to shape future teachers' understanding of the development of children's literature, its differences from general literature, common and specific features, the influence of creative personalities of children's literature on the upbringing of children's sense of aesthetics, ethics, aesthetics, and morality, developing reading skills, and shaping ideas about culture and art. They also study folklore for children, Uzbek and world (Russian) children's literature, general information about children's literature and its writers, the influence of children's literary works on the educational upbringing of the reader, the development of oral and written speech, the development of reading skills and reading habits, improvement, development, and perfection of skills and competencies in educational activities.",
    },
    {
      title: "Linguistic Text Analysis",
      description:
        "The aim of teaching is to thoroughly acquaint future elementary school teachers with linguistic text analysis in the native language. Students consolidate their knowledge through exercises on all sections of fiction literature based on various texts, such as grammar cards, exercises, analysis of works, test questions.",
    },
  ];

  let listUz = [
    {
      name: "Raxmatullayeva Shaxodat Ziyotovna",
      status: "f.f.f.d., dotsent",
      description:
        "Boshlang‘ich  ta’limda o‘quv topshiriqlarini ishlab chiqishning lingvodidaktik asoslarini takomillashtirish",
    },
    {
      name: "Norxadjayeva Xurshida Sharipovna",
      status: "f.f.d., v.b professor",
      description: "Rasmiy muloqotning lingvodidaktik talqini",
    },
    {
      name: "Muminova Nilufar Abdirahmonovna",
      status: "f.f.f.d., dotsent",
      description:
        "Temuriylar davri antroponimiyasining leksik-semantik xususiyatlari (Salohiddin Toshkandiyning”Temurnoma”asari misolida)",
    },
    {
      name: "Hamdamov Akram Nasriddinovich",
      status: "f.f.n., dotsent",
      description:
        "Abdulla Oripov she’riyatida xalqona poetik tafakkur muammosi",
    },
    {
      name: "Xudoynazarov Ikrom Imomovich",
      status: "f.f.n., v.b.dotsent",
      description:
        "Antroponimlarning lug‘aviy tizimdagi o‘rni va semantic uslubiy xususiyatlari",
    },
    {
      name: "Sulaymonov Bobur Nodir o‘g‘li",
      status: "PhD, v.b. dotsent",
      description:
        "Temirbek To'raboyevning 'Teorema' romanida 't' tovushi bilan boshlanuvchi so'zlarni metaforalashuvi  va frazemalashuvi",
    },
    {
      name: "Oromova Nafosat Jo‘rayevna",
      status: "assistent o‘qituvchi",
      description:
        "Adabiy ta’limda nazariy ma’lumotlardan foydalanishning ilmiy-metodik asoslarini takomillashtirish (umumta’lim maktablarining 5-9-sinflari misolida)",
    },
    {
      name: "Tilovova Go'zal Rustamovna",
      status: "assistent o‘qituvchi",
      description:
        "Tilshunoslik atamalari o‘quv izohli lug‘atini yaratish tamoyillari (umumiy o‘rta va o‘rta maxsus ta’limi uchun",
    },
    {
      name: "Sobirova Shaxzoda Faxriddin qizi",
      status: "assistent o‘qituvchi",
      description: "Alisher Navoiyning “Hayrat-ul abror” asari leksikasi",
    },
    {
      name: "Ochilova Sanobar Narzullayevna",
      status: "assistent o‘qituvchi",
      description: "O‘zbek tilining izohli lug‘atida xulq-atvor fe’llari",
    },
    {
      name: "Umirova Feruza Pirmamat qizi",
      status: "assistent o‘qito‘qituvchi",
      description:
        "Badiiy matnda xushmuomalalikni ifodalashning sotsiopragmatik aspekti",
    },
    {
      name: "Rajabaliyeva Muhabbat",
      status: "assistent o‘qito‘qituvchi",
      description:
        "Oʻzbek mumtoz adabiyotini oʻrganishda Poyon Ravshanov tadqiqotlarining oʻrni",
    },
  ];

  let listRu = [
    {
      name: "Рахматуллаева Шаходат Зиётовна",
      status: "к.ф.н., доцент",
      description:
        "Совершенствование лингводидактических основ составления учебных заданий в начальном образовании",
    },
    {
      name: "Нурхаджаева Хуршида Шариповна",
      status: "к.ф.д., профессор",
      description: "Лингводидактический анализ официального разговорного языка",
    },
    {
      name: "Муминова Нилуфар Абдирахмоновна",
      status: "к.ф.н., доцент",
      description:
        "Лексико-семантические особенности антропонимики эпохи темуридов (на примере труда 'Темурнаме' Салохиддина Ташканди)",
    },
    {
      name: "Хамдамов Акрам Насриддинович",
      status: "к.ф.н., доцент",
      description:
        "Проблема народного поэтического мышления в поэзии Абдуллы Орипова",
    },
    {
      name: "Худайназаров Икром Имомович",
      status: "к.ф.н., профессор, доцент",
      description:
        "Место антропонимов в словесной системе и их семантико-стилистические особенности",
    },
    {
      name: "Сулаймонов Бобур Нодир оглы",
      status: "PhD, доцент, в.н.",
      description:
        "Метафоризация и фразеологизация слов, начинающихся на букву 'т' в романе Темирбека Турабаева 'Теорема'",
    },
    {
      name: "Оромова Нафосат Жураевна",
      status: "ассистент-преподаватель",
      description:
        "Научно-методические основы использования теоретических знаний в литературном образовании (на примере 5-9 классов общеобразовательных школ)",
    },
    {
      name: "Тиловова Гузал Рустамовна",
      status: "ассистент-преподаватель",
      description:
        "Концепция создания комментированного словаря терминов по лингвистике (для общеобразовательных и средних специальных школ)",
    },
    {
      name: "Собирова Шахзода Фахриддин кизи",
      status: "ассистент-преподаватель",
      description: "Лексика 'Хайрат-ул аброр' Алишера Навои",
    },
    {
      name: "Очилова Санобар Нарзуллаевна",
      status: "ассистент-преподаватель",
      description:
        "Формы глаголов общественной деятельности в объяснительном словаре узбекского языка",
    },
    {
      name: "Умирова Феруза Пирмамат кизи",
      status: "ассистент-преподаватель",
      description:
        "Социопрагматический аспект выражения художественной оценки в художественном тексте",
    },
    {
      name: "Раджабалиева Мухаббат",
      status: "ассистент-преподаватель",
      description:
        "Роль исследований Поёна Равшанова в изучении узбекской классической литературы",
    },
  ];

  let listEn = [
    {
      name: "Rakhmatullayeva Shahodat Ziyotovna",
      status: "PhD, Associate Professor",
      description:
        "Enhancing the linguistic-didactic principles of developing educational tasks in primary education",
    },
    {
      name: "Norkhadjayeva Khurshida Sharipovna",
      status: "PhD, Full Professor",
      description:
        "Linguistic-didactic analysis of formal conversational language",
    },
    {
      name: "Muminova Nilufar Abdirahmonovna",
      status: "PhD, Associate Professor",
      description:
        "Lexico-semantic features of anthroponymy in the Timurid period (using Salokhiddin Tashkandi's 'Timurnama' as an example)",
    },
    {
      name: "Hamdamov Akram Nasriddinovich",
      status: "PhD, Associate Professor",
      description:
        "The problem of folk poetic thinking in the poetry of Abdullah Oripov",
    },
    {
      name: "Khudaynazarov Ikrom Imomovich",
      status: "PhD, Full Professor, Associate Professor",
      description:
        "The place of anthroponyms in the linguistic system and their semantic-stylistic features",
    },
    {
      name: "Sulaymonov Bobur Nodir ogli",
      status: "PhD, Associate Professor, Vice-Dean",
      description:
        "Metaphorization and phraseologization of words starting with the letter 't' in Temirbek Turaboyev's novel 'Theorem'",
    },
    {
      name: "Oromova Nafosat Juraevna",
      status: "Assistant Professor",
      description:
        "Scientific-methodical bases of using theoretical knowledge in literary education (using grades 5-9 of general education schools as an example)",
    },
    {
      name: "Tilovova Gozal Rustamovna",
      status: "Assistant Professor",
      description:
        "Concept of creating an annotated dictionary of linguistic terms (for general and secondary special education)",
    },
    {
      name: "Sobirova Shakhzoda Fakhriddin qizi",
      status: "Assistant Professor",
      description: "Vocabulary of Alisher Navoi's 'Hayrat-ul abror'",
    },
    {
      name: "Ochilova Sanobar Narzullayevna",
      status: "Assistant Professor",
      description:
        "Usage of ethno-folk verbs in the explanatory dictionary of the Uzbek language",
    },
    {
      name: "Umirova Feruza Pirmamat kizi",
      status: "Assistant Professor",
      description:
        "Sociopragmatic aspect of expressing aesthetic evaluation in literary text",
    },
    {
      name: "Rajabaliyeva Muhabbat",
      status: "Assistant Professor",
      description:
        "The role of Poyon Ravshanov's research in studying Uzbek classical literature",
    },
  ];

  let userUz = [
    {
      name: "Raxmatullayeva Shaxodat Ziyotovna",
      email: "shahodatrahmatullayeva111@gmail.com",
    },
    {
      name: "Norxadjayeva Xurshida Sharipovna",
      email: "xurshida@gmail.com",
    },
    {
      name: "Muminova Nilufar Abdirahmonovna",
      email: "nilufarmuminova0177@gmail.com",
    },
    {
      name: "Hamdamov Akram Nasriddinovich",
      email: "akramhamdamov@mail.com",
    },
    {
      name: "Xudoynazarov Ikrom Imomovich",
      email: "xudoynazarovxkrom@mail.com",
    },
    {
      name: "Sulaymonov Bobur Nodir o‘g‘li",
      email: "sulaymonovbobir1@gmail.com",
    },
    {
      name: "Oromova Nafosat Jo‘rayevna",
      email: "oromovanafosat@gmail.com",
    },
    {
      name: "Tilovova Go'zal Rustamovna",
      email: "tilovovago‘zal@gmail.com  ",
    },
    {
      name: "Sobirova Shaxzoda Faxriddin qizi",
      email: "shahzodasobirova.@gmail.com",
    },
    {
      name: "Ochilova Sanobar Narzullayevna",
      email: "ochilova798@gmail.com",
    },
    {
      name: "Umurova Feruza Pirmamat qizi",
      email: "umurovaferuz@gmail.com",
    },
    {
      name: "Rajabaliyeva Muhabbat Alisher qizi",
      email: "rajabaliyeva@gmail.com",
    },
  ];

  let userRu = [
    {
      name: "Рахматуллаева Шаходат Зиётовна",
      email: "shahodatrahmatullayeva111@gmail.com",
    },
    {
      name: "Нурхаджаева Хуршида Шариповна",
      email: "xurshida@gmail.com",
    },
    {
      name: "Муминова Нилуфар Абдирахмоновна",
      email: "nilufarmuminova0177@gmail.com",
    },
    {
      name: "Хамдамов Акрам Насриддинович",
      email: "akramhamdamov@mail.com",
    },
    {
      name: "Худойназаров Икром Имомович",
      email: "xudoynazarovxkrom@mail.com",
    },
    {
      name: "Сулаймонов Бобур Нодир огли",
      email: "sulaymonovbobir1@gmail.com",
    },
    {
      name: "Оромова Нафосат Жураевна",
      email: "oromovanafosat@gmail.com",
    },
    {
      name: "Тиловова Гозал Рустамовна",
      email: "tilovovago‘zal@gmail.com",
    },
    {
      name: "Собирова Шахзода Фахриддин кизи",
      email: "shahzodasobirova.@gmail.com",
    },
    {
      name: "Очилова Санобар Нарзуллаевна",
      email: "ochilova798@gmail.com",
    },
    {
      name: "Умирова Феруза Пирмамат кизи",
      email: "umurovaferuz@gmail.com",
    },
    {
      name: "Раджабалиева Мухаббат Алишер кизи",
      email: "rajabaliyeva@gmail.com",
    },
  ];

  let userEn = [
    {
      name: "Rakhmatullayeva Shahodat Ziyotovna",
      email: "shahodatrahmatullayeva111@gmail.com",
    },
    {
      name: "Nurkhadjayeva Khurshida Sharipovna",
      email: "xurshida@gmail.com",
    },
    {
      name: "Muminova Nilufar Abdirahmonovna",
      email: "nilufarmuminova0177@gmail.com",
    },
    {
      name: "Hamdamov Akram Nasriddinovich",
      email: "akramhamdamov@mail.com",
    },
    {
      name: "Khudoinazarov Ikrom Imomovich",
      email: "xudoynazarovxkrom@mail.com",
    },
    {
      name: "Sulaymonov Bobur Nodir o‘g‘li",
      email: "sulaymonovbobir1@gmail.com",
    },
    {
      name: "Oromova Nafosat Jo‘rayevna",
      email: "oromovanafosat@gmail.com",
    },
    {
      name: "Tilovova Go'zal Rustamovna",
      email: "tilovovago‘zal@gmail.com",
    },
    {
      name: "Sobirova Shaxzoda Faxriddin qizi",
      email: "shahzodasobirova.@gmail.com",
    },
    {
      name: "Ochilova Sanobar Narzullayevna",
      email: "ochilova798@gmail.com",
    },
    {
      name: "Umurova Feruza Pirmamat qizi",
      email: "umurovaferuz@gmail.com",
    },
    {
      name: "Rajabaliyeva Muhabbat Alisher qizi",
      email: "rajabaliyeva@gmail.com",
    },
  ];

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
                  <h4>Kafedra tarixi va faoliyati</h4>
                  <p>
                    Kafedra 2023- yilda Iqtisodiyot va pedagogika Universitetida
                    “Xorijiy tillar va jismoniy madaniyat” fakulteti tarkibida
                    dotsent Sh. Raxmatullayeva rahbarligida “O‘zbek tili va
                    adabiyoti” nomi bilan faoliyat boshlagan. <br />
                    Fakultet va shu jumladan, O‘zbek tili va adabiyoti
                    kafedrasi, maktabgacha va maktab ta’limida faoliyat
                    yuritadigan yuqori saviyali mutaxassislarni tayyorlashni o‘z
                    oldiga asosiy maqsad qilib qo‘ygan. <br />
                  </p>
                  <h4> Kafedraning o‘quv faoliyati</h4>
                  <p>
                    Hozirgi kunda O‘zbek tili va adabiyoti kafedrasida f.f.d.,
                    dots. X.Sh.Norxadjayeva, f.f.n., dots. A.N.Hamdamov, kafedra
                    mudiri t.f.f.d., dots Sh.Z.Raxmatullayeva, f.f.f.d., dots.
                    N.A.Muminova, f.f.n. v.b.dots. I.I.Xudoynazarov, f.f.f.d.,
                    v.b.dots. B.N.Sulaymonov, o‘qituvchilar Sh.Sobirova,
                    N.Oromova, X.Ro‘ziyeva, F.Umurova, G.Tilovova, kabinet
                    mudiri R.Ziyodullayeva va boshqalar faol mehnat qilmoqdalar.{" "}
                    <br />
                    Kafedra professor-o’qituvchilari tomonidan <br />
                    60110500 – “Boshlang‘ich ta’lim”; <br />
                    60110200 – “Maktabgacha ta’lim”; <br />
                    60111800 – “Xorijiy til va adabiyoti (rus tili)”; <br />
                    60111100 – “Tarix”; <br />
                    bakalavriat (kunduzgi, sirtqi) ta’limi yo’nalishlarida
                    quyidagi fanlardan nazariy va amaliy mashg’ulotlar olib
                    boriladi: <br />
                    • Ona tili va o‘qish savodxonligi va uni o‘qitish
                    metodikasi; <br />
                    • Badiiy o‘qish asoslari; <br />
                    • Husnixat o‘qitish texnologiyasi; <br />
                    • Bolalar adabiyoti; <br />
                    • Ona tili o‘qitish metodikasi <br />
                    • Ona tili praktikumi; <br />
                    • Ifodali o‘qish; <br />
                    • Boshlang‘ich ta’limda bolalar adabiyoti; <br />
                    • Husnixat yozish texnologiyasi; <br />
                    • Lisoniy tahlil; <br />
                    • Nutq o‘stirish metodikasi; <br />
                    • Bolalarni nutqini o‘stirish; <br />
                    • O‘zbek tili <br />
                    • O‘zbek tilining sohada qo‘llanilishi. <br />
                  </p>
                  <img src={ImageF} alt="image" />
                  <h4>• Kafedraning ilmiy faoliyati</h4>
                  <p>
                    • Kafedrada “O‘zbek tili – Davlat tili sifatida” mavzusidagi
                    seminar muntazam o‘tkazib boriladi. Unda kafedra
                    doktorantlari o‘z ilmiy natijalari bo‘yicha ma’ruzalar
                    qilishadi, dissertatsiyalar muhokama qilinadi. <br />
                    • Doktorlik dissertasiyalari himoyalari: X.Sh.Norxadjayeva
                    (2023-yil oktyabr oyida) doktorlik dissertatsiyasini
                    muvaffaqiyatli himoya qildi. <br />
                    • Kafedra dotsenti Sh.Z.Raxmatullayeva doktorlik
                    dissertatsiyasi (DSc) ustida ish olib bormoqda. <br />
                    • Kafedra o‘qituvchilari: N.J.Oromova, S.Ochilova,
                    Sh.Sobirova, F.Umurova, G.Tilovova, M.Rajabaliyeva,
                    X.Ro‘ziyevalar filologiya fanlari falsafa doktori (PhD)
                    ilmiy dajasini olish uchun doktorlik dissertatsiyasi ustida
                    ish olib bormoqdalar. <br />
                  </p>
                  <h4>
                    Kafedra a’zolari Respublika va xorijiy nufuzli ilmiy
                    jurnallarda ilmiy ishlarini chop etishadi, ilmiy
                    anjumanlarda qannashishadi. Oxirgi yillarda chop etilgan
                    ilmiy maqolalardan namunalar:
                  </h4>
                  <p>
                    <br />• Sh.Z.Raxmatullayeva. "Ona tili va o`qish
                    savodxonligi" darslarida o`quv topshiriqlari ustida ishlash.
                    TIL VA ADABIYOT TA`LIMI. 2023-yil, 11-son
                    <br />• Sh.Z.Raxmatullayeva Boshlang‘ich ta‘limda o‘quv
                    topshiriqlarining o‘rni va ahamiyati . “Xalq ta’limi”
                    ilmiy-metodik jurnali 2023-yil 6-son (Noyabr-dekabr
                    <br />• N.A.Muminova. Til va adabiyot ta`limi. 2024-YIL.
                    1-SON "Temurnoma" asaridagi ba`zi antroponimlar xususida.
                    2024-YIL. 1- SON
                    <br />• N.A.Muminova Salohiddin Тoshkandiyning “Тemurnoma”
                    asaridagi tarixiy antroponimlar tahlili. "Zamonaviy
                    tilshunoslikda lingvomadaniyat va kompyuter lingvistikasi
                    muammolari va ishlab chiqarishga tadbiq etish masalalari"
                    Xalqaro ilmiy-amaliy anjumani materiallari. Qarshi 2023.10
                    207-211 б.
                    <br />• A.N.Hamdamov Меtaforik tasvir mahorati. Тил ва
                    адабиёт таълими 2023 йил 4 - сон A.N.Hamdamov. ҒАМ БАНДИНИНГ
                    БАДИИЙ ТАСВИРИ Тил ва адабиёт. 2023 йил 14-сон.
                    <br />• N.J.Oromova.International Journal of Advance
                    Scientific Research (ISSN - 2750-1396) VOLUME 03 ISSUE 12
                    ANALYSIS OF THE CURRENT STATE OF THE USE OF THEORETICAL
                    INFORMATION IN LITERARY EDUCATION December 28,2023
                    <br />• N.J.Oromova..Xorazm Ma’mun akademiyasi
                    axborotnomasi: ilmiy jurnal. – Xiva Adabiy ta`limda nazariy
                    ma`lumotlardan foydalanish pedagogik muammo sifatida
                    03.01.2024 Kafedra xodimlarining ilmiy natijalari quyidagi
                    monografiyalarda o‘z aksinini topgan:
                    <br />• F.Umurova. "Xushmuomalalikning murojaat semasini
                    gender ifodalanishi." O`zMu xabarlari.2023.12.02
                    <br />• F.Umurova. TIL VA ADABIYOT TA`LIMI "Xushmuomalalik
                    sotsiopragmatik hodisa sifatida" 2024-yil son.
                    <br />• X.Ro‘ziyeva. “Abdulla Oripov asarlarida leksik
                    sinonimlar” TIL VA ADABIYOT TA’LIMI Ilmiy-metodik elektron
                    jurnal. e-mail: tilvaadabiyotuz@gmail.com.
                    https://oak.uz/pages/4802 2023-yil 13-son 110-113-betlar.
                    <br />• I.I.Xudoynazarov. Umumiy kasbiy kompensiyalarni
                    rivojlantirishda akademik yozuvning o‘rni."Тил ва адабиёт"
                    журнали 2023 йил 14- сон.
                    <br />• M.A.Rajabaliyeva. Халқаро журнал номи: International
                    Journal of Formal Education. Volume: 02 Issue: 11| November
                    – 2023 ISSN: 2720-6874454-460 betlar Мақола номи: The role
                    of Poyon Ravshanov’s researches in studying the history of
                    uzbek classical literature
                    http://journals.academiczone.net/index.php/ijfe/article/view/1573
                    http://journals.academiczone.net/index.php/ijfe/article/view/1573/1363
                    <br />• M.A.Rajabaliyeva Poyon Ravshanovning nazmiy asarlari
                    tahlili “Sohibqiron Yulduzi” ilmiy jurnali, №4 son (54),
                    «Photo Express» nashriyoti, 2023-yil 58-62 betlar
                    <br />• G.Tilovova. DICTIONARY OF LINGUISTIC TERMS FOR
                    SECONDARY SCHOOLS AND ITS APPLICATION IN EDUCATION, ISSN:
                    2776-0960 Volume 4, Issue 6 June, 2023,Resarch Jet Journal
                    of Analysis and Invettions
                    <br />• G.Tilovova. O‘ZBEK LUG‘ATCHILIGI TARIXIGA BIR NAZAR,
                    So'z san'ati xalqaro jurnal,6-jild,5-son.
                    <br />• B.N.Sulaymonov. Til va adabiyot.uz. 2023-yil, 8-son.
                    Bobir Sulaymonov "O'zbek tilining izohli lug'atida ko'p
                    ma'noli so'zlar talqini.45-47 betlar.
                    <br />• B.N.Sulaymonov..Xorazm Ma'mun akademiyasi
                    axborotnomasi 2023-12/5. Sulaymonov B. "Izoh tipidagi o'quv
                    lug'atlar va uning asosiy turlariga doir mulohazalar".
                    184-187-betlar
                  </p>
                  <h4>
                    Kafedra xodimlarining ilmiy natijalari quyidagi
                    monografiyalarda o‘z aksinini topgan:
                  </h4>
                  <p>
                    • Norxadjayeva X.Sh.Rasmiy muloqotning lingvomadaniy
                    tadqiqi. Monografiya. Qarshi: “Intellekt”,2023. <br />
                    • Hamdamov A.N. Abdulla Oripov she’riyatida poetik tafakkur.
                    Monografiya. Toshkent:”JESSON PRESS”, 2024. <br />
                    • N.Muminova. Salohiddin Toshkandiyning “Temurnoma”
                    asaridagi antroponimlarning leksik-semantik xususiyatlari.
                    Qarshi. ‘Intellekt”. 2024. <br />
                    • Sh.Raxmatullayeva. Harakat tarzi shakllarining
                    lingvokulturologik va sotsiopragmatik xususiyati.
                    Toshkent:”JESSON PRESS”, 2018. <br />
                  </p>
                  <div className="row">
                    <div className="col-6">
                      <img src={BookImage1} alt="image book" />
                    </div>
                    <div className="col-6">
                      <img src={BookImage2} alt="image book" />
                    </div>
                  </div>
                  <h4> Kafedraning o‘quv-uslubiy faoliyati</h4>
                  <p>
                    Kafedra professor-o‘qituvchilari o‘quv faoliyatidan
                    tashqari, o‘quv-uslubiy ishlar bilan ham shug'ullanadilar.
                    Jumladan, darslik, o‘quv va uslubiy qo‘llanmalar yaratishda
                    samarali faoliyat olib borishmoqdalar.
                  </p>
                  <h3>
                    “O‘ZBEK TILI VA ADABIYOTI” kafedrasida o‘qitiladigan fanlar
                  </h3>
                  <table class="table table-hover">
                    <thead>
                      <tr>
                        <th scope="col">#</th>
                        <th scope="col">Fan nomi Bakalavriat</th>
                        <th scope="col">Fan haqida qisqacha ma’lumot</th>
                      </tr>
                    </thead>
                    <tbody>
                      {listSubjects.map((l, index) => (
                        <tr key={`people-${index + 1}`}>
                          <th scope="row">{index + 1}</th>
                          <td>{l.title}</td>
                          <td>{l.description}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                  <h4>3. Tadqiqotchilar va ilmiy ishlar tugrisida</h4>
                  <table class="table table-hover">
                    <thead>
                      <tr>
                        <th scope="col">#</th>
                        <th scope="col">
                          Tadqiqotchi professor-o'qituvchining F.I.Sh.
                        </th>
                        <th scope="col">Ilmiy darajasi, unvoni</th>
                        <th scope="col">Dissertatsiya ishi mavzusi</th>
                      </tr>
                    </thead>
                    <tbody>
                      {listUz.map((l, index) => (
                        <tr key={`user-${index}`}>
                          <th scope="row">{index + 1}</th>
                          <td>{l.name}</td>
                          <td>{l.status}</td>
                          <td>{l.description}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                  <h4>Ҳамкорлик</h4>
                  <p>
                    Кафедра мамлакатимиз ва хорижий илмий ва таълим ташкилотлари
                    билан ўқув-методик, илмий ва кадрлар мобиллиги бўйича
                    ҳамкорликда фаолият олиб боради. <br />
                    Мамлакимиздаги ташкилотлар: <br />
                    1. Nizomiy nomidagi Pedagogika universiteti билан pedagogika
                    sohasida ахборот технологиялари бўйича малакага эга
                    мутахассис тайёрлаш бўйича; <br />
                    2. Qarshi Davlat universiteti ("O‘zbek tili va adabiyoti"
                    kafedrasi) bilan ilmiy darajaga ega xodimlarni tayyorlash
                    masalasida; <br />
                  </p>
                  <h4>5. Kafedra tarkibi</h4>
                  <table class="table table-hover">
                    <thead>
                      <tr>
                        <th scope="col">#</th>
                        <th scope="col">Familiyasi, ismi, sharifi</th>
                        <th scope="col">Elektron pochta</th>
                      </tr>
                    </thead>
                    <tbody>
                      {userUz.map((l, index) => (
                        <tr key={`user-${index + 1}`}>
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
                  <h4>История и деятельность кафедры</h4>{" "}
                  <p>
                    Кафедра находится в составе Экономико-педагогического
                    университета в 2023 году. В рамках факультета «Иностранные
                    языки и физическая культура». доцент Ш. Под руководством
                    Рахматуллаевой «Узбекский язык и начал работать под
                    названием «литература». <br />
                    Факультет, в том числе узбекского языка и литературы
                    кафедра, деятельность в области дошкольного и школьного
                    образования подготовка специалистов высокого уровня поставил
                    перед собой главную цель. <br />
                  </p>
                  <h4>Просветительская деятельность кафедры</h4>{" "}
                  <p>
                    В настоящее время к.ф.н. кафедры узбекского языка и
                    литературы, доц. Х.Ш. Норхаджаева, к.т.н., доц. А.Н.
                    Хамдамов, кафедра Заведующая к.т.н., доц. Рахматуллаева,
                    к.т.н., доц. Муминова Н.А., к.б.н. Доцент Худойназаров,
                    к.б.н., Доцент Сулайманов Б.Н., преподаватели Собирова Ш. Н.
                    Оромова, Х. Розиева, Ф. Умурова, Г. Тиловова, кабинет
                    руководитель Р.Зиёдуллаева и другие активно работают. <br />
                    Профессора и преподаватели кафедры <br />
                    60110500 – «Начальное образование»; <br />
                    60110200 – «Дошкольное образование»; <br />
                    60111800 – «Иностранный язык и литература (русский)»; <br />
                    60111100 – «История»; <br />
                    на бакалавриате (дневной, заочной) форме обучения
                    прохождение теоретической и практической подготовки по
                    следующим предметам отправляется: <br />
                    • Родной язык и грамотность чтения и его преподавание
                    методология; <br />
                    • Основы художественного обучения; <br />
                    • Технология обучения «Хуснихат»; <br />
                    • Детская литература; <br />
                    • Методика преподавания родного языка <br />
                    • Практикум по родному языку; <br />
                    • Выразительное чтение; <br />
                    • Детская литература в начальном образовании; <br />
                    • Технология приветствия; <br />
                    • Лингвистический анализ; <br />
                    • Методика развития речи; <br />
                    • Развивать речь детей; <br />
                    • Узбекский язык <br />
                    • Использование узбекского языка на местах. <br />
                  </p>
                  <img src={ImageF} alt="image" />
                  <h4>• Научная деятельность кафедры</h4>
                  <p>
                    • «Узбекский язык как государственный язык» на кафедре
                    семинар проводится регулярно. Затем стул лекции докторантов
                    о своих научных результатах делают, диссертации обсуждают.{" "}
                    <br />
                    • Защиты докторских диссертаций: Норхаджаева Х.Ш. (в октябре
                    2023 г.) доктор философии. успешно защитился. <br />
                    • Рахматуллаева Ш.З., доцент кафедры, к.м.н. Он работает над
                    диссертацией (доктор наук). <br />
                    • Преподаватели кафедры: Оромова Н.Ж., Очилова С., Ш.
                    Собирова, Ф. Умурова, Г. Тиловова, М. Раджабалиева, Х.
                    Розиевалар, доктор филологических наук (PhD) на докторскую
                    диссертацию для получения научной степени работают. <br />
                  </p>
                  <h4>
                    Членами кафедры являются видные ученые республики и
                    зарубежья. они публикуют свои научные работы в журналах,
                    научных они истекают кровью на конгрессах. Опубликовано в
                    последние годы примеры научных статей:
                  </h4>
                  <p>
                    <br />• Ш.З. «Родной язык и чтение» работа над учебными
                    задачами на уроках «грамотности». ЯЗЫКОВОЕ И ЛИТЕРАТУРНОЕ
                    ОБРАЗОВАНИЕ. 2023, № 11
                    <br />• Ш.З. Образование в системе начального образования.
                    роль и важность заданий. «Народное образование»
                    научно-методический журнал, выпуск 6, 2023 г.
                    (ноябрь-декабрь
                    <br />• Н.А. Муминова. Языковое и литературное образование.
                    2024 ГОД. ВЫПУСК 1 О некоторых антропонимах в произведении
                    «Темурнома». 2024 ГОД. 1- НОМЕР
                    <br />• «Темурнома» Н.А. Муминова Салахиддина Тошканди
                    анализ исторических антропонимов в его творчестве.
                    "Современный Лингвистика и компьютерная лингвистика в
                    лингвистике проблемы и вопросы применения в производстве»
                    Материалы международной научно-практической конференции.
                    Против 2023.10 207-211 с.
                    <br />• А.Н. Хамдамов Мастерство метафорического
                    изображения. Язык и литературное образование 2023 - выпуск 4
                    Хамдамов А.Н. Хватит СКОРБИТЬ ХУДОЖЕСТВЕННЫЙ ОБРАЗ Язык и
                    литература. 14 декабря 2023 года.
                    <br />• Н.Дж. Оромова Международный журнал прогресса.
                    Научные исследования (ISSN - 2750-1396) ТОМ 03 ВЫПУСК 12
                    АНАЛИЗ СОВРЕМЕННОГО СОСТОЯНИЯ ИСПОЛЬЗОВАНИЯ ТЕОРЕТИЧЕСКИХ
                    ИНФОРМАЦИЯ В ЛИТЕРАТУРНОМ ОБРАЗОВАНИИ 28 декабря 2023
                    <br />• Н.Дж. Оромова Академия Хорезм Мамуна. информационный
                    бюллетень: научный журнал. - Хива теоретическое литературное
                    образование использование данных как педагогическая проблема
                    01.03.2024 Академические результаты сотрудников кафедры
                    следующие: отражено в монографиях:
                    <br />• Ф. Умурова. «Призыв вежливости гендерное выражение».
                    Новости УзМУ. 2023.12.02
                    <br />• Ф. Умурова. ЯЗЫКОВОЕ И ЛИТЕРАТУРНОЕ ОБРАЗОВАНИЕ
                    «Вежливость» как социопрагматический феномен» выпуск 2024
                    года.
                    <br />• Х. Розиева. «Лексикон в творчестве Абдуллы Орипова».
                    синонимы» ЯЗЫК И ЛИТЕРАТУРА ОБРАЗОВАНИЕ Научно-методическое
                    электронное журнал. электронная почта:
                    tilvaadabiyotuz@gmail.com. https://oak.uz/pages/4802 Выпуск
                    13, 2023 г., стр. 110-113.
                    <br />• И.И. Худойназаров. Общее профессиональное
                    вознаграждение роль академического письма в развитии
                    предмета «Язык и литература» журнал, выпуск 14, 2023 год.
                    <br />• М.А. Раджабалиева. Название международного журнала:
                    International Журнал формального образования. Том: 02
                    Выпуск: 11| ноябрь – ISSN 2023: 2720-6874454-460 страниц
                    Название статьи: Роль исследований Поёна Равшанова по
                    изучению истории Узбекская классическая литература
                    http://journals.academiczone.net/index.php/ijfe/article/view/1573
                    http://journals.academiczone.net/index.php/ijfe/article/view/1573/1363
                    <br />• Стихи М.А. Раджабалиевой Поён Равшанов анализ
                    научного журнала «Сахибкиран Йулудузи», выпуск №4 (54),
                    Издательство «Фото-Экспресс», 2023. С. 58-62.
                    <br />• Г. Тиловова. СЛОВАРЬ ЛИНГВИСТИЧЕСКИХ ТЕРМИНОВ ДЛЯ
                    СРЕДНЯЯ ШКОЛА И ЕЕ ПРИМЕНЕНИЕ В ОБРАЗОВАНИИ, ISSN: 2776-0960
                    Том 4, выпуск 6, июнь 2023 г., Research Jet Journal анализа
                    и изобретений
                    <br />• Г. Тиловова. ВЗГЛЯД НА ИСТОРИЮ УЗБЕКСКОГО СЛОВАРА,
                    Международный журнал словесного искусства, том 6, выпуск 5.
                    <br />• Б.Н. Сулайманов. Язык и литература.uz. 2023, № 8.
                    Бобир Сулайманов «В толковом словаре узбекского языка много
                    толкование смысловых слов стр. 45-47.
                    <br />• Сулайманов Б.Н.. Академия Хорезма Маъмуна
                    информационный бюллетень 2023-12/5. Сулайманов Б.
                    «Объясняющее исследование типа комментарии к словарям и их
                    основным видам». Страницы 184-187
                  </p>
                  <h4>
                    Научные результаты сотрудников кафедры следующие: отражено в
                    монографиях:
                  </h4>
                  <p>
                    • Норхаджаева Х.Ш. Лингвокультура формального общения.
                    изучать. Монография. Напротив: «Интеллект», 2023 год. <br />
                    • Хамдамов А.Н. Поэтическое мышление в поэзии Абдуллы
                    Орипова. Монография. Ташкент: «ДЖЕССОН ПРЕСС», 2024. <br />
                    • Н. Муминова. «Темурнома» Салахиддина Тошканди
                    лексико-семантические особенности антропонимов в его
                    творчестве. Противоположный. «Интеллект». 2024 год. <br />
                    • Ш. Рахматуллаева. Формы поведения лингвокультурные и
                    социопрагматические особенности. Ташкент: «ДЖЕССОН ПРЕСС»,
                    2018. <br />
                  </p>
                  <div className="row">
                    <div className="col-6">
                      <img src={BookImage1} alt="image book" />
                    </div>
                    <div className="col-6">
                      <img src={BookImage2} alt="image book" />
                    </div>
                  </div>
                  <h4>Учебно-методическая деятельность кафедры</h4>{" "}
                  <p>
                    Из образовательной деятельности профессоров-преподавателей
                    кафедры кроме того, они занимаются также учебно-методической
                    работой. В частности, в создании учебников,
                    учебно-методических пособий. работают эффективно.
                  </p>
                  <h3>
                    Предметы, преподаваемые на кафедре «УЗБЕКСКИЙ ЯЗЫК И
                    ЛИТЕРАТУРА»{" "}
                  </h3>
                  <table class="table table-hover">
                    <thead>
                      <tr>
                        <th scope="col">#</th>
                        <th scope="col">Имя субъекта Бакалавр</th>
                        <th scope="col">Краткие сведения о науке</th>
                      </tr>
                    </thead>
                    <tbody>
                      {listSubjectsRu.map((l, index) => (
                        <tr key={`people-${index + 1}`}>
                          <th scope="row">{index + 1}</th>
                          <td>{l.title}</td>
                          <td>{l.description}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                  <h4>3. Об исследователях и научных работах</h4>{" "}
                  <table class="table table-hover">
                    <thead>
                      <tr>
                        <th scope="col">#</th>
                        <th scope="col">
                          Профессор-преподаватель-исследователь Ф.И.О.{" "}
                        </th>
                        <th scope="col">Ученая степень, звание</th>
                        <th scope="col">Тема диссертации</th>
                      </tr>
                    </thead>
                    <tbody>
                      {listRu.map((l, index) => (
                        <tr key={`user-${index}`}>
                          <th scope="row">{index + 1}</th>
                          <td>{l.name}</td>
                          <td>{l.status}</td>
                          <td>{l.description}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                  <h4>Сотрудничество</h4>
                  <p>
                    Кафедра нашей страны и зарубежных научных и образовательных
                    организаций с учебно-методической, научной и кадровой
                    мобильностью работает в сотрудничестве. <br />
                    Организации в нашей стране: <br />
                    1. Педагогика с Педагогическим университетом им. Низоми
                    имеет квалификацию в области информационных технологий по
                    подготовке специалистов; <br />
                    2. Каршинский государственный университет («Узбекский язык и
                    литература» кафедра) для подготовки сотрудников с учеными
                    степенями относительно; <br />
                  </p>
                  <h4>5. Состав кафедры</h4>
                  <table class="table table-hover">
                    <thead>
                      <tr>
                        <th scope="col">#</th>
                        <th scope="col">Фамилия, имя, фамилия</th>
                        <th scope="col">Электронная почта</th>
                      </tr>
                    </thead>
                    <tbody>
                      {userRu.map((l, index) => (
                        <tr key={`user-${index + 1}`}>
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
                  <h4>History and activities of the department</h4>{" "}
                  <p>
                    The department is part of the Economic and Pedagogical
                    university in 2023. Within the framework of the Faculty of
                    Foreign languages ​​and physical education". Associate
                    Professor Sh. Under the guidance Rakhmatullaeva “Uzbek
                    language and began to work under called "literature". <br />
                    Faculty, including Uzbek language and literature department,
                    activities in the field of preschool and school education
                    training of high-level specialists delivered the main goal
                    in front of you. <br />
                  </p>
                  <h4>Educational activities of the department</h4>{" "}
                  <p>
                    Currently Ph.D. Department of Uzbek language and Literature,
                    Assoc. H.Sh. Norkhadzhaeva, Ph.D., Assoc. A.N. Khamdamov,
                    department Head Ph.D., Assoc. Rakhmatullaeva, Ph.D.,
                    Associate Professor Muminova N.A., Ph.D. Associate Professor
                    Khudoynazarov, Ph.D., Associate Professor Sulaimanov B.N.,
                    teachers Sobirova Sh.N. Oromova, Kh. Rozieva, F. Umurov, G.
                    Tilovova, office leader R. Ziyodullaeva and others are
                    actively working. <br />
                    Professors and teachers of the department <br />
                    60110500 – “Primary education”; <br />
                    60110200 – “Preschool education”; <br />
                    60111800 – “Foreign language and literature (Russian)”;{" "}
                    <br />
                    60111100 – “History”; <br />
                    on a bachelor's degree (full-time, part-time) form of study
                    passing theoretical and practical training in the following
                    items are sent: <br />
                    • Mother tongue and reading literacy and its teaching
                    methodology; <br />
                    • Fundamentals of art education; <br />
                    • Teaching technology “Husnihat”; <br />
                    • Children's literature; <br />
                    • Methodology of teaching native language <br />
                    • Workshop on native language; <br />
                    • Expressive reading; <br />
                    • Children's literature in primary education; <br />
                    • Welcome technology; <br />
                    • Linguistic analysis; <br />
                    • Methods of speech development; <br />
                    • Develop children's speech; <br />
                    • Uzbek language <br />
                    • Use of the Uzbek language locally. <br />
                  </p>
                  <img src={ImageF} alt="image" />
                  <h4>• Scientific activities of the department</h4>
                  <p>
                    • “Uzbek language as a state language” at the department The
                    seminar is held regularly. Then the doctoral lecture chair
                    They write about their scientific results and discuss
                    dissertations. <br />• Defense of doctoral dissertations:
                    Norkhadzhaeva Kh.Sh. (in October 2023) Ph.D. successfully
                    defended himself. <br />
                    • Rakhmatullaeva Sh.Z., associate professor of the
                    department, candidate of medical sciences. He's working on
                    dissertation (Doctor of Science). <br />• Teachers of the
                    department: Oromova N.Zh., Ochilova S., Sh. Sobirova, F.
                    Umurova, G. Tilovova, M. Rajabalieva, Kh. Rosievalar, Doctor
                    of Philology (PhD) for a doctorate dissertation to obtain a
                    scientific degree are working. <br />
                  </p>
                  <h4>
                    The members of the department are prominent scientists of
                    the republic and abroad. they publish their scientific works
                    in journals, scientific they bleed at congresses. Published
                    in recent years examples of scientific articles:
                  </h4>
                  <p>
                    <br />• Sh.Z. “Native language and reading” work on
                    educational tasks in literacy lessons. LANGUAGE AND LITERARY
                    EDUCATION. 2023, No. 11
                    <br />• Sh.Z. Education in the primary education system. the
                    role and importance of tasks. "Public Education" scientific
                    and methodological journal, issue 6, 2023 (November December
                    <br />• N.A. Muminova. Language and literary education. 2024
                    ISSUE 1 About some anthroponyms in the work "Temurnoma".
                    2024 1- NUMBER
                    <br />• “Temurnoma” N.A. Muminova Salahiddin Toshkandi
                    analysis of historical anthroponyms in his work. "Modern
                    Linguistics and Computational Linguistics in linguistic
                    problems and issues of application in production" Materials
                    of the international scientific and practical conference.
                    Against 2023.10 207-211 p.
                    <br />• A.N. Khamdamov Mastery of the metaphorical Images.
                    Language and Literary Education 2023 - Issue 4 Khamdamov
                    A.N. STOP MOURNING THE ARTISTIC IMAGE Language and
                    literature. December 14, 2023.
                    <br />• N.J. Oromova International Journal of Progress.
                    Scientific Research (ISSN - 2750-1396) VOLUME 03 ISSUE 12
                    ANALYSIS OF THE CURRENT STATE OF THE USE OF THEORETICAL
                    INFORMATION IN LITERARY EDUCATION December 28, 2023
                    <br />• N.J. Oromova Academy Khorezm Mamun. informational
                    bulletin: scientific journal. - Khiva theoretical literary
                    education data use as a pedagogical problem 03/01/2024
                    Academic results of department staff the following:
                    reflected in the monographs:
                    <br />• F. Umurova. "Politeness Appeal Gender Expression."
                    UzMU news. 2023.12.02
                    <br />• F. Umurova. LANGUAGE AND LITERARY EDUCATION
                    “Politeness” as a sociopragmatic phenomenon” issue 2024 of
                    the year.
                    <br />• H. Rozieva. “Lexicon in the works of Abdulla
                    Oripov.” synonyms" LANGUAGE AND LITERATURE EDUCATION
                    Scientific and methodological electronic magazine. Email:
                    tilvaadabiyotuz@gmail.com. https://oak.uz/pages/4802 Issue
                    13, 2023, pp. 110-113.
                    <br />• I.I. Khudoynazarov. General professional rewards
                    role of academic writing in development subject "Language
                    and Literature" magazine, issue 14, 2023.
                    <br />• M.A. Rajabalieva. Name of the international journal:
                    International Journal of Formal Education. Volume: 02 Issue:
                    11| November – ISSN 2023: 2720-6874454-460 pages Title of
                    the article: The role of Poyon Ravshanov’s research on
                    studying history Uzbek classical literature
                    http://journals.academiczone.net/index.php/ijfe/article/view/1573
                    http://journals.academiczone.net/index.php/ijfe/article/view/1573/1363
                    <br />• Poems by M.A. Rajabalieva Poyon Ravshanov analysis
                    scientific journal “Sahibkiran Yuluduzi”, issue No. 4 (54),
                    Publishing house "Photo-Express", 2023. pp. 58-62.
                    <br />• G. Tilovova. DICTIONARY OF LINGUISTIC TERMS FOR
                    SECONDARY SCHOOL AND ITS APPLICATION IN EDUCATION, ISSN:
                    2776-0960 Volume 4, Issue 6, June 2023, Research Jet Journal
                    of Analysis and inventions
                    <br />• G. Tilovova. A LOOK AT THE HISTORY OF THE UZBEK
                    DICTIONARY, International Journal of Word Arts, Volume 6,
                    Issue 5.
                    <br />• B.N. Sulaymanov. Language and literature.uz. 2023,
                    no. 8. Bobir Sulaimanov “The explanatory dictionary of the
                    Uzbek language contains many interpretation of semantic
                    words pp. 45-47.
                    <br />• Sulaimanov B.N.. Academy of Khorezm Mamun newsletter
                    2023-12/5. Sulaymanov B. “Explanatory research such as
                    comments on dictionaries and their main types". Pages
                    184-187
                  </p>
                  <h4>
                    The scientific results of the department staff are as
                    follows: reflected in monographs:
                  </h4>
                  <p>
                    • Norkhadzhaeva Kh.Sh. Linguistic culture of formal
                    communication. study. Monograph. Opposite: "Intelligence",
                    2023. <br />
                    • Khamdamov A.N. Poetic thinking in Abdullah's poetry
                    Oripova. Monograph. Tashkent: JESSON PRESS, 2024. <br />
                    • N. Muminova. “Temurnoma” by Salahiddin Toshkandi
                    lexico-semantic features of anthroponyms in their
                    creativity. Opposite. "Intelligence". 2024 <br />• Sh.
                    Rakhmatullaeva. Forms of behavior are linguocultural and
                    sociopragmatic features. Tashkent: "JESSON PRESS", 2018.{" "}
                    <br />
                  </p>
                  <div className="row">
                    <div className="col-6">
                      <img src={BookImage1} alt="image book" />
                    </div>
                    <div className="col-6">
                      <img src={BookImage2} alt="image book" />
                    </div>
                  </div>
                  <h4>
                    Educational and methodological activities of the department
                  </h4>{" "}
                  <p>
                    From the educational activities of professors and teachers
                    departments, in addition, they are also engaged in
                    educational and methodological work. In particular, in the
                    creation of textbooks, teaching aids. work efficiently.
                  </p>
                  <h3>
                    Subjects taught at the department “UZBEK LANGUAGE AND
                    LITERATURE»{" "}
                  </h3>
                  <table class="table table-hover">
                    <thead>
                      <tr>
                        <th scope="col">#</th>
                        <th scope="col">Subject name Bachelor</th>
                        <th scope="col">Brief facts about science</th>
                      </tr>
                    </thead>
                    <tbody>
                      {listSubjectsEn.map((l, index) => (
                        <tr key={`people-${index + 1}`}>
                          <th scope="row">{index + 1}</th>
                          <td>{l.title}</td>
                          <td>{l.description}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                  <h4>3. About researchers and scientific works</h4>{" "}
                  <table class="table table-hover">
                    <thead>
                      <tr>
                        <th scope="col">#</th>
                        <th scope="col">
                          Professor-teacher-researcher Full name{" "}
                        </th>
                        <th scope="col">Academic degree, title</th>
                        <th scope="col">Dissertation topic</th>
                      </tr>
                    </thead>
                    <tbody>
                      {listEn.map((l, index) => (
                        <tr key={`user-${index}`}>
                          <th scope="row">{index + 1}</th>
                          <td>{l.name}</td>
                          <td>{l.status}</td>
                          <td>{l.description}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                  <h4>Cooperation</h4>
                  <p>
                    Department of our country and foreign scientific and
                    educational organizations with educational, methodological,
                    scientific and personnel mobility works in collaboration.{" "}
                    <br />
                    Organizations in our country: <br />
                    1. Pedagogy with the Pedagogical University named after.
                    Nizomi has qualifications in information technology training
                    of specialists; <br />
                    2. Karshi State University (“Uzbek language and literature"
                    department) for training employees with scientists degrees
                    relative; <br />
                  </p>
                  <h4>5. Composition of the department</h4>
                  <table class="table table-hover">
                    <thead>
                      <tr>
                        <th scope="col">#</th>
                        <th scope="col">Last name, first name, last name</th>
                        <th scope="col">Email</th>
                      </tr>
                    </thead>
                    <tbody>
                      {userEn.map((l, index) => (
                        <tr key={`user-${index + 1}`}>
                          <th scope="row">{index + 1}</th>
                          <td>{l.name}</td>
                          <td>{l.email}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}{" "}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default InstructorDetailsMain;
