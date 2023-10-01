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
        <title>{t('practices.marriageRegistration.pageTitle')}</title>
      </Head>
      <HeaderBackground background="1"/>
      <div className={classes.intro}>
        <Container className={classes.wrapper}>
          <div className={classes.title}>
            <TextWithLine topText={t('practices.marriageRegistration.intro.title.topText')} topColor="dark">
              <span className={`${classes.bottomText} bottomTextWithLine`}>{t('practices.marriageRegistration.intro.title.bottomText')}</span>
            </TextWithLine>
          </div>
          <div className={classes.text}>
            <div className="MLblock">
              <p>{trans('practices.marriageRegistration.intro.text.p1', 'dark')}</p>
            </div>
          </div>
        </Container>
      </div>
      <div className={classes.lists}>
        <Container className={classes.wrapper}>
          <div className={classes.documents}>
            <div className={classes.title}>
              <TextWithLine topText={t('practices.marriageRegistration.lists.documents.title.topText')} topColor="light">
                <span className={`${classes.bottomText} bottomTextWithLine`}>{t('practices.marriageRegistration.lists.documents.title.bottomText')}</span>
              </TextWithLine>
            </div>
            <ul>
              <CustomLi color="light">{t('practices.marriageRegistration.lists.documents.li1')}</CustomLi>
              <CustomLi color="light">{t('practices.marriageRegistration.lists.documents.li2')}</CustomLi>
              <CustomLi color="light">{t('practices.marriageRegistration.lists.documents.li3')}</CustomLi>
            </ul>
            <p>{t('practices.marriageRegistration.lists.documents.p')}</p>
          </div>
          <div className={classes.war}>
            <div className={classes.title}>
              <TextWithLine topText={t('practices.marriageRegistration.lists.war.title.topText')} topColor="light">
                <span className={`${classes.bottomText} bottomTextWithLine`}>{t('practices.marriageRegistration.lists.war.title.bottomText')}</span>
              </TextWithLine>
            </div>
            <div>
              <p className={classes.because}>
                {t('practices.marriageRegistration.lists.war.p1')}
              </p>
              <p>
                <div className={classes.subtitle}>
                  {t('practices.marriageRegistration.lists.war.p2')}
                </div>
                <ul>
                  <CustomLi color="light">{t('practices.marriageRegistration.lists.war.li1')}</CustomLi>
                  <CustomLi color="light">{t('practices.marriageRegistration.lists.war.li2')}</CustomLi>
                  <CustomLi color="light">{t('practices.marriageRegistration.lists.war.li3')}</CustomLi>
                  <CustomLi color="light">{t('practices.marriageRegistration.lists.war.li4')}</CustomLi>
                </ul>
              </p>
            </div>
          </div>
        </Container>
      </div>
      <div className={classes.application}>
        <Container className={classes.wrapper}>
          <div className="MLblock">
            <div className={classes.text}>
              {trans('practices.marriageRegistration.application.text', 'dark')}
            </div>
          </div>
          <div className={classes.button}>
            <Button text={t('practices.marriageRegistration.application.button')} onClick={()=>setIsOpened(prevState => !prevState)} />
            {isOpened && <FormModal isOpened={isOpened} setIsOpened={setIsOpened}/>}
          </div>
        </Container>
      </div>
    </>
  );
};

export default Page;
