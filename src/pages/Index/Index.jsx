import React, { useEffect } from "react";
import "./Index.css";
import ArticleBoxIndex from "../../components/ArticleBoxIndex/ArticleBoxIndex";
import BoxArticles from "../../components/BoxArticles/BoxArticles";
import { getLastArticles } from "../../redux/store/lastArticles";
import { useDispatch, useSelector } from "react-redux";

function Home() {
  const dispatch = useDispatch();
  const lastArticles = useSelector((state) => state.lastArticles);

  useEffect(() => {
    dispatch(getLastArticles());
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
        {/* <ArticleBoxIndex />
        <ArticleBoxIndex />
        <ArticleBoxIndex />
        <ArticleBoxIndex />
        <ArticleBoxIndex />
        <ArticleBoxIndex /> */}
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
