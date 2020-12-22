export const CART_ADD_ITEM = 'CART_ADD_ITEM';
export const CART_REMOVE_ITEM = 'CART_REMOVE_ITEM';

export interface ICartItem {
	product: string;
	name: string;
	image: string;
	price: number;
	countInStock: number;
	qty: number;
}

/**
 * All Products List
 */
export type CartState = {
	cartItems: ICartItem[];
};
interface CartAddItemAction {
	type: typeof CART_ADD_ITEM;
	payload: ICartItem;
}
interface CartRemoveItemAction {
	type: typeof CART_REMOVE_ITEM;
	payload: string;
}

export type CartActionTypes = CartAddItemAction | CartRemoveItemAction;
