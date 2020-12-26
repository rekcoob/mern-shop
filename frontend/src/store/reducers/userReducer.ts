import {
	UserAuthActionTypes,
	UserLoginActionTypes,
	UserRegisterActionTypes,
	USER_AUTH_FAIL,
	USER_AUTH_LOGOUT,
	USER_AUTH_REQUEST,
	USER_AUTH_SUCCESS,
	USER_LOGIN_FAIL,
	USER_LOGIN_REQUEST,
	USER_LOGIN_SUCCESS,
	USER_LOGOUT,
	USER_REGISTER_FAIL,
	USER_REGISTER_REQUEST,
	USER_REGISTER_SUCCESS,
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

// export const userLoginReducer = (state = {}, action: UserLoginActionTypes) => {
// 	switch (action.type) {
// 		case USER_LOGIN_REQUEST:
// 			return { loading: true };
// 		case USER_LOGIN_SUCCESS:
// 			return { loading: false, userInfo: action.payload };
// 		case USER_LOGIN_FAIL:
// 			return { loading: false, error: action.payload };
// 		case USER_LOGOUT:
// 			return {};
// 		default:
// 			return state;
// 	}
// };

// export const userRegisterReducer = (
// 	state = {},
// 	action: UserRegisterActionTypes
// ) => {
// 	switch (action.type) {
// 		case USER_REGISTER_REQUEST:
// 			return { loading: true };
// 		case USER_REGISTER_SUCCESS:
// 			return { loading: false, userInfo: action.payload };
// 		case USER_REGISTER_FAIL:
// 			return { loading: false, error: action.payload };
// 		default:
// 			return state;
// 	}
// };
