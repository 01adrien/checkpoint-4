import React from "react";

export default function ChangeQuantity({ quantity, plus, minus }) {
  const className =
    "text-[1.6em] w-7 h-7  flex justify-center items-center rounded-full";
  return (
    <div className="flex w-[100px] justify-between md:relative md:left-72 items-center">
      <button onClick={() => plus()} className={className}>
        +
      </button>
      <p>{quantity}</p>
      <button onClick={() => minus()} className={className}>
        <span>-</span>
      </button>
    </div>
  );
}
