import { configureStore } from "@reduxjs/toolkit";
import lastArticlesReducer from "./store/lastArticles";
import articlesByCategoryReducer from "./store/articlesByCategory";
import randomArticlesReducer from "./store/randomArticles";
import categoriesReducer from "./store/categories";
import articlesReducer from "./store/articles";
import articleInfoReducer from "./store/articleInfo";
import searchArticlesReducer from "./store/searchArticles";

const store = configureStore({
  reducer: {
    lastArticles: lastArticlesReducer,
    articlesByCategory: articlesByCategoryReducer,
    randomArticles: randomArticlesReducer,
    categories: categoriesReducer,
    articles: articlesReducer,
    articleInfo: articleInfoReducer,
    searchArticles: searchArticlesReducer,
  },
});

export default store;
