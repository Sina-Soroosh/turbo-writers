import { createSlice } from "@reduxjs/toolkit";
import data from "../../data";

const slice = createSlice({
  name: "articlesByCategory",
  initialState: { articles: [], count: 0 },
  reducers: {
    getArticlesByCategory: (state, action) => {
      let articles = [];
      let count = 0;
      if (action.payload.page) {
        let articlesCategory = data.articles.filter(
          (article) => article.category == action.payload.category
        );

        const lastIndex = action.payload.page * action.payload.manyShow;
        const firstIndex = lastIndex - action.payload.manyShow;

        articles = articlesCategory.slice(firstIndex, lastIndex);
        count = Math.ceil(articlesCategory.length / action.payload.manyShow);
      } else {
        articles = data.articles.filter(
          (article) => article.category == action.payload.category
        );
      }

      return { articles, count };
    },
    resetStoreArticlesByCategory: () => ({ articles: [], count: 0 }),
  },
});

export const { getArticlesByCategory, resetStoreArticlesByCategory } =
  slice.actions;
export default slice.reducer;
