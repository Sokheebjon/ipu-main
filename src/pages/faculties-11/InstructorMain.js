import React from "react";
import { Link } from "react-router-dom";

import instructors from "../../data/Instructors.json";
import { useIntl } from "react-intl";
import { getProductName } from "../../helpers/general";

const InstructorMain = () => {
  const intl = useIntl();
  const lang = (
    JSON.parse(localStorage.getItem("i18nConfig")) || { selectedLang: "uz" }
  )?.selectedLang;
  return (
    <>
      <div className="instructors___page pt---60 pb0">
        <div className="container pb---60">
          <div className="row">
            {instructors
              .filter((instructor) => instructor.kafedra == 11)
              .map((data, index) => {
                return (
                  <div className="col-lg-3">
                    <div className="instructor__content">
                      <div className="instructor__image">
                        <img
                          src={require(`../../assets/images/instructor/${data.image}`)}
                          alt={data.name}
                          style={{ height: 400, objectFit: "cover" }}
                        />
                        <div className="content__hover">
                          <p>{data.bio}</p>
                          <ul>
                            <li>
                              <a href="#">
                                <span
                                  aria-hidden="true"
                                  className="social_facebook"
                                ></span>
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <span
                                  aria-hidden="true"
                                  className="social_twitter"
                                ></span>
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <span
                                  aria-hidden="true"
                                  className="social_linkedin"
                                ></span>
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="bottom-content">
                        <h4>
                          <Link to={`/instructor/${data.id}`}>
                            {getProductName(data, "name", lang)}
                          </Link>
                        </h4>
                        <p> {getProductName(data, "designation", lang)}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
          </div>
          <div className="col-lg-12">
            {lang == "uz" && (
              <>
                <p>
                  Xorijiy tillar va jismoniy madaniyat fakulteti 2023-yilda
                  Iqtisodiyot, pedagogika va muhandislik fakulteti negizida
                  tashkil etilgan bo‘lib, fakultet dekani sifatida
                  B.X.Normahmatov faoliyat yuritib kelmoqda. <br />
                  Fakultetda “60110200-Maktabgacha ta’lim”,
                  “60110500-Boshlang'ich ta'lim”, “60111800 - Xorijiy til va
                  adabiyoti (ingliz tili va adabiyoti)”, “60111800 - Xorijiy til
                  va adabiyoti (nemis tili va adabiyoti)”, “60111800 - Xorijiy
                  til va adabiyoti (rus tili va adabiyoti)” ta’lim
                  yo‘nalishlarida jami 1326 nafar talabalar tahsil olmoqda.{" "}
                  <br />
                  Fakultet tarkibida 3 ta kafedra mavjud bo‘lib, “Xorijiy
                  tillar” kafedrasida asosiy shtatda 11 nafar
                  professor-o‘qituvchilar faoliyat yuritib kelmoqda. Shundan, 1
                  nafari professor, 1 nafari dotsent, 5 nafari katta o‘qituvchi,
                  1 nafari assistent, 3 nafari stajyor o‘qituvchilardir.
                  Kafedraga prof.M.Dj.Daniyeva rahbarlik qilib kelmoqda. <br />
                  “Pedagogika va o‘qitish metodikasi” kafedrasida 34 shtat
                  birligida faoliyat olib borib, shundan 3,75 shtatda professor,
                  4,5 shtatda dotsent, 3,25 shtatda katta o‘qituvchi, 12,5
                  shtatda assistent, 10 shtatda stajor-o‘qituvchilardir.
                  Kafedrani prof.Z.L.Batirov boshqarib kelmoqda. <br />
                  “O‘zbek tili va adabiyoti” kafedrasida asosiy shtatda 12 nafar
                  professor-o‘qituvchi faoliyat olib boradi. Shundan, 1 nafar
                  v.b.professor, 2 nafar fan nomzodi, 3 nafar f.f.f.d (PhD), 3
                  nafar assistent o‘qituvchi, 3 nafar stajyor-o‘qituvchilardir.
                  Kafedraga dots. Sh.Z.Raxmatullayeva rahbarlik qilib kelmoqda.{" "}
                  <br />
                </p>
                <h4>
                  Bakalavriat ta’lim yo‘nalishlari (Kunduzgi ta’lim shakli):
                </h4>
                <p>
                  60110200 – Maktabgacha ta’lim; <br /> 60110500 – Boshlang'ich
                  ta'lim; <br />
                  60111800 – Xorijiy til va adabiyoti (ingliz tili va
                  adabiyoti); <br />
                  60111800 – Xorijiy til va adabiyoti (nemis tili va adabiyoti);{" "}
                  <br />
                  60111800 – Xorijiy til va adabiyoti (rus tili va adabiyoti).{" "}
                  <br />
                </p>
                <h4>Talabalar kontingenti – 1326 nafar</h4>
                <p>
                  Shundan, <br />
                  1-kurs - 1034 nafar; <br />
                  2-kurs - 262 nafar; <br />
                  3-kurs - 30 nafar. <br />
                </p>
                <h4>Kafedralar:</h4>
                <p>
                  • Xorijiy tillar; <br />
                  • Pedagogika va o‘qitish metodikasi; <br />
                  • O‘zbek tili va adabiyoti. <br />
                </p>
              </>
            )}

            {lang == "ru" && (
              <>
                <p>
                  Факультет иностранных языков и физической культуры в 2023 году
                  На базе факультета экономики, педагогики и инженерии был
                  назначен деканом факультета Б.Х. Нормахматов работает. <br />
                  Факультет «60110200-Дошкольное образование»,
                  «60110500-Начальное образование», «60111800-Иностранный язык и
                  литература (английский язык и литература)», «60111800 –
                  Иностранный язык и литературы (немецкий язык и литература)»,
                  «60111800 – Иностранный язык и литература (Русский язык и
                  литература)» образование всего по этим направлениям обучаются
                  1326 студентов. <br />
                  На факультете имеется 3 кафедры: «Иностранная В основном штате
                  кафедры «Языки» 11 человек. работают профессора и
                  преподаватели. Из них 1 1 профессор, 1 доцент, 5 старших
                  преподавателей, 1 ассистент, 3 преподавателя-стажера. Кафедру
                  возглавляет профессор М.Дж.Даниева. <br />
                  34 штата по кафедре «Педагогика и методика преподавания»
                  работают на кафедре, из них 3,75 профессора в штате, Доцент в
                  4,5 штатах, старший преподаватель в 3,25 штатах, 12,5
                  ассистенты в штате, преподаватели-стажеры в 10 штатах. Кафедру
                  возглавляет проф. З.Л. Батиров. <br />В основном штате кафедры
                  «Узбекский язык и литература» работают 12 человек. работает
                  профессором-преподавателем. Из них 1 человек д.б.профессор, 2
                  кандидата наук, 3 д.ф.ф.н., 3 1 ассистент преподавателя, 3
                  преподавателя-стажера. доцент кафедры. Лидирует
                  Ш.З.Рахматуллаева. <br />
                </p>
                <h4>Направления бакалавриата (Очная обучения): </h4>
                <p>
                  60110200 – Дошкольное образование;
                  <br />
                  60110500 – Начальное образование; <br />
                  60111800 – Иностранный язык и литература (Английский язык и
                  литература); <br />
                  60111800 – Иностранный язык и литература (Немецкий язык и
                  литература); <br />
                  60111800 – Иностранный язык и литература (Русский язык и
                  литература). <br />
                </p>
                <h4>Студенческий контингент – 1326 чел.</h4>{" "}
                <p>
                  Отсюда <br />
                  1-й курс – 1034 человека; <br />
                  2 курс – 262 человека; <br />
                  3 курс – 30 человек. <br />
                </p>
                <h4>Отделы:</h4>
                <p>
                  • Иностранные языки; <br />
                  • Педагогика и методика преподавания; <br />
                  • Узбекский язык и литература. <br />
                </p>
              </>
            )}

            {lang == "en" && (
              <>
                <p>
                  Faculty of Foreign Languages ​​and Physical Culture in 2023 On
                  the basis of the Faculty of Economics, Pedagogy and
                  Engineering was established as the dean of the faculty B.Kh.
                  Normahmatov has been working. <br />
                  Faculty "60110200-Preschool Education", "60110500-Primary
                  education", "60111800 - Foreign language and literature
                  (English language and literature)", "60111800 - Foreign
                  language and literature (German language and literature)",
                  "60111800 - Foreign language and literature (Russian language
                  and literature)" education a total of 1326 students are
                  studying in these fields. <br />
                  The faculty has 3 departments, "Foreign 11 people in the main
                  staff at the "Languages" department professors and teachers
                  are working. Of this, 1 1 professor, 1 associate professor, 5
                  senior teachers, 1 assistant, 3 trainee teachers. The
                  department is headed by Prof. M. Dj. Daniyeva. <br />
                  34 states in the "Pedagogy and teaching methodology"
                  department working in the unit, of which 3.75 are professors
                  in the state, Associate Professor in 4.5 states, Senior
                  Lecturer in 3.25 states, 12.5 assistants in the state, trainee
                  teachers in 10 states. The department is headed by Prof. Z.L.
                  Batirov. <br />
                  There are 12 people in the main staff at the "Uzbek language
                  and literature" department works as a professor-teacher. Of
                  this, 1 person v.b.professor, 2 candidates of science, 3
                  f.f.f.d (PhD), 3 1 assistant teacher, 3 intern-teachers.
                  Assoc. to the department. Sh.Z.Rakhmatullayeva is leading.{" "}
                  <br />
                </p>
                <h4>Areas of undergraduate education (full-time education):</h4>
                <p>
                  60110200 – Pre-school education;
                  <br /> 60110500 – Primary education; <br />
                  60111800 – Foreign language and literature (English language
                  and literature); <br />
                  60111800 – Foreign language and literature (German language
                  and literature); <br />
                  60111800 – Foreign language and literature (Russian language
                  and literature). <br />
                </p>
                <h4>Student contingent - 1326</h4>
                <p>
                  From this, <br />
                  1st year - 1034 people; <br />
                  2nd year - 262 people; <br />
                  3rd course - 30 people. <br />
                </p>
                <h4>Departments:</h4>
                <p>
                  • Foreign languages; <br />
                  • Pedagogy and teaching methodology; <br />
                  • Uzbek language and literature. <br />
                </p>
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default InstructorMain;
