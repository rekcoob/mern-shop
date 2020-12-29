import { ICartItem, IShippingAddress } from './cartTypes';

export const ORDER_CREATE_REQUEST = 'ORDER_CREATE_REQUEST';
export const ORDER_CREATE_SUCCESS = 'ORDER_CREATE_SUCCESS';
export const ORDER_CREATE_FAIL = 'ORDER_CREATE_FAIL';

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

export type OrderState = {
	order: IOrder;
	success: boolean;
	loading: boolean;
	error?: string;
};

interface OrderCreateRequestAction {
	type: typeof ORDER_CREATE_REQUEST;
	payload: any;
}
interface OrderCreateSuccessAction {
	type: typeof ORDER_CREATE_SUCCESS;
	payload: any;
}
interface OrderCreateFailAction {
	type: typeof ORDER_CREATE_FAIL;
	payload: any;
}
export type OrderActionTypes =
	| OrderCreateRequestAction
	| OrderCreateSuccessAction
	| OrderCreateFailAction;
