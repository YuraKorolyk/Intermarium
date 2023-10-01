import React, {FC} from 'react';
import classes from "./Article.module.scss"
import Logo from "../../../public/assets/icons/Logo";
import Calendar from "../../../public/assets/icons/Calendar";
import ArticleAuthor from "@/components/ArticleAuthor/ArticleAuthor";
import Arrow from "../../../public/assets/icons/Arrow";
import {useTranslation} from "react-i18next";
import {useRouter} from "next/navigation";

interface IProps {
  title: string;
  date: string;
  author: 'Taras' | 'Yurii';
  color?: 'light' | 'dark';
  linkTo: string;
}

const Article: FC<IProps> = ({title, date, author, color, linkTo}) => {
  const currColor = color === 'dark' ? '#013043' : '#ECECEC'
  const router = useRouter();
  const onArrowClick = () => {
    router.push(`/blog/${linkTo}`);
  }
  return (
    <div className={classes.wrapper}>
      <div className={classes.image}>
        <Logo/>
      </div>
      <div className={classes.description}>
        <div className={classes.details}>
          <ArticleAuthor author={author} color={currColor}/>
          <div className={classes.date}>
            <Calendar fill={currColor}/>
            <span style={{color: currColor}}>{date}</span>
          </div>
        </div>
        <div style={{color: currColor}} className={classes.title}>{title}</div>
        <div className={classes.arrow} onClick={onArrowClick}><Arrow color={currColor}/></div>
      </div>
    </div>
  );
};

export default Article;
