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

function Home() {
  const dispatch = useDispatch();
  const lastArticles = useSelector((state) => state.lastArticles);
  const programArticles = useSelector((state) => state.articlesByCategory);

  useEffect(() => {
    dispatch(getLastArticles());
    dispatch(getArticlesByCategory("برنامه نویسی"));

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
        btnLink="/"
      >
        {programArticles.slice(0, 6).map((article) => (
          <ArticleBoxIndex {...article} key={article.id} />
        ))}
      </BoxArticles>

      <BoxArticles title="مقالات تصادفی :">
        {/* <ArticleBoxIndex />
        <ArticleBoxIndex />
        <ArticleBoxIndex />
        <ArticleBoxIndex />
        <ArticleBoxIndex />
        <ArticleBoxIndex /> */}
      </BoxArticles>
    </>
  );
}

export default Home;
