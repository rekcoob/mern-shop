export const USER_AUTH_REQUEST = 'USER_AUTH_REQUEST';
export const USER_AUTH_SUCCESS = 'USER_AUTH_SUCCESS';
export const USER_AUTH_FAIL = 'USER_AUTH_FAIL';
export const USER_AUTH_LOGOUT = 'USER_AUTH_LOGOUT';

export const USER_DETAILS_REQUEST = 'USER_DETAILS_REQUEST';
export const USER_DETAILS_SUCCESS = 'USER_DETAILS_SUCCESS';
export const USER_DETAILS_FAIL = 'USER_DETAILS_FAIL';
export const USER_DETAILS_RESET = 'USER_DETAILS_RESET';

export const USER_UPDATE_PROFILE_REQUEST = 'USER_UPDATE_PROFILE_REQUEST';
export const USER_UPDATE_PROFILE_SUCCESS = 'USER_UPDATE_PROFILE_SUCCESS';
export const USER_UPDATE_PROFILE_FAIL = 'USER_UPDATE_PROFILE_FAIL';
export const USER_UPDATE_PROFILE_RESET = 'USER_UPDATE_PROFILE_RESET';

export const USER_LIST_REQUEST = 'USER_LIST_REQUEST';
export const USER_LIST_SUCCESS = 'USER_LIST_SUCCESS';
export const USER_LIST_FAIL = 'USER_LIST_FAIL';
export const USER_LIST_RESET = 'USER_LIST_RESET';

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
interface UserDetailsResetAction {
	type: typeof USER_DETAILS_RESET;
}
export type UserDetailsActionTypes =
	| UserDetailsRequestAction
	| UserDetailsSuccessAction
	| UserDetailsFailAction
	| UserDetailsResetAction;

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
interface UserUpdateProfileResetAction {
	type: typeof USER_UPDATE_PROFILE_RESET;
}
export type UserUpdateProfileActionTypes =
	| UserUpdateProfileRequestAction
	| UserUpdateProfileSuccessAction
	| UserUpdateProfileFailAction
	| UserUpdateProfileResetAction;

/**
 * User List
 */
export type UserListState = {
	users: IUserInfo[];
	loading: boolean;
	error?: string;
};
interface UserListRequestAction {
	type: typeof USER_LIST_REQUEST;
}
interface UserListSuccessAction {
	type: typeof USER_LIST_SUCCESS;
	payload: IUserInfo[];
}
interface UserListFailAction {
	type: typeof USER_LIST_FAIL;
	payload: string;
}
interface UserListResetAction {
	type: typeof USER_LIST_RESET;
}
export type UserListActionTypes =
	| UserListRequestAction
	| UserListSuccessAction
	| UserListFailAction
	| UserListResetAction;
