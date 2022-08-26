import React from "react";
import articleContent from "./article-content";
import { useParams } from "react-router-dom";
import ArticlesList from "../components/ArticleList";
const ArticlePage = () => {
  const { cat } = useParams();
  const article = articleContent.find((article) => article.name === cat);

  if (!article) return <h1>Error: this page doesnot exist.</h1>;

  const otherArticles = articleContent.filter(
    (article) => article.name !== cat
  );

  return (
    <>
      <header>
        <h1 class="fancy"> {article.title}</h1>
      </header>

      {article.content.map((paragraph, key) => (
        <p key={key}>{paragraph}</p>
      ))}
      <h3>Other Articles:</h3>
      <ArticlesList articles={otherArticles} />
    </>
  );
};

export default ArticlePage;
