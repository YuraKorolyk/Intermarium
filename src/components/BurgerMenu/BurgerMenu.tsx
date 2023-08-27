"use client"
import React, {FC, useEffect, useState} from 'react';
import classes from "./BurgerMenu.module.scss"
import Link from "next/link";
import Container from "@/components/Layouts/Container/Container";
import {usePathname, useRouter} from 'next/navigation';
import {useTranslation} from "react-i18next";

interface IProps {
    isOpen: boolean,
    onCloseBurger: ()=>void,
    lng: string
}
const BurgerMenu:FC<IProps> = ({isOpen, onCloseBurger, lng}) => {

    const { t, i18n } = useTranslation()

    const pathname = usePathname();
    useEffect(()=> {
    if (document) {
        const body = document.querySelector('body')
        isOpen ? body?.classList.add('lock') : body?.classList.remove('lock')
        }
    }, [isOpen])

    const [isPracticeOpen, setIsPracticeOpen] = useState<boolean>(false);
    const practiceClickHandler = () => {
        setIsPracticeOpen((prevState) => !prevState);
    }
    return (
        <div className={classes.burgerMenu} style={{opacity: isOpen ? "1" : "0" , visibility: isOpen ? "visible" : "hidden"}}>
            <Container className={isPracticeOpen ? `${classes.wrapper} ${classes.practiceOpened}` : classes.wrapper}>
            {/*<Container className={classes.wrapper}>*/}
                <Link
                    className={pathname === `/${lng}` ? classes.active : ''}
                    onClick={onCloseBurger}
                    href={`/${lng}`}
                >
                    {t('burgerMenu.main')}
                </Link>
                <Link
                    className={pathname === `/${lng}/about` ? classes.active : ''}
                    onClick={onCloseBurger}
                    href={`/${lng}/about`}
                >
                    {t('burgerMenu.about')}
                </Link>
                <div
                    onClick={practiceClickHandler}
                    className={classes.practice}
                >
                    <span>{t('burgerMenu.practice.title')}</span>
                    <div
                        className={isPracticeOpen ? `${classes.practiceList} ${classes.active}` : classes.practiceList}
                    >
                        <Link
                            href={`/${lng}/practices/migrationLaw`}
                            className={pathname === `/${lng}/practices/migrationLaw` ? classes.active : ''}
                            onClick={onCloseBurger}
                        >
                            {t('burgerMenu.practice.migrationLaw')}
                        </Link>
                        <Link
                            href={`/${lng}/practices/corporateLaw`}
                            className={pathname === `/${lng}/practices/corporateLaw` ? classes.active : ''}
                            onClick={onCloseBurger}
                        >
                            {t('burgerMenu.practice.corporateLaw')}
                        </Link>
                        <Link
                            href={`/${lng}/practices/visaSupport`}
                            className={pathname === `/${lng}/practices/visaSupport` ? classes.active : ''}
                            onClick={onCloseBurger}
                        >
                            {t('burgerMenu.practice.visaSupport')}
                        </Link>
                        <Link
                            href={`/${lng}/practices/dueDiligence`}
                            className={pathname === `/${lng}/practices/dueDiligence` ? classes.active : ''}
                            onClick={onCloseBurger}
                        >
                            {t('burgerMenu.practice.dueDiligence')}
                        </Link>
                        <Link
                            href={`/${lng}/practices/customerService`}
                            className={pathname === `/${lng}/practices/customerService` ? classes.active : ''}
                            onClick={onCloseBurger}
                        >
                            {t('burgerMenu.practice.customerService')}
                        </Link>
                    </div>
                </div>
                <Link
                    className={pathname === `/${lng}/blog` ? classes.active : ''}
                    onClick={onCloseBurger}
                    href={`/${lng}/blog`}
                >
                    {t('burgerMenu.blog')}
                </Link>
                <Link
                    className={pathname === `/${lng}/contacts` ? classes.active : ''}
                    onClick={onCloseBurger}
                    href={`/${lng}/contacts`}
                >
                    {t('burgerMenu.contacts')}
                </Link>

            </Container>
        </div>
    );
};

export default BurgerMenu;
