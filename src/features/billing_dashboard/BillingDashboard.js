/**
 *----------------------------@mit----------------------------
 * This is the simple dashboard showing the implementation of
 * pos functionality.
 * -----------------------------------------------------------
 */

import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { selectProductLoadingStatus, selectProducts, fetchProductsAsync } from '../../states/catalogue/productSlice'
import { selectBillItems, addItem, increaseQuantity, decreaseQuantity } from '../../states/billing/billingSlice'


const BillingDashboard = () => {

    const dispatch = useDispatch();
    const products = useSelector(selectProducts);
    const status = useSelector(selectProductLoadingStatus);
    const billItems = useSelector(selectBillItems);

    // calculating the total amount of the bill without tax
    const total_amount = billItems.reduce((acc, item) => {
        return acc + item.total;
    }, 0);

    // calculating the total quantity of the bill items
    const total_quantity = billItems.reduce((acc, item) => {
        return acc + item.quantity;
    }, 0);

    // calculating the total cgst tax amount of the bill
    const total_cgst = billItems.reduce((acc, item) => {
        return acc + item.cgst;
    }, 0);

    // calculating the total sgst tax amount of the bill
    const total_sgst = billItems.reduce((acc, item) => {
        return acc + item.sgst;
    }, 0);


    // fetching the products from the server on component mount
    useEffect(() => {
        dispatch(fetchProductsAsync());
    }, [dispatch]);


    // While loading product from the server, showing a loading indicator
    if (status === 'fetching') {
        return <h1>Loading...</h1>
    }

    // After loading products, showing the dashboard
    return (
        <div>
            <h1>Products</h1>
            <ol>
                {products.map(product => (
                    <li key={product.id} onClick={() => dispatch(addItem({ product }))}>{product.name}</li>
                ))}
            </ol>
            <h1>Bill Items</h1>
            <ol>
                {billItems.map(item => (
                    <li key={item.product.id}>
                        {item.product.name} -
                        {item.quantity} * {item.product.selling_price} -
                        {item.cgst} -
                        {item.sgst} -
                        {item.total} -

                        <button onClick={() => { dispatch(increaseQuantity({ productId: item.product.id })) }}>+</button>
                        <button onClick={() => { dispatch(decreaseQuantity({ productId: item.product.id })) }}>-</button>
                    </li>
                ))}
            </ol>
            <h1>Total</h1>
            <div>
                <div>Total Amount: {total_amount}</div>
                <div>Total Quantity: {total_quantity}</div>
                <div>Total CGST: {total_cgst}</div>
                <div>Total SGST: {total_sgst}</div>
            </div>
        </div>
    )
}

export default BillingDashboard