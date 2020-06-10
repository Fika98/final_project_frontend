import React from 'react';

const Item = (props) => {
    let {name, price, image} = props.item
    // console.log("user",props.user)
    let {id} = props.user
    let returnObject = {
        user: id,
        item: props.item

    }

    const handleClick = (e) => {
        console.log("sign",props.sign)
        if(props.sign){
            fetch("http://localhost:3000/orders",{
                method: "POST",
                headers: {
                    'content-type': 'application/json'
                  },
                  body: JSON.stringify(returnObject)

                })
                .then(res => res.json())
                .then(props.addToCart)

        }else{
            alert("you have to login")
        }
      }
    return(
        <div className= "space">
             <img className = "imgWidth" src = {image} alt={name} />
             <h3>{name}</h3>
             <h3 className="priceColor">${price}</h3>
             <button className="button" onClick = {handleClick}>Add to Cart</button>
        </div>
    )
}

export default Item