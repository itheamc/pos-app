/**
 * FUnction to fetch the categories from the server
 * @returns {Promise<{data: []}>}
 */
export function fetchCategories() {
    return new Promise((resolve) =>
        setTimeout(() => resolve({
            data: [
                { id: 1, name: 'Category 1' },
                { id: 2, name: 'Category 2' },
                { id: 3, name: 'Category 3' },
                { id: 4, name: 'Category 4' },
                { id: 5, name: 'Category 5' }
            ]
        }), 2500)
    );
}

/**
 * FUnction to fetch the products from the server
 * @returns {Promise<{data: []}>}
 */
export function fetchProducts() {
    return new Promise((resolve) =>
        setTimeout(() => resolve({
            data: [
                { id: 1, name: "Product 1", mrp: 1000, selling_price: 700, quantity: 10, image: "", tax: { cgst: 0.10, sgst: 0.10 } },
                { id: 2, name: "Product 2", mrp: 1100, selling_price: 800, quantity: 3, image: "", tax: { cgst: 0.10, sgst: 0.10 } },
                { id: 3, name: "Product 3", mrp: 1500, selling_price: 1100, quantity: 13, image: "", tax: { cgst: 0.10, sgst: 0.10 } },
                { id: 4, name: "Product 4", mrp: 900, selling_price: 700, quantity: 4, image: "", tax: { cgst: 0.10, sgst: 0.10 } },
                { id: 5, name: "Product 5", mrp: 1900, selling_price: 1700, quantity: 11, image: "", tax: { cgst: 0.10, sgst: 0.10 } },
                { id: 6, name: "Product 6", mrp: 2000, selling_price: 1600, quantity: 18, image: "", tax: { cgst: 0.10, sgst: 0.10 } },
                { id: 7, name: "Product 7", mrp: 1200, selling_price: 1000, quantity: 4, image: "", tax: { cgst: 0.10, sgst: 0.10 } },
                { id: 8, name: "Product 8", mrp: 1800, selling_price: 1500, quantity: 5, image: "", tax: { cgst: 0.10, sgst: 0.10 } },
                { id: 9, name: "Product 9", mrp: 1000, selling_price: 700, quantity: 12, image: "", tax: { cgst: 0.10, sgst: 0.10 } },
                { id: 10, name: "Product 10", mrp: 600, selling_price: 400, quantity: 10, image: "", tax: { cgst: 0.10, sgst: 0.10 } },
            ]
        }), 2500)
    );
}