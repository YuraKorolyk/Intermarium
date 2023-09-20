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
import React, {useEffect, useState} from "react";
import {useRouter} from "next/navigation";
import {Trans, useTranslation} from "react-i18next";
import Form from "@/components/Form/Form";
import Script from "next/script";

// import {useTranslation} from "@/app/i18n/client";
interface HomeProps {
  params: {
    lng: string;
  }
}


export default function Home({params: {lng}}: HomeProps) {
  const router = useRouter();
  // const { t } = useTranslation(lng, "client-page")
  const {t, i18n} = useTranslation();
  const practiceClickHandler = (linkTo: string): void => {
    router.push(`/practices/${linkTo}`)
  }
  const [test, setTest] = useState(false)
  useEffect(() => {
    setTest(prevState => !prevState)
  }, [i18n.language]);
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
            <img src="/assets/images/bothVertical.webp" alt=""/>
            {/*<Image src="/assets/images/bothVertical.jpg" alt="bg"/>*/}
          </div>
          <div className={classes.title}>
            <TextWithLine topText={t('homePage.mission.title.topText')} topColor="dark">
              <span
                className={`${classes.bottomText} bottomTextWithLine`}>{t('homePage.mission.title.bottomText')}</span>
            </TextWithLine>
          </div>
          <div className={classes.text}>
            <div className={classes.description}>
              <Trans
                i18nKey={t('homePage.mission.text')}
                tOptions={{interpolation: {escapeValue: true}}}
                components={{span: <span className="highlightDark"/>}}
              />
            </div>
            <div className={classes.buttonBox}>
              <Button text={t('homePage.mission.button')} onClick={() => router.push(`/${lng}/about`)}/>
            </div>
          </div>
        </Container>
      </div>
      <div className={classes.whyWe}>
        <Container className={classes.wrapper}>
          <div className={classes.title}>
            <TextWithLine topText={t('homePage.whyWe.title.topText')} topColor="light">
              <span className={`${classes.bottomText} bottomTextWithLine`}>{t('homePage.whyWe.title.bottomText')}</span>
            </TextWithLine>
          </div>
          <div className={classes.list}>
            <div className={classes.numbers}>
              <div className={classes.iconBox}>
                <One/>
              </div>
              <div className={classes.mobTitle}>
                {t('homePage.whyWe.first.title')}
              </div>
            </div>
            <div className={classes.text}>
              <div className={classes.textTitle}>
                {t('homePage.whyWe.first.title')}
              </div>
              <div className={classes.description}>
                {t('homePage.whyWe.first.text')}
              </div>
            </div>
          </div>
          <div className={classes.list}>
            <div className={classes.numbers}>
              <div className={classes.iconBox}>
                <Two/>
              </div>
              <div className={classes.mobTitle}>
                {t('homePage.whyWe.second.title')}
              </div>
            </div>
            <div className={classes.text}>
              <div className={classes.textTitle}>
                {t('homePage.whyWe.second.title')}
              </div>
              <div className={classes.description}>
                {t('homePage.whyWe.second.text')}
              </div>
            </div>
          </div>
          <div className={classes.list}>
            <div className={classes.numbers}>
              <div className={classes.iconBox}>
                <Three/>
              </div>
              <div className={classes.mobTitle}>
                {t('homePage.whyWe.third.title')}
              </div>
            </div>
            <div className={classes.text}>
              <div className={classes.textTitle}>
                {t('homePage.whyWe.third.title')}
              </div>
              <div className={classes.description}>
                {t('homePage.whyWe.third.text')}
              </div>
            </div>
          </div>
        </Container>
      </div>
      <div className={classes.practices}>
        <Container className={classes.wrapper}>
          <div className={classes.title}>
            <TextWithLine topText={t('homePage.practices.title.topText')} topColor="dark">
              <span
                className={`${classes.bottomText} bottomTextWithLine`}>{t('homePage.practices.title.bottomText')}</span>
            </TextWithLine>
          </div>
          <div className={classes.list}>
            <Practice
              bg="1"
              title={t('homePage.practices.migrationLaw.title')}
              description={t('homePage.practices.migrationLaw.description')}
              isAlone={false}
              onClick={() => practiceClickHandler('migrationLaw')}
            />
            <Practice
              bg="2"
              title={t('homePage.practices.corporateLaw.title')}
              description={t('homePage.practices.corporateLaw.description')}
              isAlone={false}
              onClick={() => practiceClickHandler('corporateLaw')}
            />
            <Practice
              bg="3"
              title={t('homePage.practices.visaSupport.title')}
              description={t('homePage.practices.visaSupport.description')}
              isAlone={false}
              onClick={() => practiceClickHandler('visaSupport')}
            />
            <Practice
              bg="4"
              title={t('homePage.practices.dueDiligence.title')}
              description={t('homePage.practices.dueDiligence.description')}
              isAlone={false}
              onClick={() => practiceClickHandler('dueDiligence')}
            />
            <Practice
              bg="5"
              title={t('homePage.practices.customerService.title')}
              description={t('homePage.practices.customerService.description')}
              isAlone={true}
              onClick={() => practiceClickHandler('customerService')}
            />
          </div>
        </Container>
      </div>
      <div className={classes.blog}>
        <Container className={classes.wrapper}>
          <div className={classes.title}>
            <TextWithLine topText={t('homePage.blog.title.topText')} topColor="light">
              <span className={`${classes.bottomText} bottomTextWithLine`}>{t('homePage.blog.title.bottomText')}</span>
            </TextWithLine>
          </div>
          <div className={classes.list}>
            <Article author="Taras" date="16/06/2023"
                     title={t('homePage.blog.firstArticle')}
                     linkTo={'lawForPoles'}
            />
            <Article author="Taras" date="08/06/2023"
                     title={t('homePage.blog.secondArticle')}
                     linkTo={'draftLaw5795'}
            />
            <Article author="Taras" date="02/06/2023" title={t('homePage.blog.thirdArticle')}
                     linkTo={'e-residency'}
            />
          </div>
          <div className={classes.buttonBox}>
            <Button hoverColor='white' text={t('homePage.blog.button')} onClick={() => router.push(`/${lng}/blog`)}/>
          </div>
        </Container>
      </div>
      <div className={classes.application}>
          <div className={classes.formBig}>
            <Form/>
            {/*{!test ? <div className="leeloo-hash-83fp7e"></div> : <div/>}*/}
            {/*{i18n.language === 'ua' ? <div className="leeloo-hash-83fp7e"></div> : <div className="leeloo-hash-xly3l4"></div>}*/}
          </div>
      </div>
      <div className={classes.formSmall}>
        {/*{i18n.language === 'ua' ? <div className="leeloo-hash-83fp7e"></div> : <div className="leeloo-hash-xly3l4"></div>}*/}

        <Form/>
      </div>
  {/*<Script id="modal-code">{`window.LEELOO_LEADGENTOOLS = (window.LEELOO_LEADGENTOOLS || []).concat('qtl49u');`}</Script>*/}
    </>
  )
}
