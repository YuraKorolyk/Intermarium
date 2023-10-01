'use client';
import React, {useState} from 'react';
import classes from './page.module.scss'
import Container from "@/components/Layouts/Container/Container";
import TextWithLine from "@/components/TextWithLine/TextWithLine";
import HeaderBackground from "@/components/HeaderBackground/HeaderBackground";
import Button from "@/components/Button/Button";
import CustomLi from "@/components/CustomLi/CustomLi";
import {useTranslation} from "react-i18next";
import {trans} from "@/services";
import FormModal from "@/components/FormModal/FormModal";
import Head from "next/head";

const Page = () => {
  const {t} = useTranslation();
  const [isOpened, setIsOpened] = useState(false)
  return (
    <>
      <Head>
        <title>{t('practices.renewalOfResidencePermitInCaseOfLossOrTheft.pageTitle')}</title>
      </Head>
      <HeaderBackground background="1"/>
      <div className={classes.intro}>
        <Container className={classes.wrapper}>
          <div className={classes.title}>
            <TextWithLine topText={t('practices.renewalOfResidencePermitInCaseOfLossOrTheft.intro.title.topText')} topColor="dark">
              <span className={`${classes.bottomText} bottomTextWithLine`}>{t('practices.renewalOfResidencePermitInCaseOfLossOrTheft.intro.title.bottomText')}</span>
            </TextWithLine>
          </div>
          <div className={classes.text}>
            <div className="MLblock">
              <p>{trans('practices.registrationAsCitizenOfUkraine.intro.text.p1', 'dark')}</p>
              <p>{trans('practices.registrationAsCitizenOfUkraine.intro.text.p2', 'dark')}</p>
              <p>{trans('practices.registrationAsCitizenOfUkraine.intro.text.p3', 'dark')}</p>
            </div>
          </div>
        </Container>
      </div>
      <div className={classes.whatToDo}>
        <Container className={classes.wrapper}>
          <div className={classes.title}>
            <TextWithLine topText={t('practices.renewalOfResidencePermitInCaseOfLossOrTheft.whatToDo.title.topText')} topColor="light">
              <span className={`${classes.bottomText} bottomTextWithLine`}>{t('practices.renewalOfResidencePermitInCaseOfLossOrTheft.whatToDo.title.bottomText')}</span>
            </TextWithLine>
          </div>
          <div className={classes.immediately}>
            {t('practices.renewalOfResidencePermitInCaseOfLossOrTheft.whatToDo.immediately')}
          </div>
          <ul>
            <CustomLi>{t('practices.renewalOfResidencePermitInCaseOfLossOrTheft.whatToDo.li1')}</CustomLi>
            <CustomLi>{t('practices.renewalOfResidencePermitInCaseOfLossOrTheft.whatToDo.li2')}</CustomLi>
            <CustomLi>{t('practices.renewalOfResidencePermitInCaseOfLossOrTheft.whatToDo.li3')}</CustomLi>
            <CustomLi>{t('practices.renewalOfResidencePermitInCaseOfLossOrTheft.whatToDo.li4')}</CustomLi>
          </ul>
          <div className={classes.term}>
            {t('practices.renewalOfResidencePermitInCaseOfLossOrTheft.whatToDo.term')}
          </div>
          <div className={classes.after}>
            {t('practices.renewalOfResidencePermitInCaseOfLossOrTheft.whatToDo.after')}
          </div>
        </Container>
      </div>
      <div className={classes.application}>
        <Container className={classes.wrapper}>
          <div className={classes.text}>
            {trans('practices.renewalOfResidencePermitInCaseOfLossOrTheft.application.text', 'dark')}
          </div>
          <div className={classes.button}>
            <Button text={t('practices.renewalOfResidencePermitInCaseOfLossOrTheft.application.button')} onClick={()=>setIsOpened(prevState => !prevState)} />
            {isOpened && <FormModal isOpened={isOpened} setIsOpened={setIsOpened}/>}
          </div>
        </Container>
      </div>
    </>
  );
};

export default Page;
