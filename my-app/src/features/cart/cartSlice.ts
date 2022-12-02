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

const remove = (items: Item[], id: string) => {
	items = items.filter((i) => i.id !== id);
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

		increaseQuantity: (state, action: PayloadAction<string>) => {
			const id = action.payload;

			const item = state.items.find((i) => i.id === id);

			if (item) {
				item.quantity++;
			}
		},
		decreaseQuantity: (state, action: PayloadAction<string>) => {
			const id = action.payload;

			const item = state.items.find((i) => i.id === id);

			if (item) {
				if (item.quantity > 1) {
					item.quantity--;
				} else {
					state.items = state.items.filter((i) => i.id !== id);
				}
			}
		},
	},
});

export const { addItem, removeItem, increaseQuantity, decreaseQuantity } =
	cartSlice.actions;

export const selectItemsQuantity = (state: RootState) => {
	const total = state.cart.items.reduce((acc, item) => {
		acc += item.quantity;
		return acc; // (1) acc = 0 => 2; (2) acc = 2 => 2 + 3 = 5
	}, 0); // acc = 0;

	return total;
};

export const selectTotal = (state: RootState) => {
	let total = 0;

	state.cart.items.forEach((item) => {
		total += item.price * item.quantity;
	});

	return total;
};

export const selectItems = (state: RootState) => {
	return state.cart.items;
};

export const cartReducer = cartSlice.reducer;
