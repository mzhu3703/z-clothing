import React from 'react'
import CustomButton from '../../../Components/CustomButton/CustomButton'
import './CartDropdown.scss'
import {connect} from 'react-redux'
import CartItem from '../CartItem/CartItem'
import {selectCartItems} from '../../../redux/cart/cart.selectors'
import { withRouter } from "react-router-dom";
import {toggleCart} from '../../../redux/cart/cart.actions'
//Holds all the cart items, parent is header
function CartDropdown(props){
    const {history,cartItems,dispatch} = props;

    const handleClick = () => {
        history.push('/checkout')
        dispatch(toggleCart())
    }
    
    return(
        <div className = "cart-dropdown">
            {cartItems.length === 0 ? <span className = "empty-cart">Your cart is empty </span>: 
            <div className = "cart-items">
                {props.cartItems.map(item => 
                    <CartItem key = {item.id} {...item}/>)}
            </div>
            }
            <CustomButton onClick = {handleClick} >Go To Check out</CustomButton>
        </div>
    )
}

//prop of items[] that stores all the added items 
function mapStateToProps(state){
    return{
        cartItems: selectCartItems(state)
    }
}

export default withRouter(connect(mapStateToProps)(CartDropdown));