import React from 'react';
import classes from "./Article.module.scss"
import Logo from "../../../public/assets/icons/Logo";
import Calendar from "../../../public/assets/icons/Calendar";
import ArticleAuthor from "@/components/ArticleAuthor/ArticleAuthor";
import Arrow from "../../../public/assets/icons/Arrow";

const Article = ({title, date, author}) => {

    return (
        <div className={classes.wrapper}>
            <div className={classes.image}>
                <Logo/>
            </div>
            <div className={classes.description}>
                <div className={classes.details}>

                    <ArticleAuthor author={author}/>
                    <div className={classes.date}>
                        <Calendar />
                        <span>{date}</span>
                    </div>
                </div>
                <div className={classes.title}>{title}</div>
                <div className={classes.arrow}><Arrow/></div>
            </div>
        </div>
    );
};

export default Article;