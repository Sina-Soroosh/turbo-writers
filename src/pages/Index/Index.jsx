import React from "react";
import "./Index.css";
import ArticleBoxIndex from "../../components/ArticleBoxIndex/ArticleBoxIndex";

function Home() {
  return (
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
  );
}

export default Home;
