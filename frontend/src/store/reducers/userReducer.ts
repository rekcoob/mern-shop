import {
	USER_AUTH_FAIL,
	USER_AUTH_LOGOUT,
	USER_AUTH_REQUEST,
	USER_AUTH_SUCCESS,
	UserAuthActionTypes,
	USER_DETAILS_FAIL,
	USER_DETAILS_REQUEST,
	USER_DETAILS_SUCCESS,
	USER_DETAILS_RESET,
	UserDetailsActionTypes,
	USER_UPDATE_PROFILE_FAIL,
	USER_UPDATE_PROFILE_REQUEST,
	USER_UPDATE_PROFILE_RESET,
	USER_UPDATE_PROFILE_SUCCESS,
	UserUpdateProfileActionTypes,
	USER_LIST_REQUEST,
	USER_LIST_SUCCESS,
	USER_LIST_FAIL,
	USER_LIST_RESET,
	UserListActionTypes,
	USER_DELETE_REQUEST,
	USER_DELETE_SUCCESS,
	USER_DELETE_FAIL,
	UserDeleteActionTypes,
} from '../types/userTypes';

export const userAuthReducer = (state = {}, action: UserAuthActionTypes) => {
	switch (action.type) {
		case USER_AUTH_REQUEST:
			return { loading: true };
		case USER_AUTH_SUCCESS:
			return { loading: false, userInfo: action.payload };
		case USER_AUTH_FAIL:
			return { loading: false, error: action.payload };
		case USER_AUTH_LOGOUT:
			return {};
		default:
			return state;
	}
};

export const userDetailsReducer = (
	state = { user: {} },
	action: UserDetailsActionTypes
) => {
	switch (action.type) {
		case USER_DETAILS_REQUEST:
			return { ...state, loading: true };
		case USER_DETAILS_SUCCESS:
			return { loading: false, user: action.payload };
		case USER_DETAILS_FAIL:
			return { loading: false, error: action.payload };
		case USER_DETAILS_RESET:
			return { user: {} };
		default:
			return state;
	}
};

export const userUpdateProfileReducer = (
	state = {},
	action: UserUpdateProfileActionTypes
) => {
	switch (action.type) {
		case USER_UPDATE_PROFILE_REQUEST:
			return { loading: true };
		case USER_UPDATE_PROFILE_SUCCESS:
			return { loading: false, success: true, userInfo: action.payload };
		case USER_UPDATE_PROFILE_FAIL:
			return { loading: false, error: action.payload };
		case USER_UPDATE_PROFILE_RESET:
			return {};
		default:
			return state;
	}
};

export const userListReducer = (
	state = { users: [] },
	action: UserListActionTypes
) => {
	switch (action.type) {
		case USER_LIST_REQUEST:
			return { loading: true };
		case USER_LIST_SUCCESS:
			return { loading: false, users: action.payload };
		case USER_LIST_FAIL:
			return { loading: false, error: action.payload };
		case USER_LIST_RESET:
			return { users: [] };
		default:
			return state;
	}
};

export const userDeleteReducer = (
	state = {},
	action: UserDeleteActionTypes
) => {
	switch (action.type) {
		case USER_DELETE_REQUEST:
			return { loading: true };
		case USER_DELETE_SUCCESS:
			return { loading: false, success: true };
		case USER_DELETE_FAIL:
			return { loading: false, error: action.payload };
		default:
			return state;
	}
};
