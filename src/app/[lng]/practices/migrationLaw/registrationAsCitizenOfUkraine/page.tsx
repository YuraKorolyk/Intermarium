import React from 'react';
import classes from './page.module.scss'
import Container from "@/components/Layouts/Container/Container";
import TextWithLine from "@/components/TextWithLine/TextWithLine";
import HeaderBackground from "@/components/HeaderBackground/HeaderBackground";
import Button from "@/components/Button/Button";
import CustomLi from "@/components/CustomLi/CustomLi";


const Page = () => {
  return (
    <>
      <HeaderBackground background="1"/>
      <div className={classes.intro}>
        <Container className={classes.wrapper}>
          <div className={classes.title}>
            <TextWithLine topText="Оформлення та видача довідки про реєстрацію особи" topColor="dark">
              <span className={`${classes.bottomText} bottomTextWithLine`}>громадянином України</span>
            </TextWithLine>
          </div>
          <div className={classes.text}>
            <div className="MLblock">


              <p>
                <span className="highlightDark">Довідка про реєстрацію особи громадянином України</span>є документом, що підтверджує факт реєстрації особи громадянином України та подається особою для одержання документів, що підтверджують громадянство України.
              </p>
              <p>
                Для цього особа, яка бажає отримати довідку повинна <span className="highlightDark">звернутися в підрозділ ДМС</span>, за місцем проживання.
              </p>
              <p>
                <span className="highlightDark">Найголовніше правильно скласти і подати письмову заяву</span> з проханням про те, щоб надали цю державну послугу.
              </p>
            </div>
          </div>
        </Container>
      </div>
      <div className={classes.list}>
        <Container className={classes.wrapper}>
          <div className={classes.howToGet}>
            <div className={classes.title}>
              <TextWithLine topText="Як отримати" topColor="light">
                <span className={`${classes.bottomText} bottomTextWithLine`}>довідку</span>
              </TextWithLine>
            </div>
            <div className="MLblock">
              <div className={classes.text}>
                Потрібно <span className="highlightLight">особисто звернутися до територіального органу міграційної служби</span>, але якщо особа має поважні причини, за якими вона не може особисто отримати довідку, цей документ видається законному представнику (батьки, опікуни).
              </div>
            </div>
          </div>
          <div className={classes.docs}>
            <div className={classes.title}>
              <TextWithLine topText="Документи, які необхідні для" topColor="light">
                <span className={`${classes.bottomText} bottomTextWithLine`}>отримання послуги</span>
              </TextWithLine>
            </div>
            <ul>
              <CustomLi>Для одержання адміністративної послуги з видачі довідки про реєстрацію особи громадянином України одержувач подає заяву, в якій зазначаються відомості про заявника: прізвище, ім&apos;я, по батькові, місце проживання, телефон.</CustomLi>
              <CustomLi>2 фотокартки розміром 35 х 45мм.</CustomLi>
              <CustomLi>Платіжний документ (квитанція) з відміткою банку, відділення поштового зв’язку або коду проведеної операції про оплату вартості цієї послуги.</CustomLi>
              <CustomLi>Паспортний документ або документ, що його замінює та посвідчує особу заявника.</CustomLi>
              <CustomLi>Документ про проживання заявника на території України або про його постійне проживання за кордоном (довідка про реєстрацію місця проживання).</CustomLi>
            </ul>


            <div className={classes.term}>
              У разі потреби подається засвідчений переклад тексту документа українською мовою
            </div>
            <div className={classes.after}>
              Термін надання послуги – після того, як було прийнято рішення про набуття особою громадянства, в десятиденний термін йому офіційно видається довідка.
            </div>
          </div>
        </Container>
      </div>
      <div className={classes.application}>
        <Container className={classes.wrapper}>
          <div className={classes.text}>
            Звернувшись до <span className="highlightDark">Intermarium law firm</span> за допомогою
            для відновлення чи обміну посвідки на проживання
            в Україні, Ви гарантовано швидко зможете отримати
            нову посвідку. Ціна при цьому виявиться найвигідніша,
            а професіоналізм і спектр послуг - максимальний.
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
