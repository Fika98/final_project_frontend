import React from 'react';



const PlaceAnOrder = (props) => {
    // console.log("from place order", props.username)

    return(
        <div>
            <h1>Thank You For Your Order</h1>
            <hr/>
            <h2>Order Number: H41895563</h2>
            <h2>Order Date: Thursday, May 28, 2020 </h2>
            <h2>Customer:  {props.username.username}</h2>
        </div>
    )

}





export default PlaceAnOrder