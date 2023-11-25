import { createSlice } from "@reduxjs/toolkit";
import data from "../../data";

const slice = createSlice({
  name: "articleInfo",
  initialState: {},
  reducers: {
    getArticle: (state, action) => {
      return data.articles.find(
        (article) => article.shortName === action.payload.shortName
      );
    },
    resetArticle: () => {},
  },
});

export const { getArticle, resetArticle } = slice.actions;
export default slice.reducer;
