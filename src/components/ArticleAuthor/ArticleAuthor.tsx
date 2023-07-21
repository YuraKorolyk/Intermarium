import React from 'react';
import classes from "@/components/Article/Article.module.scss";
import Image from "next/image";

const ArticleAuthor = ({author}) => {
    const authorName = author === "Taras" ? "Тарас Горбатюк" : author === "Yurii" ? "Юрій Бєлоконь" : "";
    return (
        <div className={classes.author}>
            <div className={classes.imageBox}>
                <img src={`/assets/images/${author}_small.jpg`} alt=""/>
                {/*<Image src={`/assets/images/${author}_small.jpg`} alt={authorName}/>*/}
            </div>
            <span>{authorName}</span>
        </div>
    );
};

export default ArticleAuthor;