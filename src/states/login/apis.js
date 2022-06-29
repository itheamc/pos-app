/**
 *----------------------------@mit----------------------------
 * This file will consists all the networking related functions
 * regarding user login that will be used by the login slice to 
 * handle the user login and token management.
 * -----------------------------------------------------------
 */
import { post } from '../../networking_handlers/request_handlers'
import EndPoints from '../../networking_handlers/endpoints'



/**
 * @description: This function will be used to login the user
 * @param {string} email
 * @param {string} password
 * @returns {Promise}
 */
export function loginUser(credentials) {
    return post(EndPoints.LOGIN_USER, credentials)
}


/**
 * @description: This function will be used to get access token from the server
 * @returns {Promise<{data: {}}>}
 * @param {string} refreshToken
 */
export function getAccessToken(refreshToken) {
    return post(EndPoints.GET_ACCESS_TOKEN, { refreshToken })
}