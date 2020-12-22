export const USER_LOGIN_REQUEST = 'USER_LOGIN_REQUEST';
export const USER_LOGIN_SUCCESS = 'USER_LOGIN_SUCCESS';
export const USER_LOGIN_FAIL = 'USER_LOGIN_FAIL';
export const USER_LOGOUT = 'USER_LOGOUT';

export interface IUserInfo {
	_id: string;
	name: string;
	email: string;
	token: string;
	isAdmin: boolean;
}

/**
 * All Products List
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
