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
    return get(EndPoints.staff.list)
}


/**
 * Function to add new staff to the server
 * @param staff - staff object
 * @returns {Promise<{data: {}}>}
 */
export function addStaff(staff) {
    return post(EndPoints.staff.add, staff)
}


/**
 * Function to update staff to the server
 * @param staff - staff object
 * @returns {Promise<{data: {}}>}
 */
export function updateStaff(staff) {
    return put(EndPoints.staff.update + `/${staff.id}`, staff)
}


/**
 * Function to delete staff from the server
 * @param staff - staff object
 * @returns {Promise<{data: {}}>}
 */
export function deleteStaff(staff) {
    return del(EndPoints.staff.delete + `/${staff.id}`)
}
