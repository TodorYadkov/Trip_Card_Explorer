import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoading: false,
  modalProps: {
    isOpenModal: false,
    title: "",
    content: "",
    btnText: "",
    backdrop: true,
    modalHandler: () => { },
  },
};

export const globalState = createSlice({
  name: "global",
  initialState,
  reducers: {
    startLoading: (state) => ({
      ...state,
      isLoading: true
    }),

    stopLoading: (state) => ({
      ...state,
      isLoading: false
    }),

    setModal: (state, { payload }) => ({
      ...state,
      modalProps: { ...state.modalProps, ...payload }
    }),
  },
});

export const {
  startLoading,
  stopLoading,

  setModal,
} = globalState.actions;

export default globalState.reducer;