'use client';
import React from 'react';
import HeaderBackground from "@/components/HeaderBackground/HeaderBackground";
import Container from "@/components/Layouts/Container/Container";
import classes from "./page.module.scss";
import TextWithLine from "@/components/TextWithLine/TextWithLine";
import Button from "@/components/Button/Button";
import CustomLi from "@/components/CustomLi/CustomLi";
import {useTranslation} from "react-i18next";
import {trans} from "@/services";

const Page = () => {
  const {t} = useTranslation();
  return (
    <>
      <HeaderBackground background="3"/>
      <div className={classes.intro}>
        <Container className={classes.wrapper}>
          <div className={classes.title}>
            <TextWithLine topText={t('practices.poland.intro.title.topText')} topColor="dark">
              <span className={`${classes.bottomText} bottomTextWithLine`}>{t('practices.poland.intro.title.bottomText')}</span>
            </TextWithLine>
          </div>
          <div className="MLblock">
            <div className={classes.text}>
              {trans('practices.poland.intro.text', 'dark')}
            </div>
            <div className={classes.list}>
              <span className={classes.title}>{t('practices.poland.intro.listTitle')}</span>
              <ul>
                <CustomLi>{t('practices.poland.intro.li1')}</CustomLi>
                <CustomLi>{t('practices.poland.intro.li2')}</CustomLi>
                <CustomLi>{t('practices.poland.intro.li3')}</CustomLi>
                <CustomLi>{t('practices.poland.intro.li4')}</CustomLi>
              </ul>
            </div>
          </div>
          <div className={classes.button}>
            <Button text={t('practices.poland.intro.button')}/>
          </div>
        </Container>
      </div>
    </>
  );
};

export default Page;
