import { combineReducers } from 'redux';
import { productListReducer, productDetailsReducer } from './productReducers';
import { cartReducer } from './cartReducer';

export const rootReducer = combineReducers({
	productList: productListReducer,
	productDetails: productDetailsReducer,
	cart: cartReducer,
});

export type RootReducer = ReturnType<typeof rootReducer>;
