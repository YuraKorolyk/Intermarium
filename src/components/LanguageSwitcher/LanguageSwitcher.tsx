import React from 'react';
import classes from "./LanguageSwitcher.module.scss"

const LanguageSwitcher = () => {
    return (
        <div className={classes.wrapper}>
            <span>UA</span>
            <span className={classes.line}></span>
            <span>EN</span>
        </div>
    );
};

export default LanguageSwitcher;