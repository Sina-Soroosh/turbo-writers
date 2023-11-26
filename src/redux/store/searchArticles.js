import { createSlice } from "@reduxjs/toolkit";
import data from "../../data";

const slice = createSlice({
  name: "searchArticles",
  initialState: { articles: [], count: 0 },
  reducers: {
    getArticlesSearch: (state, action) => {
      const findArticles = data.articles.filter(
        (article) =>
          article.title
            .toLowerCase()
            .includes(action.payload.keyword.toLowerCase()) ||
          article.desc
            .toLowerCase()
            .includes(action.payload.keyword.toLowerCase()) ||
          article.author
            .toLowerCase()
            .includes(action.payload.keyword.toLowerCase()) ||
          article.shortName
            .toLowerCase()
            .includes(action.payload.keyword.toLowerCase())
      );

      const lastIndex = action.payload.page * action.payload.manyShow;
      const firstIndex = lastIndex - action.payload.manyShow;

      return {
        articles: findArticles.slice(firstIndex, lastIndex),
        count: Math.ceil(findArticles.length / action.payload.manyShow),
      };
    },
    resetSearch: () => ({ articles: [], count: 0 }),
  },
});

export const { getArticlesSearch, resetSearch } = slice.actions;
export default slice.reducer;
