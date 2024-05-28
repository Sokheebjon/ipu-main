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
                  <h4 className="text-black">Asosiy vazifalari:</h4>
                  <p>
                    <>
                      <p>
                        <strong>DEVONXONA</strong>
                        <strong>NIZOMI</strong>
                      </p>
                      <p>
                        O‘zbekiston Respublikasi Vazirlar Mahkamasining 1999-yil
                        29-martdagi <br /> 140-sonli Qarori, O‘zbekiston
                        Respublikasi Vazirlar Mahkamasining <br /> 1999-yil
                        12-yanvardagi 12-sonli “Ijro intizomini mustahkamlash
                        to‘g‘risida”gi qarori hamda NIZOM asosida ish olib
                        boradi.
                      </p>
                      <ol>
                        <li>
                          <strong> Devonxona mudirasi vazifasi:</strong>
                        </li>
                      </ol>
                      <p>
                        - Iqtisodiyot va pedagogika universiteti nodavlat ta’lim
                        muassasasiga elektron portali hamda pochta orqali
                        keluvchi hujjatlarni to‘g‘ri ro‘yxatga olish, o‘z
                        vaqtida qayd etish va zudlik bilan rahbarga yetkazish;
                      </p>
                      <p>
                        - rektor ko‘rsatmasiga muvofiq hujjatlarni ijro etish
                        uchun yuborish;
                      </p>
                      <p>
                        - rahbar topshirig‘i (relayusiyasi)dan so‘ng o‘z vaqtida
                        qayd etilishi va ijrochilarga 30 daqiqa ichida
                        yetkazilishini tashkil qiladi;
                      </p>
                      <p>
                        - universitetdan chiquvchi hujjatlarning rekvizitlari
                        to‘g‘riligini tekshirish, hujjatlarni to‘g‘ri
                        rasmiylashtirilishini ta’minlash;
                      </p>
                      <p>
                        - hujjatlarni ijrochilarga yetkazish uchun har bir
                        hujjatga tegishli nazorat kartochkalari yozish va ma’lum
                        qilish uchun topshirish;
                      </p>
                      <p>- ma’muriy buyruqlarni jurnalga qayd qilish;</p>
                      <p>- talaba buyruqlarni jurnalga qayd qilish;</p>
                      <p>- farmoyishlarni jurnalga qayd qilish.</p>
                      <ol start={2}>
                        <li>
                          <strong> Ish yurituvchi vazifasi:</strong>
                        </li>
                      </ol>
                      <p>
                        - universitetga kiruvchi hujjatlarni to‘g‘ri hisobga
                        olishni, o‘z vaqtida qayd etilishi va ijrochilarga
                        topshirilishini, jo‘natilayotgan hujjatlarni to‘g‘ri
                        rasmiylashtirilishini ta’minlash;
                      </p>
                      <p>
                        - universitetga keluvchi hujjatlarga nazorat
                        kartochkalari yozib berish, ma’lum qilish uchun
                        topshirish;
                      </p>
                      <p>
                        - rektorning ko‘rsatmasiga muvofiq hujjatlarni ijro
                        etish uchun yuborish;
                      </p>
                      <p>
                        - ijro etilgan hujjatlarni yig‘majildlarga tikib borish;
                      </p>
                      <p>
                        - ish yuritishda tugallangan hujjatlarni arxivga
                        topshirishga tayyorlash.
                      </p>
                      <ol start={3}>
                        <li>
                          <strong> Kurer (xat tashuvchi)ning vazifasi:</strong>
                        </li>
                      </ol>
                      <p>
                        - universitetdan chiquvchi xatlarni to‘g‘riligini
                        tekshirish va o‘z manzillariga pochta orqali to‘g‘ri
                        yuborish;
                      </p>
                      <p>
                        - barcha hujjatlar, xat-xabarlarni tegishli soha
                        prorektorlariga, bo‘linmalarga, fakultetlarga,
                        kafedralarga o‘z vaqtida yetkazish va yetkazilganligini
                        tasdiqlatish.
                      </p>
                      <p>
                        <strong>DEVONXONANING ASOSIY VAZIFALARI</strong>
                      </p>
                      <p>
                        1.Universitetda ish olib borishni tashkil etish, ish
                        yuritish intizomi talablariga rioya qilish va
                        takomillashtirish, hujjatlar bilan ishlash jarayonida
                        maxfiylikni ta’minlash.
                      </p>
                      <p>
                        2.Ish yuritishdagi muxr va shtapmlardan foydalanishni,
                        ularni hisobga olinishini va saqlanishini ta’minlash.
                      </p>
                      <p>
                        3.Devonxona bo‘limida mavjud universitet nomenklaturasi
                        asosida bo‘limlarda hujjatlarning to‘g‘ri yuritilishi,
                        kirish-chiqish xatlarining qayd qilish kitoblarini
                        yuritilishini nazorat qilish.
                      </p>
                      <p>
                        4.Saqlash muddati tugagan hujjatlarni o‘z vaqtida
                        arxivga topshirishni tashkil etish.
                      </p>
                      <p>
                        5.Universitet tarkibiy tuzilmasidagi boֹ‘limlar va
                        yuritiladigan jurnallarni nazorat qilish, kirish,
                        chiqish hujjatlarini vaqtida va to‘g‘ri qayd etish.
                      </p>
                      <p>
                        6.Xatlar va hujjatlarni qabul qilish va vaqtida javob
                        xatini jo‘natish.
                      </p>
                      <p>
                        7.Dekanatlar va bo‘limlarga tegishli hujjatlarni
                        tarqatish.
                      </p>
                      <p>
                        8.Devonxona va arxiv ishchilarining malakasini oshirish
                        choralarini ko‘rish.
                      </p>
                      <p>
                        9.Devonxona mazkur Nizom hamda boshqa normativ-huquqiy
                        hujjatlar bilan o‘z zimmasiga yuklatilgan barcha
                        vazifalarning bajarilishini ta’minlash uchun
                        javobgardir.
                      </p>
                      <p>
                        10.Devonxona o‘z dumaloq muxriga ega. Ushbu muxr
                        devonxona mudirasida saqlanadi.
                      </p>
                      <p>
                        <strong>Devonxona xodimlarining burchlari</strong>
                      </p>
                      <p>
                        Xizmat vazifalarini halol va vijdonan bajarish. Mexnat
                        intizomiga, universitet ichki tartib-qoidalariga rioya
                        qilish, hujjatlarni tashqariga rahbariyatning ruxsatisiz
                        chiqishiga yo‘l qo‘ymaslik. Rahbariyat buyruq va
                        farmoyishlarini o‘z vaqtida va sifatli bajarish.
                        Universitetga taalluqli bo‘lgan barcha hujjatlarning
                        butligini, saqlanishini, mehnat muxofazasini, teknika
                        xavfsizligi qoidalarini ta’minlash. Ishlab chiqarish
                        sanitariyasi talablariga (universitet mol-mulkini toza
                        asrab-avaylash) rioya qilish.
                      </p>
                      <p>
                        <strong>Devonxona mudiri lavozim vazifalari:</strong>
                      </p>
                      <ul>
                        <li>
                          Vazirlar Maxkamasining 1999-yil 12-fevraldagi 12-sonli
                          “Ijro intizomini mustaxkamlash to‘g‘risida”gi,
                          1999-yil 29-martdagi 140-sonli “O‘zbekiston
                          Respublikasining davlat hokimiyati organlarida va
                          boshqarmalarida ish yuritish bo‘yicha me’yoriy”
                          hujjatlarni tasdiqlash va ijro nazoratini tashkil
                          qilish to‘g‘risida”gi qarorlari, vazirlikning 2015-yil
                          18-fevraldagi 58-son “Vazirlik apparatida ish yuritish
                          va hujjatlar ijrosi nazoratini tashkil qilish bo‘yicha
                          yo‘riqnomani tasdiqlash to‘g‘risida”gi buyrug‘iga amal
                          qilgan holda hujjatlarni ijro intizomi bo‘yicha bu
                          boradagi ishlar sifatini nazoratini tashkil etish;
                        </li>
                        <li>
                          -O‘zbekiston Respublikasi Oliy Majlisi, Prezident
                          Devoni, Vazirlar Mahkamasi va boshqa vazirlik, idora,
                          tashkilotlardan kelib tushgan hujjatlarni to‘g‘ri
                          ro‘yxatga olish, o‘z vaqtida qayd etilishi va
                          ijrochilarga topshirilishini tashkil etish;
                        </li>
                        <li>
                          -Universitetdan chiquvchi hujjatlarning to‘g‘ri
                          rasmiylashtirilishini ta’minlash;
                        </li>
                        <li>
                          -Kiruvchi hujjatlarni (JFC-JOB FLOW CONTROL)
                          avtomatlashtirilgan dastur orqali ijrochilarga zudlik
                          bilan yetkazish;
                        </li>
                        <li>
                          -Boshqaruv faoliyatini hujjatlashtirish, xatlarni
                          jo‘natish va ichki hujjatlarni tuzish,
                          rasmiylashtirish ishlarini amalga oshiradi;
                        </li>
                        <li>
                          -Hujjatlarni ijro etilishi ustidan nazoratini tashkil
                          etish;
                        </li>
                        <li>
                          -Rektor ko‘rsatmasiga muvofiq hujjatlarni o‘z vaqtida
                          ijro etish uchun mas’ullarga yetkazish;
                        </li>
                        <li>
                          -Rektor (prorektor) imzosi bilan yuboriladigan
                          hujjatlar qayd etilib, to‘g‘ri
                          rasmiylashtirilganligini tekshirish;
                        </li>
                        <li>-Universitet blanklarini hisobga olib borish;</li>
                        <li>
                          -Ish yuritish va hujjatlar bilan ishlashda o‘rnatilgan
                          tartiblarni takomillashtirish borasida bo‘linmalar
                          bilan hamkorlikda ish olib borish va tegishli
                          chora-tadbirlarni ishlab chiqish;
                        </li>
                        <li>
                          -Devonxona va arxiv bo‘limi xodimlari bilan birgalikda
                          universitet nomenklaturasini Qarshi shahar davlat
                          Arxivi bilan kelishilgan holda tuzish, rektor bilan
                          kelishilgan holda imzolash va ish yuritish uchun
                          bo‘limlarga tadbiq etish;
                        </li>
                        <li>
                          -Ish jarayonida o‘z malaka va tajribasini oshirib
                          borish hamda ish faoliyatida yangi yo‘nalishlarni
                          joriy etishni ta’minlash;
                        </li>
                        <li>
                          -Devonxona xizmatiga oid bajarilgan barcha ishlar
                          yuzasidan universitet rektoriga axborot berib turish;
                        </li>
                        <li>
                          -Devonxona bo‘limiga jismoniy va yuridik shaxslar
                          tomonidan kelib tushgan yozma murojaatlarini ro‘yxatga
                          olish, rahbariyatga zudlik bilan yetkazish va ularni
                          vazirlik rahbariyati tomonidan qabul qilinishi va
                          tegishli javoblar yo‘llanishini qonunda ko‘rsatilgan
                          moddalar asosida bajarish;
                        </li>
                        <li>
                          -Bo‘limga tegishli ishchilarining malakasini oshirish
                          choralarini ko‘rish;
                        </li>
                        <li>
                          -Ijro etilgan hujjatlarni yig‘ma-jildlarga tikib
                          qo‘yish;
                        </li>
                        <li>
                          -Hujjatlarni belgilangan muddatda idoraviy arxivga
                          topshirishga tayyorlaydi va topshirish;
                        </li>
                      </ul>
                    </>
                  </p>
                </>
              )}

              {lang == "ru" && (
                <>
                  <h4 className="text-black">Основные функции:</h4>
                  <p>
                    <>
                      <p>
                        <strong>КОМНАТА УХОДА</strong>
                        <strong>ГОСУДАРСТВО</strong>
                      </p>
                      <p>
                        1999 г. Кабинета Министров Республики Узбекистан.
                        Постановление № 140 от 29 марта, Узбекистан 1999 г.
                        Кабинета Министров Республики № 12 от 12 января
                        «Укрепление исполнительской дисциплины» Решение «О» и
                        работа на основании РЕГЛАМЕНТА идет
                      </p>
                      <ol>
                        <li>
                          <strong>Обязанности руководителя офиса:</strong>
                        </li>
                      </ol>
                      <p>
                        - Университет экономики и педагогики, негосударственное
                        образование в учреждение через электронный портал и по
                        почте правильное оформление входящих документов,
                        собственное своевременная запись и немедленная доставка
                        руководителю;
                      </p>
                      <p>
                        - оформление документов согласно поручению ректора
                        послать за;
                      </p>
                      <p>
                        - вовремя после задания ведущего (эстафеты). пройти
                        регистрацию и к исполнителям в течение 30 минут
                        организует доставку;
                      </p>
                      <p>
                        - реквизиты документов, выданных вузом проверить
                        правильность документов обеспечить формализацию;
                      </p>
                      <p>
                        - каждый передать документы исполнителям написание
                        контрольных карточек, относящихся к документу и
                        известных подчиняться, чтобы сделать;
                      </p>
                      <p>- протоколировать административные распоряжения;</p>
                      <p>- записывать команды учащихся в журнал;</p>
                      <p>- регистрировать заказы.</p>
                      <ol start={2}>
                        <li>
                          <strong> Диспетчер задач:</strong>
                        </li>
                      </ol>
                      <p>
                        - правильно рассматривать документы, поступающие в вуз
                        получать, фиксировать вовремя и к исполнителям подача,
                        отправляемые документы верны обеспечить формализацию;
                      </p>
                      <p>
                        - контроль документов, поступающих в университет писать
                        карты, сообщать представлять на рассмотрение;
                      </p>
                      <p>
                        - оформление документов согласно поручению ректора
                        отправить, чтобы достичь;
                      </p>
                      <p>- вшивка оформленных документов в коллекции;</p>
                      <p>
                        - в архив документов, оформленных в ходе работы
                        подготовка к сдаче.
                      </p>
                      <ol start={3}>
                        <li>
                          <strong>
                            Обязанности курьера (почтового перевозчика):
                          </strong>
                        </li>
                      </ol>
                      <p>
                        - правильность писем из вуза проверка и исправление по
                        почте на свои адреса отправка;
                      </p>
                      <p>
                        - все документы, переписка в соответствующей сфере
                        проректорам кафедр, факультетов, своевременная доставка
                        и доставка в отделения подтверждение.
                      </p>
                      <p>
                        <strong>ОСНОВНЫЕ ОБЯЗАННОСТИ ОФИСА</strong>
                      </p>
                      <p>
                        1. Организация работы в университете, работа соблюдение
                        требований поведения и улучшение, в процессе работы с
                        документами обеспечение конфиденциальности.
                      </p>
                      <p>
                        2. Использование печатей и штампов в предпринимательской
                        деятельности брать обеспечение их учета и сохранения.
                      </p>
                      <p>
                        3. Номенклатура вузов доступна в Кабинете министров. на
                        основе правильного ведения документов в подразделениях,
                        журналы учета входящих и исходящих писем контроль
                        управления.
                      </p>
                      <p>
                        4. Документы, срок действия которых истек в срок
                        организация архивного дела.
                      </p>
                      <p>
                        5. Подразделения в структурной структуре университета и
                        контроль ведения журналов, доступа, своевременный и
                        правильный учет выездных документов.
                      </p>
                      <p>
                        6. Прием и своевременный ответ на письма и документы.
                        Отправить письмо.
                      </p>
                      <p>
                        7. Документы по деканатам и кафедрам. распределение.
                      </p>
                      <p>
                        8. Повышение квалификации кабинетно-архивных работников.
                        принять меры.
                      </p>
                      <p>
                        9. Настоящее Положение и другие нормативные акты
                        Кабинета министров. все обвиняемые с документами
                        обеспечить выполнение поставленных задач ответственнен.
                      </p>
                      <p>
                        10. Шкаф имеет собственное круглое уплотнение. Эта марка
                        хранится в головном офисе офиса.
                      </p>
                      <p>
                        <strong>Обязанности сотрудников офиса</strong>
                      </p>
                      <p>
                        Честно и добросовестно выполнять служебные обязанности.
                        Коктейль соблюдение дисциплины, внутренних распорядков
                        университета делать, документы выкладывать без
                        разрешения руководства не позволяйте ему выйти наружу.
                        Порядок управления и своевременное и качественное
                        выполнение заказов. Все документы, относящиеся к
                        университету целостность, сохранность, охрана труда,
                        техника обеспечение правил техники безопасности.
                        Производство санитарные требования (чистота имущества
                        университета сохранить) наблюдать.
                      </p>
                      <p>
                        <strong>Обязанности офис-менеджера:</strong>
                      </p>
                      <ul>
                        <li>
                          Постановление Кабинета Министров № 12 от 12 февраля
                          1999 года. «Об укреплении исполнительской дисциплины»,
                          № 140 от 29 марта 1999 года «Узбекистан В органах
                          государственной власти Республики и положения о
                          порядке работы в подразделениях" организация
                          согласования и контроля исполнения документов Решения
                          Министерства за 2015 год № 58 от 18 февраля «Работа в
                          аппарате Министерства и по организации контроля за
                          исполнением документов выполнить приказ «Об
                          утверждении инструкции». Это согласно дисциплине
                          оформления документов организация контроля качества
                          сопутствующих работ;
                        </li>
                        <li>
                          - Олий Мажлис Республики Узбекистан, Президент Кабмин,
                          Кабмин и другие министерства, ведомства, документы,
                          полученные от организаций, верны регистрация,
                          своевременная регистрация и организация доставки
                          исполнителям;
                        </li>
                        <li>
                          - Документы из университета верны обеспечить
                          формализацию;
                        </li>
                        <li>
                          -Входящие документы (JFC-JOB FLOW CONTROL) сразу
                          исполнителям через автоматизированную программу
                          доставить с;
                        </li>
                        <li>
                          - Документирование управленческой деятельности, писем.
                          отправка и составление внутренних документов,
                          осуществляет формальности;
                        </li>
                        <li>
                          - Организация контроля исполнения документов.
                          достигать;
                        </li>
                        <li>
                          - Своевременно подавать документы согласно указаниям
                          ректора. передать ответственным за исполнение;
                        </li>
                        <li>
                          - Присылается за подписью ректора (проректора).
                          документы зарегистрированы и верны проверка
                          формализации;
                        </li>
                        <li>-Учет вузовских форм;</li>
                        <li>
                          -Налажена работа и документооборот. подразделения по
                          совершенствованию процедур работать в сотрудничестве и
                          соответствующих разработка мероприятий;
                        </li>
                        <li>
                          -Совместно с сотрудниками кабинета и архивного отдела
                          Номенклатура вузов Противоположный город-государство
                          Составление по согласованию с архивом, с ректором
                          подписать и действовать согласно договоренности
                          заявление в подразделения;
                        </li>
                        <li>
                          -Повышение своих навыков и опыта в процессе работы. и
                          новые направления в работе обеспечить реализацию;
                        </li>
                        <li>
                          - Все работы связанные с обслуживанием кабинета
                          предоставление информации ректору университета;
                        </li>
                        <li>
                          - Физические и юридические лица в Кабинет министров к
                          списку письменных обращений, поступивших получить,
                          немедленно передать руководству и им принятие
                          руководством министерства и в законе указано, что
                          должны быть отправлены соответствующие ответы
                          выполняют на основе веществ;
                        </li>
                        <>
                          - Повышение квалификации сотрудников отдела. принять
                          меры;
                        </>
                        <>-Сшиваем оформленные документы в пачки класть</>
                        <>
                          - Документы в ведомственный архив в установленный
                          срок. готовится к подаче и подаче;
                        </>
                      </ul>
                    </>
                  </p>
                </>
              )}

              {lang == "en" && (
                <>
                  <h4 className="text-black">Asosiy vazifalari:</h4>
                  <p>
                    <>
                      <p>
                        <strong>DEVONXONA</strong>
                        <strong>NIZOMI</strong>
                      </p>
                      <p>
                        O'zbekiston Respublikasi Vazirlar Mahkamasining 1999-yil
                        29-martdagi <br /> 140-sonli Qarori, O‘zbekiston
                        Respublikasi Vazirlar Mahkamasining <br /> 1999-yil
                        12-yanvardagi 12-sonli “Ijro intizomini mustahkamlash
                        to‘g‘risida”gi qarori hamda NIZOM asosida ish olib
                        boradi.
                      </p>
                      <ol>
                        <li>
                          <strong>Devonxona mudirasi vazifasi:</strong>
                        </li>
                      </ol>
                      <p>
                        - Iqtisodiyot va pedagogika universiteti nodavlat ta’lim
                        muassasasiga elektron portali hamda pochta orqali
                        keluvchi hujjatlarni to‘g‘ri ro‘yxatga olish, o‘z
                        vaqtida qayd etish va zudlik bilan rahbarga yetkazish;
                      </p>
                      <p>
                        - rektor ko‘rsatmasiga muvofiq hujjatlarni ijro etish
                        uchun yuborish;
                      </p>
                      <p>
                        - rahbar topshirig‘i (relayusiyasi)dan so‘ng o‘z vaqtida
                        qayd etilishi va ijrochilarga 30 daqiqa ichida
                        yetkazilishini tashkil qiladi;
                      </p>
                      <p>
                        - universitetdan chiquvchi hujjatlarning rekvizitlari
                        to'g'riligini tekshirish, hujjatlarni to'g'ri
                        rasmiylashtirilishini ta’minlash;
                      </p>
                      <p>
                        - hujjatlarni ijrochilarga yetkazish uchun har bir
                        hujjatga tegishli nazorat kartochkalari yozish va ma’lum
                        qilish uchun topshirish;
                      </p>
                      <p>- ma’muriy buyruqlarni jurnalga qayd qilish;</p>
                      <p>- talaba buyruqlarni jurnalga qayd qilish;</p>
                      <p>- farmoyishlarni jurnalga qayd qilish.</p>
                      <ol start={2}>
                        <li>
                          <strong>Ish yurituvchi vazifasi:</strong>
                        </li>
                      </ol>
                      <p>
                        - universitetga kiruvchi hujjatlarni to‘g‘ri hisobga
                        olishni, o‘z vaqtida qayd etilishi va ijrochilarga
                        topshirilishini, jo‘natilayotgan hujjatlarni to‘g‘ri
                        rasmiylashtirilishini ta’minlash;
                      </p>
                      <p>
                        - universitetga keluvchi hujjatlarga nazorat
                        kartochkalari yozib berish, ma’lum qilish uchun
                        topshiris;
                      </p>
                      <p>
                        - rektorning ko‘rsatmasiga muvofiq hujjatlarni ijro
                        etish uchun yuborish;
                      </p>
                      <p>
                        - ijro etilgan hujjatlarni yig‘majildlarga tikib borish;
                      </p>
                      <p>
                        - ish yuritishda tugallangan hujjatlarni arxivga
                        topshirishga tayyorlash.
                      </p>
                      <ol start={3}>
                        <li>
                          <strong>Kurer (xat tashuvchi)ning vazifasi:</strong>
                        </li>
                      </ol>
                      <p>
                        - universitetdan chiquvchi xatlarni to‘g‘riligini
                        tekshirish va o‘z manzillariga pochta orqali to‘g‘ri
                        yuborish;
                      </p>
                      <p>
                        - barcha hujjatlar, xat-xabarlarni tegishli soha
                        prorektorlariga, bo‘linmalarga, fakultetlarga,
                        kafedralarga o‘z vaqtida yetkazish va yetkazilganligini
                        tasdiqlatish.
                      </p>
                      <p>
                        <strong>DEVONXONANING ASOSIY VAZIFALARI</strong>
                      </p>
                      <p>
                        1.Universitetda ish olib borishni tashkil etish, ish
                        yuritish intizomi talablariga rioya qilish va
                        takomillashtirish, hujjatlar bilan ishlash jarayonida
                        maxfiylikni ta’minlash.
                      </p>
                      <p>
                        2.Ish yuritishdagi muxr va shtapmlardan fo ydalanishni,
                        ularni hisobga olinishini va saqlanishini ta’minlash.
                      </p>
                      <p>
                        3.Devonxona bo‘limida mavjud universitet nomenklaturasi
                        asosida bo‘limlarda hujjatlarning to‘g‘ri yuritilishi,
                        kirish-chiqish xatlarining qayd qilish kitoblarini
                        yuritilishini nazorat qilish.
                      </p>
                      <p>
                        4.Saqlash muddati tugagan hujjatlarni o‘z vaqtida
                        arxivga topshirishni tashkil etish.
                      </p>
                      <p>
                        5.Universitet tarkibiy tuzilmasidagi boֹ‘limlar va
                        yuritiladigan jurnallarni nazorat qilish, kirish,
                        chiqish hujjatlarini vaqtida va to‘g‘ri qayd etish.
                      </p>
                      <p>
                        6.Xatlar va hujjatlarni qabul qilish va vaqtida javob
                        xatini jo'natish.
                      </p>
                      <p>
                        7.Dekanatlar va bo‘limlarga tegishli hujjatlarni
                        tarqatish.
                      </p>
                      <p>
                        8.Devonxona va arxiv ishchilarining malakasini oshirish
                        choralarini ko‘rish.
                      </p>
                      <p>
                        9.Devonxona mazkur Nizom hamda boshqa normativ-huquqiy
                        hujjatlar bilan o‘z zimmasiga yuklatilgan barcha
                        vazifalarning bajarilishini ta’minlash uchun
                        javobgardir.
                      </p>
                      <p>
                        10.Devonxona o‘z dumaloq muxriga ega. Ushbu muxr
                        devonxona mudirasida saqlanadi.
                      </p>
                      <p>
                        <strong>Devonxona xodimlarining burchlari</strong>
                      </p>
                      <p>
                        Xizmat vazifalarini halol va vijdonan bajarish. Mexnat
                        intizomiga, universitet ichki tartib-qoidalariga rioya
                        qilish, hujjatlarni tashqariga rahbariyatning ruxsatisiz
                        chiqishiga yo‘l qo‘ymaslik. Rahbariyat buyruq va
                        farmoyishlarini o‘z vaqtida va sifatli bajarish.
                        Universitetga taalluqli bo‘lgan barcha hujjatlarning
                        butligini, saqlanishini, mehnat muxofazasini, teknika
                        xavfsizligi qoidalarini ta’minlash. Ishlab chiqarish
                        sanitariyasi talablariga (universitet mol-mulkini toza
                        asrab-avaylash) rioya qilish.
                      </p>
                      <p>
                        <strong>Devonxona mudiri lavozim vazifalari:</strong>
                      </p>
                      <ul>
                        <li>
                          Vazirlar Maxkamasining 1999-yil 12-Fevraldagi 12-sonli
                          “Ijro intizomini mustaxkamlash to‘g‘risida”gi,
                          1999-yil 29-martdagi 140-sonli “O‘zbekiston
                          Respublikasining davlat hokimiyati organlarida va
                          boshqarmalarida ish yuritish bo‘yicha me’yoriy”
                          hujjatlarni tasdiqlash va ijro nazoratini tashkil
                          qilish to‘g‘risida”gi qarorlari, vazirlikning 2015-yil
                          18-fevraldagi 58-son “Vazirlik apparatida ish yuritish
                          va hujjatlar ijrosi nazoratini tashkil qilish bo‘yicha
                          yo‘riqnomani tasdiqlash to‘g‘risida’gi buyrug‘iga amal
                          qilgan holda hujjatlarni ijro intizomi bo‘yicha bu
                          boradagi ishlar sifatini nazoratini tashkil etish;
                        </li>
                        <li>
                          -O‘zbekiston Respublikasi Oliy Majlisi, President
                          Devoni, Vazirlar Mahkamasi va boshqa vazirlik, idora,
                          tashkilotlardan kelib tushgan hujjatlarni to‘g‘ri
                          ro‘yxatga olish, o‘z vaqtida qayd etilishi va
                          ijrochilarga topshirilishini tashkil etish;
                        </li>
                        <li>
                          -Universitetdan chiquvchi hujjatlarning to‘g‘ri
                          rasmiylashtirilishini ta’minlash;
                        </li>
                        <li>
                          -Kiruvchi hujjatlarni (JFC-JOB FLOW CONTROL)
                          avtomatlashtirilgan dastur orqali ijrochilarga zudlik
                          bilan yetkazish;
                        </li>
                        <li>
                          -Boshqaruv faoliyatini hujjatlashtirish, xatlarni
                          jo'natish va ichki hujjatlarni tuzish,
                          rasmiylashtirish ishlarini amalga oshiradi;
                        </li>
                        <li>
                          -Hujjatlarni ijro etilishi ustidan nazoratini tashkil
                          etish;
                        </li>
                        <li>
                          -Rektor ko‘rsatmasiga muvofiq hujjatlarni o‘z vaqtida
                          ijro etish uchun mas’ullarga yetkazish;
                        </li>
                        <li>
                          -Rektor (prorektor) imzosi bilan yuboriladigan
                          hujjatlar qayd etilib, to'g'ri
                          rasmiylashtirilganligini tekshirish;
                        </li>
                        <li>-Universitet blanklarini hisobga olib borish;</li>
                        <li>
                          -Ish yuritish va hujjatlar bilan ishlashda o‘rnatilgan
                          tartiblarni takomillashtirish borasida bo‘linmalar
                          bilan hamkorlikda ish olib borish va tegishli
                          chora-tadbirlarni ishlab chiqish;
                        </li>
                        <li>
                          -Devonxona va arxiv bo‘limi xodimlari bilan birgalikda
                          universitet nomenklaturasini Qarshi shahar davlat
                          Arxivi bilan kelishilgan holda tuzish, rektor bilan
                          kelishilgan holda imzolash va ish yuritish uchun
                          bo‘limlarga tadbiq etish;
                        </li>
                        <li>
                          -Ish jarayonida o‘z malaka va tajribasini oshirib
                          borish hamda ish faoliyatida yangi yo‘nalishlarni
                          joriy etishni ta’minlash;
                        </li>
                        <li>
                          -Devonxona xizmatiga oid bajarilgan barcha ishlar
                          yuzasidan universitet rektoriga axborot berib turish;
                        </li>
                        <li>
                          -Devonxona bo‘limiga jismoniy va yuridik shaxslar
                          tomonidan kelib tushgan yozma murojaatlarini ro‘yxatga
                          olish, rahbariyatga zudlik bilan yetkazish va ularni
                          vazirlik rahbariyati tomonidan qabul qilinishi va
                          tegishli javoblar yo‘llanishini qonunda ko‘rsatilgan
                          moddalar asosida bajarish;
                        </li>
                        <li>
                          -Bo‘limga tegishli ishchilarining malakasini oshirish
                          choralarini ko‘rish;
                        </li>
                        <li>
                          -Ijro etilgan hujjatlarni yig‘ma-jildlarga tikib
                          qo‘yish;
                        </li>
                        <li>
                          -Hujjatlarni belgilangan muddatda idoraviy arxivga
                          topshirishga tayyorlaydi va topshirish;
                        </li>
                      </ul>
                    </>
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
