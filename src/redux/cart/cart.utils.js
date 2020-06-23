
// function that accepts the current cart and the added item
export const addItemToCart = (cartItem, addedItem) => {
    // checks to see if the item is already in the cartItems array 
    const itemExists = cartItem.find(item => item.id === addedItem.id);
    // if the item exists return
    if(itemExists){
        // goes through the array and finds the existing item that exists and increases the quantity 
        return cartItem.map(item =>  
            //if the item is found increase its quantity by 1, and spread its existing properties 
            // if not just add the item  
            item.id === addedItem.id ? {...item, quantity: item.quantity + 1}: item)
    }
    // if the item doesnt exist add it to the array with a quantity prop of 1 
    return [...cartItem, {...addedItem, quantity: 1}]
}

