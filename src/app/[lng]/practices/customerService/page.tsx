'use client';
import React from 'react';
import HeaderBackground from "@/components/HeaderBackground/HeaderBackground";
import classes from './page.module.scss';
import Container from "@/components/Layouts/Container/Container";
import TextWithLine from "@/components/TextWithLine/TextWithLine";
import LinkWithDropdown from "@/components/LinkWithDropdown/LinkWithDropdown";
import One from "../../../../../public/assets/icons/Numbers/One";
import Two from "../../../../../public/assets/icons/Numbers/Two";
import Three from "../../../../../public/assets/icons/Numbers/Three";
import Four from "../../../../../public/assets/icons/Numbers/Four";
import Five from "../../../../../public/assets/icons/Numbers/Five";
import Six from "../../../../../public/assets/icons/Numbers/Six";
import Seven from "../../../../../public/assets/icons/Numbers/Seven";
import Eight from "../../../../../public/assets/icons/Numbers/Eight";
import Nine from "../../../../../public/assets/icons/Numbers/Nine";
import Button from "@/components/Button/Button";
import CustomLi from "@/components/CustomLi/CustomLi";
import {useTranslation} from "react-i18next";
import {trans} from "@/services";

const Page = () => {
  const {t} = useTranslation();
  return (
    <>
      <HeaderBackground background='5'/>
      <div className={classes.intro}>
        <Container className={classes.wrapper}>
          <div className={classes.title}>
            <TextWithLine topText={t('practices.legalBusinessSupport.intro.title.topText')} topColor="dark">
              <span className={`${classes.bottomText} bottomTextWithLine`}>{t('practices.legalBusinessSupport.intro.title.bottomText')}</span>
            </TextWithLine>
          </div>
          <div className={classes.text}>
            <p>{trans('practices.legalBusinessSupport.intro.text.p1', 'dark')}</p>
            <p>{trans('practices.legalBusinessSupport.intro.text.p2', 'dark')}</p>
            <p>{trans('practices.legalBusinessSupport.intro.text.p3', 'dark')}</p>
          </div>
        </Container>
      </div>
      <div className={classes.receive}>
        <Container className={classes.wrapper}>
          <div className={classes.title}>
            <TextWithLine topText={t('practices.legalBusinessSupport.receive.title.topText')} topColor="light">
              <span className={`${classes.bottomText} bottomTextWithLine`}>{t('practices.legalBusinessSupport.receive.title.bottomText')}</span>
            </TextWithLine>
          </div>
          <div className={classes.list}>
            <LinkWithDropdown
              dropdown="none"
              title={t('practices.legalBusinessSupport.receive.one')}
            >
              <One/>
            </LinkWithDropdown>
            <LinkWithDropdown
              dropdown="none"
              title={t('practices.legalBusinessSupport.receive.two')}
            >
              <Two/>
            </LinkWithDropdown>
            <LinkWithDropdown
              dropdown="none"
              title={t('practices.legalBusinessSupport.receive.three')}
            >
              <Three/>
            </LinkWithDropdown>
            <LinkWithDropdown
              dropdown="none"
              title={t('practices.legalBusinessSupport.receive.four')}
            >
              <Four/>
            </LinkWithDropdown>
            <LinkWithDropdown
              dropdown="none"
              title={t('practices.legalBusinessSupport.receive.five')}
            >
              <Five/>
            </LinkWithDropdown>
            <LinkWithDropdown
              dropdown="none"
              title={t('practices.legalBusinessSupport.receive.six')}
            >
              <Six/>
            </LinkWithDropdown>
            <LinkWithDropdown
              dropdown="none"
              title={t('practices.legalBusinessSupport.receive.seven')}
            >
              <Seven/>
            </LinkWithDropdown>
            <LinkWithDropdown
              dropdown="none"
              title={t('practices.legalBusinessSupport.receive.eight')}
            >
              <Eight/>
            </LinkWithDropdown>
            <LinkWithDropdown
              dropdown="none"
              title={t('practices.legalBusinessSupport.receive.nine')}
            >
              <Nine/>
            </LinkWithDropdown>
          </div>
        </Container>
      </div>
      <div className={classes.preferences}>
        <Container className={classes.wrapper}>
          <div className={classes.title}>{t('practices.legalBusinessSupport.preferences.title')}</div>
          <ul>
            <CustomLi>{t('practices.legalBusinessSupport.preferences.li1')}</CustomLi>
            <CustomLi>{t('practices.legalBusinessSupport.preferences.li2')}</CustomLi>
            <CustomLi>{t('practices.legalBusinessSupport.preferences.li3')}</CustomLi>
            <CustomLi>{t('practices.legalBusinessSupport.preferences.li4')}</CustomLi>
            <CustomLi>{t('practices.legalBusinessSupport.preferences.li5')}</CustomLi>
            <CustomLi>{t('practices.legalBusinessSupport.preferences.li6')}</CustomLi>
            <CustomLi>{t('practices.legalBusinessSupport.preferences.li7')}</CustomLi>
            <CustomLi>{t('practices.legalBusinessSupport.preferences.li8')}</CustomLi>
          </ul>
          <div className={classes.text}>
            <p>{trans('practices.legalBusinessSupport.preferences.text.p1', 'dark')}</p>
            <p>{trans('practices.legalBusinessSupport.preferences.text.p2', 'dark')}</p>
          </div>
          <div className={classes.button}>
            <Button text={t('practices.legalBusinessSupport.preferences.button')}/>
          </div>
        </Container>
      </div>
    </>
  );
};

export default Page;
