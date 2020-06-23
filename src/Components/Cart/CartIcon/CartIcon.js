import React from 'react'
import { ReactComponent as CartLogo } from '../../../assets/shopping-icon.svg'
import './CartIcon.scss'
import { connect } from 'react-redux'
import { toggleCart } from '../../../redux/cart/cart.actions'
function CartIcon(props) {

    const handleClick = event => {
        props.toggleCart()
    }

    return (
        <div className="cart-icon" onClick={handleClick}>
            <CartLogo className="cart-logo" />
            <span className="cart-amount">{props.quantity}</span>
        </div>
    )
}


const mapStateToProps = ({ cart: { cartItems } }) => {
    if (cartItems.length == 0) {
        return {
            quantity: 0
        }
    }
    else {
        // 0 is inital value, accumulate all the quantity values of the cartItems to acc
        let totalItems = cartItems.reduce(function (acc, obj) { return acc + obj.quantity; }, 0);
        return {
            quantity: totalItems
        }
    }

}

const mapDispatchToProps = (dispatch) => {
    return {
        toggleCart: () => { dispatch(toggleCart()) }
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(CartIcon)