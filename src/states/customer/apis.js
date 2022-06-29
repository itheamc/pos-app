/**
 *----------------------------@mit----------------------------
 * This file will consists all the networking related functions
 * regarding customers that will be used by the slices to retrieve 
 * customeres data from the server.
 * -----------------------------------------------------------
 */
import { get, post, put, del } from '../../networking_handlers/request_handlers'
import EndPoints from '../../networking_handlers/endpoints'

/**
 * Function to fetch the customers from the server
 * @returns {Promise<{data: []}>}
 */
export function fetchCustomers() {
    return new Promise((resolve) =>
        setTimeout(() => resolve({
            data: [
                { id: 1, name: 'John Doe', address: 'Address 1', phone: '8591234567', email: 'customer1@email.com' },
                { id: 2, name: 'Tom', address: 'Address 2', phone: '8591234568', email: 'customer2@email.com' },
                { id: 3, name: 'Arnab', address: 'Address 3', phone: '8591234569', email: 'customer3@email.com' },
                { id: 4, name: 'Sohani', address: 'Address 4', phone: '8591234570', email: 'customer4@email.com' },
                { id: 5, name: 'Rajan', address: 'Address 5', phone: '8591234571', email: 'customer5@email.com' },
                { id: 6, name: 'Armaan', address: 'Address 6', phone: '8591234572', email: 'customer6@email.com' },
                { id: 7, name: 'Milan', address: 'Address 7', phone: '8591234573', email: 'customer7@email.com' },
                { id: 8, name: 'Micky', address: 'Address 8', phone: '8591234574', email: 'customer8@email.com' },
                { id: 9, name: 'Alish', address: 'Address 9', phone: '8591234575', email: 'customer9@email.com' },
                { id: 10, name: 'Anna', address: 'Address 10', phone: '8591234576', email: 'customer10@email.com' },
            ]
        }), 2500)
    );
}


/**
 * Function to add new customer to the server
 * @param customer - customer object
 * @returns {Promise<{data: {}}>}
 */
export function addCustomer(customer) {
    return post(EndPoints.customer.add, customer)
}

/**
 * Function to update customer to the server
 * @param customer - customer object
 * @returns {Promise<{data: {}}>}
 */
export function updateCustomer(customer) {
    return put(EndPoints.customer.update + customer.id, customer)
}

/**
 * Function to delete customer from the server
 * @param customer - customer object
 * @returns {Promise<{data: {}}>}
 */
export function deleteCustomer(customer) {
    return del(EndPoints.customer.delete + customer.id)
}

/**
 * Function to fetch customers from the server
 * @returns {Promise<{data: []}>}
 */
// export function fetchCustomers() {
//     return get(EndPoints.customer.list)
// }
