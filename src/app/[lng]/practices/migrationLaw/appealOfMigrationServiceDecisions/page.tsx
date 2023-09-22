'use client';
import React, {useState} from 'react';
import classes from './page.module.scss'
import Container from "@/components/Layouts/Container/Container";
import TextWithLine from "@/components/TextWithLine/TextWithLine";
import HeaderBackground from "@/components/HeaderBackground/HeaderBackground";
import Button from "@/components/Button/Button";
import {useTranslation} from "react-i18next";
import {trans} from "@/services";
import FormModal from "@/components/FormModal/FormModal";

const Page = () => {
  const {t} = useTranslation();
  const [isOpened, setIsOpened] = useState(false)
  return (
    <>
      <HeaderBackground background="1"/>
      <div className={classes.intro}>
        <Container className={classes.wrapper}>
          <div className={classes.title}>
            <TextWithLine topText={t('practices.appealOfMigrationServiceDecisions.intro.title.topText')} topColor="dark">
              <span className={`${classes.bottomText} bottomTextWithLine`}>{t('practices.appealOfMigrationServiceDecisions.intro.title.bottomText')}</span>
            </TextWithLine>
          </div>
          <div className={classes.text}>
            <div className="MLblock">
              <p>{trans('practices.appealOfMigrationServiceDecisions.intro.text.p1', 'dark')}</p>
              <p>{trans('practices.appealOfMigrationServiceDecisions.intro.text.p2', 'dark')}</p>
              <p>{trans('practices.appealOfMigrationServiceDecisions.intro.text.p3', 'dark')}</p>
            </div>
          </div>
        </Container>
      </div>
      <div className={classes.appeal}>
        <Container className={classes.wrapper}>
          <div className="MLblock">
            <div className={classes.title}>{t('practices.appealOfMigrationServiceDecisions.appeal.title')}</div>
          </div>
          <div className={classes.text}>
            <div className="MLblock">
              <p>{t('practices.appealOfMigrationServiceDecisions.appeal.text.p1')}</p>
              <p>{t('practices.appealOfMigrationServiceDecisions.appeal.text.p2')}</p>
            </div>
          </div>
        </Container>
      </div>
      <div className={classes.application}>
        <Container className={classes.wrapper}>
          {/*<div className="MLblock">*/}
            <div className={classes.text}>
              {trans('practices.appealOfMigrationServiceDecisions.application.text', 'dark')}
            </div>
          {/*</div>*/}
          <div className={classes.button}>
            <Button text={t('practices.appealOfMigrationServiceDecisions.application.button')} onClick={()=>setIsOpened(prevState => !prevState)} />
            {isOpened && <FormModal isOpened={isOpened} setIsOpened={setIsOpened}/>}
          </div>
        </Container>
      </div>
    </>
  );
};

export default Page;
