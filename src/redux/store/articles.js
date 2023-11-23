import { createSlice } from "@reduxjs/toolkit";
import data from "../../data";

const slice = createSlice({
  name: "article",
  initialState: [],
  reducers: {
    getArticles: (state, action) => {
      const lastIndex = action.payload.page * action.payload.manyShow;
      const firstIndex = lastIndex - action.payload.manyShow;
      return data.articles.slice(firstIndex, lastIndex);
    },
  },
});

export const { getArticles } = slice.actions;
export default slice.reducer;
