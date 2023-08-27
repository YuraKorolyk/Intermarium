"use client"
import React from 'react';
import classes from './page.module.scss'
import Container from "@/components/Layouts/Container/Container";
import TextWithLine from "@/components/TextWithLine/TextWithLine";
import HeaderBackground from "@/components/HeaderBackground/HeaderBackground";
import Button from "@/components/Button/Button";
import CustomLi from "@/components/CustomLi/CustomLi";
import {Trans, useTranslation} from "react-i18next";


const Page = () => {
  const {t} = useTranslation()

  const trans = (path: string, color: string) => {
    return (
      <Trans
        i18nKey={t(path)}
        tOptions={{interpolation: {escapeValue: true}}}
        components={{span: <span className={color == 'dark' ? "highlightDark" : color == 'light' ? "highlightLight" : ""}/>}}
      />
    )
  }

  return (
    <>
      <HeaderBackground background="1"/>
      <div className={classes.intro}>
        <Container className={classes.wrapper}>
          <div className={classes.title}>
            <TextWithLine topText={t('practices.acquisitionOfUkrainianCitizenship.intro.title.topText')} topColor="dark">
              <span className={`${classes.bottomText} bottomTextWithLine`}>{t('practices.acquisitionOfUkrainianCitizenship.intro.title.bottomText')}</span>
            </TextWithLine>
          </div>
          <div className={classes.text}>
            <div className="MLblock">
              <p>
                {trans('practices.acquisitionOfUkrainianCitizenship.intro.text.p1', 'dark')}
              </p>
              <p className={classes.reasons}>
                <div className={classes.headline}>{t('practices.acquisitionOfUkrainianCitizenship.intro.text.p2.headline')}</div>
                <ul>
                  <CustomLi>{t('practices.acquisitionOfUkrainianCitizenship.intro.text.p2.list.li1')}</CustomLi>
                  <CustomLi>{t('practices.acquisitionOfUkrainianCitizenship.intro.text.p2.list.li2')}</CustomLi>
                  <CustomLi>{t('practices.acquisitionOfUkrainianCitizenship.intro.text.p2.list.li3')}</CustomLi>
                </ul>
              </p>
              <p>{t('practices.acquisitionOfUkrainianCitizenship.intro.text.p3')}</p>
              <p>{t('practices.acquisitionOfUkrainianCitizenship.intro.text.p4')}</p>
            </div>
          </div>
        </Container>
      </div>
      <div className={classes.lists}>
        <Container className={classes.wrapper}>
          <div className={classes.requirements}>
            <div className={classes.title}>
              <TextWithLine topText={t('practices.acquisitionOfUkrainianCitizenship.lists.requirements.title.topText')} topColor="light">
                <span className={`${classes.bottomText} bottomTextWithLine`}>{t('practices.acquisitionOfUkrainianCitizenship.lists.requirements.title.bottomText')}</span>
              </TextWithLine>
            </div>
            <ul>
              <CustomLi color="light">{t('practices.acquisitionOfUkrainianCitizenship.lists.requirements.li1')}</CustomLi>
              <CustomLi color="light">{t('practices.acquisitionOfUkrainianCitizenship.lists.requirements.li2')}</CustomLi>
              <CustomLi color="light">{t('practices.acquisitionOfUkrainianCitizenship.lists.requirements.li3')}</CustomLi>
              <CustomLi color="light">{t('practices.acquisitionOfUkrainianCitizenship.lists.requirements.li4')}</CustomLi>
              <CustomLi color="light">{t('practices.acquisitionOfUkrainianCitizenship.lists.requirements.li5')}</CustomLi>
              <CustomLi color="light">{t('practices.acquisitionOfUkrainianCitizenship.lists.requirements.li6')}</CustomLi>
              <CustomLi color="light">{t('practices.acquisitionOfUkrainianCitizenship.lists.requirements.li7')}</CustomLi>
              <CustomLi color="light">{t('practices.acquisitionOfUkrainianCitizenship.lists.requirements.li8')}</CustomLi>
            </ul>
          </div>
          <div className={classes.changes}>
            <div className={classes.title}>
              <TextWithLine topText={t('practices.acquisitionOfUkrainianCitizenship.lists.changes.title.topText')} topColor="light">
                <span className={`${classes.bottomText} bottomTextWithLine`}>{t('practices.acquisitionOfUkrainianCitizenship.lists.changes.title.bottomText')}</span>
              </TextWithLine>
            </div>
            <div className="MLblock">
              <div className={classes.text}>
                <p>{trans('practices.acquisitionOfUkrainianCitizenship.lists.changes.text.p1', 'light')}</p>
                <p>{trans('practices.acquisitionOfUkrainianCitizenship.lists.changes.text.p2', 'light')}</p>
                <p>{trans('practices.acquisitionOfUkrainianCitizenship.lists.changes.text.p3', 'light')}</p>
                <p>{trans('practices.acquisitionOfUkrainianCitizenship.lists.changes.text.p4', 'light')}</p>
                <p>{trans('practices.acquisitionOfUkrainianCitizenship.lists.changes.text.p5', 'light')}</p>
              </div>
            </div>
          </div>
        </Container>
      </div>
      <div className={classes.application}>
        <Container className={classes.wrapper}>
          <div className="MLblock">
            <div className={classes.text}>
              Процедура отримання громадянства доволі складна і ми не рекомендуємо розпочинати процес самостійно без
              допомоги кваліфікованого юриста тому якщо ви виявили бажання отримати громадянство України <span
              className="highlightDark">імміграційні юристи юридичної компанії Intermarium допоможуть вам</span> заповнити
              і зібрати необхідний перелік документів виходячи з індивідуальної ситуації кожного клієнта, подати їх
              до державних органів і пройти всю процедуру строго в строк і без відмов.
            </div>
          </div>
          <div className={classes.button}>
            <Button text="Залишити заявку"/>
          </div>
        </Container>
      </div>
    </>
  );
};

export default Page;
