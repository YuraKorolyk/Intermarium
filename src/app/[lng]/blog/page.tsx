import React from 'react';
import Container from "@/components/Layouts/Container/Container";
import classes from './page.module.scss';
import TextWithLine from "@/components/TextWithLine/TextWithLine";

const Page = () => {
  return (
    <>
      <div className={classes.intro}>
        <Container className={classes.wrapper}>
          <div className={classes.title}>
            <TextWithLine topText="Наш" topColor="dark">
              <span className={`${classes.bottomText} bottomTextWithLine`}>юридичний блог</span>
            </TextWithLine>
          </div>
          <div className={classes.nav}>
            <div>Всі</div>
            <div>Статті</div>
            <div>зміни законодавства</div>
          </div>
        </Container>
      </div>
    </>
  );
};

export default Page;