import { configureStore } from "@reduxjs/toolkit";
import mockSlice from "../slices/mockSlice";
import selectedSlice from "../slices/selectedSlice";


const store = configureStore({
  reducer: {
    mock: mockSlice,
    selected: selectedSlice,
  }
})

export default store;