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
            <TextWithLine topText={t('practices.extensionOfStayInUkraine.intro.title.topText')} topColor="dark">
              <span className={`${classes.bottomText} bottomTextWithLine`}>{t('practices.extensionOfStayInUkraine.intro.title.bottomText')}</span>
            </TextWithLine>
          </div>
          <div className={classes.text}>
            <div className="MLblock">
              <p>{trans('practices.extensionOfStayInUkraine.intro.text.p1', 'dark')}</p>
              <p>{trans('practices.extensionOfStayInUkraine.intro.text.p2', 'dark')}</p>
              <p>{trans('practices.extensionOfStayInUkraine.intro.text.p3', 'dark')}</p>
            </div>
          </div>
        </Container>
      </div>
      <div className={classes.lists}>
        <Container className={classes.wrapper}>
          <div className={classes.reasons}>
            <div className={classes.title}>
              <TextWithLine topText={t('practices.extensionOfStayInUkraine.lists.reasons.title.topText')} topColor="light">
                <span className={`${classes.bottomText} bottomTextWithLine`}>{t('practices.extensionOfStayInUkraine.lists.reasons.title.bottomText')}</span>
              </TextWithLine>
            </div>
            <ul>
              <CustomLi color="light">{t('practices.extensionOfStayInUkraine.lists.reasons.li1')}</CustomLi>
              <CustomLi color="light">{t('practices.extensionOfStayInUkraine.lists.reasons.li2')}</CustomLi>
              <CustomLi color="light">{t('practices.extensionOfStayInUkraine.lists.reasons.li3')}</CustomLi>
              <CustomLi color="light">{t('practices.extensionOfStayInUkraine.lists.reasons.li4')}</CustomLi>
            </ul>
          </div>
          <div className={classes.documents}>
            <div className={classes.title}>
              <TextWithLine topText={t('practices.extensionOfStayInUkraine.lists.documents.title.topText')} topColor="light">
                <span className={`${classes.bottomText} bottomTextWithLine`}>{t('practices.extensionOfStayInUkraine.lists.documents.title.bottomText')}</span>
              </TextWithLine>
            </div>
            <ul>
              <CustomLi color="light">{t('practices.extensionOfStayInUkraine.lists.documents.li1')}</CustomLi>
              <CustomLi color="light">{t('practices.extensionOfStayInUkraine.lists.documents.li2')}</CustomLi>
              <CustomLi color="light">{t('practices.extensionOfStayInUkraine.lists.documents.li3')}</CustomLi>
              <CustomLi color="light">{t('practices.extensionOfStayInUkraine.lists.documents.li4')}</CustomLi>
              <CustomLi color="light">{t('practices.extensionOfStayInUkraine.lists.documents.li5')}</CustomLi>
              <CustomLi color="light">{t('practices.extensionOfStayInUkraine.lists.documents.li6')}</CustomLi>
            </ul>
          </div>
          <div className={classes.term}>
            <div className={classes.title}>
              <TextWithLine topText={t("practices.extensionOfStayInUkraine.lists.term.title.topText")} topColor="light">
                <span className={`${classes.bottomText} bottomTextWithLine`}>{t("practices.extensionOfStayInUkraine.lists.term.title.bottomText")}</span>
              </TextWithLine>
            </div>
            <div className={classes.text}>
              <p>{trans('practices.extensionOfStayInUkraine.lists.term.text.p1', 'light')}</p>
              <p>{trans('practices.extensionOfStayInUkraine.lists.term.text.p2', 'light')}</p>
            </div>
          </div>

        </Container>
      </div>
      <div className={classes.application}>
        <Container className={classes.wrapper}>
          <div className="MLblock">
            <div className={classes.text}>
              {trans('practices.extensionOfStayInUkraine.application.text', 'dark')}
            </div>
          </div>
          <div className={classes.button}>
            <Button text={t('practices.extensionOfStayInUkraine.application.button')}/>
          </div>
        </Container>
      </div>
    </>
  );
};

export default Page;
