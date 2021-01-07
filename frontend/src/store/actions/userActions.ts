import axios from 'axios';
import {
	USER_AUTH_FAIL,
	USER_AUTH_REQUEST,
	USER_AUTH_SUCCESS,
	USER_AUTH_LOGOUT,
	USER_DETAILS_REQUEST,
	USER_DETAILS_SUCCESS,
	USER_DETAILS_FAIL,
	USER_DETAILS_RESET,
	USER_UPDATE_PROFILE_REQUEST,
	USER_UPDATE_PROFILE_SUCCESS,
	USER_UPDATE_PROFILE_FAIL,
	USER_LIST_FAIL,
	USER_LIST_SUCCESS,
	USER_LIST_REQUEST,
	USER_LIST_RESET,
	USER_DELETE_REQUEST,
	USER_DELETE_SUCCESS,
	USER_DELETE_FAIL,
	USER_UPDATE_FAIL,
	USER_UPDATE_SUCCESS,
	USER_UPDATE_REQUEST,
	IUserInfo,
	IUser,
} from '../types/userTypes';
import { ORDER_LIST_MY_RESET } from '../types/orderTypes';
import { AppThunk } from '../types/rootTypes';
import { PRODUCT_CREATE_REVIEW_RESET } from '../types/productTypes';

const config = {
	headers: {
		'Content-Type': 'application/json',
	},
};

// Login User | Public
export const login = (email: string, password: string): AppThunk => async (
	dispatch
) => {
	try {
		dispatch({
			type: USER_AUTH_REQUEST,
		});
		const { data } = await axios.post(
			'/api/users/login',
			{ email, password },
			config
		);
		dispatch({
			type: USER_AUTH_SUCCESS,
			payload: data,
		});
		localStorage.setItem('userInfo', JSON.stringify(data));
	} catch (error) {
		dispatch({
			type: USER_AUTH_FAIL,
			payload:
				error.response && error.response.data.message
					? error.response.data.message
					: error.message,
		});
	}
};

// Logout User
export const logout = (): AppThunk => (dispatch) => {
	localStorage.removeItem('userInfo');
	localStorage.removeItem('cartItems');
	localStorage.removeItem('shippingAddress');
	localStorage.removeItem('paymentMethod');
	dispatch({ type: USER_AUTH_LOGOUT });
	dispatch({ type: USER_DETAILS_RESET });
	dispatch({ type: ORDER_LIST_MY_RESET });
	dispatch({ type: USER_LIST_RESET });
	dispatch({ type: PRODUCT_CREATE_REVIEW_RESET });
};

// Register User | Public
export const register = (
	name: string,
	email: string,
	password: string
): AppThunk => async (dispatch) => {
	try {
		dispatch({
			type: USER_AUTH_REQUEST,
		});
		const { data } = await axios.post(
			'/api/users',
			{ name, email, password },
			config
		);
		dispatch({
			type: USER_AUTH_SUCCESS,
			payload: data,
		});
		localStorage.setItem('userInfo', JSON.stringify(data));
	} catch (error) {
		dispatch({
			type: USER_AUTH_FAIL,
			payload:
				error.response && error.response.data.message
					? error.response.data.message
					: error.message,
		});
	}
};

// Get User Profile | Private | User
export const getUserDetails = (id: string): AppThunk => async (
	dispatch,
	getState
) => {
	try {
		dispatch({
			type: USER_DETAILS_REQUEST,
		});

		const {
			userAuth: { userInfo },
		} = getState();

		const configWithToken = {
			headers: {
				'Content-Type': 'application/json',
				Authorization: `Bearer ${userInfo.token}`,
			},
		};

		const { data } = await axios.get(`/api/users/${id}`, configWithToken);

		dispatch({
			type: USER_DETAILS_SUCCESS,
			payload: data,
		});
	} catch (error) {
		dispatch({
			type: USER_DETAILS_FAIL,
			payload:
				error.response && error.response.data.message
					? error.response.data.message
					: error.message,
		});
	}
};

// Update User Profile | Private | User
export const updateUserProfile = (user: any): AppThunk => async (
	dispatch,
	getState
) => {
	try {
		dispatch({
			type: USER_UPDATE_PROFILE_REQUEST,
		});

		const {
			userAuth: { userInfo },
		} = getState();
		const configWithToken = {
			headers: {
				'Content-Type': 'application/json',
				Authorization: `Bearer ${userInfo.token}`,
			},
		};
		const { data } = await axios.put(
			`/api/users/profile`,
			user,
			configWithToken
		);
		dispatch({
			type: USER_UPDATE_PROFILE_SUCCESS,
			payload: data,
		});
		dispatch({
			type: USER_AUTH_SUCCESS,
			payload: data,
		});
		localStorage.setItem('userInfo', JSON.stringify(data));
	} catch (error) {
		dispatch({
			type: USER_UPDATE_PROFILE_FAIL,
			payload:
				error.response && error.response.data.message
					? error.response.data.message
					: error.message,
		});
	}
};

// Get All Users | Private | Admin
export const listUsers = (): AppThunk => async (dispatch, getState) => {
	try {
		dispatch({
			type: USER_LIST_REQUEST,
		});

		const {
			userAuth: { userInfo },
		} = getState();

		const config = {
			headers: {
				Authorization: `Bearer ${userInfo.token}`,
			},
		};

		const { data } = await axios.get(`/api/users`, config);

		dispatch({
			type: USER_LIST_SUCCESS,
			payload: data,
		});
	} catch (error) {
		dispatch({
			type: USER_LIST_FAIL,
			payload:
				error.response && error.response.data.message
					? error.response.data.message
					: error.message,
		});
	}
};

// Delete User | Private | Admin
export const deleteUser = (id: string): AppThunk => async (
	dispatch,
	getState
) => {
	try {
		dispatch({
			type: USER_DELETE_REQUEST,
		});

		const {
			userAuth: { userInfo },
		} = getState();

		const config = {
			headers: {
				Authorization: `Bearer ${userInfo.token}`,
			},
		};

		await axios.delete(`/api/users/${id}`, config);

		dispatch({ type: USER_DELETE_SUCCESS });
	} catch (error) {
		dispatch({
			type: USER_DELETE_FAIL,
			payload:
				error.response && error.response.data.message
					? error.response.data.message
					: error.message,
		});
	}
};

// Update User | Private | Admin
export const updateUser = (user: IUser): AppThunk => async (
	dispatch,
	getState
) => {
	try {
		dispatch({
			type: USER_UPDATE_REQUEST,
		});

		const {
			userAuth: { userInfo },
		} = getState();

		const config = {
			headers: {
				'Content-Type': 'application/json',
				Authorization: `Bearer ${userInfo.token}`,
			},
		};

		const { data } = await axios.put(`/api/users/${user._id}`, user, config);

		dispatch({ type: USER_UPDATE_SUCCESS });
		dispatch({ type: USER_DETAILS_SUCCESS, payload: data });
		dispatch({ type: USER_DETAILS_RESET });
	} catch (error) {
		dispatch({
			type: USER_UPDATE_FAIL,
			payload:
				error.response && error.response.data.message
					? error.response.data.message
					: error.message,
		});
	}
};
