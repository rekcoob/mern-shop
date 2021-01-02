import { ProductDetailsState, ProductListState } from './productTypes';
import { Action } from 'redux';
import { ThunkAction } from 'redux-thunk';
import { CartStateWithPrices } from './cartTypes';
import {
	UserAuthState,
	UserDetailsState,
	UserUpdateProfileState,
} from './userTypes';
import {
	CreateOrderState,
	OrderDetailsState,
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
}

export type AppThunk<ReturnType = void> = ThunkAction<
	ReturnType,
	RootState,
	unknown,
	Action<string>
>;
