'use client';
import React, {useState} from 'react';
import classes from './page.module.scss'
import Container from "@/components/Layouts/Container/Container";
import HeaderBackground from "@/components/HeaderBackground/HeaderBackground";
import TextWithLine from "@/components/TextWithLine/TextWithLine";
import Button from "@/components/Button/Button";
import CustomLi from "@/components/CustomLi/CustomLi";
import {useTranslation} from "react-i18next";
import {trans} from "@/services";
import FormModal from "@/components/FormModal/FormModal";
import Head from "next/head";

const Page = () => {
  const {t} = useTranslation();
  const [isOpened, setIsOpened] = useState(false)
  return (
    <>
      <Head>
        <title>{t('practices.dueDiligence.pageTitle')}</title>
      </Head>
      <HeaderBackground background="4"/>
      <div className={classes.intro}>
        <Container className={classes.wrapper}>
          <div className={classes.title}>
            <TextWithLine topText={t('practices.dueDiligence.intro.title.topText')} topColor="dark">
              <span className={`${classes.bottomText} bottomTextWithLine`}>{t('practices.dueDiligence.intro.title.bottomText')}</span>
            </TextWithLine>
          </div>
          <div className={classes.text}>
            <p>{trans('practices.dueDiligence.intro.text.p1', 'dark')}</p>
            <p>{trans('practices.dueDiligence.intro.text.p2', 'dark')}</p>
          </div>
        </Container>
      </div>
      <div className={classes.check}>
        <Container className={classes.wrapper}>
          <div className={classes.mainTitle}>
            {t('practices.dueDiligence.check.mainTitle')}
          </div>
          <div className={classes.blocks}>
            <div>
              <div className={classes.title}>
                <TextWithLine topText={t('practices.dueDiligence.check.block1.title.topText')} topColor="light">
                  <span className={`${classes.bottomText} bottomTextWithLine`}>{t('practices.dueDiligence.check.block1.title.bottomText')}</span>
                </TextWithLine>
              </div>
              <div className={classes.text}>
                {t('practices.dueDiligence.check.block1.text')}
              </div>
              <ul>
                <CustomLi>{t('practices.dueDiligence.check.block1.li1')}</CustomLi>
                <CustomLi>{t('practices.dueDiligence.check.block1.li2')}</CustomLi>
                <CustomLi>{t('practices.dueDiligence.check.block1.li3')}</CustomLi>
                <CustomLi>{t('practices.dueDiligence.check.block1.li4')}</CustomLi>
                <CustomLi>{t('practices.dueDiligence.check.block1.li5')}</CustomLi>
                <CustomLi>{t('practices.dueDiligence.check.block1.li6')}</CustomLi>
                <CustomLi>{t('practices.dueDiligence.check.block1.li7')}</CustomLi>
                <CustomLi>{t('practices.dueDiligence.check.block1.li8')}</CustomLi>
                <CustomLi>{t('practices.dueDiligence.check.block1.li9')}</CustomLi>
              </ul>
            </div>
            <div>
              <div className={classes.title}>
                <TextWithLine topText={t('practices.dueDiligence.check.block2.title.topText')} topColor="light">
                  <span className={`${classes.bottomText} bottomTextWithLine`}>{t('practices.dueDiligence.check.block2.title.bottomText')}</span>
                </TextWithLine>
              </div>
              <ul>
                <CustomLi>{t('practices.dueDiligence.check.block2.li1')}</CustomLi>
                <CustomLi>{t('practices.dueDiligence.check.block2.li2')}</CustomLi>
                <CustomLi>{t('practices.dueDiligence.check.block2.li3')}</CustomLi>
                <CustomLi>{t('practices.dueDiligence.check.block2.li4')}</CustomLi>
                <CustomLi>{t('practices.dueDiligence.check.block2.li5')}</CustomLi>
                <CustomLi>{t('practices.dueDiligence.check.block2.li6')}</CustomLi>
              </ul>
            </div>
            <div className={classes.checkList}>
              <div className={classes.title}>
                <TextWithLine topText={t('practices.dueDiligence.check.checkList.title.topText')} topColor="light">
                  <span className={`${classes.bottomText} bottomTextWithLine`}>{t('practices.dueDiligence.check.checkList.title.bottomText')}</span>
                </TextWithLine>
              </div>
              <ul>
                <CustomLi>{t('practices.dueDiligence.check.checkList.li1')}</CustomLi>
                <CustomLi>{t('practices.dueDiligence.check.checkList.li2')}</CustomLi>
                <CustomLi>{t('practices.dueDiligence.check.checkList.li3')}</CustomLi>
                <CustomLi>{t('practices.dueDiligence.check.checkList.li4')}</CustomLi>
                <CustomLi>{t('practices.dueDiligence.check.checkList.li5')}</CustomLi>
                <CustomLi>{t('practices.dueDiligence.check.checkList.li6')}</CustomLi>
                <CustomLi>{t('practices.dueDiligence.check.checkList.li7')}</CustomLi>
                <CustomLi>{t('practices.dueDiligence.check.checkList.li8')}</CustomLi>
              </ul>
            </div>
          </div>

        </Container>
      </div>
      <div className={classes.application}>
        <Container className={classes.wrapper}>
          <div className={classes.text}>
            {t('practices.dueDiligence.application.text')}
          </div>
          <div className={classes.button}>
            <Button text={t('practices.dueDiligence.application.button')} onClick={()=>setIsOpened(prevState => !prevState)} />
            {isOpened && <FormModal isOpened={isOpened} setIsOpened={setIsOpened}/>}
          </div>
        </Container>
      </div>
    </>
  );
};

export default Page;
