import { configureStore } from "@reduxjs/toolkit";
import { lotsApi } from "./lots/lots";
import { makeSlice } from "./filters/makes";
import { modelSlice } from "./filters/models";
import { trimSlice } from "./filters/trims";
import { generationSlice } from "./filters/generations";
import { toggleFiltersSlice } from "./filters/toggleFilters";
import { inputFiltersSlice } from "./filters/inputFiltersStore";

export const store = configureStore({
  reducer: {
    [lotsApi.reducerPath]: lotsApi.reducer,
    [makeSlice.name]: makeSlice.reducer,
    [modelSlice.name]: modelSlice.reducer,
    [trimSlice.name]: trimSlice.reducer,
    [generationSlice.name]: generationSlice.reducer,
    [toggleFiltersSlice.name]: toggleFiltersSlice.reducer,
    [inputFiltersSlice.name]: inputFiltersSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(lotsApi.middleware),
});
