import {
	CartActionTypes,
	CartState,
	CART_ADD_ITEM,
	CART_REMOVE_ITEM,
} from '../types/cartTypes';

const initialState: CartState = {
	cartItems: [],
};

export const cartReducer = (state = initialState, action: CartActionTypes) => {
	switch (action.type) {
		case CART_ADD_ITEM:
			const item = action.payload;

			const existItem = state.cartItems.find((x) => x.product === item.product);

			if (existItem) {
				return {
					...state,
					cartItems: state.cartItems.map((x) =>
						x.product === existItem.product ? item : x
					),
				};
			} else {
				return {
					...state,
					cartItems: [...state.cartItems, item],
				};
			}
		case CART_REMOVE_ITEM:
			return {
				...state,
				cartItems: state.cartItems.filter((x) => x.product !== action.payload),
			};
		default:
			return state;
	}
};
