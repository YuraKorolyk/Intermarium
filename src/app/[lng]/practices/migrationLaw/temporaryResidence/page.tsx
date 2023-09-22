'use client';
import React, {useState} from 'react';
import classes from './page.module.scss'
import Container from "@/components/Layouts/Container/Container";
import TextWithLine from "@/components/TextWithLine/TextWithLine";
import HeaderBackground from "@/components/HeaderBackground/HeaderBackground";
import LinkWithDropdown from "@/components/LinkWithDropdown/LinkWithDropdown";
import One from "../../../../../../public/assets/icons/Numbers/One";
import Three from "../../../../../../public/assets/icons/Numbers/Three";
import Two from "../../../../../../public/assets/icons/Numbers/Two";
import Button from "@/components/Button/Button";
import CustomLi from "@/components/CustomLi/CustomLi";
import {useTranslation} from "react-i18next";
import {trans} from "@/services";
import FormModal from "@/components/FormModal/FormModal";

const Page = () => {
  const {t} = useTranslation();
  const [isOpened, setIsOpened] = useState(false)
  return (
    <>
      <HeaderBackground background="1"/>
      <div className={classes.intro}>
        <Container className={classes.wrapper}>
          <div className={classes.title}>
            <TextWithLine topText={t('practices.temporaryResidence.intro.title.topText')} topColor="dark">
              <span className={`${classes.bottomText} bottomTextWithLine`}>{t('practices.temporaryResidence.intro.title.bottomText')}</span>
            </TextWithLine>
          </div>
          <div className="MLblock">
            <div className={classes.text}>
              <p>{trans('practices.temporaryResidence.intro.text.p1', 'dark')}</p>
              <p>{trans('practices.temporaryResidence.intro.text.p2', 'dark')}</p>
            </div>
          </div>
          <div className={classes.advantages}>
            <div className={classes.description}>{t('practices.temporaryResidence.intro.advantages.text')}</div>
            <ul>
              <CustomLi>{t('practices.temporaryResidence.intro.advantages.li1')}</CustomLi>
              <CustomLi>{t('practices.temporaryResidence.intro.advantages.li2')}</CustomLi>
              <CustomLi>{t('practices.temporaryResidence.intro.advantages.li3')}</CustomLi>
              <CustomLi>{t('practices.temporaryResidence.intro.advantages.li4')}</CustomLi>
              <CustomLi>{t('practices.temporaryResidence.intro.advantages.li5')}</CustomLi>
              <CustomLi>{t('practices.temporaryResidence.intro.advantages.li6')}</CustomLi>
            </ul>
          </div>
        </Container>
      </div>
      <div className={classes.detail}>
        <Container className={classes.wrapper}>
          <div className={classes.title}>
            <TextWithLine topText={t('practices.temporaryResidence.detail.title.topText')} topColor="light">
              <span className={`${classes.bottomText} bottomTextWithLine`}>{t('practices.temporaryResidence.detail.title.bottomText')}</span>
            </TextWithLine>
          </div>
          <LinkWithDropdown
            dropdown="dropdown"
            title={t('practices.temporaryResidence.detail.one.title')}
            description={
              <>
                <p>
                 <ul className="listWithPointer">
                   <li>{t('practices.temporaryResidence.detail.one.li1')}</li>
                   <li>{t('practices.temporaryResidence.detail.one.li2')}</li>
                   <li>{t('practices.temporaryResidence.detail.one.li3')}</li>
                   <li>{t('practices.temporaryResidence.detail.one.li4')}</li>
                   <li>{t('practices.temporaryResidence.detail.one.li5')}</li>
                 </ul>
                </p>
              </>
            }
          >
            <One/>
          </LinkWithDropdown>
          <LinkWithDropdown
            dropdown="dropdown"
            title={t('practices.temporaryResidence.detail.two.title')}
            description={
              <>
                <p>
                  <ul className="listWithPointer">
                    <li>{t('practices.temporaryResidence.detail.two.p1.li1')}</li>
                    <li>{t('practices.temporaryResidence.detail.two.p1.li2')}</li>
                    <li>{t('practices.temporaryResidence.detail.two.p1.li3')}</li>
                    <li>{t('practices.temporaryResidence.detail.two.p1.li4')}</li>
                    <li>{t('practices.temporaryResidence.detail.two.p1.li5')}</li>
                    <li>{t('practices.temporaryResidence.detail.two.p1.li6')}</li>
                  </ul>
                </p>
                <p>{t('practices.temporaryResidence.detail.two.p2')}</p>
              </>
            }
          >
            <Two/>
          </LinkWithDropdown>
          <LinkWithDropdown
            dropdown="dropdown"
            title={t('practices.temporaryResidence.detail.three.title')}
            description={
              <>
                <p>
                  <ul className="listWithPointer">
                    <li>{t('practices.temporaryResidence.detail.three.p1.li1')}</li>
                    <li>{t('practices.temporaryResidence.detail.three.p1.li2')}</li>
                    <li>{t('practices.temporaryResidence.detail.three.p1.li3')}</li>
                    <li>{t('practices.temporaryResidence.detail.three.p1.li4')}</li>
                    <li>{t('practices.temporaryResidence.detail.three.p1.li5')}</li>
                  </ul>
                </p>
                <p className={classes.bold}>{t('practices.temporaryResidence.detail.three.p2')}</p>
              </>
            }
          >
            <Three/>
          </LinkWithDropdown>

        </Container>
      </div>
      <div className={classes.application}>
        <Container className={classes.wrapper}>
          <div className="MLblock">
            <div className={classes.text}>
              {trans('practices.temporaryResidence.application.text', 'dark')}
            </div>
          </div>
          <div className={classes.button}>
            <Button text={t('practices.temporaryResidence.application.button')} onClick={()=>setIsOpened(prevState => !prevState)} />
            {isOpened && <FormModal isOpened={isOpened} setIsOpened={setIsOpened}/>}
          </div>
        </Container>
      </div>
    </>
  );
};

export default Page;
