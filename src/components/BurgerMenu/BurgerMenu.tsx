"use client"
import React, {FC, useEffect, useState} from 'react';
import classes from "./BurgerMenu.module.scss"
import Link from "next/link";
import Container from "@/components/Layouts/Container/Container";
import { usePathname } from 'next/navigation';

interface IProps {
    isOpen: boolean,
    onCloseBurger: ()=>void
}
const BurgerMenu:FC<IProps> = ({isOpen, onCloseBurger}) => {
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
                    className={pathname === "/" ? classes.active : ''}
                    onClick={onCloseBurger}
                    href={'/'}
                >
                    Головна сторінка
                </Link>
                <Link
                    className={pathname === "/about" ? classes.active : ''}
                    onClick={onCloseBurger}
                    href={'/about'}
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
                            href={"/test"}
                            className={pathname === "/test" ? classes.active : ''}
                            onClick={onCloseBurger}
                        >
                            — Візова підтримка
                        </Link>
                        <Link
                            href={"/test"}
                            className={pathname === "/test" ? classes.active : ''}
                            onClick={onCloseBurger}
                        >
                            — Юридичний дью-ділідженс
                        </Link>
                        <Link
                            href={"/test"}
                            className={pathname === "/test" ? classes.active : ''}
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