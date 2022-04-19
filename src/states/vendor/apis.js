/**
 *----------------------------@mit----------------------------
 * This file will consists all the networking related functions
 * regarding vendors that will be used by the slices to retrieve 
 * vendor data from the server.
 * -----------------------------------------------------------
 */
import { get, post, put, del } from '../../networking_handlers/request_handlers'
import EndPoints from '../../networking_handlers/endpoints'

/**
 * Function to fetch the vendors from the server
 * @returns {Promise<{data: []}>}
 */
export function fetchVendors() {
    return new Promise((resolve) =>
        setTimeout(() => resolve({
            data: [
                { id: 1, name: 'Vendor 1', address: 'Address 1', phone: '8591234567', email: 'vendor1@email.com' },
                { id: 2, name: 'Vendor 2', address: 'Address 2', phone: '8591234568', email: 'vendor2@email.com' },
                { id: 3, name: 'Vendor 3', address: 'Address 3', phone: '8591234569', email: 'vendor3@email.com' },
            ]
        }), 2500)
    );
}


/**
 * FUnction to add new vendor to the server
 * @param vendor - vendor object
 * @returns {Promise<{data: {}}>}
 */
export function addVendor(vendor) {
    return new Promise((resolve, reject) => {
        post(EndPoints.vendor.add, vendor)
            .then(res => {
                resolve(res);
            })
            .catch(err => {
                reject(err);
            });

    });
}


/**
 * Function to update vendor to the server
 * @param vendor - vendor object
 * @returns {Promise<{data: {}}>}
 */
export function updateVendor(vendor) {
    return new Promise((resolve, reject) => {
        put(EndPoints.vendor.update + `/${vendor.id}`, vendor)
            .then(res => {
                resolve(res);
            })
            .catch(err => {
                reject(err);
            });

    });
}


/**
 * Function to delete vendor from the server
 * @param vendor - vendor object
 * @returns {Promise<{data: {}}>}
 */
export function deleteVendor(vendor) {
    return new Promise((resolve, reject) => {
        del(EndPoints.vendor.delete + `/${vendor.id}`)
            .then(res => {
                resolve(res);
            })
            .catch(err => {
                reject(err);
            });

    });
}


/**
 * Function to fetch vendors from the server
 * @returns {Promise<{data: []}>}
 */
// export function fetchVendors() {
//     return new Promise((resolve, reject) => {
//         get(EndPoints.vendor.list)
//             .then(res => {
//                 resolve(res);
//             })
//             .catch(err => {
//                 reject(err);
//             });

//     });
// }