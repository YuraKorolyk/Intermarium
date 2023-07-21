"use client"
import React, {useState} from 'react';
import classes from "./Header.module.scss"
import MainLogo from "../../../../public/assets/icons/MainLogo";
import Container from "@/components/Layouts/Container/Container";
import LanguageSwitcher from "@/components/LanguageSwitcher/LanguageSwitcher";
import BurgerMenu from "@/components/BurgerMenu/BurgerMenu";
const Header = () => {
    const [burgerOpen, setBurgerOpen] = useState<boolean>(false)
    const handleBurgerClick = () => {
        setBurgerOpen((prevState) => !prevState);
    }
    return (
        <header className={classes.header}>
            <BurgerMenu isOpen={burgerOpen}/>
            <Container className={classes.headerWrapper}>
                <MainLogo isDark={true}/>
                <div className={classes.headerButtons}>
                    <span className={classes.blogLink}>Юридичний блог</span>
                    <LanguageSwitcher/>
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