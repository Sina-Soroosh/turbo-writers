import React from "react";
import "./ArticleInfoBox.css";

function ArticleInfoBox(props) {
  return (
    <div className="article-info-box">
      {props.children}
      <div className="icon">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="40"
          height="14"
          fill="none"
          className="svg-sidebar"
          viewBox="0 0 82 14"
        >
          <path
            fill="#a7a7b8"
            fillOpacity="0.4"
            d="M27 0H5a5 5 0 00-5 5v4a5 5 0 005 5h22a5 5 0 005-5V5a5 5 0 00-5-5zm50 0H41a5 5 0 00-5 5v4a5 5 0 005 5h36a5 5 0 005-5V5a5 5 0 00-5-5z"
          ></path>
        </svg>
      </div>
    </div>
  );
}

export default ArticleInfoBox;
