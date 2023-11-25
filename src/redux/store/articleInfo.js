import { createSlice } from "@reduxjs/toolkit";
import data from "../../data";

const slice = createSlice({
  name: "articleInfo",
  initialState: { articleInfo: {}, relatedArticles: [], newestArticles: [] },
  reducers: {
    getArticle: (state, action) => {
      const articleInfo = data.articles.find(
        (article) => article.shortName === action.payload.shortName
      );

      const relatedArticles = data.articles.filter(
        (article) =>
          article.category === articleInfo.category &&
          article.shortName !== action.payload.shortName
      );

      const newestArticles = data.articles
        .filter((article) => article.shortName !== action.payload.shortName)
        .slice(0, 6);

      return { articleInfo, relatedArticles, newestArticles };
    },
    resetArticle: () => ({
      articleInfo: {},
      relatedArticles: [],
      newestArticles: [],
    }),
  },
});

export const { getArticle, resetArticle } = slice.actions;
export default slice.reducer;
