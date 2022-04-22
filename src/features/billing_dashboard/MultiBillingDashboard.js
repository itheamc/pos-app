/**
 *----------------------------@mit----------------------------
 * This is the simple dashboard showing the implementation of
 * pos functionality.
 * -----------------------------------------------------------
 */

import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { selectProductLoadingStatus, selectProducts, fetchProductsAsync } from '../../states/catalogue/productSlice'
import { addItem } from '../../states/multi_billings/billingsSlice'
import BillingItems from '../components/BillingItems'



const MultiBillingDashboard = () => {

    const dispatch = useDispatch();
    const products = useSelector(selectProducts);
    const status = useSelector(selectProductLoadingStatus);

    const [bill_Id, setBill_Id] = useState(0);


    useEffect(() => {
        dispatch(fetchProductsAsync());
    }, [dispatch]);


    if (status === 'fetching') {
        return <h1>Loading...</h1>
    }

    return (
        <div>
            <h1>Products</h1>
            <input type="text" value={bill_Id} onChange={(e) => setBill_Id(e.target.value)} />
            <ol>
                {products.map(product => (
                    <li key={product.id} onClick={() => dispatch(addItem({ product, bill_Id }))}>{product.name}</li>
                ))}
            </ol>
            <BillingItems bill_Id={bill_Id} />
        </div>
    )
}

export default MultiBillingDashboard