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
            <TextWithLine topText="Продовження терміну перебування" topColor="dark">
              <span className={`${classes.bottomText} bottomTextWithLine`}>в Україні</span>
            </TextWithLine>
          </div>
          <div className={classes.text}>
            <div className="MLblock">
              <p>
                <span className="highlightDark">Строк перебування іноземців</span>, які є громадянами держав з візовим
                порядком в’їзду, а також осіб без громадянства <span className="highlightDark">обмежено строком дії візи</span>.
                Тобто, іноземець чи особа без громадянства <span className="highlightDark">може тимчасово перебувати на території України протягом наданого візою дозволеного строку перебування</span>,
                але не більше ніж до останнього дня строку дії візи.
              </p>
              <p>
                Громадяни держав з безвізовим порядком в’їзду можуть тимчасово перебувати на території України <span
                className="highlightDark">не більше ніж 90 днів протягом 180 днів</span>, якщо інший строк не визначено
                міжнародними договорами України.
              </p>
              <p>
                <span className="highlightDark">Продовження терміну перебування в Україні</span> – законний спосіб
                продовжити термін перебування в країні після закінчення терміну візи
                або після закінчення 90-денного терміну перебування (для громадян країн з безвізовим режимом).
              </p>


            </div>
          </div>
        </Container>
      </div>
      <div className={classes.lists}>
        <Container className={classes.wrapper}>
          <div className={classes.reasons}>
            <div className={classes.title}>
              <TextWithLine topText="Підстави для продовження строку перебування" topColor="light">
                <span className={`${classes.bottomText} bottomTextWithLine`}>в Україні</span>
              </TextWithLine>
            </div>
            <ul>
              <CustomLi color="light">подання заяви про отримання дозволу на імміграцію</CustomLi>
              <CustomLi color="light">подання заяви про набуття громадянства України</CustomLi>
              <CustomLi color="light">наявності підстав, які не дають змоги виїхати з України</CustomLi>
              <CustomLi color="light">інші випадки, коли виникає необхідність продовження строку перебування (лікування,
                вагітність, догляд за хворим членом родини, оформлення спадщини, виконання службових обов’язків
                іноземним кореспондентом або представником іноземного засобу масової інформації тощо)</CustomLi>
            </ul>
          </div>
          <div className={classes.documents}>
            <div className={classes.title}>
              <TextWithLine topText="Необхідні" topColor="light">
                <span className={`${classes.bottomText} bottomTextWithLine`}>документи</span>
              </TextWithLine>
            </div>
            <ul>
              <CustomLi color="light">заява (формується в електронному вигляді)</CustomLi>
              <CustomLi color="light">паспорт іноземця, а також його нотаріальний переклад паспорт приймаючої
                сторони (для юридичних осіб – паспорт директора; копія-витяг з реєстру юридичних осіб; копія протоколу,
                розпорядження або наказу про призначення відповідальних осіб)</CustomLi>
              <CustomLi color="light">документ, що підтверджує достатнє фінансове забезпечення</CustomLi>
              <CustomLi color="light">документ про право власності на житло, де буде проживати іноземець і паспорт
                власника житла</CustomLi>
              <CustomLi color="light">фотографія іноземного громадянина</CustomLi>
              <CustomLi color="light">квитанція про сплату держ. мита</CustomLi>
            </ul>
          </div>
          <div className={classes.term}>
            <div className={classes.title}>
              <TextWithLine topText="Термін розгляду" topColor="light">
                <span className={`${classes.bottomText} bottomTextWithLine`}>заяв</span>
              </TextWithLine>
            </div>
            <div className={classes.text}>
              <p>
                <span className="highlightLight">Не більше трьох робочих днів.</span> У разі необхідності здійснення
                додаткових перевірок цей строк <span className="highlightLight">може бути продовжено до десяти.</span>
              </p>
              <p>
                <span className="highlightLight">Важливо</span>, що заяви про продовження строку перебування на
                території України подаються іноземцями та особами без громадянства та приймаючою стороною не раніше
                ніж за десять та не пізніше ніж за три робочі дні до закінчення такого строку.
              </p>
            </div>


          </div>

        </Container>
      </div>
      <div className={classes.application}>
        <Container className={classes.wrapper}>
          <div className="MLblock">
            <div className={classes.text}>
              <span className="highlightDark">Intermarium Law Firm</span> надає повний цикл супроводу іноземців, що
              бажають отримати продовження терміну перебування в Україні.
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