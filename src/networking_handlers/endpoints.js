/**
 * ---------------------------@mit----------------------------
 * These are the endpoints for the networking.
 * -----------------------------------------------------------
 */
const EndPoints = {
    // product
    product: {
        get: '/catalogue/product',
        list: '/catalogue/products',
        add: '/catalogue/product',
        update: '/catalogue/product',
        delete: '/catalogue/product',
    },
    // category
    category: {
        get: '/catalogue/category',
        list: '/catalogue/categories',
        add: '/catalogue/category',
        update: '/catalogue/category',
        delete: '/catalogue/category',
    },
    // billing
    billing: {
        list: '/billing/invoices',
        add: '/billing/invoice',
        update: '/billing/invoice',
        delete: '/billing/invoice',
    },
    // vendor
    vendor: {
        get: '/vendor',
        list: '/vendor/list',
        add: '/vendor',
        update: '/vendor',
        delete: '/vendor',
    },
    // customer
    customer: {
        get: '/customer',
        list: '/customer/list',
        add: '/customer',
        update: '/customer',
        delete: '/customer',
    },
    user: {
        get: '/user',
        list: '/user/list',
        add: '/user',
        update: '/user',
        delete: '/user',
    },
    staff: {
        get: '/staff',
        list: '/staff/list',
        add: '/staff',
        update: '/staff',
        delete: '/staff',
    }
};

export default EndPoints
