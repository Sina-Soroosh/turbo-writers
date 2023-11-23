import { createSlice } from "@reduxjs/toolkit";
import data from "../../data";

const slice = createSlice({
  name: "articlesByCategory",
  initialState: [],
  reducers: {
    getArticlesByCategory: (state, action) => {
      return data.articles.filter(
        (article) => article.category == action.payload
      );
    },
    resetStoreArticlesByCategory: () => [],
  },
});

export const { getArticlesByCategory, resetStoreArticlesByCategory } =
  slice.actions;
export default slice.reducer;
