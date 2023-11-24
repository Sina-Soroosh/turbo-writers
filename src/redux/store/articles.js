import { createSlice } from "@reduxjs/toolkit";
import data from "../../data";

const slice = createSlice({
  name: "article",
  initialState: { articles: [], count: 0 },
  reducers: {
    getArticles: (state, action) => {
      const lastIndex = action.payload.page * action.payload.manyShow;
      const firstIndex = lastIndex - action.payload.manyShow;
      return {
        articles: data.articles.slice(firstIndex, lastIndex),
        count: Math.ceil(data.articles.length / action.payload.manyShow),
      };
    },
  },
});

export const { getArticles } = slice.actions;
export default slice.reducer;
