import { configureStore } from "@reduxjs/toolkit";
import lastArticlesReducer from "./store/lastArticles";
import articlesByCategoryReducer from "./store/articlesByCategory";
import randomArticlesReducer from "./store/randomArticles";
import categoriesReducer from "./store/categories";
import articlesReducer from "./store/articles";

const store = configureStore({
  reducer: {
    lastArticles: lastArticlesReducer,
    articlesByCategory: articlesByCategoryReducer,
    randomArticles: randomArticlesReducer,
    categories: categoriesReducer,
    articles: articlesReducer,
  },
});

export default store;
