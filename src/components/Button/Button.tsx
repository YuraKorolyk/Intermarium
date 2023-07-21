import React, {FC} from 'react';
import classes from "./Button.module.scss";

interface IProps {
    text: string,
}

const Button:FC<IProps> = ({text}) => {
    return (
        <div className={classes.button}>
            {text}
        </div>
    );
};

export default Button;