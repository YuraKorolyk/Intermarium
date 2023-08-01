import React, {FC} from 'react';
import classes from "./LanguageSwitcher.module.scss"
import {useTranslation} from "@/app/i18n/client";
import {usePathname, useRouter} from "next/navigation";
// import {useTranslation} from "react-i18next";

interface IProps {
  lng: string
}

const LanguageSwitcher: FC<IProps> = ({lng}) => {
  const {i18n} = useTranslation(lng, "client-page")
  // const { i18n } = useTranslation();
  const router = useRouter();
  const pathname = usePathname()

  const changeLanguage = (language: string): void => {
    i18n.changeLanguage(language)
      .then(() => {
        language === 'en' ? router.push(pathname.replace(/^\/ua/, '/en')) : router.push(pathname.replace(/^\/en/, '/ua'));
      });

  };
  return (
    <div className={classes.wrapper}>
      <span className={lng === "ua" ? classes.active : ''} onClick={() => changeLanguage('ua')}>UA</span>
      <span className={classes.line}></span>
      <span className={lng === "en" ? classes.active : ''} onClick={() => changeLanguage('en')}>EN</span>
    </div>
  );
};

export default LanguageSwitcher;