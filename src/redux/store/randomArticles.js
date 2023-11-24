import { createSlice } from "@reduxjs/toolkit";
import data from "../../data";

const slice = createSlice({
  name: "randomArticles",
  initialState: [],
  reducers: {
    getRandomArticles: () => {
      return [...data.articles].sort(
        () => Math.random() - Math.random() + Math.random()
      );
    },
  },
});

export const { getRandomArticles } = slice.actions;
export default slice.reducer;
