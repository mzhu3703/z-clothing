
// function that accepts the current cart and the added item
export const addItemToCart = (cartItem, addedItem) => {
    // checks to see if the item is already in the cartItems array 
    const itemExists = cartItem.find(item => item.id === addedItem.id);
    // if the item exists return
    if (itemExists) {
        // goes through the array and finds the existing item that exists and increases the quantity 
        return cartItem.map(item =>
            //if the item is found increase its quantity by 1, and spread its existing properties 
            // if not just add the item  
            item.id === addedItem.id ? { ...item, quantity: item.quantity + 1 } : item)
    }
    // if the item doesnt exist add it to the array with a quantity prop of 1 
    return [...cartItem, { ...addedItem, quantity: 1 }]
}

export const removeCartItem = (cartItem, removedItem) => {
    const cart = cartItem.filter(item => item.id !== removedItem.id);

    return cart;
}

export const increaseQuantity = (cartItem, increasedItem) => {
    // loop through the items and increase the quantity prop, if not equal just return the item array
    const cart = cartItem.map(item => item.id === increasedItem.id ? { ...item, quantity: item.quantity + 1 } : item)
    return cart;
}

export const decreaseQuantity = (cartItem, increasedItem) => {
    // find the item and decrease if it is greater than or less than 0
    const cart = cartItem.map(item => (item.id === increasedItem.id && item.quantity >= 1) ? { ...item, quantity: item.quantity - 1 } : item)
    return cart;
}
