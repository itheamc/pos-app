/**
 *----------------------------@mit----------------------------
 * This file will consists all the networking related functions
 * regarding staff that will be used by the slices to retrieve 
 * staff data from the server.
 * -----------------------------------------------------------
 */
import { get, post, put, del } from '../../networking_handlers/request_handlers'
import EndPoints from '../../networking_handlers/endpoints'


/**
 * Function to fetch staffs from the server
 * @returns {Promise<{data: []}>}
 */
export function fetchStaffs() {
    return new Promise((resolve, reject) => {
        get(EndPoints.staff.list)
            .then(res => {
                resolve(res);
            })
            .catch(err => {
                reject(err);
            });
    });
}


/**
 * Function to add new staff to the server
 * @param staff - staff object
 * @returns {Promise<{data: {}}>}
 */
export function addStaff(staff) {
    return new Promise((resolve, reject) => {
        post(EndPoints.staff.add, staff)
            .then(res => {
                resolve(res);
            })
            .catch(err => {
                reject(err);
            });
    });
}


/**
 * Function to update staff to the server
 * @param staff - staff object
 * @returns {Promise<{data: {}}>}
 */
export function updateStaff(staff) {
    return new Promise((resolve, reject) => {
        put(EndPoints.staff.update + `/${staff.id}`, staff)
            .then(res => {
                resolve(res);
            })
            .catch(err => {
                reject(err);
            });
    });
}


/**
 * Function to delete staff from the server
 * @param staff - staff object
 * @returns {Promise<{data: {}}>}
 */
export function deleteStaff(staff) {
    return new Promise((resolve, reject) => {
        del(EndPoints.staff.delete + `/${staff.id}`)
            .then(res => {
                resolve(res);
            })
            .catch(err => {
                reject(err);
            });
    });
}
