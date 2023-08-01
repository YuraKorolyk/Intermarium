import React from 'react';
import HeaderBackground from "@/components/HeaderBackground/HeaderBackground";
import Container from "@/components/Layouts/Container/Container";
import classes from "./page.module.scss";
import TextWithLine from "@/components/TextWithLine/TextWithLine";
import Button from "@/components/Button/Button";
import LinkWithDropdown from "@/components/LinkWithDropdown/LinkWithDropdown";

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
          <div className={classes.text}>
            Молдова - найбільш доступний варіант транзиту для громадян азіатських та африканських країн, які хочуть виїхати з України або заїхати на територію України.
          </div>
          <Button text="Залишити заявку"/>
        </Container>
      </div>
      <div className={classes.questions}>
        <Container className={classes.wrapper}>
          <div className={classes.title}>
            <TextWithLine topText="Наша компанія надає візову підтримку з" topColor="light">
              <span className={`${classes.bottomText} bottomTextWithLine`}>наступних питань</span>
            </TextWithLine>
          </div>
          <div className={classes.link}>

          </div>
        </Container>
      </div>
      <div className={classes.help}>
        <Container className={classes.wrapper}>
          <div className={classes.title}>
            Візова підтримка включає повний цикл допомоги, а саме:
          </div>
          <div className={classes.list}>
            <ul>
              <li>отримання дат бронювань в консульстві</li>
              <li>отримання запрошень</li>
              <li>підготовку усієї документації для подачі на візу</li>
              <li>особистий супровід при подачі документів </li>
              <li>освітніх послугах</li>
              <li>подальша відправка вашого паспорту з проставленою візою за вашою адресою</li>
            </ul>

            <Button text="Залишити заявку"/>
          </div>
        </Container>
      </div>
    </>
  );
};

export default Page;