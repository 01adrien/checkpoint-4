import React from "react";
import CardComponent from "./cardComponent";
import Button from "./button";
import StarRate from "./starRate";
import { Link } from "react-router-dom";

export default function ProductListItem({
  picture,
  price,
  name,
  rate,
  addProduct,
  id,
}) {
  return (
    <CardComponent
      style={"flex border-t-[1px] border-[#e8e5e5]  py-5 md:h-[250px]"}
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
        <Link to={`/products/${id}`}>
          <p>
            <span className="text-[grey] hover:underline">detail</span>
          </p>
        </Link>
        <p className="py-2">{price} ¥</p>
        <Button text={"add"} fn={addProduct} />
      </div>
    </CardComponent>
  );
}
