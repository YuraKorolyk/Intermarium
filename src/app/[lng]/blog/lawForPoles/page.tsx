'use client';
import React from 'react';
import classes from './page.module.scss';
import Container from "@/components/Layouts/Container/Container";
import ArticleAuthor from "@/components/ArticleAuthor/ArticleAuthor";
import Calendar from "../../../../../public/assets/icons/Calendar";
import CustomLi from "@/components/CustomLi/CustomLi";
import TextWithLine from "@/components/TextWithLine/TextWithLine";
import {useTranslation} from "react-i18next";
import {trans} from "@/services";
import Head from "next/head";

const Page = () => {
  const {t} = useTranslation();

  return (
    <>
      <Head>
        <title>{t('lawForPoles.pageTitle')}</title>
      </Head>
      <div className={classes.topBar}>
        <Container className={classes.wrapper}>
          <ArticleAuthor author='Taras'/>
          <div className={classes.date}>
            <Calendar fill={"#013043"}/>
            <span>{'14/06/2023'}</span>
          </div>
        </Container>
      </div>
      <div className={classes.intro}>
        <Container className={classes.wrapper}>
          <div className={classes.title}>
            {t('lawForPoles.intro.title')}
          </div>
          <div className={classes.subtitle}>
            {t('lawForPoles.intro.subtitle')}
          </div>
          <div className={classes.block}>
            <div className={classes.image}>
              <img src="/assets/images/lawForPoles.jpg"/>
            </div>
            <div className={classes.text}>
              <p>
                {trans('lawForPoles.intro.text.p1', 'dark')}
              </p>
              <p>
                {trans('lawForPoles.intro.text.p2', 'dark')}
              </p>
            </div>
          </div>
        </Container>
      </div>

      <div className={classes.for}>
        <Container className={classes.wrapper}>
          <div className={classes.title}>
            <TextWithLine topText={t('lawForPoles.for.title.topText')} topColor="dark">
              <span className={`${classes.bottomText} bottomTextWithLine`}>{t('lawForPoles.for.title.bottomText')}</span>
            </TextWithLine>
          </div>
          <ul className={classes.list}>
            <CustomLi>{t('lawForPoles.for.li1')}</CustomLi>
            <CustomLi>{t('lawForPoles.for.li2')}</CustomLi>
            <CustomLi>{t('lawForPoles.for.li3')}</CustomLi>
            <CustomLi>{t('lawForPoles.for.li4')}</CustomLi>
            <CustomLi>{t('lawForPoles.for.li5')}</CustomLi>
            <CustomLi>{t('lawForPoles.for.li6')}</CustomLi>
          </ul>
        </Container>
      </div>
      <div className={classes.also}>
        <Container className={classes.wrapper}>
          <div className={classes.title}>
            {t('lawForPoles.also.title')}
          </div>
          <ul className={classes.list}>
            <CustomLi>{t('lawForPoles.also.li1')}</CustomLi>
            <CustomLi>{t('lawForPoles.also.li2')}</CustomLi>
            <CustomLi>{t('lawForPoles.also.li3')}</CustomLi>
            <CustomLi>{t('lawForPoles.also.li4')}</CustomLi>
            <CustomLi>{t('lawForPoles.also.li5')}</CustomLi>
            <CustomLi>Посвідка оформлюється на строк дії трудового договору, але не більше ніж на 3 роки.</CustomLi>
          </ul>

          <p className={classes.bold}>
            {t('lawForPoles.also.p')}
          </p>
        </Container>
      </div>
    </>
  );
};

export default Page;
