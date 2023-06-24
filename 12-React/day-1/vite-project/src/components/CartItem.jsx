/* eslint-disable react/prop-types */
import React from "react";

const CartItem = (props) => {
  const { id, name, count } = props.product;

  const increment = () => {
    props.productCountIncrement(id);
  };

  const decrement = () => {
    props.productCountDecrement(id);
  };

  return (
    <>
      <section className=" w-80 flex flex-col justify-center items-center p-5 gap-8 text-4xl border-2 border-violet-400 rounded-2xl">
        <div className="w-25">{name}</div>
        <div className=" flex gap-5">
          <button onClick={decrement} className="p-2 bg-violet-400 rounded-full">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19.5 12h-15"
              />
            </svg>
          </button>
          <span>{count}</span>
          <button onClick={increment} className="p-2 bg-violet-400 rounded-full">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 4.5v15m7.5-7.5h-15"
              />
            </svg>
          </button>
        </div>
        <button onClick={() => props.resetProduct(id)} className="text-2xl bg-gray-400 rounded-2xl py-2 px-4">Reset</button>
        <button onClick={() => props.delProduct(id)} className="text-2xl bg-red-500 rounded-2xl py-2 px-4">Delete</button>
      </section>
    </>
  );
};

export default CartItem;
