import { combineReducers } from 'redux';
import { productListReducer, productDetailsReducer } from './productReducers';
import { cartReducer } from './cartReducer';
import { userReducer } from './userReducer';

export const rootReducer = combineReducers({
	productList: productListReducer,
	productDetails: productDetailsReducer,
	cart: cartReducer,
	userAuth: userReducer,
});

export type RootReducer = ReturnType<typeof rootReducer>;
