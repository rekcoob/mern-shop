import {
	ORDER_CREATE_REQUEST,
	ORDER_CREATE_SUCCESS,
	ORDER_CREATE_FAIL,
	OrderCreateActionTypes,
	ORDER_DETAILS_REQUEST,
	ORDER_DETAILS_SUCCESS,
	ORDER_DETAILS_FAIL,
	OrderDetailsActionTypes,
} from '../types/orderTypes';

export const orderCreateReducer = (
	state = {},
	action: OrderCreateActionTypes
) => {
	switch (action.type) {
		case ORDER_CREATE_REQUEST:
			return {
				loading: true,
			};
		case ORDER_CREATE_SUCCESS:
			return {
				loading: false,
				success: true,
				order: action.payload,
			};
		case ORDER_CREATE_FAIL:
			return {
				loading: false,
				error: action.payload,
			};
		default:
			return state;
	}
};

export const orderDetailsReducer = (
	state = { orderItems: [], shippingAddress: {} },
	action: OrderDetailsActionTypes
) => {
	switch (action.type) {
		case ORDER_DETAILS_REQUEST:
			return {
				...state,
				loading: true,
			};
		case ORDER_DETAILS_SUCCESS:
			return {
				loading: false,
				order: action.payload,
			};
		case ORDER_DETAILS_FAIL:
			return {
				loading: false,
				error: action.payload,
			};
		default:
			return state;
	}
};
