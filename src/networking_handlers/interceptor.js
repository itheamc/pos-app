/**
 * --------------------------------@mit----------------------------
 * This is the custom interceptor to handle the request
 * and response and the errors related to the request or response.
 * ----------------------------------------------------------------
 */


/**
 * @description: This function will be used to handle the request
*/
axios.interceptors.request.use(
    config => {
        // Do something before request is sent
        return config;
    },
    error => {
        // Do something with request error
        return Promise.reject(error);
    }
);


/**
 * @description: This function will be used to handle the response
 */
axios.interceptors.response.use(
    response => {
        // Do something with response data
        return response;
    },
    error => {
        // Do something with response error
        return Promise.reject(error);
    }
);
