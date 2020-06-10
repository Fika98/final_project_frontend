import React from 'react';
import Order from './Order'
import {withRouter} from 'react-router-dom'

 

const OrderContainer = (props) => {
    console.log("order", props.orders)
    let arrayOfComponent = () => props.orders.map((order) => {
        return <Order
        key={order.id}
        order={order}
        />

    })
    
    let priceCollector = 0
    props.orders.map((order) => {
         order.item_order.map((item_order) => {
              priceCollector +=  parseInt(item_order.item.price)
        })
    })

        // console.log("from www", props)
    return(

        <div>
             {arrayOfComponent()}
             <h2>Your Total Is: ${priceCollector}</h2> <br/>
             <button className="orderbtn" onClick = {() => props.history.push("/placeOrder")}>place an Order </button>            
        </div>
    )

}


export default withRouter(OrderContainer);
