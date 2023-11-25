import React from "react";
import { Link } from "react-router-dom";
import "./NewArticleBox.css";

function NewArticleBox(props) {
  return (
    <div className="new-article-box">
      <span className="right-new-article-box"></span>
      <span>
        <Link to={`/article-info/${props.shortName}`}>{props.title}</Link>
      </span>
    </div>
  );
}

export default NewArticleBox;
