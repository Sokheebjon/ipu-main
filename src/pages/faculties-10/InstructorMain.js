import instructors from "../../data/Instructors.json";
import { useIntl } from "react-intl";
import { getProductName } from "../../helpers/general";
import ImageF from "../../assets/images/faculties-8/image.png";
import BookImage1 from "../../assets/images/faculties-8/book-1.png";
import BookImage2 from "../../assets/images/faculties-8/book-2.png";

const InstructorDetailsMain = () => {
  const intl = useIntl();
  const instructor = instructors.find((b) => b.kafedra == "10");
  const lang = (
    JSON.parse(localStorage.getItem("i18nConfig")) || { selectedLang: "uz" }
  )?.selectedLang;

  let listSubjects = [
    {
      title: "O‘qish va yozuv amaliyoti",
      description:
        "Fanni o'qitishdan maqsad talabalarning SEFR B2 daraja talabiga javob beruvchi IELTS talablari asosida tuzib chiqilgan matnlarini o'qib, tushunishlari va turli mavzularga oid matnlarni yoza olish mahoratiga ega bo'lishlari va egallangan o'qish va yozish ko'nikmalarini kasbiy va ilmiy faoliyatda erkin qullay olishlarini ta'minlashdir,",
    },
    {
      title: "Amaliy tilshunoslik",
      description:
        "Talabalarga kasbiy yo'nalish doirasida chet tilini egallash Umum Yevropa standartlariga ko'ra C1, ularning ijtimoiy-madaniy muloqot malakalarini rivojlantirish, xususan to'g'ri talaffuz to'g'risidagi nazariy va amaliy bilimlarni takomillashtirish hamda egallangan bilim, ko'nikma va malakalarini kasbiy ilmiy faoliyatda erkin qo'llay olishlarini ta'minlashdan iborat",
    },
    {
      title: "Nutq ko‘nikmalari integratsiyasi",
      description:
        "Fanni o'qitishdan maqsad - talabalarga tilning og'zaki va yozma shakllarini integrallashgan holda o'rganish, ulaming turli kontekstlardagi muloqot malakalarini rivojlantirish, xususan o'rganilayotgan chet til ko'nikmalari to'g'risidagi amaliy va nazariy bilimlarini takomilashtirish hamda egallangan bilim, ko'nikma, malakalarini kasbiy va ilmiy faoliyatda erkin qo'llay olish tanqidiy va ijodiy fikrlash, axborotni mustaqil izlash, tahlil qilish kompetensiyalari va malakalarining rivojlanishiga xizmat qilib, o'quvchilaring bilim darajasini baholashda xalqaro PIRLS va boshqa dasturtarda doimiy ishtirok etishlarini ta'minlashdir.",
    },
    {
      title: "Nutq malakalari integratsiyasis",
      description:
        "Talabalarga tilning og'zaki va yozma shakllarini integrallashgan holda o'rgatish, ularning turli kontekstlardagi muloqot malakalarini rivojlantirish, xususan o'rganilayotgan chet til ko'nikmalari to'g'risidagi amaliy va nazariy bilimlarini takomillashtirish hamda egallangan bilim, ko'nikma, malakalarini kasbiy va ilmiy faoliyatda erkin qo'llay olish, tanqidiy va ijodiy fikrlash, axborotni mustaqil izlash, tahlil qilish kompetensiyalari va malakalarining rivojlanishiga xizmat qilib, o'quvchilaming bilim darajasini baholashda xalqaro PIRLS va boshqa dasturlarda doimiy ishtirok etishlarini ta'minlashdir.",
    },
    {
      title: "Til aspektlarini o‘qitish amaliyoti",
      description:
        "Talabalarga tilning uch muhim aspekti: grammatika, leksika va diskurs tahlilini o'rgatish, muloqotda to'g'ri qo'llash malakalarini rivojlantirish va til aspektlari to'g'risidagi amaliy va nazariy bilimlarini takomillashtirish hamda egallangan bilim, ko'nikma, malakalarini kasbiy va ilmiy faoliyatda erkin qo'llay olishlarini ta'minlash, tanqidiy va ijodiy fikrlash, axborotni mustagil izlash, tahlil qilish kompetensiyalari va malakalarining rivojlanishiga xizmat qilib, o'quvchilarning bilim darajasini baholashda xalqaro PIRLS va boshqa dasturlarda doimiy ishtirok etishdan iborat.",
    },
    {
      title: "Nazariy til aspektlari",
      description:
        "Mazkur sohada ta'lim oluvchilari bo'lajak kasbiy faoloyatlarida zarur bo'lgan nazariy bilimlar bilan qurollantirishdan iborat. Mazkur maqsadga erishish talabalarning chet til tovush sistemasi, leksikasi va til qurilishini mukammal o'rganishlarini talab etadi.",
    },
    {
      title: "Ingliz tili o‘qitish va baholashning xalqaro standartlari",
      description:
        "Fanni o'qitishdan maqsad - talabalarda til o'rganuvchilaming til bilish darajasini aniqlashda va baholashda munosib topshiriq tanlay olish hamda ulami CEFR (Common European Framework of Reference) mezonlariga mos ravishda baholay olish ko'nikmalarini shakllantirishga mo'ljallangan. ",
    },
    {
      title: "Lisoniy tahlil",
      description:
        "Fanni o‘qitishdan maqsad – bo‘lajak boshlang‘ich sinf o‘qituvchilarini ona tili matnining lingvistik tahlili bilan batafsil tanishtirish. Talabalar olgan bilimlarni mashqlar badiiy adabiyotimizning barcha turlari bo‘yicha mavjud turli matnlardan olingan Grammatik kartochkalar, mashqlar, asar tahlil qoliplari, test savollari yordamida mustahkamlab borish.",
    },
    {
      title: "Chet tili o‘qitish metodikasi",
      description:
        "Fanni o'qitishdan maqsad - talabalarga umumiy o'rta ta'lim maktablari, akademik litsey va kollej o'quvchilariga chet tilini o'rgata olish malaka va ko'nikmalarini shakllantirish va rivojlantirishga metodik yordam ko'rsatish. Fan bo'yicha bilimlarni nazariy asoslarini, metodikaning asosiy tushunchalari, mazmuni, tamoyillarini o'rgatish hamda ularni amaliyotda tatbiq etish ko'nikmasini hosil qilishdan iborat. ",
    },

    {
      title: "Ingliz tili stilistikasi",
      description:
        "Fanning asosiy vazifasi — stilistik ma'nolarning turlari, ularning paradigmatik va sintagmatik jihatdan ifodalanishi, lug'at tarkibining tarixiy, hududiy, ijtimoiy differentsiatsiyasi, nemis tili stilistikasining fonetik, grammatik va leksik vositalar yordamida aks etishi, tilning leksik va stilistik qatlamlari, stilistik bo'yoqlar va janrlar haqidagi bilimlar majmuasini tahlil qilishga o'rgatishdir. ",
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
      name: "Polatov Asxad Muxamedjanovich",
      status: "f.-m.f.d., professor",
      description:
        "Konstruktion materiallarning chiziqsiz deformatsiyalanish masalalarini chekli elementlar usulida yechish algoritmlari va sonli modellashtirish ",
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
      name: "Prof. Daniyeva Maysara Djamalovna",
      email: "maysaradaniyeva@gmail.com",
    },
    {
      name: "Feruza Otamurodova",
      email: "otamurodova.feruza@gmail.com",
    },
    {
      name: "Elchayev Zohidjon",
      email: "elchaevzohidjon@gmail.com",
    },
    {
      name: "Ravshan Eshonqulov",
      email: "eshonqulovravshan95@gmail.com",
    },
    {
      name: "Mohinur Usmonova",
      email: "mokhinurusmanova@gmail.com",
    },
    {
      name: "Xurshida Olimova",
      email: "khurshida88@gmail.com",
    },
    {
      name: "Fotima Choriyeva",
      email: "chorievafatima@gmail.com",
    },
    {
      name: "Aziza Ruzibayeva",
      email: "ruzibaevaaziza@gmail.com",
    },
    {
      name: "Sardor Nazarov",
      email: "sardornazarov77777@gmail.com",
    },
    {
      name: "Ozoda Eshqobilovba",
      email: "eshqobilova77@gmail.com",
    },
    {
      name: "Gavhar Rahmonova",
      email: "gavkharrakhmonova@gmail.com",
    },
  ];

  let userRu = [
    {
      name: "Проф. Даниева Майсара Джамаловна",
      email: "maysaradaniyeva@gmail.com",
    },
    {
      name: "Феруза Отамуродова",
      email: "otamurodova.feruza@gmail.com",
    },
    {
      name: "Зохиджон Эльчаев",
      email: "elchaevzohidjon@gmail.com",
    },
    {
      name: "Равшан Эшонкулов",
      email: "eshonqulovravshan95@gmail.com",
    },
    {
      name: "Мохинур Усманова",
      email: "mokhinurusmanova@gmail.com",
    },
    {
      name: "Хуршида Олимова",
      email: "khurshida88@gmail.com",
    },
    {
      name: "Фатима Чориева",
      email: "chorievafatima@gmail.com",
    },
    {
      name: "Азиза Рузибаева",
      email: "ruzibaevaaziza@gmail.com",
    },
    {
      name: "Сардор Назаров",
      email: "sardornazarov77777@gmail.com",
    },
    {
      name: "Озода Эшкобилова",
      email: "eshqobilova77@gmail.com",
    },
    {
      name: "Гавхар Рахмонова",
      email: "gavkharrakhmonova@gmail.com",
    },
  ];

  let userEn = [
    {
      name: "Prof. Daniyeva Maysara Djamalovna",
      email: "maysaradaniyeva@gmail.com",
    },
    {
      name: "Feruza Otamurodova",
      email: "otamurodova.feruza@gmail.com",
    },
    {
      name: "Zohidjon Elchayev",
      email: "elchaevzohidjon@gmail.com",
    },
    {
      name: "Ravshan Eshonqulov",
      email: "eshonqulovravshan95@gmail.com",
    },
    {
      name: "Mohinur Usmonova",
      email: "mokhinurusmanova@gmail.com",
    },
    {
      name: "Xurshida Olimova",
      email: "khurshida88@gmail.com",
    },
    {
      name: "Fotima Choriyeva",
      email: "chorievafatima@gmail.com",
    },
    {
      name: "Aziza Ruzibayeva",
      email: "ruzibaevaaziza@gmail.com",
    },
    {
      name: "Sardor Nazarov",
      email: "sardornazarov77777@gmail.com",
    },
    {
      name: "Ozoda Eshqobilovba",
      email: "eshqobilova77@gmail.com",
    },
    {
      name: "Gavhar Rahmonova",
      email: "gavkharrakhmonova@gmail.com",
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
                    Kafedra 2022- yil "Umummetodologik fanlar" kafedrasi
                    tarkibida bòlgan. 2023- yil 1-martdan "Filologiya va
                    pedagogika fanlari" kafedrasi ajralib chiqqan. Filologiya va
                    pedagogika fanlari kafedrasida 4 ta yònalish xorijiy tillar
                    (ingliz tili), xorijiy tillar (rus tili), Boshlanģich ta'lim
                    va maktabgacha ta'lim yònalishlari faoliyat olib borgan.{" "}
                    <br />
                    2023- yil avgust oyida Universitet Kengashi qarori bilan 31-
                    avgustdan 'Xorijiy tillar' kafedrasi nomi berilgan hamda
                    uning tasarrufida xorijiy til (xorijiy til va adabiyot
                    (ingliz tili), xorijiy til va adabiyot (rus tili) va xorijiy
                    til va adabiyot (nemis tili ) yònalishlari òz faoliyatini
                    olib bormoqda. <br />
                    2023- yil 1- martdan boshlab prof. Daniyeva.M.Dj 'Xorijiy
                    tillar' kafedrasi mudiri vazifasini bajarib kelmoqda.
                    Kafedra o‘qituvchilari pedagogik faoliyat va ilmiy tadqiqot
                    ishlari bilan mashg‘ul va ular orasida ko‘plab fan nomzodi
                    va doktorlik dissertatsiyalarini himoya qilganlar bor.
                  </p>
                  <h4> Kafedraning o‘quv faoliyati</h4>
                  <p>
                    Hozirgi kunda Xorijiy tillar kafedrasida f.f.d., prof.
                    Daniyeva Maysara Djamalovna, dots. Otamurodova Feruza, katta
                    o‘qituvchilar Elchayev Zohidjon Axmatovich, Choriyeva Fotima
                    Talibovna, Olimova Xurshida Vaydullayevna, Usmonova Mohinur
                    Baxtiyor qizi, Eshonqulov Ravshan Toxirovich, o‘qituvchilar
                    Raxmonova Gavhar, Ruzibayeva Aziza, Nazarov Sardor,
                    Eshqobilova Ozoda, kabinet mudiri Mahbuba Sag‘dullayeva va
                    boshqalar faol mehnat qilmoqdalar. <br />
                    Kafedra professor-o‘qituvchilari tomonidan
                    <br />
                    Kafedra professor-o’qituvchilari tomonidan <br />
                    60111800- Xorijiy til va adabiyoti (ingliz tili va
                    adabiyoti) bakalavriat (kunduzgi) ta’limi yo‘nalishida
                    quyidagi fanlardan nazariy va amaliy mashg’ulotlar olib
                    boriladi: <br />
                    • O‘qish va yozuv amaliyoti; <br />
                    • Nutq ko‘nikmalari integratsiyasi; <br />
                    • Til aspektlarini o‘qitish amaliyoti; <br />
                    • Amaliy tilshunoslik; <br />
                    • Nutq malakalari integratsiyasi; <br />
                    • Ingliz tili o‘qitish va baholashning xalqaro standartlari
                    ; <br />
                    • Ingliz tili o‘qitish metodikasi; <br />
                    • Chet tillarini o‘qitishning integrallashgan kursi; <br />
                    • Ingliz tili nazariy kursi; <br />
                    • Ingliz tili stilistikasi; <br />
                    • Amaliy fonetika; <br />
                    • Madaniyatlararo muloqot; <br />
                  </p>
                  <h4>Kafedraning ilmiy faoliyati</h4>
                  <p>
                    Professor M.Dj.Daniyeva rahbarligida 10.00.04 – Yevropa,
                    Amerika va Avstraliya xalqlari tili va adabiyoti hamda
                    10.00.06 - “Qiyosiy adabiyotshunoslik, chog’ishtirma
                    tilshunoslik va tarjimashunoslik “sonli usullari”
                    ixtisosligidagi seminar mavzular muntazam amal qilmoqda.
                    Unda kafedra erkin tdqiqotchilari o‘z ilmiy natijalarini
                    bo‘yicha ma’ruzalar qilishadi, dissertatsiyalar mavzusi
                    bo‘yicha bajarilgan ishlar muhokama qilinadi. <br />
                    Ilmiy unvon olganlar : Atamuodova F.T. (2024) <br />
                    PhD dissertasiyalari himoyalari: Fayziyeva K (2024y) <br />
                    Kafedra a’zolari Respublika va xorijiy nufuzli ilmiy
                    jurnallarda ilmiy ishlarini chop etishadi, ilmiy
                    anjumanlarda qannashishadi. Oxirgi yillarda chop etilgan
                    ilmiy maqolalrdan namunalar: <br />
                    <br />• Daniyeva M.Dj.Язык выполняет коммуникативную
                    функцию. Научный электронный журнал .Академическая
                    публицистика. ISSN 2541-8076. № 4-1. Уфа: Россия, 2023. - С.
                    181-185
                    <br />• Daniyeva M.Dj. Научный электронный журнал
                    Академическая публицистика. ISSN 2541-8076. № 4-1. Уфа:
                    Россия, 2023. - С. 181-185
                    <br />• Atamurodova F.T.Reasons for the emergence of
                    dystopia as a genre. Oriental Journal of Academic and
                    multidisciplinary researchvolume1 Issue 2. 2023, November2
                    <br />• Atamurodova F.T. Utopian views in different eras and
                    its evolution. International Journal of Formal
                    education.ISSN 2720-6874. Open Access Journal. Volume2 Issue
                    12. December -2023
                    <br />• Choriyeva F.T. Linvo-metodik tajribalarni xorijiy
                    til o‘qituvchilarida shakllantirish. Taʼlim, fan va
                    innovatsiya” maʼnaviy-marifiy, ilmiy-uslubiy jurnalining
                    2024-yil 2-soni. ISSN 2181-8274
                    <br />• Choriyeva F. Chet tili ta’limida faoliyat
                    konsepsiyaning mohiyati. МУАЛЛИМ ХАМ УЗЛИКСИЗ БИЛИМЛЕНДИРИР
                    2023. 3/1 cан
                    <br />• Eshonkulov, Ravshan Tokhirovich. EXPLORING THE
                    IMPACT OF TECHNOLOGY ON LANGUAGE, PARTICULARLY IN THE
                    CONTEXT OF MODERN ENGLISH. 59-67
                    <br />• Olimova Khurshida Vaydillayevna. SEMASIOLOGICAL AND
                    SEMANTIC CHARACTERISTICS OF PROPER NOUNS *Asian Journal of
                    Multidimensional Research .ISSN: 2278-4853 . Vol. 12, Issue
                    2, February 2023 .SJIF 2022 = 8.179 .https://tarj.in Asian
                    Journal of Multidimensional Research DOI:
                    10.5958/2278-4853.2023.00026.5
                    <br />• Rakhmonova Gavkhar Nuritdinovna, . (2024).
                    COMPREHENSIVE EXAMINATION OF DERIVATIONAL TECHNIQUES IN
                    UZBEK LANGUAGE. CURRENT RESEARCH JOURNAL OF PHILOLOGICAL
                    SCIENCES, 5(02), 23–27.
                    Https://doi.org/10.37547/philological-crjps-05-02-05
                    <br />• Rahmonova Gavhar Nuritdinovna. 2023. “COMPARATIVE
                    ANALYSIS OF DERIVATIONAL PROCESSES IN ENGLISH AND UZBEK
                    VOCABULARY SYSTEMS”. Web of Humanities: Journal of Social
                    Science and Humanitarian Research 1 (7):30-34.
                    Https://webofjournals.com/index.php/9/article/view/223.
                    <br />• Eshqobilova O. Fluent speech, Former vocabulary,
                    grammar and communication style INNOVATIONS IN TECHNOLOGY
                    AND SCIENCE EDUCATION (SEPTEMBER) 2023 . VOLUME 2 .ISSUE 14
                    ISSN 2171-381X SJIF 2023 5.305
                    <br />• Ruzibayeva A. Xorijiy tillarni o ‘qitishning
                    zamonaviy tendensiyalari masalalari (muammo va Yechimlar)”
                    Xalqaro onlayn ilmiy-amaliy konferensiya to‘plami Jizzax
                    2023
                  </p>
                  <h4>Kafedraning o‘quv-uslubiy faoliyati</h4>
                  <p>
                    Kafedra professor-o‘qituvchilari o‘quv faoliyatidani
                    tashqari, o‘quv-uslubiy ishlar bilan ham shug'ullanadilar.
                    Jumladan, darslik, o‘quv va uslubiy qo‘llanmalar yaratishda
                    samarali faoliyat olib borishmoqdalar. <br />
                    2023-2024 yillarda kafedra professor-o‘qituvchilari
                    tomonidan bir qator darslik, o‘quv va uslubiy qo‘llanmalar
                    tayyorlangan: <br />
                    1. Atamurodova F.T. The Representatives of the 20th century
                    English Literature. Bosma Uslubiy qo’llanma.BBK: 366.11.
                    Qarshi. “Intellekt” nashriyoti, 2023,102 b. ISBN 978-9910
                    757-47-3. 102 <br />
                    2. Atamurodova F.T. British Literature: early 20th century.
                    Bosma Uslubiy qo’llanma.UDK: 438.6.438.021.Qarshi
                    “Intellekt” nashriyoti, 2023, 64 b. 64 b. <br />
                    3. Atamurodova F. T. Methodological manual. British
                    Literature Early 20th Century. Qarshi “Intellekt” Nashriyoti
                    2023. <br />
                    4. Daniyeva Maysara Jamalovna. Monografiya. So’z birikmalari
                    pragmatikasi. Qarshi “Intellekt” Nashriyoti 2023. <br />
                  </p>
                  <h4>
                    Xalqaro va respublika nufuzli tanlovlarida sovrinli
                    o‘rinlarni qo‘lga kiritgan va mukofot (diplom)larga sazovor
                    bo‘lgan professor-o‘qituvchilar
                  </h4>
                  <p>
                    Dosent M.X. Hakimov 2007 yilda “Inglizcha-ruscha-o‘zbekcha
                    komp’yuter ilmi bo‘yicha izohli lug’at” nomli o‘quv
                    qo‘llanmasi «Yilning eng yaxshi darsligi va o‘quv
                    qo‘llanmasi muallifi» Respublika tanlovining g’olibi
                    sifatida II darajali diplom va pul mukofoti bilan
                    taqdirlangan. <br />
                    2014 yilda dosentlar Hakimov M.X., Gaynazarov S.M.
                    “Berilganlar bazasini boshqarish tizimlari” nomli oliy o‘quv
                    yurtlari uchun darsligi «Yilning eng yaxshi darsligi va
                    o‘quv qo‘llanmasi muallifi» Respublika tanlovining g’olibi
                    sifatida I darajali diplom va pul mukofoti bilan
                    taqdirlangan. <br />
                    2018 yilda Hakimov M.X. va 2021 yilda Polatov A.M.
                    International Academy of Injineering (Xalqaro Muxandislar
                    Akademiyasi)ning muxbir a’zoligiga saylanganlar. <br />{" "}
                    Kafedrasi o‘qituvchisi R.X.Baxromov 2020 yilda Koronavirus
                    pandemiyasi davrida fidoyilik ko‘rsatgan xodimlarning
                    mehnatini e’tirof etish, ularni rag’batlantirish maqsadida
                    Davlatimiz rahbarining 2020 yil 26-maydagi “Mehr-saxovat”
                    ko‘krak nishonini ta’sis etish to‘g’risida”gi PF-5999-son
                    Farmoniga asosan, pandemiyaga qarshi kurashish, aholi
                    salomatligini muntazam ravishda muhofaza qilib borishda
                    jonbozlik ko‘rsatgan Oliy va o‘rta maxsus ta’lim vazirligi
                    va oliy ta’lim muassasalarida faoliyat yuritib kelayotgan
                    o‘z kasbining chinakam fidoyi xodimi “Mehr-saxovat” ko‘krak
                    nishoni bilan taqdirlandi. <br /> 2023 yilda professor
                    Polatov Asxad Muxamedjanovich O‘zbekiston faxriylarining
                    ijtimoiy faoliyatini qo‘llab – quvvatlash “Nuroniy”
                    jamg’armasi Vasiylik Kengashi qarori bilan “MEHNAT FAXRIYSI
                    ” ko‘krak nishoni bilan taqdirlangan.
                  </p>

                  <h3>4. Xorijiy tillar kafedrasida o‘qitiladigan fanlar</h3>
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
                    Кафедра 2022 Кафедра «Общие методологические науки» включен
                    в состав. С 1 марта 2023 года «Филология и Отделился
                    факультет педагогических наук». Филология и 4 основных
                    иностранных языка на факультете педагогических наук
                    (английский), иностранные языки (русский), Начальное
                    образование и зоны дошкольного образования действовали
                    активно. <br />
                    В августе 2023 года решением Совета университета от 31 числа
                    С августа кафедра получила название «Иностранные языки».
                    иностранный язык в его распоряжении (иностранный язык и
                    литература (английский), иностранный язык и литература
                    (русский) и иностранный язык и литература (немецкий язык).
                    принимает <br />С 1 марта 2023 года проф. Даниева.М.Dj
                    'Иностранный исполняет обязанности заведующего кафедрой
                    языков. Преподаватели кафедры занимаются педагогической
                    деятельностью и научными исследованиями. заняты своей
                    работой и среди них много кандидатов наук и есть те, кто
                    защитил докторские диссертации.
                  </p>
                  <h4>Просветительская деятельность кафедры</h4>{" "}
                  <p>
                    В настоящее время к.ф.н., профессор кафедры иностранных
                    языков. Даниева Майсара Джамаловна, доц. Отамуродова Феруза,
                    ст. преподаватели Эльчаев Зохиджон Ахматович, Чориева Фатима
                    Талыбовна Олимова Хуршида Вайдуллаевна, Усманова Мохинур
                    Дочь Бахтияра, Эшанкулов Равшан Тахирович, педагоги
                    Рахмонова Гавхар, Рузибаева Азиза, Назаров Сардор,
                    Эшкобилова Озода, глава кабинета министров Махбуба
                    Сагдуллаева и другие активно работают. <br />
                    Профессора и преподаватели кафедры
                    <br />
                    Профессора и преподаватели кафедры <br />
                    60111800- Иностранный язык и литература (Английский язык и
                    литература) в сфере довузовского (дневного) образования
                    прохождение теоретической и практической подготовки по
                    следующим предметам отправляется: <br />
                    • Практика чтения и письма; <br />
                    • Интеграция речевых навыков; <br />
                    • Практика преподавания языковых аспектов; <br />
                    • Прикладная лингвистика; <br />
                    • Интеграция речевых навыков; <br />
                    • Международные стандарты преподавания и оценки английского
                    языка ; <br />
                    • Методика преподавания английского языка; <br />
                    • Интегрированный курс обучения иностранным языкам; <br />
                    • Теоретический курс английского языка; <br />
                    • Английская стилистика; <br />
                    • Практическая фонетика; <br />
                    • Межкультурная коммуникация; <br />
                  </p>
                  <h4>Научная деятельность кафедры</h4>
                  <p>
                    10.00.04 – Европа под руководством профессора М.Даниева,
                    Язык и литература американских и австралийских народов и
                    10.00.06 - «Сравнительное литературоведение, перекрестные
                    ссылки». «числовые методы» лингвистики и переводоведения
                    Темы семинаров применяются регулярно. Независимые
                    исследователи кафедры представляют свои научные результаты
                    они читают лекции по теме диссертаций работы, выполненные на{" "}
                    <br />
                    Ученые звания: Атамуодова Ф.Т. (2024) <br />
                    Защита кандидатских диссертаций: Файзиева К. (2024г) <br />
                    Членами кафедры являются видные ученые республики и
                    зарубежья. они публикуют свои научные работы в журналах,
                    научных они истекают кровью на конгрессах. Опубликовано в
                    последние годы образцы научных статей: <br />
                    <br />• Даниева М. Язык выполняет коммуникативную функцию.
                    функция Научный электронный журнал. журналистика. ISSN
                    2541-8076. № 4-1. Уфа: Россия, 2023. – С. 181-185
                    <br />• Даниева М.Дз. Научный электронный журнал
                    Академическая журналистика. ISSN 2541-8076. № 4-1. Уфа:
                    Россия, 2023. – С. 181-185
                    <br />• Атамуродова Ф.Т. Причины возникновения антиутопия
                    как жанр. Восточный журнал академических и междисциплинарное
                    исследование том 1 выпуск 2. 2023, 2 ноября
                    <br />• Атамуродова Ф.Т. Утопические взгляды в разные эпохи
                    и его эволюция. Международный журнал формального
                    образование.ISSN 2720-6874. Журнал открытого доступа. Выпуск
                    тома 2 12. Декабрь -2023 г.
                    <br />• Чориева Ф.Т. Зарубежные линво-методические
                    эксперименты формирование учителей языка. Образование, наука
                    и инновация» духовно-просветительский, научно-методический
                    журнал Выпуск 2 за 2024 год. ISSN 2181-8274
                    <br />• Чориева Ф. Деятельность по иноязычному образованию
                    суть понятия. ПРЕПОДАВАТЕЛЬ ТАКЖЕ ОБУЧАЕТ НЕПРЕРЫВНО 2023.
                    3/1 банка
                    <br />• Эшонкулов Равшан Тохирович. ИЗУЧЕНИЕ ВЛИЯНИЕ
                    ТЕХНОЛОГИЙ НА ЯЗЫК, ОСОБЕННО КОНТЕКСТ СОВРЕМЕННОГО
                    АНГЛИЙСКОГО ЯЗЫКА. 59-67
                    <br />• Олимова Хуршида Вайдиллаевна. СЕМАСИОЛОГИЧЕСКОЕ И
                    СЕМАНТИЧЕСКАЯ ХАРАКТЕРИСТИКА ИМЕН СОБСТВЕННЫХ *Азиатский
                    журнал Многомерные исследования ISSN: 2278-4853. Том. 12,
                    Выпуск 2 февраля 2023 г. .SJIF 2022 = 8,179 .https://tarj.in
                    Азиатский Журнал многомерных исследований DOI:
                    10.5958/2278-4853.2023.00026.5
                    <br />• Рахмонова Гавхар Нуритдиновна, . (2024). КОМПЛЕКСНОЕ
                    ИЗУЧЕНИЕ ПРОИЗВОДНЫХ МЕТОДОВ В УЗБЕКСКИЙ ЯЗЫК. СОВРЕМЕННЫЙ
                    НАУЧНО-ИССЛЕДОВАТЕЛЬСКИЙ ЖУРНАЛ ФИЛОЛОГИЧЕСКОГО НАУКИ,
                    5(02), 23–27.
                    https://doi.org/10.37547/philological-crjps-05-02-05
                    <br />• Рахмонова Гавхар Нуритдиновна. 2023. «СРАВНИТЕЛЬНЫЙ
                    АНАЛИЗ ПРОИЗВОДНЫХ ПРОЦЕССОВ НА АНГЛИЙСКОМ И УЗБЕКСКОМ
                    ЯЗЫКАХ СЛОВАРНЫЕ СИСТЕМЫ». Web of Humanities: Журнал
                    социальных наук Наука и гуманитарные исследования 1
                    (7):30-34.
                    https://webofjournals.com/index.php/9/article/view/223.
                    <br />• Ешкобилова О. Свободная речь, Прежний словарный
                    запас, грамматика и стиль общения ИННОВАЦИИ В ТЕХНОЛОГИЯХ И
                    НАУЧНОЕ ОБРАЗОВАНИЕ (СЕНТЯБРЬ) 2023 ГОДА. ТОМ 2.ВЫПУСК 14
                    ISSN 2171-381X SJIF 2023 5.305
                    <br />• Рузибаева А. Обучение иностранным языкам вопросы
                    современных тенденций (проблемы и решения)» Сборник
                    международных онлайн-научно-практических конференций Джизак
                    2023 год
                  </p>
                  <h4>Учебно-методическая деятельность кафедры</h4>
                  <p>
                    Научная деятельность профессоров-преподавателей кафедры
                    кроме того, они занимаются также учебно-методической
                    работой. В частности, в создании учебников,
                    учебно-методических пособий. работают эффективно. <br />
                    Профессора и преподаватели кафедры в 2023-2024 гг. рядом
                    учебников, учебно-методических пособий подготовил: <br />
                    1. Атамуродова Ф.Т. Представители 20 века. Английская
                    литература. Печатное методическое пособие. ББК: 366.11.
                    Противоположный. Издательство «Интеллект», 2023, 102 с. ISBN
                    978-9910 757-47-3. 102 <br />
                    2. Атамуродова Ф.Т. Британская литература: начало 20 века.
                    Печатное методическое пособие УДК: 438.6.438.021.
                    Издательство «Интеллект», 2023, 64 с. 64 с. <br />
                    3. Атамуродова Ф. Т. Методическое пособие. Британский
                    Литература начала 20 века. Версус Издательство «Интеллект»
                    2023. <br />
                    4. Даниева Майсара Джамаловна. Монография. Словосочетания
                    прагматика. Каршинское Издательство "Интеллект" 2023. <br />
                  </p>
                  <h4>
                    3. Достижения кафедры <br />
                    Жизнь студентов и их достижения (учебные и научные
                    достижения в областях, обладатели известных стипендий)
                  </h4>
                  <p>
                    Рустам Касымжанов, студент кафедры, шахматист Азии. чемпион
                    (1998), серебряная медаль чемпионата мира. владелец (1999),
                    чемпион мира ФИДЕ (2004). (руководитель доц. Мадрагимов).
                    Международный мастер по шахматам Нодира Нодиржонова –
                    чемпионка Узбекистана по шахматам (2017). Студенты кафедры
                    Махаров К.Т. (2009 Руководитель: Мадрахимов Ш.), Рахимова
                    М.А. (2011 Руководитель: Махаров Т.) Он был лауреатом
                    Государственной стипендии имени Беруни. Ибрагимова, дочь
                    Зулайхо Эргаша (2009. Руководитель: Хакимов М.) Был
                    стипендиатом государственной стипендии имени Мирзо Улугбека.
                  </p>
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
                    Department 2022 "General methodological sciences" department
                    included in the composition. From March 1, 2023 "Philology
                    and Department of Pedagogical Sciences" was separated.
                    Philology and 4 major foreign languages ​​at the department
                    of pedagogical sciences (English), foreign languages
                    ​​(Russian), Primary education and pre-school education
                    areas were active. <br />
                    In August 2023, by the decision of the University Council on
                    the 31 From August, the department was named "Foreign
                    Languages". foreign language at his disposal (foreign
                    language and literature (English), foreign language and
                    literature (Russian) and foreign language and literature
                    (German language). is taking <br />
                    From March 1, 2023, Prof. Daniyeva.M.Dj 'Foreign is acting
                    as the head of the department of languages. Teachers of the
                    department are engaged in pedagogical activity and
                    scientific research are busy with their work and among them
                    are many candidates of science and there are those who have
                    defended their doctoral theses.
                  </p>
                  <h4> Educational activities of the department</h4>
                  <p>
                    Currently, Ph.D., prof. at the Department of Foreign
                    Languages. Daniyeva Maysara Djamalovna, Assoc. Otamurodova
                    Feruza, senior teachers Elchayev Zohidjon Akhmatovich,
                    Choriyeva Fatima Talibovna, Olimova Khurshida Vaidullayevna,
                    Usmanova Mohinur Bakhtiyar's daughter, Eshankulov Ravshan
                    Takhirovich, teachers Rakhmonova Gavhar, Ruzibayeva Aziza,
                    Nazarov Sardor, Eshkobilova Ozoda, head of the cabinet
                    Mahbuba Sagdullayeva and others are actively working. <br />
                    By professors and teachers of the department
                    <br />
                    By professors and teachers of the department <br />
                    60111800- Foreign language and literature (English language
                    and literature) in the field of undergraduate (full-time)
                    education taking theoretical and practical training in the
                    following subjects goes to: <br />
                    • Reading and writing practice; <br />
                    • Integration of speech skills; <br />
                    • Practice of teaching language aspects; <br />
                    • Applied linguistics; <br />
                    • Integration of speech skills; <br />
                    • International standards of English language teaching and
                    assessment ; <br />
                    • Methodology of teaching English; <br />
                    • Integrated course of teaching foreign languages; <br />
                    • Theoretical English language course; <br />
                    • English stylistics; <br />
                    • Practical phonetics; <br />
                    • Intercultural communication; <br />
                  </p>
                  <h4>Scientific activities of the department</h4>
                  <p>
                    10.00.04 - Europe under the guidance of Professor M. Dz.
                    Daniyeva, Language and literature of American and Australian
                    peoples and 10.00.06 - "Comparative literary studies,
                    cross-references "numerical methods" of linguistics and
                    translation studies Seminar topics are regularly applied.
                    Independent researchers of the department present their
                    scientific results they give lectures on, the topic of
                    dissertations the works performed on <br />
                    Academic title recipients: Atamuodova F.T. (2024) <br />
                    PhD theses defenses: Fayziyeva K (2024y) <br />
                    The members of the department are eminent scientists of the
                    Republic and abroad they publish their scientific works in
                    magazines, scientific they bleed at conventions. Published
                    in recent years samples of scientific articles: <br />
                    <br />• Daniyeva M. Dj. Yazyk vypolnyaet kommunikativnuyu
                    function Scientific electronic magazine. Akademicheskaya
                    journalism. ISSN 2541-8076. No. 4-1. Ufa: Russia, 2023. - S.
                    181-185
                    <br />• Daniyeva M.Dz. Scientific electronic magazine
                    Academic journalism. ISSN 2541-8076. No. 4-1. Ufa: Russia,
                    2023. - S. 181-185
                    <br />• Atamurodova F.T. Reasons for the emergence of
                    dystopia as a genre. Oriental Journal of Academic and
                    multidisciplinary research volume 1 Issue 2. 2023, November
                    2
                    <br />• Atamurodova F.T. Utopian views in different eras and
                    its evolution. International Journal of Formal
                    education.ISSN 2720-6874. Open Access Journal. Volume2 Issue
                    12. December -2023
                    <br />• Choriyeva F.T. Foreign Linvo-methodical experiments
                    formation of language teachers. Education, science and
                    innovation" spiritual-educational, scientific-methodological
                    magazine Issue 2 of 2024. ISSN 2181-8274
                    <br />• Choriyeva F. Activity in foreign language education
                    essence of the concept. THE TEACHER ALSO EDUCATES
                    CONTINUOUSLY 2023. 3/1 can
                    <br />• Eshonkulov, Ravshan Tokhirovich. EXPLORING THE
                    IMPACT OF TECHNOLOGY ON LANGUAGE, PARTICULARLY IN THE
                    CONTEXT OF MODERN ENGLISH. 59-67
                    <br />• Olimova Khurshida Vaidillayevna. SEMASIOLOGICAL AND
                    SEMANTIC CHARACTERISTICS OF PROPER NOUNS *Asian Journal of
                    Multidimensional Research. ISSN: 2278-4853. Vol. 12, Issue
                    2, February 2023 .SJIF 2022 = 8.179 .https://tarj.in Asian
                    Journal of Multidimensional Research DOI:
                    10.5958/2278-4853.2023.00026.5
                    <br />• Rakhmonova Gavkhar Nuritdinovna, . (2024).
                    COMPREHENSIVE EXAMINATION OF DERIVATIVE TECHNIQUES IN UZBEK
                    LANGUAGE. CURRENT RESEARCH JOURNAL OF PHILOLOGICAL SCIENCES,
                    5(02), 23–27.
                    https://doi.org/10.37547/philological-crjps-05-02-05
                    <br />• Rahmonova Gavhar Nuritdinovna. 2023. "COMPARATIVE
                    ANALYSIS OF DERIVATIVE PROCESSES IN ENGLISH AND UZBEK
                    VOCABULARY SYSTEMS”. Web of Humanities: Journal of Social
                    Science and Humanitarian Research 1 (7):30-34.
                    https://webofjournals.com/index.php/9/article/view/223.
                    <br />• Eshkobilova O. Fluent speech, Former vocabulary,
                    grammar and communication style INNOVATIONS IN TECHNOLOGY
                    AND SCIENCE EDUCATION (SEPTEMBER) 2023. VOLUME 2 .ISSUE 14
                    ISSN 2171-381X SJIF 2023 5.305
                    <br />• Ruzibayeva A. Teaching foreign languages issues of
                    modern trends (problems and solutions)" International online
                    scientific and practical conference collection Jizzakh 2023
                  </p>
                  <h4>
                    Educational and methodological activities of the department
                  </h4>
                  <p>
                    Academic activities of professors-teachers of the department
                    besides, they are also engaged in educational and
                    methodological work. In particular, in the creation of
                    textbooks, educational and methodological manuals are
                    working effectively. <br />
                    Professors and teachers of the department in 2023-2024 by a
                    number of textbooks, educational and methodological manuals
                    prepared by: <br />
                    1. Atamurodova F.T. The Representatives of the 20th century
                    English Literature. Printed Methodological Manual. BBK:
                    366.11. Opposite. "Intellect" publishing house, 2023,102 p.
                    ISBN 978-9910 757-47-3. 102 <br />
                    2. Atamurodova F.T. British Literature: early 20th century.
                    Printed Methodological Manual. UDK: 438.6.438.021. Vs.
                    "Intellect" publishing house, 2023, 64 p. 64 p. <br />
                    3. Atamurodova F. T. Methodological manual. British
                    Literature Early 20th Century. Versus "Intellect" Publishing
                    House 2023. <br />
                    4. Daniyeva Maisara Jamalovna. Monograph. Word combinations
                    pragmatics. Karshi "Intellect" Publishing House 2023. <br />
                  </p>
                  <h4>
                    3. Achievements of the department <br />
                    Life of students and their achievements (educational and
                    scientific achievements in fields, holders of famous
                    scholarships)
                  </h4>
                  <p>
                    Rustam Kasimjanov, a student of the department, is a chess
                    player in Asia champion (1998), silver medal of the World
                    Championship owner (1999), FIDE world champion (2004).
                    (leader Assoc. Madrahimov). International chess master
                    Nodira Nodirjonova is the chess champion of Uzbekistan
                    (2017). Students of the department Makharov Q.T. (2009
                    Leader: Madrahimov Sh.), Rakhimova M.A. (2011 Head: Makharov
                    T.) He was a laureate of the State Scholarship named after
                    Beruni. Ibrahimova, daughter of Zulayho Ergash (2009.
                    Leader: Hakimov M.) He was a state scholarship holder named
                    after Mirzo Ulug'bek.
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
