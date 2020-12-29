import axios from 'axios';
import {
	ORDER_CREATE_REQUEST,
	ORDER_CREATE_SUCCESS,
	ORDER_CREATE_FAIL,
	IOrder,
} from '../types/orderTypes';
import { AppThunk } from '../types/rootTypes';

export const createOrder = (order: IOrder): AppThunk => async (
	dispatch,
	getState
) => {
	try {
		dispatch({
			type: ORDER_CREATE_REQUEST,
		});

		const {
			userAuth: { userInfo },
		} = getState();

		const config = {
			headers: {
				'Content-Type': 'application/json',
				Authorization: `Bearer ${userInfo.token}`,
			},
		};

		const { data } = await axios.post(`/api/orders`, order, config);

		dispatch({
			type: ORDER_CREATE_SUCCESS,
			payload: data,
		});
	} catch (error) {
		dispatch({
			type: ORDER_CREATE_FAIL,
			payload:
				error.response && error.response.data.message
					? error.response.data.message
					: error.message,
		});
	}
};
