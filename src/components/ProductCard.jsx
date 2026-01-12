import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../features/productsSlice";

function ProductCard({ product }) {
  const { image, title, description, price,id } = product;
  const dispatch = useDispatch();
 
  

  const addCart = () => {
    dispatch(addToCart({...product}));
  };
  return (
    <li className="card bg-stone-50 text-stone-800  shadow-sm">
      <figure className="bg-blue-300 py-2">
        <img
          className="w-full h-[200px] object-contain"
          src={image}
          alt={title}
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p>
          {description.length > 150
            ? description.slice(0, 150) + "..."
            : description}
        </p>
        <div className="flex items-center justify-between">
          <span className="text-xl">${price}</span>
          <button onClick={addCart} className="btn btn-primary">
            Add cart
          </button>
        </div>
      </div>
    </li>
  );
}

export default ProductCard;
