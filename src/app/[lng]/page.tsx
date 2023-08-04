"use client"
import Container from "@/components/Layouts/Container/Container";
import CircleLogo from "../../../public/assets/icons/CircleLogo";
import classes from "./page.module.scss"
import TextWithLine from "@/components/TextWithLine/TextWithLine";
import One from "../../../public/assets/icons/Numbers/One";
import Three from "../../../public/assets/icons/Numbers/Three";
import Two from "../../../public/assets/icons/Numbers/Two";
import Practice from "@/components/Practice/Practice";
import Article from "@/components/Article/Article";
import Button from "@/components/Button/Button";
import React from "react";
import {useRouter} from "next/navigation";
import {Trans, useTranslation} from "react-i18next";

// import {useTranslation} from "@/app/i18n/client";
interface HomeProps {
  params: {
    lng: string;
  }
}


export default function Home({params: {lng}}: HomeProps) {
  const router = useRouter();
  // const { t } = useTranslation(lng, "client-page")
  const {t} = useTranslation('homePage');
  const practiceClickHandler = (linkTo: string): void => {
    router.push(`/practices/${linkTo}`)
  }

  return (
    <>
      <div className={classes.intro}>
        <Container className={classes.wrapper}>
          <div className={classes.block}>
            <div className={classes.logoBox}>
              <CircleLogo/>
            </div>
            <span className={classes.text}>AUT CUM SCUTO,<br/>aut in scuto</span>
          </div>
        </Container>
      </div>
      <div className={classes.mission}>
        <Container className={classes.wrapper}>
          <div className={classes.imageBox}>
            <img src="/assets/images/bothVertical.jpg" alt=""/>
            {/*<Image src="/assets/images/bothVertical.jpg" alt="bg"/>*/}
          </div>
          <div className={classes.title}>
            <TextWithLine topText={t('mission.title.topText')} topColor="dark">
              <span className={`${classes.bottomText} bottomTextWithLine`}>{t('mission.title.bottomText')}</span>
            </TextWithLine>
          </div>
          <div className={classes.text}>
            <div className={classes.description}>
              <Trans
                i18nKey={t('mission.text')}
                tOptions={{interpolation: {escapeValue: true}}}
                components={{span: <span className="highlightDark"/>}}
              />
            </div>

            {/*<div className={classes.description} dangerouslySetInnerHTML={{ __html: t('mission.text') }} />*/}

            <div className={classes.buttonBox}>
              <Button text={t('mission.button')} onClick={() => router.push(`/${lng}/about`)}/>
            </div>
          </div>
        </Container>
      </div>
      <div className={classes.whyWe}>
        <Container className={classes.wrapper}>
          <div className={classes.title}>
            <TextWithLine topText={t('whyWe.title.topText')} topColor="light">
              <span className={`${classes.bottomText} bottomTextWithLine`}>{t('whyWe.title.bottomText')}</span>
            </TextWithLine>
          </div>
          <div className={classes.list}>
            <div className={classes.numbers}>
              <div className={classes.iconBox}>
                <One/>
              </div>
              <div className={classes.mobTitle}>
                {t('whyWe.first.title')}
              </div>
            </div>
            <div className={classes.text}>
              <div className={classes.textTitle}>
                {t('whyWe.first.title')}
              </div>
              <div className={classes.description}>
                {t('whyWe.first.text')}
              </div>
            </div>
          </div>
          <div className={classes.list}>
            <div className={classes.numbers}>
              <div className={classes.iconBox}>
                <Two/>
              </div>
              <div className={classes.mobTitle}>
                {t('whyWe.second.title')}
              </div>
            </div>
            <div className={classes.text}>
              <div className={classes.textTitle}>
                {t('whyWe.second.title')}
              </div>
              <div className={classes.description}>
                {t('whyWe.second.text')}
              </div>
            </div>
          </div>
          <div className={classes.list}>
            <div className={classes.numbers}>
              <div className={classes.iconBox}>
                <Three/>
              </div>
              <div className={classes.mobTitle}>
                {t('whyWe.third.title')}
              </div>
            </div>
            <div className={classes.text}>
              <div className={classes.textTitle}>
                {t('whyWe.third.title')}
              </div>
              <div className={classes.description}>
                {t('whyWe.third.text')}
              </div>
            </div>
          </div>
        </Container>
      </div>
      <div className={classes.practices}>
        <Container className={classes.wrapper}>
          <div className={classes.title}>
            <TextWithLine topText={t('practices.title.topText')} topColor="dark">
              <span className={`${classes.bottomText} bottomTextWithLine`}>{t('practices.title.bottomText')}</span>
            </TextWithLine>
          </div>
          <div className={classes.list}>
            <Practice
              bg="1"
              title={t('practices.migrationLaw.title')}
              description={t('practices.migrationLaw.description')}
              isAlone={false}
              onClick={() => practiceClickHandler('migrationLaw')}
            />
            <Practice
              bg="2"
              title={t('practices.corporateLaw.title')}
              description={t('practices.corporateLaw.description')}
              isAlone={false}
              onClick={() => practiceClickHandler('corporateLaw')}
            />
            <Practice
              bg="3"
              title={t('practices.visaSupport.title')}
              description={t('practices.visaSupport.description')}
              isAlone={false}
              onClick={() => practiceClickHandler('visaSupport')}
            />
            <Practice
              bg="4"
              title={t('practices.dueDiligence.title')}
              description={t('practices.dueDiligence.description')}
              isAlone={false}
              onClick={() => practiceClickHandler('dueDiligence')}
            />
            <Practice
              bg="5"
              title={t('practices.customerService.title')}
              description={t('practices.customerService.description')}
              isAlone={true}
              onClick={() => practiceClickHandler('customerService')}
            />
          </div>
        </Container>
      </div>
      <div className={classes.blog}>
        <Container className={classes.wrapper}>
          <div className={classes.title}>
            <TextWithLine topText={t('blog.title.topText')} topColor="light">
              <span className={`${classes.bottomText} bottomTextWithLine`}>{t('blog.title.bottomText')}</span>
            </TextWithLine>
          </div>
          <div className={classes.list}>
            <Article author="Taras" date="16/06/2023"
                     title={t('blog.firstArticle')}/>
            <Article author="Taras" date="08/06/2023"
                     title={t('blog.secondArticle')}/>
            <Article author="Taras" date="02/06/2023" title={t('blog.thirdArticle')}/>
          </div>
          <div className={classes.buttonBox}>
            <Button text={t('blog.button')}/>
          </div>
        </Container>
      </div>
      <div className={classes.application}>
        <Container className={classes.wrapper}>
        </Container>
      </div>
    </>
  )
}
