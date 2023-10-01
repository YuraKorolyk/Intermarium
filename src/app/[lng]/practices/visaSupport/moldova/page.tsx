'use client';
import React, {useState} from 'react';
import HeaderBackground from "@/components/HeaderBackground/HeaderBackground";
import Container from "@/components/Layouts/Container/Container";
import classes from "./page.module.scss";
import TextWithLine from "@/components/TextWithLine/TextWithLine";
import Button from "@/components/Button/Button";
import One from "../../../../../../public/assets/icons/Numbers/One";
import Two from "../../../../../../public/assets/icons/Numbers/Two";
import Three from "../../../../../../public/assets/icons/Numbers/Three";
import Four from "../../../../../../public/assets/icons/Numbers/Four";
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
        <title>{t('practices.moldova.pageTitle')}</title>
      </Head>
      <HeaderBackground background="3"/>
      <div className={classes.intro}>
        <Container className={classes.wrapper}>
          <div className={classes.title}>
            <TextWithLine topText={t('practices.moldova.intro.title.topText')} topColor="dark">
              <span className={`${classes.bottomText} bottomTextWithLine`}>{t('practices.moldova.intro.title.bottomText')}</span>
            </TextWithLine>
          </div>
          <div className="MLblock">
            <div className={classes.text}>
              {t('practices.moldova.intro.text')}
            </div>
          </div>
          <div className={classes.button}>
            <Button text={t('practices.moldova.intro.button')} onClick={()=>setIsOpened(prevState => !prevState)} />
            {isOpened && <FormModal isOpened={isOpened} setIsOpened={setIsOpened}/>}
          </div>
        </Container>
      </div>
      <div className={classes.home}>
        <Container className={classes.wrapper}>
          <div className={classes.title}>
            <TextWithLine topText={t('practices.moldova.home.title.topText')} topColor="light">
              <span className={`${classes.bottomText} bottomTextWithLine`}>{t('practices.moldova.home.title.bottomText')}</span>
            </TextWithLine>
          </div>
          <div className={classes.block}>
            <div className={classes.list}>
              <div className={classes.item}>
                <div className={classes.number}>
                  <One/>
                </div>
                <div className={classes.text}>
                  {t('practices.moldova.home.one')}
                </div>
              </div>
              <div className={classes.item}>
                <div className={classes.number}>
                  <Two/>
                </div>
                <div className={classes.text}>
                  {t('practices.moldova.home.two')}
                </div>
              </div>
              <div className={classes.item}>
                <div className={classes.number}>
                  <Three/>
                </div>
                <div className={classes.text}>
                  {t('practices.moldova.home.three')}
                </div>
              </div>
              <div className={classes.item}>
                <div className={classes.number}>
                  <Four/>
                </div>
                <div className={classes.text}>
                  {t('practices.moldova.home.four')}
                </div>
              </div>
            </div>
            <div className={classes.subtext}>
              {trans('practices.moldova.home.subtext', 'light')}
            </div>
          </div>
        </Container>
      </div>
      <div className={classes.ukraine}>
        <Container className={classes.wrapper}>
          <div className={classes.title}>
            <TextWithLine topText={t('practices.moldova.ukraine.title.topText')} topColor="light">
              <span className={`${classes.bottomText} bottomTextWithLine`}>{t('practices.moldova.ukraine.title.bottomText')}</span>
            </TextWithLine>
          </div>
         <div className="MLblock">
           <div className={classes.text}>
             {t('practices.moldova.ukraine.text')}
           </div>
         </div>
        </Container>
      </div>
      <div className={classes.transit}>
        <Container className={classes.wrapper}>
          <div className={classes.title}>
            <TextWithLine topText={t('practices.moldova.transit.title.topText')} topColor="dark">
              <span className={`${classes.bottomText} bottomTextWithLine`}>{t('practices.moldova.transit.title.bottomText')}</span>
            </TextWithLine>
          </div>
          <div className="MLblock">
            <div className={classes.text}>
              {trans('practices.moldova.transit.text', 'dark')}
            </div>
            <div className={classes.listOfCountries}>
              {t('practices.moldova.transit.listOfCountries')}
              <div className={classes.listWrapper}>
                <ul>
                  <CustomLi>{t('practices.moldova.transit.li1')}</CustomLi>
                  <CustomLi>{t('practices.moldova.transit.li2')}</CustomLi>
                  <CustomLi>{t('practices.moldova.transit.li3')}</CustomLi>
                  <CustomLi>{t('practices.moldova.transit.li4')}</CustomLi>
                  <CustomLi>{t('practices.moldova.transit.li5')}</CustomLi>
                  <CustomLi>{t('practices.moldova.transit.li6')}</CustomLi>
                  <CustomLi>{t('practices.moldova.transit.li7')}</CustomLi>
                  <CustomLi>{t('practices.moldova.transit.li8')}</CustomLi>
                  <CustomLi>{t('practices.moldova.transit.li9')}</CustomLi>
                </ul>
              </div>
            </div>
          </div>
        </Container>
      </div>
      <div className={classes.tourist}>
        <Container className={classes.wrapper}>
          <div className={classes.title}>
            <TextWithLine topText={t('practices.moldova.tourist.title.topText')} topColor="dark">
              <span className={`${classes.bottomText} bottomTextWithLine`}>{t('practices.moldova.tourist.title.bottomText')}</span>
            </TextWithLine>
          </div>

          <div className="MLblock">
            <div className={classes.text}>
              {trans('practices.moldova.tourist.text', 'dark')}
            </div>
          </div>
        </Container>
      </div>
    </>
  )
};

export default Page;
