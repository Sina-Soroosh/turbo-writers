import React from "react";
import "./ArticleBoxIndex.css";

function ArticleBoxIndex(props) {
  return (
    <div className="col-lg-4 col-sm-6 col-12">
      <div className="content-article-box-index">
        <div className="image-article">
          <img src={props.cover} alt={props.title} />
        </div>
        <div className="name-article">
          <a href="">
            <h3>{props.title}</h3>
          </a>
        </div>
        <div className="date-article">
          <p>{props.updateAt}</p>
        </div>
      </div>
    </div>
  );
}

export default ArticleBoxIndex;
