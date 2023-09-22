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

const Page = () => {
  const {t} = useTranslation();
  const [isOpened, setIsOpened] = useState(false)
  return (
    <>
      <HeaderBackground background="1"/>
      <div className={classes.intro}>
        <Container className={classes.wrapper}>
          <div className={classes.title}>
            <TextWithLine topText={t('practices.policeClearance.intro.title.topText')} topColor="dark">
              <span className={`${classes.bottomText} bottomTextWithLine`}>{t('practices.policeClearance.intro.title.bottomText')}</span>
            </TextWithLine>
          </div>
          <div className={classes.text}>
            <div className="MLblock">
              <p>{trans('practices.policeClearance.intro.text.p1', 'dark')}</p>
            </div>
          </div>
        </Container>
      </div>
      <div className={classes.lists}>
        <Container className={classes.wrapper}>
          <div className={classes.whatFor}>
            <div className={classes.title}>
              <TextWithLine topText={t('practices.policeClearance.lists.whatFor.title.topText')} topColor="light">
                <span className={`${classes.bottomText} bottomTextWithLine`}>{t('practices.policeClearance.lists.whatFor.title.bottomText')}</span>
              </TextWithLine>
            </div>
            <ul>
              <CustomLi color="light">{t('practices.policeClearance.lists.whatFor.li1')}</CustomLi>
              <CustomLi color="light">{t('practices.policeClearance.lists.whatFor.li2')}</CustomLi>
              <CustomLi color="light">{t('practices.policeClearance.lists.whatFor.li3')}</CustomLi>
              <CustomLi color="light">{t('practices.policeClearance.lists.whatFor.li4')}</CustomLi>
              <CustomLi color="light">{t('practices.policeClearance.lists.whatFor.li5')}</CustomLi>
              <CustomLi color="light">{t('practices.policeClearance.lists.whatFor.li6')}</CustomLi>
              <CustomLi color="light">{t('practices.policeClearance.lists.whatFor.li7')}</CustomLi>
              <CustomLi color="light">{t('practices.policeClearance.lists.whatFor.li8')}</CustomLi>
              <CustomLi color="light">{t('practices.policeClearance.lists.whatFor.li9')}</CustomLi>
              <CustomLi color="light">{t('practices.policeClearance.lists.whatFor.li10')}</CustomLi>
              <CustomLi color="light">{t('practices.policeClearance.lists.whatFor.li11')}</CustomLi>
              <CustomLi color="light">{t('practices.policeClearance.lists.whatFor.li12')}</CustomLi>
              <CustomLi color="light">{t('practices.policeClearance.lists.whatFor.li13')}</CustomLi>
              <CustomLi color="light">{t('practices.policeClearance.lists.whatFor.li14')}</CustomLi>
              <CustomLi color="light">{t('practices.policeClearance.lists.whatFor.li15')}</CustomLi>
              <CustomLi color="light">{t('practices.policeClearance.lists.whatFor.li16')}</CustomLi>
            </ul>
          </div>
          <div className={classes.listOfDoc}>
            <div className={classes.title}>
              <TextWithLine topText={t('practices.policeClearance.lists.listOfDoc.title.topText')} topColor="light">
                <span className={`${classes.bottomText} bottomTextWithLine`}>{t('practices.policeClearance.lists.listOfDoc.title.bottomText')}</span>
              </TextWithLine>
            </div>
            <ul>
              <CustomLi color="light">{t('practices.policeClearance.lists.listOfDoc.li1')}</CustomLi>
              <CustomLi color="light">{t('practices.policeClearance.lists.listOfDoc.li2')}</CustomLi>
              <CustomLi color="light">{t('practices.policeClearance.lists.listOfDoc.li3')}</CustomLi>
            </ul>
          </div>
          <div className={classes.term}>{t('practices.policeClearance.lists.term')}</div>
        </Container>
      </div>
      <div className={classes.application}>
        <Container className={classes.wrapper}>
          {/*<div className="MLblock">*/}
          <div className={classes.text}>
            {trans('practices.policeClearance.application.text', 'dark')}
          </div>
          {/*</div>*/}
          <div className={classes.button}>
            <Button text={t('practices.policeClearance.application.button')} onClick={()=>setIsOpened(prevState => !prevState)} />
            {isOpened && <FormModal isOpened={isOpened} setIsOpened={setIsOpened}/>}
          </div>
        </Container>
      </div>
    </>
  );
};

export default Page;
