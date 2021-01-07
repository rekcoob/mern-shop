import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { rootReducer } from './reducers/rootReducer';
import { ICartItem, IShippingAddress } from './types/cartTypes';
import { IUserToken } from './types/userTypes';

const cartItemsFromStorage: ICartItem[] = localStorage.getItem('cartItems')
	? JSON.parse(localStorage.getItem('cartItems')!)
	: [];

const userInfoFromStorage: IUserToken = localStorage.getItem('userInfo')
	? JSON.parse(localStorage.getItem('userInfo')!)
	: null;

const shippingAddressFromStorage: IShippingAddress = localStorage.getItem(
	'shippingAddress'
)
	? JSON.parse(localStorage.getItem('shippingAddress')!)
	: {};

const paymentMethodFromStorage: string = localStorage.getItem('paymentMethod')
	? JSON.parse(localStorage.getItem('paymentMethod')!)
	: {};

const initialState = {
	cart: {
		cartItems: cartItemsFromStorage,
		shippingAddress: shippingAddressFromStorage,
		paymentMethod: paymentMethodFromStorage,
	},
	userAuth: { userInfo: userInfoFromStorage },
};

const middleware = [thunk];

const store = createStore(
	rootReducer,
	initialState,
	composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
