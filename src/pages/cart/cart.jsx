import React, { useContext } from "react";
import { PRODUCTS } from "../../products";
import { ShopContext } from "../../context/shop-context";
import { CartItem } from "./cart-item";
import "./cart.css";

export const Cart = () => {

    const { cartItems, getTotalCartAmount } = useContext(ShopContext);
    const totalAmount = getTotalCartAmount()

    return (
        <div className="cart">
            <div>
                <h1>Your Cart Items</h1>
            </div>
            <div className="cartItems">
                {PRODUCTS.map((product) => {
                    // only display the items from the products array that are also in our cart
                    // if the cartItems object with the key equal to the product's id has a value greater than zero
                    // this means that this product is in the cart
                    if (cartItems[product.id] !== 0) {
                        return <CartItem data={product} />
                    }
                })}
            </div>

            <div className="checkout">
                <p> Subtotal: ${totalAmount}</p>
                <button> Continue Shopping </button>
                <button> Checkout </button>
            </div>
        </div>
    );
}