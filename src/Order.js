import React from 'react';
import DisplayItem from './DisplayItem'

const Order = (props) => {
    console.log("from order", props.order)

    let item_order = () => props.order.item_order.map(orderItem => {
        return <DisplayItem
        key={orderItem.id}
        item= {orderItem.item}
         />
    })
    return(
        <div>{item_order()}</div>
    )

}



export default Order
