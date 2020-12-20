import { ProductState } from './productTypes';
import { Action } from 'redux';
import { ThunkAction } from 'redux-thunk';

export interface RootState {
	productList: ProductState;
}

export type AppThunk<ReturnType = void> = ThunkAction<
	ReturnType,
	RootState,
	unknown,
	Action<string>
>;
