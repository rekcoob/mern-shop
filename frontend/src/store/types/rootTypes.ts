import { ProductDetailsState, ProductListState } from './productTypes';
import { Action } from 'redux';
import { ThunkAction } from 'redux-thunk';
import { CartState } from './cartTypes';
import { UserLoginState, UserRegisterState, UserAuthState } from './userTypes';

export interface RootState {
	productList: ProductListState;
	productDetails: ProductDetailsState;
	cart: CartState;
	// userLogin: UserLoginState;
	// userRegister: UserRegisterState;
	userAuth: UserAuthState;
}

export type AppThunk<ReturnType = void> = ThunkAction<
	ReturnType,
	RootState,
	unknown,
	Action<string>
>;
