import React from 'react';
import HeaderBackground from "@/components/HeaderBackground/HeaderBackground";
import Container from "@/components/Layouts/Container/Container";
import classes from "./page.module.scss";
import TextWithLine from "@/components/TextWithLine/TextWithLine";
import Button from "@/components/Button/Button";
import CustomLi from "@/components/CustomLi/CustomLi";

const Page = () => {
  return (
    <>
      <HeaderBackground background="3"/>
      <div className={classes.intro}>
        <Container className={classes.wrapper}>
          <div className={classes.title}>
            <TextWithLine topText="Допомога в отриманні транзитної чи туристичної візи в" topColor="dark">
              <span className={`${classes.bottomText} bottomTextWithLine`}>Польщу, Румунію, Угорщину</span>
            </TextWithLine>
          </div>
          <div className="MLblock">
            <div className={classes.text}>
              <span className="highlightDark">Іноземці, що проживають на території України</span>, можуть мати потребу або бажання відвідати сусідні країни <span className="highlightDark">з метою транзиту або з туристичною метою</span>, або вже мають наявне <span className="highlightDark">бізнес-запрошення</span>.
            </div>
            <div className={classes.list}>
              <span className={classes.title}>Ми можемо надати послуги повного циклу візової підтримки, що включає:</span>
              <ul>
                <CustomLi>попередню консультацію та зʼясування задачі, що стоїть перед вами та типу візи, який найкращим чином буде відповідати поставленій меті</CustomLi>
                <CustomLi>бронювання дати прийому в консульстві, підготовку візової анкети, бронювань транспорту та житла, отримання страхового полісу та підготовку інших супровідних документів для прийому в консула</CustomLi>
                <CustomLi>консультацію щодо можливих питань, які можуть задавати в консульстві</CustomLi>
                <CustomLi>підготовку апеляції у випадку негативного рішення консульства</CustomLi>
              </ul>
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