'use client';
import React from 'react';
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
import FiveFilled from "../../../../../../public/assets/icons/Numbers/FiveFilled";
import FourFilled from "../../../../../../public/assets/icons/Numbers/FourFilled";

const Page = () => {
  const {t} = useTranslation();
  return (
    <>
      <HeaderBackground background="1"/>
      <div className={classes.intro}>
        <Container className={classes.wrapper}>
          <div className={classes.title}>
            <TextWithLine topText={t('practices.removalOfTheEntranceBan.intro.title.topText')} topColor="dark">
              <span className={`${classes.bottomText} bottomTextWithLine`}>{t('practices.removalOfTheEntranceBan.intro.title.bottomText')}</span>
            </TextWithLine>
          </div>
          <div className={classes.list}>
            <LinkWithDropdown
              dark={true}
              dropdown="dropdown"
              title={t('practices.removalOfTheEntranceBan.intro.list.one.title')}
              description={
                <>
                  <p>{t('practices.removalOfTheEntranceBan.intro.list.one.p1')}</p>
                  <p>
                    <ol className={classes.light}>
                      <li>{t('practices.removalOfTheEntranceBan.intro.list.one.p2.li1')}</li>
                      <li>{t('practices.removalOfTheEntranceBan.intro.list.one.p2.li2')}</li>
                      <li>{t('practices.removalOfTheEntranceBan.intro.list.one.p2.li3')}</li>
                      <li>{t('practices.removalOfTheEntranceBan.intro.list.one.p2.li4')}</li>
                      <li>{t('practices.removalOfTheEntranceBan.intro.list.one.p2.li5')}</li>
                    </ol>
                  </p>
                  <p>{t('practices.removalOfTheEntranceBan.intro.list.one.p3')}</p>
                </>
              }
            >
              <One fill="#286E8D"/>
            </LinkWithDropdown>
            <LinkWithDropdown
              dark={true}
              dropdown="dropdown"
              title={t('practices.removalOfTheEntranceBan.intro.list.two.title')}
              description={
                <>
                  <p>
                    <ul className="listWithPointer">
                      <li>{t('practices.removalOfTheEntranceBan.intro.list.two.li1')}</li>
                      <li>{t('practices.removalOfTheEntranceBan.intro.list.two.li2')}</li>
                      <li>{t('practices.removalOfTheEntranceBan.intro.list.two.li3')}</li>
                      <li>{t('practices.removalOfTheEntranceBan.intro.list.two.li4')}</li>
                      <li>{t('practices.removalOfTheEntranceBan.intro.list.two.li5')}</li>
                      <li>{t('practices.removalOfTheEntranceBan.intro.list.two.li6')}</li>
                      <li>{t('practices.removalOfTheEntranceBan.intro.list.two.li7')}</li>
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
              title={t('practices.removalOfTheEntranceBan.intro.list.three.title')}
              description={
                <>
                  <p>{t('practices.removalOfTheEntranceBan.intro.list.three.p')}</p>
                </>
              }
            >
              <Three fill="#286E8D"/>
            </LinkWithDropdown>
            <LinkWithDropdown
              dark={true}
              dropdown="dropdown"
              title={t('practices.removalOfTheEntranceBan.intro.list.four.title')}
              description={
                <>
                  <p>{t('practices.removalOfTheEntranceBan.intro.list.four.p1')}</p>
                  <p>{t('practices.removalOfTheEntranceBan.intro.list.four.p2')}</p>
                  <p>{t('practices.removalOfTheEntranceBan.intro.list.four.p3')}</p>
                </>
              }
            >
              <FourFilled/>
            </LinkWithDropdown>
            <LinkWithDropdown
              dark={true}
              dropdown="dropdown"
              title={t('practices.removalOfTheEntranceBan.intro.list.five.title')}
              description={
                <>
                  <p>{t('practices.removalOfTheEntranceBan.intro.list.five.p1')}</p>
                  <p>{t('practices.removalOfTheEntranceBan.intro.list.five.p2')}</p>
                  <p>{t('practices.removalOfTheEntranceBan.intro.list.five.p3')}</p>
                  <p>{t('practices.removalOfTheEntranceBan.intro.list.five.p4')}</p>
                  <p className={classes.bold}>
                    <span className="highlightDark">{t('practices.removalOfTheEntranceBan.intro.list.five.p5')}</span>
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
              {trans('practices.removalOfTheEntranceBan.application.text', 'dark')}
            </div>
          </div>
          <div className={classes.button}>
            <Button text={t('practices.removalOfTheEntranceBan.application.button')}/>
          </div>
        </Container>
      </div>
    </>
  );
};

export default Page;
