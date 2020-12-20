export const PRODUCT_LIST_REQUEST = 'PRODUCT_LIST_REQUEST';
export const PRODUCT_LIST_SUCCESS = 'PRODUCT_LIST_SUCCESS';
export const PRODUCT_LIST_FAIL = 'PRODUCT_LIST_FAIL';
export const PRODUCT_DETAILS_REQUEST = 'PRODUCT_DETAILS_REQUEST';
export const PRODUCT_DETAILS_SUCCESS = 'PRODUCT_DETAILS_SUCCESS';
export const PRODUCT_DETAILS_FAIL = 'PRODUCT_DETAILS_FAIL';

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

/**
 * All Products List
 */
export type ProductListState = {
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
	payload: string;
}
export type ProductActionTypes =
	| ProductListRequestAction
	| ProductListSuccessAction
	| ProductListFailAction;

/**
 * Single Product Details
 */
export type ProductDetailsState = {
	product: IProduct;
	loading: boolean;
	error?: string;
};
interface ProductDetailsRequestAction {
	type: typeof PRODUCT_DETAILS_REQUEST;
}
interface ProductDetailsSuccessAction {
	type: typeof PRODUCT_DETAILS_SUCCESS;
	payload: IProduct;
}
interface ProductDetailsFailAction {
	type: typeof PRODUCT_DETAILS_FAIL;
	payload: string;
}
export type ProductDetailsActionTypes =
	| ProductDetailsRequestAction
	| ProductDetailsSuccessAction
	| ProductDetailsFailAction;
