'use client';
import React, {useState} from 'react';
import HeaderBackground from "@/components/HeaderBackground/HeaderBackground";
import Container from "@/components/Layouts/Container/Container";
import classes from "./page.module.scss";
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
        <title>{t('practices.EResidency.pageTitle')}</title>
      </Head>
      <HeaderBackground background="3"/>
      <div className={classes.intro}>
        <Container className={classes.wrapper}>
          <div className={classes.title}>
            <TextWithLine topText={t('practices.EResidency.intro.title.topText')} topColor="dark">
              <span className={`${classes.bottomText} bottomTextWithLine`}>{t('practices.EResidency.intro.title.bottomText')}</span>
            </TextWithLine>
          </div>
          <div className="MLblock">
            <div className={classes.text}>
              <p>{trans('practices.EResidency.intro.text.p1', 'dark')}</p>
              <p>{trans('practices.EResidency.intro.text.p2', 'dark')}</p>
              <p>{trans('practices.EResidency.intro.text.p3', 'dark')}</p>
              <p>{trans('practices.EResidency.intro.text.p4', 'dark')}</p>
            </div>
            <div className={classes.support}>
              <div className={classes.supportTitle}>
                {t('practices.EResidency.intro.support')}
              </div>
                <ul>
                  <CustomLi>{t('practices.EResidency.intro.li1')}</CustomLi>
                  <CustomLi>{t('practices.EResidency.intro.li2')}</CustomLi>
                  <CustomLi>{t('practices.EResidency.intro.li3')}</CustomLi>
                </ul>

            </div>
          </div>

          <div className={classes.button}>
            <Button text={t('practices.EResidency.intro.button')} onClick={()=>setIsOpened(prevState => !prevState)} />
            {isOpened && <FormModal isOpened={isOpened} setIsOpened={setIsOpened}/>}
          </div>
        </Container>
      </div>
    </>
  );
};

export default Page;
