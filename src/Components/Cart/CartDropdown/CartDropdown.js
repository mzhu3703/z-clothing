import React from 'react'
import CustomButton from '../../../Components/CustomButton/CustomButton'
import './CartDropdown.scss'
import {connect} from 'react-redux'
import CartItem from '../CartItem/CartItem'
//Holds all the cart items, parent is header
function CartDropdown(props){
    return(
        <div className = "cart-dropdown">
            <div className = "cart-items">
                {props.cartItems.map(item => 
                    <CartItem key = {item.id} {...item}/>)}
            </div>
            <CustomButton >Go To Check out</CustomButton>
        </div>
    )
}

//prop of items[] that stores all the added items 
function mapStateToProps({cart: {cartItems}}){
    return{
        cartItems,
    }
}

export default connect(mapStateToProps)(CartDropdown);