import React from 'react';



const PlaceAnOrder = (props) => {
   let today = new Date()
   let dd = String(today.getDate()).padStart(2,'0')
   let mm = String(today.getMonth() + 1).padStart(2, '0');
   let yyyy = today.getFullYear();

    return(
        <div>
            <h1>Thank You For Your Order</h1>
            <hr/>
            <h2>Order Number: H41895563</h2>
            <h2>Order Date: {mm}/{dd}/{yyyy} </h2>
            <h2>Customer:  {props.username.username}</h2>
        </div>
    )

}





export default PlaceAnOrder