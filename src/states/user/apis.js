/**
 *----------------------------@mit----------------------------
 * This file will consists all the networking related functions
 * regarding user that will be used by the slices to retrieve 
 * user data from the server.
 * -----------------------------------------------------------
 */
import { get, post, put, del } from '../../networking_handlers/request_handlers'
import EndPoints from '../../networking_handlers/endpoints'



/**
 * @description: This function will be used to login the user
 * @param {string} email
 * @param {string} password
 * @returns {Promise}
 */
export function loginUser(email, password) {
    return post(EndPoints.LOGIN_USER, { email, password })
}


/**
 * @description: This function will be used to fetch user from the server
 * @returns {Promise<{data: {}}>}
 */
export function fetchUser() {
    return get(EndPoints.user.get)
}


/**
 * @description: This function will be used to update user to the server
 * @param user - user object
 * @returns {Promise<{data: {}}>}
 */
export function updateUser(user) {
    return put(EndPoints.user.update + `/${user.id}`, user)
}
