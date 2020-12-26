import axios from 'axios';
import {
	USER_AUTH_FAIL,
	USER_AUTH_REQUEST,
	USER_AUTH_SUCCESS,
	USER_AUTH_LOGOUT,
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
