export const USER_AUTH_REQUEST = 'USER_AUTH_REQUEST';
export const USER_AUTH_SUCCESS = 'USER_AUTH_SUCCESS';
export const USER_AUTH_FAIL = 'USER_AUTH_FAIL';
export const USER_AUTH_LOGOUT = 'USER_AUTH_LOGOUT';

export const USER_DETAILS_REQUEST = 'USER_DETAILS_REQUEST';
export const USER_DETAILS_SUCCESS = 'USER_DETAILS_SUCCESS';
export const USER_DETAILS_FAIL = 'USER_DETAILS_FAIL';

export const USER_UPDATE_PROFILE_REQUEST = 'USER_UPDATE_PROFILE_REQUEST';
export const USER_UPDATE_PROFILE_SUCCESS = 'USER_UPDATE_PROFILE_SUCCESS';
export const USER_UPDATE_PROFILE_FAIL = 'USER_UPDATE_PROFILE_FAIL';
export const USER_UPDATE_PROFILE_RESET = 'USER_UPDATE_PROFILE_RESET';

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

/**
 * User Details
 */
export type UserDetailsState = {
	user: IUserInfo;
	loading: boolean;
	error?: string;
};
interface UserDetailsRequestAction {
	type: typeof USER_DETAILS_REQUEST;
}
interface UserDetailsSuccessAction {
	type: typeof USER_DETAILS_SUCCESS;
	payload: IUserInfo;
}
interface UserDetailsFailAction {
	type: typeof USER_DETAILS_FAIL;
	payload: string;
}
export type UserDetailsActionTypes =
	| UserDetailsRequestAction
	| UserDetailsSuccessAction
	| UserDetailsFailAction;

/**
 * User Update Profile
 */
export type UserUpdateProfileState = {
	user: IUserInfo;
	success: boolean;
	loading: boolean;
	error?: string;
};
interface UserUpdateProfileRequestAction {
	type: typeof USER_UPDATE_PROFILE_REQUEST;
}
interface UserUpdateProfileSuccessAction {
	type: typeof USER_UPDATE_PROFILE_SUCCESS;
	payload: IUserInfo;
}
interface UserUpdateProfileFailAction {
	type: typeof USER_UPDATE_PROFILE_FAIL;
	payload: string;
}
export type UserUpdateProfileActionTypes =
	| UserUpdateProfileRequestAction
	| UserUpdateProfileSuccessAction
	| UserUpdateProfileFailAction;
