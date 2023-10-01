'use client';
import React, {useState} from 'react';
import classes from './page.module.scss'
import Container from "@/components/Layouts/Container/Container";
import TextWithLine from "@/components/TextWithLine/TextWithLine";
import HeaderBackground from "@/components/HeaderBackground/HeaderBackground";
import LinkWithDropdown from "@/components/LinkWithDropdown/LinkWithDropdown";
import One from "../../../../../../public/assets/icons/Numbers/One";
import Five from "../../../../../../public/assets/icons/Numbers/Five";
import Four from "../../../../../../public/assets/icons/Numbers/Four";
import Three from "../../../../../../public/assets/icons/Numbers/Three";
import Two from "../../../../../../public/assets/icons/Numbers/Two";
import Button from "@/components/Button/Button";
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
        <title>{t('practices.workPermitInUkraine.pageTitle')}</title>
      </Head>
      <HeaderBackground background="1"/>
      <div className={classes.intro}>
        <Container className={classes.wrapper}>
          <div className={classes.title}>
            <TextWithLine topText={t('practices.workPermitInUkraine.intro.title.topText')} topColor="dark">
              <span className={`${classes.bottomText} bottomTextWithLine`}>{t('practices.workPermitInUkraine.intro.title.bottomText')}</span>
            </TextWithLine>
          </div>
          <div className="MLblock">
            <div className={classes.text}>
              <p>{trans('practices.workPermitInUkraine.intro.text.p1', 'dark')}</p>
              <p>{trans('practices.workPermitInUkraine.intro.text.p2', 'dark')}</p>
              <p>{trans('practices.workPermitInUkraine.intro.text.p3', 'dark')}</p>
            </div>
          </div>
        </Container>
      </div>
      <div className={classes.detail}>
        <Container className={classes.wrapper}>
          <div className={classes.title}>
            <TextWithLine topText={t('practices.workPermitInUkraine.detail.title.topText')} topColor="light">
              <span className={`${classes.bottomText} bottomTextWithLine`}>{t('practices.workPermitInUkraine.detail.title.bottomText')}</span>
            </TextWithLine>
          </div>
          <LinkWithDropdown
            dropdown="dropdown"
            title={t('practices.workPermitInUkraine.detail.one.title')}
            description={
              <>
                <p>{t('practices.workPermitInUkraine.detail.one.p1')}</p>
                <p>{t('practices.workPermitInUkraine.detail.one.p2')}</p>
              </>
            }
          >
            <One/>
          </LinkWithDropdown>
          <LinkWithDropdown
            dropdown="dropdown"
            title={t('practices.workPermitInUkraine.detail.two.title')}
            description={
              <>
                <p>{t('practices.workPermitInUkraine.detail.one.p1')}</p>
                <p className={classes.bold}>{t('practices.workPermitInUkraine.detail.one.p2')}</p>
              </>
            }
          >
            <Two/>
          </LinkWithDropdown>
          <LinkWithDropdown
            dropdown="dropdown"
            title={t('practices.workPermitInUkraine.detail.three.title')}
            description={
              <>
                <p>
                  <ul className={classes.light}>
                    <li>{t('practices.workPermitInUkraine.detail.three.p1.li1')}</li>
                    <li>{t('practices.workPermitInUkraine.detail.three.p1.li2')}</li>
                    <li>{t('practices.workPermitInUkraine.detail.three.p1.li3')}</li>
                    <li>{t('practices.workPermitInUkraine.detail.three.p1.li4')}</li>
                  </ul>
                </p>
                <p>{t('practices.workPermitInUkraine.detail.three.p2')}</p>
                <p className={classes.bold}>{t('practices.workPermitInUkraine.detail.three.p2')}</p>
              </>
            }
          >
            <Three/>
          </LinkWithDropdown>
          <LinkWithDropdown
            dropdown="dropdown"
            title={t('practices.workPermitInUkraine.detail.four.title')}
            description={
              <>
                <p>
                  <ul className={classes.light}>
                    <li>{t('practices.workPermitInUkraine.detail.four.p1.li1')}</li>
                    <li>{t('practices.workPermitInUkraine.detail.four.p1.li2')}</li>
                    <li>{t('practices.workPermitInUkraine.detail.four.p1.li3')}</li>
                  </ul>
                </p>
                <p>{t('practices.workPermitInUkraine.detail.four.p2')}</p>
              </>
            }
          >
            <Four/>
          </LinkWithDropdown>
          <LinkWithDropdown
            dropdown="dropdown"
            title={t('practices.workPermitInUkraine.detail.five.title')}
            description={
              <>
                <p>{t('practices.workPermitInUkraine.detail.five.p1')}</p>
                <p>{t('practices.workPermitInUkraine.detail.five.p2')}</p>
                <p>
                  <ul className={classes.light}>
                    <li>{t('practices.workPermitInUkraine.detail.five.p3.li1')}</li>
                    <li>{t('practices.workPermitInUkraine.detail.five.p3.li2')}</li>
                    <li>{t('practices.workPermitInUkraine.detail.five.p3.li3')}</li>
                  </ul>
                </p>
                <p className={classes.light}>
                  {t('practices.workPermitInUkraine.detail.five.p4')}
                </p>
                <p>
                  {t('practices.workPermitInUkraine.detail.five.p5')}
                </p>
              </>
            }
          >
            <Five/>
          </LinkWithDropdown>
        </Container>
      </div>
      <div className={classes.application}>
        <Container className={classes.wrapper}>
          <div className="MLblock">
            <div className={classes.text}>
              {trans('practices.workPermitInUkraine.application.text', 'dark')}
            </div>
          </div>
          <div className={classes.button}>
            <Button text={t('practices.workPermitInUkraine.application.button')} onClick={()=>setIsOpened(prevState => !prevState)} />
            {isOpened && <FormModal isOpened={isOpened} setIsOpened={setIsOpened}/>}
          </div>
        </Container>
      </div>
    </>
  );
};

export default Page;
