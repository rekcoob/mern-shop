export const CART_ADD_ITEM = 'CART_ADD_ITEM';
export const CART_REMOVE_ITEM = 'CART_REMOVE_ITEM';
export const CART_SAVE_SHIPPING_ADDRESS = 'CART_SAVE_SHIPPING_ADDRESS';
export const CART_SAVE_PAYMENT_METHOD = 'CART_SAVE_PAYMENT_METHOD';

export interface ICartItem {
	product: string;
	name: string;
	image: string;
	price: number;
	countInStock: number;
	qty: number;
}

export interface IShippingAddress {
	address: string;
	city: string;
	postalCode: string;
	country: string;
}

/**
 * All Products List
 */
export type CartState = {
	cartItems: ICartItem[];
	shippingAddress: IShippingAddress;
};
interface CartAddItemAction {
	type: typeof CART_ADD_ITEM;
	payload: ICartItem;
}
interface CartRemoveItemAction {
	type: typeof CART_REMOVE_ITEM;
	payload: string;
}
interface CartSaveShippingAddressAction {
	type: typeof CART_SAVE_SHIPPING_ADDRESS;
	payload: IShippingAddress;
}
interface CartSavePaymentMethodAction {
	type: typeof CART_SAVE_PAYMENT_METHOD;
	payload: string;
}

export type CartActionTypes =
	| CartAddItemAction
	| CartRemoveItemAction
	| CartSaveShippingAddressAction
	| CartSavePaymentMethodAction;
