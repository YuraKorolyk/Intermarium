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
            <TextWithLine topText={t('practices.taxId.intro.title.topText')} topColor="dark">
              <span className={`${classes.bottomText} bottomTextWithLine`}>{t('practices.taxId.intro.title.bottomText')}</span>
            </TextWithLine>
          </div>
          <div className={classes.text}>
            <div className="MLblock">
              <p>{trans('practices.taxId.intro.text.p1', 'dark')}</p>
              <p>{trans('practices.taxId.intro.text.p2', 'dark')}</p>
            </div>
          </div>
        </Container>
      </div>
      <div className={classes.lists}>
        <Container className={classes.wrapper}>
          <div className={classes.listOfDoc}>
            <div className={classes.title}>
              <TextWithLine topText={t('practices.taxId.lists.listOfDoc.title.topText')} topColor="light">
                <span className={`${classes.bottomText} bottomTextWithLine`}>{t('practices.taxId.lists.listOfDoc.title.topText')}</span>
              </TextWithLine>
            </div>
            <ul>
              <CustomLi color="light">{t('practices.taxId.lists.listOfDoc.li1')}</CustomLi>
              <CustomLi color="light">{t('practices.taxId.lists.listOfDoc.li2')}</CustomLi>
              <CustomLi color="light">{t('practices.taxId.lists.listOfDoc.li3')}</CustomLi>
            </ul>
          </div>
          <div className={classes.nextDoc}>
            <div className={classes.title}>
              <TextWithLine topText={t('practices.taxId.lists.nextDoc.title.topText')} topColor="light">
                <span className={`${classes.bottomText} bottomTextWithLine`}>{t('practices.taxId.lists.nextDoc.title.bottomText')}</span>
              </TextWithLine>
            </div>
            <ul>
              <CustomLi color="light">{t('practices.taxId.lists.nextDoc.li1')}</CustomLi>
              <CustomLi color="light">{t('practices.taxId.lists.nextDoc.li2')}</CustomLi>
              <CustomLi color="light">{t('practices.taxId.lists.nextDoc.li3')}</CustomLi>
              <CustomLi color="light">{t('practices.taxId.lists.nextDoc.li4')}</CustomLi>
              <CustomLi color="light">{t('practices.taxId.lists.nextDoc.li5')}</CustomLi>
              <CustomLi color="light">{t('practices.taxId.lists.nextDoc.li6')}</CustomLi>
            </ul>
          </div>
          <div className={classes.procedure}>
            <div className={classes.title}>
              <TextWithLine topText={t('practices.taxId.lists.procedure.title.topText')} topColor="light">
                <span className={`${classes.bottomText} bottomTextWithLine`}>{t('practices.taxId.lists.procedure.title.bottomText')}</span>
              </TextWithLine>
            </div>
            <ul>
              <CustomLi color="light">{t('practices.taxId.lists.procedure.li1')}</CustomLi>
              <CustomLi color="light">{t('practices.taxId.lists.procedure.li2')}</CustomLi>
              <CustomLi color="light">{t('practices.taxId.lists.procedure.li3')}</CustomLi>
            </ul>
          </div>
          <div className={classes.term}>
            {t('practices.taxId.lists.term')}
          </div>
        </Container>
      </div>
      <div className={classes.application}>
        <Container className={classes.wrapper}>
          <div className="MLblock">
          <div className={classes.text}>
            {trans('practices.taxId.application.text', 'dark')}
          </div>
          </div>
          <div className={classes.button}>
            <Button text={t('practices.taxId.application.button')} onClick={()=>setIsOpened(prevState => !prevState)} />
            {isOpened && <FormModal isOpened={isOpened} setIsOpened={setIsOpened}/>}
          </div>
        </Container>
      </div>
    </>
  );
};

export default Page;
