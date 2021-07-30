import React from 'react'



const DisplayItem = (props) => {
    let deleteFetch = () => fetch(`http://localhost:3000/orders/${props.item.id}`,{
        method: 'DELETE'

    })
        .then(res => res.json())
        .then(() => window.location.reload())

   //  console.log(props.name)
   const handleChangle = (e) => {

   }
    let {name, price, image} = props.item
    return(
        <div className="CartItem">

           <div className="CartItem-image">
            <img className = "imgItem" src = {image} alt={name} />
           </div>

            <div className="CartItem-Info">
               <div className="info-title">
                  <h2>{name}</h2>
               </div>
           
            <div className="item-actions">
               <div className="item-quantity">
                  <select
                     // value={}
                     onChange={handleChangle}
                  >
                     <option value="1">Qty: 1</option>
                     <option value="2">Qty: 2</option>
                     <option value="3">Qty: 3</option>
                     <option value="4">Qty: 4</option>
                     <option value="5">Qty: 5</option>
                  </select>
               </div>

               <div className="item-actions-divider">|</div>
               <div className="item-delete" onClick={deleteFetch}>
                  Delete
               </div>
            </div>

            </div>

             <div className ="CartItem-price">
               ${price}
            </div>
         

         </div>
    )

}


export default DisplayItem