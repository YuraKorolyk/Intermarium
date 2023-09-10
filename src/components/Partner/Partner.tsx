'use client';
import React, {FC, ReactNode, useState} from 'react';
import classes from './Partner.module.scss'
import Arrow from "../../../public/assets/icons/Arrow";
import {useTranslation} from "react-i18next";

interface IProps {
    name: string,
    title: string,
    description: ReactNode,
}
const Partner:FC<IProps> = ({name, title, description}) => {
    const {t} = useTranslation();

    const partnerName = name === "Taras" ? t('partner.taras') : name === "Yurii" ? t('partner.yurii') : "невідомо";
    const [descriptionOpened, setDescriptionOpened] = useState<boolean>(false)
    return (
        <div className={classes.wrapper}>
            <div className={classes.main}>
                <div className={classes.photo} style={{backgroundImage: `url("/assets/images/${name}.jpg")`}}>
                    <span>{partnerName}</span>
                </div>
                <div className={classes.text}>
                    {t('partner.text')}
                </div>
                <div className={classes.title}>
                    {title}
                </div>
                <div
                    className={descriptionOpened ? `${classes.arrow} ${classes.active}` : classes.arrow}
                    onClick={()=> setDescriptionOpened((prevState) => !prevState)}
                >
                    <Arrow color="#286E8D"/>
                </div>
            </div>
        <div className={descriptionOpened ? `${classes.description} ${classes.active}` : classes.description}>
            {description}
        </div>
    </div>
    );
};

export default Partner;
