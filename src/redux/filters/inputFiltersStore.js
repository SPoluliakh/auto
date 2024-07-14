import { createSlice } from "@reduxjs/toolkit";
import productionYears from "../../common/data/productionYears.json";

const initialState = {
  year: {
    min: 1992,
    max: new Date().getFullYear(),
  },
  price: {
    min: 0,
    max: 0,
  },
  odometer: {
    min: 0,
    max: 300000,
  },
};

export const inputFiltersSlice = createSlice({
  name: "inputFilters",
  initialState,
  reducers: {
    setMinYear: (state, { payload }) => {
      state.year.min = payload;
    },
    setMaxYear: (state, { payload }) => {
      state.year.max = payload;
    },
    setMinPrice: (state, { payload }) => {
      state.price.min = payload;
    },
    setMaxPrice: (state, { payload }) => {
      state.price.max = payload;
    },
    setMinOdometer: (state, { payload }) => {
      state.odometer.min = payload;
    },
    setMaxOdometer: (state, { payload }) => {
      state.odometer.max = payload;
    },
  },
});

// Extract the action creators object and the reducer
const { actions } = inputFiltersSlice;

// Extract and export each action creator by name
export const {
  setMinYear,
  setMaxYear,
  setMinPrice,
  setMaxPrice,
  setMinOdometer,
  setMaxOdometer,
} = actions;

export const getYear = (state) => state.inputFilters.year;
export const getPrice = (state) => state.inputFilters.price;
export const getOdometer = (state) => state.inputFilters.odometer;
