import React from 'react'



const DisplayItem = (props) => {
    let deleteFetch = () => fetch(`http://localhost:3000/orders/${props.item.id}`,{
        method: 'DELETE'

    })
        .then(res => res.json())
        .then(() => window.location.reload())


    console.log(props.item)
    let {name, price, image} = props.item
    return(
        <div>
            <div>
                <button className="deleteItem" onClick ={deleteFetch}>X</button>
             </div>
             <img className = "imgItem" src = {image} alt={name} />
             <h4>{name}</h4>
             <h4>${price}</h4>
             <h4>qty: 1 <button className="qty">+</button> <button className="qty">-</button></h4>


         </div>
    )

}


export default DisplayItem