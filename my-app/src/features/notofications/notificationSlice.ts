import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';

export interface Notification {
	message: string;
	type: string;
	id: string;
}

export interface NotificationsState {
	items: Notification[];
}

const initialState: NotificationsState = {
	items: [{ id: '1', type: 'success', message: 'Pierwszy alert' }],
};

export const notificationsSlice = createSlice({
	name: 'notifications',
	initialState,
	reducers: {
		addNotification(
			state,
			action: PayloadAction<{ type: string; message: string }>
		) {
			const id = new Date().getTime().toString();

			const notification: Notification = {
				...action.payload,
				id,
			};

			state.items = [...state.items, notification];
		},
		removeNotification(state, action: PayloadAction<{ id: string }>) {
			const { id } = action.payload;
			state.items = state.items.filter((item) => item.id !== id);
		},
	},
});

export const notificationsReducer = notificationsSlice.reducer;

export const { addNotification, removeNotification } =
	notificationsSlice.actions;

export const selectNotifications = (state: RootState) =>
	state.notifications.items;
