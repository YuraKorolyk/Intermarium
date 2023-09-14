'use client';
import React from 'react';
import classes from './page.module.scss';
import Container from "@/components/Layouts/Container/Container";
import ArticleAuthor from "@/components/ArticleAuthor/ArticleAuthor";
import Calendar from "../../../../../public/assets/icons/Calendar";
import CustomLi from "@/components/CustomLi/CustomLi";
import TextWithLine from "@/components/TextWithLine/TextWithLine";
import {useTranslation} from "react-i18next";

const Page = () => {
  const {t} = useTranslation();
  return (
    <>
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
          <div className={classes.titleMain}>
            {t('e-residency.intro.titleMain')}
          </div>
          <div className={classes.subtitle}>
            {t('e-residency.intro.subtitle')}
          </div>
          <div className={classes.what}>
            <div className={classes.title}>
              <TextWithLine topText={t('e-residency.intro.what.title.topText')} topColor="dark">
                <span className={`${classes.bottomText} bottomTextWithLine`}>{t('e-residency.intro.what.title.bottomText')}</span>
              </TextWithLine>
            </div>
            <div className={classes.text}>
              <p>{t('e-residency.intro.what.text.p1')}</p>
              <p>{t('e-residency.intro.what.text.p2')}</p>
            </div>
          </div>
          <div className={classes.how}>
            <div className={classes.title}>
              <TextWithLine topText={t('e-residency.intro.how.title.topText')} topColor="dark">
                <span className={`${classes.bottomText} bottomTextWithLine`}>{t('e-residency.intro.how.title.bottomText')}</span>
              </TextWithLine>
            </div>
            <div className={classes.headline}>

            </div>
            <ul>
              <CustomLi fontSize={20}>{t('e-residency.intro.how.li1')}</CustomLi>
              <CustomLi fontSize={20}>{t('e-residency.intro.how.li2')}</CustomLi>
              <CustomLi fontSize={20}>{t('e-residency.intro.how.li3')}</CustomLi>
              <CustomLi fontSize={20}>{t('e-residency.intro.how.li4')}</CustomLi>
              <CustomLi fontSize={20}>{t('e-residency.intro.how.li5')}</CustomLi>
            </ul>
            <div className={classes.text}>
              <p>{t('e-residency.intro.how.text.p1')}</p>
              <p className="highlightDark">{t('e-residency.intro.how.text.p2')}</p>
            </div>
          </div>
          <div className={classes.who}>
            <div className={classes.title}>
              <TextWithLine topText={t('e-residency.intro.who.title.topText')} topColor="dark">
                <span className={`${classes.bottomText} bottomTextWithLine`}>{t('e-residency.intro.who.title.bottomText')}</span>
              </TextWithLine>
            </div>
            <ul>
              <CustomLi fontSize={20}>{t('e-residency.intro.who.li1')}</CustomLi>
              <CustomLi fontSize={20}>{t('e-residency.intro.who.li2')}</CustomLi>
              <CustomLi fontSize={20}>{t('e-residency.intro.who.li3')}</CustomLi>
              <CustomLi fontSize={20}>{t('e-residency.intro.who.li4')}</CustomLi>
            </ul>
          </div>
          <div className={classes.ticket}>
            <div className={classes.title}>
              <TextWithLine topText={t('e-residency.intro.ticket.title.topText')} topColor="dark">
                <span className={`${classes.bottomText} bottomTextWithLine`}>{t('e-residency.intro.ticket.title.bottomText')}</span>
              </TextWithLine>
            </div>
            <ul>
              <CustomLi fontSize={20}>{t('e-residency.intro.ticket.li1')}</CustomLi>
              <CustomLi fontSize={20}>{t('e-residency.intro.ticket.li2')}</CustomLi>
              <CustomLi fontSize={20}>{t('e-residency.intro.ticket.li3')}</CustomLi>
              <CustomLi fontSize={20}>{t('e-residency.intro.ticket.li4')}</CustomLi>
            </ul>
            <div className={`${classes.text} highlightDark`}>{t('e-residency.intro.ticket.text')}</div>
          </div>
        </Container>
      </div>
    </>
  );
};

export default Page;
