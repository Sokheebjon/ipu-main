import instructors from "../../data/Instructors.json";
import { useIntl } from "react-intl";
import { getProductName } from "../../helpers/general";
import Image1 from "../../assets/images/faculties-2/image-1.png";

const InstructorDetailsMain = () => {
  const intl = useIntl();
  const instructor = instructors.find((b) => b.kafedra == "2");
  const lang = (
    JSON.parse(localStorage.getItem("i18nConfig")) || { selectedLang: "uz" }
  )?.selectedLang;

  let listUz = [
    "- rivojlangan demokratik davlatlar darajasidagi yuksak ma’naviy va axloqiy talablarga javob beruvchi yuqori malakali raqobatbardosh kadrlarni tayyorlash;",
    "- kafedra yo‘nalishlari va mutaxassisliklari bo‘yicha davlat ta’lim standartlari, o‘quv rejalari va dasturlarini rivojlangan xorijiy mamlakatlarning ta’lim dasturlari bilan qiyosiy tahlilini muntazam ravishda olib borish va takоmillashtirish;",
    "- kafedra fanlari bo‘yicha o‘quv dasturlarni ishlab chiqish va belgilangan tartibda tasdiqqa taqdim etish, shuningdek turdosh kafedralar tomonidan tayyorlangan o‘quv dasturlarga taqriz va xulosalar tayyorlash;",
    "- kafedra fanlari bo‘yicha o‘quv dasturlarni ishlab chiqish va belgilangan tartibda tasdiqqa taqdim etish, shuningdek turdosh kafedralar tomonidan tayyorlangan o‘quv dasturlarga taqriz va xulosalar tayyorlash;",
    "- o‘quv shakllari (ishlab chiqarishdan ajralgan va ishlab ajralmagan hollarda) bo‘yicha oliy ta’limning davlat ta’lim standartlariga muvofiq tuzilgan o‘quv rejalaridagi fanlar bo‘yicha belgilangan mashg‘ulot turlarini yuksak nazariy, ilmiy-uslubiy va kasbiy darajada o‘tkazish, ta’lim sifatini ta’minlash;",
    "- talabalarning malakaviy amaliyoti, kurs loyihalari (ishlari), bitiruv malakaviy ishlari, magistrlik dissertatsiyalariga, shuningdek, mustaqil ishlari va ilmiy-tadqiqot ishlariga rahbarlik qilish;",
    "- talabalar bilimining reyting nazoratini joriy etish, talabalarning auditoriyadan tashqari ishlarini tashkil etish bo‘yicha tadbirlar o‘tkazish;",
    "- iqtidorli talabalarini tanlash va ularni tarbiyalash, olimpiada va tanlovlarda ishtirok etishga tayyorlash, talabalarning mustaqil ishlash shakl va uslublarini takomillashtirish bo‘yicha ko‘rsatmalar berish;",
    "- talabalar ilmiy-ijodiy faoliyatini tizimli asosda tashkil etish, iqtidorli talabalarni tadqiqotlarga jalb etish, ilmiy-tadqiqot ishlarini individual va jamoa bo‘lib bajarishga o‘rgatish, ularning ilmiy-ijodiy faoliyatini ro‘yobga chiqarish uchun zarur tashkiliy, uslubiy va moddiy-texnikaviy shart-sharoitlar yaratish;",
    "- tasdiqlangan rejaga muvofiq ilmiy-tadqiqot ishlarini olib borish, tugallangan ilmiy-tadqiqot ishlarini muhokama etish, nashr etishga tavsiya berish va ularning natijalarini ishlab chiqarishga joriy etish, ta’lim, fan va ishlab chiqarishning samarali integratsiyasini ta’minlash;",
    "- kafedra o‘qituvchilarining shaxsiy ish rejalaridagi o‘quv, ilmiy-uslubiy, ilmiy-tadqiqot, ma’naviy-ma’rifiy va tashkiliy-uslubiy ishlarini ko‘rib chiqish, tajribali o‘qituvchilar faoliyatini o‘rganish, umumlashtirish va ilg‘or tajribalarini ommalashtirishga qaratilgan ishlarni tashkil etish;",
    "- zamonaviy pedagogik va axborot-kommunikatsiya texnologiyalarini joriy etish, pedagogik faoliyat bilan shug‘ullanishni boshlagan yosh o‘qituvchilarga pedagogik malaka va ko‘nikmalarni egallashda yordam berish, axborot bazasini yaratish, o‘quv mashg‘ulotlarida zamonaviy o‘quv-texnika vositalaridan, yakka tartibda o‘qitish va mustaqil ta’lim olish uslublaridan samarali foydalnishni yo‘lga qo‘yish. O‘qitishni zamonaviy kompyuter texnikalari bilan jihozlangan maxsus o‘quv auditoriyalarida tashkil qilish masofali o‘qitish elementlarini rivojlantirish;",
    "- ilmiy-pedagogik kadrlarni tayyorlash, kafedra mutaxassisligiga mos yoki turdosh ixtisosliklar bo‘yicha falsafa doktori va doktorlik dissertatsiyalarni ilmiy seminarlarda muhokama qilish, ta’lim hujjatlarining meyori talablariga javob berishini belgilash bo‘yicha ekspert guruhlari tarkibida ishtirok etish;",
    "- budjetdan tashqari mablag‘larni jalb etish, shuningdek, ilmiy-texnikaviy yordam ko‘rsatish maqsadida ishlab chiqarish korxonalari va boshqa tashkilot bilan aloqa o‘rnatish;",
    "- oliy ta’lim muassasasi bitiruvchilari hamda mazkur kafedrada stajyor- tadqiqotchi-izlanuvchi va katta ilmiy xodim-izlanuvchi bo‘lganlar bilan muntazam aloqalarni tashkil etish, bitiruvchilar monitoringini olib borish;",
    "- kafedra ixtisosligi bo‘yicha mutaxassislar malakasini oshirishga yo‘naltirilgan tadbirlar o‘tkazish, ta’lim xizmat ko‘rsatish tizimini rivojlantirish;",
    "- xorijiy ta’lim muassasalari bilan ta’lim sohasidagi hamkorlik aloqalarini rivojlantirish;",
    "- talabalarning qiziqishlarini e’tiborga olgan holda turli mavzular, yo‘nalishlar va ixtisosliklar, kasb-hunar turlari bo‘yicha to‘garaklar tashkil qilish, kichik korxonalarda, talabalarni darsdan bo‘sh vaqtini unumli va foydali mehnat bilan band qilishga qaratilgan tadbirlarni amalga oshirish;",
    "- kafedrada o‘qitiladigan fanlardan laboratoriya ishlarini to‘liq va sifatli o‘tkazilishini ta’minlash hamda kafedra laboratoriyalarini zamonaviy uskuna va qurilmalar bilan jihozlanishiga homiylarni keng jalb etish;",
    "- institut axborot-resurs markazini kafedra ta’lim yo‘nalishlari va mutaxassisliklariga oid yangi o‘quv, ilmiy-texnikaviy va davriy adabiyotlar bilan uzluksiz to‘ldirib borish va yangilanishini doimiy nazorat qilish.",
  ];

  let listRu = [
    "- подготовка высококвалифицированных, конкурентоспособных кадров, отвечающих высоким моральным и этическим требованиям развитых демократических государств;",
    "- регулярный сравнительный анализ и совершенствование государственных образовательных стандартов, учебных планов и программ кафедры по направлениям и специальностям с образовательными программами развитых зарубежных стран;",
    "- разработка учебных программ по дисциплинам кафедры и их представление на утверждение в установленном порядке, а также подготовка рецензий и заключений по учебным программам, подготовленным родственными кафедрами;",
    "- проведение занятий по дисциплинам, включенным в учебные планы, составленные в соответствии с государственными образовательными стандартами высшего образования, на высоком теоретическом, научно-методическом и профессиональном уровне, обеспечение качества образования;",
    "- руководство квалификационной практикой студентов, курсовыми проектами (работами), выпускными квалификационными работами, магистерскими диссертациями, а также самостоятельными и научно-исследовательскими работами студентов;",
    "- введение рейтингового контроля знаний студентов, проведение мероприятий по организации внеаудиторной работы студентов;",
    "- отбор талантливых студентов и их воспитание, подготовка к участию в олимпиадах и конкурсах, предоставление рекомендаций по совершенствованию форм и методов самостоятельной работы студентов;",
    "- системная организация научно-творческой деятельности студентов, привлечение талантливых студентов к исследованиям, обучение выполнению научно-исследовательских работ как индивидуально, так и в команде, создание необходимых организационных, методических и материально-технических условий для реализации их научно-творческой деятельности;",
    "- проведение научно-исследовательских работ в соответствии с утвержденным планом, обсуждение завершенных научно-исследовательских работ, их рекомендация к публикации и внедрение результатов в производство, обеспечение эффективной интеграции образования, науки и производства;",
    "- рассмотрение учебной, научно-методической, научно-исследовательской, духовно-нравственной и организационно-методической работы преподавателей кафедры, изучение, обобщение и распространение передового опыта опытных преподавателей;",
    "- внедрение современных педагогических и информационно-коммуникационных технологий, оказание помощи молодым преподавателям в приобретении педагогических навыков и умений, создание информационной базы, обеспечение эффективного использования современных учебно-технических средств, индивидуального обучения и методов самостоятельного обучения в учебном процессе. Организация обучения в специализированных учебных аудиториях, оснащенных современными компьютерными технологиями, развитие элементов дистанционного обучения;",
    "- подготовка научно-педагогических кадров, обсуждение кандидатских и докторских диссертаций по специальностям кафедры или смежным специальностям на научных семинарах, участие в экспертных группах для оценки соответствия образовательных документов нормативным требованиям;",
    "- привлечение внебюджетных средств, а также установление связей с производственными предприятиями и другими организациями для оказания научно-технической помощи;",
    "- организация регулярных контактов с выпускниками высшего учебного заведения, а также с аспирантами и докторантами, проводящими исследования на кафедре, проведение мониторинга выпускников;",
    "- проведение мероприятий, направленных на повышение квалификации специалистов по специальностям кафедры, развитие системы образовательных услуг;",
    "- развитие сотрудничества с зарубежными образовательными учреждениями в сфере образования;",
    "- организация кружков по различным темам, направлениям и специальностям, видам профессиональной деятельности с учетом интересов студентов, проведение мероприятий, направленных на полезную занятость студентов в свободное от учебы время в малых предприятиях;",
    "- обеспечение полного и качественного проведения лабораторных работ по преподаваемым на кафедре дисциплинам, привлечение спонсоров для оснащения лабораторий кафедры современным оборудованием и устройствами;",
    "- постоянное пополнение и обновление фонда информационно-ресурсного центра института новыми учебными, научно-техническими и периодическими изданиями по направлениям и специальностям кафедры и контроль за этим процессом.",
  ];

  let listEn = [
    "- training highly qualified, competitive personnel who meet the high moral and ethical standards of developed democratic countries;",
    "- regularly conducting a comparative analysis and improvement of state educational standards, curricula, and programs of the department's specializations with the educational programs of developed foreign countries;",
    "- developing curricula for the department's disciplines and submitting them for approval in the prescribed manner, as well as preparing reviews and conclusions on curricula prepared by related departments;",
    "- conducting classes on the subjects included in the curricula, compiled in accordance with state educational standards of higher education, at a high theoretical, scientific-methodological, and professional level, ensuring the quality of education;",
    "- supervising students' qualification practice, course projects (works), graduation qualification works, master's theses, as well as independent and research works;",
    "- introducing a rating control system for students' knowledge, organizing events to arrange students' extracurricular activities;",
    "- selecting talented students and nurturing them, preparing them for participation in Olympiads and competitions, providing recommendations for improving forms and methods of students' independent work;",
    "- systematically organizing students' scientific and creative activities, involving talented students in research, teaching them to perform research work both individually and in teams, creating the necessary organizational, methodological, and material-technical conditions for the realization of their scientific and creative activities;",
    "- conducting research work according to the approved plan, discussing completed research works, recommending them for publication, and implementing their results into production, ensuring the effective integration of education, science, and production;",
    "- reviewing the educational, scientific-methodological, research, spiritual, and organizational-methodological work of the department's teachers, studying, summarizing, and disseminating the best practices of experienced teachers;",
    "- implementing modern pedagogical and information-communication technologies, assisting young teachers in acquiring pedagogical skills, creating an information base, ensuring the effective use of modern educational and technical means, individual teaching, and self-study methods in the educational process. Organizing teaching in specialized classrooms equipped with modern computer technology, developing elements of distance learning;",
    "- training scientific and pedagogical staff, discussing PhD and doctoral dissertations in the department's specializations or related fields at scientific seminars, participating in expert groups to assess the compliance of educational documents with normative requirements;",
    "- attracting extrabudgetary funds, establishing contacts with industrial enterprises and other organizations to provide scientific and technical assistance;",
    "- organizing regular contacts with university graduates, as well as with postgraduates and researchers conducting research at the department, conducting graduate monitoring;",
    "- organizing events aimed at improving the qualifications of specialists in the department's specializations, developing the educational service system;",
    "- developing cooperation with foreign educational institutions in the field of education;",
    "- organizing clubs on various topics, directions, and specializations, types of professions taking into account students' interests, implementing activities aimed at engaging students in productive and useful work during their free time from classes in small enterprises;",
    "- ensuring the full and quality conduction of laboratory work on the subjects taught at the department, attracting sponsors to equip the department's laboratories with modern equipment and devices;",
    "- continuously updating and replenishing the information resource center of the institute with new educational, scientific-technical, and periodical literature related to the department's directions and specializations, and constantly monitoring this process.",
  ];

  let kafedraUz = [
    "70310102 - Iqtisodiyot (tarmoqlar va sohalar bo‘yicha) mutaxassislik magistraturasi;",
    "60310100 - Iqtisodiyot (tarmoqlar va sohalar bo‘yicha) bakalavr ta’lim yo‘nalishi;",
    "60410400 - Moliya va moliyaviy texnologiyalar bakalavr ta’lim yo‘nalishi;",
    "60410500 - Bank ishi va audit bakalavr ta’lim yo‘nalishi;",
  ];

  let kafedraRu = [
    "70310102 - Магистратура по специальности Экономика (по отраслям и сферам);",
    "60310100 - Направление бакалавриата по специальности Экономика (по отраслям и сферам);",
    "60410400 - Направление бакалавриата по специальности Финансы и финансовые технологии;",
    "60410500 - Направление бакалавриата по специальности Банковское дело и аудит.",
  ];

  let kafedraEn = [
    "70310102 - Master's program in Economics (by sectors and fields);",
    "60310100 - Bachelor's program in Economics (by sectors and fields);",
    "60410400 - Bachelor's program in Finance and Financial Technologies;",
    "60410500 - Bachelor's program in Banking and Auditing.",
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
                  <h4>Kafedraning asosiy faoliyati</h4>
                  {listUz.map((l) => (
                    <p className="m-0">{l}</p>
                  ))}
                  <h4 className="mt-3">Kafedraga tegishli yo‘nalishlar:</h4>
                  {kafedraUz.map((k) => (
                    <p className="m-0">{k}</p>
                  ))}
                  <h4 className="mt-3">Kafedraning o‘quv faoliyati</h4>
                  <p>
                    Hozirgi kunda “Iqtisodiyot” kafedrasida kafedra mudiri
                    i.f.f.d. dotsent Raximov Anvar Norimovich, i.f.d., professor
                    Yangiboyev Berdiyar Yangiboyevich, s.f.n., dotsent Astanayev
                    Kulmuxammat Sanayevich, PhD., dotsent Nabiyev Olim
                    Abdisalomovich, PhD., dotsent Ravshanova Muhayo
                    Maxmanazarovna, dotsent Mo'minov Fazliddin Shoymardonovich,
                    i.f.n., dotsent Qurbonov Alisher Bobokulovich, PhD., dotsent
                    Normamatov Ixtiyor Baxtiyarovich, PhD., dotsent Shodiyev
                    Bekzod To'lqinovich, PhD., dotsent Turopov Sherzod
                    Alisherovich, PhD., dotsent Farmonov Jonibek
                    Ziyadullayevich, katta o'qituvchilar: Abdiyeva Dilfuza
                    kurbanovna, Sultonov Sirojiddin Normurodovich, assistant
                    o‘qituvchilar: Azimov Allaberdi O'rinovich, Bekmurodova
                    Saodat Ikromovna, Gulbayeva Feruza Islamovna, Nusratova
                    Zanigor Baxtiyorna, Mamanazarov Nasiba Jurayevna,
                    Xolmirzayev Toir Ro'zimurodov, Ziyoyev Jamshid Lumonovich,
                    Bozorov Samar Safarovich, Ravshanova Xurshida
                    Maxmanazarovna, Abdullayev Olim G‘ayratovich, Mirjamilova
                    Hulkar, Raimov Farrux Erkinovich, Toshtemirov Yo‘ldosh
                    Norpo‘lat o‘g‘li, Aliqulov Humoyun Tohir o‘g‘li, kabinet
                    mudiri Toshpulatov Jaxongir Samar o‘g‘li va boshqalar faol
                    mehnat qilmoqdalar. <br />
                    Kafedra professor-o‘qituvchilari tomonidan <br />
                    60310100 - Iqtisodiyot (tarmoqlar va sohalar bo‘yicha);{" "}
                    <br />
                    60410400 - Moliya va moliyaviy texnologiyalar; <br />
                    60410500 - Bank ishi va audit <br />
                    bakalavriat (kunduzgi, kechki va sirtqi) ta’limi
                    yo’nalishlarida quyidagi fanlardan nazariy va amaliy
                    mashg’ulotlar olib boriladi: <br />
                    • Iqtisodiy ta`limotlar tarixi; • Statistika; <br />
                    • Soha iqtisodiyoti va menejmenti; <br />
                    • Ekonometrikaga kirish; <br />
                    • Mikroiqtisodiyot; <br />
                    • Makroiqtisodiyot; <br />
                    • Atrof-muhit va ta`biy resurslar iqtisodiyoti; <br />
                    • Raqamli iqtisodiyot; <br />
                    • Iqtisodiy siyosatga kirish; <br />
                    • Biznes matematika; <br />
                    • Marketing; <br />
                    • Kreativ fikrlash; <br />
                    • Strategik boshqaruv; <br />
                    • Moliya asoslari; <br />
                    • Dinamik makroiqtisodiyot; <br />
                    • Bojxona ishi; <br />
                    • Jahon iqtisodiyoti va xalqaro iqtisodiy munosabatlar;
                    <br />
                    • Mehnat iqtisodiyoti; <br />
                    • Menejment; <br />
                    • Buxgarteriya hisobi; <br />
                    • Korxonani tashkil etish va tadbirkorlik; <br />
                    • Agrosanoat majmuasi. <br />
                    Bulardan tashqari, 60310100 - Iqtisodiyot (tarmoqlar va
                    sohalar bo‘yicha) bakalavriat ta’limi yo‘nalishlarida
                    malakaviy, pedagogik va ishlab chiqarish amaliyotlari hamda
                    bitiruv malakavish ishlariga rahbarlik qiladi.
                  </p>

                  <p>
                    Magistratura ta’limi bo‘yicha kafedra
                    professor-o‘qituvchilari <br />
                    70310102 - Iqtisodiyot (tarmoqlar va sohalar bo‘yicha)
                    mutaxassislik magistrantlar uchun quyidagi fanlaridan
                    mashg‘ulotlar olib boradilar;
                    <br />
                    1. Mikroiqtisodiyot-2; <br />
                    2. Ilmiy-tadqiqot metodologiyasi; <br />
                    3. Maxsus fanlarni o‘qitish metodikasi; <br />
                    4. Empirik iqtisodiyot; <br />
                    5. Biznesni tadqiq etish usullari; <br />
                    6. Ishlab chiqarishni tashkil etish; <br />
                    7. Ijtimoiy iqtisodiyot va davlat siyosati; <br />
                    8. Korporativ strategiya; <br />
                    9. anoat klasterlari; <br />
                    10. Ekonometrika-2. <br />
                  </p>

                  <img className="mb-4" src={Image1} alt="image" />

                  <h4>Kafedraning ilmiy faoliyati</h4>

                  <p>
                    Doktorlik dissertasiyalari himoyalari: i.f.d., professor
                    Yangiboyev Berdiyar Yangiboyevich, <br /> <br />
                    Nomzodlik dissertasiyalari himoyalari: s.f.n., dotsent
                    Astanayev Kulmuxammat Sanayevich, i.f.n., dotsent Qurbonov
                    Alisher Bobokulovich, <br /> <br />
                    PhD dissertasiyalari himoyalari: i.f.f.d. dotsent Raximov
                    Anvar Norimovich, PhD., dotsent Nabiyev Olim Abdisalomovich,
                    PhD., dotsent Ravshanova Muhayo Maxmanazarovna, dotsent
                    Mo'minov Fazliddin Shoymardonovich, PhD., dotsent Normamatov
                    Ixtiyor Baxtiyarovich, PhD., dotsent Shodiyev Bekzod
                    To'lqinovich, PhD., dotsent Turopov Sherzod Alisherovich,
                    PhD., dotsent Farmonov Jonibek Ziyadullayevich, <br />
                    Kafedra a’zolari Respublika va xorijiy nufuzli ilmiy
                    jurnallarda ilmiy ishlarini chop etishadi, ilmiy
                    anjumanlarda qannashishadi. Oxirgi yillarda chop etilgan
                    ilmiy maqolalrdan namunalar:
                    <br />
                    <br /> • Gulbaeva Feruza Islamovna Assistant teacher of the
                    "Economics" department of the University of Economics and
                    Pedagogy FORMATION, DEVELOPMENT AND HISTORY OF STOCK
                    EXCHANGES IN THE WORLD JOURNAL OF AGRICULTURE & HORTICULTURE
                    International scientific journal
                    <br />
                    • F.I.Gulbaeva THE ROLE OF INSURANCE ORGANIZATIONS IN THE
                    SECURITIES MARKET INTERNATIONAL BULLETIN OF APPLIED SCIENCE
                    AND TECHNOLOGY ISSN: 2750-3402
                    <br />
                    • Bekmurodova Saodat Ikromovna METHODOLOGY OF EMPIRICAL
                    KNOWLEDGE OF KNOWLEDGE ECONOMY DEVELOPMENT Journal of
                    Advanced Zoology ISSN: 0253-7214
                    <br />
                    • A.N.Raximov. Statistical analysis of production activity
                    development of industrial enterprises. In Volume 4, Issue 5
                    of Academicia Globe: Inderscience Research (AGIR) May 2023.
                    ISSN 2776-1010 SJIF (2022): 6,023 Impact Factor (2022):
                    7,425.
                    <br />
                    • A.N.Raximov. Sanoat korxonalari ishlab chiqarish
                    faoliyatining rivojlanishi trend modellar asosida
                    prognozlash. International Journal of Economy and Innovation
                    | Gospodarka i Innowacje. Copyright © 2023 All rights
                    reserved International Journal for Gospodarka i Innowacje
                    This work licensed under a Creative Commons Attribution 4.0
                    https://gospodarkainnowacje.pl.
                    <br />
                    • . A.N.Raximov. Саноат корхоналари фаолияти иқтисодий
                    самарадорлигини оширишнинг эконометрик модели. Международный
                    научный журнал № 9 (100), часть 1 «Научный импульс» апреля,
                    2023. <br />
                    • A.N.Raximov Systematic approach in econometric modeling of
                    the development of industrial networks. International
                    scientific journal “INTERPRETATION AND RESEARCHES” volume 1
                    issue 19 15.12.2023. ISSN: 2181-4163 | UIF-2023: 8.2.
                    <br />
                    • A.N.Raximov. Dehqon xo‘jaliklari faoliyatining istiqbolli
                    rivojlantirishga ta`sir etuvchi omillar. "Экономика и
                    социум" за публикацию в международном научно-практичиском
                    журнале. №3(106) 2023. ISSN 2225-1545. www.iupr.ru.
                    <br />
                    • A.N.Raximov. Саноат тармоқларини ривожлантиришда оптимал
                    усулларни ишлаб чиқишнинг имитацион моделлари.
                    Biznes-Ekspert. 2023-yil 12 (192)-son. 11-bet.
                    <br />
                    • Econometric analysis of increasing efficiency of
                    industrial enterprises. E3S Web of Conferences 458, 04004
                    (2023) EMMFT-2023.
                    https://doi.org/10.1051/e3sconf/202345804004. Ҳаммуаалиф:
                    А.Н.Рахимов, М.Алиева
                    <br />
                    • Talabalarda ekonometrika fanini o‘qitishda laboratoriya
                    mashg‘ulotlarining ahamiyati” Ta’lim va innovatsion
                    tadqiqotlar (2023 йил №5) ISSN 2181-1709 (P)
                    <br />• Султонов Сирожиддин Нормуродович Иқтисодиёт ва
                    педагогика университети АҲОЛИ ДАРОМАДЛАРИ ТАБАҚАЛАШУВИНИ
                    КАМАЙТИРИШ БОРАСИДАГИ ИСЛОҲАТЛАРНИ ТАКОМИЛЛАШТИРИШ
                    ЙЎНАЛИШЛАРИ ORCID: 0009-0008-3433-6107
                  </p>
                </div>
              )}

              {lang == "ru" && (
                <div>
                  <h4>Основная деятельность кафедры</h4>
                  {listRu.map((l) => (
                    <p className="m-0">{l}</p>
                  ))}
                  <h4 className="mt-3">Направления, связанные с отделом:</h4>
                  {kafedraRu.map((k) => (
                    <p className="m-0">{k}</p>
                  ))}
                  <h4 className="mt-3">Образовательная деятельность кафедры</h4>
                  <p>
                    В настоящее время является заведующим кафедрой «Экономика».
                    если бы доцент Рахимов Анвар Норимович, к.б.н., профессор
                    Янгибаев Бердияр Янгибаевич, к.т.н., доцент Астанаев
                    Кулмухаммат Санаевич, к.ф.н., доцент Набиев Олим
                    Абдисаламович, к.б.н., доцент Равшанова Мухайо
                    Махманазаровна, доцент Моминов Фазлиддин Шоймардонович,
                    к.м.н., доцент Курбанов Алишер Бобокулович, к.м.н., доцент
                    Нормаматов Ихтиёр Бахтиярович, к.ф.н., доцент Шодиев Бекзод
                    Толкинович, к.ф.н., доцент Туропов Шерзод Алишерович,
                    к.б.н., доцент Фармонов Джонибек Зиядуллаевич, старшие
                    преподаватели: Абдиева Дильфуза Курбановна Султанов
                    Сироджиддин Нормуродович, ассистент преподаватели: Азимов
                    Аллаберди Оринович, Бекмуродова Саодат Икромовна, Гулбаева
                    Феруза Исламовна, Нусратова Занигор Бахтиорна, Маманазарова
                    Насиба Джураевна, Холмирзаев Тоир Розимуродов, Зиеев Джамшид
                    Лумонович, Бозоров Самар Сафарович, Равшанова Хуршида
                    Махманазаровна, Абдуллаев Олим Гайратович, Мирджамилова
                    Хулкар, Раимов Фаррух Эркинович, Тоштемиров Юлдош Сын
                    Норполата, сын Аликулова Хумаюн Тахир, кабинет директор
                    Ташпулатов Джахонгир Самар сын и другие активны они
                    работают. <br />
                    Профессора и преподаватели кафедры <br />
                    60310100 - Экономика (по отраслям и секторам); <br />
                    60410400 – Финансы и финансовые технологии; <br />
                    60410500 – Банковское дело и аудит <br />
                    высшее (дневное, вечернее и заочное) образование
                    теоретические и практические по следующим дисциплинам
                    тренинги проводятся: <br />
                    • История экономических учений; • Статистика; <br />
                    • Экономика и управление промышленностью; <br />
                    • Введение в эконометрику; <br />
                    • Микроэкономика; <br />
                    • Макроэкономика; <br />
                    • Экономика окружающей среды и природных ресурсов; <br />
                    • Цифровая экономика; <br />
                    • Введение в экономическую политику; <br />
                    • Бизнес-математика; <br />
                    • Маркетинг; <br />
                    • Креативное мышление; <br />
                    • Стратегический менеджмент; <br />
                    • Финансовые основы; <br />
                    • Динамическая макроэкономика; <br />
                    • Таможенная работа; <br />
                    • Мировая экономика и международные экономические отношения;
                    <br />
                    • Экономика труда; <br />
                    • Управление; <br />
                    • Бухгалтерский учет; <br />
                    • Создание предприятия и предпринимательство; <br />
                    • Агропромышленный комплекс. <br />
                    Кроме того, 60310100 – Экономика (сети и по направлениям) по
                    направлениям довузовского образования профессиональной,
                    педагогической и производственной практики и руководит
                    выпускной квалификационной работой.
                  </p>

                  <p>
                    Департамент магистерского образования профессора и
                    преподаватели <br />
                    70310102 - Экономика (по отраслям и отраслям) специализация
                    для аспирантов по следующим предметам проводить обучение;
                    <br />
                    1. Микроэкономика-2; <br />
                    2. Методика исследования; <br />
                    3. Методика преподавания специальных предметов; <br />
                    4. Эмпирическая экономика; <br />
                    5. Методы бизнес-исследований; <br />
                    6. Организация производства; <br />
                    7. Социальная экономика и государственная политика; <br />
                    8. Корпоративная стратегия; <br />
                    9. аноатные кластеры; <br />
                    10. Эконометрика-2. <br />
                  </p>

                  <img className="mb-4" src={Image1} alt="image" />

                  <h4>Научная деятельность кафедры</h4>

                  <p>
                    Защиты докторских диссертаций: И.Ф.Д., профессор Янгибаев
                    Бердияр Янгибаевич, <br /> <br />
                    Защита кандидатских диссертаций: к.т.н., доцент Астанаев
                    Кулмухаммат Санаевич, к.т.н., доцент Курбанов Алишер
                    Бобокулович, <br /> <br />
                    Защита кандидатских диссертаций: и.ф.ф.д. доцент Рахимов
                    Анвар Норимович, к.т.н., доцент Набиев Олим Абдисаламович,
                    к.п.н., доцент Равшанова Мухайё Махманазаровна, доцент
                    Моминов Фазлиддин Шоймардонович, к.х.н., доцент Нормаматов
                    Ихтиёр Бахтиярович, к.ф.н., доцент Шодиев Бекзод Туропов
                    Шерзод Алишерович, к.м.н. к.т.н., доцент Фармонов Джонибек
                    Зиядуллаевич, <br />
                    Членами кафедры являются видные ученые республики и
                    зарубежья. они публикуют свои научные работы в журналах,
                    научных они истекают кровью на конгрессах. Опубликовано в
                    последние годы примеры научных статей:
                    <br />
                    <br /> • Гульбаева Феруза Исламовна Ассистент преподавателя
                    Кафедра «Экономика» Экономического университета и Педагогика
                    СТАНОВЛЕНИЕ, РАЗВИТИЕ И ИСТОРИЯ ФОНДОВ ОБМЕНЫ В ВСЕМИРНОМ
                    ЖУРНАЛЕ СЕЛЬСКОГО ХОЗЯЙСТВА И САДОВОДСТВА Международный
                    научный журнал
                    <br />
                    • Ф.И. Гульбаева РОЛЬ СТРАХОВЫХ ОРГАНИЗАЦИЙ В СТРОИТЕЛЬСТВЕ.
                    РЫНОК ЦЕННЫХ БУМАГ МЕЖДУНАРОДНЫЙ БЮЛЛЕТЕНЬ ПРИКЛАДНОЙ НАУКИ
                    И ТЕХНОЛОГИИ ISSN: 2750-3402
                    <br />
                    • Бекмуродова Саодат Икромовна МЕТОДОЛОГИЯ ЭМПИРИЧЕСКОГО
                    ЗНАНИЯ РАЗВИТИЕ ЭКОНОМИКИ ЗНАНИЙ Журнал Продвинутая зоология
                    ISSN: 0253-7214
                    <br />
                    • А.Н. Рахимов. Статистический анализ производственной
                    деятельности развитие промышленных предприятий. В томе 4,
                    выпуске 5 из Academicia Globe: Inderscience Research (AGIR),
                    май 2023 г. ISSN 2776-1010 SJIF (2022 г.): 6023
                    Импакт-фактор (2022 г.): 7425.
                    <br />
                    • А.Н. Рахимов. Продукция промышленных предприятий развитие
                    деятельности на основе трендовых моделей прогнозирование.
                    Международный журнал экономики и инноваций | Господарка и
                    инновации. Copyright © 2023 Все права зарезервирован
                    Международный журнал для Gospodarka i Innowacje Эта работа
                    доступна по лицензии Creative Commons Attribution 4.0.
                    https://gospodarkainnowacje.pl.
                    <br />
                    • . А.Н. Рахимов. Деятельность промышленных предприятий
                    носит экономический характер. эконометрическая модель
                    повышения эффективности. Международный научный журнал №9
                    (100), глава 1 «Научный импульс» апрель, 2023. <br />
                    • А.Н. Рахимов Системный подход в эконометрическом
                    моделировании экономики. развитие промышленных сетей.
                    Международный научный журнал «ИНТЕРПРЕТАЦИЯ И ИССЛЕДОВАНИЯ»
                    том 1 выпуск 19 от 15.12.2023. ISSN: 2181-4163 | УИФ-2023:
                    8.2.
                    <br />
                    • А.Н. Рахимов. Перспективы деятельности агрохолдингов
                    Факторы, влияющие на развитие. «Экономика я социум" за
                    публикацию в международном научно-практическом журнал. №
                    3(106) 2023. ISSN 2225-1545. www.iupr.ru.
                    <br />
                    • А.Н. Рахимов. Оптимум в развитии отраслей промышленности
                    имитационные модели разработки методов. Бизнес-эксперт. 12
                    (192) 2023 г. Страница 11.
                    <br />
                    • Эконометрический анализ повышения эффективности
                    промышленные предприятия. Сеть конференций E3S 458, 04004
                    (2023) ЭММФТ-2023.
                    https://doi.org/10.1051/e3sconf/202345804004. Соавтор:
                    Рахимов А.Н., Алиева М.
                    <br />
                    • Лаборатория по обучению студентов эконометрике важность
                    обучения» Образовательно-инновационный Исследования (2023 №
                    5) ISSN 2181-1709 (П)
                    <br />• Султанов Сироджиддин Нормуродович Экономика и
                    Педагогический университет КЛАССИФИКАЦИЯ НАСЕЛЕНИЯ ПО
                    ДОХОДАМ СОВЕРШЕНСТВОВАНИЕ РЕФОРМ СОКРАЩЕНИЯ НАПРАВЛЕНИЯ
                    ОРКИД: 0009-0008-3433-6107
                  </p>
                </div>
              )}

              {lang == "en" && (
                <div>
                  <h4>Main activities of the department</h4>
                  {listEn.map((l) => (
                    <p className="m-0">{l}</p>
                  ))}
                  <h4 className="mt-3">
                    Directions related to the department:
                  </h4>
                  {kafedraEn.map((k) => (
                    <p className="m-0">{k}</p>
                  ))}
                  <h4 className="mt-3">
                    Educational activities of the department
                  </h4>
                  <p>
                    Currently he is the head of the Department of Economics. if
                    associate professor Rakhimov Anvar Norimovich, Ph.D.,
                    professor Yangibaev Berdiyar Yangibaevich, Ph.D., Associate
                    Professor Astanaev Kulmuhammat Sanaevich, Ph.D., Associate
                    Professor Olim Nabiev Abdisalamovich, Ph.D., Associate
                    Professor Ravshanova Mukhayo Makhmanazarovna, associate
                    professor Mominov Fazliddin Shoimardonovich, Candidate of
                    Medical Sciences, Associate Professor Kurbanov Alisher
                    Bobokulovich, Candidate of Medical Sciences, Associate
                    Professor Normamatov Ikhtiyor Bakhtiyarovich, Ph.D.,
                    Associate Professor Shodiev Bekzod Tolkinovich, Ph.D.,
                    Associate Professor Turopov Sherzod Alisherovich, Candidate
                    of Biological Sciences, Associate Professor Jonibek
                    Ziyadullaevich Farmonov, senior teachers: Abdieva Dilfuza
                    Kurbanovna Sultanov Sirodzhiddin Normurodovich, teaching
                    assistant: Azimov Allaberdi Orinovich, Bekmurodova Saodat
                    Ikromovna, Gulbaeva Feruza Islamovna, Nusratova Zanigor
                    Bakhtiorna, Mamanazarova Nasiba Juraevna, Kholmirzaev Toir
                    Rozimurodov, Zieev Jamshid Lumonovich, Bozorov Samar
                    Safarovich, Ravshanova Khurshida Makhmanazarovna, Abdullaev
                    Olim Gayratovich, Mirjamilova Hulkar, Raimov Farrukh
                    Erkinovich, Toshtemirov Yuldosh Son Norpolata, son of
                    Alikulov Humayun Tahir, office director Tashpulatov Jahongir
                    Samar son and others are active are working. <br />
                    Professors and teachers of the department <br />
                    60310100 - Economics (by industry and sector); <br />
                    60410400 – Finance and financial technologies; <br />
                    60410500 – Banking and auditing <br />
                    higher (day, evening and correspondence) education
                    theoretical and practical in the following disciplines
                    trainings are conducted: <br />
                    • History of Economic Thought; • Statistics; <br />
                    • Economics and industrial management; <br />
                    • Introduction to econometrics; <br />
                    • Microeconomics; <br />
                    • Macroeconomics; <br />
                    • Economics of the environment and natural resources; <br />
                    • Digital economy; <br />
                    • Introduction to economic policy; <br />
                    • Business mathematics; <br />
                    • Marketing; <br />
                    • Creative thinking; <br />
                    • Strategic management; <br />
                    • Financial fundamentals; <br />
                    • Dynamic macroeconomics; <br />
                    • Customs work; <br />
                    • World economy and international economic relations;
                    <br />
                    • Labor Economics; <br />
                    • Management; <br />
                    • Accounting; <br />
                    • Enterprise creation and entrepreneurship; <br />
                    • Agro-industrial complex. <br />
                    In addition, 60310100 – Economics (networks and areas) by
                    areas of pre-university professional education, pedagogical
                    and industrial practice and manages final qualifying work.
                  </p>

                  <p>
                    Department of Master's Education Professors and teachers{" "}
                    <br />
                    70310102 - Economics (by industry and sector) specialization
                    provide training for postgraduate students in the following
                    subjects;
                    <br />
                    1. Microeconomics-2; <br />
                    2. Research methodology; <br />
                    3. Methods of teaching special subjects; <br />
                    4. Empirical economics; <br />
                    5. Business research methods; <br />
                    6. Organization of production; <br />
                    7. Social economics and public policy; <br />
                    8. Corporate strategy; <br />
                    9. anoate clusters; <br />
                    10. Econometrics-2. <br />
                  </p>

                  <img className="mb-4" src={Image1} alt="image" />

                  <h4>Scientific activity of the department</h4>

                  <p>
                    Defense of doctoral dissertations: I.F.D., Professor
                    Yangibaev Berdiyar Yangibaevich, <br /> <br />
                    Defense of candidate dissertations: Ph.D., Associate
                    Professor Astanaev Kulmuhammat Sanaevich, Ph.D., Associate
                    Professor Kurbanov Alisher Bobokulovich, <br /> <br />
                    Defense of candidate dissertations: i.f.f.d. Associate
                    Professor Rakhimov Anvar Norimovich, Ph.D., Associate
                    Professor Olim Abdisalamovich Nabiev, Candidate of
                    Pedagogical Sciences, Associate Professor Ravshanova Mukhayo
                    Makhmanazarovna, Associate Professor Mominov Fazliddin
                    Shoimardonovich, Ph.D., Associate Professor Normamatov
                    Ikhtiyor Bakhtiyarovich, Ph.D., Associate Professor Shodiev
                    Bekzod Turopov Sherzod Alisherovich, Ph.D. Ph.D., Associate
                    Professor Jonibek Farmonov Ziyadullaevich, <br />
                    The members of the department are prominent scientists of
                    the republic and abroad. they publish their scientific works
                    in journals, scientific they bleed at congresses. Published
                    in recent years examples of scientific articles:
                    <br />
                    <br /> • Gulbaeva Feruza Islamovna Teaching Assistant
                    Department of Economics of the University of Economics and
                    Pedagogy FORMATION, DEVELOPMENT AND HISTORY OF EXCHANGE
                    FUNDS IN THE WORLD JOURNAL OF AGRICULTURE AND GARDENING
                    International Science Magazine
                    <br />
                    • Full name Gulbaeva ROLE OF INSURANCE ORGANIZATIONS IN
                    CONSTRUCTION. SECURITY MARKET INTERNATIONAL BULLETIN OF
                    APPLIED SCIENCE AND TECHNOLOGIES ISSN: 2750-3402
                    <br />
                    • Bekmurodova Saodat Ikromovna METHODOLOGY OF EMPIRICAL
                    KNOWLEDGE DEVELOPMENT OF KNOWLEDGE ECONOMY Journal Advanced
                    Zoology ISSN: 0253-7214
                    <br />
                    • A.N. Rakhimov. Statistical analysis of production
                    activities development of industrial enterprises. In volume
                    4, issue 5 of Academicia Globe: Inderscience Research
                    (AGIR), May 2023 ISSN 2776-1010 SJIF (2022): 6023 Impact
                    factor (2022): 7425.
                    <br />
                    • A.N. Rakhimov. Products of industrial enterprises
                    development activity forecasting based on trend models.
                    International Journal of Economics and Innovation |
                    Gospodarka and innovation. Copyright © 2023 All rights
                    reserved International magazine for Gospodarka i Innowacje
                    This work available under a Creative Commons Attribution 4.0
                    license. https://gospodarkainnowacje.pl.
                    <br />
                    • . A.N. Rakhimov. Activities of industrial enterprises is
                    of an economic nature. econometric model increasing
                    efficiency. International scientific journal No. 9 (100),
                    chapter 1 “Scientific impulse” April, 2023. <br />
                    • A.N. Rakhimov System approach in econometrics economic
                    modeling. development of industrial networks. International
                    scientific journal "INTERPRETATION AND RESEARCH" volume 1
                    issue 19 dated 12/15/2023. ISSN: 2181-4163 | UIF-2023: 8.2.
                    <br />
                    • A.N. Rakhimov. Prospects for the activities of
                    agricultural holdings Factors influencing development.
                    "Economy and society" for publication in an international
                    scientific and practical journal. No. 3(106) 2023. ISSN
                    2225-1545. www.iupr.ru.
                    <br />
                    • A.N. Rakhimov. Optimum in the development of industries
                    simulation models for method development. Business expert.
                    12 (192) 2023 Page 11.
                    <br />
                    • Econometric analysis of efficiency improvements industrial
                    enterprises. Conference Network E3S 458, 04004 (2023)
                    EMMFT-2023. https://doi.org/10.1051/e3sconf/202345804004.
                    Co-author: Rakhimov A.N., Alieva M.
                    <br />
                    • Laboratory for teaching students econometrics importance
                    training" Educational and Innovation Research (2023 No. 5)
                    ISSN 2181-1709 (P)
                    <br />• Sultanov Sirodzhiddin Normurodovich Economics and
                    Pedagogical University CLASSIFICATION OF POPULATION BY
                    INCOME IMPROVEMENT REFORMS REDUCING DIRECTIONS ORKID:
                    0009-0008-3433-6107
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
