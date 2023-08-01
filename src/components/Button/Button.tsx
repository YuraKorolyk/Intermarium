import React, {FC} from 'react';
import classes from "./Button.module.scss";

interface IProps {
    text: string,
    onClick?: ()=>void,
}

const Button:FC<IProps> = ({text, onClick}) => {
    return (
        <div className={classes.button}  onClick={onClick && onClick}>
            {text}
        </div>
    );
};

export default Button;