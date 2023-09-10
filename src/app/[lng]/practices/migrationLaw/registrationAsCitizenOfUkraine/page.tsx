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
            <TextWithLine topText={t('practices.registrationAsCitizenOfUkraine.intro.title.topText')} topColor="dark">
              <span className={`${classes.bottomText} bottomTextWithLine`}>{t('practices.registrationAsCitizenOfUkraine.intro.title.bottomText')}</span>
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
      <div className={classes.list}>
        <Container className={classes.wrapper}>
          <div className={classes.howToGet}>
            <div className={classes.title}>
              <TextWithLine topText={t('practices.registrationAsCitizenOfUkraine.list.howToGet.title.topText')} topColor="light">
                <span className={`${classes.bottomText} bottomTextWithLine`}>{t('practices.registrationAsCitizenOfUkraine.list.howToGet.title.bottomText')}</span>
              </TextWithLine>
            </div>
            <div className="MLblock">
              <div className={classes.text}>
                {trans('practices.registrationAsCitizenOfUkraine.list.howToGet.text', 'light')}
              </div>
            </div>
          </div>
          <div className={classes.docs}>
            <div className={classes.title}>
              <TextWithLine topText={t('practices.registrationAsCitizenOfUkraine.list.docs.title.topText')} topColor="light">
                <span className={`${classes.bottomText} bottomTextWithLine`}>{t('practices.registrationAsCitizenOfUkraine.list.docs.title.bottomText')}</span>
              </TextWithLine>
            </div>
            <ul>
              <CustomLi>{t('practices.registrationAsCitizenOfUkraine.list.docs.li1')}</CustomLi>
              <CustomLi>{t('practices.registrationAsCitizenOfUkraine.list.docs.li2')}</CustomLi>
              <CustomLi>{t('practices.registrationAsCitizenOfUkraine.list.docs.li3')}</CustomLi>
              <CustomLi>{t('practices.registrationAsCitizenOfUkraine.list.docs.li4')}</CustomLi>
              <CustomLi>{t('practices.registrationAsCitizenOfUkraine.list.docs.li5')}</CustomLi>
            </ul>
            <div className={classes.term}>
              {t('practices.registrationAsCitizenOfUkraine.list.docs.term')}
            </div>
            <div className={classes.after}>
              {t('practices.registrationAsCitizenOfUkraine.list.docs.after')}
            </div>
          </div>
        </Container>
      </div>
      <div className={classes.application}>
        <Container className={classes.wrapper}>
          <div className={classes.text}>
            {trans('practices.registrationAsCitizenOfUkraine.application.text', 'dark')}
          </div>
          <div className={classes.button}>
            <Button text={t('practices.registrationAsCitizenOfUkraine.application.button')}/>
          </div>
        </Container>
      </div>
    </>
  );
};

export default Page;
