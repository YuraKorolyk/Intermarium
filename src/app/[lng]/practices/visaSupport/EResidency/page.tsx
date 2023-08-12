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
            <TextWithLine topText="E-residency та відкриття компанії" topColor="dark">
              <span className={`${classes.bottomText} bottomTextWithLine`}>в Естонії</span>
            </TextWithLine>
          </div>
          <div className="MLblock">
            <div className={classes.text}>
              <p>
                Естонія - <span className="highlightDark">ідеальна податкова та правова юрисдикція</span> для тих, хто бажає <span className="highlightDark">вести бізнес на території ЄС</span> та
                <span className="highlightDark">масштабувати вже існуючий бізнес на міжнародний рівень</span>.
              </p>
              <p>
                <span className="highlightDark">Наявність естонської компанії</span> дозволить вам вести бізнес, укладати договори та здійснювати економічну
                діяльність з європейськими клієнтами та партнерами навіть <span className="highlightDark">без необхідності фізичної присутності на території ЄС</span>.
              </p>
              <p>
                <span className="highlightDark">Естонія займає верхні місця в рейтингах легкості ведення бізнесу</span>, та <span className="highlightDark">будь які дії можна здійснювати
                онлайн</span>, лише за допомогою електронного підпису, якій людина отримує при видачі карти електронного резидента Естонії.
              </p>
              <p>
                Окрім того, в Естонії для іноземців зі статусом електронного резидента <span className="highlightDark">надзвичайно вигідна система оподаткування</span>, й оподатковується виключно виведений капітал.
              </p>
            </div>
            <div className={classes.support}>
              <div className={classes.supportTitle}>Intermarium Law Firm надає супровід з наступних питань:</div>
                <ul>
                  <CustomLi>отримання статусу електронного резидента</CustomLi>
                  <CustomLi>реєстрація компанії на території Естонії в дистанційному форматі</CustomLi>
                  <CustomLi>реєстрація компанії на території Естонії в дистанційному форматі</CustomLi>
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