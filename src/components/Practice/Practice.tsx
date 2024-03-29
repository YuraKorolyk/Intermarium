import React, {FC} from 'react';
import classes from "./Practice.module.scss"
import Arrow from "../../../public/assets/icons/Arrow";

interface IProps {
    bg: string,
    title: string,
    description: string,
    isAlone: boolean,
    onClick: ()=>void,
}

const Practice: FC<IProps> = ({bg, title, description, isAlone, onClick}) => {
    return (
        <div className={`${classes.wrapper} ${isAlone ? classes.alone : ''}`} style={{backgroundImage: `url("/assets/images/practices/${bg}.jpg")`}}>
            <div className={classes.block}>
                <h3 className={`${classes.title} ${isAlone ? classes.alone : ''}`}>{title}</h3>
                <span className={`${classes.description} ${isAlone ? classes.alone : ''}`}>{description}</span>
                <div className={classes.arrow} onClick={onClick}>
                    <Arrow color="#ECECEC"/>
                </div>
            </div>
        </div>
    );
};

export default Practice;