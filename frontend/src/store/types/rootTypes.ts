import { ProductDetailsState, ProductListState } from './productTypes';
import { Action } from 'redux';
import { ThunkAction } from 'redux-thunk';
import { CartState } from './cartTypes';

export interface RootState {
	productList: ProductListState;
	productDetails: ProductDetailsState;
	cart: CartState;
}

export type AppThunk<ReturnType = void> = ThunkAction<
	ReturnType,
	RootState,
	unknown,
	Action<string>
>;
