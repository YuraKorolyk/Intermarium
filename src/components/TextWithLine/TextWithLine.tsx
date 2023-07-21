import React, {FC} from 'react';
import classes from "./TextWithLine.module.scss"

interface IProps {
    topText: string,
    bottomText: string,
    topColor: string,
}

const TextWithLine:FC<IProps> = ({topText, bottomText, topColor}) => {
    const color = topColor === "dark" ? "#013043" : topColor === "light" ? "#ECECEC" : "red";
    return (
        <div className={classes.wrapper}>
            <span className={classes.top} style={{color: color}}>{topText}</span>
            <span className={classes.bottom}>{bottomText}</span>
        </div>
    );
};

export default TextWithLine;