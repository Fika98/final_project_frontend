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
      
        <div className="CartTotal">
           <div className="product-list">
            {arrayOfComponent()}
           </div>

           <div className="order-products">
            <h3 className ="itemss">{props.orders.length - 1} Items Selected</h3>
           <h3> 
                
                <span className="CartTotal-price">
                Total:${priceCollector}
               </span> 
             </h3>


             <button onClick = {() => props.history.push("/placeOrder")}>place an Order </button>
          </div>
             
                
             </div>       

    )

}


export default withRouter(OrderContainer);
