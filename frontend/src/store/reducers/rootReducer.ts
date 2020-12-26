import { combineReducers } from 'redux';
import { productListReducer, productDetailsReducer } from './productReducers';
import { cartReducer } from './cartReducer';
import {
	// userLoginReducer,
	userReducer,
	// userRegisterReducer,
} from './userReducer';

export const rootReducer = combineReducers({
	productList: productListReducer,
	productDetails: productDetailsReducer,
	cart: cartReducer,
	// userLogin: userLoginReducer,
	// userRegister: userRegisterReducer,
	userAuth: userReducer,
});

export type RootReducer = ReturnType<typeof rootReducer>;
