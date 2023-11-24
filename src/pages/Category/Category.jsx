import React, { useEffect } from "react";
import "./Category.css";
import BoxArticles from "../../components/BoxArticles/BoxArticles";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import {
  getArticlesByCategory,
  resetStoreArticlesByCategory,
} from "../../redux/store/articlesByCategory";
import { useDispatch, useSelector } from "react-redux";
import { Pagination } from "@mui/material";
import ArticleBox from "../../components/ArticleBox/ArticleBox";

function Category() {
  const { articles, count } = useSelector((state) => state.articlesByCategory);
  const dispatch = useDispatch();
  const { categoryName, page } = useParams();
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(
      getArticlesByCategory({
        category: categoryName,
        page: page || 1,
        manyShow: 6,
      })
    );

    return () => {
      dispatch(resetStoreArticlesByCategory());
    };
  }, [location]);

  const changePageHandler = (e, page) => {
    navigate(`/category/${categoryName}/${page}`);
  };

  return (
    <div className="category">
      <BoxArticles title={`مطالب دسته بندی : ${categoryName}`}>
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

export default Category;
