import { createSlice } from "@reduxjs/toolkit";
import data from "../../data";

const slice = createSlice({
  name: "lastArticles",
  initialState: [],
  reducers: {
    getLastArticles: (state, action) => {
      return data.articles.slice(0, 6);
    },
  },
});

export const { getLastArticles } = slice.actions;
export default slice.reducer;
