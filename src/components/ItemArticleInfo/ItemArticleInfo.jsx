import React from "react";
import { Link } from "react-router-dom";
import "./ItemArticleInfo.css";

function ItemArticleInfo(props) {
  return (
    <div className="item-article-info">
      <div className="icon-item-article-info">{props.icon}</div>
      <p>
        <span className="title">{props.title}</span>
        {props.link ? (
          <span className="content">
            <Link to={props.link}>{props.content}</Link>
          </span>
        ) : (
          <span className="content">{props.content}</span>
        )}
      </p>
    </div>
  );
}

export default ItemArticleInfo;
