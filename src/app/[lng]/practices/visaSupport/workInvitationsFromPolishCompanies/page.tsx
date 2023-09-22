'use client';
import React, {useState} from 'react';
import HeaderBackground from "@/components/HeaderBackground/HeaderBackground";
import Container from "@/components/Layouts/Container/Container";
import classes from "./page.module.scss";
import TextWithLine from "@/components/TextWithLine/TextWithLine";
import Button from "@/components/Button/Button";
import One from "../../../../../../public/assets/icons/Numbers/One";
import Two from "../../../../../../public/assets/icons/Numbers/Two";
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
            <TextWithLine topText={t('practices.workInvitationsFromPolishCompanies.intro.title.topText')} topColor="dark">
              <span className={`${classes.bottomText} bottomTextWithLine`}>{t('practices.workInvitationsFromPolishCompanies.intro.title.bottomText')}</span>
            </TextWithLine>
          </div>
          <div className="MLblock">
            <div className={classes.text}>
              {trans('practices.workInvitationsFromPolishCompanies.intro.text', 'dark')}
            </div>
          </div>
          <div className={classes.list}>
            <div className={classes.item}>
              <div className={classes.number}>
                <One fill="#286E8D"/>
              </div>
              <div className={classes.itemText}>
                {t('practices.workInvitationsFromPolishCompanies.intro.one')}
              </div>
            </div>
            <div className={classes.item}>
              <div className={classes.number}>
                <Two fill="#286E8D"/>
              </div>
              <div className={classes.itemText}>
                {t('practices.workInvitationsFromPolishCompanies.intro.two')}
              </div>
            </div>
          </div>
          <div className={classes.also}>
            {trans('practices.workInvitationsFromPolishCompanies.intro.also', 'dark')}
          </div>
          <div className={classes.button}>
            <Button text={t('practices.workInvitationsFromPolishCompanies.intro.button')} onClick={()=>setIsOpened(prevState => !prevState)} />
            {isOpened && <FormModal isOpened={isOpened} setIsOpened={setIsOpened}/>}
          </div>
        </Container>
      </div>
    </>
  );
};

export default Page;
