import {
	ORDER_CREATE_REQUEST,
	ORDER_CREATE_SUCCESS,
	ORDER_CREATE_FAIL,
	ORDER_CREATE_RESET,
	OrderCreateActionTypes,
	ORDER_DETAILS_REQUEST,
	ORDER_DETAILS_SUCCESS,
	ORDER_DETAILS_FAIL,
	OrderDetailsActionTypes,
	ORDER_PAY_REQUEST,
	ORDER_PAY_FAIL,
	ORDER_PAY_SUCCESS,
	ORDER_PAY_RESET,
	OrderPayActionTypes,
	ORDER_LIST_MY_REQUEST,
	ORDER_LIST_MY_SUCCESS,
	ORDER_LIST_MY_FAIL,
	ORDER_LIST_MY_RESET,
	OrderListMyActionTypes,
	ORDER_LIST_ALL_FAIL,
	ORDER_LIST_ALL_SUCCESS,
	ORDER_LIST_ALL_REQUEST,
	OrderListAllActionTypes,
	ORDER_DELIVER_REQUEST,
	ORDER_DELIVER_SUCCESS,
	ORDER_DELIVER_FAIL,
	ORDER_DELIVER_RESET,
	OrderDeliverActionTypes,
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
		case ORDER_CREATE_RESET:
			return {};
		default:
			return state;
	}
};

export const orderDetailsReducer = (
	state = { loading: true, orderItems: [], shippingAddress: {} },
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

export const orderPayReducer = (state = {}, action: OrderPayActionTypes) => {
	switch (action.type) {
		case ORDER_PAY_REQUEST:
			return {
				loading: true,
			};
		case ORDER_PAY_SUCCESS:
			return {
				loading: false,
				success: true,
			};
		case ORDER_PAY_FAIL:
			return {
				loading: false,
				error: action.payload,
			};
		case ORDER_PAY_RESET:
			return {};
		default:
			return state;
	}
};

export const orderListMyReducer = (
	state = { orders: [] },
	action: OrderListMyActionTypes
) => {
	switch (action.type) {
		case ORDER_LIST_MY_REQUEST:
			return {
				loading: true,
			};
		case ORDER_LIST_MY_SUCCESS:
			return {
				loading: false,
				orders: action.payload,
			};
		case ORDER_LIST_MY_FAIL:
			return {
				loading: false,
				error: action.payload,
			};
		case ORDER_LIST_MY_RESET:
			return { orders: [] };
		default:
			return state;
	}
};

export const orderListAllReducer = (
	state = { orders: [] },
	action: OrderListAllActionTypes
) => {
	switch (action.type) {
		case ORDER_LIST_ALL_REQUEST:
			return {
				loading: true,
			};
		case ORDER_LIST_ALL_SUCCESS:
			return {
				loading: false,
				orders: action.payload,
			};
		case ORDER_LIST_ALL_FAIL:
			return {
				loading: false,
				error: action.payload,
			};
		default:
			return state;
	}
};

export const orderDeliverReducer = (
	state = {},
	action: OrderDeliverActionTypes
) => {
	switch (action.type) {
		case ORDER_DELIVER_REQUEST:
			return {
				loading: true,
			};
		case ORDER_DELIVER_SUCCESS:
			return {
				loading: false,
				success: true,
			};
		case ORDER_DELIVER_FAIL:
			return {
				loading: false,
				error: action.payload,
			};
		case ORDER_DELIVER_RESET:
			return {};
		default:
			return state;
	}
};
