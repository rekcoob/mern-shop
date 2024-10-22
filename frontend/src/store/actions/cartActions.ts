import axios from 'axios';
import {
	CART_ADD_ITEM,
	CART_REMOVE_ITEM,
	CART_SAVE_SHIPPING_ADDRESS,
	CART_SAVE_PAYMENT_METHOD,
	CART_CLEAR_ITEMS,
	IShippingAddress,
} from '../types/cartTypes';
import { AppThunk } from '../types/rootTypes';

export const addToCart = (id: string, qty: number): AppThunk => async (
	dispatch,
	getState
) => {
	const { data } = await axios.get(`/api/products/${id}`);

	dispatch({
		type: CART_ADD_ITEM,
		payload: {
			product: data._id,
			name: data.name,
			image: data.image,
			price: data.price,
			countInStock: data.countInStock,
			qty,
		},
	});

	localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems));
};

export const removeFromCart = (id: string): AppThunk => (
	dispatch,
	getState
) => {
	dispatch({
		type: CART_REMOVE_ITEM,
		payload: id,
	});

	localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems));
};

export const saveShippingAddress = (data: IShippingAddress): AppThunk => (
	dispatch
) => {
	dispatch({
		type: CART_SAVE_SHIPPING_ADDRESS,
		payload: data,
	});

	localStorage.setItem('shippingAddress', JSON.stringify(data));
};

export const savePaymentMethod = (data: string): AppThunk => (dispatch) => {
	dispatch({
		type: CART_SAVE_PAYMENT_METHOD,
		payload: data,
	});

	localStorage.setItem('paymentMethod', JSON.stringify(data));
};

export const clearCartItems = (): AppThunk => (dispatch, getState) => {
	dispatch({
		type: CART_CLEAR_ITEMS,
	});

	localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems));
};
