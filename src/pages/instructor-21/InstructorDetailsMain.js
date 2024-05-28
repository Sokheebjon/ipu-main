import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import instructors from "../../data/Instructors.json";
import { useIntl } from "react-intl";
import { getProductName } from "../../helpers/general";

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
                <>
                  <p>
                    Universitetdagi 2 ta fakultetda xotin – qizlar kengashlari
                    raislari faoliyat ko‘rsatmoqdalar. Universitet ilmiy
                    kengashining qaroriga muvofiq Universitet xotin-qizlar
                    qo‘mitasi raisiga hamda barcha fakultetlar xotin-qizlar
                    kengashi raislariga ichki imkoniyatdan kelib chiqib,
                    qo‘shimcha haq to‘lanadi. Universitet xotin-qizlar kengashi
                    raisiga O‘zbekiston Respublikasi Oliy va o‘rta maxsus ta’lim
                    vazirining 2020-yil 17 -iyun №326 -buyrug‘iga asosan
                    xotin-qizlar masalalari bo‘yicha rektor maslahatchisi,
                    fakultetlar xotin-qizlar kengashi raislariga O‘zbekiston
                    Respublikasi Oliy va o‘rta maxsus ta’lim vazirining 2021-yil
                    13- dekabr №518-buyrug‘iga asosan xotin-qizlar masalalari
                    bo‘yicha dekan maslahatchisi maqomi berilgan.
                    <br />
                  </p>
                  <p>
                    Bugungi kunda Iqtisodiyot va pedagogika universiteti
                    jamoasida 153 ga yaqin ayollar faoliyat ko‘rsatmoqdalar.
                    Ulardan: 110 nafari professor o‘qituvchilar bo‘lib, 43
                    nafarini ishchi xodimlar tashkil etadi.
                    <br />
                  </p>
                  <p>
                    Talaba qizlarimiz soni 1916 nafarni shundan 281 tasi oilali
                    qizlarni tashkil qiladi. Universitet xotin-qizlar
                    kengashining nizomi mavjud bo‘lib, ushbu nizom bo‘yicha
                    faoliyat olib boradi. Xotin-qizlar kengashi jamoat
                    tashkiloti sifatida o‘z faoliyatini O‘zbekiston Respublikasi
                    Konstitutsiyasi, O‘zbekiston Respublikasining “Nodavlat
                    notijorat tashkilotlari to‘g‘risida”gi, “O‘zbekiston
                    Respublikasida jamoat birlashmalari to‘g‘risida”gi Qonuni va
                    nodavlat notijorat tashkilotlarni tartibga soluvchi boshqa
                    qonunlariga muvofiq olib boradi.
                    <br />
                  </p>
                  <p>
                    Universitet xotin-qizlar kengashi professor – o‘qituvchi,
                    xodimlar hamda talaba qizlarning jamiyatda siyosiy,
                    ijtimoiy, iqtisodiy sohalaridagi vazifalarni hal qilishdagi
                    faolligini kuchaytirish, xotin-qizlarni har tomonlama
                    qo‘llab-quvvatlash, ijtimoiy-iqtisodiy ahvolini yaxshilash,
                    ularning huquq va manfaatlarini himoya qilish va ta’minlash,
                    kasbiy mahoratini oshirish, milliy va ma’naviy
                    qadriyatlarimizga asoslangan holda oila munosabatlarini
                    mustahkamlash, yoshlarni ma’naviy barkamol, g‘oyaviy
                    kurashchan, millat va davlatning barqarorligi va taraqqiyoti
                    yo‘lida o‘z kuchini ayamaydigan barkamol insonlar qilib
                    tarbiyalash, sog‘lom turmush tarzini shakllantirish
                    maqsadida ish olib boradi.
                    <br />
                  </p>
                  <p>
                    Oilada sog‘lom turmush tarzini shakllantirish, salbiy
                    illatlardan yiroq bo‘lish, professor – o‘qituvchi, xodimlar
                    hamda talaba qizlarning reproduktiv salomatligini
                    yaxshilash, onalik va bolalikni muhofaza qilish, ularni
                    madaniyat va sportga bo‘lgan qiziqish hamda ehtiyojini,
                    munosib ravishda ta’minlashga qaratilgan tadbirlarni
                    unversitet “5-oilaviy poliklinika” “Sog’lomlashtirish
                    markazi” bilan hamkorlikda amalga oshiradi.
                    <br />
                  </p>
                  <p>
                    Davlatimiz tomonidan xotin-qizlarning jamiyatdagi, oiladagi
                    axvolini tubdan o‘zgartirish, ularning mehnati va turmushini
                    to‘g‘ri tashkil qilish, xotin-qizlar uchun qulay bo‘lgan
                    mehnat turlarini barpo etish, salomatligini mustahkamlash,
                    ularni mehnat qilishlari uchun uy ro‘zg‘or ishlarini
                    ijtimoiy ishlab chiqarishda faol qatnashish bilan oqilona
                    olib borishlari uchun zarur shart-sharoitlarni yaratish
                    asosiy vazifalarimizdan biriga aylandi. Shu o‘rinda
                    Prezidentimiz Shavkat Mirziyoevning quyidagi so‘zlariga
                    e’tiborni qarataman: “O‘zbekistonda xotin-qizlarning huquq
                    va manfaatlarini ta’minlash, ular uchun munosib mehnat va
                    turmush sharoitini yaratib berish, qobiliyat va salohiyatini
                    ro‘yobga chiqarish masalasi mamlakatda davlat siyosati
                    darajasiga ko‘tarildi”. Darhaqiqat, mamlakatimizda
                    xotin-qizlar masalalari davlat siyosati darajasiga
                    ko‘tarildi, jamiyat hayotining barcha sohalarida ularning
                    faol ishtirok etishiga keng imkoniyat yaratildi. Bugungi
                    kunda ayollar yurtimizda bo‘layotgan demokratik
                    o‘zgarishlarda faol kuchlardan biri sifatida namoyon
                    bo‘lmoqdalar.
                    <br />
                    Xotin-qizlar jamiyatimiz fuqarolarining yarmidan ko‘pini
                    tashkil qilibgina qolmasdan, ijtimoiy hayotning hamma
                    sohalarida ular ko‘pchilikni tashkil etadilar. Bugungi
                    zamonaviy texnologiyalar, kompyuterlarning sirlarini bilish,
                    jahon tillarini egallash, tarjimonlik, ish yuritish,
                    hisob-kitob sohalarida ham ayollarning ishtiroki salmoqli.{" "}
                    <br />
                    <br />
                  </p>
                  <p>
                    Xotin-qizlarni qo‘llab-quvvatlash va oila institutini
                    mustahkamlash sohasidagi faoliyatini tubdan
                    takomillashtirish, O‘zbekiston Respublikasini
                    rivojlantirishning beshta ustuvor yo‘nalishi bo‘yicha
                    Xarakatlar strategiyasida belgilab berilgan vazifalarni
                    amalga oshirishda universitet Xotin-qizlar kengashi ham
                    quyidagilarni o‘z faoliyatining asosiy maqsadi qilib
                    belgilab oldi:
                  </p>
                  <p>
                    • xotin-qizlarni qo‘llab-quvvatlashga doir davlat
                    siyosatining samarali amalga oshirilishini ta’minlash,
                    ularning huquqlari va qonuniy manfaatlarini himoya qilish
                    hamda ularning universitet ijtimoiy-siyosiy hayotidagi roli
                    va faolligini oshirish; <br />• universitetdagi
                    xotin-qizlarning muammolarini o‘z vaqtida aniqlash, yordamga
                    muhtoj bo‘lgan va og‘ir ijtimoiy ahvolga tushib qolgan
                    xotin-qizlarning, shu jumladan, nogironligi bo‘lgan
                    ayollarning manzilli ro‘yhatini tuzish, ularga
                    ijtimoiy-huquqiy, psixologik va moddiy yordam ko‘rsatish;{" "}
                    <br />
                    • universitetdagi xotin-qizlarning mehnat sharoitlarini
                    yaxshilash, xotin-qizlarni, ayniqsa, talabalar turar joyida
                    va xususiy xonadonlarda yashayotgan qizlarning bo‘sh
                    vaqtlarini mazmunli o‘tkazish maqsadida turli to‘garaklarga,
                    kasb-hunar o‘rganish ishlariga keng jalb etish masalalarida
                    ularni har tomonlama manzilli qo‘llab-quvvatlash; <br />
                    • universitetdagi xotin-qizlar o‘rtasida
                    huquqbuzarliklarning oldini olish, huquqbuzarlikka moyilligi
                    bo‘lganlar bilan yakka tartibda ish olib borish. <br />
                  </p>
                  <h4>
                    Iqtisodiyot va pedagogika universiteti Xotin-qizlar
                    masalalari bo’yicha Kengash nizomi.
                  </h4>
                </>
              )}

              {lang == "ru" && (
                <>
                  <p>
                    Советы женщин и девушек на 2 факультетах университета
                    председатели работают. Университет научный По решению Совета
                    Женского университета председателю комитета и женщинам всех
                    факультетов председателям правления, исходя из внутренней
                    возможности, будет оплачена дополнительная плата. Женский
                    совет университета Председатель управления высшего и
                    среднего специального образования Республики Узбекистан
                    согласно приказу министра №326 от 17 июня 2020 года советник
                    ректора по женским вопросам, Узбекистан председателям
                    женсоветов факультетов 2021 г. Министра высшего и среднего
                    специального образования республики Женские вопросы на
                    основании Приказа от 13 декабря № 518 присвоен статус
                    советника декана.
                    <br />
                  </p>
                  <p>
                    Сегодня Экономико-педагогический университет В коллективе
                    работают около 153 женщин. Среди них: 110 профессоров, 43
                    один из них состоит из сотрудников.
                    <br />
                  </p>
                  <p>
                    Число студенток – 1916 человек, из них 281 замужем.
                    организует девочек. Университетские женщины есть устав
                    совета, согласно этому уставу действует. Женский совет
                    сообщества как организация Республики Узбекистан Конституция
                    Республики Узбекистан «Негосударственная о некоммерческих
                    организациях», «Узбекистан «Об общественных объединениях в
                    республике» и другие регулирующие неправительственные
                    некоммерческие организации согласно законам.
                    <br />
                  </p>
                  <p>
                    Профессор Женского совета университета - преподаватель,
                    служащие и студентки в обществе, политике, решение задач в
                    социальной и экономической сфере усилить активность женщин
                    во всех аспектах поддержка, улучшение
                    социально-экономической ситуации, защищать и обеспечивать
                    свои права и интересы, повышение профессионального
                    мастерства, национального и духовного семейные отношения,
                    основанные на наших ценностях укрепление, становление
                    молодежи нравственно зрелой и идейной борец за стабильность
                    и развитие нации и государства создание идеальных людей,
                    которые не жалеют усилий на своем пути образование,
                    формирование здорового образа жизни работает для этой цели.
                    <br />
                  </p>
                  <p>
                    Создание здорового образа жизни в семье отрицательно держись
                    подальше от пороков, профессор - преподаватель, сотрудники и
                    репродуктивное здоровье студенток оздоровление, охрана
                    материнства и детства, им. интерес и потребность в культуре
                    и спорте, деятельность, направленная на адекватное
                    обеспечение Университет «5-я семейная поликлиника»
                    «Здоровье» центр» совместно с.
                    <br />
                  </p>
                  <p>
                    По нашему государству женщины в обществе, в семье радикально
                    изменить свое положение, свою работу и жизнь правильная
                    организация, удобная для женщин установление видов труда,
                    укрепление здоровья, домашние дела, чтобы заставить их
                    работать рациональный с активным участием в общественном
                    производстве создать необходимые условия для их проведения
                    стало одной из наших главных задач. В этом месте К следующим
                    словам Президента Шавката Мирзиёева Обращаю внимание: «Права
                    женщин в Узбекистане и обеспечение их интересов, достойной
                    работы для них и создание условий жизни, способностей и
                    потенциала вопрос реализации – это государственная политика
                    в стране поднялся до уровня Точно определенно, в нашей
                    стране женские проблемы на уровень государственной политики
                    роза, во всех сферах жизни общества была создана широкая
                    возможность для активного участия. Сегодняшний Сегодня
                    женщины в нашей стране демократичны проявляется как одна из
                    активных сил изменений происходят.
                    <br />
                    Женщины составляют более половины граждан нашего общества.
                    не только организация, но и вся общественная жизнь в своих
                    областях их большинство. Сегодняшний знать секреты
                    современных технологий, компьютеров, освоение мировых
                    языков, перевод, деловое администрирование, Участие женщин в
                    сфере бухгалтерского учета является значительным. <br />
                    <br />
                  </p>
                  <p>
                    Поддержка женщин и институт семьи коренным образом усилить
                    свою деятельность в этой области благоустройство Республики
                    Узбекистан по пяти приоритетным направлениям развития
                    Задачи, определенные в стратегии действий реализация работы
                    Женского совета университета делая следующие основные цели
                    своей деятельности определенный:
                  </p>
                  <p>
                    • государство для поддержки женщин обеспечить эффективную
                    реализацию политики, защита своих прав и законных интересов
                    и их роль в общественно-политической жизни университета и
                    повысить активность; <br />• в университете своевременное
                    выявление женских проблем, помощь нуждался и попал в тяжелую
                    социальную ситуацию в том числе женщины с ограниченными
                    возможностями создание адресного списка женщин, им оказание
                    социально-правовой, психологической и материальной поддержки{" "}
                    ;
                    <br />
                    • условия работы женщин в университете улучшение положения
                    женщин, особенно в студенческих общежитиях и девушки,
                    живущие в частных домах в различные круги, чтобы осмысленно
                    провести время, в вопросах широкого вовлечения в
                    профессиональное обучение предоставление им всесторонней
                    поддержки; <br />
                    • среди женщин в университете предупреждение преступности,
                    склонность к преступности работать индивидуально с теми, кто
                    есть. <br />
                  </p>
                  <h4>
                    Женский экономико-педагогический университет Устав Совета по
                    вопросам.
                  </h4>
                </>
              )}

              {lang == "en" && (
                <>
                  <p>
                    Councils of women and girls in 2 faculties of the university
                    chairmen are working. The university is scientific According
                    to the decision of the Council of Women University to the
                    chairman of the committee and women of all faculties to the
                    chairmen of the board, based on the internal possibility, an
                    additional fee will be paid. University Women's Council
                    Chairman of Higher and Secondary Special Education of the
                    Republic of Uzbekistan according to the minister's order No.
                    326 of June 17, 2020 adviser to the rector on women's
                    issues, Uzbekistan to chairmen of women's council of
                    faculties 2021 of the Minister of Higher and Secondary
                    Special Education of the Republic Women's issues based on
                    December 13 Order No. 518 was given the status of dean's
                    advisor.
                    <br />
                  </p>
                  <p>
                    Today, the University of Economics and Pedagogy about 153
                    women work in the team. Among them: 110 are professors, 43
                    one of them consists of employees.
                    <br />
                  </p>
                  <p>
                    The number of female students is 1916, of which 281 are
                    married organizes girls. University women there is a charter
                    of the council, according to this charter operates. Women's
                    council community as an organization of the Republic of
                    Uzbekistan Constitution of the Republic of Uzbekistan
                    "Non-state on non-profit organizations", "Uzbekistan "On
                    Public Associations in the Republic" and other regulating
                    non-governmental non-profit organizations according to the
                    laws.
                    <br />
                  </p>
                  <p>
                    University Women's Council professor - teacher, employees
                    and female students in the society, political, solving tasks
                    in the social and economic spheres to strengthen the
                    activity of women in all aspects support, improvement of the
                    socio-economic situation, to protect and ensure their rights
                    and interests, improvement of professional skills, national
                    and spiritual family relationships based on our values
                    strengthening, making young people morally mature and
                    ideological fighter, the stability and development of the
                    nation and the state making perfect people who spare no
                    effort on their way education, formation of a healthy
                    lifestyle works for the purpose.
                    <br />
                  </p>
                  <p>
                    Creating a healthy lifestyle in the family is negative stay
                    away from vices, professor - teacher, staff and reproductive
                    health of female students improvement, motherhood and
                    childhood protection, them interest and need for culture and
                    sports, activities aimed at adequately providing University
                    "5th family polyclinic" "Health center" in cooperation with.
                    <br />
                  </p>
                  <p>
                    By our state, women in society, in the family radically
                    change their situation, their work and life proper
                    organization, convenient for women establishing types of
                    work, strengthening health, household chores to make them
                    work rational with active participation in social production
                    to create the necessary conditions for their conduct has
                    become one of our main tasks. In this place To the following
                    words of President Shavkat Mirziyoyev I draw attention:
                    "Women's rights in Uzbekistan and ensuring their interests,
                    decent work for them and creating living conditions, ability
                    and potential the issue of implementation is state policy in
                    the country rose to the level of Exactly definitely, in our
                    country women's issues to the level of state policy rose, in
                    all spheres of society's life a wide opportunity was created
                    for active participation. Today's Today, women are
                    democratic in our country manifested as one of the active
                    forces in changes are happening.
                    <br />
                    Women make up more than half of the citizens of our society
                    not only organizing, but all of social life in their fields
                    they are the majority. Today's know the secrets of modern
                    technologies, computers, mastering world languages,
                    translation, business administration, The participation of
                    women in accounting fields is significant. <br />
                    <br />
                  </p>
                  <p>
                    Women's support and family institute to fundamentally
                    strengthen its activities in the field improvement of the
                    Republic of Uzbekistan on five priority directions of
                    development Tasks defined in the action strategy the
                    implementation of the university Women's Council making the
                    following the main goals of their activities determined:
                  </p>
                  <p>
                    • the state to support women to ensure the effective
                    implementation of the policy, protecting their rights and
                    legitimate interests and their role in the socio-political
                    life of the university and increase activity; <br />• in the
                    university timely identification of women's problems, help
                    was in need and fell into a difficult social situation
                    including women with disabilities creating an address list
                    of women, to them providing socio-legal, psychological and
                    material support; <br />
                    • working conditions of women at the university improve
                    women, especially in student accommodation and girls living
                    in private homes to various circles in order to spend their
                    time meaningfully, in the issues of broad involvement in
                    vocational training providing them with all-round support;{" "}
                    <br />
                    • among women at the university crime prevention, crime
                    proneness to work individually with those who are. <br />
                  </p>
                  <h4>
                    Women's University of Economics and Pedagogy Charter of the
                    Council on issues.
                  </h4>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default InstructorDetailsMain;
