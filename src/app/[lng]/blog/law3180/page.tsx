'use client';
import classes from "./page.module.scss";
import Container from "@/components/Layouts/Container/Container";
import ArticleAuthor from "@/components/ArticleAuthor/ArticleAuthor";
import Calendar from "../../../../../public/assets/icons/Calendar";
import React from "react";
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
              <span>{'14/06/2023'}</span>
            </div>
          </Container>
        </div>
        <div className={classes.intro}>
          <Container className={classes.wrapper}>
            <div className={classes.titleMain}>
              {t('law3180.intro.titleMain')}
            </div>
          </Container>
        </div>
        <div className={classes.textBlock}>
          <Container className={classes.wrapper}>
            <p>
              {t('law3180.textBlock.p1')}
            </p>
            <p>
              {t('law3180.textBlock.p2')}
            </p>
            <p>
              {t('law3180.textBlock.p3')}
              <ul>
                <CustomLi fontSize={20}>{t('law3180.textBlock.li1')}</CustomLi>
                <CustomLi fontSize={20}>{t('law3180.textBlock.li2')}</CustomLi>
                <CustomLi fontSize={20}>{t('law3180.textBlock.li3')}</CustomLi>
                <CustomLi fontSize={20}>{t('law3180.textBlock.li4')}</CustomLi>
                <CustomLi fontSize={20}>{t('law3180.textBlock.li5')}</CustomLi>
                <CustomLi fontSize={20}>{t('law3180.textBlock.li6')}</CustomLi>
                <CustomLi fontSize={20}>{t('law3180.textBlock.li7')}</CustomLi>
                <CustomLi fontSize={20}>{t('law3180.textBlock.li8')}</CustomLi>
              </ul>
            </p>
            <p>
              {t('law3180.textBlock.p4')}
            </p>
            <p className={classes.bold}>
              {t('law3180.textBlock.p5')}
            </p>
          </Container>
        </div>
      </>
    );
  };

export default Page;
