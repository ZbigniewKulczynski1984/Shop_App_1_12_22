import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';

export interface Item {
	id: string;
	name: string;
	price: number;
	quantity: number;
}

export interface CartState {
	items: Item[];
}

const initialState: CartState = {
	items: [],
};

export const cartSlice = createSlice({
	name: 'cart',
	initialState,
	reducers: {
		addItem: (state, action: PayloadAction<Item>) => {
			state.items.push(action.payload);

			const item = state.items.find((i) => i.id === action.payload.id);

			if (item) {
			
				item.quantity++; 
			} else {
				
				state.items.push(action.payload);
			}
		},
		removeItem: (state, action: PayloadAction<string>) => {
			const id = action.payload;

			const itemsWithoutGivenItem = state.items.filter(
				(item) => item.id !== id
			);
			state.items = itemsWithoutGivenItem;
		},
	},
});

export const { addItem, removeItem } = cartSlice.actions;

export const selectItemsQuantity = (state: RootState) => {
	return state.cart.items.length;
};

export const selectItems = (state: RootState) => {
	return state.cart.items;
};

export const cartReducer = cartSlice.reducer;
