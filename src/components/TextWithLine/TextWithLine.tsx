import React, {FC, ReactNode} from 'react';
import classes from "./TextWithLine.module.scss"

interface IProps {
    topText: string,
    topColor: string,
    children: ReactNode,
}

const TextWithLine:FC<IProps> = ({topText, topColor, children}) => {
    const color = topColor === "dark" ? "#013043" : topColor === "light" ? "#ECECEC" : "red";
    return (
        <div className={classes.wrapper}>
            <span className={classes.top} style={{color: color}}>{topText}</span>
            {children}
        </div>
    );
};

export default TextWithLine;