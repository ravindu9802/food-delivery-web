import { createSlice } from "@reduxjs/toolkit";

export interface CounterState {
  displayLogInPopup: boolean;
  isLogged: boolean;
}

const initialState: CounterState = {
  displayLogInPopup: false,
  isLogged: false,
};

export const counterSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    showLogInPopup: (state) => {
      state.displayLogInPopup = true;
    },
    hideLogInPopup: (state) => {
      state.displayLogInPopup = false;
    },

    setLogIn: (state) => {
      state.isLogged = true;
    },
    setLogOut: (state) => {
      state.isLogged = false;
      localStorage.clear();
    },
  },
});

export const { showLogInPopup, hideLogInPopup, setLogIn, setLogOut } =
  counterSlice.actions;

export default counterSlice.reducer;
