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
import FourFilled from "../../../../../../public/assets/icons/Numbers/FourFilled";
import FiveFilled from "../../../../../../public/assets/icons/Numbers/FiveFilled";
import Head from "next/head";

const Page = () => {
  const {t} = useTranslation();
  const [isOpened, setIsOpened] = useState(false)
  return (
    <>
      <Head>
        <title>{t('practices.foreignUkrainian.pageTitle')}</title>
      </Head>
      <HeaderBackground background="1"/>
      <div className={classes.intro}>
        <Container className={classes.wrapper}>
          <div className={classes.title}>
            <TextWithLine topText={t('practices.foreignUkrainian.intro.title.topText')} topColor="dark">
              <span
                className={`${classes.bottomText} bottomTextWithLine`}>{t('practices.foreignUkrainian.intro.title.bottomText')}</span>
            </TextWithLine>
          </div>
          <div className={classes.list}>
            <LinkWithDropdown
              dark={true}
              dropdown="dropdown"
              title={t('practices.foreignUkrainian.intro.list.one.title')}
              description={
                <>
                  <p>{trans('practices.foreignUkrainian.intro.list.one.p1', 'dark')}</p>
                </>
              }
            >
              <One fill="#286E8D"/>
            </LinkWithDropdown>
            <LinkWithDropdown
              dark={true}
              dropdown="dropdown"
              title={t('practices.foreignUkrainian.intro.list.two.title')}
              description={
                <>
                  <p>
                    <ul className="listWithPointer">
                      <li>{t('practices.foreignUkrainian.intro.list.two.li1')}</li>
                      <li>{t('practices.foreignUkrainian.intro.list.two.li2')}</li>
                      <li>{t('practices.foreignUkrainian.intro.list.two.li3')}</li>
                      <li>{t('practices.foreignUkrainian.intro.list.two.li4')}</li>
                      <li>{t('practices.foreignUkrainian.intro.list.two.li5')}</li>
                    </ul>
                  </p>
                </>
              }
            >
              <Two fill="#286E8D"/>
            </LinkWithDropdown>
            <LinkWithDropdown
              dark={true}
              dropdown="dropdown"
              title={t('practices.foreignUkrainian.intro.list.three.title')}
              description={
                <>
                  <p>
                    {t('practices.foreignUkrainian.intro.list.three.p1')}
                    <ul className="listWithPointer">
                      <li>{t('practices.foreignUkrainian.intro.list.three.li1')}</li>
                      <li>{t('practices.foreignUkrainian.intro.list.three.li2')}</li>
                      <li>{t('practices.foreignUkrainian.intro.list.three.li3')}</li>
                      <li>{t('practices.foreignUkrainian.intro.list.three.li4')}</li>
                    </ul>
                  </p>
                </>
              }
            >
              <Three fill="#286E8D"/>
            </LinkWithDropdown>
            <LinkWithDropdown
              dark={true}
              dropdown="dropdown"
              title={t('practices.foreignUkrainian.intro.list.four.title')}
              description={
                <>
                  <p>
                    {t('practices.foreignUkrainian.intro.list.four.p1')}
                    <ul className="listWithPointer">
                      <li>{t('practices.foreignUkrainian.intro.list.four.li1')}</li>
                      <li>{t('practices.foreignUkrainian.intro.list.four.li2')}</li>
                      <li>{t('practices.foreignUkrainian.intro.list.four.li3')}</li>
                      <li>{t('practices.foreignUkrainian.intro.list.four.li4')}</li>
                      <li>{t('practices.foreignUkrainian.intro.list.four.li5')}</li>
                    </ul>
                  </p>
                </>
              }
            >
              <FourFilled/>
            </LinkWithDropdown>
            <LinkWithDropdown
              dark={true}
              dropdown="dropdown"
              title={t('practices.foreignUkrainian.intro.list.five.title')}
              description={
                <>
                  <p>
                    {t('practices.foreignUkrainian.intro.list.five.p1')}
                  </p>
                  <p>
                    {t('practices.foreignUkrainian.intro.list.five.p2')}
                  </p>
                </>
              }
            >
              <FiveFilled/>
            </LinkWithDropdown>
          </div>
        </Container>
      </div>

      <div className={classes.application}>
        <Container className={classes.wrapper}>
          <div className="MLblock">
            <div className={classes.text}>
              {trans('practices.foreignUkrainian.application.text', 'dark')}
            </div>
          </div>
          <div className={classes.button}>
            <Button text={t('practices.foreignUkrainian.application.button')} onClick={()=>setIsOpened(prevState => !prevState)} />
            {isOpened && <FormModal isOpened={isOpened} setIsOpened={setIsOpened}/>}
          </div>
        </Container>
      </div>
    </>
  );
};

export default Page;
