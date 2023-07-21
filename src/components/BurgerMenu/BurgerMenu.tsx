"use client"
import React, {FC, useEffect} from 'react';
import classes from "./BurgerMenu.module.scss"
import Link from "next/link";
import Container from "@/components/Layouts/Container/Container";
import { usePathname } from 'next/navigation';

interface IProps {
    isOpen: boolean,
}
const BurgerMenu:FC<IProps> = ({isOpen}) => {
    const pathname = usePathname();
    useEffect(()=> {
    if (document) {
        const body = document.querySelector('body')
        isOpen ? body?.classList.add('lock') : body?.classList.remove('lock')
        }
    }, [isOpen])
    return (
        <div className={classes.burgerMenu} style={{ top: isOpen ? '0' : '-100vh' }}>
            <Container className={classes.wrapper}>
                <Link className={pathname === "/" ? classes.active : ''} href={'/'}>Головна сторінка</Link>
                <Link className={pathname === "/about" ? classes.active : ''} href={'/about'}>Про нас</Link>
                <Link className={pathname === "/practices" ? classes.active : ''} href={'/practices'}>Практики</Link>
                <Link className={pathname === "/blog" ? classes.active : ''} href={'/blog'}>Блог</Link>
                <Link className={pathname === "/contacts" ? classes.active : ''} href={'/contacts'}>Контакти</Link>

            </Container>
        </div>
    );
};

export default BurgerMenu;