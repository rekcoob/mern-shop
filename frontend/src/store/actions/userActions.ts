import axios from 'axios';
import {
	USER_AUTH_FAIL,
	USER_AUTH_REQUEST,
	USER_AUTH_SUCCESS,
	USER_AUTH_LOGOUT,
	USER_DETAILS_REQUEST,
	USER_DETAILS_SUCCESS,
	USER_DETAILS_FAIL,
	USER_UPDATE_PROFILE_REQUEST,
	USER_UPDATE_PROFILE_SUCCESS,
	USER_UPDATE_PROFILE_FAIL,
} from '../types/userTypes';
import { AppThunk } from '../types/rootTypes';

const config = {
	headers: {
		'Content-Type': 'application/json',
	},
};

// Login User
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
	dispatch({ type: USER_AUTH_LOGOUT });
};

// Register User
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

// Get User Profile
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

		const { data } = await axios.get(`api/users/${id}`, configWithToken);

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

// Update User Profile
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
			`api/users/profile`,
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
