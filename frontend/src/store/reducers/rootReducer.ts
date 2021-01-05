import { combineReducers } from 'redux';
import {
	productListReducer,
	productDetailsReducer,
	productDeleteReducer,
	productCreateReducer,
	productUpdateReducer,
	productReviewCreateReducer,
	productTopRatedReducer,
} from './productReducers';
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
	orderDeliverReducer,
	orderDetailsReducer,
	orderListAllReducer,
	orderListMyReducer,
	orderPayReducer,
} from './orderReducers';

export const rootReducer = combineReducers({
	productList: productListReducer,
	productDetails: productDetailsReducer,
	productCreate: productCreateReducer,
	productUpdate: productUpdateReducer,
	productDelete: productDeleteReducer,
	productReviewCreate: productReviewCreateReducer,
	productTopRated: productTopRatedReducer,
	cart: cartReducer,
	userAuth: userAuthReducer,
	userDetails: userDetailsReducer,
	userUpdateProfile: userUpdateProfileReducer,
	userList: userListReducer,
	userDelete: userDeleteReducer,
	userUpdate: userUpdateReducer,
	orderCreate: orderCreateReducer,
	orderDetails: orderDetailsReducer,
	orderPay: orderPayReducer,
	orderDeliver: orderDeliverReducer,
	orderListMy: orderListMyReducer,
	orderListAll: orderListAllReducer,
});

export type RootReducer = ReturnType<typeof rootReducer>;
