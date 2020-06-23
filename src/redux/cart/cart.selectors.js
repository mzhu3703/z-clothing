import {createSelector} from 'reselect'
// Cart state cart: {cartItems: [], hidden: true or false }

// pulls out the cart state goes one level deep
const selectCart = state => state.cart

export const selectHidden = createSelector(
    [selectCart], cart => cart.hidden
)
// returns the cartItems from the cartState 
export const selectCartItems = createSelector(
    [selectCart], cart => cart.cartItems
)

// from the cartItems returns the sum of the quantities of the items 
export const selectCartItemsCount = createSelector(
    [selectCartItems], cartItems =>
    cartItems.reduce(function (acc, obj) { return acc + obj.quantity; }, 0)
)