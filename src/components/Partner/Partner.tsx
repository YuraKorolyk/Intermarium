import React, {FC} from 'react';
import classes from './Partner.module.scss'

interface IProps {
    name: string,
    title: string,
}
const Partner:FC<IProps> = ({name, title}) => {
    const partnerName = name === "Taras" ? "Тарас Горбатюк" : name === "Yurii" ? "Юрій Бєлоконь" : "невідомо";
    return (
        <div className={classes.wrapper}>
            <div className={classes.photo} style={{backgroundImage: `url("/assets/images/${name}.jpg")`}}>
                <span>{partnerName}</span>
            </div>
            <div className={classes.text}>
                Співкеруючий партнер Intermarium Law Firm
            </div>
            <div className={classes.title}>
                {title}
            </div>

        </div>
    );
};

export default Partner;