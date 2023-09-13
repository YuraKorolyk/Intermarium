"use client"
import React, {useState} from 'react';
import Container from "@/components/Layouts/Container/Container";
import classes from './page.module.scss';
import TextWithLine from "@/components/TextWithLine/TextWithLine";
import Article from "@/components/Article/Article";

interface IArticle {
  id: number;
  title: string;
  author: 'Taras' | 'Yurii';
  date: string;
  type: string;
  linkTo: string;
}

const articles: IArticle[] = [
  {
    id: 1,
    title: "Закон України для громадян Республіки Польща, які перебувають на території України",
    author: "Taras",
    date: "14/06/2023",
    type: "legislative changes",
    linkTo: "lawForPoles"
  },
  {
    id: 2,
    title: "Законопроєкт 5795 щодо змін у сфері працевлаштування іноземців",
    author: "Taras",
    date: "08/06/2023",
    type: "legislative changes",
    linkTo: "draftLaw5795"
  },
  {
    id: 3,
    title: "Є-резиденство для іноземців",
    author: "Taras",
    date: "02/06/2023",
    type: "legislative changes",
    linkTo: "e-residency"
  },
  {
    id: 4,
    title: "Нова підстава отримання дозволу на імміграцію",
    author: "Taras",
    date: "02/06/2023",
    type: "legislative changes",
    linkTo: "law3180"
  },
  {
    id: 5,
    title: 'Можливості та переваги інвестування в Україну',
    author: "Yurii",
    date: "13/07/2023",
    type: "article",
    linkTo: "investingIntoUkraine"
  },
  {
    id: 6,
    title: 'Чому слід звернутися до міграційних юристів?',
    author: "Yurii",
    date: "15/07/2023",
    type: "article",
    linkTo: "turnToMigrationLawyers"
  }
]


const Page = () => {
  const [filter, setFilter] = useState("all")

  const filteredArticles = articles.filter((article) => {
    if (filter === "all") {
      return true; // Show all articles
    } else {
      return article.type === filter; // Show articles based on filter
    }
  });
  return (
    <>
      <div className={classes.intro}>
        <Container className={classes.wrapper}>
          <div className={classes.title}>
            <TextWithLine topText="Наш" topColor="dark">
              <span className={`${classes.bottomText} bottomTextWithLine`}>юридичний блог</span>
            </TextWithLine>
          </div>
          <div className={classes.nav}>
            <div
              onClick={() => setFilter("all")}
              className={filter === "all" ? classes.activeFilter : ""}
            >
              Всі
            </div>
            <div
              onClick={() => setFilter("article")}
              className={filter === "article" ? classes.activeFilter : ""}
            >
              Статті
            </div>
            <div
              onClick={() => setFilter("legislative changes")}
              className={filter === "legislative changes" ? classes.activeFilter : ""}
            >
              зміни законодавства
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
