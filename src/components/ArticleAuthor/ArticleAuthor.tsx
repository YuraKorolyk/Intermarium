"use client"
import React, {FC} from 'react';
import classes from "./ArticleAuther.module.scss";
import Image from "next/image";
import {useTranslation} from "react-i18next";

interface IProps {
  author: 'Taras' | 'Yurii';
  color?: string;
}

const ArticleAuthor: FC<IProps> = ({author, color}) => {
  const {i18n} = useTranslation()
  const authorName = author === "Taras" && i18n.language === 'ua' ? "Тарас Горбатюк" :
    author === "Taras" && i18n.language === 'en' ? 'Taras Horbatiuk' :
    author === "Yurii" && i18n.language === 'ua' ? "Юрій Бєлоконь" :
    author === "Yurii" && i18n.language === 'en' ? "Yurii Bielokon" : ""
  return (
    <div className={classes.author} style={color ? {color: color} : {}}>
      <div className={classes.imageBox}>
        <img src={`/assets/images/${author}_small.jpg`} alt=""/>
        {/*<Image src={`/assets/images/${author}_small.jpg`} alt={authorName}/>*/}
      </div>
      <span>{authorName}</span>
    </div>
  );
};

export default ArticleAuthor;
