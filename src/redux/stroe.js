import { configureStore } from "@reduxjs/toolkit";
import lastArticlesReducer from "./store/lastArticles";
import articlesByCategoryReducer from "./store/articlesByCategory";
import randomArticlesReducer from "./store/randomArticles";

const store = configureStore({
  reducer: {
    lastArticles: lastArticlesReducer,
    articlesByCategory: articlesByCategoryReducer,
    randomArticles: randomArticlesReducer,
  },
});

export default store;
