import React, { useEffect } from "react";
import "./Articles.css";
import BoxArticles from "../../components/BoxArticles/BoxArticles";
import ArticleBox from "../../components/ArticleBox/ArticleBox";
import { useDispatch, useSelector } from "react-redux";
import { getArticles } from "../../redux/store/articles";
import { Pagination } from "@mui/material";

function Articles() {
  const dispatch = useDispatch();
  const articles = useSelector((state) => state.articles);

  useEffect(() => {}, []);

  return (
    <div className="articles">
      <BoxArticles title="کلیه مقالات :">
        <ArticleBox />
        <ArticleBox />
        <ArticleBox />
        <ArticleBox />
        <ArticleBox />
        <ArticleBox />
        <div className="pagination">
          <Pagination
            count={10}
            variant="outlined"
            shape="rounded"
            size="large"
          />
        </div>
      </BoxArticles>
    </div>
  );
}

export default Articles;
