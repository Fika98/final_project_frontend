import React from 'react';
import Item from './Item'
import ItemSideBar from './ItemSideBar'

const ItemContainer = (props) => {
    // console.log("container", props)
    const arrayOfComponent = props.items.map((item) => {
        return <Item
            key={item.id}
            item={item}
            sign={props.sign}
            user={props.user}
            addProductToOrder={props.addProductToOrder}
            addToCart={props.addToCart}

        />
    })
    return(
        <div className= "flex">
            <ItemSideBar/>
            {arrayOfComponent}

        </div>
    )
}

export default ItemContainer