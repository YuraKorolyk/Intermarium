'use client';
import React from 'react';
import classes from './page.module.scss';
import Container from "@/components/Layouts/Container/Container";
import ArticleAuthor from "@/components/ArticleAuthor/ArticleAuthor";
import Calendar from "../../../../../public/assets/icons/Calendar";
import CustomLi from "@/components/CustomLi/CustomLi";
import {useTranslation} from "react-i18next";
import Head from "next/head";
const Page = () => {
  const {t} = useTranslation();
  return (
    <>
      <Head>
        <title>{t('investingIntoUkraine.pageTitle')}</title>
      </Head>
      <div className={classes.topBar}>
        <Container className={classes.wrapper}>
          <ArticleAuthor author='Yurii' />
          <div className={classes.date}>
            <Calendar fill={"#013043"}/>
            <span>{'13/07/2023'}</span>
          </div>
        </Container>
      </div>
      <div className={classes.intro}>
        <Container className={classes.wrapper}>
          <div className={classes.title}>
            {t('investingIntoUkraine.intro.title')}
          </div>
          <div className={classes.block}>
            <div className={classes.image}>
              <img src="/assets/images/investingIntoUkraine.jpg"/>
            </div>
            <div className={classes.text}>
              <p>
                {t('investingIntoUkraine.intro.text.p1')}
              </p>
              <p>

              </p>
            </div>
          </div>
        </Container>
      </div>
      <div className={classes.for}>
        <Container className={classes.wrapper}>
          <div className={classes.title}>
            {t('investingIntoUkraine.for.title')}
          </div>
          <ul className={classes.list}>
            <CustomLi>{t('investingIntoUkraine.for.li1')}</CustomLi>
            <CustomLi>{t('investingIntoUkraine.for.li2')}</CustomLi>
            <CustomLi>{t('investingIntoUkraine.for.li3')}</CustomLi>
          </ul>
          <div className={classes.text}>
            <p>{t('investingIntoUkraine.for.text.p1')}</p>
            <p>{t('investingIntoUkraine.for.text.p2')}</p>
            <p>{t('investingIntoUkraine.for.text.p3')}</p>
            <p>{t('investingIntoUkraine.for.text.p4')}</p>
            <p className={classes.bold}>{t('investingIntoUkraine.for.text.p5')}</p>
          </div>
        </Container>
      </div>
    </>
  );
};

export default Page;
