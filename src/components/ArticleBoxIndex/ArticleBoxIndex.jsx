import React from "react";
import "./ArticleBoxIndex.css";
import { Link } from "react-router-dom";

function ArticleBoxIndex(props) {
  return (
    <div className="col-lg-4 col-sm-6 col-12">
      <div className="content-article-box-index">
        <div className="image-article">
          <Link to={`/article-info/${props.shortName}`}>
            <img src={props.cover} alt={props.title} />
          </Link>
        </div>
        <div className="name-article">
          <Link to={`/article-info/${props.shortName}`}>
            <h3>{props.title}</h3>
          </Link>
        </div>
        <div className="date-article">
          <p>{props.updateAt}</p>
        </div>
      </div>
    </div>
  );
}

export default ArticleBoxIndex;
