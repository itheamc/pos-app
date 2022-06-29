/**
 * ---------------------------@mit----------------------------
 * These are the methods for handling networking requests.
 * -----------------------------------------------------------
 */
import axios from 'axios';
import { errorHandler } from './errors_handler';


/**
 * Base Url
 */
const baseUrl = 'http://localhost:8000/api/v1';
const access_token = localStorage.getItem('access_token');
const bearer_token = 'Bearer ' + access_token;


/**
 * @description: This is an instance of axios
 */
const axios_instance = axios.create({
    baseURL: baseUrl,
    headers: {
        'Authorization': bearer_token,
        'Content-Type': 'application/json',
    },
});


/**
 * Function to handle get request with bearer token
 * @param {*} endpoint
 * @returns {Promise<{data: []}>}
 */
export function get(endpoint) {
    return new Promise((resolve, reject) => {
        axios_instance.get(endpoint)
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
    console.log(data);
    return new Promise((resolve, reject) => {
        axios_instance.post(endpoint, data)
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
        axios_instance.put(endpoint, data)
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
        axios_instance.delete(endpoint)
            .then(res => {
                resolve(res);
            })
            .catch(err => {
                reject(err);
            });
    });
}
