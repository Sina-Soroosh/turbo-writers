import { createSlice } from "@reduxjs/toolkit";
import data from "../../data";

const slice = createSlice({
  name: "articleInfo",
  initialState: { articleInfo: {}, relatedArticles: [] },
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
      return { articleInfo, relatedArticles };
    },
    resetArticle: () => ({ articleInfo: {}, relatedArticles: [] }),
  },
});

export const { getArticle, resetArticle } = slice.actions;
export default slice.reducer;
