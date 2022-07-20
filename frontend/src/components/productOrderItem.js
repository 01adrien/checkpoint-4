import React from "react";
import CardComponent from "./cardComponent";
import Button from "./button";
import StarRate from "./starRate";
import ChangeQuantity from "./changeQuantity";
import { Link } from "react-router-dom";
export default function ProductOrderItem({
  picture,
  price,
  name,
  rate,
  removeProduct,
  quantity,
  plus,
  minus,
}) {
  return (
    <CardComponent
      style={
        "flex border-t-[1px] border-[#e8e5e5] h-[280px]  py-5 md:h-[250px]"
      }
    >
      <img
        className="w-[120px] h-[150px] md:h-[180px] md:w-[150px] mr-20"
        src={picture}
        alt={name}
      />
      <div className="flex flex-col justify-around">
        <div className="md:flex items-center md:h-[50px]">
          <p>{name.slice(0, 20)}</p>
          <StarRate rate={rate} />
        </div>
        <p>
          <Link to="/">
            <span className="text-[grey] hover:underline">detail</span>
          </Link>
        </p>
        <p className="py-2 text-xl">{price} ¥</p>
        <ChangeQuantity quantity={quantity} plus={plus} minus={minus} />
        <Button text={"remove"} fn={removeProduct} />
      </div>
    </CardComponent>
  );
}
