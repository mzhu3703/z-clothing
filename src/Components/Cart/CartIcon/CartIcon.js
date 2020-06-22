import React from 'react'
import { ReactComponent as CartLogo } from '../../../assets/shopping-icon.svg'
import './CartIcon.scss'
import {connect} from 'react-redux'
import {toggleCart} from '../../../redux/cart/cart.actions'
function CartIcon(props){

    const handleClick = event =>{
        props.toggleCart()
    }

    return(
        <div className = "cart-icon" onClick = {handleClick}>
            <CartLogo className = "cart-logo"/>
            <span className = "cart-amount">6</span>
        </div>
    )
}


const mapDispatchToProps = (dispatch) => {
    return{
        toggleCart: () => {dispatch(toggleCart())}
    }
}


export default connect(null, mapDispatchToProps)(CartIcon)