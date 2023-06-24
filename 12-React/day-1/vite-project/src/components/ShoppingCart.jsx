/* eslint-disable react/prop-types */
import React from "react";
import CartItem from "./CartItem";

const ShoppingCart = (props) => {
  return (
    <div className="h-3/4 p-5 text-center">
      <h1 className="text-3xl italic">Your Fruit Quantities</h1>
      <div className="h-full flex justify-center items-center gap-10">
        {props.products.length === 0 && (
          <h1 className=" text-3xl italic">There's no items in your cart!</h1>
        )}
        {props.products.map((product) => (
          <CartItem
            key={product.id}
            product={product}
            productCountIncrement={props.productCountIncrement}
            productCountDecrement={props.productCountDecrement}
            resetProduct={props.resetProduct}
            delProduct={props.delProduct}
          />
        ))}
      </div>
      <button
        className=" bg-violet-400 p-4 rounded-2xl text-xl"
        onClick={() => props.resetAllProducts()}
      >
        Reset All
      </button>
    </div>
  );
};

export default ShoppingCart;
