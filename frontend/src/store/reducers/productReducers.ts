import {
	PRODUCT_LIST_REQUEST,
	PRODUCT_LIST_SUCCESS,
	PRODUCT_LIST_FAIL,
	ProductActionTypes,
	ProductListState,
	PRODUCT_DETAILS_REQUEST,
	PRODUCT_DETAILS_SUCCESS,
	PRODUCT_DETAILS_FAIL,
	ProductDetailsActionTypes,
} from '../types/productTypes';

const initialProductListState: ProductListState = {
	products: [],
	loading: false,
};

export const productListReducer = (
	state = initialProductListState,
	action: ProductActionTypes
) => {
	switch (action.type) {
		case PRODUCT_LIST_REQUEST:
			return { loading: true, products: [] };
		case PRODUCT_LIST_SUCCESS:
			return { loading: false, products: action.payload };
		case PRODUCT_LIST_FAIL:
			return { loading: false, error: action.payload };
		default:
			return state;
	}
};

export const productDetailsReducer = (
	state = { product: { reviews: [] } },
	action: ProductDetailsActionTypes
) => {
	switch (action.type) {
		case PRODUCT_DETAILS_REQUEST:
			return { ...state, loading: true };
		case PRODUCT_DETAILS_SUCCESS:
			return { loading: false, product: action.payload };
		case PRODUCT_DETAILS_FAIL:
			return { loading: false, error: action.payload };
		default:
			return state;
	}
};
