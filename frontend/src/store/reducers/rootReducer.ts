import { combineReducers } from 'redux';
import {
	productListReducer,
	productDetailsReducer,
	productDeleteReducer,
	productCreateReducer,
	productUpdateReducer,
	productReviewCreateReducer,
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
	productDelete: productDeleteReducer,
	productCreate: productCreateReducer,
	productUpdate: productUpdateReducer,
	orderListAll: orderListAllReducer,
	orderDeliver: orderDeliverReducer,
	productReviewCreate: productReviewCreateReducer,
});

export type RootReducer = ReturnType<typeof rootReducer>;
