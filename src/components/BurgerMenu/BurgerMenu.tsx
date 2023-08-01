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

    const { i18n } = useTranslation()

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
                    // href={{
                    //     pathname: "/some-page",
                    //     query: lng, // the data
                    // }}
                >
                    Головна сторінка
                </Link>
                <Link
                    className={pathname === `/${lng}/about` ? classes.active : ''}
                    onClick={onCloseBurger}
                    href={`/${lng}/about`}
                >
                     Про нас
                </Link>
                <div
                    onClick={practiceClickHandler}
                    className={classes.practice}
                >
                    <span>Практики</span>
                    <div
                        className={isPracticeOpen ? `${classes.practiceList} ${classes.active}` : classes.practiceList}
                    >
                        <Link
                            href={"/practices/migrationLaw"}
                            className={pathname === "/practices/migrationLaw" ? classes.active : ''}
                            onClick={onCloseBurger}
                        >
                            — міграційне право
                        </Link>
                        <Link
                            href={"/practices/corporateLaw"}
                            className={pathname === "/practices/corporateLaw" ? classes.active : ''}
                            onClick={onCloseBurger}
                        >
                            — корпоративне право
                        </Link>
                        <Link
                            href={"/practices/visaSupport"}
                            className={pathname === "/practices/visaSupport" ? classes.active : ''}
                            onClick={onCloseBurger}
                        >
                            — Візова підтримка
                        </Link>
                        <Link
                            href={"/practices/dueDiligence"}
                            className={pathname === "/practices/dueDiligence" ? classes.active : ''}
                            onClick={onCloseBurger}
                        >
                            — Юридичний дью-ділідженс
                        </Link>
                        <Link
                            href={"/practices/customerService"}
                            className={pathname === "/practices/customerService" ? classes.active : ''}
                            onClick={onCloseBurger}
                        >
                            — Абонентське обслуговування
                        </Link>
                    </div>
                </div>
                <Link
                    className={pathname === "/blog" ? classes.active : ''}
                    onClick={onCloseBurger}
                    href={'/blog'}
                >
                    Блог
                </Link>
                <Link
                    className={pathname === "/contacts" ? classes.active : ''}
                    onClick={onCloseBurger}
                    href={'/contacts'}
                >
                    Контакти
                </Link>

            </Container>
        </div>
    );
};

export default BurgerMenu;