'use client';
import React from 'react';
import classes from './page.module.scss';
import Container from "@/components/Layouts/Container/Container";
import ArticleAuthor from "@/components/ArticleAuthor/ArticleAuthor";
import Calendar from "../../../../../public/assets/icons/Calendar";
import CustomLi from "@/components/CustomLi/CustomLi";
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
            <span>{'08/06/2023'}</span>
          </div>
        </Container>
      </div>
      <div className={classes.intro}>
        <Container className={classes.wrapper}>
          <div className={classes.title}>
            {t('draftLaw5796.intro.title')}
          </div>
          <div className={classes.content}>
            <div className={classes.september}>
              <div className={classes.headline}>
                {t('draftLaw5796.intro.september.headline')}
              </div>
              <ul>
                <CustomLi fontSize={20}>{t('draftLaw5796.intro.september.li1')}</CustomLi>
                <CustomLi fontSize={20}>{t('draftLaw5796.intro.september.li2')}</CustomLi>
                <CustomLi fontSize={20}>{t('draftLaw5796.intro.september.li3')}</CustomLi>
                <CustomLi fontSize={20}>{t('draftLaw5796.intro.september.li4')}</CustomLi>
                <CustomLi fontSize={20}>{t('draftLaw5796.intro.september.li5')}</CustomLi>
                <CustomLi fontSize={20}>{t('draftLaw5796.intro.september.li6')}</CustomLi>
              </ul>
              <div className={classes.also}>
                {t('draftLaw5796.intro.september.also')}
              </div>
            </div>
            <div className={classes.troubles}>
              <div className={classes.headline}>
                {t('draftLaw5796.intro.troubles.headline')}
              </div>
              <div className={classes.text}>
                {t('draftLaw5796.intro.troubles.text')}
              </div>
            </div>
            <div className={classes.fee}>
              <div className={classes.headline}>
                {t('draftLaw5796.intro.fee.headline')}
              </div>
              <div className={classes.text}>
                {t('draftLaw5796.intro.fee.text')}
              </div>
              <ul>
                <CustomLi fontSize={20}>{t('draftLaw5796.intro.fee.li1')}</CustomLi>
                <CustomLi fontSize={20}>{t('draftLaw5796.intro.fee.li2')}</CustomLi>
                <CustomLi fontSize={20}>{t('draftLaw5796.intro.fee.li3')}</CustomLi>
              </ul>
            </div>
            <div className={classes.employees}>
              <div className={classes.headline}>
                {t('draftLaw5796.intro.employees.headline')}
              </div>
              <div className={classes.text}>
                <p>{t('draftLaw5796.intro.employees.text.p1')}</p>
                <p>{t('draftLaw5796.intro.employees.text.p2')}</p>
                <p>{t('draftLaw5796.intro.employees.text.p3')}</p>
              </div>
            </div>
            <div className={classes.hope}>
              {t('draftLaw5796.intro.hope')}
            </div>
          </div>
        </Container>
      </div>
    </>
  );
};

export default Page;
