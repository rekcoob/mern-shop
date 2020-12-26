import {
	UserAuthActionTypes,
	UserDetailsActionTypes,
	UserUpdateProfileActionTypes,
	USER_AUTH_FAIL,
	USER_AUTH_LOGOUT,
	USER_AUTH_REQUEST,
	USER_AUTH_SUCCESS,
	USER_DETAILS_FAIL,
	USER_DETAILS_REQUEST,
	USER_DETAILS_SUCCESS,
	USER_UPDATE_PROFILE_FAIL,
	USER_UPDATE_PROFILE_REQUEST,
	USER_UPDATE_PROFILE_SUCCESS,
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

		default:
			return state;
	}
};
