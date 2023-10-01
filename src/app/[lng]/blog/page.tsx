"use client"
import React, {useState} from 'react';
import Container from "@/components/Layouts/Container/Container";
import classes from './page.module.scss';
import TextWithLine from "@/components/TextWithLine/TextWithLine";
import Article from "@/components/Article/Article";
import {useTranslation} from "react-i18next";
import Head from "next/head";

interface IArticle {
  id: number;
  title: string;
  author: 'Taras' | 'Yurii';
  date: string;
  type: string;
  linkTo: string;
}

const Page = () => {
  const {t} = useTranslation();

  const [filter, setFilter] = useState("all")

  const articles: IArticle[] = [
    {
      id: 1,
      title: t('blog.articles.a1'),
      author: "Taras",
      date: "14/06/2023",
      type: "legislative changes",
      linkTo: "lawForPoles"
    },
    {
      id: 2,
      title: t('blog.articles.a2'),
      author: "Taras",
      date: "08/06/2023",
      type: "legislative changes",
      linkTo: "draftLaw5795"
    },
    {
      id: 3,
      title: t('blog.articles.a3'),
      author: "Taras",
      date: "02/06/2023",
      type: "legislative changes",
      linkTo: "e-residency"
    },
    {
      id: 4,
      title: t('blog.articles.a4'),
      author: "Taras",
      date: "15/09/2023",
      type: "legislative changes",
      linkTo: "law3180"
    },
    {
      id: 5,
      title: t('blog.articles.a5'),
      author: "Yurii",
      date: "13/07/2023",
      type: "article",
      linkTo: "investingIntoUkraine"
    },
    {
      id: 6,
      title: t('blog.articles.a6'),
      author: "Yurii",
      date: "15/07/2023",
      type: "article",
      linkTo: "turnToMigrationLawyers"
    }
  ]

  const filteredArticles = articles.filter((article) => {
    if (filter === "all") {
      return true; // Show all articles
    } else {
      return article.type === filter; // Show articles based on filter
    }
  });
  return (
    <>
      <Head>
        <title>{t('blog.pageTitle')}</title>
      </Head>
      <div className={classes.intro}>
        <Container className={classes.wrapper}>
          <div className={classes.title}>
            <TextWithLine topText={t('blog.intro.title.topText')} topColor="dark">
              <span className={`${classes.bottomText} bottomTextWithLine`}>{t('blog.intro.title.bottomText')}</span>
            </TextWithLine>
          </div>
          <div className={classes.nav}>
            <div
              onClick={() => setFilter("all")}
              className={filter === "all" ? classes.activeFilter : ""}
            >
              {t('blog.intro.filter.all')}
            </div>
            <div
              onClick={() => setFilter("article")}
              className={filter === "article" ? classes.activeFilter : ""}
            >
              {t('blog.intro.filter.articles')}
            </div>
            <div
              onClick={() => setFilter("legislative changes")}
              className={filter === "legislative changes" ? classes.activeFilter : ""}
            >
              {t('blog.intro.filter.legalChanges')}
            </div>
          </div>
          <div className={classes.list}>
            {filteredArticles.map((article) => (
              <Article
                key={article.id}
                author={article.author}
                date={article.date}
                title={article.title}
                color='dark'
                linkTo={article.linkTo}
              />
            ))}
          </div>
        </Container>
      </div>
    </>
  );
};

export default Page;
