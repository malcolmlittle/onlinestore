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

    // we then may want to add to cart so we can alter the value of the itemIDs
    const addToCart = (itemId) => {
        setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
    };
    
    // we then may want to subtract from cart so we can again alter the value of the itemIDs
    const removeFromCart = (itemId) => {
        setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
    };
    
    // create a context value that contains everything that we may want to access
    const contextValue = { cartItems, addToCart, removeFromCart }

    console.log(cartItems)

    // in App.js wrap our app in the shopContextProvider so that all components will have access to whatever value is passed
    return (
        <ShopContext.Provider value={contextValue}>
            {props.children}
        </ShopContext.Provider>
    )
};