import React from 'react';
import classes from './page.module.scss'
import Container from "@/components/Layouts/Container/Container";
import TextWithLine from "@/components/TextWithLine/TextWithLine";
import HeaderBackground from "@/components/HeaderBackground/HeaderBackground";
import LinkWithDropdown from "@/components/LinkWithDropdown/LinkWithDropdown";
import One from "../../../../../../public/assets/icons/Numbers/One";
import Five from "../../../../../../public/assets/icons/Numbers/Five";
import Four from "../../../../../../public/assets/icons/Numbers/Four";
import Three from "../../../../../../public/assets/icons/Numbers/Three";
import Two from "../../../../../../public/assets/icons/Numbers/Two";
import Button from "@/components/Button/Button";

const Page = () => {
  return (
    <>
      <HeaderBackground background="1"/>
      <div className={classes.intro}>
        <Container className={classes.wrapper}>
          <div className={classes.title}>
            <TextWithLine topText="Зняття заборони в’їзду" topColor="dark">
              <span className={`${classes.bottomText} bottomTextWithLine`}>в Україну</span>
            </TextWithLine>
          </div>
          <div className={classes.list}>
            <LinkWithDropdown
              dark={true}
              dropdown="dropdown"
              title="Загальні умови перетину кордону іноземцями та особами без громадянства."
              description={
                <>
                  <p>
                    Важливо розуміти, для того щоб отримати дозвіл на працевлаштування роботодавець повинен подати
                    відповідні документи до центру зайнятості вказавши у заяві строк на який повинен видаватись дозвіл
                    та
                    посаду.
                  </p>
                  <p className={classes.bold}>
                    Праця іноземців та осіб без громадянства може застосовуватися на різних посадах в одного або
                    декількох (двох і більше) роботодавців, за умови отримання дозволу на застосування праці іноземців
                    та осіб без громадянства кожним роботодавцем, у випадку зміни місця роботи чи переведення на іншу
                    посаду потрібно отримувати інший дозвіл на працевлаштування, але лише у випадку зміни роботодавця,
                    Праця іноземців та осіб без громадянства може застосовуватися без дозволу на посадах за сумісництвом
                    в одного роботодавця, якщо строк дії трудового договору на посаді за сумісництвом не перевищує
                    строку дії дозволу за основним місцем роботи.
                  </p>
                </>
              }
            >
              <One fill="#286E8D"/>
            </LinkWithDropdown>
            <LinkWithDropdown
              dark={true}
              dropdown="dropdown"
              title="Підстави для відмови у перетині кордоні іноземцям та особам без громадянства."
              description={
                <>
                  <p>
                    Важливо розуміти, для того щоб отримати дозвіл на працевлаштування роботодавець повинен подати
                    відповідні документи до центру зайнятості вказавши у заяві строк на який повинен видаватись дозвіл
                    та
                    посаду.
                  </p>
                  <p className={classes.bold}>
                    Праця іноземців та осіб без громадянства може застосовуватися на різних посадах в одного або
                    декількох (двох і більше) роботодавців, за умови отримання дозволу на застосування праці іноземців
                    та осіб без громадянства кожним роботодавцем, у випадку зміни місця роботи чи переведення на іншу
                    посаду потрібно отримувати інший дозвіл на працевлаштування, але лише у випадку зміни роботодавця,
                    Праця іноземців та осіб без громадянства може застосовуватися без дозволу на посадах за
                    сумісництвом в одного роботодавця, якщо строк дії трудового договору на посаді за сумісництвом не
                    перевищує строку дії дозволу за основним місцем роботи.
                  </p>
                </>
              }
            >
              <Two fill="#286E8D"/>
            </LinkWithDropdown>
            <LinkWithDropdown
              dark={true}
              dropdown="dropdown"
              title="Хто ухвалює рішення про заборону на в'їзд?"
              description={
                <>
                  <p>
                    Важливо розуміти, для того щоб отримати дозвіл на працевлаштування роботодавець повинен подати
                    відповідні документи до центру зайнятості вказавши у заяві строк на який повинен видаватись дозвіл
                    та
                    посаду.
                  </p>
                  <p className={classes.bold}>
                    Праця іноземців та осіб без громадянства може застосовуватися на різних посадах в одного або
                    декількох (двох і більше) роботодавців, за умови отримання дозволу на застосування праці іноземців
                    та осіб без громадянства кожним роботодавцем, у випадку зміни місця роботи чи переведення на іншу
                    посаду потрібно отримувати інший дозвіл на працевлаштування, але лише у випадку зміни роботодавця,
                    Праця іноземців та осіб без громадянства може застосовуватися без дозволу на посадах за
                    сумісництвом в одного роботодавця, якщо строк дії трудового договору на посаді за сумісництвом не
                    перевищує строку дії дозволу за основним місцем роботи.
                  </p>
                </>
              }
            >
              <Three fill="#286E8D"/>
            </LinkWithDropdown>
            <LinkWithDropdown
              dark={true}
              dropdown="dropdown"
              title="Підстави для відмови у перетині кордоні іноземцям та особам без громадянства."
              description={
                <>
                  <p>
                    Важливо розуміти, для того щоб отримати дозвіл на працевлаштування роботодавець повинен подати
                    відповідні документи до центру зайнятості вказавши у заяві строк на який повинен видаватись дозвіл
                    та
                    посаду.
                  </p>
                  <p className={classes.bold}>
                    Праця іноземців та осіб без громадянства може застосовуватися на різних посадах в одного або
                    декількох (двох і більше) роботодавців, за умови отримання дозволу на застосування праці іноземців
                    та осіб без громадянства кожним роботодавцем, у випадку зміни місця роботи чи переведення на іншу
                    посаду потрібно отримувати інший дозвіл на працевлаштування, але лише у випадку зміни роботодавця,
                    Праця іноземців та осіб без громадянства може застосовуватися без дозволу на посадах за
                    сумісництвом в одного роботодавця, якщо строк дії трудового договору на посаді за сумісництвом не
                    перевищує строку дії дозволу за основним місцем роботи.
                  </p>
                </>
              }
            >
              <Four fill="#286E8D"/>
            </LinkWithDropdown>
          </div>
          <LinkWithDropdown
            dark={true}
            dropdown="dropdown"
            title="Що робити, якщо винесли рішення про заборону на в'їзд в Україну?"
            description={
              <>
                <p>
                  Важливо розуміти, для того щоб отримати дозвіл на працевлаштування роботодавець повинен подати
                  відповідні документи до центру зайнятості вказавши у заяві строк на який повинен видаватись дозвіл
                  та
                  посаду.
                </p>
                <p className={classes.bold}>
                  Праця іноземців та осіб без громадянства може застосовуватися на різних посадах в одного або
                  декількох (двох і більше) роботодавців, за умови отримання дозволу на застосування праці іноземців
                  та осіб без громадянства кожним роботодавцем, у випадку зміни місця роботи чи переведення на іншу
                  посаду потрібно отримувати інший дозвіл на працевлаштування, але лише у випадку зміни роботодавця,
                  Праця іноземців та осіб без громадянства може застосовуватися без дозволу на посадах за
                  сумісництвом в одного роботодавця, якщо строк дії трудового договору на посаді за сумісництвом не
                  перевищує строку дії дозволу за основним місцем роботи.
                </p>
              </>
            }
          >
            <Five fill="#286E8D"/>
          </LinkWithDropdown>
        </Container>
      </div>
      <div className={classes.detail}>
        <Container className={classes.wrapper}>
          <div className={classes.title}>
            <TextWithLine topText="Детальна інформація щодо" topColor="light">
              <span className={`${classes.bottomText} bottomTextWithLine`}>Послуги</span>
            </TextWithLine>
          </div>
          <LinkWithDropdown
            dropdown="dropdown"
            title="Куди можна оскаржити заборону на в’їзд?"
            //             description="<strong>Важливо</strong> розуміти, для того щоб отримати дозвіл на працевлаштування роботодавець повинен подати відповідні документи до центру зайнятості вказавши у заяві строк на який повинен видаватись дозвіл та посаду.
            // Праця іноземців та осіб без громадянства може застосовуватися на різних посадах в одного або декількох (двох і більше) роботодавців, за умови отримання дозволу на застосування праці іноземців та осіб без громадянства кожним роботодавцем, у випадку зміни місця роботи чи переведення на іншу посаду потрібно отримувати інший дозвіл на працевлаштування, але лише у випадку зміни роботодавця,
            // Праця іноземців та осіб без громадянства може застосовуватися без дозволу на посадах за сумісництвом в одного роботодавця, якщо строк дії трудового договору на посаді за сумісництвом не перевищує строку дії дозволу за основним місцем роботи."
            description={
              <>
                <p>
                  Важливо розуміти, для того щоб отримати дозвіл на працевлаштування роботодавець повинен подати
                  відповідні документи до центру зайнятості вказавши у заяві строк на який повинен видаватись дозвіл та
                  посаду.
                </p>
                <p className={classes.bold}>
                  Праця іноземців та осіб без громадянства може застосовуватися на різних посадах в одного або декількох
                  (двох і більше) роботодавців, за умови отримання дозволу на застосування праці іноземців та осіб без
                  громадянства кожним роботодавцем, у випадку зміни місця роботи чи переведення на іншу посаду потрібно
                  отримувати інший дозвіл на працевлаштування, але лише у випадку зміни роботодавця,
                  Праця іноземців та осіб без громадянства може застосовуватися без дозволу на посадах за сумісництвом в
                  одного роботодавця, якщо строк дії трудового договору на посаді за сумісництвом не перевищує строку
                  дії дозволу за основним місцем роботи.
                </p>
              </>
            }
          >
            <One/>
          </LinkWithDropdown>
          <LinkWithDropdown
            dropdown="dropdown"
            title="Строк дії дозволу на працевлаштування."
            description={
              <>
                <p>
                  Дозвіл на працевлаштування видається на термін дії трудового договору але не більше 1 року.
                </p>
                <p className={classes.bold}>
                  Виняток: для іноземних високооплачуваних професіоналів, засновників та/або учасників, та/або
                  бенефіціарів (контролери) юридичної особи, створеної в Україні; випускники університетів, що входять
                  до першої сотні у світових рейтингах університетів, відповідно до переліку, визначеного Кабінетом
                  Міністрів України; іноземні працівники творчих професій; іноземні ІТ-професіонали дозвіл на
                  працевлаштування може видаватися на строк до 3 років.
                </p>
              </>
            }
          >
            <Two/>
          </LinkWithDropdown>
          <LinkWithDropdown
            dropdown="dropdown"
            title="Список необхідних документів."
            description={
              <>
                <p>
                  <ul className={classes.light}>
                    <li>Заява заповнена та підписана роботодовцем.</li>
                    <li>Нотаріально завірена та перекладена копія паспорта іноземця.</li>
                    <li>1 фотокартка розміром 3.5х4.5.</li>
                    <li>Проект трудового договору завірена роботодавцем.</li>
                  </ul>
                </p>
                <p>
                  Документи подаються через Центр надання адміністративних послуг роботодавцем або уповноваженою на це
                  особою по довіреності.
                </p>
                <p className={classes.bold}>
                  Всі документи видані за кордоном повинні бути апостильовані та перекладені на українську мову!!!
                </p>
              </>
            }
          >
            <Three/>
          </LinkWithDropdown>
          <LinkWithDropdown
            dropdown="dropdown"
            title="Вартість дозволу на застосування праці іноземців."
            description={
              <>
                <p>
                  <ul className={classes.light}>
                    <li>на термін менше 6 місяців - складає 3 прожиткових мінімуми (7 524 грн.);</li>
                    <li>на термін від 6 місяців і до одного року - становить 5 прожиткові мінімуми (12 540 грн.);</li>
                    <li>на термін від одного року до 3 років - становить 10 прожиткових мінімумів (25 280 грн.);</li>
                  </ul>
                </p>
                <p>
                  Термін розгляду документів до 7 робочих днів, а для продовження дозволу на працю 3 робочих дні!!!
                </p>
              </>
            }
          >
            <Four/>
          </LinkWithDropdown>
          <LinkWithDropdown
            dropdown="dropdown"
            title="Відповідальність за порушення законодавства України у сфері працевлаштування іноземців та осіб без громадянства."
            description={
              <>
                <p>
                  Частиною п’ятою статті 53 Закону України "Про зайнятість населення" передбачено накладення штрафів на
                  роботодавця у випадку порушення встановленого законом порядку працевлаштування іноземців та осіб без
                  громадянства.
                </p>
                <p>
                  Так, у разі застосування роботодавцем праці іноземців або осіб без громадянства:
                </p>
                <p>
                  <ul className={classes.light}>
                    <li>на умовах трудового або іншого договору без дозволу, стягується штраф за кожну особу у
                      двадцятикратному розмірі мінімальної заробітної плати, встановленої на момент виявлення порушення;
                      (130 000 гривень)
                    </li>
                    <li>на інших умовах, ніж ті, що передбачені дозволом, або іншим роботодавцем, стягується штраф за
                      кожну особу у десятикратному розмірі мінімальної заробітної плати, встановленої на момент
                      виявлення порушення. (65 000 гривень).
                    </li>
                    <li>на термін від одного року до 3 років - становить 10 прожиткових мінімумів (25 280 грн.);</li>
                  </ul>
                </p>
                <p className={classes.light}>
                  А також штраф накладається на посадових осіб підприємства (директора) в розмірі від 8 500 гривень до
                  17 000 гривень.
                </p>
                <p>
                  Як бачимо штрафи за порушення законодавства у сфері працевлаштування доволі великі, тому я рекомендую
                  звернутися за кваліфікованою юридичною допомогою, що допоможе вам зекономити час та уникнути в
                  майбутньому значних витрат.
                </p>
              </>
            }
          >
            <Five/>
          </LinkWithDropdown>
        </Container>
      </div>
      <div className={classes.application}>
        <Container className={classes.wrapper}>
          <div className="MLblock">
            <div className={classes.text}>
              <span className="highlightDark">Intermarium Law Firm</span> надає повний цикл супроводу іноземців, що
              бажають отримати дозвіл на працевлаштування в Україні. Ми допоможемо зекономити час та уникнути в
              майбутньому значних витрат.
            </div>
          </div>
          <div className={classes.button}>
            <Button text="Залишити заявку"/>
          </div>
        </Container>
      </div>
    </>
  );
};

export default Page;