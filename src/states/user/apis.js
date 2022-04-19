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
 * Function to fetch user from the server
 * @returns {Promise<{data: {}}>}
 */
export function fetchUser() {
    return new Promise((resolve, reject) => {
        get(EndPoints.user.get)
            .then(res => {
                resolve(res);
            })
            .catch(err => {
                reject(err);
            });
    });
}


/**
 * Function to update user to the server
 * @param user - user object
 * @returns {Promise<{data: {}}>}
 */
export function updateUser(user) {
    return new Promise((resolve, reject) => {
        put(EndPoints.user.update + `/${user.id}`, user)
            .then(res => {
                resolve(res);
            })
            .catch(err => {
                reject(err);
            });
    });
}
