import React, { useEffect } from "react";
import "./Search.css";
import BoxArticles from "../../components/BoxArticles/BoxArticles";
import ArticleBox from "../../components/ArticleBox/ArticleBox";
import { Pagination } from "@mui/material";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  getArticlesSearch,
  resetSearch,
} from "../../redux/store/searchArticles";

function Search() {
  const { keyword, page } = useParams();
  const { articles, count } = useSelector((state) => state.searchArticles);
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getArticlesSearch({ keyword, page: page || 1, manyShow: 6 }));

    return () => {
      dispatch(resetSearch());
    };
  }, [location]);

  const changePageHandler = (e, page) => {
    navigate(`/search/${keyword}/${page}`);
  };

  return (
    <div className="search-articles">
      {articles.length ? (
        <BoxArticles title={`نتایج جستوجو برای : ${keyword}`}>
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
      ) : (
        <div className="container">
          <div className="alert alert-danger fs-4 text-center">
            مقاله ای برای {keyword} پیدا نشد
          </div>
        </div>
      )}
    </div>
  );
}

export default Search;
