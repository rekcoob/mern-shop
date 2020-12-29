import { combineReducers } from 'redux';
import { productListReducer, productDetailsReducer } from './productReducers';
import { cartReducer } from './cartReducer';
import {
	userAuthReducer,
	userDetailsReducer,
	userUpdateProfileReducer,
} from './userReducer';
import { orderCreateReducer, orderDetailsReducer } from './orderReducers';

export const rootReducer = combineReducers({
	productList: productListReducer,
	productDetails: productDetailsReducer,
	cart: cartReducer,
	userAuth: userAuthReducer,
	userDetails: userDetailsReducer,
	userUpdateProfile: userUpdateProfileReducer,
	orderCreate: orderCreateReducer,
	orderDetails: orderDetailsReducer,
});

export type RootReducer = ReturnType<typeof rootReducer>;
