import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { selectProductLoadingStatus, selectProducts, fetchProductsAsync } from '../../slices/catalogue/productSlice'
import { selectBillItems, addItem, increaseQuantity, decreaseQuantity } from '../../slices/catalogue/billingSlice'

const BillingDashboard = () => {

    const dispatch = useDispatch();
    const products = useSelector(selectProducts);
    const status = useSelector(selectProductLoadingStatus);

    const billItems = useSelector(selectBillItems);

    const total_amount = billItems.reduce((acc, item) => {
        return acc + item.total;
    }, 0);

    const total_quantity = billItems.reduce((acc, item) => {
        return acc + item.quantity;
    }, 0);

    const total_cgst = billItems.reduce((acc, item) => {
        return acc + item.cgst;
    }, 0);

    const total_sgst = billItems.reduce((acc, item) => {
        return acc + item.sgst;
    }, 0);


    useEffect(() => {
        dispatch(fetchProductsAsync());
    }, [dispatch]);


    if (status === 'fetching') {
        return <div>Loading...</div>
    }

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
                {billItems.map((item, index) => (
                    <li key={item.product.id}>
                        {item.product.name} -
                        {item.quantity} * {item.product.selling_price} -
                        {item.cgst} -
                        {item.sgst} -
                        {item.total} -

                        <button onClick={() => { dispatch(increaseQuantity({ index })) }}>+</button>
                        <button onClick={() => { dispatch(decreaseQuantity({ index })) }}>-</button>
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