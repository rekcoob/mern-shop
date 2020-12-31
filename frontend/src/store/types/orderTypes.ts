import { ICartItem, IShippingAddress } from './cartTypes';
import { IUserInfo } from './userTypes';

export const ORDER_CREATE_REQUEST = 'ORDER_CREATE_REQUEST';
export const ORDER_CREATE_SUCCESS = 'ORDER_CREATE_SUCCESS';
export const ORDER_CREATE_FAIL = 'ORDER_CREATE_FAIL';

export const ORDER_DETAILS_REQUEST = 'ORDER_DETAILS_REQUEST';
export const ORDER_DETAILS_SUCCESS = 'ORDER_DETAILS_SUCCESS';
export const ORDER_DETAILS_FAIL = 'ORDER_DETAILS_FAIL';

export const ORDER_PAY_REQUEST = 'ORDER_PAY_REQUEST';
export const ORDER_PAY_SUCCESS = 'ORDER_PAY_SUCCESS';
export const ORDER_PAY_FAIL = 'ORDER_PAY_FAIL';
export const ORDER_PAY_RESET = 'ORDER_PAY_RESET';

export interface IOrder {
	_id?: string;
	orderItems: ICartItem[];
	shippingAddress: IShippingAddress;
	paymentMethod: string;
	itemsPrice: number;
	shippingPrice: number;
	taxPrice: number;
	totalPrice: number;
}

export interface IOrderDetails extends IOrder {
	user: IUserInfo;
	isDelivered: boolean;
	deliveredAt: string;
	isPaid: boolean;
	paidAt: string;
}

/**
 *  Create Order
 */
export type CreateOrderState = {
	order: IOrder;
	success: boolean;
	loading: boolean;
	error?: string;
};

interface OrderCreateRequestAction {
	type: typeof ORDER_CREATE_REQUEST;
}
interface OrderCreateSuccessAction {
	type: typeof ORDER_CREATE_SUCCESS;
	payload: IOrder;
}
interface OrderCreateFailAction {
	type: typeof ORDER_CREATE_FAIL;
	payload: string;
}
export type OrderCreateActionTypes =
	| OrderCreateRequestAction
	| OrderCreateSuccessAction
	| OrderCreateFailAction;

/**
 *  Order Details
 */
export type OrderDetailsState = {
	orderItems: ICartItem[];
	shippingAddress: IShippingAddress;
	order: IOrderDetails;
	success: boolean;
	loading: boolean;
	error?: string;
};
interface OrderDetailsRequestAction {
	type: typeof ORDER_DETAILS_REQUEST;
}
interface OrderDetailsSuccessAction {
	type: typeof ORDER_DETAILS_SUCCESS;
	payload: IOrder;
}
interface OrderDetailsFailAction {
	type: typeof ORDER_DETAILS_FAIL;
	payload: string;
}
export type OrderDetailsActionTypes =
	| OrderDetailsRequestAction
	| OrderDetailsSuccessAction
	| OrderDetailsFailAction;

/**
 *  Order Pay
 */
export type OrderPayState = {
	success: boolean;
	loading: boolean;
	error?: string;
};
interface OrderPayRequestAction {
	type: typeof ORDER_PAY_REQUEST;
}
interface OrderPaySuccessAction {
	type: typeof ORDER_PAY_SUCCESS;
}
interface OrderPayFailAction {
	type: typeof ORDER_PAY_FAIL;
	payload: string;
}
interface OrderPayResetAction {
	type: typeof ORDER_PAY_RESET;
}
export type OrderPayActionTypes =
	| OrderPayRequestAction
	| OrderPaySuccessAction
	| OrderPayFailAction
	| OrderPayResetAction;
