import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const mockSlice = createSlice({
  name: "selected",
  initialState,
  reducers: {
    handleSelected: (state, action) => {
      let newSelected = [...state];

      if (action.payload.isSelcted) {
        if (newSelected.length === 6) {
          alert("최대 6장까지 선택 가능합니다.");
          return prev;
        } else if (newSelected.find((card) => card.id === action.payload.id)) {
          alert("이미 선택된 카드입니다.");
          return prev;
        } else {
          newSelected.push(action.payload);
          // console.log("added :", newSelected);
          return newSelected;
        }
      } else {
        newSelected = newSelected.filter(
          (card) => card.id !== action.payload.id
        );
        // console.log("removed :", newSelected);
        return newSelected;
      }
    },
  },
});

export const { handleSelected } = mockSlice.actions;
export default mockSlice.reducer;
