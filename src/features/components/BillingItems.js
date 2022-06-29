import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { selectBills, increaseQuantity, decreaseQuantity } from '../../states/multi_billings/billingsSlice'

const BillingItems = (props) => {

    const { bill_Id } = props;
    const dispatch = useDispatch();
    const bills = useSelector(selectBills);
    console.log(bills);

    const _billing = bills.find(bill => bill.id === bill_Id);

    if (!_billing) {
        return <div>No Bill Found</div>
    }

    const _items = _billing.items;

    if (!_items) {
        return <div>No items</div>
    }

    return (
        <div>
            <h1>Billing Items (Bill Id: {bill_Id})</h1>
            <ol>
                {_items.map(item => (
                    <li key={item.product.id}>
                        {item.product.name} -
                        {item.quantity} * {item.product.selling_price} -
                        {item.cgst} -
                        {item.sgst} -
                        {item.total} -

                        <button onClick={() => dispatch(increaseQuantity({ productId: item.product.id, bill_Id: bill_Id }))}>+</button>
                        <button onClick={() => dispatch(decreaseQuantity({ productId: item.product.id, bill_Id: bill_Id }))}>-</button>
                    </li>
                ))}
            </ol>
        </div>
    )
}

export default BillingItems