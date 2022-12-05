import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";

export interface ProductModel {
  id: string;
  name: string;
  description: string;
  price: number;
  currency: string;
}

export interface ProductsState {
  products: ProductModel[];
  searchResults: ProductModel[];
}

const productsList = [
  {
    id: "1",
    name: "Call of Duty",
    price: 150,
    description: "Super gra",
    currency: "PLN",
  },
  {
    id: "2",
    name: "Fifa 2022",
    price: 100,
    description: "Super gra",
    currency: "PLN",
  },
  {
    id: "3",
    name: "Cyberpunk",
    price: 100,
    description: "Super gra",
    currency: "PLN",
  },
  {
    id: "4",
    name: "God of War",
    price: 199,
    description: "Super gra",
    currency: "PLN",
  },
  {
    id: "5",
    name: "NBA 2k22",
    price: 99,
    description: "Super gra",
    currency: "PLN",
  },
  {
    id: "6",
    name: "Crash Bandicoot",
    price: 149,
    description: "Super gra",
    currency: "PLN",
  },
  {
    id: "7",
    name: "Horizon",
    price: 169,
    description: "Super gra",
    currency: "PLN",
  },
  {
    id: "8",
    name: "Minecraft",
    price: 80,
    description: "Super gra",
    currency: "PLN",
  },
];

const initialState: ProductsState = {
  products: productsList,
  searchResults: productsList,
};

export const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    searchProducts: (
      state: ProductsState,
      action: PayloadAction<{ query: string }>
    ) => {
      const { query } = action.payload;

      state.searchResults = state.products.filter((product) =>
        product.name.toLowerCase().includes(query.toLowerCase())
      );
    },
  },
});

export const selectProducts = (state: RootState) => state.products.products;

export const selectSearchResults = (state: RootState) =>
  state.products.searchResults;

export const { searchProducts } = productsSlice.actions;

export const productsReducer = productsSlice.reducer;