'use client';
import React from 'react';
import classes from './page.module.scss'
import Container from "@/components/Layouts/Container/Container";
import TextWithLine from "@/components/TextWithLine/TextWithLine";
import HeaderBackground from "@/components/HeaderBackground/HeaderBackground";
import Button from "@/components/Button/Button";
import CustomLi from "@/components/CustomLi/CustomLi";
import {useTranslation} from "react-i18next";
import {trans} from "@/services";


const Page = () => {
  const {t} = useTranslation();
  return (
    <>
      <HeaderBackground background="1"/>
      <div className={classes.intro}>
        <Container className={classes.wrapper}>
          <div className={classes.title}>
            <TextWithLine topText={t('practices.immigrationPermit.intro.title.topText')} topColor="dark">
              <span className={`${classes.bottomText} bottomTextWithLine`}>{t('practices.immigrationPermit.intro.title.bottomText')}</span>
            </TextWithLine>
          </div>
          <div className={classes.text}>
            <div className="MLblock">
              <p>{trans('practices.immigrationPermit.intro.text.p1', 'dark')}</p>
              <p className={classes.reasons}>
                <div className={classes.headline}>{t('practices.immigrationPermit.intro.text.p2.headline')}</div>
                <ul>
                  <CustomLi>{t('practices.immigrationPermit.intro.text.p2.li1')}</CustomLi>
                  <CustomLi>{t('practices.immigrationPermit.intro.text.p2.li2')}</CustomLi>
                  <CustomLi>{t('practices.immigrationPermit.intro.text.p2.li3')}</CustomLi>
                  <CustomLi>{t('practices.immigrationPermit.intro.text.p2.li4')}</CustomLi>
                  <CustomLi>{t('practices.immigrationPermit.intro.text.p2.li5')}</CustomLi>
                </ul>
              </p>
            </div>
          </div>
        </Container>
      </div>
      <div className={classes.documents}>
        <Container className={classes.wrapper}>
          <div className={classes.permission}>
            <p>{trans('practices.immigrationPermit.documents.permission.p1', 'light')}</p>
            <p>{trans('practices.immigrationPermit.documents.permission.p2', 'light')}</p>
            <p>{trans('practices.immigrationPermit.documents.permission.p3', 'light')}</p>
            <p>{trans('practices.immigrationPermit.documents.permission.p4', 'light')}</p>
            <p>{trans('practices.immigrationPermit.documents.permission.p5', 'light')}</p>

          </div>
          <div className={classes.listOfDoc}>
            <div className={classes.title}>{t('practices.immigrationPermit.documents.listOfDoc.title')}</div>
            <ul>
              <CustomLi>{t('practices.immigrationPermit.documents.listOfDoc.li1')}</CustomLi>
              <CustomLi>{t('practices.immigrationPermit.documents.listOfDoc.li2')}</CustomLi>
              <CustomLi>{t('practices.immigrationPermit.documents.listOfDoc.li3')}</CustomLi>
              <CustomLi>{t('practices.immigrationPermit.documents.listOfDoc.li4')}</CustomLi>
              <CustomLi>{t('practices.immigrationPermit.documents.listOfDoc.li5')}</CustomLi>
              <CustomLi>{t('practices.immigrationPermit.documents.listOfDoc.li6')}</CustomLi>
              <CustomLi>{t('practices.immigrationPermit.documents.listOfDoc.li7')}</CustomLi>
              <CustomLi>{t('practices.immigrationPermit.documents.listOfDoc.li8')}</CustomLi>
              <CustomLi>{t('practices.immigrationPermit.documents.listOfDoc.li9')}</CustomLi>
            </ul>
            <div className={classes.conclusion}>{trans('practices.immigrationPermit.documents.listOfDoc.conclusion', 'light')}</div>
            <div className={classes.addDocs}>{t('practices.immigrationPermit.documents.listOfDoc.addDocs')}</div>
            <div className={classes.term}>{t('practices.immigrationPermit.documents.listOfDoc.term')}</div>
          </div>
        </Container>
      </div>
      <div className={classes.application}>
        <Container className={classes.wrapper}>
          <div className="MLblock">
            <div className={classes.text}>
              {trans('practices.immigrationPermit.application.text', 'dark')}
            </div>
          </div>
          <div className={classes.button}>
            <Button text={t('practices.immigrationPermit.application.button')}/>
          </div>
        </Container>
      </div>
    </>
  );
};

export default Page;
