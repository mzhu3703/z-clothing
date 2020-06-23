import React from 'react'
import './CartItem.scss'
// represents each added item to the cart, parent is CartDropdown
function CartItem(props) {
    const { imageUrl, name, price, quantity } = props
    return (
        <div className='cart-item'>
            <img src={imageUrl} alt={name} />
            <div className='item-details'>
                <span>{name}</span>
                <span>{quantity}  x  ${price}</span>
            </div>
        </div>
    )
}

export default CartItem;