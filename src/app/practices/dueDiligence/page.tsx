import React from 'react';
import classes from './page.module.scss'
import Container from "@/components/Layouts/Container/Container";
import HeaderBackground from "@/components/HeaderBackground/HeaderBackground";
import TextWithLine from "@/components/TextWithLine/TextWithLine";
import Button from "@/components/Button/Button";

const Page = () => {
  return (
    <>
      <HeaderBackground background="4"/>
      <div className={classes.intro}>
        <Container className={classes.wrapper}>
          <div className={classes.title}>
            <TextWithLine topText="Юридичний" topColor="dark">
              <span className={`${classes.bottomText} bottomTextWithLine`}>дью-ділідженс</span>
            </TextWithLine>
          </div>
          <div className={classes.text}>
            <p>
              <span className="highlightDark">Юридичний дью-ділідженс</span> - процес збору і аналізу різноманітної
              юридичної інформації про Об&apos;єкт: статусу
              реєстрації та права власності на основні активи, умови ключових договорів, судові процеси та обтяження,
              відповідність вимогам чинного законодавства тощо.
            </p>
            <p>
              Належна підготовка до Due Diligence <span
              className="highlightDark">дозволить суттєво скоротити час</span> і необхідний обсяг ресурсів для його
              проходження та <span className="highlightDark">значно підвищує шанси на успішне завершення угоди</span>.
            </p>
          </div>
        </Container>
      </div>
      <div className={classes.check}>
        <Container className={classes.wrapper}>
          <div className={classes.mainTitle}>
            Перевірка Об&apos;єктів нерухомості перед купівлею:
          </div>
          <div className={classes.blocks}>
            <div>
              <div className={classes.title}>
                <TextWithLine topText="первинний" topColor="light">
                  <span className={`${classes.bottomText} bottomTextWithLine`}>ринок</span>
                </TextWithLine>
              </div>
              <div className={classes.text}>
                На первинному ринку квартири часто продають ще до завершення будівництва, що передбачає низку ризиків для покупця, тому наші юристи роблять юридичну перевірку кожного Об&apos;єкта, перевірка полягає в наступному:
              </div>
              <ul>
                <li>перевірка забудовника і об&apos;єкта будівництва</li>
                <li>аналіз реєстраційних документів забудовника і пов&apos;язаних компаній</li>
                <li>наявність виконавчих проваджень та будь-яких записів у реєстрі обтяжень</li>
                <li>наявність судових справ, наприклад, із кредиторами або комунальними службами</li>
                <li>наявність арештів та обтяжень</li>
                <li>аналіз законності будівництва</li>
                <li>перевірка дозвільних документів на будівництво (наявність ліцензії, інших необхідних документів)
                </li>
                <li>аналіз схеми покупки, запропонованої забудовником на предмет відповідності законодавству</li>
                <li>вивчення договорів забудовника (інвестиційний договір; попередній договір, договір купівлі-продажу
                  майнових прав
                </li>
              </ul>
            </div>
            <div>
              <div className={classes.title}>
                <TextWithLine topText="вторинний" topColor="light">
                  <span className={`${classes.bottomText} bottomTextWithLine`}>ринок</span>
                </TextWithLine>
              </div>
              <ul>
                <li>перевірка законності права власності власника (договір купівлі-продажу, дарча, спадок, ін.)</li>
                <li>перевірка на наявність обтяжень, судових або виконавчих проваджень щодо об'єкта нерухомості,
                  перевірка
                  арештів, іпотек
                </li>
                <li>перевірка власника</li>
                <li>перевірка кількості зареєстрованих осіб</li>
                <li>аналіз на предмет можливості вимог третіх осіб</li>
                <li>супровід укладення угод та узгодження умов договору купівлі-продажу</li>
              </ul>
            </div>

            <div className={classes.checkList}>
              <div className={classes.title}>
                <TextWithLine topText="Перевірка Об'єкту" topColor="light">
                  <span className={`${classes.bottomText} bottomTextWithLine`}>інвестування</span>
                </TextWithLine>
              </div>
              <ul>
                <li>повна юридична перевірка Об&apos;єкту, його історію та формування експертного висновку щодо ризиків
                  купівлі
                </li>
                <li>аудит договір, ліцензій, дозвільних документів</li>
                <li>перевірка власника Об&apos;єкту в тому числі і попередніх власників, аналіз результатів угод з
                  резидентами
                  і нерезидентами
                </li>
                <li>огляд установчих документів, їхнього юридичного статусу</li>
                <li>огляд документів про корпоративне управління, рішень колегіальних органів управління та основних
                  довіреностей
                </li>
                <li>аналіз угод з акціями (частками) товариства, відомості про акціонерів,
                  їх майнові та немайнові права
                </li>
                <li>аналіз правомірності діяльності Товариства – наявність необхідних ліцензій, дозволів, сертифікатів
                </li>
                <li>аналіз трудових відносин</li>
              </ul>
            </div>
          </div>

        </Container>
      </div>
      <div className={classes.application}>
        <Container className={classes.wrapper}>
          <div className={classes.text}>Компанія Intermarium проводить юридичну перевірку як Об&apos;єктів нерухомості для
            купівлі так і Об&apos;єктів інвестування.
          </div>
          <div className={classes.button}>
            <Button text="залишити заявку"/>
          </div>
        </Container>
      </div>
    </>
  );
};

export default Page;