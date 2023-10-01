'use client';
import React, {useState} from 'react';
import classes from './page.module.scss'
import Container from "@/components/Layouts/Container/Container";
import TextWithLine from "@/components/TextWithLine/TextWithLine";
import HeaderBackground from "@/components/HeaderBackground/HeaderBackground";
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
        <title>{t('practices.permanentResidence.pageTitle')}</title>
      </Head>
      <HeaderBackground background="1"/>
      <div className={classes.intro}>
        <Container className={classes.wrapper}>
          <div className={classes.title}>
            <TextWithLine topText={t('practices.permanentResidence.intro.title.topText')} topColor="dark">
              <span className={`${classes.bottomText} bottomTextWithLine`}>{t('practices.permanentResidence.intro.title.bottomText')}</span>
            </TextWithLine>
          </div>
          <div className={classes.text}>
            <div className="MLblock">
              <p>{trans('practices.permanentResidence.intro.text.p1', 'dark')}</p>
              <p>{trans('practices.permanentResidence.intro.text.p2', 'dark')}</p>
            </div>
          </div>
        </Container>
      </div>
      <div className={classes.lists}>
        <Container className={classes.wrapper}>
          <div className={classes.advantages}>
            <div className={classes.title}>{t('practices.permanentResidence.lists.advantages.title')}</div>
            <ul>
              <CustomLi color="light">{t('practices.permanentResidence.lists.advantages.li1')}</CustomLi>
              <CustomLi color="light">{t('practices.permanentResidence.lists.advantages.li2')}</CustomLi>
              <CustomLi color="light">{t('practices.permanentResidence.lists.advantages.li3')}</CustomLi>
              <CustomLi color="light">{t('practices.permanentResidence.lists.advantages.li4')}</CustomLi>
            </ul>
            <div className={classes.text}>
              <p>{trans('practices.permanentResidence.lists.advantages.p', 'light')}</p>
            </div>
          </div>
          <div className={classes.listOfDoc}>
            <div className={classes.title}>{t('practices.permanentResidence.lists.listOfDoc.title')}</div>
            <ul>
              <CustomLi color="light">{t('practices.permanentResidence.lists.listOfDoc.li1')}</CustomLi>
              <CustomLi color="light">{t('practices.permanentResidence.lists.listOfDoc.li2')}</CustomLi>
              <CustomLi color="light">{t('practices.permanentResidence.lists.listOfDoc.li3')}</CustomLi>
              <CustomLi color="light">{t('practices.permanentResidence.lists.listOfDoc.li4')}</CustomLi>
            </ul>
            <div className={classes.text}>{trans('practices.permanentResidence.lists.listOfDoc.p', 'light')}</div>
          </div>
          <div className={classes.term}>{t('practices.permanentResidence.lists.term')}</div>
          <div className={classes.after}>
            {trans('practices.permanentResidence.lists.after', 'light')}
          </div>
        </Container>
      </div>
      <div className={classes.application}>
        <Container className={classes.wrapper}>
          {/*<div className="MLblock">*/}
          <div className={classes.text}>
            {trans('practices.permanentResidence.application.text', 'dark')}
          </div>
          {/*</div>*/}
          <div className={classes.button}>
            <Button text={t('practices.permanentResidence.application.button')} onClick={()=>setIsOpened(prevState => !prevState)} />
            {isOpened && <FormModal isOpened={isOpened} setIsOpened={setIsOpened}/>}
          </div>
        </Container>
      </div>
    </>
  );
};

export default Page;
