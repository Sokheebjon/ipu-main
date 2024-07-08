import { useLocation } from "react-router-dom";
import instructors from "../../data/Instructors.json";
import { getProductName } from "../../helpers/general";
import { useIntl } from "react-intl";

const InstructorDetailsMain = () => {
  const location = useLocation();
  const postURL = location.pathname.split("/");
  const instructor = instructors.find((b) => b.id === Number(postURL[2]));

  const intl = useIntl();
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
                  <h4 className="text-black">
                    IQTISODIYOT VА PEDАGOGIKА UNIVERSITETI KENGАSHI TO‘G‘RISIDА
                    NIZOM
                  </h4>
                  <p>
                    KENGАSHI TO‘G‘RISIDА NIZOM O‘zbekiston Respublikasi Oliy va
                    o‘rta maxsus taʼlim vazirligining 2011 yil 3-dekabrdagi
                    487-sonli buyrug‘i bilan tasdiqlangan “Oliy taʼlim
                    muassasasining Ilmiy Kengashi to‘g‘risidagi na’munaviy
                    nizom” asosida ishlab chiqilgan mazkur Nizom O‘zbekiston
                    Respublikasining “Taʼlim to‘g‘risida”gi (O‘zbekiston
                    Respublikasi Oliy Majlisining Аxborotnomasi, 1997 yil 9-son,
                    225-modda) va “Kadrlar tayyorlash milliy dasturi
                    to‘grisida”gi (Oʼzbekiston Respublikasi Oliy Majlisining
                    Аxborotnomasi, 1997 y. 11-12-son, 295-modda) qonunlari,
                    “Oliy taʼlim to‘g‘risida”gi Nizomga muvofiq Iqtisodiyot va
                    pedagogika universiteti Kengashi faoliyatini tashkil etish
                    tartibini belgilaydi.
                  </p>
                  <h5 className="text-black">I. Umumiy qoidalar</h5>
                  <p>
                    1. Iqtisodiyot va pedagogika universiteti (keyingi
                    o‘rinlarda-universitet) faoliyatiga tegishli asosiy
                    masalalarni ko‘rib chiqish uchun rektor raisligida
                    universitet Kengashi (keyingi o‘rinlarda-Kengash) tashkil
                    etiladi.
                    <br />
                    2. Kengash tarkibi rektor, prorektorlar, fakultet dekanlari,
                    mutaxassis chiqaruvchi kafedralar mudirlari, shuningdek,
                    jamoat tashkilotlari rahbarlaridan tashkil etiladi.
                    Kengashning boshqa aʼzolari fakultetlarning umumiy majlisida
                    yashirin ovoz berish yo‘li bilan saylanadi.
                    Professor-o‘qituvchilar tarkibidan Kengashga saylanuvchi
                    aʼzolarning soni rektorning buyrug‘i bilan belgilanadi.
                    Kengash tarkibiga universitetda muayyan yo‘nalish muammolari
                    bo‘yicha ishlayotgan yirik olim va mutaxassislar ham
                    kiritilishi mumkin. Kengash vakolat muddati – 5 yil.
                    <br />
                    3. Kengash tarkibi universitet rektorining buyrug‘i bilan
                    tasdiqlanadi. Har o‘quv yilining boshida, turli sabablarga
                    ko‘ra Kengash tarkibidan chiqqanlar o‘rniga, yangi aʼzolar
                    saylanadi yoki nizom bo‘yicha kiritiladi.
                  </p>
                  <h5 className="text-black">
                    II. Kengashning maqsad va vazifalari
                  </h5>
                  <p>
                    4. Kengashning maqsadi–universitet jamoasi sa’y-harakatlari,
                    intellektual salohiyati va boshqa barcha imkoniyatlarni
                    O‘zbekiston Respublikasining “Taʼlim to‘g‘risida”gi qonunda
                    belgilangan vazifalarning bajarilishini taʼminlash, oliy
                    taʼlimning davlat taʼlim standarti talablari darajasida
                    mukammal bilim, malaka, ko‘nikmalarga ega bo‘lgan
                    professional mutaxassislar tayyorlashga yo‘naltirishdan
                    iborat. <br />
                    5. Universitet Kengashi: <br />
                    – kadrlar tayyorlash milliy dasturiga muvofiq davlat taʼlim
                    standartlari, o‘quv rejalari va dasturlarining qat’iy
                    bajarilishini o‘rganib chiqadi hamda ustuvor masalalar
                    bo‘yicha tavsiya va topshiriqlar belgilaydi; <br />
                    – fakultetlarning o‘quv, ilmiy-tadqiqot va maʼnaviy-maʼrifiy
                    ishlari to‘g‘risidagi, qabul komissiyasining qabul
                    natijalari to‘g‘risidagi, shuningdek marketing xizmatining
                    xalq xo‘jaligining bitiruvchi mutaxassislarga bo‘lgan
                    ehtiyoji, buyurtmachi tashkilotlar bilan hamkorlik aloqalari
                    to‘g‘risidagi hisobotlarini eshitadi hamda tegishli qaror
                    qabul qiladi; <br />
                    – ilmiy-tadqiqot, maʼnaviy-maʼrifiy ishlar rejalari ijrosi,
                    professor-o‘qituvchilar tarkibining malaka oshirish va qayta
                    tayyorlash masalalarini muhokama qiladi hamda tegishli
                    qarorlarni qabul qiladi; <br />
                    – universitet rivojlanishining yillik va istiqbolli
                    rejalarini tasdiqlaydi, moddiy-texnik taʼminot va
                    moliyaviy-xo‘jalik faoliyati natijalarini muhokama qiladi
                    hamda tegishli qarorlarni qabul qiladi; <br />
                    – fakultet va kafedralarni ochish, tugatish, o‘zgartirish,
                    shuningdek marketing xizmati takliflarini hisobga olgan
                    holda yangi bakalavriat yo‘nalishlari bo‘yicha kadrlar
                    tayyorlashni yo‘lga qo‘yish yoki to‘xtatish bilan bog‘liq
                    masalalar bo‘yicha qaror qabul qiladi; <br />
                    – “Oliy taʼlim muassasalariga pedagog xodimlarni tanlov
                    asosida ishga qabul qilish tartibi to‘g‘risida”gi Nizomga
                    muvofiq professor-o‘qituvchilar lavozimlarini egallash uchun
                    tanlovlar o‘tkazadi; <br />
                    – jismoniy tarbiya va sport o‘qituvchisi (kafedra mudiri)
                    lavozimini egallash uchun tanlov o‘tkaziladigan Kengash
                    yig‘ilishini O‘zbekiston Respublikasi Jismoniy tarbiya va
                    sport vazirligi vakilining ishtirokida o‘tkazadi; <br />
                    – professor, dotsent ilmiy unvonini olish uchun
                    nomzodlarning hujjatlarini ko‘rib chiqadi va belgilangan
                    tartibda ilmiy unvonga tasdiqlashga taqdim etadi; <br />–
                    universitet bitiruvchilari hamda
                    professor-o‘qituvchilarining ingliz tilini bilishlarini
                    taʼminlash va kompyuter texnologiyalari, internetdan
                    foydalana olishlari bo‘yicha tayanch ko‘nikmalarni
                    shakllantirish masalalarini muhokama qiladi va
                    chora-tadbirlar belgilaydi; <br />
                    – taʼlim jarayonining o‘quv adabiyotlari bilan
                    taʼminlanganligi, yangi avlod darslik va o‘quv
                    qo‘llanmalari, shuningdek innovatsion taʼlim
                    texnologiyalarini qo‘llashga asoslangan o‘quv-uslubiy
                    majmualarni tayyorlash va nashr etish masalalarini muhokama
                    qiladi; <br />
                    – iqtidorli talabalar safidan va professor-o‘qituvchilar
                    tarkibidan nomzodlarni “El yurt umidi” jamg‘armasi orqali
                    xorijiy oliy taʼlim muassasalarida stajirovka o‘tashga
                    tavsiya etadi; <br />
                    – “Sog‘lom avlod uchun” jamg‘armasi bilan hamkorlikda
                    talabalarning jismoniy tarbiyasi va ularning sog‘liklarini
                    yanada yaxshilash bo‘yicha tadbirlar ishlab chiqadi; <br />
                    – asosiy buyurtmachi tashkilot, korxona va muassasalar bilan
                    korporativ hamkorlikni rivojlantirish, moddiy-texnik bazani
                    mustahkamlash hamda talabalarning malakaviy amaliyoti
                    samaradorligini oshirish masalalarini muhokama qiladi va
                    ularni yaxshilash bo‘yicha tavsiyalar ishlab chiqadi; <br />
                    – xorijiy mamlakatlarning oliy taʼlim muassasalari bilan
                    hamkorlik aloqalarini o‘rnatish bo‘yicha qarorlar qabul
                    qiladi; <br />
                    – universitet talabalari va xodimlarining texnika
                    xavfsizligi va mehnat muhofazasini takomillashtirish
                    bo‘yicha tadbirlarni belgilaydi. <br />
                  </p>
                  <h5 className="text-black">
                    III. Kengash faoliyatini tashkil etish
                  </h5>
                  <p>
                    6. Kengash o‘z faoliyatini har o‘quv yili uchun ishlab
                    chiqiladigan rejaga muvofiq amalga oshiradi. Kengash rejasi
                    Kengash tomonidan ko‘rib chiqilganidan so‘ng universitet
                    rektori tomonidan tasdiqlanadi. <br />
                    7. Universitetning o‘quv, ilmiy-uslubiy, ilmiy-tadqiqot,
                    maʼnaviy-maʼrifiy va tashkiliy ishlariga doir barcha
                    masalalar bo‘yicha Kengash qarorlari ochiq ovoz berish
                    tartibida ko‘pchilikning ovozi bilan qabul qilinadi. Kengash
                    majlisi uning tarkibidagi aʼzolarning 2/3 qismi ishtirok
                    etgandagina haqiqiy hisoblanadi. <br />
                    Professor-o‘qituvchilar tarkibi lavozimlarini egallash hamda
                    professor yoki dotsent ilmiy unvonlarini berish bo‘yicha
                    o‘tadigan tanlovlar va taqdimnomalar yuzasidan qarorlar
                    yopiq ovoz berish yo‘li bilan belgilangan tartibda qabul
                    qilinadi.
                    <br />
                    8. Kengash qarorlari universitet rektori tomonidan
                    tasdiqlangandan so‘ng kuchga kiradi. <br />
                    9. Kengash majlisi bayonnoma bilan rasmiylashtiriladi,
                    bayonnomalar Kengash raisi va ilmiy kotibi tomonidan
                    imzolanadi.
                    <br />
                    10. Kengash raisi muntazam ravishda Kengash qarorlarining
                    bajarilishi bo‘yicha tekshiruvlar tashkil etadi va Kengash
                    aʼzolariga ularning natijalari haqida axborot beradi.
                    <br />
                  </p>
                  <h4>Unversitet Kengashi kotibining lavozim vazifalari</h4>
                  <p>
                    - Har oyda o‘tkaziladigan universitet Kengashi majlisining
                    ish rejasi bo‘yicha tegishli sohalar mas’ullariga qaror
                    loyihalarini tayyorlash bo‘yicha xabar berish va uni nazorat
                    qilib borish; <br />
                    - universitet Kengashi a’zolarini Kengashda ishtirokini
                    ta’minlash va ularga majlis kuni hamda vaqti haqida xabar
                    berish; <br />
                    - universitet Kengashi qarorlari loyihasini mas’ullardan o‘z
                    vaqtida olish va ularni rasmiylashtirish; <br />
                    - universitet Kengashi qarorlari loyihasi rasmiylashtirilib,
                    tayyor bo‘lgach barcha kengash a’zolariga tarqatish; <br />
                    - universitet Kengashi qarorlari ijrosi ustidan muntazam
                    monitoringni amalga oshirish; <br />
                    - universitet Kengashi qarorlari loyihasini mas’ullar
                    tomonidan bajarilmagan taqdirda yozma yoki og‘zaki ravishda
                    universitet Kengashi raisiga hisobot berish; <br />-
                    universitet Kengashi qarorlarini bayonnoma bilan
                    rasmiylashtirish. Bayonnomalarni universitet Kengashining
                    raisi va ilmiy kotibi tomonidan imzolab tasdiqlanishini
                    ta’minlash; <br />- universitet Kengash tasdig‘idan o‘tgan
                    barcha universitet hujjatlarining bayonnomadan ko‘chirmasini
                    tasdiqlab berish; <br />
                    - universitet Kengashi qaroriga muvofiq professor, dotsent
                    ilmiy unvonini olishga intilayotgan izlanuvchilarning
                    hujjatlarini ko‘rib chiqish va belgilangan tartibda ilmiy
                    unvonga tasdiqlash uchun taqdim etish hamda hujjatlarni
                    OAKga jo‘natish; <br />
                    - universitet Kengashi muhokamasidan o‘tgan doktorlik va
                    nomzodlik dissertatsiyasi mavzulariga bayonnomadan
                    ko‘chirmani tasdiqlash; <br />
                    - kafedra mudiri, professor va dotsent lavozimlariga
                    kafedralar bo‘yicha vakant lavozimlarga yopiq ovoz berish
                    yo‘li bilan tanlov o‘tkazib, rasmiylashtirish; <br />
                    - professor-o‘qituvchilarning ilmiy ishlar ro‘yxatini
                    tasdiqlab berish; <br />
                    - har o‘quv yili oxirida universitet Kengash
                    bayonnomalarining yig‘ma jildini arxivga topshirish; <br />
                    - universitet Kengash rejasi universitet Kengashi tomonidan
                    ko‘rib chiqilgandan so‘ng universitet rektori tomonidan
                    tasdiqlanishini ta’minlash; <br />
                    - O‘zbekiston Respublikasi Prezidentining Farmoyishlari,
                    Vazirlar Mahkamasi Qarorlari, Oliy ta’lim, fan va
                    innovatsiyalar vazirligi Hay’ati Qarorlari hamda buyruqlari
                    asosida ish rejasiga o‘zgartirishlar kiritish; <br />
                    - universitet Kengash yig‘ma jildlar nomenklaturasini doimiy
                    tarzda yuritish va barcha hujjatlar monitoringini amalga
                    oshirish; <br />- amaldagi qonunchilik asosida boshqa
                    vazifalarni bajarish. <br />
                  </p>
                  <h5 className="text-black">Bilishi kerak:</h5>
                  <p>
                    Universitetda ilmiy ishlarini olib borish bo‘yicha normativ
                    hujjatlar, vazirlik buyruqlari bilan belgilangan lavozim
                    vazifalarini, oliy ta’limga oid qonunlarni, Oliy ta’lim, fan
                    va innovatsiyalar vazirligining buyruq va yo‘riq xatlarini
                    bilishi, professor-o‘qituvchilar tarkibining tanlov orqali
                    lavozimlarini egallash tartibini bilishi, ilmiy daraja va
                    ilmiy unvonlar berish tartibini bilishi.
                  </p>
                  <h5 className="text-black">Malaka talablari:</h5>
                  <p>
                    - oliy ta’limga oid qarorlarni, oliy o‘quv yurtlari
                    to‘g‘risidagi Nizomni, Oliy ta’lim, fan va innovatsiyalar
                    vazirligining buyruq va yo‘riq xatlarini bilishi;
                    <br />
                    - universitet Kengashiga, ilmiy unvon berishga taalluqli
                    ko‘rsatmalarini hamda rahbariy va me’yoriy hujjatlarini
                    bilishi;
                    <br />
                    - oliy ma’lumotga ega bo‘lishi; <br />
                    - professor-o‘qituvchilar tarkibining tanlov orqali
                    lavozimlarini egallash tartibini bilishi zarur. <br />
                  </p>
                </div>
              )}
              {lang == "ru" && (
                <div>
                  <h4 className="text-black">
                    О СОВЕТЕ ЭКОНОМИКО-ПЕДАГОГИЧЕСКОГО УНИВЕРСИТЕТА
                  </h4>
                  <p>
                    ПОЛОЖЕНИЕ О СОВЕТЕ Олия и Министерства среднего специального
                    образования от 3 декабря 2011 года Утверждено приказом № 487
                    «Высшее образование». типовое положение об Ученом совете
                    учреждения" Настоящее Положение Узбекистана разработано на
                    основе «Об образовании» Республики Узбекистан (Узбекистан)
                    Вестник Олий Мажлиса Республики, №9 за 1997 год, статьи 225)
                    и «О Национальной программе подготовки кадров». (Вестник
                    Олий Мажлиса Республики Узбекистан, 1997 г.) й. Законы №
                    11-12, статья 295), «Высшее образование Экономика и
                    педагогика в соответствии с Положением порядок организации
                    деятельности Совета университета определяет.
                  </p>
                  <h5 className="text-black">I. Общие положения</h5>
                  <p>
                    1. Университет экономики и педагогики (следующий
                    места-университет), связанные с основной деятельностью
                    университета под председательством ректора рассмотреть
                    вопросы Создается Совет (далее – Совет).
                    <br />
                    2. В состав совета входят ректор, проректоры, деканы
                    факультетов, руководители профильных отделов, а также он
                    формируется из лидеров общественных организаций. Остальные
                    члены совета находятся на общем собрании факультетов. избран
                    тайным голосованием. Избран в Совет из числа профессоров и
                    преподавателей. Число членов определяется приказом ректора.
                    В совет входят проблемы конкретного направления в
                    университете. и ведущие ученые и эксперты, работающие над
                    этим можно войти. Срок полномочий Совета – 5 лет.
                    <br />
                    3. Состав совета формируется приказом ректора университета.
                    подтверждено. В начале каждого учебного года по разным
                    причинам вместо покинувших Совет новые члены избирается или
                    вводится в соответствии с уставом.
                  </p>
                  <h5 className="text-black">
                    II. Kengashning maqsad va vazifalari
                  </h5>
                  <p>
                    4. Целью совета являются усилия коллектива университета,
                    интеллектуальный потенциал и все другие возможности В Законе
                    Республики Узбекистан «Об образовании». обеспечение
                    выполнения указанных задач, выше образование на уровне
                    требований государственного образовательного стандарта
                    профессионал с отличными знаниями, навыками и способностями
                    состоит из направления на подготовку специалистов. <br />
                    5. Совет университета: <br />
                    - государственное образование в соответствии с национальной
                    программой подготовки кадров строгие стандарты, учебные
                    планы и программы изучает реализацию и приоритетные вопросы
                    определяет рекомендации и задания; <br />
                    - образовательные, научно-исследовательские и
                    духовно-просветительские факультеты результаты приемной
                    комиссии о, а также люди из маркетинговой службы потребность
                    экономики в дипломированных специалистах, сотрудничество с
                    организациями-заказчиками заслушивает их отчеты и принимает
                    соответствующее решение принимает; <br />- реализация планов
                    научно-исследовательской, духовно-просветительской работы,
                    подготовка и переподготовка профессорско-преподавательского
                    состава обсуждает вопросы подготовки и связанные с ними
                    вопросы принимает решения; <br />
                    - годовые и перспективные планы развития университета
                    подтверждает, материально-техническое обеспечение и
                    финансово-экономическое обсуждает результаты деятельности и
                    связанные с ней принимает решения;
                    <br />
                    - открытие, закрытие, смена факультетов и кафедр, а также
                    предложения маркетинговых услуг подготовка кадров на новые
                    курсы бакалавриата проблемы, связанные с запуском или
                    остановкой принимает решение о;
                    <br />
                    - «Подбор профессорско-преподавательского состава в высшие
                    учебные заведения. к Положению о порядке приема на работу на
                    основании занимать соответствующие должности профессоров и
                    преподавателей проводит конкурсы;
                    <br />
                    - учитель физкультуры и спорта (заведующий кафедрой) Совет,
                    где проводится конкурс на замещение должности совещание
                    Республики Узбекистан по физической культуре и пройдет при
                    участии представителя Министерства спорта; <br />
                    - кандидаты на звание профессора, доцента изучает документы
                    и проводит исследования в установленном порядке представляет
                    на утверждение название; <br />- Университет Английский
                    выпускников и преподавателей обеспечение владения языком и
                    компьютерными технологиями, базовые навыки пользования
                    Интернетом Обсуждает вопросы формирования и мероприятий.
                    определяет; <br />
                    - с учебной литературой учебного процесса предоставлены
                    учебники и учебные пособия нового поколения, а также
                    использование инновационных образовательных технологий
                    подготовка и издание учебно-методических комплектов на
                    основе обсуждает вопросы;
                    <br />
                    - талантливые студенты и преподаватели через фонд «Эл юрт
                    умиди» рекомендация на стажировку в зарубежных вузах
                    достигает;
                    <br />
                    - В сотрудничестве с фондом «За здоровое поколение».
                    физическое воспитание студентов и их здоровье разрабатывает
                    меры по дальнейшему совершенствованию; <br />
                    - с основной организацией-заказчиком, предприятиями и
                    учреждениями развитие корпоративной кооперации,
                    материально-технической базы укрепление и профессиональная
                    практика студентов обсуждает вопросы повышения эффективности
                    и разрабатывает рекомендации по их улучшению; <br />– с
                    высшими учебными заведениями зарубежных стран принятие
                    решений об установлении отношений сотрудничества делает;{" "}
                    <br />- техническая безопасность студентов и сотрудников
                    университета. и меры по улучшению охраны труда определяет.{" "}
                    <br />
                  </p>
                  <h5 className="text-black">
                    III. Организация деятельности совета
                  </h5>
                  <p>
                    6. Совет проводит свою деятельность в соответствии с
                    утвержденным им регламентом, который утверждается ректором
                    университета после утверждения его Советом. После
                    составления регламента, он подлежит утверждению ректором.
                    <br />
                    7. Решения Совета по всем вопросам, касающимся учебного,
                    научно-методического, научно-исследовательского,
                    духовно-просветительского и организационного дела
                    университета, принимаются открытым голосованием большинством
                    голосов членов Совета. Пленум Совета считается правомочным,
                    если в его составе участвует 2/3 членов. Решения о
                    назначении на должность преподавателя по профильным кафедрам
                    и о предоставлении ученых степеней профессора и доцента
                    принимаются открытым голосованием.
                    <br />
                    8. Решения Совета, одобренные ректором университета,
                    вступают в силу.
                    <br />
                    9. Решения Совета официально оформляются протоколом, который
                    подписывают председатель Совета и его секретарь.
                    <br />
                    10. Председатель Совета регулярно организует проверки по
                    выполнению решений Совета и информирует членов Совета об их
                    результатах.
                    <br />
                  </p>
                  <h4>
                    Обязанности должности секретаря Университетского Совета
                  </h4>
                  <p>
                    - Предоставлять информацию и контролировать ответственных
                    лиц по вопросам, связанным с подготовкой проектов решений по
                    работе заседания Университетского Совета, проводимого
                    ежемесячно; <br />
                    - Обеспечивать участие членов Университетского Совета в
                    заседании и сообщать им о дате и времени проведения; <br />
                    - Своевременно получать и оформлять решения Университетского
                    Совета ответственными лицами; <br />- После утверждения
                    решений Университетского Совета обеспечивать их
                    распространение среди всех членов совета; <br />
                    - Организовывать регулярное проведение мониторинга по
                    исполнению решений Университетского Совета; <br />
                    - В случае неисполнения решений Университетского Совета
                    сообщать о них ректору Университета устно или письменно;
                    <br />
                    - Обеспечивать официальное утверждение решений
                    Университетского Совета путем подписания протоколов
                    председателем и секретарем Университетского Совета; <br />
                    - Утверждать перечни всех документов Университета, прошедших
                    утверждение Совета, после их утверждения; <br />
                    - Проверять и выявлять документы претендентов, желающих
                    получить ученые степени профессора и доцента в соответствии
                    с установленным порядком и направлять их в Окружную
                    аттестационную комиссию (ОАК); <br />
                    - Утверждать перенос на темы докторских и кандидатских
                    диссертаций, прошедших мухокаму Университетского Совета;
                    <br />
                    - Проводить голосование по вакантным должностям заведующих
                    кафедр, профессоров и доцентов по специальности кафедр;
                    <br />
                    - Утверждать список научных работ преподавателей; <br />
                    - После окончания каждого учебного года представлять на
                    архивацию собранные протоколы заседаний Университетского
                    Совета; <br />
                    - Обеспечивать утверждение регламента Университетского
                    Совета после его рассмотрения Университетским Советом и
                    утверждения ректором Университета; <br />
                    - Вносить изменения в рабочий порядок в соответствии с
                    указаниями Президента Республики Узбекистан, решениями
                    Кабинета Министров, решениями Высшего образовательного,
                    научного и инновационного ведомства, а также приказами на
                    основе текущего законодательства; <br />- Поддерживать
                    постоянное ведение списка документов Университетского Совета
                    и проводить мониторинг всех документов в соответствии с
                    действующим законодательством; <br />
                    - Выполнять другие обязанности в соответствии с действующим
                    законодательством. <br />
                  </p>

                  <h5 class="text-black">Необходимые знания:</h5>
                  <p>
                    Знание нормативных документов, ведомственных приказов и
                    инструкций министерства образования, научных и инновационных
                    вопросов, писем и распоряжений министерства образования,
                    научных и инновационных вопросов, порядка избрания состава
                    профессорско-преподавательского состава путем голосования,
                    порядка присвоения ученых степеней и ученых званий.
                  </p>
                  <h5 class="text-black">Требования к квалификации:</h5>
                  <p>
                    - Знание постановлений по высшему образованию, Устава высших
                    учебных заведений, писем и распоряжений министерства
                    образования, науки и инноваций;
                    <br />
                    - Знание представления в Университетский Совет, писем
                    руководящих и нормативных документов;
                    <br />
                    - Владение высшим образованием;
                    <br />- Необходимо знание порядка избрания состава
                    профессорско-преподавательского состава путем голосования.
                  </p>
                </div>
              )}
              {lang == "en" && (
                <div>
                  <h4 className="text-black">
                    ABOUT THE COUNCIL OF ECONOMIC AND PEDAGOGICAL UNIVERSITY
                  </h4>
                  <p>
                    These regulations have been developed based on the “Model
                    Regulations on the Academic Council of a Higher Education
                    Institution,” approved by Order No. 487 of the Ministry of
                    Higher and Secondary Specialized Education of the Republic
                    of Uzbekistan dated December 3, 2011. The present
                    regulations determine the procedures for organizing the
                    activities of the Council of the University of Economics and
                    Pedagogy, in accordance with the laws of the Republic of
                    Uzbekistan “On Education” (Bulletin of the Supreme Council
                    of the Republic of Uzbekistan, 1997, No. 9, Article 225) and
                    “On the National Program for Personnel Training” (Bulletin
                    of the Supreme Council of the Republic of Uzbekistan, 1997,
                    Nos. 11-12, Article 295), and the “Regulations on Higher
                    Education.”
                  </p>
                  <h5 className="text-black">I. General provisions</h5>
                  <p>
                    1. University of Economics and Pedagogy (next university
                    places) related to the main activity of the university under
                    the chairmanship of the rector to consider questions A
                    Council is being created (hereinafter referred to as the
                    Council).
                    <br />
                    2. The council includes the rector, vice-rectors, deans
                    faculties, heads of specialized departments, as well as him
                    is formed from leaders of public organizations. Rest Council
                    members are present at the general meeting of faculties.
                    elected by secret ballot. Elected to the Council from among
                    professors and teachers. The number of members is determined
                    by order of the rector. The council includes problems of a
                    specific direction in university. and leading scientists and
                    experts working on with this you can enter. The term of
                    office of the Council is 5 years.
                    <br />
                    3. The composition of the council is formed by order of the
                    university rector. confirmed. At the beginning of each
                    academic year, different reasons, instead of those who left
                    the Council, new members are elected or introduced in
                    accordance with the charter.
                  </p>
                  <h5 className="text-black">
                    II. Kengashning maqsad va vazifalari
                  </h5>
                  <p>
                    4. The purpose of the council is the efforts of the
                    university staff, intellectual potential and all other
                    capabilities in Law Republic of Uzbekistan “On Education”.
                    security fulfillment of the specified tasks, higher
                    education at the level requirements of the state educational
                    standard professional with excellent knowledge, skills and
                    abilities consists of referral for specialist training.{" "}
                    <br />
                    5. University Council: <br />
                    - public education in accordance with national training
                    program strict standards, educational plans and programs
                    studies implementation and priority issues determines
                    recommendations and assignments; <br />
                    - educational, research and spiritual and educational
                    faculties admission results commissions about, as well as
                    people from the marketing service need economics in
                    certified specialists, cooperation with customer
                    organizations hears their reports and accepts makes the
                    appropriate decision; <br /> - implementation of plans
                    scientific research, spiritual and educational work,
                    training and retraining of teaching staff composition
                    discusses training issues and related makes decisions;{" "}
                    <br />
                    - annual and long-term plans for the development of the
                    university confirms logistics and financial and economic
                    discusses the results of activities and makes decisions
                    related to it;
                    <br />
                    - opening, closing, change of faculties and departments, as
                    well as offers of marketing services training for new
                    undergraduate courses problems associated with starting or
                    stop makes a decision about;
                    <br />
                    - “Selection of teaching staff for higher education
                    educational establishments. to the Regulations on the
                    procedure for hiring for basis to occupy the corresponding
                    positions of professors and teachers conduct competitions;
                    <br />
                    - physical education and sports teacher (head of department)
                    Council, where the competition for filling the position is
                    held meeting of the Republic of Uzbekistan in physical
                    culture and will be held at participation of a
                    representative of the Ministry of Sports; <br />
                    - candidates for the title of professor, associate professor
                    studies documents and conducts research in the prescribed
                    manner and presents title for approval; <br />- English
                    University graduates and teachers ensuring language
                    proficiency and computer technology, basic use skills
                    Internet Discusses issues of formation and events. defines;{" "}
                    <br />
                    - with educational literature of the educational process are
                    provided textbooks and teaching aids of the new generation,
                    as well as use of innovative educational technologies
                    preparation and publication of educational and
                    methodological kits for discusses issues on a basis;
                    <br />
                    - talented students and teachers through the El Yurt
                    Foundation umidi" recommendation for internship in foreign
                    universities reaches;
                    <br />
                    - In collaboration with the “For a Healthy Generation”
                    Foundation. physical education of students and their health
                    is developed measures for further improvement; <br />
                    - with the main customer organization, enterprises and
                    institutions development of corporate cooperation, material
                    and technical base strengthened and professional student
                    practice discusses issues of increasing efficiency and
                    develops recommendations for their improvement; <br />– s
                    acceptance by higher educational institutions of foreign
                    countries makes decisions about establishing cooperative
                    relationships; <br />- technical safety of students and
                    employees university. and measures to improve labor
                    protection defines. <br />
                  </p>
                  <h5 className="text-black">
                    III. Organization of the council's activities
                  </h5>
                  <p>
                    6. The Council conducts its activities in accordance with
                    regulations approved by him, which are approved by the
                    rector university after its approval by the Council. After
                    drawing up regulations, they are subject to approval by the
                    rector.
                    <br />
                    7. Decisions of the Council on all issues related to
                    educational scientific-methodological, scientific-research,
                    spiritual, educational and organizational affairs
                    university, are adopted by open vote by majority votes of
                    Council members. The plenum of the Council is considered
                    competent, if 2/3 of its members participate. Decisions
                    about appointment to the position of teacher in specialized
                    departments and on granting academic degrees of professor
                    and associate professor are adopted by open vote.
                    <br />
                    8. Council decisions approved by the rector of the
                    university, come into force.
                    <br />
                    9. Decisions of the Council are formalized in a protocol,
                    which signed by the Chairman of the Council and his
                    Secretary.
                    <br />
                    10. The Chairman of the Council regularly organizes
                    inspections on implementation of Council decisions and
                    informs Council members about their results.
                    <br />
                  </p>
                  <h4>
                    Responsibilities of the position of Secretary of the
                    University Council
                  </h4>

                  <p>
                    - Provide information and control those responsible persons
                    on issues related to the preparation of draft decisions on
                    work of the meeting of the University Council held monthly;{" "}
                    <br />
                    - Ensure the participation of members of the University
                    Council in meeting and inform them about the date and time
                    of the meeting; <br />
                    - Receive and process decisions of the University in a
                    timely manner Council responsible persons; <br />- After
                    approval decisions of the University Council to ensure them
                    distribution to all board members; <br />
                    - Organize regular monitoring of execution of decisions of
                    the University Council; <br />
                    - In case of failure to comply with decisions of the
                    University Council report them to the Rector of the
                    University orally or in writing;
                    <br />
                    - Provide formal approval of decisions University Council by
                    signing protocols Chairman and Secretary of the University
                    Council; <br />
                    - Approve lists of all University documents that have been
                    passed approval of the Council, after their approval; <br />
                    - Check and identify documents of applicants who wish to
                    obtain academic degrees of professor and associate professor
                    in accordance with the established procedure and send them
                    to the District certification commission (UAC); <br />
                    - Approve the transfer to doctoral and candidate theses
                    topics dissertations that have passed the mukhokama of the
                    University Council;
                    <br />
                    - Conduct voting on vacant managerial positions departments,
                    professors and associate professors in the specialty of the
                    departments;
                    <br />
                    - Approve the list of scientific works of teachers; <br />
                    - After the end of each academic year, submit to archiving
                    collected minutes of University meetings Council; <br />
                    - Ensure approval of the University regulations Council
                    after its consideration by the University Council and
                    approval by the rector of the University; <br />
                    - Make changes to the work procedure in accordance with
                    instructions of the President of the Republic of Uzbekistan,
                    decisions Cabinet of Ministers, decisions of the Higher
                    Educational Institution, scientific and innovation
                    department, as well as orders for the basis of current
                    legislation; <br />- Support constant maintenance of a list
                    of documents of the University Council and monitor all
                    documents in accordance with current legislation; <br />
                    - Perform other duties as assigned legislation. <br />
                  </p>

                  <h5 class="text-black">Required knowledge:</h5>
                  <p>
                    Knowledge of regulations, departmental orders and
                    instructions of the Ministry of Education, Scientific and
                    Innovation questions, letters and orders from the Ministry
                    of Education, scientific and innovative issues, procedure
                    for electing members teaching staff by voting, procedure for
                    awarding academic degrees and academic titles.
                  </p>
                  <h5 class="text-black">Qualification requirements:</h5>
                  <p>
                    - Knowledge of regulations on higher education, the Charter
                    of higher educational institutions, letters and orders of
                    the ministry education, science and innovation;
                    <br />
                    - Knowledge of submissions to the University Council,
                    letters guidelines and regulatory documents;
                    <br />
                    - Possession of higher education;
                    <br />- It is necessary to know the procedure for electing
                    members teaching staff by voting.
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
