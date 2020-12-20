export const PRODUCT_LIST_REQUEST = 'PRODUCT_LIST_REQUEST';
export const PRODUCT_LIST_SUCCESS = 'PRODUCT_LIST_SUCCESS';
export const PRODUCT_LIST_FAIL = 'PRODUCT_LIST_FAIL';

export interface IProduct {
	_id: string;
	name: string;
	image: string;
	description: string;
	brand: string;
	category: string;
	price: number;
	countInStock: number;
	rating: number;
	numReviews: number;
}

export type ProductState = {
	products: IProduct[];
	loading: boolean;
	error?: string;
};
interface ProductListRequestAction {
	type: typeof PRODUCT_LIST_REQUEST;
}
interface ProductListSuccessAction {
	type: typeof PRODUCT_LIST_SUCCESS;
	payload: IProduct[];
}
interface ProductListFailAction {
	type: typeof PRODUCT_LIST_FAIL;
	payload: any;
}
export type ProductActionTypes =
	| ProductListRequestAction
	| ProductListSuccessAction
	| ProductListFailAction;
