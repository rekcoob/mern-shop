import { ProductDetailsState, ProductListState } from './productTypes';
import { Action } from 'redux';
import { ThunkAction } from 'redux-thunk';
import { CartState } from './cartTypes';
import {
	UserAuthState,
	UserDetailsState,
	UserUpdateProfileState,
} from './userTypes';
import { CreateOrderState, OrderDetailsState } from './orderTypes';

export interface RootState {
	productList: ProductListState;
	productDetails: ProductDetailsState;
	cart: CartState;
	userAuth: UserAuthState;
	userDetails: UserDetailsState;
	userUpdateProfile: UserUpdateProfileState;
	orderCreate: CreateOrderState;
	orderDetails: OrderDetailsState;
}

export type AppThunk<ReturnType = void> = ThunkAction<
	ReturnType,
	RootState,
	unknown,
	Action<string>
>;
