"use client"
import React, {FC} from 'react';
import Container from "@/components/Layouts/Container/Container";
import classes from "./Footer.module.scss"
import MainLogo from "../../../../public/assets/icons/MainLogo";
import Instagram from "../../../../public/assets/icons/Instagram";
import Facebook from "../../../../public/assets/icons/Facebook";
import Mail from "../../../../public/assets/icons/Mail";
import {useRouter} from "next/navigation";
import {useTranslation} from "react-i18next";

interface IProps {
    lng: string,
}

const Footer:FC<IProps> = ({lng}) => {
    const router = useRouter();
    const { t } = useTranslation()
    const currentYear = new Date().getFullYear();
    return (
        <footer className={classes.footer} id="contacts">
            <Container className={classes.wrapper}>
                <div className={classes.logoBlock}>
                    <div className={classes.logoBox} onClick={()=> router.push(`/${lng}`)}>
                        <MainLogo isDark={false}/>
                    </div>
                    <span>©{currentYear} Intermarium law firm</span>
                </div>
                <div className={classes.networks}>
                    <div className={classes.icons}>
                        <Instagram/>
                        <Facebook/>
                        <Mail/>
                    </div>
                    <span onClick={()=> router.push(`/${lng}/privacy`)}>
                        {t('footer.rulesAndPrivacy')}
                    </span>
                </div>
                <div className={classes.info}>
                    <a className={classes.number} href="tel:+380683872296">+38 (068) 387 22 96</a>
                    <a className={classes.number} href="tel:+380976634347">+38 (097) 663 43 47</a>
                    <div className={classes.mail} onClick={(e) => {window.location.href ='mailto:office@intermarium.legal';}}>office@intermarium.legal</div>
                    <div className={classes.adress}>Україна, м. Київ,<br/>
                        вул. Борисоглібська, 16А, офіс 4
                    </div>
                </div>
            </Container>
        </footer>
    );
};

export default Footer;
