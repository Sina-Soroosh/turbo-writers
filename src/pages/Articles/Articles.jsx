import React, { useEffect } from "react";
import "./Articles.css";
import BoxArticles from "../../components/BoxArticles/BoxArticles";
import ArticleBox from "../../components/ArticleBox/ArticleBox";
import { useDispatch, useSelector } from "react-redux";
import { getArticles } from "../../redux/store/articles";
import { Pagination } from "@mui/material";
import { useLocation, useNavigate, useParams } from "react-router-dom";

function Articles() {
  const dispatch = useDispatch();
  const { articles, count } = useSelector((state) => state.articles);
  const { page } = useParams();
  const Location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(getArticles({ page: page || 1, manyShow: 6 }));
  }, [Location]);

  const changePageHandler = (e, page) => {
    navigate(`/articles/${page}`);
  };

  return (
    <div className="articles">
      <BoxArticles title="کلیه مقالات :">
        {articles?.map((article) => (
          <ArticleBox key={article.id} {...article} />
        ))}
        <div className="pagination">
          <Pagination
            count={count}
            variant="outlined"
            shape="rounded"
            size="large"
            page={+page || 1}
            onChange={changePageHandler}
          />
        </div>
      </BoxArticles>
    </div>
  );
}

export default Articles;
