import React, {FC} from 'react';
import classes from "./Button.module.scss";

interface IProps {
    text: string;
    onClick?: ()=>void;
    hoverColor?: 'white';
}

const Button:FC<IProps> = ({text, onClick, hoverColor}) => {
    return (
        <div className={hoverColor ? classes.buttonWhite : classes.button}  onClick={onClick && onClick}>
            {text}
        </div>
    );
};

export default Button;
