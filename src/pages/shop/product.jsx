import React, { useContext } from "react";
import { ShopContext } from "../../context/shop-context";

export const Product = (props) => {

    const { id, productName, price, productImage } = props.data;
    
    // this allows us to now access the addToCart function that we can apply to the button in this component
    const { addToCart, cartItems } = useContext(ShopContext);

    // this will give us the amount of specific product in our cart
    const cartItemAmount = cartItems[id]

    return (
        <div className="product">
            <img src={productImage} />
            <div className="description">
                <p>
                    <b>{productName}</b>
                </p>
                <p>${price}</p>
            </div>
            <button className="addToCartBttn" onClick={() => addToCart(id)}>Add To Cart {cartItemAmount > 0 && <> ({cartItemAmount}) </>}</button>
        </div>
    );
}