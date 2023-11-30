import React, { useEffect } from "react";
import "./Index.css";
import ArticleBoxIndex from "../../components/ArticleBoxIndex/ArticleBoxIndex";
import BoxArticles from "../../components/BoxArticles/BoxArticles";
import { getLastArticles } from "../../redux/store/lastArticles";
import { useDispatch, useSelector } from "react-redux";
import {
  getArticlesByCategory,
  resetStoreArticlesByCategory,
} from "../../redux/store/articlesByCategory";
import { getRandomArticles } from "../../redux/store/randomArticles";

function Index() {
  const dispatch = useDispatch();
  const lastArticles = useSelector((state) => state.lastArticles);
  const { articles: programArticles } = useSelector(
    (state) => state.articlesByCategory
  );
  const randomArticles = useSelector((state) => state.randomArticles);

  useEffect(() => {
    dispatch(getLastArticles());
    dispatch(getArticlesByCategory({ category: "برنامه نویسی" }));

    if (!randomArticles.length) {
      dispatch(getRandomArticles());
    }

    return () => {
      dispatch(resetStoreArticlesByCategory());
    };
  }, []);

  return (
    <>
      <div className="container">
        <div className="content-index">
          <div className="new-articles">
            <div className="content-new-articles">
              <div className="row">
                {lastArticles.map((article) => (
                  <ArticleBoxIndex {...article} key={article.id} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <BoxArticles
        title="مقالات برنامه نویسی :"
        btnText="مشاهده بیشتر"
        btnLink="/articles"
      >
        {programArticles.slice(0, 6).map((article) => (
          <ArticleBoxIndex {...article} key={article.id} />
        ))}
      </BoxArticles>

      <BoxArticles title="مقالات تصادفی :">
        {randomArticles.slice(0, 6).map((article) => (
          <ArticleBoxIndex {...article} key={article.id} />
        ))}
      </BoxArticles>
    </>
  );
}

export default Index;
