import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { rootReducer } from './reducers/rootReducer';
import { ICartItem } from './types/cartTypes';

const cartItemsFromStorage: ICartItem[] = localStorage.getItem('cartItems')
	? JSON.parse(localStorage.getItem('cartItems')!)
	: [];

const userInfoFromStorage = localStorage.getItem('userInfo')
	? JSON.parse(localStorage.getItem('userInfo')!)
	: null;

const initialState = {
	cart: { cartItems: cartItemsFromStorage },
	userAuth: { userInfo: userInfoFromStorage },
};

const middleware = [thunk];

const store = createStore(
	rootReducer,
	initialState,
	composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
