/**
 * FUnction to fetch the vendors from the server
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