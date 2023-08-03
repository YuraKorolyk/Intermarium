import React from 'react';
import classes from './page.module.scss';
import Container from "@/components/Layouts/Container/Container";
import CustomLi from "@/components/CustomLi/CustomLi";

const Page = () => {
  return (
    <>
      <div className={classes.intro}>
        <Container className={classes.wrapper}>
          <div className={classes.title}>
            Правила та повідомлення про приватність
          </div>
          <div className={classes.lastUpdate}>
            Останнє оновлення 01.09.2023 року
          </div>
        </Container>
      </div>
      <div className={classes.contents}>
        <Container className={classes.wrapper}>
          <div className={classes.title}>
            Зміст
          </div>
          <ul>
            <CustomLi>Умови використання</CustomLi>
            <CustomLi>Користування веб-сайтом</CustomLi>
            <CustomLi>Права інтелектуальної власності</CustomLi>
            <CustomLi>Зміст даних та мета, для якої вона збирається</CustomLi>
            <CustomLi>Права осіб щодо яких збираються персональні дані</CustomLi>
            <CustomLi>Оновлення цього повідомлення</CustomLi>
          </ul>
        </Container>
      </div>
    </>
  );
};

export default Page;