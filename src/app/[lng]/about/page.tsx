"use client"
import React, {useEffect} from 'react';
import classes from "./page.module.scss"
import Container from "@/components/Layouts/Container/Container";
import TextWithLine from "@/components/TextWithLine/TextWithLine";
import Partner from "@/components/Partner/Partner";
import {useTranslation} from "react-i18next";
import CustomLi from "@/components/CustomLi/CustomLi";
import {trans} from "@/services";

const Page = () => {
    const {t} = useTranslation();
    return (
      <>
        <div className={classes.about}>
          <Container className={classes.wrapper}>
            <div className={classes.gridBox}>
              <div className={classes.imageBox}>
                <img src="/assets/images/bothVertical.jpg" alt=""/>
              </div>
              <div className={classes.title}>
                <TextWithLine topText={t('about.about.title.topText')} topColor="dark">
                  <span className={`${classes.bottomText} bottomTextWithLine`}>{t('about.about.title.bottomText')}</span>
                </TextWithLine>
              </div>
              <div className={classes.description}>
                {trans('about.about.description', 'dark')}
              </div>
            </div>
            <div className={classes.text}>
              <div className={classes.becauseOf}>{trans('about.about.text.becauseOf', 'dark')}</div>
              <div className={classes.support}>
                <div className={classes.title}>{t('about.about.text.support.title')}</div>
                <ul className={classes.list}>
                  <CustomLi>{t('about.about.text.support.li1')}</CustomLi>
                  <CustomLi>{t('about.about.text.support.li2')}</CustomLi>
                  <CustomLi>{t('about.about.text.support.li3')}</CustomLi>
                  <CustomLi>{t('about.about.text.support.li4')}</CustomLi>
                </ul>
              </div>
            </div>
          </Container>
        </div>
        <div className={classes.mission}>
          <Container className={classes.wrapper}>
            <div className={classes.title}>
              <TextWithLine topText={t('about.mission.title.topText')} topColor="light">
                <span className={`${classes.bottomText} bottomTextWithLine`}>{t('about.mission.title.bottomText')}</span>
              </TextWithLine>
            </div>
            <div className={classes.text}>
              <div className={classes.first}>
                {trans('about.mission.text.t1', 'light')}
              </div>
              <div>
                {trans('about.mission.text.t2', 'light')}
              </div>
            </div>
          </Container>
        </div>
        <div className={classes.team}>
          <Container className={classes.wrapper}>
            <div className={classes.title}>
              <TextWithLine topText={t('about.team.title.topText')} topColor="dark">
                <span className={`${classes.bottomText} bottomTextWithLine`}>{t('about.team.title.bottomText')}</span>
              </TextWithLine>
            </div>
            <div className={classes.partnerBox}>
              <Partner
                name="Taras"
                title={t('about.team.taras.title')}
                description={
                  <>
                    {trans('about.team.taras.p1', 'dark')}
                    <br/><br/>
                    {trans('about.team.taras.p2', 'dark')}
                  </>
                }
              />
              <Partner
                name="Yurii"
                title={t('about.team.yurii.title')}
                description={
                  <>
                    {trans('about.team.yurii.p1', 'dark')}
                    <br/><br/>
                    {trans('about.team.yurii.p2', 'dark')}
                  </>
                }
              />
            </div>
          </Container>
        </div>
      </>
    );
  }
;

export default Page;
