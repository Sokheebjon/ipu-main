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
                  <h4>
                    Korrupsiyaga qarshi kurashish “Komplaens nazorat” tizimini
                    boshqarish bo‘limi quyidagi ishlarni amalga oshiradi:
                  </h4>
                  <p>
                    • universitetda korrupsiyaga qarshi kurashishga oid qonunlar
                    va qonunosti hujjatlar, shuningdek, Vazirlik Xay’ati
                    qarorlari va buyruqlariga rioya etilishi ustidan nazorat
                    olib boradi;
                    <br />
                    • korrupsiyaga oid huquq buzarliklarning oldini olishga
                    qaratilgan chora-tadbirlar va ish rejalarini ishlab chiqadi,
                    ularning to‘lik, sifatli va o‘z vaqtida ijro etilishini
                    ta’minlaydi, belgilangan chora-tadbirlarning amalga
                    oshirilishi axvolini o‘rganadi, natijalari buyicha
                    ma’lumotlar tayyorlaydi;
                    <br />• universitetda “Korrupsiyasiz soha” loyihasini amalga
                    oshiradi; <br />
                    • universitetda korrupsiyaga qarshi kurashish bo‘yicha
                    chora-tadbirlarni amalga oshirishga qaratilgan ichki
                    hujjatlar loyihalarini ishlab chiqadi va tasdiqlash uchun
                    rektorga kiritadi;
                    <br />
                    • universitetning ichki hujjatlarida aniqlangan
                    korrupsiyaviy normalarni bartaraf qilish bo‘yicha takliflar
                    ishlab chiqadi;
                    <br />
                    • universitetda korrupsiyaviy xavf-xatarlarni baholaydi va
                    ularni kamaytirish yuzasidan chora-tadbirlar rejalarini
                    ishlab chiqadi;
                    <br />
                    • universitetning professor-o‘qituvchilari, boshqaruv,
                    texnik, xizmat ko‘rsatuvchi va o‘quv-yordamchi xodimlarining
                    xatti-harakatlaridagi korrupsiyaviy xavf-xatarlar va
                    huquqbuzarliklar xaqida kelib tushadigan murojaatlar va
                    anonim xabarlarni ko‘rib chiqadi hamda o‘rnatilgan tartibda
                    choralar ko‘radi;
                    <br />
                    • universitetda korrupsiya faktlariga doir xizmat
                    tekshiruvlarini reestrini yuritib boradi;
                    <br />
                    • davlat xaridlarini amalga oshirishda manfaatlar
                    to‘qnashuvini tahlil qilishda va kontragentlarning
                    ishonchliligini tekshirishda ishtirok etadi;
                    <br />
                    • universiet xodimlari o‘rtasida manfaatlar to‘qnashuvi
                    monitoringini yuritadi va tegishli takliflar kiritadi;
                    <br />
                    • universitetning professor-o‘qituvchilari, boshqaruv,
                    texnik, xizmat ko‘rsatuvchi, o‘quv-yordamchi xodimlari
                    o‘rtasida muntazam ravishda profilaktik suhbatlar tashkil
                    etib boradi;
                    <br />
                    • universitet faoliyatida korrupsiyaviy holatlarni aniqlash
                    maqsadida professor-o‘qituvchilar, boshqaruv, texnik, xizmat
                    ko‘rsatuvchi, o‘quv-yordamchi xodimlar, talabalar
                    (magistrantlar, doktorantlar, mustaqil izlanuvchilar) va
                    aholi o‘rtasida so‘rovlar o‘tkazadi;
                    <br />
                    • so‘rovlar, ijtimoiy va boshqa tadqiqotlar asosida
                    korrupsiyaga qarshi kurashish targ‘iboti bo‘yicha
                    chora-tadbirlar natijalari va ta’sirini muntazam ravishda
                    baholab boradi hamda keyingi chora-tadbirlarni belgilashda
                    baholash natijalaridan foydalanadi;
                    <br />
                    • professor-o‘qituvchilar, talaba-yoshlar o‘rtasida
                    korrupsiyaga qarshi kurashishga qaratilgan konferensiyalar,
                    uchrashuvlar, seminarlar, tanlovlar tashkil etadi;
                    <br />
                    • universitetda korrupsiyaga qarshi kurashish sohasida qabul
                    qilinayotgan chora-tadbirlarning samaradorligini baholaydi;
                    <br />
                    • universitetda korrupsiyaga oid huquqbuzarliklar sodir
                    etilishining shart-sharoitlari va sabablarini o‘rganadi,
                    shuningdek ularni bartaraf etish buyicha takliflarni ishlab
                    chiqadi;
                    <br />
                    • universitetning rasmiy veb-saytida “Korrupsiyaga qarshi
                    kurashish” bo‘limidagi ma’lumotlarni muntazam ravishda
                    yangilab borilishini ta’minlaydi;
                    <br />
                    • har chorakda va zaruratga ko‘ra korrupsiyaga qarshi
                    kurashish bo‘yicha amalga oshirilgan ishlar hamda
                    universitetdagi korrupsiyaviy vaziyat haqida rektorga) hamda
                    Oliy va o‘rta maxsus ta’lim vazirligining Komplaens nazorat
                    va korrupsiyaga qarshi kurashish bo‘limiga hisobot beradi;
                    <br />
                    • Oliy va o‘rta maxsus ta’lim vazirligining Komplaens
                    nazorat va korrupsiyaga qarshi kurashish bo‘limi hamda
                    korrupsiyaga qarshi kurashish bo‘yicha faoliyatni amalga
                    oshiruvchi boshqa davlat organlari va tashkilotlari,
                    ota-onalar bilan korrupsiyaga qarshi kurashish sohasida
                    samarali hamkorlikni yo‘lga qo‘yadi;
                    <br />
                    • universitet huzuridagi akademik litseyning korrupsiyaga
                    qarshi kurashish yunalishidagi faoliyati ustidan nazorat
                    o‘rnatadi;
                    <br />
                    • universitetda korrupsiyaga qarshi amalga oshirilgan ishlar
                    monitoringini yuritadi, tahliliy materiallarni rahbariyatga
                    hamda vazirlikka kiritib boradi.
                    <br />
                  </p>
                </>
              )}

              {lang == "ru" && (
                <>
                  <>
                    <h4>
                      Борьба с коррупцией Система «Комплаенс-контроль» Отдел
                      управления осуществляет следующие виды деятельности:
                    </h4>
                    <p>
                      • антикоррупционное законодательство в университете и
                      уставные документы, а также Совет министров контроль за
                      соблюдением решений и распоряжений ведет;
                      <br />
                      • предотвращение нарушений законодательства, связанных с
                      коррупцией разрабатывает целевые мероприятия и планы
                      работы, их полное, качественное и своевременное выполнение
                      обеспечивает выполнение указанных мероприятий исследует
                      состояние повышения, по результатам готовит информацию;
                      <br />• Реализация проекта «Сфера без коррупции» в
                      университете. увеличивается; <br />
                      • о борьбе с коррупцией в университете внутренние,
                      направленные на реализацию мероприятий разрабатывает и
                      утверждает проекты документов знакомится с ректором;
                      <br />
                      • определены во внутренних документах университета
                      предложения по устранению коррупционных норм развивается;
                      <br />
                      • оценивает коррупционные риски в университете и планы
                      мероприятий по их снижению развивается;
                      <br />
                      • профессора и преподаватели университета, руководство,
                      технического, сервисного и образовательного персонала
                      коррупционные риски в их поведении и обращения о
                      нарушениях и рассматривает анонимные сообщения и в
                      установленном порядке принимает меры;
                      <br />
                      • служба по фактам коррупции в вузе ведет журнал проверок;
                      <br />
                      • интересы в государственных закупках в анализе конфликта
                      и контрагентов участвует в проверке надежности;
                      <br />
                      • конфликт интересов среди сотрудников университета
                      контролирует и вносит соответствующие предложения;
                      <br />
                      • профессора и преподаватели университета, руководство,
                      технический, сервисный, образовательный вспомогательный
                      персонал между ними проводятся регулярные профилактические
                      беседы достигает;
                      <br />
                      • выявлять коррупционные ситуации в деятельности
                      университета для профессорско-преподавательского состава,
                      управленческого, технического, сервисного преподаватели,
                      ассистенты преподавателей, студенты (магистранты,
                      докторанты, независимые исследователи) и проводит опросы
                      среди населения;
                      <br />
                      • на основе опросов, социальных и других исследований по
                      антикоррупционной пропаганде результаты и воздействие мер
                      регулярно оценивает и определяет дальнейшие меры
                      использует результаты оценки;
                      <br />
                      • между профессорами и преподавателями, студентами и
                      молодежью антикоррупционные конференции, организует
                      встречи, семинары, конкурсы;
                      <br />
                      • поступление в университет по направлению противодействия
                      коррупции оценивает эффективность принятых мер;
                      <br />
                      • в университете произошли коррупционные правонарушения
                      изучает условия и причины возникновения а также
                      разработать предложения по их устранению выходит;
                      <br />
                      • «Антикоррупция» на официальном сайте университета.
                      информация в разделе "боевые действия" регулярно
                      обеспечивает обновление;
                      <br />
                      • противодействие коррупции ежеквартально и по мере
                      необходимости работы, проводимые по борьбе и в
                      университете ректору о коррупционной ситуации) и
                      Комплаенс-контроль Министерства высшего и среднего
                      специального образования и отчитывается перед
                      антикоррупционным отделом;
                      <br />
                      • Соответствие Министерства высшего и среднего
                      специального образования. отдел контроля и противодействия
                      коррупции и осуществлять антикоррупционную деятельность
                      другие государственные органы и организации, повышающие с
                      родителями в борьбе с коррупцией налаживает эффективное
                      сотрудничество;
                      <br />
                      • коррупция академического лицея при университете контроль
                      за деятельностью в направлении борьбы устанавливает;
                      <br />
                      • антикоррупционная деятельность в университете проводит
                      мониторинг, предоставляет аналитические материалы
                      руководству и поступает в министерство.
                      <br />
                    </p>
                  </>
                </>
              )}

              {lang == "en" && (
                <>
                  <>
                    <h4>
                      Fight against corruption "Compliance control" system The
                      management department performs the following activities:
                    </h4>
                    <p>
                      • anti-corruption laws at the university and statutory
                      documents, as well as the Ministerial Council control over
                      compliance with decisions and orders leads;
                      <br />
                      • to prevent violations of the law related to corruption
                      develops targeted measures and work plans, their complete,
                      high-quality and timely execution ensures the
                      implementation of the specified measures examines the
                      condition of the increase, according to the results
                      prepares information;
                      <br />• Implementation of the "Corruption-free sphere"
                      project at the university increases; <br />
                      • on fighting corruption in the university internal aimed
                      at the implementation of measures develops and approves
                      draft documents introduces to the rector;
                      <br />
                      • defined in the internal documents of the university
                      proposals for eliminating corrupt norms develops;
                      <br />
                      • evaluates corruption risks in the university and plans
                      of measures to reduce them develops;
                      <br />
                      • professors and teachers of the university, management,
                      of technical, service and educational support staff
                      corruption risks in their behavior and appeals about
                      violations and reviews anonymous messages and in the
                      established order takes measures;
                      <br />
                      • service on the facts of corruption in the university
                      keeps a register of inspections;
                      <br />
                      • interests in public procurement in analyzing the
                      conflict and counterparties participates in reliability
                      verification;
                      <br />
                      • conflict of interest among university employees monitors
                      and makes relevant proposals;
                      <br />
                      • professors and teachers of the university, management,
                      technical, service, educational support staff regular
                      preventive talks are organized between them reaches;
                      <br />
                      • to identify corrupt situations in university activities
                      for the purpose of professors-teachers, management,
                      technical, service instructors, teaching assistants,
                      students (master's students, doctoral students,
                      independent researchers) and conducts surveys among the
                      population;
                      <br />
                      • based on surveys, social and other research on
                      anti-corruption propaganda the results and impact of the
                      measures regularly evaluates and determines further
                      measures uses assessment results;
                      <br />
                      • between professors and teachers, students and young
                      people anti-corruption conferences, organizes meetings,
                      seminars, contests;
                      <br />
                      • admission to the university in the field of combating
                      corruption evaluates the effectiveness of the measures
                      taken;
                      <br />
                      • corruption-related offenses have occurred at the
                      university examines the conditions and reasons for as well
                      as develop proposals for their elimination comes out;
                      <br />
                      • "Anti-corruption" on the university's official website
                      the information in the "fighting" section on a regular
                      basis ensures updating;
                      <br />
                      • anti-corruption quarterly and as needed the works
                      carried out to fight and universe to the rector about the
                      corrupt situation at the institute) and Compliance control
                      of the Ministry of Higher and Secondary Special Education
                      and reports to the anti-corruption department;
                      <br />
                      • Compliance of the Ministry of Higher and Secondary
                      Special Education control and anti-corruption department
                      and carry out anti-corruption activities other state
                      bodies and organizations that increase with parents in the
                      fight against corruption establishes effective
                      cooperation;
                      <br />
                      • corruption of the academic lyceum under the university
                      control over activities in the direction of combating
                      installs;
                      <br />
                      • anti-corruption activities at the university conducts
                      monitoring, analytical materials to the management and
                      enters the ministry.
                      <br />
                    </p>
                  </>
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
