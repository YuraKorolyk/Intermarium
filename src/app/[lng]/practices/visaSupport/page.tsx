'use client';
import React, {useState} from 'react';
import HeaderBackground from "@/components/HeaderBackground/HeaderBackground";
import Container from "@/components/Layouts/Container/Container";
import classes from "./page.module.scss";
import TextWithLine from "@/components/TextWithLine/TextWithLine";
import One from "../../../../../public/assets/icons/Numbers/One";
import LinkWithDropdown from "@/components/LinkWithDropdown/LinkWithDropdown";
import Two from "../../../../../public/assets/icons/Numbers/Two";
import Three from "../../../../../public/assets/icons/Numbers/Three";
import Four from "../../../../../public/assets/icons/Numbers/Four";
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
      <HeaderBackground background="3"/>
      <div className={classes.intro}>
        <Container className={classes.wrapper}>
          <div className={classes.title}>
            <TextWithLine topText={t('practices.visaSupport.intro.title.topText')} topColor="dark">
              <span className={`${classes.bottomText} bottomTextWithLine`}>{t('practices.visaSupport.intro.title.bottomText')}</span>
            </TextWithLine>
          </div>
          <div className={classes.text}>
            <p>{trans('practices.visaSupport.intro.text.p1', 'dark')}</p>
            <p>{trans('practices.visaSupport.intro.text.p2', 'dark')}</p>
          </div>
        </Container>
      </div>
      <div className={classes.questions}>
        <Container className={classes.wrapper}>
          <div className={classes.title}>
            <TextWithLine topText={t('practices.visaSupport.questions.title.topText')} topColor="light">
              <span className={`${classes.bottomText} bottomTextWithLine`}>{t('practices.visaSupport.questions.title.bottomText')}</span>
            </TextWithLine>
          </div>
          <div className={classes.link}>
            <LinkWithDropdown
              dropdown="link"
              title={t('practices.visaSupport.questions.one')}
              linkTo="moldova"
            >
              <One/>
            </LinkWithDropdown>
            <LinkWithDropdown
              dropdown="link"
              title={t('practices.visaSupport.questions.two')}
              linkTo="poland"
            >
              <Two/>
            </LinkWithDropdown>
            <LinkWithDropdown
              dropdown="link"
              title={t('practices.visaSupport.questions.three')}
              linkTo="workInvitationsFromPolishCompanies"
            >
              <Three/>
            </LinkWithDropdown>
            <LinkWithDropdown
              dropdown="link"
              title={t('practices.visaSupport.questions.four')}
              linkTo="EResidency"
            >
              <Four/>
            </LinkWithDropdown>

          </div>
        </Container>
      </div>
      <div className={classes.help}>
        <Container className={classes.wrapper}>
          <div className={classes.title}>
            {t('practices.visaSupport.help.title')}
          </div>
          <div className={classes.list}>
            <ul>
              <CustomLi>{t('practices.visaSupport.help.li1')}</CustomLi>
              <CustomLi>{t('practices.visaSupport.help.li2')}</CustomLi>
              <CustomLi>{t('practices.visaSupport.help.li3')}</CustomLi>
              <CustomLi>{t('practices.visaSupport.help.li4')}</CustomLi>
              <CustomLi>{t('practices.visaSupport.help.li5')}</CustomLi>
              <CustomLi>{t('practices.visaSupport.help.li6')}</CustomLi>
            </ul>
            <Button text={t('practices.visaSupport.help.button')} onClick={()=>setIsOpened(prevState => !prevState)} />
            {isOpened && <FormModal isOpened={isOpened} setIsOpened={setIsOpened}/>}
          </div>
        </Container>
      </div>
    </>
  );
};

export default Page;
