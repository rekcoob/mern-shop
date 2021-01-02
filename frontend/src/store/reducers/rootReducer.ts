import { combineReducers } from 'redux';
import { productListReducer, productDetailsReducer } from './productReducers';
import { cartReducer } from './cartReducer';
import {
	userAuthReducer,
	userDeleteReducer,
	userDetailsReducer,
	userListReducer,
	userUpdateProfileReducer,
	userUpdateReducer,
} from './userReducer';
import {
	orderCreateReducer,
	orderDetailsReducer,
	orderListMyReducer,
	orderPayReducer,
} from './orderReducers';

export const rootReducer = combineReducers({
	productList: productListReducer,
	productDetails: productDetailsReducer,
	cart: cartReducer,
	userAuth: userAuthReducer,
	userDetails: userDetailsReducer,
	userUpdateProfile: userUpdateProfileReducer,
	orderCreate: orderCreateReducer,
	orderDetails: orderDetailsReducer,
	orderPay: orderPayReducer,
	orderListMy: orderListMyReducer,
	userList: userListReducer,
	userDelete: userDeleteReducer,
	userUpdate: userUpdateReducer,
});

export type RootReducer = ReturnType<typeof rootReducer>;
