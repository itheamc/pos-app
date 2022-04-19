/**
 * ---------------------------@mit----------------------------
 * These are the methods for handling networking requests.
 * -----------------------------------------------------------
 */
import axios from 'axios';


/**
 * Base Url
 */
const baseUrl = 'http://localhost:8000';
const access_token = localStorage.getItem('access_token');
const refresh_token = localStorage.getItem('refresh_token');
const bearer_token = 'Bearer ' + access_token;


/**
 * Function to handle get request with bearer token
 * @param {*} endpoint
 * @returns {Promise<{data: []}>}
 */
export function get(endpoint) {
    return new Promise((resolve, reject) => {
        axios.get(baseUrl + endpoint, {
            headers: {
                Authorization: access_token
            }
        })
            .then(res => {
                resolve(res);
            })
            .catch(err => {
                reject(err);
            });
    });
}


/**
 * Function to handle post request with bearer token
 * @param {*} endpoint
 * @param {*} data
 * @returns {Promise<{data: []}>}
 */
export function post(endpoint, data) {
    return new Promise((resolve, reject) => {
        axios.post(baseUrl + endpoint, data, {
            headers: {
                Authorization: bearer_token
            }
        })
            .then(res => {
                resolve(res);
            })
            .catch(err => {
                reject(err);
            });
    });
}


/**
 * Function to handle put request with bearer token
 * @param {*} endpoint
 * @param {*} data
 * @returns {Promise<{data: []}>}
 */
export function put(endpoint, data) {
    return new Promise((resolve, reject) => {
        axios.put(baseUrl + endpoint, data, {
            headers: {
                Authorization: bearer_token
            }
        })
            .then(res => {
                resolve(res);
            })
            .catch(err => {
                reject(err);
            });
    });
}


/**
 * Function to handle delete request with bearer token
 * @param {*} endpoint
 * @returns {Promise<{data: []}>}
 */
export function del(endpoint) {
    return new Promise((resolve, reject) => {
        axios.delete(baseUrl + endpoint, {
            headers: {
                Authorization: bearer_token
            }
        })
            .then(res => {
                resolve(res);
            })
            .catch(err => {
                reject(err);
            });
    });
}
