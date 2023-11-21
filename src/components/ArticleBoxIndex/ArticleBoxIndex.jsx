import React from "react";
import "./ArticleBoxIndex.css";

function ArticleBoxIndex() {
  return (
    <div className="col-lg-4 col-sm-6 col-12">
      <div className="content-article-box-index">
        <div className="image-article">
          <img
            src="https://sabzlearn.ir/wp-content/uploads/2023/08/Com_python-768x432.png"
            alt=""
          />
        </div>
        <div className="name-article">
          <a href="">
            <h3>آموزش پایتون رایگان مقدماتی تا پیشرفته + پروژه های جذاب</h3>
          </a>
        </div>
        <div className="date-article">
          <p>19 خرداد 1402</p>
        </div>
      </div>
    </div>
  );
}

export default ArticleBoxIndex;
