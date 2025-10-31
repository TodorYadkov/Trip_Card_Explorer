import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: [],
  originalData: [],  // Keeps the original data
  isSearched: false, // It is used to avoid adding original data if the user searches at the same time.
};

export const dataSlice = createSlice({
  name: "data",
  initialState,
  reducers: {
    setData: (state, { payload }) => ({
      ...state,
      data: payload,
      originalData: payload,
    }),

    sortDataAscending: (state) => ({
      ...state,
      data: [...state.data]?.sort((a, b) => Number(a?.rating) - Number(b?.rating))
    }),

    sortDataDescending: (state) => ({
      ...state,
      data: [...state.data]?.sort((a, b) => Number(b?.rating) - Number(a?.rating))
    }),

    resetSortData: (state) => ({
      ...state,
      data: state.isSearched ? state.data : state.originalData
    }),

    searchData: (state, { payload }) => ({
      ...state,
      isSearched: payload,
      data: payload
        ? state.originalData.filter(location =>
          location.name.toLowerCase().includes(payload.toLowerCase()))
        : state.originalData
    }),

  },
});

export const {
  setData,
  sortDataAscending,
  sortDataDescending,
  resetSortData,
  searchData,
} = dataSlice.actions;

export default dataSlice.reducer;
