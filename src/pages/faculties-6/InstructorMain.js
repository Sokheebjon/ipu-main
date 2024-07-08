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

  let list = [
    {
      title: "O‘zbekiston tarixi",
      description:
        "Respublikamizdagi umumiy o‘rta ta’lim tizimida, akademik litseylar va professional ta’lim tizimida faoliyat ko‘rsatuvchi bo‘lajak tarixchi mutaxassislarga Vatanimiz, xalqimiz tarixiga oid bo‘lgan zamon talabi darajasidagi chuqur bilimlarni berishga qaratilgan.",
    },
    {
      title: "Jahon tarixi",
      description:
        "Jahon tarixi fanining asosiy maqsad va vazifasi bo‘lajak tarix fani o‘qituvchilariga Jahon tarixining eng qadimgi ibtidoiy jamoa davridan to bugungi kunimizgacha bo‘lgan davrda yuz bergan tarixiy jarayonlar, ijtimoiy va iqtisodiy sohadagi asosiy xususiyatlar, madaniy sohaning taraqqiyoti va uning o‘ziga xos xususiyatlari haqida atroflicha va chuqur bilim berishdan iborat.",
    },
    {
      title: "Arxeologiya",
      description:
        "Arxeologiya fanini o‘qitishdan maqsad Arxeologiya fanining predmeti, tadqiqot uslublari, ibtidoiy, qadimgi, o‘rta asrlar davriga oid arxeologik yodgorliklar, moddiy manbalar, ularning turlari, davrlar bo‘yicha farklari, moddiy madaniy merosni saklash va avaylash masalalarini o‘rganish va amaliyotda ko‘llay olish ko‘nikmalarini hosil kilish.",
    },
    {
      title: "Yordamchi tarix fanlari",
      description:
        "“Yordamchi tarix fanlari” xususan xronologiya, numizmatika, paleografiya, metrologiya fanlarining nazariy asoslari bilan qurollantirish, Talabalarda Yordamchi tarix fanlari tadqiqot metodlari va ularni Tarix fanini rivojlantirishga mos bilim, ko‘nikma va malakalarni shakllantirishni nazarda tutadi.",
    },
    {
      title: "Muzeyshunoslik",
      description:
        "“Muzeyshunoslik” fanining maqsadi	-umumiy o‘rta ta’lim maktablari, akademik litseylar va kasb-hunar maktablarida Muzeyshunoslikdan bo`lajak dars beradigan o‘qituvchilarda dunyoqarashini, ilmiy-nazariy tafakkurini takomillashtirish, o‘tmish va hozirgi zamondagi voqea va hodisalarga ilmiy xolislik va tarixiylik tamoyillariga amal qilgan holda baho berish, tarixiy voqelikka munosabat bildiradigan, ularga umuminsoniy qadriyatlar asosida yondoshadigan, erkin fikrlaydigan komil inson qilib tarbiyalashdir. Shuningdek, talabalarda kelajakda o‘z sohalari bo‘yicha faoliyatlari davomida ahamiyat kasb etuvchi ko‘nikma va malakalarini hosil qilishdan iborat",
    },
    {
      title: "Tarix o‘qitish metodikasi",
      description:
        "Talabalarni umumiy o‘rta ta’lim tizimida o‘qitiladigan tarix fanlarining maqsadini, ta’lim-tarbiya vazifalari, mazmuni, metod va usullarini o‘quvchilarga tarixdan puxta bilim berish, ularni milliy g‘oya ruhida tarbiyalash va kamol toptirishda hamda tarix  o‘qitishning  eng  muhim  vositalarini  belgilashga  mos ko‘nikma  va malakalarini hosil qilishdan iborat",
    },
    {
      title: "O‘zbekiston toponimikasi",
      description:
        "O`quv fanining asosiy maqsadi va vazifasi dunyo xalqlarining ijtimoiy-iqtisodiy, siyosiy, madaniy va etnik evolyutsiyasining asosiy bosqichlari, hamda yo`nalishlari haqida talabalarga har tomonlama bilimlar berish",
    },
    {
      title: "O`rta Osiyo xonliklari tarixiy geografiyasi",
      description:
        "Talabalarni umumiy o‘rta ta’lim tizimida o‘qitiladigan O`rta Osiyo xonliklarining tarixiy geografiyasining maqsadini, ta’lim-tarbiya vazifalari, mazmuni, metod va usullarini o‘quvchilarga tarixdan puxta bilim berish, ularni O`zbekiston tarixi, Markaziy Osiyo xalqlari tarixi hamda Orta Osiyo shaharlari tarixi haqida bilim berishdan iborat",
    },
    {
      title: "Sharq allomalarining ilmiy merosi",
      description:
        "Fanni o'qitishdan maqsad talabalarda O'rta Osiyo zaminidan yetishib chiqqan allomalarning merosi haqida ob'ektiv taassurot uyg'otish. Ushbu qomusiy allomalarning tabiiy va ijtimoiy fanlarga qo'shgan hissasini atroflicha tahlil qilish. Ularning dunyo ilmidagi o'rnini anglash.",
    },
    {
      title: "Dinshunoslik",
      description:
        "talaba-yoshlar tafakkurida dinning mazmun-mohiyati, dunyoning diniy manzarasi, diniy va falsafiy qarashlarning o’zaro bog‘liqligi, globallashuv va diniy jaryonlari hamda zamonaviy diniy harakatlar, diniy aqidaparastlik, ekstremizm va terrorizmning davlat va jamiyat xavfsizligaga salbiy ta’sirini bilish va unga qarshi kurashishda nazariy bilimlar va amaliy ko‘nikmalarni shakllantirishdan iborat.",
    },
    {
      title: "Falsafa",
      description:
        "talabalar dunyoqarashining umumlashgan tizimini yaratish va unda inson o‘rnini ko‘rsatish, insonning dunyoga bo‘lgan bilish, ijtimoiy-siyosiy, ahloqiy, estetik va boshqa munosabatlarini shakllantirish hamda to‘g‘ri fikrlash mahoratini o‘rgatishdan iborat",
    },
    {
      title: "O‘zbekistonning eng yangi tarixi",
      description:
        "Yangi O‘zbekiston, Uchinchi Renessans, ta’lim sohasidagi islohotlar, kadrlar ayniqsa, pedagogik kadrlar tayyorlash bo‘yicha amalga oshirilayotgan ishlar, yutuqlar, kamchiliklar, muammolar hamda istiqbolli rejalar bo‘yicha ma’lumotlar berish. Shuningdek, O‘zbekistonning eng yangi tarixi fanini o‘qitish yoshlar, xususan, talabalar siyosiy ongi va tafakkurini mustahkamlash, ularning fuqarolik jamiyatni shakllantirish jarayonlariga dahldorligini anglatish va bugungi kunda yuz berayotgan muhim o‘zgarishlardan xabardor qilish imkoniyatini beradi",
    },
  ];

  let list2 = [
    {
      title: "Ilmiy tadqiqot metodologiyasi",
      desc: "O'quv fanining maqsadi ilmiy tadqiqot faoliyatini tashkil etishda nazariya va amaliyot birligi qilish malakalarini shakllantirishdan iborat. Fanni o‘qitishning vazifasi ilmiy tadqiqot ishini tayyorlashda ilmiy muammoni to'g'ri qo'yish yechimini topish mexanizmlarini shakllantirish",
    },
    {
      title: "Qadimgi Sharq tarixi manbalari va tarixshunosligi",
      desc: "Fanni o’qitishdan maqsad – talabalarga fani haqidagi bilimlarni qarortopshirish mavjud ilmiy adbiyotlar va zamonaviy nazariyalar hamda olib borilayotgan tadqiqot ishlarini o‘rganish, fan bo‘yicha to‘plangan ilg‘or tajribalar, kadrlar buyurtmachilarining fikr, talab va takliflari kabi masalalarni o‘z ichiga qamrab oladi.",
    },
    {
      title: "O‘zbekistonda yer-suv munosabatlari",
      desc: "Fanni o’qitishdan maqsad – talabalarga O’zbekistonda yer va suv munosabatlari (qadimgi davrdan hozirga kungacha) fani orqali talabalarda xolisona ilmiy dunyoqarashni, ko’nikma va malakani shakllantirish.",
    },
    {
      title: "Tarixiy rekonstruksiya masalalari",
      desc: "Fanni o‘qitishdan maqsad - “Tarixiy rekonstruksiya masalasi” fanning predmeti, mazmun – mohiyati to‘g‘risida magistrlarga umumiy tushuncha berish, fanga oid ma’lumotlar, yangi nazariyalarni o‘rganishda ilmiy jihatdan yondashish, tadqiqot ko‘lamining o‘sishi, va bilimlar doirasining kengayib borishini aniqlash, ma’lumotlarni tahlil qilish va umumlashtirish usullarini o‘rganishdan iborat.",
    },
    {
      title: "Paleoekologiya va sivilizatsiya dinamikasi",
      desc: "“Paleoekologiya va sivilizatsiya dinamikasi” predmeti to‘g‘risida talabalarga umumiy tushuncha berish, geologiya, ekologiya, geografiya ta’limotlari, arxeologik manbalari va yodgorliklari, hamda yangi nazariyalarni o‘rganishda ilmiy jihatdan yondashish, talabalarda zamonaviy bosqichiga oid bilim, ko‘nikma va malaka shakllantirishdan iborat.",
    },
    {
      title: "O‘zbekistonda moliya siyosati va pul islohotlari tarixi",
      desc: "Fanni o‘qitishdan maqsad – “O‘zbekistonda moliya siyosati va pul islohotlari tarixi (1917-1991 yillar)” fani orqali talabalarda xolisona ilmiy dunyoqarashni, ko‘nikma va malakani shakllantirish.",
    },
    {
      title: "XX asrda Yevroosiyoda siyosiy jarayonlar",
      desc: "Fanni o‘qitishdan maqsad – XX asrda Yevroosiyoda siyosiy jarayonlar: tarixi va zamonaviy tendensiyalar fani to‘g‘risida talabalarda xolisona ilmiy dunyo qarashni, ko‘nikma va malaka shakllantirishdir. Shu bilan birga talabalarni g‘oyaviy-mafkuraviy saviyasini uzluksiz o‘sib borishini  taminlab, ularni jonajon vatanga sadoqat ruhida tarbiyalash.",
    },
  ];

  let list3 = [
    {
      title: "Murtazova Sahodat Bo‘riyevna",
      user: "t.f.f.d. dotsent",
      desc: "O‘zbekistonda musiqa ta’limi tizimi va madaniyat tarixi (XX asr- XXI asr boshlari)",
    },
    {
      title: "Mamatqulov Bekzod Sherozovich",
      user: "t.f.f.d. dotsent",
      desc: "“O‘zbekiston janubiy viloyatlarida sanoat  tarmoqlarining rivojlanish tarixi:tahlil va oqibatlar (1925 – 1991 yy.)”",
    },
    {
      title: "Ergashev Umar Quziyevich",
      user: "katta o'qituvchi ",
      desc: "“Buxoro amirligi davrida G‘uzor bekligidagi ijtimoiy-siyosiy jarayonlar tarixi ”",
    },
    {
      title: "Tursunov Xurshid Nasriddinovich",
      user: "staj. o‘qituvchi",
      desc: "O‘zbekistonda tarixchi mutaxassislarni tayyorlash jarayoni tendensiyalari (1991-2021 yy)",
    },
    {
      title: "Murodova Sadoqat Qo‘ziboyevna",
      user: "staj. o‘qituvchi",
      desc: "“Mustaqillik yillarda musiqa madaniyatida xalqaro aloqalar rivojlanish istiqbollari (1991-2022)”",
    },
    {
      title: "Tog‘aymurodov Jamoliddin Kamoliddin o‘g‘li ",
      user: "staj. o‘qituvchi",
      desc: "“XX asr musiqa madaniyatida “ustoz-shogird” va sulolaviy ijodkorlar faoliyat tarixi”",
    },
  ];

  let list4 = [
    {
      title: "Mahmanova Mohira",
      user: "assistent",
      desc: "O‘zbekistonda mustaqillik yillarida musiqa maktablari faoliyati tarixi (janubiy viloyatlar misolida)",
    },
    {
      title: "Ziyodov Otabek",
      user: "st-o‘qituvchi",
      desc: "Mustaqillik yillarida o‘zbek estrada san’ati tarixi",
    },
    {
      title: "Akbarova Nigora",
      user: "st-o‘qituvchi",
      desc: "Farg‘ona vodiysi musiqa maktablari faoliyati tarixi (1991-2022 yy)",
    },
    {
      title: "Davlatov Abbos",
      user: "st-o‘qituvchi",
      desc: "Mustaqillik yillarida O‘zbekiston musiqa namoyandalari faoliyati tarixi",
    },
  ];

  let list5 = [
    {
      title: "Murtazova Sahodat Bo‘riyevna t.f.f.d., prof.v.b.",
      desc: "sahodat@mail.ru",
    },
    {
      title: "Asadova Ra’no Baymanovna t.f.f.d. dotsent",
      desc: "rano.asadova.66@mail.ru",
    },
    {
      title: "Mamatqulov Bekzod Sherozovich t.f.f.d. dotsent",
      desc: "bmamatqulovqarshi@gmail.com",
    },
    {
      title: "Sharopova Nigora Akbarovna t.f.f.d. dotsent",
      desc: "sharopovanigora55@gmail.com",
    },
    {
      title: "Jumayeva Shahlo Suyunovna katta o‘qituvchi",
      desc: "jumayevashaxlo507@gmail.com",
    },
    {
      title: "Ergashev Umar Qo‘ziyevich",
      desc: "",
    },
    {
      title: "Elboyeva Shahnoza Katta o’qituvchi",
      desc: "elboyevashahnoza@gmail.com",
    },
    {
      title: "Qurbonova Marg‘uba Boltayevna Katta o‘qituvchi",
      desc: "Margubaqurbonova1976@gmail.com",
    },
    {
      title: "Axmedova Dilrabo Katta o’qituvchi",
      desc: "dilliaxmedova66@gmail.com",
    },
    {
      title: "Qurbonov Abbos Shonazarovich Katta o‘qituvchi",
      desc: "kurbonovabbos857@gmail.com",
    },
    {
      title: "To‘rayev O‘lmas Katta o’qituvchi",
      desc: "ulmasturaev212@gmail.com",
    },
    {
      title: "Murodova Sadoqat Qo‘ziboyevna stajyor-o‘qituvchi",
      desc: "sadoqatmurod7733@gmail.com",
    },
    {
      title: "Jomurodov Ikrom Ilxom o‘g‘li stajyor-o‘qituvchi",
      desc: "jomuradovikrom@gmail.com",
    },
    {
      title: "Ashurov Navfal Burxonjon o‘g‘li stajyor-o‘qituvchi",
      desc: "ashurovnavfal311@gmail.com",
    },
    {
      title: "Abduraimova Sabohat stajyor-o‘qituvchi",
      desc: "bduraimovas677@gmail.com",
    },
    {
      title: "Tog‘amurodov Jamoliddin Kamoliddin o‘g‘li stajyor-o‘qituvchi",
      desc: "togaymurodovjamoliddin@gmail.com",
    },
    {
      title: "Toshpo‘latova Mohigul stajyor-o‘qituvchi",
      desc: "toshpulatovamohi111@gmail.com",
    },
  ];

  let listRU = [
    {
      title: "История Узбекистана",
      description:
        "Целью преподавания предмета истории Узбекистана в системе общего среднего образования, академических лицеев и профессионального образования является предоставление будущим специалистам-историкам глубоких знаний о истории нашей Родины и нашего народа, соответствующих современным требованиям.",
    },
    {
      title: "Всемирная история",
      description:
        "Основная цель и задачи предмета всемирной истории заключаются в предоставлении будущим преподавателям истории всесторонних и глубоких знаний о исторических процессах, происходивших от древнейшего первобытного общества до наших дней, основных социальных и экономических особенностях, развитии культуры и её специфических чертах.",
    },
    {
      title: "Археология",
      description:
        "Целью преподавания археологии является изучение предмета археологии, методов исследования, археологических памятников и материальных источников, относящихся к первобытному, древнему и средневековому периодам, их различий по периодам, а также развитие навыков сохранения и бережного отношения к материальному культурному наследию и их применения на практике.",
    },
    {
      title: "Вспомогательные исторические дисциплины",
      description:
        'Цель преподавания курса "Вспомогательные исторические дисциплины" заключается в вооружении студентов теоретическими основами хронологии, нумизматики, палеографии, метрологии, формировании у них исследовательских методов вспомогательных исторических дисциплин и навыков, необходимых для развития исторической науки.',
    },
    {
      title: "Музееведение",
      description:
        'Целью курса "Музееведение" является совершенствование мировоззрения и научно-теоретического мышления будущих учителей музееведения в общеобразовательных школах, академических лицеях и профессиональных училищах, оценка событий и явлений прошлого и настоящего с научной объективностью и историзмом, формирование всесторонних личностей, способных давать объективную оценку историческим событиям на основе общечеловеческих ценностей. Также курс направлен на развитие навыков и умений, необходимых в их будущей профессиональной деятельности.',
    },
    {
      title: "Методика преподавания истории",
      description:
        "Целью курса является формирование у студентов навыков и умений преподавания истории в системе общего среднего образования, ознакомление с целями, задачами, содержанием, методами и средствами обучения истории, а также обучение основным методам и средствам преподавания истории для углубленного изучения предмета и воспитания учащихся в духе национальной идеи.",
    },
    {
      title: "Топонимика Узбекистана",
      description:
        "Основная цель и задачи курса заключаются в предоставлении студентам всесторонних знаний об основных этапах социально-экономической, политической, культурной эволюции народов мира и их направлений.",
    },
    {
      title: "Историческая география ханств Средней Азии",
      description:
        "Целью курса является предоставление знаний по исторической географии ханств Средней Азии в системе общего среднего образования, ознакомление с основными задачами, содержанием, методами и средствами преподавания, предоставление всесторонних знаний о истории Узбекистана, народов Центральной Азии и истории городов Средней Азии.",
    },
    {
      title: "Научное наследие восточных ученых",
      description:
        "Целью курса является формирование объективного восприятия научного наследия ученых Средней Азии, всесторонний анализ их вклада в естественные и социальные науки, понимание их роли в мировой науке.",
    },
    {
      title: "Религиоведение",
      description:
        "Целью курса является формирование теоретических знаний и практических навыков у студентов о сущности религии, религиозной картине мира, взаимосвязи религиозных и философских взглядов, глобализации и религиозных процессов, современного религиозного движения, негативного влияния религиозного экстремизма и терроризма на безопасность государства и общества и способах противодействия этим угрозам.",
    },
    {
      title: "Философия",
      description:
        "Целью курса является создание у студентов обобщенной картины мира и понимание места человека в нем, формирование правильных представлений о познании мира, социальных, политических, моральных и эстетических отношениях, а также развитие навыков правильного мышления.",
    },
    {
      title: "Новейшая история Узбекистана",
      description:
        "Цель курса заключается в предоставлении информации о новой истории Узбекистана, Третьем Ренессансе, реформах в сфере образования, работе по подготовке кадров, особенно педагогических, достижениях, недостатках, проблемах и перспективных планах. Преподавание новейшей истории Узбекистана способствует укреплению политического сознания и мышления молодежи, в частности студентов, осознанию их участия в процессах формирования гражданского общества и ознакомлению с важными изменениями, происходящими сегодня.",
    },
  ];

  let list2RU = [
    {
      title: "Методология научных исследований",
      desc: "Целью учебного предмета является формирование навыков объединения теории и практики в организации научно-исследовательской деятельности. Задачей преподавания предмета является правильная постановка научной проблемы и разработка механизмов для нахождения решений при подготовке научно-исследовательской работы.",
    },
    {
      title: "Источники и историография истории древнего Востока",
      desc: "Цель преподавания предмета - углубление знаний студентов о предмете, изучение существующей научной литературы, современных теорий и проводимых исследований, охват передового опыта, накопленного по предмету, а также обсуждение мнений, требований и предложений заказчиков кадров.",
    },
    {
      title: "Земельно-водные отношения в Узбекистане",
      desc: "Цель преподавания предмета - формирование объективного научного мировоззрения, навыков и умений у студентов через изучение предмета земельно-водных отношений в Узбекистане (с древних времен до настоящего времени).",
    },
    {
      title: "Вопросы исторической реконструкции",
      desc: "Цель преподавания предмета - дать магистрам общее представление о предмете, содержании и сути «вопросов исторической реконструкции», изучение научных данных и новых теорий, научный подход к исследованиям, определение роста объема исследований и расширение кругозора знаний, изучение методов анализа и обобщения информации.",
    },
    {
      title: "Палеоэкология и динамика цивилизаций",
      desc: "Цель преподавания предмета «Палеоэкология и динамика цивилизаций» - дать студентам общее представление о предмете, ознакомление с учениями по геологии, экологии и географии, археологическими источниками и памятниками, научный подход к изучению новых теорий, формирование у студентов знаний, навыков и умений, связанных с современным этапом развития.",
    },
    {
      title: "История финансовой политики и денежные реформы в Узбекистане",
      desc: "Цель преподавания предмета - формирование объективного научного мировоззрения, навыков и умений у студентов через изучение предмета «История финансовой политики и денежные реформы в Узбекистане (1917-1991 годы)».",
    },
    {
      title: "Политические процессы в Евразии в XX веке",
      desc: "Цель преподавания предмета - формирование объективного научного мировоззрения, навыков и умений у студентов через изучение предмета «Политические процессы в Евразии в XX веке: история и современные тенденции». Также предмет направлен на постоянное повышение идеологического и мировоззренческого уровня студентов, воспитание их в духе преданности родине.",
    },
  ];

  let list3RU = [
    {
      title: "Муртазова Сахадат Буриевна",
      user: "кандидат исторических наук, доцент",
      desc: "Система музыкального образования и история культуры в Узбекистане (XX век - начало XXI века)",
    },
    {
      title: "Маматкулов Бекзод Шерозович",
      user: "кандидат исторических наук, доцент",
      desc: "«История развития промышленных отраслей в южных областях Узбекистана: анализ и последствия (1925 – 1991 гг.)»",
    },
    {
      title: "Эргашев Умар Кузиевич",
      user: "старший преподаватель",
      desc: "«История социально-политических процессов в беклиге Гузар в период Бухарского эмирата»",
    },
    {
      title: "Турсунов Хуршид Насриддинович",
      user: "ассистент преподавателя",
      desc: "Тенденции подготовки историков в Узбекистане (1991-2021 гг.)",
    },
    {
      title: "Муродова Садокат Козибоевна",
      user: "ассистент преподавателя",
      desc: "«Перспективы развития международных связей в музыкальной культуре в годы независимости (1991-2022 гг.)»",
    },
    {
      title: "Тогаймуродов Джамолиддин Камолиддинович",
      user: "ассистент преподавателя",
      desc: "«История деятельности мастеров и учеников, а также династийных творцов в музыкальной культуре XX века»",
    },
  ];

  let list4RU = [
    {
      title: "Махманова Мохира",
      user: "ассистент",
      desc: "История деятельности музыкальных школ в Узбекистане в годы независимости (на примере южных областей)",
    },
    {
      title: "Зиёдов Отабек",
      user: "старший преподаватель",
      desc: "История узбекской эстрады в годы независимости",
    },
    {
      title: "Акбарова Нигора",
      user: "старший преподаватель",
      desc: "История деятельности музыкальных школ Ферганской долины (1991-2022 гг.)",
    },
    {
      title: "Давлатов Аббос",
      user: "старший преподаватель",
      desc: "История деятельности музыкальных деятелей Узбекистана в годы независимости",
    },
  ];

  let list5RU = [
    {
      title: "Муртазова Сахадат Буриевна, к.и.н., профессор в.и.",
      desc: "sahodat@mail.ru",
    },
    {
      title: "Асадова Ра’но Баймановна, к.и.н., доцент",
      desc: "rano.asadova.66@mail.ru",
    },
    {
      title: "Маматкулов Бекзод Шерозович, к.и.н., доцент",
      desc: "bmamatqulovqarshi@gmail.com",
    },
    {
      title: "Шаропова Нигора Акбаровна, к.и.н., доцент",
      desc: "sharopovanigora55@gmail.com",
    },
    {
      title: "Джумаева Шахло Суюновна, старший преподаватель",
      desc: "jumayevashaxlo507@gmail.com",
    },
    {
      title: "Эргашев Умар Кузиевич",
      desc: "",
    },
    {
      title: "Элбоева Шахноза, старший преподаватель",
      desc: "elboyevashahnoza@gmail.com",
    },
    {
      title: "Курбанова Маргуба Болтаевна, старший преподаватель",
      desc: "Margubaqurbonova1976@gmail.com",
    },
    {
      title: "Ахмедова Дилрабо, старший преподаватель",
      desc: "dilliaxmedova66@gmail.com",
    },
    {
      title: "Курбанов Аббос Шоназарович, старший преподаватель",
      desc: "kurbonovabbos857@gmail.com",
    },
    {
      title: "Тураев Улмас, старший преподаватель",
      desc: "ulmasturaev212@gmail.com",
    },
    {
      title: "Муродова Садокат Козибоевна, ассистент преподавателя",
      desc: "sadoqatmurod7733@gmail.com",
    },
    {
      title: "Джомуродов Икром Илхомович, ассистент преподавателя",
      desc: "jomuradovikrom@gmail.com",
    },
    {
      title: "Ашуров Навфал Бурхонджонович, ассистент преподавателя",
      desc: "ashurovnavfal311@gmail.com",
    },
    {
      title: "Абдураимова Сабохат, ассистент преподавателя",
      desc: "bduraimovas677@gmail.com",
    },
    {
      title: "Тогаймуродов Джамолиддин Камолиддинович, ассистент преподавателя",
      desc: "togaymurodovjamoliddin@gmail.com",
    },
    {
      title: "Тошпулатова Мохигул, ассистент преподавателя",
      desc: "toshpulatovamohi111@gmail.com",
    },
  ];

  let listEN = [
    {
      title: "History of Uzbekistan",
      description:
        "The aim of teaching the subject of the history of Uzbekistan in the general secondary education system, academic lyceums, and vocational education system is to provide future history specialists with deep knowledge about the history of our Homeland and our people, meeting modern requirements.",
    },
    {
      title: "World History",
      description:
        "The main goal and objectives of the subject of world history are to provide future history teachers with comprehensive and deep knowledge about the historical processes that have occurred from the earliest primitive society to the present day, the main social and economic characteristics, the development of culture, and its specific features.",
    },
    {
      title: "Archaeology",
      description:
        "The aim of teaching archaeology is to study the subject of archaeology, research methods, archaeological monuments and material sources related to the primitive, ancient, and medieval periods, their differences by period, as well as developing skills for preserving and carefully handling material cultural heritage and applying them in practice.",
    },
    {
      title: "Auxiliary Historical Disciplines",
      description:
        "The goal of the course 'Auxiliary Historical Disciplines' is to equip students with the theoretical foundations of chronology, numismatics, paleography, metrology, to develop research methods for auxiliary historical disciplines and the skills necessary for the development of historical science.",
    },
    {
      title: "Museology",
      description:
        "The aim of the course 'Museology' is to improve the worldview and scientific-theoretical thinking of future teachers of museology in general education schools, academic lyceums, and vocational schools, to assess past and present events with scientific objectivity and historical accuracy, to form well-rounded individuals capable of giving an objective assessment of historical events based on universal values. The course also aims to develop the skills and abilities necessary for their future professional activities.",
    },
    {
      title: "History Teaching Methodology",
      description:
        "The aim of the course is to develop students' skills and abilities in teaching history in the general secondary education system, to familiarize them with the goals, objectives, content, methods, and means of history education, as well as to teach the main methods and tools of history teaching for in-depth study of the subject and the upbringing of students in the spirit of national ideas.",
    },
    {
      title: "Toponymy of Uzbekistan",
      description:
        "The main goal and objectives of the course are to provide students with comprehensive knowledge about the main stages of the socio-economic, political, cultural evolution of the peoples of the world and their directions.",
    },
    {
      title: "Historical Geography of Central Asian Khanates",
      description:
        "The goal of the course is to provide knowledge about the historical geography of the Central Asian Khanates in the general secondary education system, to familiarize students with the main tasks, content, methods, and means of teaching, to provide comprehensive knowledge about the history of Uzbekistan, the peoples of Central Asia, and the history of the cities of Central Asia.",
    },
    {
      title: "Scientific Heritage of Eastern Scholars",
      description:
        "The aim of the course is to form an objective perception of the scientific heritage of the scholars of Central Asia, a comprehensive analysis of their contributions to natural and social sciences, and an understanding of their role in world science.",
    },
    {
      title: "Religious Studies",
      description:
        "The aim of the course is to form theoretical knowledge and practical skills among students about the essence of religion, the religious worldview, the interconnection of religious and philosophical views, globalization and religious processes, modern religious movements, the negative impact of religious extremism and terrorism on the security of the state and society, and ways to counter these threats.",
    },
    {
      title: "Philosophy",
      description:
        "The aim of the course is to create a generalized worldview in students and to understand the place of man in it, to form correct ideas about the knowledge of the world, social, political, moral, and aesthetic relations, as well as to develop skills for correct thinking.",
    },
    {
      title: "Modern History of Uzbekistan",
      description:
        "The goal of the course is to provide information about the modern history of Uzbekistan, the Third Renaissance, reforms in the education sector, work on the training of personnel, especially pedagogical personnel, achievements, shortcomings, problems, and prospective plans. Teaching the modern history of Uzbekistan helps to strengthen the political consciousness and thinking of young people, especially students, to understand their participation in the processes of forming a civil society, and to acquaint them with the important changes taking place today.",
    },
  ];

  let list2EN = [
    {
      title: "Methodology of Scientific Research",
      desc: "The aim of the course is to develop skills in combining theory and practice in organizing scientific research activities. The task of teaching the course is to correctly set up a scientific problem and develop mechanisms for finding solutions when preparing a research project.",
    },
    {
      title: "Sources and Historiography of Ancient Eastern History",
      desc: "The aim of teaching the course is to deepen students' knowledge about the subject, to study existing scientific literature, modern theories and ongoing research, to cover advanced practices accumulated in the field, as well as to discuss the opinions, requirements, and suggestions of stakeholders.",
    },
    {
      title: "Land and Water Relations in Uzbekistan",
      desc: "The aim of teaching the course is to develop an objective scientific worldview, skills, and competencies in students through the study of the subject of land and water relations in Uzbekistan (from ancient times to the present).",
    },
    {
      title: "Issues of Historical Reconstruction",
      desc: "The aim of teaching the course is to give master's students a general understanding of the subject, content, and essence of 'issues of historical reconstruction,' to study scientific data and new theories, to apply a scientific approach to research, to determine the growth in research scope, and to expand the range of knowledge, as well as to study methods of data analysis and generalization.",
    },
    {
      title: "Paleoecology and Dynamics of Civilizations",
      desc: "The aim of teaching the course 'Paleoecology and Dynamics of Civilizations' is to provide students with a general understanding of the subject, to familiarize them with the teachings of geology, ecology, and geography, archaeological sources, and monuments, to apply a scientific approach in studying new theories, and to develop students' knowledge, skills, and competencies related to the modern stage of development.",
    },
    {
      title: "History of Financial Policy and Monetary Reforms in Uzbekistan",
      desc: "The aim of teaching the course is to develop an objective scientific worldview, skills, and competencies in students through the study of the subject 'History of Financial Policy and Monetary Reforms in Uzbekistan (1917-1991)'.",
    },
    {
      title: "Political Processes in Eurasia in the 20th Century",
      desc: "The aim of teaching the course is to develop an objective scientific worldview, skills, and competencies in students through the study of the subject 'Political Processes in Eurasia in the 20th Century: History and Modern Trends'. The course also aims to ensure the continuous growth of students' ideological and conceptual level, fostering their loyalty to their homeland.",
    },
  ];

  let list3EN = [
    {
      title: "Murtazova Sahodat Buriyevna",
      user: "Ph.D., Associate Professor",
      desc: "The System of Music Education and the History of Culture in Uzbekistan (20th Century - Early 21st Century)",
    },
    {
      title: "Mamatkulov Bekzod Sherozovich",
      user: "Ph.D., Associate Professor",
      desc: "“History of the Development of Industrial Sectors in the Southern Regions of Uzbekistan: Analysis and Consequences (1925 – 1991)”",
    },
    {
      title: "Ergashev Umar Kuziyevich",
      user: "Senior Lecturer",
      desc: "“History of Socio-Political Processes in the Guzar Bekdom during the Bukhara Emirate”",
    },
    {
      title: "Tursunov Khurshid Nasriddinovich",
      user: "Assistant Lecturer",
      desc: "Trends in the Training of Historians in Uzbekistan (1991-2021)",
    },
    {
      title: "Murodova Sadoqat Koziboyevna",
      user: "Assistant Lecturer",
      desc: "“Prospects for the Development of International Relations in Musical Culture During the Years of Independence (1991-2022)”",
    },
    {
      title: "Togaymurodov Jamoliddin Kamoliddinovich",
      user: "Assistant Lecturer",
      desc: "“History of the Activities of Masters and Students, as well as Dynastic Creators in the Musical Culture of the 20th Century”",
    },
  ];

  let list4EN = [
    {
      title: "Mahmanova Mohira",
      user: "Assistant",
      desc: "History of the Activities of Music Schools in Uzbekistan During the Years of Independence (With a Focus on the Southern Regions)",
    },
    {
      title: "Ziyodov Otabek",
      user: "Senior Lecturer",
      desc: "History of Uzbek Pop Music During the Years of Independence",
    },
    {
      title: "Akbarova Nigora",
      user: "Senior Lecturer",
      desc: "History of the Activities of Music Schools in the Fergana Valley (1991-2022)",
    },
    {
      title: "Davlatov Abbos",
      user: "Senior Lecturer",
      desc: "History of the Activities of Music Figures in Uzbekistan During the Years of Independence",
    },
  ];

  let list5EN = [
    {
      title: "Murtazova Sahodat Buriyevna, Ph.D., Professor",
      desc: "sahodat@mail.ru",
    },
    {
      title: "Asadova Ra’no Baymanovna, Ph.D., Associate Professor",
      desc: "rano.asadova.66@mail.ru",
    },
    {
      title: "Mamatqulov Bekzod Sherozovich, Ph.D., Associate Professor",
      desc: "bmamatqulovqarshi@gmail.com",
    },
    {
      title: "Sharopova Nigora Akbarovna, Ph.D., Associate Professor",
      desc: "sharopovanigora55@gmail.com",
    },
    {
      title: "Jumayeva Shahlo Suyunovna, Senior Lecturer",
      desc: "jumayevashaxlo507@gmail.com",
    },
    {
      title: "Ergashev Umar Qo‘ziyevich",
      desc: "",
    },
    {
      title: "Elboyeva Shahnoza, Senior Lecturer",
      desc: "elboyevashahnoza@gmail.com",
    },
    {
      title: "Qurbonova Marg‘uba Boltayevna, Senior Lecturer",
      desc: "Margubaqurbonova1976@gmail.com",
    },
    {
      title: "Axmedova Dilrabo, Senior Lecturer",
      desc: "dilliaxmedova66@gmail.com",
    },
    {
      title: "Qurbonov Abbos Shonazarovich, Senior Lecturer",
      desc: "kurbonovabbos857@gmail.com",
    },
    {
      title: "To‘rayev O‘lmas, Senior Lecturer",
      desc: "ulmasturaev212@gmail.com",
    },
    {
      title: "Murodova Sadoqat Qo‘ziboyevna, Assistant Lecturer",
      desc: "sadoqatmurod7733@gmail.com",
    },
    {
      title: "Jomurodov Ikrom Ilxom o‘g‘li, Assistant Lecturer",
      desc: "jomuradovikrom@gmail.com",
    },
    {
      title: "Ashurov Navfal Burxonjon o‘g‘li, Assistant Lecturer",
      desc: "ashurovnavfal311@gmail.com",
    },
    {
      title: "Abduraimova Sabohat, Assistant Lecturer",
      desc: "bduraimovas677@gmail.com",
    },
    {
      title: "Tog‘amurodov Jamoliddin Kamoliddin o‘g‘li, Assistant Lecturer",
      desc: "togaymurodovjamoliddin@gmail.com",
    },
    {
      title: "Toshpo‘latova Mohigul, Assistant Lecturer",
      desc: "toshpulatovamohi111@gmail.com",
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
                    Kafedra 2023-yilda Iqtisodiyot va pedagogika universitetida
                    “Axborot texnologiyalari va raqamli iqtisodiyot” fakultetini
                    tashkil topishi munosabati bilan, shu fakultet qoshida
                    prof.v.b. S.B.Murtazova rahbarligida «Tarix va ijtimoiy
                    fanlar» nomi bilan faoliyat boshlagan va hozirgacha o‘zi
                    rahbarlik qilib kelmoqda.
                    <br /> Fakultet va shu jumladan, “Tarix va ijtimoiy fanlar”
                    kafedrasi, ijtimoiy-gumanitar fanlar sohasida zamonaviy
                    fikrlaydigan yetuk mutaxassislarni tayyorlashni o‘z oldiga
                    asosiy maqsad qilib qo‘ygan.
                    <br /> Kafedrada yuqori ilmiy daraja va unvonga ega
                    mutaxassislar, xususan fan doktori Ch.Temirova, fan
                    nomzodlari va PhD R.Asadova, B.Mamatqulov, N.Sharopova,
                    A.Nasimov, D.Raxmatova, B.Boqiyevlar samarali faoliyat
                    yuritib kelishmoqda.
                    <br />
                  </p>
                  <h4>Kafedraning o‘quv faoliyati</h4>
                  <p>
                    Hozirgi kunda “Tarix va ijtimoiy fanlar” fan doktori
                    Ch.Temirova, fan nomzodlari va PhD R.Asadova, B.Mamatqulov,
                    N.Sharopova, A.Nasimov, D.Raxmatova, B.Boqiyev,
                    o‘qituvchilar Sh.Jumayeva, U.Ergashev, A.Qurbonov,
                    M.Qurbonova, Sh.Elboyeva, D.Axmedova, B.Jalilov,
                    O‘.To‘rayev, S.Abduraimova, J.Tog‘aymurodov, N.Ashurov,
                    I.Jomurodova doktorantlar A.Axmadov, X.Tursunov, kabinet
                    mudiri M.Toshpo‘latova va boshqalar faol mehnat qilmoqdalar.
                    <br />
                    Kafedra professor-o’qituvchilari tomonidan <br />
                    60111100 – “Tarix”; <br />
                    60110200 – “Maktabgacha ta’lim”; <br />
                    60110500 – “Boshlang‘ich ta’lim”; <br />
                    60111800 – “Xorijiy til va adabiyoti”; <br />
                    60112200 – “Jismoniy madaniyat”; <br />
                    60310100 – “Iqtisodiyot”; <br />
                    60610200 – “Axborot tizimlari va texnologiyalari”; <br />
                    60721800 – “Neft va gaz ishi” <br />
                    bakalavriat (kunduzgi, kechki va sirtqi) ta’limi
                    yo’nalishlarida quyidagi fanlardan nazariy va amaliy
                    mashg’ulotlar olib boriladi: • O‘zbekiston tarixi; <br />
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
                    bitiruv malakavish ishlariga rahbarlik qiladi.
                    <br />
                    Magistratura ta’limi bo’yicha kafedra
                    professor-o’qituvchilari
                    <br />
                    70220301 – “Tarix (yo’nalishlar va faoliyat turi bo’yicha)”;
                    <br />• Ilmiy tadqiqot metodologiyasi;
                    <br />• Qadimgi Sharq tarixi manbalari va tarixshunosligi;
                    <br />• O‘zbekistonda yer-suv munosabatlari;
                    <br />• Tarixiy rekonstruksiya masalalari;
                    <br />• Paleoekologiya va sivilizatsiya dinamikasi;
                    <br />• O‘zbekistonda moliya siyosati va pul islohotlari
                    tarixi;
                    <br />• XX asrda Yevroosiyoda siyosiy jarayonlar fanlaridan
                    mashg’ulotlar olib boradilar.
                  </p>
                  <h5>Kafedraning ilmiy faoliyati</h5>
                  <p>
                    Doktorlik dissertasiyalari himoyalari: Kafedra dotsentlari
                    S.B.Murtazova, B.Sh.Mamatqulovlar 2025-yilda doktorlik
                    dissertatsiyasini himoya qilishadi.
                    <br />
                    PhD dissertasiyalari himoyalari: Kafedra o‘qituvchilari
                    U.Ergashev, S.Murodova, doktorant A.Axmadovlar 2024-yilda,
                    Sh.Elboyeva, X.Tursunov, J.Tog‘aymurodovlar 2025-yilda PhD
                    dissertatsiyalari himoyasiga chiqishadi.
                    <br />
                    Kafedra a’zolari Respublika va xorijiy nufuzli ilmiy
                    jurnallarda ilmiy ishlarini chop etishadi, ilmiy
                    anjumanlarda qannashishadi. Oxirgi yillarda chop etilgan
                    ilmiy maqolalardan namunalar: <br />
                    • S.Murtazova. From the history of music culture of Amir
                    Timur and the Temurian period. International
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
                    http://mamun.uz/uz/page/56
                    <br /> o B.Mamatqulov. O‘zbekistonda 1925-1954 –yillarda
                    sanoat sohasida amalga oshirilgan tadbirlar va ularning
                    natijalari // Xorazm Ma’mun akademiyasi axborotnomasi. ‒
                    Xiva, 2023. ‒ №12/5. – B. 61 – 65.
                    http://mamun.uz/uz/page/56
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
                  <h5>
                    Kafedra xodimlarining ilmiy natijalari quyidagi
                    monografiyalarda o‘z aksinini topgan:
                  </h5>
                  <p>
                    1. S.Murtazova, N.Akbarova. Farg’ona viloyati musiqa
                    maktablari faoliyati tarixi (1991-2020 qq.)
                    “Ilm-fan-ma’naviyat” 2024
                    <br />
                    2. R.Asadova. O‘zbekiston - Hindiston o‘rtasidagi o‘zaro
                    iqtisodiy va madaniy sohalardagi hamkorlik, R.B.Asadova,
                    Monografiya. - Qarshi: «Intellekt» nashriyoti, 2023. –149 b.
                    <br />
                    3. B.Mamatqulov. O‘zbekistonda sanoatlashtirish siyosatining
                    amalga oshirilishi va uning oqibatlari (1925-1941-yy.);
                    Monografiya. T.: “Lesson Press” MCHJ nashriyoti. - 2023.
                    -134 b.
                  </p>
                  <h5>Kafedraning o‘quv-uslubiy faoliyati:</h5>
                  <p>
                    Kafedra professor-o‘qituvchilari o‘quv faoliyatidani
                    tashqari, o‘quv-uslubiy ishlar bilan ham shug'ullanadilar.
                    Jumladan, darslik, o‘quv va uslubiy qo‘llanmalar yaratishda
                    samarali faoliyat olib borishmoqdalar. <br />
                    So‘nggi 10 yillarda kafedra professor-o‘qituvchilari
                    tomonidan bir qator darslik, o‘quv va uslubiy qo‘llanmalar
                    tayyorlangan: <br />
                    1. S.Murtazova, G.Mo‘minova. Noveyshaya istoriya
                    Uzbekistana. Intellekt, 2023
                    <br /> 2. S.Murtazova. O‘zbekiston musiqa madaniyatining
                    mustaqillik davri tarixi. Qarshi, 2023
                    <br /> 3. S.Murtazova. Istoriya muzikalnoy kulturi
                    Uzbekistana v period nezavisimosti. Qarshi, 2023
                  </p>
                  <div className="row">
                    <div className="col-12">
                      <img className="w-100" src={BooksImage} alt="image" />
                    </div>
                  </div>
                  <h4>Kafedra yutuqlari</h4>
                  <h5>
                    Talabalar hayoti va ularning yutuqlari (o‘quv va ilmiy
                    sohalardagi yutuqlari, nomdor stipendiyalar sohiblari)
                  </h5>
                  <p>
                    Kafedra iqtidorli talabalaridan 4 nafari Iqtisodiyot va
                    pedagogika universiteti Rektor stipendiyasi sohibi bo‘ldi.
                    “Men jadidlar avlodi” respublika insholar ko‘rik tanlovida 8
                    nafar iqtidorli talabalar g‘olib bo‘lishdi.
                  </p>
                  <h4 className="text-center mt-3">
                    Tarix va ijtimoiy fanlar kafedrasida o‘qitiladigan fanlar
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
                      {list.map((l, index) => (
                        <tr key={`people-${index + 1}`}>
                          <th scope="row">{index + 1}</th>
                          <td>{l.title}</td>
                          <td>{l.description}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>

                  <h4 className="text-center mt-3">
                    Kafedrada o‘qitiladigan fanlar magistratura uchun{" "}
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
                      {list2.map((l, index) => (
                        <tr key={`people-${index + 1}`}>
                          <th scope="row">{index + 1}</th>
                          <td>{l.title}</td>
                          <td>{l.desc}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>

                  <h4 className="text-center mt-3">
                    3. Tadqiqotchilar va ilmiy ishlar to‘g‘risida
                  </h4>
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
                      {list3.map((l, index) => (
                        <tr key={`people-${index + 1}`}>
                          <th scope="row">{index + 1}</th>
                          <td>{l.title}</td>
                          <td>{l.user}</td>
                          <td>{l.desc}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>

                  <h4 className="text-center">
                    Kafedrada prof.v.b. S.B.Murtazova ilmiy rahbarligida erkin
                    izlanuvchilik asosida faoliyat ko‘rsatayotgan tadqiqotchilar
                  </h4>
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
                      {list4.map((l, index) => (
                        <tr key={`people-${index + 1}`}>
                          <th scope="row">{index + 1}</th>
                          <td>{l.title}</td>
                          <td>{l.user}</td>
                          <td>{l.desc}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>

                  <h4>Hamkorlik</h4>
                  <p>
                    Kafedra xorijiy va mamlakatimiz hududidagi ilmiy va ta’lim
                    tashkilotlari bilan o‘quv-metodik, ilmiy va kadrlar
                    mobilligi bo‘yicha hamkorlikda faoliyat olib boradi.
                  </p>

                  <h5>Xorijiy oliy ta’lim muassasalari bilam hamkorlik:</h5>
                  <p>
                    1. Belgorod davlat universiteti <br />
                    2. Ozarboyjon universiteti <br />
                    3. Karabuk davlat universiteti <br />
                    4. Panjikent tojik pedagogika instituti <br />
                  </p>

                  <h5>Mamlakatimizdagi tashkilotlar:</h5>
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

                  <h4 className="text-center">Kafedra tarkibi</h4>
                  <table class="table table-hover">
                    <thead>
                      <tr>
                        <th scope="col">#</th>
                        <th scope="col">Familiyasi, ismi, sharifi</th>
                        <th scope="col">Elektron pochta</th>
                      </tr>
                    </thead>
                    <tbody>
                      {list5.map((l, index) => (
                        <tr key={`people-${index + 1}`}>
                          <th scope="row">{index + 1}</th>
                          <td>{l.title}</td>
                          <td>{l.desc}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
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
                    о’зи рахбарлик килиб кельмокда.
                    <br /> Факультет ва шу джумладан, «Тарикс ва иджтимой
                    фанлар» кафедраси, иджтимой-гуманитар фанлар сохасида
                    замонави фикрлайдиган йетук мутаксассиларни тайёрлашни оз
                    олдига асосий максад килиб койган.
                    <br /> Кафедрада юкори илмий дараджа ва унвонга эга
                    mutaxassislar, xususan fan доктор Ч.Темирова, фанат
                    номзодлари ва PhD Р.Асадова, Б.Маматкулов, Н.Шаропова,
                    А.Насимов, Д.Рахматова, Б.Бокыевлар самаралы фаолият Юритиб
                    Келишмокда.
                    <br />
                  </p>
                  <h4>Просветительская деятельность кафедры</h4>{" "}
                  <p>
                    В настоящее время он является доктором исторических и
                    социальных наук. Темирова Ч., кандидаты наук и PhD Р.
                    Асадова, Б. Маматкулов, Н. Шаропова, А. Насимов, Д.
                    Рахматова, Б. Бокиев, преподаватели Ш.Джумаева, У.Эргашев,
                    А.Гурбанов, Курбонова М., Эльбоева Ш., Ахмедова Д., Джалилов
                    Б., О.Тораев, С.Абдураимова, Ж.Тогаймуродов, Н.Ашуров,
                    Джомуродова И., докторанты Ахмадов А., Турсунов Х., кабинет
                    активно работают руководитель М. Тошполатова и другие.
                    <br />
                    Профессора и преподаватели кафедры <br />
                    60111100 – «История»; <br />
                    60110200 – «Дошкольное образование»; <br />
                    60110500 – «Начальное образование»; <br />
                    60111800 – «Иностранный язык и литература»; <br />
                    60112200 – «Физическая культура»; <br />
                    60310100 – «Экономика»; <br />
                    60610200 – «Информационные системы и технологии»; <br />
                    60721800 – «Нефтегазовое дело». высшее (дневное, вечернее и
                    заочное) образование теоретические и практические по
                    следующим дисциплинам проводятся занятия: • История
                    Узбекистана; <br />
                    • Всемирная история; <br />
                    • Археология; <br />
                    • Вспомогательные исторические науки; <br />
                    • Музееведение; <br />
                    • Методика преподавания истории; <br />
                    • Историческая география ханств Средней Азии; <br />
                    • Топонимия Узбекистана; <br />
                    • Научное наследие учёных Востока; <br />
                    • Философия; <br />
                    • Религиоведение; <br />
                    • Новейшая история Узбекистана; <br />
                    Кроме того, 60111100 – «История», 60110500 – «Начальное
                    образование» в сферах довузовского образования
                    профессиональной, педагогической и производственной практики
                    и руководит выпускной квалификационной работой.
                    <br />
                    Департамент магистерского образования профессора и
                    преподаватели
                    <br />
                    70220301 – «История (по направлениям и видам деятельности)»;
                    <br />• Методика научных исследований;
                    <br />• Источники по древневосточной истории и
                    историографии;
                    <br />• Земельно-водные отношения в Узбекистане;
                    <br />• Вопросы исторической реконструкции;
                    <br />• Палеоэкология и цивилизационная динамика;
                    <br />• Финансовая политика и денежные реформы в Узбекистане
                    история;
                    <br />• Из наук о политических процессах в Евразии в ХХ
                    веке. провести обучение.
                  </p>
                  <h5>Научная деятельность кафедры</h5>{" "}
                  <p>
                    Защиты докторских диссертаций: доценты кафедры Муртазова
                    С.Б., Маматкулов Б.Ш. в 2025 году. они защищают диссертацию.
                    <br />
                    Защиты кандидатских диссертаций: преподаватели кафедры
                    Эргашев У., Муродова С., докторант Ахмадовлар А. в 2024
                    году, Эльбоева Ш., Турсунов Х., Тогаймуродов Ж. в 2025 г.
                    к.ф.н. защитить диссертации.
                    <br />
                    Членами кафедры являются видные ученые республики и
                    зарубежья. они публикуют свои научные работы в журналах,
                    научных они истекают кровью на конгрессах. Опубликовано в
                    последние годы образцы научных статей: <br />
                    • С. Муртазова. Из истории музыкальной культуры Амира Тимур
                    и Темурийский период. Международный междисциплинарный журнал
                    по развитию исследований. 2023: 6563.
                    <br /> • С. Муртазова. Узбекское искусство было подавлено об
                    их характерах и их печальной судьбе. Звезда ведущего 2023,
                    №4.
                    <br /> • С. Муртазова. Защита Родины – высшая честь. Вродли
                    знание. Международный журнал научных исследований.
                    Импакт-фактор – 7293. 2024 год
                    <br /> • Хайткулов Б.Х. Полное решение класса
                    Дифференциальные игры преследования с интегральными
                    ограничениями и Импульсное управление // Российская
                    математика. Россия. 2022. 22-29.
                    https://link.springer.com/article/10.3103/S1066369X22030069
                    <br /> • Р. Асадова. УЗБЕКСКО-ИНДИЙСКИЕ КУЛЬТУРНЫЕ СВЯЗИ.
                    Международный журнал формального образования. Том: 02
                    Выпуск: 11| Ноябрь – 2023 г. ISSN: 2720-6874.
                    http://journals.academiczone.net/index.php/ijfe
                    <br /> • Р. Асадова. Сотрудничество между странами в годы
                    независимость. Информационный бюллетень Хорезмской Академии
                    Мамуна: научный журнал.-№11/3(108), Хорезмская академия
                    Маъмуна, 2023 г. й. - 251 с. - Электронная версия печатного
                    издания - http://mamun.uz/uz/page/56
                    <br />о Б. Маматкулов. В Узбекистане в 1925-1954 гг.
                    деятельность, осуществляемая в сфере промышленности и ее
                    результаты // Вестник Хорезмской академии Маъмуна. ‒ Хива,
                    2023. ‒ №12/5. - С. 61 - 65. http://mamun.uz/uz/page/56
                    <br /> • Б. Маматкулов. Узбекистан газосерный Возникновение
                    промышленности и история ее развития (На примере
                    Кашкадарьинской области) // Социально-гуманитарные
                    актуальные проблемы науки. - № 12/1(3)-2023. ISSN: 2181-1342
                    (Онлайн) https://scienceproblems.uz
                    <br /> • Шаропова Нигора Акбаровна. Эффекты деятельности и
                    реформы в сфере общего образования // Международный журнал
                    развития и государственной политики электронный ISSN:
                    2792-3991 | www.openaccessjournals.eu | Объем: 3 Выпуск: 9.
                    Импакт-фактор-10,5-2023.
                    https://openaccessjournals.eu/index.php/ijdpp/article/view/2272
                    <br /> • М. Гурбанова. Международный журнал за последнее
                    время теория научных исследователей. Язык – это основа
                    культура каждого народа. Том 1.№9(2023) ISSN: 2992-8885
                    10.12.23. http://uzresearchers.com.
                    <br /> • М. Гурбанова. Международный журнал формального
                    Образование. Язык – наше богатство. Том: 02 Выпуск: 11|
                    Ноябрь – 2023 г. ISSN: 2720-6874.
                    http://journals.academiczone.net/index.php/ijfe
                    <br /> • Ш. Джумаева. Социальная и духовная среда и ее
                    влияние на воспитание и образование. Международный Журнал
                    формального образования. Том: 02 Выпуск: 11| ноябрь – 2023.
                    ISSN: 27206874.
                    http://journals.academiczone.net/index.php/ijfe/article/view/1517/1311
                    <br /> • Ш. Джумаева. использование педагогических методов в
                    учебный процесс. развитие педагогического творчества в
                    современном образовании.2023..Т. 1. Выпуск 3. Конференция
                    финский
                    <br /> • Муродова Садокат. Узбек в годы независимости из
                    истории развития фольклорных традиций https://www.
                    periodica.org/index.php/journal/article/view/244
                    <br /> • Ш. Елбоева. Повышение роли дружбы общества и
                    усиление их участия в жизни населения лучший журнал
                    инноваций в науке, исследования и разработки Том:2
                    Выпуск:4|2023 На сайте www.bjisrd.com представлены номера
                    236–239.
                    <br /> • Ш. Елбоева. Международный бюллетень прикладных
                    наука и техника технологии UIF = 8,2 | SJIF = 5,955 ISSN:
                    2750-3402 ибастРазвитие социальной активности женщин Старший
                    преподаватель системы высшего образования Кафедра истории и
                    социальных наук Университета Экономика и педагогика
                    негосударственная образовательная учреждение
                    https://doi.org/10.5281/zenodo.8426626.
                    <br /> • А. Курбанов. Среднеазиатский журнал социальных
                    науки и истории Развитие ремесленной промышленности в Город
                    Карши в начале 19-20 вв. Столетия Том 4 № 12 (2023): CAJSSH
                    <br /> • Д. Ахмедова. Духовный образ молодых людей с
                    современное мировоззрение. В томе 3, выпуске 11 журнала
                    «Восточное Ренессанс: инновационный, образовательный,
                    природный и социальный. наук» научный журнал ноябрь 2023 г.
                    304-309ст.
                    <br /> • Ж. Тогаймуродов. Династия Раджаби – с точки зрения
                    новая эра В томе 11, выпуске 12, декабрь 2023 г., Галактика
                    международный междисциплинарный исследовательский журнал
                    GIIRJ) ISSN (Е): 2347-6915
                    <br /> • Н. Ашуров. Евразийский журнал соц. Инновационная
                    академия наук, философии и культуры Центр поддержки
                    исследований Получен: 6 декабря 2023 г. Принято: 15 числа
                    Онлайн: 16 числа
                    <br /> • И. Джомуродов. Новая современная западная философия
                    (в Пример К. Поппера). Педагогический кластер-Журнал
                    Педагогические разработки PCJPD: Том 2, выпуск 4, апрель
                    2024 г., онлайн: ISSN 2956-896X.
                    https://webofjournals.com/index.php/4/article/view/1195/1162
                  </p>
                  <h5>
                    Научные результаты сотрудников кафедры следующие: отражено в
                    монографиях:
                  </h5>
                  <p>
                    1. Муртазова С., Акбарова Н. Музыка Ферганской области
                    история школ (1991-2020) «Наука-наука-духовность» 2024 г.
                    <br />
                    2. Р. Асадова. Матч между Узбекистаном и Индией.
                    сотрудничество в экономической и культурной сферах,
                    Р.Б.Асадова, Монография. - Против: Издательство «Интеллект»,
                    2023. -149 с.
                    <br />
                    3. Б. Маматкулов. Политика индустриализации в Узбекистане
                    реализация и ее последствия (1925-1941); Монография. Т.:
                    Издательство ООО «Лессон Пресс». - 2023. -134 с.
                  </p>
                  <h5>Учебно-методическая деятельность кафедры:</h5>{" "}
                  <p>
                    Научная деятельность профессоров-преподавателей кафедры
                    кроме того, они занимаются также учебно-методической
                    работой. В частности, в создании учебников,
                    учебно-методических пособий. работают эффективно. <br />
                    Профессора и преподаватели кафедры за последние 10 лет рядом
                    учебников, учебно-методических пособий подготовил: <br />
                    1. Муртазова С., Моминова Г. Новая история Узбекистан.
                    Интеллект, 2023
                    <br /> 2. С. Муртазова. Музыкальная культура Узбекистана
                    история периода независимости. Напротив, 2023 г.
                    <br /> 3. С. Муртазова. История музыкальной культуры
                    Независимость Узбекистана в период. Напротив, 2023 г.
                  </p>
                  <div className="row">
                    <div className="col-12">
                      <img className="w-100" src={BooksImage} alt="image" />
                    </div>
                  </div>
                  <h4>Достижения отдела</h4>{" "}
                  <h5>
                    Жизнь студентов и их достижения (учебные и научные
                    достижения в областях, обладатели известных стипендий)
                  </h5>
                  <p>
                    4 талантливых студента кафедры – экономисты и стала
                    лауреатом стипендии ректора педагогического университета. 8
                    место в республиканском конкурсе рецензий сочинений «Мужчины
                    Джадидлар Авлодии». талантливые студенты победили.
                  </p>
                  <h4 className="text-center mt-3">
                    Предметы, преподаваемые на факультете истории и социальных
                    наук
                  </h4>
                  <table class="table table-hover">
                    <thead>
                      <tr>
                        <th scope="col">#</th>
                        <th scope="col">Имя субъекта</th>
                        <th scope="col">Краткая информация о науке</th>
                      </tr>
                    </thead>
                    <tbody>
                      {listRU.map((l, index) => (
                        <tr key={`people-${index + 1}`}>
                          <th scope="row">{index + 1}</th>
                          <td>{l.title}</td>
                          <td>{l.description}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                  <h4 className="text-center mt-3">
                    Предметы, преподаваемые на кафедре, предназначены для
                    магистратуры{" "}
                  </h4>
                  <table class="table table-hover">
                    <thead>
                      <tr>
                        <th scope="col">#</th>
                        <th scope="col">Имя субъекта</th>
                        <th scope="col">Краткая информация о науке</th>
                      </tr>
                    </thead>
                    <tbody>
                      {list2RU.map((l, index) => (
                        <tr key={`people-${index + 1}`}>
                          <th scope="row">{index + 1}</th>
                          <td>{l.title}</td>
                          <td>{l.desc}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                  <h4 className="text-center mt-3">
                    3. Об исследователях и научных работах
                  </h4>
                  <table class="table table-hover">
                    <thead>
                      <tr>
                        <th scope="col">#</th>
                        <th scope="col">Рыба.</th>
                        <th scope="col">Ученая степень, звание</th>
                        <th scope="col">Тема диссертации</th>
                      </tr>
                    </thead>
                    <tbody>
                      {list3RU.map((l, index) => (
                        <tr key={`people-${index + 1}`}>
                          <th scope="row">{index + 1}</th>
                          <td>{l.title}</td>
                          <td>{l.user}</td>
                          <td>{l.desc}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                  <h4 className="text-center">
                    На кафедре проф.в.б. Свободно под научным руководством С.Б.
                    Муртазовой. исследователи, работающие на основе исследований
                  </h4>
                  <table class="table table-hover">
                    <thead>
                      <tr>
                        <th scope="col">#</th>
                        <th scope="col">Рыба.</th>
                        <th scope="col">Ученая степень, звание</th>
                        <th scope="col">Тема диссертации</th>
                      </tr>
                    </thead>
                    <tbody>
                      {list4RU.map((l, index) => (
                        <tr key={`people-${index + 1}`}>
                          <th scope="row">{index + 1}</th>
                          <td>{l.title}</td>
                          <td>{l.user}</td>
                          <td>{l.desc}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                  <h4>Сотрудничество</h4>
                  <p>
                    Кафедра является научным и образовательным учреждением на
                    территории нашей страны и за рубежом. учебно-методические,
                    научные и кадровые организации работает в сотрудничестве по
                    мобильности.
                  </p>
                  <h5>
                    Сотрудничество с зарубежными высшими учебными заведениями:
                  </h5>
                  <p>
                    1. Белгородский государственный университет <br />
                    2. Азербайджанский университет <br />
                    3. Карабукский государственный университет 4. Пенджикентский
                    Таджикский педагогический институт <br />
                  </p>
                  <h5>Организации в нашей стране:</h5>
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
                  <h4 className="text-center">Содержимое отдела</h4>{" "}
                  <table class="table table-hover">
                    <thead>
                      <tr>
                        <th scope="col">#</th>
                        <th scope="col">Фамилия, имя, отчество</th>
                        <th scope="col">Электронная почта</th>
                      </tr>
                    </thead>
                    <tbody>
                      {list5RU.map((l, index) => (
                        <tr key={`people-${index + 1}`}>
                          <th scope="row">{index + 1}</th>
                          <td>{l.title}</td>
                          <td>{l.desc}</td>
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
                    The department is at the University of Economics and
                    Pedagogy in 2023 "Information technologies and digital
                    economy" faculty in connection with its establishment, under
                    this faculty prof.v.b. Under the leadership of S.B.
                    Murtazova "History and Social began to operate under the
                    name "fanlar" and is still the same has been leading.
                    <br /> Faculty and including "History and Social Sciences"
                    department, modern in the field of social and humanitarian
                    sciences undertakes the training of mature specialists who
                    think as the main goal.
                    <br /> He has a high academic degree and title in the
                    department specialists, in particular Ch. Temirova, doctor
                    of science, science candidates and Ph.D. R. Asadova, B.
                    Mamatkulov, N. Sharopova, A. Nasimov, D. Rakhmatova, B.
                    Boqiyev are active they are walking.
                    <br />
                  </p>
                  <h4>Educational activities of the department</h4>
                  <p>
                    Currently, he is a Doctor of History and Social Sciences Ch.
                    Temirova, candidates of science and PhD R. Asadova, B.
                    Mamatkulov, N. Sharopova, A. Nasimov, D. Rakhmatova, B.
                    Boqiyev, teachers Sh. Jumayeva, U. Ergashev, A. Gurbanov, M.
                    Qurbonova, Sh. Elboyeva, D. Akhmedova, B. Jalilov, O.
                    Torayev, S. Abduraimova, J. Togaymurodov, N. Ashurov, I.
                    Jomurodova, doctoral students A. Akhmadov, H. Tursunov,
                    office head M. Toshpolatova and others are actively working.
                    <br />
                    By professors and teachers of the department <br />
                    60111100 – "History"; <br />
                    60110200 - "Preschool education"; <br />
                    60110500 - "Primary education"; <br />
                    60111800 - "Foreign language and literature"; <br />
                    60112200 – "Physical culture"; <br />
                    60310100 – "Economy"; <br />
                    60610200 - "Information systems and technologies"; <br />
                    60721800 - "Oil and gas business". undergraduate (day,
                    evening and part-time) education theoretical and practical
                    in the following disciplines classes are held: • History of
                    Uzbekistan; <br />
                    • World history; <br />
                    • Archaeology; <br />
                    • Auxiliary history sciences; <br />
                    • Museology; <br />
                    • History teaching methodology; <br />
                    • Historical geography of Central Asian khanates; <br />
                    • Toponymy of Uzbekistan; <br />
                    • Scientific heritage of Eastern scientists; <br />
                    • Philosophy; <br />
                    • Religious studies; <br />
                    • The newest history of Uzbekistan; <br />
                    In addition, 60111100 - "History", 60110500 - "Elementary
                    education" in the fields of undergraduate education
                    professional, pedagogical and production practices and
                    supervises graduation qualification work.
                    <br />
                    Department of Master's Education professors and teachers
                    <br />
                    70220301 - "History (by direction and type of activity)";
                    <br />• Scientific research methodology;
                    <br />• Sources of ancient Eastern history and
                    historiography;
                    <br />• Land-water relations in Uzbekistan;
                    <br />• Issues of historical reconstruction;
                    <br />• Paleoecology and civilization dynamics;
                    <br />• Financial policy and monetary reforms in Uzbekistan
                    history;
                    <br />• From the sciences of political processes in Eurasia
                    in the 20th century conduct training.
                  </p>
                  <h5>Scientific activities of the department</h5>
                  <p>
                    Defenses of doctoral theses: associate professors of the
                    department S.B. Murtazova, B.Sh. Mamatkulovov doctorate in
                    2025 they defend their dissertation.
                    <br />
                    Defenses of PhD dissertations: teachers of the department U.
                    Ergashev, S. Murodova, doctoral student A. Akhmadovlar in
                    2024, Sh. Elboyeva, Kh. Tursunov, J. Togaimurodov in 2025
                    PhD defend their dissertations.
                    <br />
                    The members of the department are eminent scientists of the
                    Republic and abroad they publish their scientific works in
                    magazines, scientific they bleed at conventions. Published
                    in recent years samples of scientific articles: <br />
                    • S. Murtazova. From the history of music culture of Amir
                    Timur and the Temurian period. International
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
                    <br /> • R. Asadova. UZBEK-INDIAN CULTURAL RELATIONS.
                    International Journal of Formal Education. Volume: 02 Issue:
                    11| November – 2023 ISSN: 2720-6874
                    http://journals.academiczone.net/index.php/ijfe
                    <br /> • R. Asadova. Sotrudnichestvo mejdu stranami v gody
                    nezavisimosti. Khorezm Mamun Academy Newsletter: scientific
                    journal.-№11/3 (108), Khorezm Ma'mun Academy, 2023 y. - 251
                    p. - The electronic version of the printed edition -
                    http://mamun.uz/uz/page/56
                    <br /> o B. Mamatkulov. In Uzbekistan in 1925-1954
                    activities carried out in the field of industry and their
                    results // Newsletter of Khorezm Ma'mun Academy. ‒ Khiva,
                    2023. ‒ #12/5. - P. 61 - 65. http://mamun.uz/uz/page/56
                    <br /> • B. Mamatkulov. Uzbekistan gas-sulphur the emergence
                    of industry and the history of its development (In the case
                    of Kashkadarya region) // Social and humanitarian actual
                    problems of sciences. - No. 12/1(3)-2023. ISSN: 2181-1342
                    (Online) https://scienceproblems.uz
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
                    – 2023. ISSN:27206874.
                    http://journals.academiczone.net/index.php/ijfe/article/view/1517/1311
                    <br /> • Sh. Jumayeva. the use of pedagogical methods in the
                    educational process. development of pedagogical creativity
                    in modern education.2023..Vol. 1. Issue 3. Conference of
                    Finnish
                    <br /> • Murodova Sadokat. Uzbek in the years of
                    independence from the history of the development of folklore
                    traditions
                    https://www.periodica.org/index.php/journal/article/view/244{" "}
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
                  <h5>
                    The scientific results of the department staff are as
                    follows reflected in monographs:
                  </h5>
                  <p>
                    1. S. Murtazova, N. Akbarova. Fergana region music history
                    of schools (1991-2020) "Science-science-spirituality" 2024
                    <br />
                    2. R. Asadova. Match between Uzbekistan and India
                    cooperation in the economic and cultural spheres, R.B.
                    Asadova, Monograph. - Against: "Intellect" publishing house,
                    2023. -149 p.
                    <br />
                    3. B. Mamatkulov. Industrialization policy in Uzbekistan
                    implementation and its consequences (1925-1941); Monograph.
                    T.: "Lesson Press" LLC publishing house. - 2023. -134 p.
                  </p>
                  <h5>
                    Educational and methodological activity of the department:
                  </h5>
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
                    Intellect, 2023
                    <br /> 2. S. Murtazova. Music culture of Uzbekistan the
                    history of the period of independence. Opposite, 2023
                    <br /> 3. S. Murtazova. History of musical culture
                    Nezavisimosti to Uzbekistan v period. Opposite, 2023
                  </p>
                  <div className="row">
                    <div className="col-12">
                      <img className="w-100" src={BooksImage} alt="image" />
                    </div>
                  </div>
                  <h4>Department Achievements</h4>
                  <h5>
                    Life of students and their achievements (educational and
                    scientific achievements in fields, holders of famous
                    scholarships)
                  </h5>
                  <p>
                    4 of the department's talented students are Economics and
                    became the recipient of Rector's scholarship of Pedagogical
                    University. 8 in the republican essay review competition
                    "Men Jadidlar Avlodii". talented students won.
                  </p>
                  <h4 className="text-center mt-3">
                    Subjects taught at the Department of History and Social
                    Sciences
                  </h4>
                  <table class="table table-hover">
                    <thead>
                      <tr>
                        <th scope="col">#</th>
                        <th scope="col">Subject Name</th>
                        <th scope="col">Brief information about science</th>
                      </tr>
                    </thead>
                    <tbody>
                      {listEN.map((l, index) => (
                        <tr key={`people-${index + 1}`}>
                          <th scope="row">{index + 1}</th>
                          <td>{l.title}</td>
                          <td>{l.description}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                  <h4 className="text-center mt-3">
                    Subjects taught at the department are for master's degree{" "}
                  </h4>
                  <table class="table table-hover">
                    <thead>
                      <tr>
                        <th scope="col">#</th>
                        <th scope="col">Subject Name</th>
                        <th scope="col">Brief information about science</th>
                      </tr>
                    </thead>
                    <tbody>
                      {list2EN.map((l, index) => (
                        <tr key={`people-${index + 1}`}>
                          <th scope="row">{index + 1}</th>
                          <td>{l.title}</td>
                          <td>{l.desc}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                  <h4 className="text-center mt-3">
                    3. About researchers and scientific works{" "}
                  </h4>
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
                      {list3EN.map((l, index) => (
                        <tr key={`people-${index + 1}`}>
                          <th scope="row">{index + 1}</th>
                          <td>{l.title}</td>
                          <td>{l.user}</td>
                          <td>{l.desc}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                  <h4 className="text-center">
                    In the department, prof.v.b. Freely under the scientific
                    guidance of S.B. Murtazova researchers operating on the
                    basis of research
                  </h4>
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
                      {list4EN.map((l, index) => (
                        <tr key={`people-${index + 1}`}>
                          <th scope="row">{index + 1}</th>
                          <td>{l.title}</td>
                          <td>{l.user}</td>
                          <td>{l.desc}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                  <h4>Cooperation</h4>
                  <p>
                    The department is a scientific and educational institution
                    in the territory of our country and abroad
                    educational-methodological, scientific and personnel
                    organizations works in cooperation on mobility.
                  </p>
                  <h5>
                    Cooperation with foreign higher education institutions:
                  </h5>
                  <p>
                    1. Belgorod State University <br />
                    2. University of Azerbaijan <br />
                    3. Karabuk State University 4. Panjikent Tajik Pedagogical
                    Institute <br />
                  </p>
                  <h5>Organizations in our country:</h5>
                  <p>
                    1. National University of Uzbekistan <br />
                    2. Fergana State University <br />
                    3. Bukhara State University <br />
                    4. Karshi State University <br />
                    5. State Museum "History of Uzbekistan". 6. State Museum
                    "History of Uzbekistan", Kashkadarya region branch <br />
                    7. "Memorial of Repression Victims" museum in the structure
                    of QarDU; <br />
                    8. Abu Muin al-Nasafi complex. <br />
                  </p>
                  <h4 className="text-center">Department Content</h4>
                  <table class="table table-hover">
                    <thead>
                      <tr>
                        <th scope="col">#</th>
                        <th scope="col">Surname, first name, patronymic</th>
                        <th scope="col">Email</th>
                      </tr>
                    </thead>
                    <tbody>
                      {list5EN.map((l, index) => (
                        <tr key={`people-${index + 1}`}>
                          <th scope="row">{index + 1}</th>
                          <td>{l.title}</td>
                          <td>{l.desc}</td>
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
