import React from "react";
import AddCommentForm from "../components/AddCommentForm";
import CommentsList from "../components/CommentsList";
import UpvoteSection from "../components/UpvotesSection";
import { useState, useEffect } from "react";
import NotFoundPage from "./NotFoundPage";
import articleContent from "./article-content";
import { useParams } from "react-router-dom";
import ArticlesList from "../components/ArticleList";
const ArticlePage = () => {
  const { cat } = useParams();
  const article = articleContent.find((article) => article.name === cat);

  const [articleInfo, setArticleInfo] = useState({ upvotes: 0, comments: [] });

  useEffect(() => {
    const fetchData = async () => {
      const result = await fetch(`/api/articles/${cat}`);
      const body = await result.json();
      console.log(body);
      setArticleInfo(body);
    };
    fetchData();
    // setArticleInfo({ upvotes: Math.ceil(Math.random() * 10) });
  }, [cat]);

  if (!article) return <NotFoundPage const dog={cat} />;

  const otherArticles = articleContent.filter(
    (article) => article.name !== cat
  );

  return (
    <>
      <header>
        <h1 class="fancy"> {article.title}</h1>
      </header>
      <UpvoteSection
        articleName={cat}
        upvotes={articleInfo.upvotes}
        setArticleInfo={setArticleInfo}
      />

      {article.content.map((paragraph, key) => (
        <p key={key}>{paragraph}</p>
      ))}
      <CommentsList comments={articleInfo.comments} />
      <h3>Other Articles:</h3>
      <AddCommentForm articleName={cat} setArticleInfo={setArticleInfo} />
      <ArticlesList articles={otherArticles} />
    </>
  );
};

export default ArticlePage;
