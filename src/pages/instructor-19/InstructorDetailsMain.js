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
                <>
                  <p>
                    Qarshi shahrida joylashgan Iqtisodiyot va pedagogika
                    universiteti kadrlar bo‘limi universitetning tarkibiy
                    bo‘limlaridan biri hisoblanadi. Bo‘lim O‘zbekiston
                    Respublikasi Qonunlari, O‘zbekiston Respublikasi Prezidenti
                    Qarorlari, Farmon va Farmoyishlari, O‘zbekiston Respublikasi
                    Vazirlar Mahkamasi Qarorlari, O‘zbekiston Respublikasi Oliy
                    va o‘rta maxsus ta`lim vazirligi buyruqlari, farmoyishlari,
                    O‘zbekiston Respublikasi Mehnat Kodeksi, universitet Rektori
                    buyruqlari, farmoyishlari hamda universitet Nizomi,
                    yo‘riqnomalari va tegishli ko‘rsatmalari asosida faoliyat
                    olib boradi. Kadrlar bo‘limi universitetda mehnat qilayotgan
                    professor-o‘qituvchi, o‘quv-yordamchi va moliya-xo‘jalik
                    xodimlarining universitet ichki-tartib qoidalari, mehnat
                    intizomi, lavozim yo‘riqnomalari va o‘rnatilgan qoidalarga
                    muvofiq faoliyat yuritishini tashkil qiladi.
                  </p>
                  <p>
                    Kadrlar bo‘limida bo‘lim boshlig`i va 2 nafar 1-toifali
                    muhandis hamda 2 nafar inspektor faoliyat olib boradi.
                    Bo‘limning professor-o‘qituvchi, o‘quv-yordamchi hamda
                    moliya-xo‘jalik xodimlari bilan ishlash inspektorlari
                    bevosita kadrlar bo‘limi boshlig`i topshirig`i va
                    ko‘rsatmalariga muvofiq ishni tashkillashtiradi. Belgilangan
                    tartibda yo‘riqnoma asosida ish olib boradi.
                  </p>
                  <h4>Kadrlar bo‘limining vazifalari:</h4>
                  <p>
                    - professor-o‘qituvchi, o‘quv-yordamchi hamda
                    moliya-xo‘jalik xodimlarini ishga qabul qilish, mehnat
                    shartnomasini bekor qilish, lavozim va shtat birliklarini
                    o‘zgartirish, mehnat ta`tili berish hamda muddatidan avval
                    ishga chaqirib olish, o‘z hisobidan ta`til, tanlov asosida
                    ishga qabul qilish, attestatsiyadan o‘tish muddatlarini
                    aniqlash, belgilashni nazorat etish;- ishga qabul qilingan
                    har bir xodim o‘rtasidagi mehnat shartnomalari tuzishni
                    nazorat qilish hamda faoliyatga oid buyruqlarni tayyorlash;-
                    rahbar kadrlar zaxirasini shakllantirish va va undan
                    foydalanish borasida takliflar berish;- universitet
                    rektoriga professor-o‘qituvchilar tarkibi, ularning mehnat
                    intizomi, ta`lim berish sifatini yaxshilash hamda ularning
                    qo‘nimsizligining oldini olish yuzasidan takliflar
                    tayyorlash va taqdim etish;- kadrlar masalasi bo‘yicha
                    yuqori tashkilotlar bilan aloqada bo‘lish;- vazirlik va
                    tegishli tashkilotlarga universitet professor-o‘qituvchi va
                    xodimlarini davlat mukofotiga tavsiya qilish ishlarini
                    tashkil qilish;- professor-o‘qituvchi, o‘quv-yordamchi hamda
                    moliya-xo‘jalik xodimlariga guvohnomalar tayyorlab berish va
                    guvohnomalar muddatini uzaytirilishini nazorat qilish;-
                    professor-o‘qituvchilar imzolarini tasdiqlash,
                    ma`lumotnomalar berish;- mehnat daftarchalarini yuritish,
                    ularni hisobini to‘g`ri olib borish va mehnat shartnomasi
                    bekor qilingan yoki tugagan xodimga o‘z vaqtida topshirish;-
                    professor-o‘qituvchi, o‘quv-yordamchi hamda moliya-xo‘jalik
                    xodimlarning belgilangan shaklda statistik hisobotini olib
                    borish;- professor-o‘qituvchi, o‘quv-yordamchi hamda
                    moliya-xo‘jalik xodimlarning shahsiy yig`ma jildini, shahsiy
                    varaqasini (T-2 shakl), shaxsiy ma`lumotnomasini
                    (ob`ektivka) shakllantirish, belgilangan tartibda
                    yuritilishini tashkil etish;- universitet shtat jadvalini
                    moliya-iqtisodiyot bo‘limi bilan birgalikda
                    muvofiqlashtirish va shtat jadvaliga asosan ish olib
                    borish;- nafaqa yoshidagi professor-o‘qituvchi hamda
                    xodimlarni aniqlash, hujjatlarini rasmiylashtirish hamda
                    ro‘yxatga olish;- xar oyning boshida tuman bandlikka
                    ko‘maklashish markaziga bo‘sh ish o‘rinlari to‘g`risida
                    ma`lumot taqdim etish;- bo‘limda saqlanayotgan xodimlarga
                    oid barcha me`yoriy va shaxsiy hujjatlarni o‘rnatilgan
                    tartibda dalolatnoma tuzish orqali universitet arxivga
                    topshirish;- bo‘lim va xodimlar bilan ishlashda odob-ahloq
                    va ichki-tartib qoidalariga, mehnat intizomi va muomala
                    madaniyatiga rioya qilish.
                  </p>
                </>
              )}
              {lang == "ru" && (
                <>
                  <p>
                    Экономика и педагогика расположенная в Карши Отдел кадров
                    университета входит в состав университета это один из
                    отделов. Департамент Узбекистана Законы Республики,
                    Президент Республики Узбекистан Решения, постановления и
                    распоряжения Республики Узбекистан Постановления Кабинета
                    Министров, Верховного Совета Республики Узбекистан и приказы
                    Министерства среднего специального образования, Трудовой
                    Кодекс Республики Узбекистан, Ректор университета приказы,
                    постановления и Устав университета, деятельность на основе
                    инструкций и соответствующих указаний ведет В университете
                    работает отдел кадров профессор-преподаватель, ассистент по
                    образованию и финансам правила внутреннего распорядка
                    сотрудников университета, труд дисциплина, должностные
                    инструкции и установленные правила организует свою работу в
                    соответствии с
                  </p>
                  <p>
                    Начальник отдела и 2 сотрудника 1-го разряда в отделе кадров
                    работают инженер и 2 инспектора. Профессор-преподаватель
                    кафедры, ассистент и инспекторы по работе с финансовыми
                    работниками прямое поручение руководителя отдела кадров и
                    организует работу согласно инструкциям. Отмечено работает по
                    инструкции.
                  </p>
                  <h4>Задачи отдела кадров:</h4>
                  <p>
                    - профессор-преподаватель, ассистент и подбор финансовых
                    сотрудников, рабочей силы расторжение договора, должностей и
                    штатных единиц переодевание, предоставление отпуска и раньше
                    срока отзыв на работу, отпуск за свой счет, на основании
                    отбора периоды приема на работу и сертификации решимость,
                    контроль решимости;- занятый заключение трудовых договоров
                    между каждым работником контроль и подготовка оперативных
                    приказов;- формирование резерва управленческих кадров и из
                    него вносить предложения по использованию - университет;
                    Ректорский состав профессоров и преподавателей, их работа
                    дисциплины, повышение качества образования и их предложения
                    по профилактике импотенции подготовка и презентация – по
                    кадровым вопросам; быть в контакте с вышестоящими
                    организациями - министерством и профессор-преподаватель
                    университета и представление работников к государственным
                    наградам организация - профессор-преподаватель, ассистент и
                    подготовка справок для финансовых работников и контроль
                    продления срока действия сертификатов;- подтверждение
                    подписей профессоров и преподавателей, выдача справок -
                    ведение трудового учета, правильный учет и трудовой договор
                    своевременный перевод увольняемому или увольняемому
                    работнику;- профессор-преподаватель, ассистент преподавателя
                    и финансиста ведение статистической отчетности работников по
                    установленной форме идти - профессор-преподаватель,
                    ассистент и; личный сбор финансовых сотрудников, личное
                    форма (форма Т-2), личная справка (хрусталика) формирования,
                    в установленном порядке организация управления - штатное
                    расписание университета; совместно с финансово-экономическим
                    отделом координация и работа согласно штатному расписанию
                    идти - профессор-преподаватель пенсионного возраста и;
                    идентификация сотрудников, оформление документов и
                    регистрация - районное трудоустройство в начале каждого
                    месяца; о вакансиях в ассист-центр предоставление информации
                    - сотрудникам, содержащимся в отделе; установлены все
                    нормативные и личные документы в архив университета путем
                    оформления документа в порядке перевод - отдел и сотрудники;
                    этикет в работе с и внутреннего распорядка, трудовой
                    дисциплины и обращения следить за культурой.
                  </p>
                </>
              )}
              {lang == "en" && (
                <>
                  <>
                    <p>
                      Economy and pedagogy located in Karshi The university
                      personnel department is part of the university is one of
                      the departments. Department of Uzbekistan Laws of the
                      Republic, President of the Republic of Uzbekistan
                      Decisions, Decrees and Orders of the Republic of
                      Uzbekistan Resolutions of the Cabinet of Ministers,
                      Supreme of the Republic of Uzbekistan and orders of the
                      Ministry of Secondary Special Education, Labor Code of the
                      Republic of Uzbekistan, University Rector orders, decrees
                      and University Regulations, activity based on instructions
                      and relevant instructions leads The personnel department
                      works at the university professor-teacher, educational
                      assistant and finance internal regulations of university
                      employees, labor discipline, job instructions and
                      established rules organizes its operation in accordance
                      with
                    </p>
                    <p>
                      Head of the department and 2 1st-class employees in the
                      personnel department an engineer and 2 inspectors work.
                      The department's professor-teacher, teaching assistant and
                      inspectors of work with financial workers direct
                      assignment of the head of the personnel department and
                      organizes the work according to the instructions. Marked
                      works according to instructions.
                    </p>
                    <h4>Tasks of the personnel department:</h4>
                    <p>
                      - professor-teacher, teaching assistant and recruitment of
                      finance employees, labor termination of the contract,
                      positions and staff units changing, giving work leave and
                      before the deadline recall to work, vacation at own
                      expense, on the basis of selection recruitment and
                      certification periods determination, determination
                      control;- employed conclusion of labor contracts between
                      each employee control and preparation of operational
                      orders;- formation of a reserve of managerial personnel
                      and from it to make suggestions regarding use; -
                      university Rector's staff of professors and teachers,
                      their work discipline, improving the quality of education
                      and their suggestions for prevention of impotence
                      preparation and presentation; - on personnel issues to be
                      in contact with higher organizations; - ministry and
                      university professor-teacher and recommending employees
                      for state awards organization; - professor-teacher,
                      teaching assistant and preparing certificates for finance
                      employees and controlling the extension of the term of
                      certificates;- confirmation of signatures of professors
                      and teachers, issuing references; - keeping labor records,
                      correct accounting and employment contract timely transfer
                      to a terminated or terminated employee;-
                      professor-teacher, teaching assistant and finance taking
                      the statistical report of employees in the prescribed form
                      to go; - professor-teacher, teaching assistant and
                      personal collection of financial employees, personal form
                      (T-2 form), personal reference (lens) formation, in the
                      prescribed manner organization of management; - university
                      staff schedule together with the financial and economic
                      department coordinate and work according to the staff
                      schedule to go; - a professor-teacher of retirement age
                      and identification of employees, formalization of
                      documents and registration; - district employment at the
                      beginning of every month about vacancies for the
                      assistance center providing information; - to employees
                      kept in the department all regulatory and personal
                      documents are installed to the university archive by
                      drawing up a document in order transfer; - department and
                      employees etiquette in working with and internal
                      regulations, labor discipline and treatment follow the
                      culture.
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
