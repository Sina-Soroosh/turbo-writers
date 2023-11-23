import { configureStore } from "@reduxjs/toolkit";
import lastArticles from "./store/lastArticles";

const store = configureStore({
  reducer: {
    lastArticles: lastArticles,
  },
});

export default store;
