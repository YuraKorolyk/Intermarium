"use client"
import React from 'react';
import Container from "@/components/Layouts/Container/Container";
import classes from "./Footer.module.scss"
import MainLogo from "../../../../public/assets/icons/MainLogo";
import Instagram from "../../../../public/assets/icons/Instagram";
import Facebook from "../../../../public/assets/icons/Facebook";
import Mail from "../../../../public/assets/icons/Mail";
const Footer = () => {
    return (
        <footer className={classes.footer}>
            <Container className={classes.wrapper}>
                <div className={classes.logoBlock}>
                    <div className={classes.logoBox}>
                        <MainLogo isDark={false}/>
                    </div>
                    <span>©2023 Intermarium law firm</span>
                </div>
                <div className={classes.networks}>
                    <div className={classes.icons}>
                        <Instagram/>
                        <Facebook/>
                        <Mail/>
                    </div>
                    <span>Правила та повідомлення про приватність</span>
                </div>
                <div className={classes.info}>
                    <a className={classes.number} href="tel:+380993339933">+38 (099) 333 99 33</a>
                    <div className={classes.mail} onClick={(e) => {window.location.href ='mailto:office@intermarium.legal';}}>office@intermarium.legal</div>
                    <div className={classes.adress}>Україна, м. Київ,<br/>
                        вул. Хрещатик, 19-А, офіс 444
                    </div>
                </div>
            </Container>
        </footer>
    );
};

export default Footer;