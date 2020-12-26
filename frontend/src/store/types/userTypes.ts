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
