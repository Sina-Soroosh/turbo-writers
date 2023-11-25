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
import ArticleInfoBox from "../../components/ArticleInfoBox/ArticleInfoBox";
import ItemArticleInfo from "../../components/ItemArticleInfo/ItemArticleInfo";
import NewArticleBox from "../../components/NewArticleBox/NewArticleBox";

function ArticleInfo() {
  const { shortNameArticle } = useParams();
  const dispatch = useDispatch();
  const { articleInfo, relatedArticles, newestArticles } = useSelector(
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
                    <Swiper
                      breakpoints={{
                        576: {
                          slidesPerView: 2,
                        },
                        768: {
                          slidesPerView: 2,
                        },
                      }}
                      spaceBetween={10}
                    >
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
          <div className="col-lg-4">
            <ArticleInfoBox>
              <p className="min-article-info">
                خواندن این مقاله به {articleInfo.min} دقیقه زمان نیاز دارد.
              </p>
            </ArticleInfoBox>
            <ArticleInfoBox>
              <ItemArticleInfo
                title="دسته بندی :"
                content={articleInfo.category}
                icon={
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="22"
                    height="22"
                    fill="none"
                    viewBox="0 0 28 28"
                  >
                    <path
                      stroke="#a7a7b8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeMiterlimit="10"
                      strokeOpacity="0.6"
                      strokeWidth="1.5"
                      d="M4.9 11.4h2.6c2.6 0 3.9-1.3 3.9-3.9V4.9c0-2.6-1.3-3.9-3.9-3.9H4.9C2.3 1 1 2.3 1 4.9v2.6c0 2.6 1.3 3.9 3.9 3.9zm15.6 0h2.6c2.6 0 3.9-1.3 3.9-3.9V4.9C27 2.3 25.7 1 23.1 1h-2.6c-2.6 0-3.9 1.3-3.9 3.9v2.6c0 2.6 1.3 3.9 3.9 3.9zm0 15.6h2.6c2.6 0 3.9-1.3 3.9-3.9v-2.6c0-2.6-1.3-3.9-3.9-3.9h-2.6c-2.6 0-3.9 1.3-3.9 3.9v2.6c0 2.6 1.3 3.9 3.9 3.9zM4.9 27h2.6c2.6 0 3.9-1.3 3.9-3.9v-2.6c0-2.6-1.3-3.9-3.9-3.9H4.9c-2.6 0-3.9 1.3-3.9 3.9v2.6C1 25.7 2.3 27 4.9 27z"
                    ></path>
                  </svg>
                }
                link={`/category/${articleInfo.category}`}
              />
              <ItemArticleInfo
                icon={
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="22"
                    height="22"
                    fill="none"
                    viewBox="0 0 31 34"
                  >
                    <path
                      stroke="#a7a7b8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeMiterlimit="10"
                      strokeOpacity="0.63"
                      strokeWidth="1.5"
                      d="M12.083 7.333h6.334c3.166 0 3.166-1.583 3.166-3.166C21.583 1 20 1 18.417 1h-6.334C10.5 1 8.917 1 8.917 4.167c0 3.166 1.583 3.166 3.166 3.166z"
                    ></path>
                    <path
                      stroke="#a7a7b8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeMiterlimit="10"
                      strokeOpacity="0.63"
                      strokeWidth="1.5"
                      d="M21.583 4.199c5.273.285 7.917 2.232 7.917 9.468v9.5c0 6.333-1.583 9.5-9.5 9.5h-9.5c-7.917 0-9.5-3.167-9.5-9.5v-9.5C1 6.447 3.644 4.484 8.917 4.2"
                    ></path>
                    <path
                      stroke="#a7a7b8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeOpacity="0.63"
                      strokeWidth="1.5"
                      d="M10.99 21.108l2.376 2.375 6.333-6.333"
                    ></path>
                  </svg>
                }
                title="نوشته شده در :"
                content={articleInfo.createAt}
              />
              <ItemArticleInfo
                icon={
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="22"
                    height="22"
                    fill="none"
                    viewBox="0 0 35 33"
                  >
                    <path
                      stroke="#a7a7b8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeOpacity="0.57"
                      strokeWidth="1.5"
                      d="M13.125 30.083h8.75c7.292 0 10.208-2.916 10.208-10.208v-8.75c0-7.292-2.916-10.208-10.208-10.208h-8.75C5.833.917 2.917 3.833 2.917 11.125v8.75c0 7.291 2.916 10.208 10.208 10.208z"
                    ></path>
                    <path
                      stroke="#a7a7b8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeOpacity="0.57"
                      strokeWidth="1.5"
                      d="M10.69 19.131l3.47-4.506a1.464 1.464 0 012.057-.263l2.668 2.1c.642.496 1.56.38 2.057-.247l3.368-4.346"
                    ></path>
                  </svg>
                }
                title="بروزرسانی شده در :"
                content={articleInfo.updateAt}
              />
              <ItemArticleInfo
                icon={
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="22"
                    height="22"
                    fill="#a7a7b8"
                    version="1.1"
                    viewBox="0 0 64 64"
                    xmlSpace="preserve"
                  >
                    <path d="M47.84 13.71l2.284-3.997c.52-.91.797-1.944.803-2.996l.007-1.235a5.387 5.387 0 00-2.159-4.335L48.28.818a5.286 5.286 0 00-5.34.014l-1.056.623a6.044 6.044 0 00-2.17 2.204L13.688 49.203a6.048 6.048 0 00-.775 2.442l-1.09 11.358 1.594.896 9.035-6.763a6 6 0 001.624-1.84l22.772-39.85 2.61 1.522-12.03 21.054a1 1 0 101.736.992L52.178 16.24l-4.338-2.53zM41.45 4.65a4.052 4.052 0 011.447-1.473l1.058-.624a3.279 3.279 0 012.822-.244l.537.261a3.378 3.378 0 011.62 2.9l-.007 1.236a4.111 4.111 0 01-.54 2.013l-2.275 3.982-6.72-3.92c-.08-.047 2.057-4.13 2.057-4.13zM22.34 54.303c-.277.486-.643.9-1.085 1.231l-7.226 5.409.874-9.108c.055-.573.235-1.14.52-1.64l22.774-39.853c.06.06 6.923 4.097 6.923 4.097L22.34 54.303z"></path>
                  </svg>
                }
                title="نویسنده :"
                content={articleInfo.author}
              />
            </ArticleInfoBox>
            <ArticleInfoBox>
              <ItemArticleInfo
                icon={
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="22"
                    height="22"
                    fill="none"
                    viewBox="0 0 20 20"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.4"
                      d="M.7 10c0 2.043.11 3.636.388 4.885.275 1.24.707 2.096 1.319 2.708.612.612 1.468 1.044 2.708 1.32 1.248.277 2.842.387 4.885.387 2.043 0 3.636-.11 4.885-.388 1.24-.275 2.096-.707 2.708-1.319.612-.612 1.044-1.468 1.32-2.708.277-1.248.387-2.842.387-4.885 0-2.043-.11-3.637-.388-4.885-.275-1.24-.707-2.096-1.319-2.708-.612-.612-1.468-1.044-2.708-1.32C13.637.81 12.043.7 10 .7c-2.043 0-3.637.11-4.885.388-1.24.275-2.096.707-2.708 1.319-.612.612-1.044 1.468-1.32 2.708C.81 6.363.7 7.957.7 10zM8.334 5.833h3.333"
                      opacity="0.56"
                    ></path>
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.4"
                      d="M5.833 10h8.334"
                    ></path>
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.4"
                      d="M8.334 14.167h3.333"
                      opacity="0.56"
                    ></path>
                  </svg>
                }
                title="جدید ترین نوشته ها :"
              />
              {newestArticles.map((article) => (
                <NewArticleBox key={article.id} {...article} />
              ))}
            </ArticleInfoBox>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ArticleInfo;
