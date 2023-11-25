import React from "react";
import "./ArticleBox.css";
import parse from "html-react-parser";
import { Link } from "react-router-dom";

function ArticleBox(props) {
  return (
    <div className={props.slider ? "" : "col-lg-4 col-sm-6 col-12"}>
      <div className="article-box">
        <div className="content-article-box">
          <div className="image-article-box">
            <Link to={`/article-info/${props.shortName}`}>
              <img src={props.cover} alt={props.title} />
            </Link>
          </div>
          <div className="title-article-box">
            <Link to={`/article-info/${props.shortName}`}>
              <h3>{props.title}</h3>
            </Link>
          </div>
          <div className="category-article-box">
            <Link to={`/category/${props.category}`}>
              <span className="category">{props.category}</span>
            </Link>
          </div>
          <div className="desc-article-box">
            <p>{parse(props.desc)}</p>
          </div>
          <div className="read-article-box">
            <Link to={`/article-info/${props.shortName}`}>
              <span>مطالعه</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ArticleBox;
