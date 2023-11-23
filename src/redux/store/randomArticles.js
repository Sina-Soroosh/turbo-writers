import { createSlice } from "@reduxjs/toolkit";
import data from "../../data";

const slice = createSlice({
  name: "randomArticles",
  initialState: [],
  reducers: {
    getRandomArticles: () => {
      return data.articles.sort(() => Math.random() - 0.25);
    },
  },
});

export const { getRandomArticles } = slice.actions;
export default slice.reducer;
