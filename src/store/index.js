import { configureStore } from "@reduxjs/toolkit";

import globalReducer from "./globalSlice.js";
import dataReducer from "./dataSlice.js";

export * from "./globalSlice.js";
export * from "./dataSlice.js";

export const store = configureStore({
  reducer: {
    globalState: globalReducer,
    dataState: dataReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({ serializableCheck: false, }),
});