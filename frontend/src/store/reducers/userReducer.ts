import {
	UserAuthActionTypes,
	USER_AUTH_FAIL,
	USER_AUTH_LOGOUT,
	USER_AUTH_REQUEST,
	USER_AUTH_SUCCESS,
} from '../types/userTypes';

export const userReducer = (state = {}, action: UserAuthActionTypes) => {
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
