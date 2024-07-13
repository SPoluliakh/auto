import { createSlice } from "@reduxjs/toolkit";
import makesList from "../../common/data/makes.json";

const initialState = {
  makesList,
  filteredMakesList: [],
};

export const makeSlice = createSlice({
  name: "make",
  initialState,
  reducers: {
    filteredMakesList: (state, { payload }) => {
      state.filteredMakesList.push(payload);
      state.makesList = state.makesList.filter(
        (element) => element.id !== payload.id
      );
    },
    resetFilteredMakesList: (state) => {
      state.filteredMakesList = [];
      state.makesList = initialState.makesList;
    },
    resetFilteredMake: (state, { payload }) => {
      const filteredMakesList = state.filteredMakesList.filter(
        (item) => item.id !== payload.id
      );
      const newMakesList = [...state.makesList, payload];
      const makesList = newMakesList.sort((a, b) =>
        a.name.localeCompare(b.name)
      );
      return { makesList, filteredMakesList };
    },
  },
});

export const { filteredMakesList, resetFilteredMakesList, resetFilteredMake } =
  makeSlice.actions;
export const getMakesList = (state) => state.make.makesList;
export const getFilteredMakesList = (state) => state.make.filteredMakesList;
