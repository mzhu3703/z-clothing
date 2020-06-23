import React from 'react'
import CustomButton from '../../../Components/CustomButton/CustomButton'
import './CartDropdown.scss'
import {connect} from 'react-redux'
import CartItem from '../CartItem/CartItem'
import {selectCartItems} from '../../../redux/cart/cart.selectors'
import { withRouter } from "react-router-dom";
//Holds all the cart items, parent is header
function CartDropdown(props){
    const {history,cartItems} = props;
    return(
        <div className = "cart-dropdown">
            {cartItems.length === 0 ? <span className = "empty-cart">Your cart is empty </span>: 
            <div className = "cart-items">
                {props.cartItems.map(item => 
                    <CartItem key = {item.id} {...item}/>)}
            </div>
            }
            <CustomButton onClick = {() => history.push('/checkout')} >Go To Check out</CustomButton>
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