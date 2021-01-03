export const PRODUCT_LIST_REQUEST = 'PRODUCT_LIST_REQUEST';
export const PRODUCT_LIST_SUCCESS = 'PRODUCT_LIST_SUCCESS';
export const PRODUCT_LIST_FAIL = 'PRODUCT_LIST_FAIL';

export const PRODUCT_DETAILS_REQUEST = 'PRODUCT_DETAILS_REQUEST';
export const PRODUCT_DETAILS_SUCCESS = 'PRODUCT_DETAILS_SUCCESS';
export const PRODUCT_DETAILS_FAIL = 'PRODUCT_DETAILS_FAIL';

export const PRODUCT_DELETE_REQUEST = 'PRODUCT_DELETE_REQUEST';
export const PRODUCT_DELETE_SUCCESS = 'PRODUCT_DELETE_SUCCESS';
export const PRODUCT_DELETE_FAIL = 'PRODUCT_DELETE_FAIL';

export const PRODUCT_CREATE_REQUEST = 'PRODUCT_CREATE_REQUEST';
export const PRODUCT_CREATE_SUCCESS = 'PRODUCT_CREATE_SUCCESS';
export const PRODUCT_CREATE_FAIL = 'PRODUCT_CREATE_FAIL';
export const PRODUCT_CREATE_RESET = 'PRODUCT_CREATE_RESET';

export const PRODUCT_UPDATE_REQUEST = 'PRODUCT_UPDATE_REQUEST';
export const PRODUCT_UPDATE_SUCCESS = 'PRODUCT_UPDATE_SUCCESS';
export const PRODUCT_UPDATE_FAIL = 'PRODUCT_UPDATE_FAIL';
export const PRODUCT_UPDATE_RESET = 'PRODUCT_UPDATE_RESET';

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

/**
 * Delete Product | Admin only
 */
export type ProductDeleteState = {
	success: boolean;
	loading: boolean;
	error?: string;
};
interface ProductDeleteRequestAction {
	type: typeof PRODUCT_DELETE_REQUEST;
}
interface ProductDeleteSuccessAction {
	type: typeof PRODUCT_DELETE_SUCCESS;
}
interface ProductDeleteFailAction {
	type: typeof PRODUCT_DELETE_FAIL;
	payload: string;
}
export type ProductDeleteActionTypes =
	| ProductDeleteRequestAction
	| ProductDeleteSuccessAction
	| ProductDeleteFailAction;

/**
 * Create Product | Admin only
 */
export type ProductCreateState = {
	product: IProduct;
	success: boolean;
	loading: boolean;
	error?: string;
};
interface ProductCreateRequestAction {
	type: typeof PRODUCT_CREATE_REQUEST;
}
interface ProductCreateSuccessAction {
	type: typeof PRODUCT_CREATE_SUCCESS;
	payload: IProduct;
}
interface ProductCreateFailAction {
	type: typeof PRODUCT_CREATE_FAIL;
	payload: string;
}
interface ProductCreateResetAction {
	type: typeof PRODUCT_CREATE_RESET;
}
export type ProductCreateActionTypes =
	| ProductCreateRequestAction
	| ProductCreateSuccessAction
	| ProductCreateFailAction
	| ProductCreateResetAction;

/**
 * Update Product | Admin only
 */
export type ProductUpdateState = {
	product: IProduct;
	success: boolean;
	loading: boolean;
	error?: string;
};
interface ProductUpdateRequestAction {
	type: typeof PRODUCT_UPDATE_REQUEST;
}
interface ProductUpdateSuccessAction {
	type: typeof PRODUCT_UPDATE_SUCCESS;
	payload: IProduct;
}
interface ProductUpdateFailAction {
	type: typeof PRODUCT_UPDATE_FAIL;
	payload: string;
}
interface ProductUpdateResetAction {
	type: typeof PRODUCT_UPDATE_RESET;
}
export type ProductUpdateActionTypes =
	| ProductUpdateRequestAction
	| ProductUpdateSuccessAction
	| ProductUpdateFailAction
	| ProductUpdateResetAction;
