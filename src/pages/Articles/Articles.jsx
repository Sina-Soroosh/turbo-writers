import React from "react";
import "./Articles.css";
import BoxArticles from "../../components/BoxArticles/BoxArticles";
import ArticleBox from "../../components/ArticleBox/ArticleBox";

function Articles() {
  return (
    <div className="articles">
      <BoxArticles title="کلیه مقالات :">
        <ArticleBox />
        <ArticleBox />
        <ArticleBox />
        <ArticleBox />
        <ArticleBox />
        <ArticleBox />
      </BoxArticles>
    </div>
  );
}

export default Articles;
