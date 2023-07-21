"use client"
import React, {FC, useEffect} from 'react';
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
    return (
        // <div className={`${classes.burgerMenu} ${isOpen ? classes.open : ''}`}>
        <div className={classes.burgerMenu} style={{opacity: isOpen ? "1" : "0" , visibility: isOpen ? "visible" : "hidden"}}>
            <Container className={classes.wrapper}>
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
                <Link
                    className={pathname === "/practices" ? classes.active : ''}
                    onClick={onCloseBurger}
                    href={'/practices'}
                >
                    Практики
                </Link>
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