import { CartActionTypes } from './cart.type'
import { addItemToCart, removeCartItem, increaseQuantity, decreaseQuantity } from './cart.utils'

const INITIAL_STATE = {
    hidden: true,
    cartItems: [],

}

const cartReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        // toggles the cart and sets the hidden state to its opposite 
        case CartActionTypes.TOGGLE_CART:
            return {
                ...state,
                hidden: !state.hidden
            };
        // adds item to cart 
        case CartActionTypes.ADD_ITEM:
            return {
                ...state,
                cartItems: addItemToCart(state.cartItems, action.payload)
            };
        case CartActionTypes.REMOVE_ITEM:
            return {
                ...state,
                cartItems: removeCartItem(state.cartItems, action.payload)
            }
        case CartActionTypes.INCREASE_QUANTITY:
            return {
                ...state,
                cartItems: increaseQuantity(state.cartItems, action.payload)
            }
        case CartActionTypes.DECREASE_QUANTITY:
            return {
                ...state,
                cartItems: decreaseQuantity(state.cartItems, action.payload)
            }
        default:
            return state
    }
}

export default cartReducer;