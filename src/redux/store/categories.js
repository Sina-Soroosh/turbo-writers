import { createSlice } from "@reduxjs/toolkit";
import data from "../../data";

const slice = createSlice({
  name: "categories",
  initialState: [],
  reducers: {
    getCategories: () => {
      const arrayCategories = data.articles.map((article) => article.category);
      const setCategories = new Set(arrayCategories);
      return [...setCategories];
    },
  },
});

export const { getCategories } = slice.actions;

export default slice.reducer;
