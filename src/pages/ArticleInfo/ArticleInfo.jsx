import React, { useEffect } from "react";
import "./ArticleInfo.css";
import { useLocation, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getArticle, resetArticle } from "../../redux/store/articleInfo";
import parse from "html-react-parser";
import BoxArticles from "../../components/BoxArticles/BoxArticles";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import ArticleBox from "../../components/ArticleBox/ArticleBox";

function ArticleInfo() {
  const { shortNameArticle } = useParams();
  const dispatch = useDispatch();
  const { articleInfo, relatedArticles } = useSelector(
    (state) => state.articleInfo
  );
  const location = useLocation();

  useEffect(() => {
    dispatch(getArticle({ shortName: shortNameArticle }));

    return () => {
      dispatch(resetArticle());
    };
  }, [location]);

  return (
    <div className="article-info">
      <div className="container">
        <div className="row">
          <div className="col-lg-8">
            <div className="content-article-info">
              <div className="image-article-info">
                <img src={articleInfo.cover} alt={articleInfo.title} />
              </div>
              <div className="title-article-info">
                <h1>{articleInfo.title}</h1>
              </div>
              <div className="container-article-info">
                {parse(articleInfo.body || "")}
              </div>
              {relatedArticles.length ? (
                <div className="related-articles">
                  <BoxArticles title="مطالب مرتبط">
                    <Swiper slidesPerView={2} spaceBetween={10}>
                      {relatedArticles.slice(0, 5).map((article) => (
                        <SwiperSlide key={article.id}>
                          <ArticleBox {...article} slider={true} />
                        </SwiperSlide>
                      ))}
                    </Swiper>
                  </BoxArticles>
                </div>
              ) : null}
            </div>
          </div>
          <div className="col-lg-4"></div>
        </div>
      </div>
    </div>
  );
}

export default ArticleInfo;
