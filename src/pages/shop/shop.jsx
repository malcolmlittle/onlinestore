import React from "react";
import { PRODUCTS } from "../../products";
import { Product } from "./product";
// these imported styles will apply to this Shop component and child components like Product component in line 16
import "./shop.css"

export const Shop = () => {
    return (
        <div className="shop">
            <div className="shopTitle">
                <h1>Malcolm's Online Shop</h1>
            </div>
            <div className="products">
                {PRODUCTS.map((product) => (
                    // create a prop called data that will basically be the data that's passed down
                    <Product data={product}/>
                ))}
            </div>
        </div>
    );
}