import React from "react";
import "./Index.css";
import ArticleBoxIndex from "../../components/ArticleBoxIndex/ArticleBoxIndex";
import BoxArticles from "../../components/BoxArticles/BoxArticles";

function Home() {
  return (
    <>
      <div className="container">
        <div className="content-index">
          <div className="new-articles">
            <div className="content-new-articles">
              <div className="row">
                <ArticleBoxIndex />
                <ArticleBoxIndex />
                <ArticleBoxIndex />
                <ArticleBoxIndex />
                <ArticleBoxIndex />
                <ArticleBoxIndex />
              </div>
            </div>
          </div>
        </div>
      </div>

      <BoxArticles
        title="مقالات برنامه نویسی :"
        btnText="مشاهده بیشتر"
        btnLink="/"
      >
        <ArticleBoxIndex />
        <ArticleBoxIndex />
        <ArticleBoxIndex />
        <ArticleBoxIndex />
        <ArticleBoxIndex />
        <ArticleBoxIndex />
      </BoxArticles>

      <BoxArticles title="مقالات تصادفی :">
        <ArticleBoxIndex />
        <ArticleBoxIndex />
        <ArticleBoxIndex />
        <ArticleBoxIndex />
        <ArticleBoxIndex />
        <ArticleBoxIndex />
      </BoxArticles>
    </>
  );
}

export default Home;
