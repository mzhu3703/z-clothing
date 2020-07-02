import React from 'react'
import './CheckoutItem.scss'
import {connect} from 'react-redux'
import {removeItem,increaseQuantity, decreaseQuantity} from '../../redux/cart/cart.actions'

function CheckoutItem(props) {
    const { imageUrl, name, price, quantity } = props.item

    function handleClick(){
        props.removeItem(props.item)
    }

    function handleClickIncrease(){
        props.increaseQuantity(props.item)
    }

    function handleClickDecrease(){
        props.decreaseQuantity(props.item)
    }
    return (
        <div className='checkout-item'>
            <div className='image-container'>
                <img src={imageUrl} alt={name} />
            </div>
            <span className='name'>{name}</span>
                <span className='quantity'>
                    <div className = 'arrow' onClick = {handleClickDecrease}>&#10094;</div>
                    {quantity}
                    <div className = 'arrow' onClick = {handleClickIncrease}> &#10095;</div>
                </span>
            <span className='price'>{price}</span>
            <span className='remove-button' onClick = {handleClick}> &#10007;</span>
        </div>
    )
}

const mapDispatchToProps = dispatch => ({
    removeItem: item => dispatch(removeItem(item)), 
    increaseQuantity: item => dispatch(increaseQuantity(item)),
    decreaseQuantity: item => dispatch(decreaseQuantity(item))    
})

export default connect(null,mapDispatchToProps)(CheckoutItem)