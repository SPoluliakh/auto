import { createSlice } from "@reduxjs/toolkit";
import modelsList from "../../common/data/models.json";

const initialState = {
  modelsList,
  filteredModelsList: [],
};

export const modelSlice = createSlice({
  name: "model",
  initialState,
  reducers: {
    filteredModelsList: (state, { payload }) => {
      state.filteredModelsList.push(payload),
        (state.modelsList = state.modelsList.filter(
          (element) => element.id !== payload.id
        ));
    },
    setFilteredModelsList: (state, { payload }) => {
      state.modelsList = payload;
    },
    resetFilteredModelsList: (state) => {
      state.filteredModelsList = [];
      state.modelsList = initialState.modelsList;
    },
    resetFilteredModel: (state, { payload }) => {
      const filteredModelsList = state.filteredModelsList.filter(
        (item) => item.id !== payload.id
      );
      const newModelsList = [...state.modelsList, payload];
      const modelsList = newModelsList.sort((a, b) =>
        a.name.localeCompare(b.name)
      );
      return { modelsList, filteredModelsList };
    },
  },
});

export const {
  filteredModelsList,
  resetFilteredModelsList,
  resetFilteredModel,
  setFilteredModelsList,
} = modelSlice.actions;
export const getModelsList = (state) => state.model.modelsList;
export const getFilteredModelsList = (state) => state.model.filteredModelsList;
