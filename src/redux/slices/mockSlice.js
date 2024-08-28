import { createSlice } from "@reduxjs/toolkit";
import MOCK_DATA from "../../mock";

const initialState = MOCK_DATA;

const mockSlice = createSlice({
  name: "mock",
  initialState,
  reducers: {
    editMock: (state, action) => {
      const newMock = [...state];
      newMock[action.payload.id - 1] = action.payload;
      return newMock;
    },
  },
});

export const { editMock } = mockSlice.actions;
export default mockSlice.reducer;
