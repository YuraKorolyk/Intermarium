import React from 'react';
import classes from './page.module.scss'
import Container from "@/components/Layouts/Container/Container";
import HeaderBackground from "@/components/HeaderBackground/HeaderBackground";
import TextWithLine from "@/components/TextWithLine/TextWithLine";
import Button from "@/components/Button/Button";
import CustomLi from "@/components/CustomLi/CustomLi";

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
                <CustomLi>перевірка забудовника і об&apos;єкта будівництва</CustomLi>
                <CustomLi>аналіз реєстраційних документів забудовника і пов&apos;язаних компаній</CustomLi>
                <CustomLi>наявність виконавчих проваджень та будь-яких записів у реєстрі обтяжень</CustomLi>
                <CustomLi>наявність судових справ, наприклад, із кредиторами або комунальними службами</CustomLi>
                <CustomLi>наявність арештів та обтяжень</CustomLi>
                <CustomLi>аналіз законності будівництва</CustomLi>
                <CustomLi>перевірка дозвільних документів на будівництво (наявність ліцензії, інших необхідних документів)
                </CustomLi>
                <CustomLi>аналіз схеми покупки, запропонованої забудовником на предмет відповідності законодавству</CustomLi>
                <CustomLi>вивчення договорів забудовника (інвестиційний договір; попередній договір, договір купівлі-продажу
                  майнових прав
                </CustomLi>
              </ul>
            </div>
            <div>
              <div className={classes.title}>
                <TextWithLine topText="вторинний" topColor="light">
                  <span className={`${classes.bottomText} bottomTextWithLine`}>ринок</span>
                </TextWithLine>
              </div>
              <ul>
                <CustomLi>перевірка законності права власності власника (договір купівлі-продажу, дарча, спадок, ін.)</CustomLi>
                <CustomLi>перевірка на наявність обтяжень, судових або виконавчих проваджень щодо об&apos;єкта нерухомості,
                  перевірка
                  арештів, іпотек
                </CustomLi>
                <CustomLi>перевірка власника</CustomLi>
                <CustomLi>перевірка кількості зареєстрованих осіб</CustomLi>
                <CustomLi>аналіз на предмет можливості вимог третіх осіб</CustomLi>
                <CustomLi>супровід укладення угод та узгодження умов договору купівлі-продажу</CustomLi>
              </ul>
            </div>

            <div className={classes.checkList}>
              <div className={classes.title}>
                <TextWithLine topText="Перевірка Об&apos;єкту" topColor="light">
                  <span className={`${classes.bottomText} bottomTextWithLine`}>інвестування</span>
                </TextWithLine>
              </div>
              <ul>
                <CustomLi>повна юридична перевірка Об&apos;єкту, його історію та формування експертного висновку щодо ризиків
                  купівлі
                </CustomLi>
                <CustomLi>аудит договір, ліцензій, дозвільних документів</CustomLi>
                <CustomLi>перевірка власника Об&apos;єкту в тому числі і попередніх власників, аналіз результатів угод з
                  резидентами
                  і нерезидентами
                </CustomLi>
                <CustomLi>огляд установчих документів, їхнього юридичного статусу</CustomLi>
                <CustomLi>огляд документів про корпоративне управління, рішень колегіальних органів управління та основних
                  довіреностей
                </CustomLi>
                <CustomLi>аналіз угод з акціями (частками) товариства, відомості про акціонерів,
                  їх майнові та немайнові права
                </CustomLi>
                <CustomLi>аналіз правомірності діяльності Товариства – наявність необхідних ліцензій, дозволів, сертифікатів
                </CustomLi>
                <CustomLi>аналіз трудових відносин</CustomLi>
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