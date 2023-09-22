'use client';
import React from 'react';
import classes from "./page.module.scss";
import Container from "@/components/Layouts/Container/Container";
import ArticleAuthor from "@/components/ArticleAuthor/ArticleAuthor";
import Calendar from "../../../../../public/assets/icons/Calendar";
import Three from "../../../../../public/assets/icons/Numbers/Three";
import LinkWithDropdown from "@/components/LinkWithDropdown/LinkWithDropdown";
import One from "../../../../../public/assets/icons/Numbers/One";
import Two from "../../../../../public/assets/icons/Numbers/Two";
import Four from "../../../../../public/assets/icons/Numbers/Four";
import {useTranslation} from "react-i18next";
import FourFilled from "../../../../../public/assets/icons/Numbers/FourFilled";

const Page = () => {
  const {t} = useTranslation();
  return (
    <>
      <div className={classes.topBar}>
        <Container className={classes.wrapper}>
          <ArticleAuthor author='Yurii'/>
          <div className={classes.date}>
            <Calendar fill={"#013043"}/>
            <span>{'15/07/2023'}</span>
          </div>
        </Container>
      </div>
      <div className={classes.intro}>
        <Container className={classes.wrapper}>
          <div className={classes.titleMain}>
            {t('turnToMigrationLawyers.intro.titleMain')}
          </div>
          <div className={classes.subtitle}>
            {t('turnToMigrationLawyers.intro.subtitle')}
          </div>
        </Container>
      </div>
      <div className={classes.list}>
        <Container className={classes.wrapper}>
          <LinkWithDropdown
            dark={true}
            dropdown="opened"
            title={t('turnToMigrationLawyers.list.one.title')}
            description={
              <>
                <p>{t('turnToMigrationLawyers.list.one.text.p1')}</p>
                <p>{t('turnToMigrationLawyers.list.one.text.p2')}</p>
              </>
            }
          >
            <One fill="#286E8D"/>
          </LinkWithDropdown>
          <LinkWithDropdown
            dark={true}
            dropdown="opened"
            title={t('turnToMigrationLawyers.list.two.title')}
            description={
              <>
                <p>{t('turnToMigrationLawyers.list.two.text.p1')}</p>
                <p>{t('turnToMigrationLawyers.list.two.text.p2')}</p>
              </>
            }
          >
            <Two fill="#286E8D"/>
          </LinkWithDropdown>
          <LinkWithDropdown
            dark={true}
            dropdown="opened"
            title={t('turnToMigrationLawyers.list.three.title')}
            description={
              <>
                <p>{t('turnToMigrationLawyers.list.three.text.p1')}</p>
                <p>{t('turnToMigrationLawyers.list.three.text.p2')}</p>
                <p>{t('turnToMigrationLawyers.list.three.text.p3')}</p>
              </>
            }
          >
            <Three fill="#286E8D"/>
          </LinkWithDropdown>
          <LinkWithDropdown
            dark={true}
            dropdown="opened"
            title={t('turnToMigrationLawyers.list.four.title')}
            description={
              <>
                <p>{t('turnToMigrationLawyers.list.four.text.p1')}</p>
              </>
            }
          >
            <FourFilled/>
          </LinkWithDropdown>
        </Container>
      </div>
      <div className={classes.bottomText}>
        <Container className={classes.wrapper}>
         <div className="MLblock">
           <p>{t('turnToMigrationLawyers.bottomText.p1')}</p>
           <p>{t('turnToMigrationLawyers.bottomText.p2')}</p>
         </div>
        </Container>
      </div>
    </>
  );
};

export default Page;
