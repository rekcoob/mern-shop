export const USER_LOGIN_REQUEST = 'USER_LOGIN_REQUEST';
export const USER_LOGIN_SUCCESS = 'USER_LOGIN_SUCCESS';
export const USER_LOGIN_FAIL = 'USER_LOGIN_FAIL';
export const USER_LOGOUT = 'USER_LOGOUT';

export const USER_REGISTER_FAIL = 'USER_REGISTER_FAIL';
export const USER_REGISTER_REQUEST = 'USER_REGISTER_REQUEST';
export const USER_REGISTER_SUCCESS = 'USER_REGISTER_SUCCESS';

export const USER_AUTH_FAIL = 'USER_AUTH_FAIL';
export const USER_AUTH_REQUEST = 'USER_AUTH_REQUEST';
export const USER_AUTH_SUCCESS = 'USER_AUTH_SUCCESS';
export const USER_AUTH_LOGOUT = 'USER_AUTH_LOGOUT';

export interface IUserInfo {
	_id: string;
	name: string;
	email: string;
	token: string;
	isAdmin: boolean;
}

/**
 * User Login
 */
export type UserLoginState = {
	userInfo: IUserInfo;
	loading: boolean;
	error?: string;
};
interface UserLoginRequestAction {
	type: typeof USER_LOGIN_REQUEST;
}
interface UserLoginSuccessAction {
	type: typeof USER_LOGIN_SUCCESS;
	payload: IUserInfo;
}
interface UserLoginFailAction {
	type: typeof USER_LOGIN_FAIL;
	payload: string;
}
interface UserLogoutAction {
	type: typeof USER_LOGOUT;
}
export type UserLoginActionTypes =
	| UserLoginRequestAction
	| UserLoginSuccessAction
	| UserLoginFailAction
	| UserLogoutAction;

/**
 * User Register
 */
export type UserRegisterState = {
	userInfo: IUserInfo;
	loading: boolean;
	error?: string;
};
interface UserRegisterRequestAction {
	type: typeof USER_REGISTER_REQUEST;
}
interface UserRegisterSuccessAction {
	type: typeof USER_REGISTER_SUCCESS;
	payload: IUserInfo;
}
interface UserRegisterFailAction {
	type: typeof USER_REGISTER_FAIL;
	payload: string;
}
export type UserRegisterActionTypes =
	| UserRegisterRequestAction
	| UserRegisterSuccessAction
	| UserRegisterFailAction;

/**
 * User Login & Register
 */
export type UserAuthState = {
	userInfo: IUserInfo;
	loading: boolean;
	error?: string;
};
interface UserAuthRequestAction {
	type: typeof USER_AUTH_REQUEST;
}
interface UserAuthSuccessAction {
	type: typeof USER_AUTH_SUCCESS;
	payload: IUserInfo;
}
interface UserAuthFailAction {
	type: typeof USER_AUTH_FAIL;
	payload: string;
}
interface UserAuthLogoutAction {
	type: typeof USER_AUTH_LOGOUT;
}
export type UserAuthActionTypes =
	| UserAuthRequestAction
	| UserAuthSuccessAction
	| UserAuthFailAction
	| UserAuthLogoutAction;
