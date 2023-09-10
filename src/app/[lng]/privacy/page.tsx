'use client';

import React from 'react';
import classes from './page.module.scss';
import Container from "@/components/Layouts/Container/Container";
import TextWithLine from "@/components/TextWithLine/TextWithLine";
import CustomAnchorLi from "@/components/CustomAnchorLi/CustomAnchorLi";
import {Trans, useTranslation} from "react-i18next";
import {t} from "i18next";

const Page = () => {
  const {t} = useTranslation();
  const transHighlights = (path: string) => {
    return (
      <Trans
        i18nKey={t(path)}
        tOptions={{interpolation: {escapeValue: true}}}
        components={{
          span: <span className={classes.highlights}/>
        }}
      />
    )
  }


  return (
    <>
      <div className={classes.intro}>
        <Container className={classes.wrapper}>
          <div className={classes.title}>
            {t('privacy.intro.title')}
          </div>
          <div className={classes.lastUpdate}>
            {t('privacy.intro.lastUpdate')}
          </div>
        </Container>
      </div>
      <div className={classes.contents}>
        <Container className={classes.wrapper}>
          <div className={classes.title}>
            {t('privacy.contents.title')}
          </div>
          <ul>
            <CustomAnchorLi targetId="conditions">{t('privacy.contents.li1')}</CustomAnchorLi>
            <CustomAnchorLi targetId="use">{t('privacy.contents.li2')}</CustomAnchorLi>
            <CustomAnchorLi targetId="rights">{t('privacy.contents.li3')}</CustomAnchorLi>
            <CustomAnchorLi targetId="dataContent">{t('privacy.contents.li4')}</CustomAnchorLi>
            <CustomAnchorLi targetId="humanRights">{t('privacy.contents.li5')}</CustomAnchorLi>
            <CustomAnchorLi targetId="update">{t('privacy.contents.li6')}</CustomAnchorLi>
          </ul>
        </Container>
      </div>
      <div className={classes.list}>
        <Container className={classes.wrapper}>
          <div className={`${classes.item} ${classes.first}`} id="conditions">
            <div className={classes.title}>
              <TextWithLine topText={t('privacy.list.conditions.title.topText')} topColor="dark">
                <span
                  className={`${classes.bottomText} bottomTextWithLine`}>{t('privacy.list.conditions.title.bottomText')}</span>
              </TextWithLine>
            </div>
            <div className={classes.text}>
              <p>{t('privacy.list.conditions.text.p1')}</p>
              <p>{t('privacy.list.conditions.text.p2')}</p>
            </div>
          </div>
          <div className={`${classes.item} ${classes.second}`} id="use">
            <div className={classes.title}>
              <TextWithLine topText={t('privacy.list.use.title.topText')} topColor="dark">
                <span
                  className={`${classes.bottomText} bottomTextWithLine`}>{t('privacy.list.use.title.bottomText')}</span>
              </TextWithLine>
            </div>
            <div className={classes.text}>
              <p>{t('privacy.list.use.text.p1')}</p>
              <p>{t('privacy.list.use.text.p2')}</p>
            </div>
          </div>
          <div className={`${classes.item} ${classes.third}`} id="rights">
            <div className={classes.title}>
              <TextWithLine topText={t('privacy.list.use.title.topText')} topColor="dark">
                <span
                  className={`${classes.bottomText} bottomTextWithLine`}>{t('privacy.list.use.title.topText')}</span>
              </TextWithLine>
            </div>
            <div className={classes.text}>
              <p>{t('privacy.list.rights.text.p1')}</p>
              <p>{t('privacy.list.rights.text.p2')}</p>
            </div>
          </div>

          <div className={`${classes.item} ${classes.fourth}`} id="dataContent">
            <div className={classes.title}>
              <TextWithLine topText={t('privacy.list.dataContent.title.topText')} topColor="dark">
                <span
                  className={`${classes.bottomText} bottomTextWithLine`}>{t('privacy.list.dataContent.title.bottomText')}</span>
              </TextWithLine>
            </div>
            <div className={classes.text}>
              <p>{t('privacy.list.dataContent.text.p1')}</p>
              <p>
                {t('privacy.list.dataContent.text.p2.title')}
                <ul>
                  <li>{t('privacy.list.dataContent.text.p2.li1')}</li>
                </ul>
              </p>
              <p>
                {t('privacy.list.dataContent.text.p3.title')}

                <ul>
                  <li>{t('privacy.list.dataContent.text.p3.li1')}</li>
                  <li>{t('privacy.list.dataContent.text.p3.li2')}</li>
                  <li>{t('privacy.list.dataContent.text.p3.li3')}</li>
                  <li>{t('privacy.list.dataContent.text.p3.li4')}</li>
                </ul>
              </p>
              <p>{t('privacy.list.dataContent.text.p4')}</p>
              <p className={classes.strong}>{t('privacy.list.dataContent.text.p5')}</p>
            </div>
          </div>
          <div className={`${classes.item} ${classes.fifth}`} id="humanRights">
            <div className={classes.title}>
              <TextWithLine topText={t('privacy.list.humanRights.title.topText')} topColor="dark">
                <span
                  className={`${classes.bottomText} bottomTextWithLine`}>{t('privacy.list.humanRights.title.bottomText')}</span>
              </TextWithLine>
            </div>
            <div className={classes.text}>
              <p>{t('privacy.list.humanRights.text.p1')}</p>
              <p>
                <ul>
                  <li>{transHighlights('privacy.list.humanRights.text.p2.li1')}</li>
                  <li>{transHighlights('privacy.list.humanRights.text.p2.li2')}</li>
                  <li>{transHighlights('privacy.list.humanRights.text.p2.li3')}</li>
                  <li>{transHighlights('privacy.list.humanRights.text.p2.li4')}</li>
                  <li>{transHighlights('privacy.list.humanRights.text.p2.li5')}</li>
                  <li>{transHighlights('privacy.list.humanRights.text.p2.li6')}</li>
                </ul>
              </p>
              <p>
                <Trans
                  i18nKey={t('privacy.list.humanRights.text.p3')}
                  tOptions={{interpolation: {escapeValue: true}}}
                  components={{
                    span: <span className={classes.highlightsP}/>
                  }}
                />
              </p>
              <p>{t('privacy.list.humanRights.text.p4')}</p>
            </div>
          </div>
          <div className={`${classes.item} ${classes.sixth}`} id="update">
            <div className={classes.title}>
              <TextWithLine topText={t('privacy.list.update.title.topText')} topColor="dark">
                <span className={`${classes.bottomText} bottomTextWithLine`}>{t('privacy.list.update.title.bottomText')}</span>
              </TextWithLine>
            </div>
            <div className={classes.text}>
              <p>{t('privacy.list.update.text.p1')}</p>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
};

export default Page;
