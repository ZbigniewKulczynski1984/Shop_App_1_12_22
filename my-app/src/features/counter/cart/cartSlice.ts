import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";

export interface Item {
  id: string;
  name: string;
  price: number;
}

export interface CartState {
  items: Item[];
}

const initialState: CartState = {
  items: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem: (state, action: PayloadAction<Item>) => {
      state.items.push(action.payload);
    },
  },
});

export const { addItem } = cartSlice.actions;

export const selectItemsQuantity = (state: RootState) => {
  return state.cart.items.length;
};


export const cartReducer = cartSlice.reducer;

