'use client';
import React, {FC, useState} from 'react';
import classes from './Partner.module.scss'
import Arrow from "../../../public/assets/icons/Arrow";
import {boolean} from "zod";

interface IProps {
    name: string,
    title: string,
    description: any,
}
const Partner:FC<IProps> = ({name, title, description}) => {
    const partnerName = name === "Taras" ? "Тарас Горбатюк" : name === "Yurii" ? "Юрій Бєлоконь" : "невідомо";

    const [descriptionOpened, isDescriptionOpened] = useState<boolean>(false)

    return (
        <div className={classes.wrapper}>
            <div className={classes.main}>
                <div className={classes.photo} style={{backgroundImage: `url("/assets/images/${name}.jpg")`}}>
                    <span>{partnerName}</span>
                </div>
                <div className={classes.text}>
                    Співкеруючий партнер Intermarium Law Firm
                </div>
                <div className={classes.title}>
                    {title}
                </div>
                <div
                    className={descriptionOpened ? `${classes.arrow} ${classes.active}` : classes.arrow}
                    onClick={()=> isDescriptionOpened(!descriptionOpened)}
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