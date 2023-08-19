"use client"
import React, {FC, useState} from 'react';
import classes from "./Header.module.scss"
import MainLogo from "../../../../public/assets/icons/MainLogo";
import Container from "@/components/Layouts/Container/Container";
import LanguageSwitcher from "@/components/LanguageSwitcher/LanguageSwitcher";
import BurgerMenu from "@/components/BurgerMenu/BurgerMenu";
import {useRouter} from "next/navigation";
import {useTranslation} from "react-i18next";

interface IProps {
    lng:string
}

const Header:FC<IProps> = ({lng}) => {
    const [burgerOpen, setBurgerOpen] = useState<boolean>(false)
    const handleBurgerClick = () => {
        setBurgerOpen((prevState) => !prevState);
    }
    const closeBurgerHandler = () => {
        setBurgerOpen(false)
    }
    const router = useRouter();
    const { t } = useTranslation('layout')
    return (
        <header className={classes.header}>
            <BurgerMenu isOpen={burgerOpen} onCloseBurger={closeBurgerHandler} lng={lng}/>
            <Container className={classes.wrapper}>
                <div className={classes.logoBox} onClick={()=> router.push(`/${lng}`)}>
                    <MainLogo isDark={true}/>
                </div>
                <div className={classes.headerButtons}>
                    <span
                      className={classes.blogLink}
                      onClick={()=>  router.push(`/${lng}/blog`)}
                    >
                        {t('header.lawBlog')}</span>
                    <LanguageSwitcher lng={lng}/>
                    <div
                      className={burgerOpen ? `${classes.burger} ${classes.active}` : classes.burger}
                      onClick={handleBurgerClick}
                    >

                        <span></span>
                    </div>
                </div>
            </Container>
        </header>
    );
};

export default Header;