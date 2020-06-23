import React from 'react'
import { ReactComponent as CartLogo } from '../../../assets/shopping-icon.svg'
import './CartIcon.scss'
import { connect } from 'react-redux'
import { toggleCart } from '../../../redux/cart/cart.actions'
import {selectCartItemsCount, selectCartItems} from '../../../redux/cart/cart.selectors'
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


const mapStateToProps = (state) => {
    return{
        quantity: selectCartItemsCount(state)
    }

}

const mapDispatchToProps = (dispatch) => {
    return {
        toggleCart: () => { dispatch(toggleCart()) }
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(CartIcon)