import React, {FC} from 'react';
import classes from "@/components/Article/Article.module.scss";
import Image from "next/image";

interface IProps {
    author: string
}
const ArticleAuthor:FC<IProps> = ({author}) => {
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