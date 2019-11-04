import { stringify } from '../../utils';
import { request } from '../../utils';
import { ExtraFetchOptions } from '../../utils';
import { User } from './interfaces'


export interface GetUserUsernamePayload extends ExtraFetchOptions {
	username: string
}

/**
 * Get user by user name
 * 
 */
export async function getUserUsername(payload: GetUserUsernamePayload) {
	const { username, ...extraFetchOptions } = payload;
    return request<undefined>(`/user/${username}`, {
		...extraFetchOptions,
        method: 'get',
    });
}
export interface PutUserUsernamePayload extends ExtraFetchOptions {
	username: string
	/**
	 * Updated user object
	 */
	body: User
}

/**
 * Updated user
 * 
 */
export async function putUserUsername(payload: PutUserUsernamePayload) {
	const { username, body, ...extraFetchOptions } = payload;
    return request<undefined>(`/user/${username}`, {
		...extraFetchOptions,
        method: 'put',
		body,
    });
}
export interface DeleteUserUsernamePayload extends ExtraFetchOptions {
	username: string
}

/**
 * Delete user
 * 
 */
export async function deleteUserUsername(payload: DeleteUserUsernamePayload) {
	const { username, ...extraFetchOptions } = payload;
    return request<undefined>(`/user/${username}`, {
		...extraFetchOptions,
        method: 'delete',
    });
}

export interface GetUserLoginQuery {
	username: string	// The user name for login   
	password: string	// The password for login in clear text   
}

export interface GetUserLoginPayload extends ExtraFetchOptions {
	query: GetUserLoginQuery
}

/**
 * Logs user into the system
 * 
 */
export async function getUserLogin(payload: GetUserLoginPayload) {
	const { query, ...extraFetchOptions } = payload;
    return request<undefined>(`/user/login?${stringify(query)}`, {
		...extraFetchOptions,
        method: 'get',
    });
}
export interface GetUserLogoutPayload extends ExtraFetchOptions {
	
}

/**
 * Logs out current logged in user session
 * 
 */
export async function getUserLogout(payload: GetUserLogoutPayload) {
	const extraFetchOptions = payload;
    return request<undefined>(`/user/logout`, {
		...extraFetchOptions,
        method: 'get',
    });
}
export interface PostUserPayload extends ExtraFetchOptions {
	/**
	 * Created user object
	 */
	body: User
}

/**
 * Create user
 * 
 */
export async function postUser(payload: PostUserPayload) {
	const { body, ...extraFetchOptions } = payload;
    return request<undefined>(`/user`, {
		...extraFetchOptions,
        method: 'post',
		body,
    });
}
export interface PostUserCreateWithArrayPayload extends ExtraFetchOptions {
	/**
	 * List of user object
	 */
	body: User[]
}

/**
 * Creates list of users with given input array
 * 
 */
export async function postUserCreateWithArray(payload: PostUserCreateWithArrayPayload) {
	const { body, ...extraFetchOptions } = payload;
    return request<undefined>(`/user/createWithArray`, {
		...extraFetchOptions,
        method: 'post',
		body,
    });
}
export interface PostUserCreateWithListPayload extends ExtraFetchOptions {
	/**
	 * List of user object
	 */
	body: User[]
}

/**
 * Creates list of users with given input array
 * 
 */
export async function postUserCreateWithList(payload: PostUserCreateWithListPayload) {
	const { body, ...extraFetchOptions } = payload;
    return request<undefined>(`/user/createWithList`, {
		...extraFetchOptions,
        method: 'post',
		body,
    });
}
