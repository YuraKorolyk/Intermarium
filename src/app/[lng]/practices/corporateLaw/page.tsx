'use client';
import React, {useState} from 'react';
import Container from "@/components/Layouts/Container/Container";
import HeaderBackground from "@/components/HeaderBackground/HeaderBackground";
import classes from "./page.module.scss";
import TextWithLine from "@/components/TextWithLine/TextWithLine";
import One from "../../../../../public/assets/icons/Numbers/One";
import Button from "@/components/Button/Button";
import LinkWithDropdown from "@/components/LinkWithDropdown/LinkWithDropdown";
import Two from "../../../../../public/assets/icons/Numbers/Two";
import Three from "../../../../../public/assets/icons/Numbers/Three";
import Four from "../../../../../public/assets/icons/Numbers/Four";
import Five from "../../../../../public/assets/icons/Numbers/Five";
import CustomLi from "@/components/CustomLi/CustomLi";
import {useTranslation} from "react-i18next";
import {trans} from "@/services";
import FormModal from "@/components/FormModal/FormModal";

const Page = () => {
  const {t} = useTranslation();
  const [isOpened, setIsOpened] = useState(false)
  return (
    <>
      <HeaderBackground background="2"/>
      <div className={classes.intro}>
        <Container className={classes.wrapper}>
          <div className={classes.title}>
            <TextWithLine topText={t('practices.corporateLaw.intro.title.topText')} topColor="dark">
              <span className={`${classes.bottomText} bottomTextWithLine`}>{t('practices.corporateLaw.intro.title.bottomText')}</span>
            </TextWithLine>
          </div>
          <div className={classes.text}>
            <p>{trans('practices.corporateLaw.intro.text.p1', 'dark')}</p>
            <p>{trans('practices.corporateLaw.intro.text.p2', 'dark')}</p>
          </div>
        </Container>
      </div>
      <div className={classes.order}>
        <Container className={classes.wrapper}>
          <div className={classes.title}>
            <TextWithLine topText={t('practices.corporateLaw.order.title.topText')} topColor="light">
              <span className={`${classes.bottomText} bottomTextWithLine`}>{t('practices.corporateLaw.order.title.topText')}</span>
            </TextWithLine>
          </div>
          <div className={classes.list}>
            <LinkWithDropdown
              dropdown="dropdown"
              title={t('practices.corporateLaw.order.list.one.title')}
              description={t('practices.corporateLaw.order.list.one.description')}
            >
              <One/>
            </LinkWithDropdown>
            <LinkWithDropdown
              dropdown="dropdown"
              title={t('practices.corporateLaw.order.list.two.title')}
              description={t('practices.corporateLaw.order.list.two.description')}
            >
              <Two/>
            </LinkWithDropdown>
            <LinkWithDropdown
              dropdown="dropdown"
              title={t('practices.corporateLaw.order.list.three.title')}
              description={t('practices.corporateLaw.order.list.three.description')}
            >
              <Three/>
            </LinkWithDropdown>
            <LinkWithDropdown
              dropdown="dropdown"
              title={t('practices.corporateLaw.order.list.four.title')}
              description={t('practices.corporateLaw.order.list.four.description')}
            >
              <Four/>
            </LinkWithDropdown>
            <LinkWithDropdown
              dropdown="dropdown"
              title={t('practices.corporateLaw.order.list.five.title')}
              description={t('practices.corporateLaw.order.list.five.description')}
            >
              <Five/>
            </LinkWithDropdown>
          </div>
        </Container>
      </div>
      <div className={classes.different}>
        <Container className={classes.wrapper}>
          <div className={classes.title}>{t('practices.corporateLaw.different.title')}</div>
          <div className={classes.list}>
            <ul>
              <CustomLi>{t('practices.corporateLaw.different.li1')}</CustomLi>
              <CustomLi>{t('practices.corporateLaw.different.li2')}</CustomLi>
              <CustomLi>{t('practices.corporateLaw.different.li3')}</CustomLi>
              <CustomLi>{t('practices.corporateLaw.different.li4')}</CustomLi>
              <CustomLi>{t('practices.corporateLaw.different.li5')}</CustomLi>
              <CustomLi>{t('practices.corporateLaw.different.li6')}</CustomLi>
            </ul>
            <div className={classes.text}>{t('practices.corporateLaw.different.text')}</div>
            <Button text={t('practices.corporateLaw.different.button')} onClick={()=>setIsOpened(prevState => !prevState)} />
            {isOpened && <FormModal isOpened={isOpened} setIsOpened={setIsOpened}/>}
          </div>
        </Container>
      </div>
    </>
  );
};

export default Page;
