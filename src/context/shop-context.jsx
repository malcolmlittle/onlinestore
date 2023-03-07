// React Context is a way to manage state globally.
// in this component we will define our states and everyting that is related to logic in our project

import React, { createContext, useState } from "react";
import { PRODUCTS } from "../products";

// this will keep track of states and functions that need to be access everywhere in our project
// the goal is to be able to have a state that can be accessed and changed in the shop as well as the cart
// this will help facilitate accessing the state on both of those components
export const ShopContext = createContext(null);

// this will allow us to get the default object state of our cart that we can use to pass thru to the context
const getDefaultCart = () => {
    let cart = {};
    for (let i = 1; i < PRODUCTS.length + 1; i++) {
        cart[i] = 0;
    }
    return cart
};

export const ShopContextProvider = (props) => {

    const [cartItems, setCartItems] = useState(getDefaultCart());

    const getTotalCartAmount = () => {
        let totalAmount = 0;
        // loop thru every item in the cartItems object, see that the values are greater than zero
        // if item is in the cart get the value and multiply by specific price of that product and add that to totalAmount
        for (const item in cartItems) {
            if (cartItems[item] > 0) {
                let itemInfo = PRODUCTS.find((product) => product.id === Number(item));
                totalAmount += cartItems[item] * itemInfo.price;
            }
        }

        return totalAmount
    };

    // we then may want to add to cart so we can alter the value of the itemIDs
    const addToCart = (itemId) => {
        setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
    };
    
    // we then may want to subtract from cart so we can again alter the value of the itemIDs
    const removeFromCart = (itemId) => {
        setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
    };

    // function that allows us to manually change the actual value of a specific product count in the cart items
    const updateCartItemCount = (newAmount, itemId) => {
        setCartItems((prev) => ({ ...prev, [itemId]: newAmount }));
    }
    
    // create a context value that contains everything that we may want to access
    const contextValue = { cartItems, addToCart, removeFromCart, updateCartItemCount, getTotalCartAmount }

    // in App.js wrap our app in the shopContextProvider so that all components will have access to whatever value is passed
    return (
        <ShopContext.Provider value={contextValue}>
            {props.children}
        </ShopContext.Provider>
    )
};