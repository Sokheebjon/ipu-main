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
                    Kasaba uyushmasi o`z faoliyatini O`zbekiston Respublikasi
                    Konstitutsiyasi, O`zbekiston Respublikasining «Kasaba
                    uyushmalari, ularning huquqlari va faoliyatining kafolatlari
                    to`g`risida»gi qonuni, «Jamoat birlashmalari to`g`risida»,
                    «Nodavlat notijorat tashkilotlar to`g`risida»gi qonunlari,
                    Ta`lim, fan va madaniyat xodimlari kasaba uyushmasi
                    Respublika kengashining Ustavi va boshqa huquqiy xujjatlar
                    asosida yuritadi. Hozirgi kunda universitit Agrosanoat
                    majmui xodimlari kasaba uyushmasi qarshi shahar kengashi
                    tarkibida bo`lib o`z safiga 300 nafar kasaba uyushma
                    a`zolarini birlashtirgan. <br />
                    <br />
                  </p>
                  <h4>
                    Professor-o`qituvchi va xodimlar kasaba uyushma
                    qo`mitasining umumiy faoliyati quyidagilardan iborat:
                  </h4>
                  <p>
                    Universitet xodimlarining millati, jinsi, yoshi va diniy
                    e`tiqodidan qat`iy nazar mehnat qilishi, ishni va kasbni
                    erkin tanlashi, adolatli mehnat sharoitida ishlashi,
                    ishsizlikdan himoya qilinishiga doir konstitutsiyaviy
                    huquqlarini himoya qiladi. O`qituvchi-xodimlar mehnatiga haq
                    to`lash va mehnat tartibining ijtimoiy adolatli tizimini
                    joriy etilishiga va unga rioya qilinishiga ko`maklashadi.
                    Professor-o`qituvchi va xodimlarning ma`naviy-ma`rifiy
                    saviyasini oshirishda, ularning bo`sh vaqtlarini hamda dam
                    olishlarini mazmunli tashkil qilishda faol ishtirok etadi.
                    O`qituvchi va xodimlarga nisbatan mehnat qonunchiligi,
                    mehnatni muxofaza qilish va atrof-muxitni muxofaza qilish
                    qonunlari talablariga rioya qilinishini nazorat qiladi va
                    ularning huquqiy himoyasini amalga oshiradi.
                    O`qituvchi-xodimlar va ularning oila a`zolarini
                    sog`lomlashtirish va sport bilan muntazam
                    shug`ullanishlariga ko`maklashadi. Jamoada vujudga
                    kelayotgan mehnat nizolarini bartaraf etishda
                    tashabbuskorlik qiladi
                  </p>
                </>
              )}

              {lang == "ru" && (
                <>
                  <p>
                    Профсоюз действует в Республике Узбекистан. Конституция,
                    «Касаба» Республики Узбекистан объединения, гарантии их прав
                    и деятельности Закон «Об общественных объединениях», Законы
                    «О негосударственных некоммерческих организациях», Профсоюз
                    работников образования, науки и культуры Устав
                    Республиканского совета и другие нормативно-правовые
                    документы. на основе В настоящее время вуз – Агросаноат.
                    Горсовет против профсоюза комплексников 300 профсоюзов в
                    своих рядах объединила своих членов. <br />
                    <br />
                  </p>
                  <h4>
                    Профессор-преподаватель и профсоюз сотрудников Общая
                    деятельность комитета заключается в следующем:
                  </h4>
                  <p>
                    Национальность, пол, возраст и религия сотрудников
                    университета работа, работа и профессия независимо от веры
                    свободный выбор, работа на справедливых условиях труда,
                    Конституция о защите от безработицы защищает их права. Право
                    на труд преподавателей и сотрудников социальная справедливая
                    система оплаты и порядка работы поможет его реализации и
                    соблюдению. Духовно-просветительская работа
                    профессоров-преподавателей и сотрудников в повышении своего
                    уровня, своего свободного времени и отдыха активно участвует
                    в содержательной организации своего образования. Трудовое
                    законодательство в отношении преподавателей и сотрудников,
                    охрана труда и охрана окружающей среды контролирует
                    соблюдение требований законодательства и осуществляет их
                    правовую защиту. Преподаватели-сотрудники и члены их семей
                    здоровье и спорт регулярно они помогают им участвовать.
                    команде при разрешении предстоящих трудовых споров
                    инициирует
                  </p>
                </>
              )}

              {lang == "en" && (
                <>
                  <p>
                    The trade union operates in the Republic of Uzbekistan
                    Constitution, "Kasaba" of the Republic of Uzbekistan
                    associations, guarantees of their rights and activities "On"
                    Law, "On Public Associations", Laws "On Non-Governmental
                    Non-Commercial Organizations", Trade Union of Education,
                    Science and Culture Employees The Charter of the Republican
                    Council and other legal documents based on Currently, the
                    university is Agrosanoat The city council against the union
                    of complex employees 300 trade unions in its ranks united
                    its members. <br />
                    <br />
                  </p>
                  <h4>
                    Professor-teacher and staff union The general activity of
                    the committee is as follows:
                  </h4>
                  <p>
                    Nationality, gender, age and religion of university staff
                    work, work and profession regardless of faith free choice,
                    work under fair working conditions, constitutional on
                    unemployment protection protects their rights. The right to
                    the work of teachers and employees social fair system of
                    payment and work order will help its implementation and
                    compliance. Spiritual and educational of professor-teachers
                    and employees in raising their level, their free time and
                    rest actively participates in the meaningful organization of
                    their education. Labor legislation regarding teachers and
                    employees, labor protection and environmental protection
                    controls compliance with the requirements of the laws and
                    implements their legal protection. Teachers-employees and
                    their family members health and sports regularly they help
                    them to engage. To the team in resolving the upcoming labor
                    disputes initiates
                  </p>
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
