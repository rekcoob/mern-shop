import {
	ProductCreateState,
	ProductDeleteState,
	ProductDetailsState,
	ProductListState,
	ProductReviewCreateState,
	ProductTopRatedState,
	ProductUpdateState,
} from './productTypes';
import { Action } from 'redux';
import { ThunkAction } from 'redux-thunk';
import { CartStateWithPrices } from './cartTypes';
import {
	UserAuthState,
	UserDeleteState,
	UserDetailsState,
	UserListState,
	UserUpdateProfileState,
	UserUpdateState,
} from './userTypes';
import {
	CreateOrderState,
	OrderDeliverState,
	OrderDetailsState,
	OrderListAllState,
	OrderListMyState,
	OrderPayState,
} from './orderTypes';

export interface RootState {
	productList: ProductListState;
	productDetails: ProductDetailsState;
	productCreate: ProductCreateState;
	productUpdate: ProductUpdateState;
	productDelete: ProductDeleteState;
	productReviewCreate: ProductReviewCreateState;
	productTopRated: ProductTopRatedState;
	cart: CartStateWithPrices;
	userAuth: UserAuthState;
	userDetails: UserDetailsState;
	userUpdateProfile: UserUpdateProfileState;
	userList: UserListState;
	userDelete: UserDeleteState;
	userUpdate: UserUpdateState;
	orderCreate: CreateOrderState;
	orderDetails: OrderDetailsState;
	orderPay: OrderPayState;
	orderDeliver: OrderDeliverState;
	orderListMy: OrderListMyState;
	orderListAll: OrderListAllState;
}

export type AppThunk<ReturnType = void> = ThunkAction<
	ReturnType,
	RootState,
	unknown,
	Action<string>
>;
