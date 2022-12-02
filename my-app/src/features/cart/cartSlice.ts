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
	isDisplayed: boolean;
}

const initialState: CartState = {
	items: [],
	isDisplayed: false,
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

		toggleCart: (state) => {
			state.isDisplayed = !state.isDisplayed;
		  },
	},
});

export const {  addItem,
  removeItem,
  increaseQuantity,
  decreaseQuantity,
  toggleCart,
} = cartSlice.actions;

export const selectIsDisplayed = (state: RootState) => {
  return state.cart.isDisplayed;
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
