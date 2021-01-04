import {
	ProductCreateState,
	ProductDeleteState,
	ProductDetailsState,
	ProductListState,
	ProductReviewCreateState,
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
	// cart: CartState;
	cart: CartStateWithPrices;
	userAuth: UserAuthState;
	userDetails: UserDetailsState;
	userUpdateProfile: UserUpdateProfileState;
	orderCreate: CreateOrderState;
	orderDetails: OrderDetailsState;
	orderPay: OrderPayState;
	orderListMy: OrderListMyState;
	userList: UserListState;
	userDelete: UserDeleteState;
	userUpdate: UserUpdateState;
	productDelete: ProductDeleteState;
	productCreate: ProductCreateState;
	productUpdate: ProductUpdateState;
	orderListAll: OrderListAllState;
	orderDeliver: OrderDeliverState;
	productReviewCreate: ProductReviewCreateState;
}

export type AppThunk<ReturnType = void> = ThunkAction<
	ReturnType,
	RootState,
	unknown,
	Action<string>
>;
