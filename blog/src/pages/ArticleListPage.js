import React from "react";
import ArticlesList from "../components/ArticleList";
import articleContent from "./article-content";

const ArticleListPage = () => (
  <React.Fragment>
    <header>
      <h1>Articles</h1>
      <ArticlesList articles={articleContent} />
    </header>
  </React.Fragment>
);

export default ArticleListPage;
