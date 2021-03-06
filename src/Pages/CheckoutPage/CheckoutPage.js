import React from 'react'
import './CheckoutPage.scss'
import { connect } from 'react-redux'
import { selectCartItems, selectCartItemsPrice } from '../../redux/cart/cart.selectors'
import CheckoutItem from '../../Components/CheckoutItem/CheckoutItem'
import CheckoutButton from './CheckoutButton'

function CheckoutPage(props) {
    const { cartItems, totalPrice } = props;
    return (

        <div className='checkout-page'>
            <header className='checkout-header'>
                <div className='header-block'>
                    <span>Product</span>
                </div>
                <div className='header-block'>
                    <span>Description</span>
                </div>
                <div className='header-block'>
                    <span>Quantity</span>
                </div>
                <div className='header-block'>
                    <span>Price</span>
                </div>
                <div className='header-block'>
                    <span>Remove</span>
                </div>
            </header>
            <div className='checkout-items'>
                {cartItems.map(item =>
                    <CheckoutItem key={item.id} item={item} />
                )}
            </div>
            <div className="total">
                <span>Total: {totalPrice}$</span>
            </div>
            <div className='test-card'>
                *Please use the following test credit card for payments*
                    <br />
                    4242 4242 4242 4242 - Exp: 1/29 - CVV: 123
        </div>
            <CheckoutButton price={totalPrice} />
        </div>
    )
}

function mapStateToProps(state) {
    return {
        cartItems: selectCartItems(state),
        totalPrice: selectCartItemsPrice(state)
    }
}

export default connect(mapStateToProps)(CheckoutPage)

// connect(null, mapStateToProps)